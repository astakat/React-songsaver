import React from "react";
import DeleteButton from "./DeleteButton";

function Song({ item, removeSong }) {
  return (
    <tbody>
      <tr>
        <td>
          {item.id} {item.title}
        </td>
        <td>{item.artist}</td>
        <td>{item.genre}</td>
        <td>{item.rating}</td>
        <td>
          <DeleteButton item={item} removeSong={removeSong} />
        </td>
      </tr>
    </tbody>
  );
}

export default Song;
