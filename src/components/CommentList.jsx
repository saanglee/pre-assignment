import React from 'react';
import './CommentList.css';

const CommentList = ({ commentList }) => {
  return (
    <div className="CommentList">
      {commentList.map((item) => (
        <ul key={item.id}>
          <li>{item.comment}</li>
        </ul>
      ))}
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
};

export default CommentList;
