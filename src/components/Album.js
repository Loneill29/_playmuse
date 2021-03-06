import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: false,
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: 0.8
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = 0.8;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  songDisplay(song) {
    const isSameSong = this.state.currentSong == song;
    if (this.state.isPlaying && isSameSong) {
      return 'ion-pause';
    } else if (this.isHovered) {
      return 'ion-play'
    } else return 'song-number'
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(4, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({currentVolume: newVolume});
  }

  formatTime(timeInSeconds) {
    timeInSeconds = Number(timeInSeconds);
    const timeInMinutes = Math.floor(timeInSeconds/60);
    const remainingSeconds = Math.floor(timeInSeconds%60);
    if (isNaN(timeInMinutes)) {
      return "-:--";
    } else if (remainingSeconds < 10) {
        return `${(timeInMinutes)}:0${(remainingSeconds)}`
    }
    else
     return `${(timeInMinutes)}:${(remainingSeconds)}`
  }

  render() {
    return (
      <section className="album">
      <img src={"/assets/images/headphones.jpg"} alt="headphones" className="background"/>
        <section id="album-info" className="row">
          <div className="col">
            <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          </div>
          <div className="col album-table">
            <div className="album-details">
              <h2 id="album-title" className="display-3 small-title">{this.state.album.title}</h2>
              <h3 className="album-artist">{this.state.album.artist}</h3>
              <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        <div className="table-responsive">
          <table id="song-list"  className="table table-hover table-bordered table-striped">
            <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>
            <tbody>
              {this.state.album.songs.map( (song, index) =>
                <tr className="song" key={index} onClick={() => this.handleSongClick(song)}
                  onMouseEnter={() => this.setState({isHovered: index+1})}
                  onMouseLeave={() => this.setState({isHovered: false})}>
                  <td className="song-actions">
                    <button className="song-btn">
                      { (this.state.currentSong.title === song.title) ?
                        <span className={this.state.isPlaying ? "ion-pause" : "ion-play"}></span>
                        :
                      (this.state.isHovered === index+1) ?
                        <span className="ion-play"></span>
                        :
                        <span className="song-number">{index+1}</span>
                      }
                    </button>
                  </td>
                  <td className="song-title">{song.title}</td>
                  <td className="song-duration">{this.formatTime(song.duration)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <PlayerBar
      isPlaying={this.state.isPlaying}
      currentSong={this.state.currentSong}
      currentTime={this.audioElement.currentTime}
      duration={this.audioElement.duration}
      currentVolume={this.state.currentVolume}
      formatTime={(timeInSeconds) => this.formatTime(timeInSeconds)}
      handleSongClick={() => this.handleSongClick(this.state.currentSong)}
      handlePrevClick={() => this.handlePrevClick()}
      handleNextClick={ () => this.handleNextClick()}
      handleTimeChange={(e) => this.handleTimeChange(e)}
      handleVolumeChange={(e) => this.handleVolumeChange(e)}
    />
  </section>
    );
  }
}

export default Album;
