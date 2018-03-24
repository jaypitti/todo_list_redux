import React from 'react';
import { connect } from 'react-redux';


const Post = ({ text, author }) => (
  <li>
    {text} {author}
  </li>
)

export default connect()(Post)
