import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px;

    @media screen and (min-width: 800px) {
        height: 70px;
        margin-bottom: 25px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;

    @media screen and (min-width: 800px) {
        width: 75px;
        padding: 10px;
    }
`;

export const OptionsContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 800px;) {
        width: 50%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
`;
