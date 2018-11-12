import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
      this.state = { albums: albumData };
  }

  render() {
   return (
     <section className='row'>
     <img src={"/assets/images/headphones.jpg"} alt="headphones" className="background"/>
        {
          this.state.albums.map( (album, index) =>
          <div className="col-md-6" key={index}>
            <div className="card mb-4 box-shadow">
              <Link to={`/album/${album.slug}`} key={index}>
                <img className="card-img-top" src={album.albumCover} alt={album.title} />
                <div className="card-body">
                  <p className="display-4 library-title">{album.title}</p>
                  <p className="lead library-artist">{album.artist}</p>
                </div>
              </Link>
            </div>
          </div>
          )
        }
     </section>
    );
  }
}

export default Library;
