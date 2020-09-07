import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/CollectionItem';

 const CollectionPreview = ({items , title}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item , idx) => idx < 4 ) 
        .map( ({id , ...otherItem}) => (
          <CollectionItem key={id} {...otherItem} /> 
        )) }
    </div>
    </div>
  )
}

export default CollectionPreview;