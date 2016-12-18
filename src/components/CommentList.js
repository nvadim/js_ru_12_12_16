import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  state = {
    isOpen: false
  };

  render() {
    const {comments} = this.props
    const commentElements = comments? comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>): null
    return comments? (
      <div>
        <button onClick={this.toggleOpen}>{this.getBtnText()}</button>
        <ul>{this.showComments(commentElements)}</ul>
      </div>
    ): null
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showComments(commentsElements) {
    if(this.state.isOpen)
      return commentsElements
    else
      return false
  }

  getBtnText = () => {
    if(this.state.isOpen)
      return ('Скрыть комментарии')
    else
      return ('Показать комментарии')
  }

}
