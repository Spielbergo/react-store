import React from 'react';

import DirectoryItem from '../directory-item/directory-item-component';
import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
      route: 'shop/hats',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.insider.com/631f5256e8b500001850d09a?width=1000&format=jpeg&auto=webp',
      route: 'shop/jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2021/09/shoes-1.jpg?quality=75&strip=all',
      route: 'shop/sneakers',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0441/3580/9179/files/Fall_ClothesMentor_ShopOnline_bf6137e1-379d-4e19-bb6c-7b96888e6918.jpg?v=1664891185',
      route: 'shop/womens',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://www.dmarge.com/wp-content/uploads/2021/10/menswear-brands.jpg',
      route: 'shop/mens',
    }
  ]

const Directory = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => 
                <DirectoryItem key={category.id} category={category} />
            )}
        </div>
    )
}

export default Directory