import styled, { css } from 'styled-components';

interface DarkmodeProps {
    darkmode: boolean;
}

export const Container = styled.div`
    position: absolute;
    right: 23%;
    top: 0;
`;

export const Button = styled.button<DarkmodeProps>`
    position: relative;
    right: 10%;

    width: 50px;
    height: 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    outline: none;
    border: 3px solid #ccc;
    z-index: 1;

    ${({ darkmode }) => darkmode && css`
        background-color: #271052;
        border: 3px solid #3C1E70;
    `};
`;

export const Span = styled.span<DarkmodeProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -8px;
    left: -4px;
    z-index: 1000;

    width: 30px;
    height: 30px;
    border-radius: 50%;

    background-color: #2F363D;
    transition: 0.15s transform;

    ${({ darkmode }) => darkmode && css`
        background-color: #6E40C9;
        transform: translateX(30px) ;
    `};

    svg {
        width: 15px;
        height: 15px;
        color: #FFDF5D;
    }
`;