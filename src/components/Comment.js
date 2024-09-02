import React from 'react';

function Comment({ author, text, date }) {
  return (
    <div className="comment">
      <p><strong>{author}:</strong> {text}</p>
      <p>วันที่แสดงความคิดเห็น: {date}</p>
    </div>
  );
}

export default Comment;