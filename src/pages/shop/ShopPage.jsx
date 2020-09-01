import React, { Component } from 'react';
import {SHOP_DATA}  from './shopdata';
import CollectionPreview from '../../components/previewcollection/CollectionPreview';

class ShopPage extends Component {

  state ={
    collections: SHOP_DATA ,
  }
  render() {
    const {collections} =this.state;
    return (
      <div className="shop-page">
      {
        collections.map( ({id , ...otherCollection}) => (
          <CollectionPreview  key={id} {...otherCollection}/>
        ))
      }
      </div>
    )
  }
}

export default ShopPage;
