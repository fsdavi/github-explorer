import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form>
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="test">
                    <img src="https://avatars1.githubusercontent.com/u/57576938?s=460&u=821f209d59f35fc3621cac5178f530624e6a38ae&v=4" alt="Davi Freire" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>ushdauhsu aushdeauhsduahs aushduasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="test">
                    <img src="https://avatars1.githubusercontent.com/u/57576938?s=460&u=821f209d59f35fc3621cac5178f530624e6a38ae&v=4" alt="Davi Freire" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>ushdauhsu aushdeauhsduahs aushduasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="test">
                    <img src="https://avatars1.githubusercontent.com/u/57576938?s=460&u=821f209d59f35fc3621cac5178f530624e6a38ae&v=4" alt="Davi Freire" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>ushdauhsu aushdeauhsduahs aushduasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="test">
                    <img src="https://avatars1.githubusercontent.com/u/57576938?s=460&u=821f209d59f35fc3621cac5178f530624e6a38ae&v=4" alt="Davi Freire" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>ushdauhsu aushdeauhsduahs aushduasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;