import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';


class SongCompilation extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = 
        {
          songs: [
            {id: 1, title: "I would die for you"}
        ]
        }
    
      }
    
      addSong = (song) => {
                            // do something to change the state
      }
    
      render() {
        return (
          <div>
                  <SongForm addSong={this.addSong}/>
                                            <table style={{width: "100%"}}>
                            <tr className="song-header">  
                                    <th className="song-row__item">Song</th>
                                    <th className="song-row__item">Artist</th>
                                    <th className="song-row__item">Genre</th>
                                    <th className="song-row__item">Rating</th>
                                  </tr>
                                    </table>
                  <SongList songs={this.state.songs}/>
          </div>
        );
      }
    }

    

export default SongCompilation;