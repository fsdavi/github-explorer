import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Button, Span, Container } from './style';
import { DarkModeContext } from '../../contexts/darkmode';

const Switch = () => {
    const { activated, handleChangeActivated } = useContext(DarkModeContext);

    return (
        <Container>
            <Button onClick={handleChangeActivated} darkmode={activated}>
                <Span darkmode={activated}>
                    {activated &&
                        <FiMoon />
                    }
                    {!activated &&
                        <FiSun />
                    }
                </Span>
            </Button>
        </Container>
    );
};

export default Switch;