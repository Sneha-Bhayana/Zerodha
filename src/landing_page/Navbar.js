import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/signup">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/product">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/support">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </ul>
            <i class="fa-solid fa-bars p-2 m-1"></i>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;