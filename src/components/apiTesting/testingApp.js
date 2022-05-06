import React, { useEffect, useState } from 'react';

const TestingApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/theodorejohn7/repos')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestingApp;

