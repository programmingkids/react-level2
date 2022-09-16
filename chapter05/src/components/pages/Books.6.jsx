import React from 'react';
import {Title} from './../blocks/Title';
import {Link} from 'react-router-dom';
import {getBookData} from './../BookData';

export const Books = (props) => (
  <>
    <Title>本の一覧</Title>
    <div className="subtitle">
      本を一覧で紹介
    </div>
    <div className="book-list">
      {getBookData().map(b => (
        <div key={b.id} className="book-item">
          <div>
            タイトル：<Link to={`/books/${b.id}`}>{b.title}</Link>
          </div>
          <div>
            著者：{b.author}
          </div>
        </div>
      ))}
    </div>
  </>
);
