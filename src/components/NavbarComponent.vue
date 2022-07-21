<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#"><img src="https://i.postimg.cc/MppBCdvk/attachment-24640839-removebg-preview.png" height="70" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home<router-link to="/home"></router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resume
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Skills</a></li>
            <li><a class="dropdown-item" href="#">Education</a></li>
            <li><a class="dropdown-item" href="#">Projects</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/education">Education</a>
        </li>
        <li class="nav-item text-white">
          <a class="nav-link text-white" href="/skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/contact">Contact</a>
        </li>
        <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary text-white" type="submit">Search</button>
    </form>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
    name: "NavbarComponent"
}
</script>

<style>
  nav{
    position: fixed;
    top: 0;
    background: url(https://i.postimg.cc/Zq5YRN18/Zgw2oAP.jpg);
    background-attachment: fixed;
  }


</style>
