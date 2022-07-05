import React from 'react';
import Song from "./Song";

class SongList extends React.Component {

    render() {
      return (
        <div>
          <ul>
            {this.props.songs.map((item) => ( 
              <Song 
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        </div>
        ); 
    }
} 

export default SongList;
