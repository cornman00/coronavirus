import React, { Component } from "react";
import "../../App.css";
import Comment from "./Comment";

export class BoardMain extends Component {
  render() {
    return (
      <div className="board-group">
        <Comment />;
      </div>
    );
  }
}

export default BoardMain;
