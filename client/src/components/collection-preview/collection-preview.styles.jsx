import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (min-width: 800px) {
        align-items: unset;
    }
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    justify-content: space-between;

    @media screen and (min-width: 800px) {
        display: flex;
    }
`;
