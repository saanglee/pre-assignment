import React, { useState, useRef } from 'react';

const Comment = ({ onCreate }) => {
  const commentInput = useRef();
  const [comment, setComment] = useState('');

  const handleChangeState = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    if (comment.length < 1) {
      commentInput.current.focus();
      return;
    }
    onCreate(comment);
    setComment('');
  };
  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section className="feed_input_comment" onKeyPress={handleKeyPress}>
      <input
        type="text"
        value={comment}
        onChange={handleChangeState}
        placeholder="댓글 달기..."
      />
      <button className="comment_btn" onClick={handleSubmit}>
        게시
      </button>
    </section>
  );
};

export default Comment;
