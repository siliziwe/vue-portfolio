<template>
    <div class="container h-100">
        <h3 class="text-center fst-italic shadow-lg p-3 text-dark project-heading" id="projects" >Projects</h3>
        <ProjectsComponent />
    </div>
</template>

<script>
import ProjectsComponent from '@/components/ProjectsComponent'
export default{
    components: {ProjectsComponent}
}
</script>

<style scoped>
.container{
    margin-top: 70px;
}
.project-heading {
    z-index: 5;
}
h3 {
    color: hsl(0, 0%, 28%);
    font-size: 35px;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 7px;
    cursor: pointer;
    text-transform: uppercase;
  }

  h3 {
    padding: 24px;
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(212, 97%, 50%) 10%, hsl(0, 0%, 30%) 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 1s infinite linear;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 600px;
    }
  }

</style>