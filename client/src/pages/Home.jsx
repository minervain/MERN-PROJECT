import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';

function Home() {
  const { posts } = useSelector(state => state.posts);
  console.log("posts", posts); // İçeriğin doğru bir şekilde alındığından emin olmak için kontrol amaçlı log
  return (
    <div>
      {posts?.map((post, i) => (
        <Card key={i} post={post} /> // Düzeltme: post yerine post kullanılmalı
      ))}
    </div>
  );
}

export default Home;
