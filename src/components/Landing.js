import React from 'react';

const Landing = () => (
  <section className="landing">
  <header className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4 title">P L A Y <span className="title-2">M U S E</span></h1>
  </header>
    <img src={"/assets/images/headphones.jpg"} alt="headphones" className="background"/>
    <section className="card-deck mb-3 text-center">
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h3 className="font-weight-normal mx-auto landing-text">Choose your music</h3>
        </div>
      </div>
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h3 className="font-weight-normal mx-auto landing-text">Unlimited, streaming, ad-free</h3>
        </div>
      </div>
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h3 className="font-weight-normal mx-auto landing-text">Mobile enabled</h3>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
