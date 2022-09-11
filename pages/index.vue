<template>
  <section class="home">
    <div class="overlay"></div>
    <div class="container">
      <NameBlock :sidebarOpen="sidebarOpen" />
      <MenuBlocks :open="open" v-show="!sidebarOpen" />
      <template>
        <AboutContentBlock
          @open-contact="open('contact')"
          :open="sidebarOpen && menu == 'about'"
        />
        <PortfolioContentBlock :open="sidebarOpen && menu == 'portfolio'" />
        <BlogContentBlock :open="sidebarOpen && menu == 'blog'" />
        <ContactContentBlock :open="sidebarOpen && menu == 'contact'" />
        <div class="inline-menu-container" :class="{ showx: sidebarOpen }">
          <span @click="open('contact')" class="status contact menu-item active"
            >Message me</span
          >
          <ul class="inline-menu">
            <li
              class="about menu-item"
              @click="open('about')"
              :class="{ active: menu == 'about' }"
            >
              Resume
            </li>
            <li
              class="portfolio menu-item"
              @click="open('portfolio')"
              :class="{ active: menu == 'portfolio' }"
            >
              Portfolio
            </li>
            <li
              class="blog menu-item"
              @click="open('blog')"
              :class="{ active: menu == 'blog' }"
            >
              Blog
            </li>
            <li
              class="contact menu-item"
              @click="open('contact')"
              :class="{ active: menu == 'contact' }"
            >
              Contact
            </li>
            <li id="close" class="menu-item" @click="sidebarOpen = false">
              <i class="fal fa-times"></i>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      sidebarOpen: false,
      menu: 'about',
    }
  },
  methods: {
    open: function (menu) {
      this.sidebarOpen = true
      this.menu = menu
    },
  },
}
</script>
