import React from 'react';
import styles from './comment.module.scss';

const CommentList = ({ commentList, onRemove }) => {
  return (
    <div className={styles.CommentList}>
      <p>댓글 {commentList.length}개</p>
      {commentList.map((item) => (
        <ul key={item.id}>
          <li>{item.comment}</li>
          <button
            onClick={() => {
              if (window.confirm('댓글을 삭제하시겠습니까?')) {
                onRemove(item.id);
              }
            }}
          >
            삭제
          </button>
        </ul>
      ))}
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
};

export default CommentList;
