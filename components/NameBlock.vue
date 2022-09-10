<template>
  <div class="name-block" :class="{ reverse: sidebarOpen }">
    <div class="name-block-container" :class="{ reverse: sidebarOpen }">
      <h1>
        <span>Hi, I'm</span>
        Tommy <br />O'Peters
      </h1>
      <h2>
        <typewriter
          :speed="200"
          :full-erase="true"
          :interval="500"
          :words="[
            'Writer',
            'Creative',
            'Developer',
            'Inbetweener',
            'Photographer',
            'Musician',
            'Neurodivergent',
            'Coach',
          ]"
        >
        </typewriter>
      </h2>
      <a
        target="_blank"
        href="tommyopeters_cv.pdf"
        download="Tommy O' Peters CV"
        class="btn btn-download"
        >Download Resume</a
      >
      <ul class="social">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/tommyopeters/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/tommyopeters">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/tommyopeters">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/tommyopeters/">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.github.com/tommyopeters/">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sidebarOpen'],
}
</script>

<style></style>
