import React, {useState} from 'react'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            field: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({field: event.target.value});
    } 

    render() {
       
        return (
          <form>
            <label>
              Add a song:
              <input type="text" value={this.state.field} onChange={this.handleChange} />
            </label>
            <input type ="submit" value = "Add"/>
          </form>
        );
      }
}

export default SongForm;
