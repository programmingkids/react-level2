import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';
import {Nav} from './../blocks/Nav';

export const Books = (props) => (
  <>
    <Nav />
    <Title>本の一覧</Title>
    <div className="subtitle">
      本を一覧で紹介
    </div>
  </>
);
