import React from "react";
import Song from "./Song";

class SongList extends React.Component {
  render() {
    return (
      <table className="song-list" style={{ width: "100%" }}>
        <tbody>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item"></th>
          </tr>
        </tbody>

        {this.props.songs.map((item) => (
          <Song key={item.id} item={item} removeSong={this.props.removeSong} />
        ))}
      </table>
    );
  }
}

export default SongList;
