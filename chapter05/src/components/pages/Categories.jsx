import React from 'react';
import {Title} from './../blocks/Title';
import {Link} from 'react-router-dom';
import {getCategoryData} from './../CategoryData';

export const Categories = (props) => (
  <>
    <Title>カテゴリの一覧</Title>
    <div className="subtitle">
      本のカテゴリを一覧で紹介
    </div>
    <div className="book-list">
      {getCategoryData().map(c => (
        <div key={c.id} className="book-item">
          <div>
            カテゴリ名：<Link to={`/categories/bookList?categoryId=${c.id}`}>{c.name}</Link>
          </div>
        </div>
      ))}
    </div>
  </>
);
