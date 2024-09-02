import React, { useState } from 'react';
import Article from '../components//Article';
import Comment from '../components//Comment';
import CommentForm from '../components/CommentForm.js';
import articlesData from '../data/articles.json';

function Home() {
  const [articles, setArticles] = useState(articlesData);

  const handleCommentSubmit = (text, articleId) => {
    // เพิ่มความคิดเห็นใหม่เข้าไปในบทความที่เลือก
    const updatedArticles = articles.map(article => {
      if (article.id === articleId) {
        return {
          ...article,
          comments: [...article.comments, { text, date: new Date() }]
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  return (
    <div>
      <h1>หน้าแรกของ Blog</h1>
      {articles.map(article => (
        <div key={article.id}>
          <Article title={article.title} content={article.content} date={article.date} />
          <CommentForm onSubmit={(text) => handleCommentSubmit(text, article.id)} />
          {article.comments.map(comment => (
            <Comment key={comment.id} author={comment.author} text={comment.text} date={comment.date} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;