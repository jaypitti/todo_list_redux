import React from 'react';
import { connect } from 'react-redux'

const PostList = ({ posts }) => (
  <ul>
    { posts.map( (t,i) => {
        return (
          <li key={i}>
            {t.text}
          </li>
        )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

export default connect(mapStateToProps)(PostList);
