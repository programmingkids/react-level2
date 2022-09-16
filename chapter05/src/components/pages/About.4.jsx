import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';
import {Nav} from './../blocks/Nav';

export const About = (props) => (
  <>
    <Nav />
    <Title>サイトの紹介</Title>
    <div className="description">
      このサイトは私が読んだ面白い本を紹介します。
      読書は人生を豊かにします。
      本は、自分が経験したことのない世界に連れて行ってくれます。
      教養を身に着け、まだ身に世界を体験して、新しい知識を得ることができます。
      ミステリー小説、恋愛小説、ハウツー本まで幅広く紹介します。
    </div>
    <h2>本の購入サイト</h2>
    <ul className="outlink-box">
      <li><a href="https://www.amazon.co.jp/" target="_blank" rel="noreferrer">アマゾン</a></li>
      <li><a href="https://books.rakuten.co.jp/" target="_blank" rel="noreferrer">楽天ブックス</a></li>
      <li><a href="https://ebookjapan.yahoo.co.jp/" target="_blank" rel="noreferrer">ebook japan</a></li>
    </ul>
  </>
);
