import React, { useState } from 'react';

function ArticleComponent({ article }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Logic สำหรับเพิ่มความคิดเห็นใหม่
    setComments([...comments, { text: newComment }]);
    setNewComment('');
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <h2>ความคิดเห็น</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmitComment}>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="submit">ส่ง</button>
      </form>
    </div>
  );
}

export default ArticleComponent;