
import categories from './data/data';
import Directory from './components/directory/directory';

const App = () => {
  return (
    <Directory categories={categories} />
  );
};

export default App;
