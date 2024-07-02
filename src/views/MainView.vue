<template>
  <div>
    <TopBtn />
    <NavbarView :table="table" />
    <div class="contents">
      <header>
        <img src="/star.gif" class="starImg">
        <section id="home"><HomeView :table="table" /></section>
      </header>

      <main>
        <section id="skills"><SkillsView /></section>
        <section id="projects"><ProjectsView /></section>
        <section id="works"><WorksView /></section>
        <section id="about"><AboutView /></section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import NavbarView from '@/components/NavbarView.vue'
import TopBtn from '@/components/TopBtn.vue'
import HomeView from '@/components/HomeView.vue'
import AboutView from '@/components/AboutView.vue'
import SkillsView from '@/components/SkillsView.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import WorksView from '@/components/WorksView.vue'
const table = "ABCDEFGHIJKLMONPQRSTUVWXYZ"


onMounted(() => {
  const content = document.querySelectorAll('main > section > .container > .content');
  const h1 = document.querySelectorAll('main > section > .container > h1');
  const observer = new IntersectionObserver((entries) => {
    for(let [i, entry] of entries.entries()){
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.remove('hide') , (i + 1) * 100)
      }else{
        setTimeout(() => entry.target.classList.add('hide') , (i + 1) * 100)
      }
    }
  }, { threshold: 0.5 })

  content.forEach(content => {
    observer.observe(content);
  });

  h1.forEach(h1 => {
    observer.observe(h1);
  });
})

</script>

<style scoped>
.starImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
