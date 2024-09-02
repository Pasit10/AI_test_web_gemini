import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">ส่ง</button>
    </form>
  );
}

export default CommentForm;