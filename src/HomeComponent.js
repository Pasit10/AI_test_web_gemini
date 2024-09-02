import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeComponent() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'บทความแรก', content: 'เนื้อหาบทความแรก' },
    // ...
  ]);

  return (
    <div>
      <h1>บทความล่าสุด</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeComponent;