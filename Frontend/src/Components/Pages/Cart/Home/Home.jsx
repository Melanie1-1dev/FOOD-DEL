import React, { useState } from 'react'
import './Home.css'
import Header from '../../../Header/Header'
import ExploreMenu from '../../../Exploremenu/Exploremenu'
import FoodDisplay from '../../../FoodDisplay/FoodDisplay'
const Home = () => {
const All="All items";
    const [category,setCategory] = useState("All");
  return (
    <div className='home'>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        
    </div>
  )
}

export default Home
