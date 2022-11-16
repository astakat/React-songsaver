import React from 'react';
import Button from "./Button"

function Song({item}) {
    console.log("item", item);
    return(
        <ul>
            <div>
                {item.id} 
                {item.title} 
                {item.artist} 
                {item.genre} 
                {item.rating}
                <Button/>
            </div> 
            
            
        </ul>
    )
}


export default Song;