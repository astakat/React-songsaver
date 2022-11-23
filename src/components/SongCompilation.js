import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';


class SongCompilation extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = 
        {
          songs: [
            {id: 1,
              title: "I would die for you",
              artist: "Prince",
              genre: "funky pop music",
              rating: "*****"},
              {id: 2,
              title: "4US",
              artist: "Doe Maar",
              genre: "Nederpop",
              rating: "*****"}
        ]
        }
        this.removeSong = this.removeSong.bind(this);
      }

      addSong = (song) => {
        
          console.log("adding song...", song)

          const newSong = {
            id: this.state.songs.length+1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
          }

          this.setState(prevState => ({
            songs: [...this.state.songs, newSong]
          }
          ))

      
        
      }
      
      removeSong = (song) => {
        
        console.log("removeSong", song)
    
            this.setState(prevState => ({
              songs: this.state.songs.filter(function(item) { 
              return item.id !== song.id 
          })}));
              
      }    

    
      render() {
        return (
          <div>
                  <SongForm addSong={this.addSong}/>
                  <SongList songs={this.state.songs} removeSong={this.removeSong}/>
          </div>
        );
      }
    }

    

export default SongCompilation;