import React, { useState, useRef, useMemo } from 'react';

import {
  BookMarkIcon,
  CommentIcon,
  DotsIcon,
  LikeIcon,
  ShareIcon,
} from '../../assets/index.js';
import Comment from '../Comment/Comment';
import CommentList from '../Comment/CommentList';
import Image from '../Image.jsx';

import styles from './feed.module.scss';
import store from 'store';

const Feed = ({ name, image, content }) => {
  const commentId = useRef(0);
  const wordLimit = useRef(30);

  const [comments, setComments] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  const bookMarkIcon = <BookMarkIcon />;
  const commentIcon = <CommentIcon />;
  const dotsIcon = <DotsIcon />;
  const likeIcon = <LikeIcon />;
  const shareIcon = <ShareIcon />;

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

  const ShowMoreContent = useMemo(() => {
    const LessContent = content.slice(0, wordLimit.current);
    if (content.length > wordLimit.current) {
      if (isShowMore) {
        return content;
      }
      return LessContent;
    }
    return content;
  }, [isShowMore]);

  return (
    <article className={styles.Feed}>
      <header className={styles.feed_header}>
        <div className={styles.profile_wrapper}>
          <span className={styles.profile_img}></span>
          <span className={styles.name}>{name}</span>
        </div>
        <span className={styles.icon}>{dotsIcon}</span>
      </header>

      <section className={styles.image_wrapper}>
        <Image src={image} className={styles.image} />
      </section>

      <section className={styles.contents}>
        <div className={styles.icons_wrapper}>
          <div className={styles.icons}>
            <span className={styles.icon}>{likeIcon}</span>
            <span className={styles.icon}>{commentIcon}</span>
            <span className={styles.icon}>{shareIcon}</span>
          </div>
          <span className={styles.bookmark}>{bookMarkIcon}</span>
        </div>
        <span className={styles.likes}>좋아요 0개</span>
        <section className={styles.content}>
          <span className={styles.name}>{name}</span>
          <span>{ShowMoreContent}</span>
          <button
            onClick={() => setIsShowMore((current) => !current)}
            className={styles.content_btn}
          >
            {content.length > wordLimit.current &&
              (isShowMore ? '[간략하게]' : '...더 보기')}
          </button>
        </section>
      </section>
      <CommentList commentList={comments} onRemove={onRemove} />
      <Comment onCreate={onCreate} />
    </article>
  );
};

export default Feed;
