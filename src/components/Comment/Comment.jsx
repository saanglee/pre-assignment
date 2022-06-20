import React, { useState, useRef } from 'react';

import styles from './comment.module.scss';

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
    <section className={styles.Comment} onKeyPress={handleKeyPress}>
      <input
        type="text"
        value={comment}
        onChange={handleChangeState}
        placeholder="댓글 달기..."
      />
      <button onClick={handleSubmit}>게시</button>
    </section>
  );
};

export default Comment;
