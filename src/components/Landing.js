import React from 'react';

const Landing = () => (
  <section className="landing">
  <header className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4 title">P L A Y M U S E</h1>
  </header>
    <img src={"/assets/images/headphones.jpg"} alt="headphones" className="background"/>
    <section className="card-deck mb-3 text-center">
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h2 className="font-weight-normal mx-auto">Choose your music</h2>
        </div>
      </div>
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h2 className="font-weight-normal mx-auto">Unlimited, streaming, ad-free</h2>
        </div>
      </div>
      <div className="card box-shadow">
        <div className="card-header d-flex align-items-center h100">
          <h2 className="font-weight-normal mx-auto">Mobile enabled</h2>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
