import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  state = {text: '', author: ''}

  handleTextChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleAuthorChange = (e) => {
    this.setState({author: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {text, author} = this.state;
    const post = {text, author};
    const {dispatch} = this.props;
    dispatch({type: 'ADD_POST', post});
    this.setState({text: '', author: ''})
  }

  render(){
    const {text, author} = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name={text} onChange={this.handleTextChange} />
          <input name={author} onChange={this.handleAuthorChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
//TODO - Write Map Function
export default connect()(PostForm);
