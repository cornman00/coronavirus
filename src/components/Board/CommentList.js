import React from "react";
import "../../App.css";

export default function CommentList(props) {
  const comments = props.comments;
  const commentsList = comments.map(elem => {
    return (
      <div className="commentBox" key="elem.id">
        <p>{elem.text}</p>
      </div>
    );
  });
  return <div>{commentsList}</div>;
}
