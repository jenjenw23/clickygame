import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
  <a className="navbar-brand" href="/">Space Adventure Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
      {/* <li class="">Click an image to begin!</li>   */}
    </ul>
  </div>
</nav>
);

export default Navbar;
