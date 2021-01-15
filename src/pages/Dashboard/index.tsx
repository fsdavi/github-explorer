import React, { FormEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/Logo.svg';

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;

    };
    description: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories])

    const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form onSubmit={handleAddRepository}
                hasError={!!inputError}
            >
                <input type="text" placeholder="Digite o nome do repositório"
                    value={newRepo}
                    onChange={(event) => {
                        setNewRepo(event.target.value);
                        console.log(newRepo);
                    }}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError !== '' && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map(repository =>
                (<Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>)
                )}
            </Repositories>
        </>
    );
}

export default Dashboard;