import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import GlobalStyle from './styles/global';
import { DarkModeContext } from './contexts/darkmode';

const App: React.FC = () => {
  const { activated } = useContext(DarkModeContext);

  return (<>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle darkMode={activated} />
  </>);
};

export default App;