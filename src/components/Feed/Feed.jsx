import React, { useState, useRef } from 'react';

import { BookMarkIcon } from '../../assets/index.js';
import { CommentIcon } from '../../assets/index.js';
import { DotsIcon } from '../../assets/index.js';
import { LikeIcon } from '../../assets/index.js';
import { ShareIcon } from '../../assets/index.js';
import { SmileIcon } from '../../assets/index.js';

import Comment from '../Comment/Comment';
import CommentList from '../Comment/CommentList';

import styles from './feed.module.scss';

const Feed = ({ id, name, img, content }) => {
  const commentId = useRef(0);
  const [comments, setComments] = useState([]);

  const onCreate = (comment) => {
    const newItem = {
      comment,
      id: commentId.current,
    };
    commentId.current += 1;
    setComments([...comments, newItem]);
  };

  const onRemove = (targetId) => {
    const newCommentList = comments.filter((item) => item.id !== targetId);
    setComments(newCommentList);
  };

  const bookMarkIcon = <BookMarkIcon />;
  const commentIcon = <CommentIcon />;
  const dotsIcon = <DotsIcon />;
  const likeIcon = <LikeIcon />;
  const shareIcon = <ShareIcon />;
  const smileIcon = <SmileIcon />;

  return (
    <article className={styles.Feed}>
      <header className={styles.feed_header}>
        <div className={styles.profile_wrapper}>
          <span className={styles.profile_img}></span>
          <span className={styles.profile_name}>{name}</span>
        </div>
        <div>...</div>
      </header>

      <section>
        {/* TODO: 피드 이미지 넣기  */}
        <img src={`${process.env.PUBLIC_URL}/${img}`} alt="" />
      </section>
      <div className={styles.feed_menus}>
        {/* TODO: icon 넣기 */}
        <div>like, comment, share</div>
        <div className={styles.icons}>{bookMarkIcon}</div>
      </div>
      <section className={styles.feed_content}>
        <div>좋아요 0개</div>
        <span className={styles.profile_name}>{name}</span>
        <span className={styles.content}>{content}</span>
      </section>
      <section>
        <CommentList commentList={comments} onRemove={onRemove} />
      </section>
      <Comment onCreate={onCreate} />
    </article>
  );
};

export default Feed;
