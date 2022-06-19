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

const Feed = () => {
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
          <p className="profile_img"></p>
          <p className="profile_name">name</p>
        </div>
        <div>...</div>
      </header>

      <section>
        <img src="" alt="" />
      </section>
      <section>
        <div className="content">content</div>
      </section>
      <section>
        <div className="feed_menus">
          {/* TODO: icon 넣기 */}
          {/* <div className="icons">{commentIcon}</div> */}
          <div>like, comment, share</div>
          <div className="icons">{bookMarkIcon}</div>
        </div>
        <div className="feed_likes">좋아요 0개</div>
        <CommentList commentList={comments} />
      </section>
      <Comment onCreate={onCreate} />
    </article>
  );
};

export default Feed;
