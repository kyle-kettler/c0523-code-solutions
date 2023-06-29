import React from 'react';
import './App.css';
import Accordion, { Topic } from './Accordion';

const topics: Topic[] = [
  {
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technoloaies for the World Wide Web.',
  },
  {
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup anguage like HIME coS Is a cornerstone technoloav of the World Wide Web alongside HIM and Javascript',
  },
  {
    title: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the COMAScrIpt specitication. Javascript has curly-bracket syntax. cynomic voing. protorype-based oblect-orientation. and tirst-class runctions',
  },
];

function App() {
  return (
    <div>
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
