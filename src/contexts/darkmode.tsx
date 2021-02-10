import React, { createContext, useState } from 'react';

interface DarkModeContext {
    activated: boolean;
    theme: string;
    handleChangeActivated(): void;
}

const DarkModeContext = createContext<DarkModeContext>({} as DarkModeContext);

export const DarkModeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('@github_explorer/theme') as string);
    const [activated, setActivated] = useState(() => {
        return localStorage.getItem('@github_explorer/theme') === 'dark'
            ? true
            : false
    });

    const handleChangeTheme = (activated: boolean) => {
        if (!activated) {
            setTheme('light');
            localStorage.setItem('@github_explorer/theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('@sicon-app/theme', 'dark');
        }
    };

    const handleChangeActivated = () => {
        setActivated(!activated);
        handleChangeTheme(!activated);
    };

    return (
        <DarkModeContext.Provider value={{
            activated,
            theme,
            handleChangeActivated
        }}>
            { children}
        </DarkModeContext.Provider>
    );
}