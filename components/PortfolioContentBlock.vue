<template>
  <div class="content-blocks portfolio" :class="{ showx: open }">
    <section class="content" v-show="!scope">
      <div class="block-content">
        <h3 class="block-title">Portfolio</h3>
        <div class="row">
          <div class="col-md-12">
            <div class="filters">
              <span>Filters :</span>
              <ul id="filters">
                <li
                  v-for="(filter_name, index) in filters"
                  :key="index"
                  @click="filter(filter_name)"
                >
                  {{
                    filter_name == '*'
                      ? 'All'
                      : filter_name[0].toUpperCase() + filter_name.substring(1)
                  }}
                </li>
              </ul>
            </div>
            <div
              id="portfolio-container"
              class="portfolio-container row isotope"
            >
              <div
                class="portfolio-item col-md-4 col-sm-6 col-xs-12"
                :class="project.category"
                v-for="(project, index) in projectList"
                :key="index"
              >
                <div class="portfolio-column" @click="changeScope(project)">
                  <div class="portfolio-hover">
                    <div class="portfolio-content">
                      <h2>{{ project.name.toUpperCase() }}</h2>
                      <hr />
                      <p>View similar.</p>
                    </div>
                    <div class="portfolio-overlay"></div>
                  </div>
                  <video
                    :height="project?.height"
                    :width="project?.width"
                    v-if="project.video"
                    autoplay
                    loop
                    muted
                    playsinline
                  >
                    <source :src="project.video" />
                  </video>
                  <nuxt-img
                    v-else
                    format="webp"
                    quality="100"
                    loading="lazy"
                    @load="onImageLoad"
                    :src="project.img"
                    alt=""
                    :height="project?.height"
                    :width="project?.width"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-12 btn-email">
          <div style="cursor: pointer" class="btn uppercase sayhi">SAY HI</div>
        </div>
      </div>
    </section>
    <section class="content" v-if="scope">
      <div class="back" @click="scope = false">&lt; Back</div>
      <div class="block-content">
        <div class="project-head">
          <h1 class="block-title">Single Project View</h1>
          <!-- <div class="tags"><span>Category : </span> Graphic / Apps</div>
          <div class="tags"><span>Date : </span> 10/09/20222</div> -->
        </div>
        <p class="project-description">I'm still working on this view.</p>
        <div class="project-media row">
          <div class="col-md-4">
            <nuxt-img
              format="webp"
              quality="100"
              loading="lazy"
              src="/masonry/phoneography/001.jpg"
              alt=""
            />
          </div>
          <div class="col-md-4">
            <nuxt-img
              format="webp"
              quality="100"
              loading="lazy"
              src="/masonry/phoneography/002.jpg"
              alt=""
            />
          </div>
          <div class="col-md-4">
            <nuxt-img
              format="webp"
              quality="100"
              loading="lazy"
              src="/masonry/phoneography/003.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- <div class="project-nav text-center">
          <span class="float-left">
            <a class="open-project" href="project-6.html"
              >&leftarrow; Previous Project</a
            >
          </span>
          <span class="">
            <a id="close-project" href="#"><i class="ion-grid"></i></a>
          </span>
          <span class="float-right">
            <a class="open-project" href="project-2.html"
              >Next Project &rightarrow;
            </a>
          </span>
        </div> -->
      </div>
      <!-- <div class="row text-center">
        <div class="col-md-12 btn-email">
          <a class="btn lowercase">Holler at me</a>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['open'],
  data() {
    return {
      imageLoadCounter: 0,
      // projectList: [
      // {
      //   scope: 0,
      //   name: 'Blackjack',
      //   group: 'game',
      //   img: '/masonry/games/blackjack/001.png',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Phoneography',
      //   group: 'phoneography',
      //   img: '/masonry/phoneography/001.jpg',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Monopoly',
      //   group: 'game',
      //   img: '/masonry/games/monopoly/001.png',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Phoneography',
      //   group: 'phoneography',
      //   img: '/masonry/phoneography/002.jpg',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Music with Celine',
      //   group: 'music',
      //   img: '/masonry/music/celine/003.jpg',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Phoneography',
      //   group: 'phoneography',
      //   img: '/masonry/phoneography/003.jpg',
      //   video: null,
      // },
      // {
      //   scope: 0,
      //   name: 'Photography',
      //   group: 'photography',
      //   img: '/masonry/photography/001.jpg',
      //   video: null,
      // },
      // ],
      scopes: [{}],
      currentFilter: '*',
      isotope: null,
      scope: false,
      currentScope: 0,
    }
  },
  watch: {
    scope: function (newVal) {
      this.relayoutGrid()
      return newVal
    },
  },
  computed: {
    ...mapGetters(['projectList']),
    filters: function () {
      let filters = ['*']
      this.projectList.forEach((project) => {
        if (!filters.includes(project.category)) {
          filters.push(project.category)
        }
      })

      return filters
    },
  },
  methods: {
    relayoutGrid() {
      setTimeout(() => {
        // let elem = document.querySelector('.grid')
        // this.isotope = new isotope(elem, {
        //   itemSelector: '.card',
        //   layoutMode: 'masonry',
        // })

        this.isotope.isotope({
          itemSelector: '.portfolio-item',

          percentPosition: true,
          // columnWidth: 200,
          masonry: {
            columnWidth: '.portfolio-item',
          },
          filter: '*',
        })
      }, 5)
    },
    onImageLoad() {
      this.imageLoadCounter++
      if (this.imageLoadCounter == this.projectList.length) {
        this.relayoutGrid()
        // this.imageLoadCounter = 0
      }
    },
    filter(item) {
      this.currentFilter = item

      this.isotope.isotope({ filter: item == '*' ? item : '.' + item })
    },
    changeScope(project) {
      if (project.url) {
        var link = document.createElement('a')
        link.setAttribute('target', '_blank')
        link.href = project.url
        document.body.appendChild(link)
        link.click()
      }
      this.currentScope = project.scope
      this.scope = true
    },
  },
  mounted() {
    this.isotope = $('#portfolio-container')
  },

  // mounted() {
  //   var $container = $('#portfolio-container')

  //
  //   if (this.open) {
  //     //Portfolio masonry
  //     var $container = $('#portfolio-container')

  //
  //     $container.isotope({
  //       filter: '*',
  //       masonry: {
  //         columnWidth: '.portfolio-item',
  //       },
  //       itemSelector: '.portfolio-item',
  //     })
  //   }
  //   // $('#filters').on('click', 'li', function () {
  //   //   $('#filters li').removeClass('active')
  //   //   $(this).addClass('active')
  //   //   var filterValue = $(this).attr('data-filter')
  //   //   $container.isotope({ filter: filterValue })
  //   // })
  // },
}
</script>

<style>
.back {
  cursor: pointer;
}
</style>
