import React from 'react';
import {Title} from './../blocks/Title';
import {Link, useParams} from 'react-router-dom';
import {getBookData} from './../BookData';
import {getCategoryData} from './../CategoryData';

export const Book = (props) => {
  // URLパラメータン取得
  const {bookId} = useParams();
  // パラメータに基づいて、本のデータを抽出
  const book = getBookData().find(b => b.id === parseInt(bookId));
  const category = getCategoryData().find(c => c.id === book.category_id);
  
  return (
    <>
      <Title>本の詳細</Title>
      <div className="subtitle">
        本の詳細を紹介します
      </div>
      <div className="book-detail">
        <div>ID：{book.id}</div>
        <div>タイトル：{book.title}</div>
        <div>著者：{book.author}</div>
        <div>カテゴリ：{category.name}</div>
        <div>金額：{book.price}円</div>
      </div>
      <div className="book-detail-bottom">
        <Link to="/books">本の一覧</Link>
      </div>
    </>
  );
};
