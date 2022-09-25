import React from 'react';

function Song({item}) {
    return(
        <li>
            <div>{item.id} {item.title} {item.artist}</div>
        </li>
    )
}


export default Song;