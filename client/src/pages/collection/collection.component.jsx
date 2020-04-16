import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItems,
    CollectionItemContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItems>
                {items.map((item) => (
                    <CollectionItemContainer key={item.id} item={item} />
                ))}
            </CollectionItems>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
