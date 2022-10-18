import React, {useEffect, useState} from 'react'
import { getGift } from '../helpers/getGifs'
import GifGridItem from './GifGridItem';


export default function GifGrid({ category }) {

  const [gifs, setGifs] = useState([]);
  // Event trigered when specifical thing changes
  // [] when the component was build

  const getImages = async () => {
    const newGifs = await getGift(category);
    setGifs(newGifs);
  }
  
  useEffect(() => {
    getImages();
  }, []);


  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          gifs.map(gif => (
            <GifGridItem key={gif.id} {...gif}></GifGridItem>
          ))
        }
      </div>
      
    </>
  )
}
