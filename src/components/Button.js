import { useState } from 'react';


function Button() {
    const [SongForm] = useState([]);

        const removeElement = (item) => {
            const newSonglist = this.props.songs.filter((_, i) => i !== item);
            SongForm(newSonglist);
        };
    return(
        <button onClick={removeElement}>Remove</button>             
    )
}
export default Button