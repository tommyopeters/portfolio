<template>
  <div class="menu-blocks">
    <div class="about-block menu-block" @click="open('about')">
      <div class="about-block-container">
        <h2 class="about menu-item">Resume</h2>
      </div>
    </div>
    <div class="portfolio-block menu-block" @click="open('portfolio')">
      <div class="portfolio-block-container">
        <h2 class="portfolio menu-item">Portfolio</h2>
      </div>
    </div>
    <div class="blog-block menu-block" @click="open('blog')">
      <div class="blog-block-container">
        <h2 class="blog menu-item">Blog</h2>
      </div>
    </div>
    <div class="contact-block menu-block" @click="open('contact')">
      <div class="contact-block-container">
        <h2 class="contact menu-item">Contact</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open'],
}
</script>

<style></style>
