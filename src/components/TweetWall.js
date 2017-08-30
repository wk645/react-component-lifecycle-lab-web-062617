import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: [...this.props.newTweets, ...this.state.tweets]
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length === this.props.newTweets.lengthn)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }


  // nextProps.newTweets.length === this.props.newTweets.length

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;