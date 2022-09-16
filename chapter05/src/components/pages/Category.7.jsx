import React from 'react';
import {Title} from './../blocks/Title';
import {Link, useSearchParams} from 'react-router-dom';
import {getBookData} from './../BookData';
import {getCategoryData} from './../CategoryData';

export const Category = (props) => {
  // GETパラメータン取得
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  // カテゴリIDに基づいて、カテゴリデータを取得
  const category = getCategoryData().find(c => c.id === parseInt(categoryId));
  // カテゴリIDに基づいて、本データを取得
  const books = getBookData().filter(b => b.category_id === category.id);
  
  return (
    <>
      <Title>カテゴリの本一覧</Title>
      <div className="subtitle">
        【{category.name}】カテゴリの本一覧です
      </div>
      {books.map( book => 
        <div key={book.id} className="book-detail">
          <div>ID：{book.id}</div>
          <div>タイトル：{book.title}</div>
          <div>著者：{book.author}</div>
          <div>カテゴリ：{category.name}</div>
          <div>金額：{book.price}円</div>
        </div>
      )}
      <div className="book-detail-bottom">
        <Link to="/categories">カテゴリの一覧</Link>
      </div>
    </>
  );
};
