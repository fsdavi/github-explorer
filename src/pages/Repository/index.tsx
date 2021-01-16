import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg'

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                Voltar
            </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src={logoImg} alt="Owner" />
                    <div>
                        <strong>
                            {params.repository}
                        </strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>
                            1808
                        </strong>
                        <span>
                            Stars
                        </span>
                    </li>
                    <li>
                        <strong>
                            48
                        </strong>
                        <span>
                            Forks
                        </span>
                    </li>
                    <li>
                        <strong>
                            67
                        </strong>
                        <span>
                            Issues
                        </span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
            <Link to={`/repositories/`}>
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

export default Repository;