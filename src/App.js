import React, { Component } from 'react';
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <PostList />
      </div>
    );
  }
}

export default App;
