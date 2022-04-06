import React from 'react'
import Categories from '../Components/Categories';
import Title from './../Components/Title';
import MenuItems from './../Components/MenuItems';
import portfolios from './../Components/allportfolios';
import {useState} from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]
function Portfolio() {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems,setMenuItems]= useState(portfolios)

  const filter= (category) =>{
    if (category ==='All'){
      setMenuItems(portfolios)
      return;
    }
    const filteredData =portfolios.filter((item)=>{
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <div className='PortfolioPage'>
        <div className='Title'>
            <Title title={'My Portfolio'} span={'My Portfolio'} />
        </div>
        <div className='Portfolio-data'>
            <Categories filter={filter} categories={categories} />
            <MenuItems menuItems={menuItems} />
        </div>

    </div>
  )
}

export default Portfolio