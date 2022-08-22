import "./App.css";
import React from "react";
import { useState, createContext, useEffect } from "react";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const PostsContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/posts");
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      <center>
        <BrowserRouter>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/my-posts" element={<Posts />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </center>
    </PostsContext.Provider>
  );
}

export default App;
export { PostsContext };
