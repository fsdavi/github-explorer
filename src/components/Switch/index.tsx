import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Button, Span, Container } from './style';

const Switch = () => {
    const [active, setActive] = useState(false);

    const handleChangeDarkMode = () => {
        setActive(!active);
    };

    return (
        <Container>
            <Button onClick={handleChangeDarkMode}>
                <Span darkmode={active}>
                    {active &&
                        <FiMoon />
                    }
                    {!active &&
                        <FiSun />
                    }
                </Span>
            </Button>
        </Container>
    );
};

export default Switch;