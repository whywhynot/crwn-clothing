import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview' />
    {items
      .filter((item, idx) => {
        return idx < 4;
      })
      .map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
  </div>
);

export default CollectionPreview;
