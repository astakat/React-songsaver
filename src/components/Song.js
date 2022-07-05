import React from 'react';

function Song({item}) {
    return(
        <li
        key={item.id}
        value={item.title}
        >
            <div>{item.title}</div>
        </li>
    )
}


export default Song;