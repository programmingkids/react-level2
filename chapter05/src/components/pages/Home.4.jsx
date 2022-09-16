import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './../blocks/Title';
import {Nav} from './../blocks/Nav';

export const Home = (props) => (
  <>
    <Nav />
    <Title>本の紹介サイト - HOME</Title>
    <div className="subtitle">
      私の読んだ本を紹介
    </div>
  </>
);
