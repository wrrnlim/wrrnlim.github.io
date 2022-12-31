import React from 'react'
import navLogo from '/assets/img/wl_logo_nav.png';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-2">
        <div class="container-fluid">
          <a class="navbar-brand me-2" href="/">
            <img src={`${navLogo}`} height="16" alt="Logo" style={{ marginTop: "-1px" }}></img>
          </a>
          <button class="navbar-toggler" type="button"> <i class="fas fa-bars"></i> </button>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
              <li class="nav-item"> <a class="nav-link" href="">Projects</a> </li>
              <li class="nav-item"> <a class="nav-link" href="">Blog</a> </li>
            </ul>
            <div class="d-flex align-items-center">
              <a class="text-reset me-3"> <i class="fab fa-github"></i></a>
              <a class="text-reset me-3"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
