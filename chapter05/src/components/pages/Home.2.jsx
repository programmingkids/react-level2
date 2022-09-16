import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';

export const Home = (props) => (
  <>
    <nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">サイトについて</Link></li>
        <li><Link to="/books">本一覧</Link></li>
      </ul>
    </nav>
    <Title>本の紹介サイト - HOME</Title>
    <div className="subtitle">
      私の読んだ本を紹介
    </div>
  </>
);
