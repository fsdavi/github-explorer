import styled, { css } from 'styled-components';

interface DarkmodeProps {
    darkmode: boolean;
}

export const Container = styled.div`
    position: absolute;
    right: 23%;
    top: 0;
`;

export const Button = styled.button`
    position: relative;
    right: 10%;

    width: 50px;
    height: 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
    outline: none;
    border: none;
    z-index: 1;
`;

export const Span = styled.span<DarkmodeProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -4px;
    left: -4px;
    z-index: 1000;

    width: 30px;
    height: 30px;
    border-radius: 50%;

    background-color: #fff;
    transition: 1s transform;

    ${({ darkmode }) => darkmode && css`
        transform: translateX(30px) ;
    `};
`;