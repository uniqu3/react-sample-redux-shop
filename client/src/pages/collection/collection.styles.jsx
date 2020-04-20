import styled from 'styled-components';
import CollectionItem from '../../components/collection-item/collection-item.component';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemContainer = styled(CollectionItem)`
    margin-bottom: 30px;
`;

CollectionItemContainer.displayName = 'CollectionItemContainer';

export const CollectionItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    & > div {
        margin-bottom: 30px;
    }
    @media screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;

CollectionItemsContainer.displayName = 'CollectionItemsContainer';
