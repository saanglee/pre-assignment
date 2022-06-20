import React from 'react';
import './CommentList.css';

const CommentList = ({ commentList, onRemove }) => {
  // FIXME: 삭제가 안됨
  const handleClick = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onRemove(id);
    }
  };

  return (
    <div className="CommentList">
      <p>댓글 {commentList.length}개</p>
      {commentList.map((item) => (
        <ul key={item.id}>
          <li>{item.comment}</li>
          <button onClick={handleClick}>삭제</button>
        </ul>
      ))}
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
};

export default CommentList;
