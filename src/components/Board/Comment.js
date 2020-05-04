import React, { Component } from "react";
import "../../App.css";
import CommentList from "./CommentList";

export class Comment extends Component {
  constructor() {
    super();
    this.updateInput = this.updateInput.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      comments: [],
      newComment: {
        id: 0,
        text: "",
      },
    };
  }

  updateInput = (e) => {
    this.setState({
      newComment: {
        id: 1 + Math.random(),
        text: e.target.value,
      },
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const currentComment = this.state.newComment;
    if (currentComment.text !== "") {
      const comments = [...this.state.comments, currentComment];
      console.log(this.state.comments);
      this.setState({
        comments,
        newComment: {
          id: 0,
          text: "",
        },
      });
    }
  };

  render() {
    return (
      <div>
        {/* new comment section */}
        <form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-1.5"></div>
              <div className="col-12">
                <textarea
                  id="commentSection"
                  row="5"
                  col="30"
                  placeholder="Write your comment..."
                  onChange={this.updateInput}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-9"></div>
              <div className="col-3">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  style={{ marginTop: "-20px" }}
                  onClick={this.addComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* list of comments */}
        <div id="listComment">
          <CommentList comments={this.state.comments}></CommentList>
        </div>
      </div>
    );
  }
}

export default Comment;
