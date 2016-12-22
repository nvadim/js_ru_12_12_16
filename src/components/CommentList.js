import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  state = {
    isOpen: false
  };

  render() {
    return (
      <div>
        {this.getLink()}
        {this.getBody()}
      </div>
      )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBody(commentsElements) {
    const {comments} = this.props
    if (!comments || !comments.length) return null;
    const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>)

    return (this.state.isOpen)?  <ul>{commentElements}</ul>: null
  }

  getLink = () => {
    if(this.props.comments)
      return <button onClick={this.toggleOpen}>{(this.state.isOpen)? 'Скрыть': 'Показать'} комментарии</button>
    else
      return 'Комментариев пока нет'
  }

}
