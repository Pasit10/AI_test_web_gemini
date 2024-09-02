import React from 'react';

function Article({ title, content, date }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>วันที่เผยแพร่: {date}</p>
    </div>
  );
}

export default Article;