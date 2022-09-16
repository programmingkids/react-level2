import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';

export const About = (props) => (
  <>
    <nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">サイトについて</Link></li>
        <li><Link to="/books">本一覧</Link></li>
      </ul>
    </nav>
    <Title>サイトの紹介</Title>
    <div className="description">
      このサイトは私が読んだ面白い本を紹介します。
      読書は人生を豊かにします。
      本は、自分が経験したことのない世界に連れて行ってくれます。
      教養を身に着け、まだ身に世界を体験して、新しい知識を得ることができます。
      ミステリー小説、恋愛小説、ハウツー本まで幅広く紹介します。
    </div>
  </>
);
