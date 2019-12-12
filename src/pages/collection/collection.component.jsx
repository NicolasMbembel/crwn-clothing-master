import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';


import './collection.styles.scss';

const CollectionPage=({collection})=>(
    <div className='collection-page'>
        <h2>CATEGORY PAGE</h2>
    </div>
);

const mapStateToProps=(state,ownprops)=>({
    collection:selectCollection(ownprops.match.params.collectionID)(state)
});

export default connect (mapStateToProps)(CollectionPage);

