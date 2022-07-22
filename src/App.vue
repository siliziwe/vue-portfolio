<template>
  <NavbarComponent />
  <!-- <router-view/> -->
  <home-view/>
  <about-view/>
  <education-view/>
  <skills-view/>
  <ProjectsView/>
  <testimonials-view/>
  <contact-view/>
  <FooterComponent />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeView from '@/views/HomeView'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from './views/AboutView.vue'
import EducationView from './views/EducationView.vue'
import SkillsView from '@/views/SkillsView'
import ContactView from '@/views/ContactView'
import TestimonialsView from '@/views/TestimonialsView'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    HomeView,
    AboutView,
    EducationView,
    SkillsView,
    ProjectsView,
    TestimonialsView,
    ContactView,
  },
}
</script>
<style >
#app {
  min-width: 100vw;
}
</style>