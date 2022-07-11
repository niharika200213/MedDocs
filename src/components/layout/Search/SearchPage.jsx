import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchDoc } from '../../../services/search';
import CardDoc from '../CardDoc/CardDoc';
const SearchPage = (props) => {
    let location = useLocation()
    useEffect(()=>{
        console.log(location.state);
    },[])
  return (
    <>
        {location.state.length!==0?location.state.map(x=>{
            return <CardDoc state={location.state[0]}/>
        }):<h1>No such records found</h1>}
    </>
  )
}

export default SearchPage