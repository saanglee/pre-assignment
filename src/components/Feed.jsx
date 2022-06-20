import React, { useState, useRef } from 'react';
import './Feed.css';

import { BookMarkIcon } from '../assets/index.js';
import { CommentIcon } from '../assets/index.js';
import { DotsIcon } from '../assets/index.js';
import { LikeIcon } from '../assets/index.js';
import { ShareIcon } from '../assets/index.js';
import { SmileIcon } from '../assets/index.js';

import Comment from './Comment';
import CommentList from './CommentList';

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
  console.log(comments.id);

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
    <article className="Feed">
      <header className="feed_header">
        <div className="profile_wrapper">
          <span className="profile_img"></span>
          <span className="profile_name">{name}</span>
        </div>
        <div>...</div>
      </header>

      <section>
        {img}
        <img src="" alt="" />
      </section>
      <div className="feed_menus">
        {/* TODO: icon 넣기 */}
        <div>like, comment, share</div>
        <div className="icons">{bookMarkIcon}</div>
      </div>
      <section className="feed_content">
        <div>좋아요 0개</div>
        <span className="profile_name">{name}</span>
        <span className="content">{content}</span>
      </section>
      <section>
        <CommentList commentList={comments} onRemove={onRemove} />
      </section>
      <Comment onCreate={onCreate} />
    </article>
  );
};

export default Feed;
