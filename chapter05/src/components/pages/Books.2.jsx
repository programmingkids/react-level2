import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';

export const Books = (props) => (
  <>
    <nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">サイトについて</Link></li>
        <li><Link to="/books">本一覧</Link></li>
      </ul>
    </nav>
    <Title>本の一覧</Title>
    <div className="subtitle">
      本を一覧で紹介
    </div>
  </>
);
