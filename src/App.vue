<template>
  <div class="container">
    <div class="row">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/posts">All Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/posts/new">New Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="logout">Log Out</a>
              </li>
              <li></li>
            </ul>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Log In
              </button>
              <div class="dropdown-menu">
                <form class="px-4 py-3">
                  <div class="mb-3">
                    <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleDropdownFormEmail1"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleDropdownFormPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                      <label class="form-check-label" for="dropdownCheck">Remember me</label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">New around here? Sign up</a>
                <a class="dropdown-item" href="#">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/posts">All Posts</router-link>
    |
    <router-link to="/posts/new">New Post</router-link>
    |
    <router-link to="/signup">Sign Up</router-link>
    |
    <router-link to="/login">Log In</router-link>
    |
    <router-link to="/logout">Log Out</router-link>
  </nav> -->
  <router-view />
</template>

<style>
h1 {
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 23px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
h3 {
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
p {
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
body {
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
  background-image: url("./assets/beanstalk.webp");
}
</style>
