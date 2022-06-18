import React, { useState } from 'react';
import './Cards.css';

import { BookMarkIcon } from '../assets/index.js';
import { CommentIcon } from '../assets/index.js';
import { DotsIcon } from '../assets/index.js';
import { LikeIcon } from '../assets/index.js';
import { ShareIcon } from '../assets/index.js';
import { SmileIcon } from '../assets/index.js';

const Cards = () => {
  const [comment, setComment] = useState('');

  const bookMarkIcon = <BookMarkIcon />;
  const commentIcon = <CommentIcon />;
  const dotsIcon = <DotsIcon />;
  const likeIcon = <LikeIcon />;
  const shareIcon = <ShareIcon />;
  const smileIcon = <SmileIcon />;

  const handleChangeState = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
    setComment('');
  };
  return (
    <article className="Cards">
      <header className="card_header">
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
        <div className="card_menus">
          {/* TODO: icon 넣기 */}
          {/* <div className="icons">{commentIcon}</div> */}
          <div>like, comment, share</div>
          <div className="icons">{bookMarkIcon}</div>
        </div>
        <div className="card_likes">좋아요 0개</div>
        <div className="card_comments">
          <p>댓글1</p>
          <p>댓글2</p>
          <p>댓글3</p>
        </div>
        <div></div>
      </section>
      <section className="card_input_comment">
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
    </article>
  );
};

export default Cards;
