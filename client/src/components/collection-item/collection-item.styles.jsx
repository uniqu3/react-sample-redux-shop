import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        button {
            display: flex;
        }
    }

    @media screen and (min-width: 800px) {
        width: 22vw;
        &:hover {
            .image {
                opacity: 0.8;
            }

            button {
                opacity: 0.85;
            }
        }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    position: absolute;
    top: 255px;
    min-width: unset;
    opacity: 0.95;

    @media screen and (min-width: 800px) {
        display: none;
        opacity: 0.7;
        padding: 0 10px 0 10px;
        min-width: 165px;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;
