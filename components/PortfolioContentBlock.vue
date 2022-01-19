<template>
  <div class="content-blocks portfolio" :class="{ showx: open }">
    <section class="content" v-if="!scope">
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
                <div
                  class="portfolio-column"
                  @click="changeScope(project.scope)"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-content">
                      <h2>{{ project.name.toUpperCase() }}</h2>
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
    <section class="content" v-else>
      <div class="block-content">
        <div class="project-head">
          <h1 class="block-title">Single Project - Gallery</h1>
          <div class="tags"><span>Category : </span> Graphic / Apps</div>
          <div class="tags"><span>Client : </span> NHS</div>
          <div class="tags"><span>Completion : </span> February 2017</div>
          <div class="tags"><span>Role : </span> Art Direction</div>
        </div>
        <p class="project-description">
          Omnium nominati prodesset pri no. Per dolor gloriatur persequeris ad,
          te his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque
          assueverit. Enim eruditi euripidis his et, dictas admodum posidonium
          ei pro. An duo tempor maluisset honestatis. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet.Est sint magna mucius te, iudico integre
          gubergren no vis. Assum doming et pro, est ei inermis corpora
          argumentum. Eos graece sadipscing et, pri dico salutandi consetetur
          et, explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie
          theophrastus, nibh tollit apeirian no vis. Eum an vocibus gubergren
          intellegam, quo id soluta iisque phaedrum.
        </p>
        <div class="project-media row">
          <div class="col-md-4">
            <img src="/masonry/phoneography/001.jpg" alt="" />
          </div>
          <div class="col-md-4">
            <img src="/masonry/phoneography/002.jpg" alt="" />
          </div>
          <div class="col-md-4">
            <img src="/masonry/phoneography/003.jpg" alt="" />
          </div>
        </div>
        <div class="project-nav text-center">
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
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-12 btn-email">
          <a class="btn lowercase">shout@james.com</a>
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
          scope: 0,
          name: 'Blackjack',
          group: 'game',
          img: '/masonry/games/blackjack/001.png',
          video: null,
        },
        {
          scope: 0,
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/001.jpg',
          video: null,
        },
        {
          scope: 0,
          name: 'Monopoly',
          group: 'game',
          img: '/masonry/games/monopoly/001.png',
          video: null,
        },
        {
          scope: 0,
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/002.jpg',
          video: null,
        },
        {
          scope: 0,
          name: 'Music with Celine',
          group: 'music',
          img: '/masonry/music/celine/003.jpg',
          video: null,
        },
        {
          scope: 0,
          name: 'Phoneography',
          group: 'phoneography',
          img: '/masonry/phoneography/003.jpg',
          video: null,
        },
        {
          scope: 0,
          name: 'Photography',
          group: 'photography',
          img: '/masonry/photography/001.jpg',
          video: null,
        },
      ],
      scopes: [{}],
      currentFilter: '*',
      isotope: null,
      scope: false,
      currentScope: 0,
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
    changeScope(scope) {
      this.currentScope = scope
      this.scope = true
    },
  },
  mounted() {
    this.isotope = $('#portfolio-container')
  },

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
