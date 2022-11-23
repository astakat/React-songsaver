import React from "react";

class DeleteButton extends React.Component {
  removeSong() {
    this.props.removeSong(this.props.item);
  }
  render() {
    return (
      <button
        className="button"
        onClick={() => {
          this.removeSong();
        }}
      >
        Remove
      </button>
    );
  }
}

export default DeleteButton;
