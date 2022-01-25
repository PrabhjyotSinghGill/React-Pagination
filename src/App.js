import React,{useState, useEffect} from 'react';
import Posts from "./components/Posts.jsx";
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() =>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  console.log(posts);
  return (
    <div className="app">
      <h1 className='text-primary mb-3'>Blog</h1>
      <Posts posts={posts} loading={loading}></Posts>
    </div>
  );
}

export default App;
