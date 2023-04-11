import React from 'react';

import categories from '../../data/data';
import Directory from '../../components/directory/directory';

const Home = () => {
  return (
    <div>
        <Directory categories={categories} />
    </div>
  );
};

export default Home;