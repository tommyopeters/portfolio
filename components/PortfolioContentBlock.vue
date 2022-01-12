<template>
  <div class="content-blocks portfolio" :class="{ showx: open }">
    <section class="content">
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
                :class="project.group"
                v-for="(project, index) in projectList"
                :key="index"
              >
                <div class="portfolio-column">
                  <div class="portfolio-hover">
                    <div class="portfolio-content">
                      <h2>{{ project.group.toUpperCase() }}</h2>
                      <hr />
                      <p>View similar.</p>
                    </div>
                    <div class="portfolio-overlay"></div>
                  </div>
                  <img @load="onImageLoad" :src="project.img" alt="" />
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
  </div>
</template>

<script>
export default {
  props: ['open'],
  data() {
    return {
      imageLoadCounter: 0,
      projectList: [
        {
          link: 'game/blackjack',
          name: 'Blackjack',
          group: 'game',
          img: '/masonry/games/blackjack/001.png',
          video: null,
        },
        {
          link: 'phoneography',
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/001.jpg',
          video: null,
        },
        {
          link: 'game/monopoly',
          name: 'Monopoly',
          group: 'game',
          img: '/masonry/games/monopoly/001.png',
          video: null,
        },
        {
          link: 'phoneography',
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/002.jpg',
          video: null,
        },
        {
          link: 'phoneography',
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/003.jpg',
          video: null,
        },
        {
          link: 'photography',
          name: 'Photography',
          group: 'photography',
          img: '/masonry/photography/001.jpg',
          video: null,
        },
      ],
      currentFilter: '*',
      isotope: null,
    }
  },
  computed: {
    filters: function () {
      let filters = ['*']
      this.projectList.forEach((project) => {
        if (!filters.includes(project.group)) {
          filters.push(project.group)
        }
      })
      console.log(filters)
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
        this.isotope = $('#portfolio-container')
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
        console.log('IMAGES LOADED')
        this.relayoutGrid()
        // this.imageLoadCounter = 0
      }
    },
    filter(item) {
      this.currentFilter = item
      console.log(`this.isotope.isotope({ filter: ${item} })`)
      this.isotope.isotope({ filter: item == '*' ? item : '.' + item })
    },
  },
  created() {},

  // mounted() {
  //   var $container = $('#portfolio-container')

  //   console.log($container.isotope)
  //   if (this.open) {
  //     //Portfolio masonry
  //     var $container = $('#portfolio-container')

  //     console.log($container.isotope)
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

<style></style>
