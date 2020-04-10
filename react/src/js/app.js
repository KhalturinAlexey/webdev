import ReactDOM from 'react-dom';
import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    const { liked } = this.state;
    return React.createElement(
      'div',
      { onClick: () => this.setState({ liked: !liked }) },
      `${liked ? 'liked' : 'unliked'}`
    );
  }
}

const domContainer = document.querySelector('#like');
ReactDOM.render(React.createElement(Like), domContainer);