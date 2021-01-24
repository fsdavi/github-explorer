import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Switch = () => {
    const [ativado, setAtivado] = useState(false);

    return (
        <>
            <button>
                {!ativado &&
                    <span>
                        <FiSun />
                    </span>

                }
            </button>
        </>
    );
};

export default Switch;