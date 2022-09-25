import React, {useState} from 'react'


class SongForm extends React.Component{

    constructor(props){
      console.log("song form props:",props)
        super(props)
        this.state = {
            title: "",
            artist: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }



    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    } 

     handleSubmit(event) {

      console.log('handleSubmit: ', event);

      let song = {title: event.target.title.value, artist: event.target.artist.value};
      console.log(song)
      event.preventDefault();

      this.props.addSong(song);
     
    } 

    render() {
       
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Add a song:
              <input 
              type="text" 
              name="title"
              placeholder="song title here"
              value={this.state.title} 
              onChange={this.handleChange} />
              Add an artist:
              <input 
              type="text" 
              name="artist"
              placeholder="artist name here"
              value={this.state.artist} 
              onChange={this.handleChange} />
            </label>
            <input type ="submit" value = "Add" />
            <h1>{this.state.title} {this.state.artist}</h1>
          </form>
        );
      }
}

export default SongForm;
