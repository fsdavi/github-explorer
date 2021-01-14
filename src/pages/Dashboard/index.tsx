import React, { FormEvent, useState } from 'react';
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
    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                (<a key={repository.full_name} href="test">
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>)
                )}
            </Repositories>
        </>
    );
}

export default Dashboard;