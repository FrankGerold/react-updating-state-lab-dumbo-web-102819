import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBit = () => {
    return this.setState((oldState) => {
      return {settings: {...oldState.settings, bitrate: 12}}
    })
  }

  handleRes = () => {
    return this.setState((old) => {
      return {settings: {...old.settings, video: { ...old.settings.video, resolution: '720p'}}}
})
  }

  render() {
    return (
      <div className="Buttons"><button className='bitrate' onClick={this.handleBit}>Bit</button>
      <button
        className='resolution'
        onClick=
          {this.handleRes}>Res</button></div>
    );
  }

}

export default YouTubeDebugger;
