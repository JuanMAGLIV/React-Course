import {useState} from 'react';
import './App.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// Main view
function App() {
  // Memory space for handle categories
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

  const onNewCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  } 

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory 
        onNewCategory={onNewCategory}>

      </AddCategory>

      {/* List items */}
      
      {categories.map(category => {
        return <GifGrid key={category} category={category}></GifGrid>
      })}
    
        {/* Gif item */}
    </>
  );
}

export default App;
