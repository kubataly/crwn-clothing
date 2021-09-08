import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {items.map(
                <div key={items.id}>{items.name}</div>
            )}
        </div>
    </div>
)

export default CollectionPreview;