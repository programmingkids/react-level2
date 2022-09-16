import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">ホーム</Link></li>
      <li><Link to="/about">サイトについて</Link></li>
      <li><Link to="/books">本一覧</Link></li>
      <li><Link to="/categories">カテゴリ一覧</Link></li>
    </ul>
  </nav>
);
