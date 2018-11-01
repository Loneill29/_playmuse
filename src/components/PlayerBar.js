import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
      <section id="buttons">

         <button id="previous" className="mdl-button mdl-js-button mdl-button--accent" onClick={this.props.handlePrevClick}>
         <i className="material-icons"></i>
          <span className="ion-skip-backward"></span>
        </button>

        <button id="play-pause" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handleSongClick}>
        <i className="material-icons"></i>
        <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
        </button>

        <button id="next" className="mdl-button mdl-js-button mdl-button--accent" onClick={this.props.handleNextClick}>
        <i className="material-icons"></i>
        <span className="ion-skip-forward"></span>
        </button>

    </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </section>

        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
