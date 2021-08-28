
import React from 'react'
import MediaCard from './Cards'
import Navbar from './Navbar'
import Docker from './Docker'

function Discovery() {
    return (
        <>
        
        <Navbar/>
        <div className="discovery">
           <MediaCard/> 
           <MediaCard/> 
           <MediaCard/> 
           <MediaCard/> 
           <MediaCard/> 
           <MediaCard/> 
        </div>
        <Docker/> 
        </>
    )
}

export default Discovery
