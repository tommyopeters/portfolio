<template>
  <div class="content-blocks about" :class="{ showx: open }">
    <section class="content" id="about">
      <div class="block-content">
        <h3 class="block-title">Profile</h3>
        <h3 class="subheading">
          I'm a <strong>Front-end Developer</strong> from Lagos, NIgeria. I
          build stuff for fun (and for a living).
        </h3>
        <div class="info-list row">
          <div class="col-sm-6"><span>Name : </span> Tommy O' Peters</div>
          <div class="col-sm-6">
            <span>Email : </span> tommyopeters@gmail.com
          </div>
          <!-- <div class="col-sm-6"><span>Phone : </span> +234 817 212 7320</div> -->
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">Skills</h3>
        <label class="progress-bar-label"
          >HTML&amp;CSS (SASS)- <span>3+ years experience</span></label
        >
        <div class="progress">
          <div
            style="width: 90%"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>90%</span>
          </div>
        </div>
        <label class="progress-bar-label"
          >Javascript(jQuery, Node.js, Vue.js, Nuxt.js, React.js, Express.js,
          Webpack) - <span>2+ years experience</span></label
        >
        <div class="progress">
          <div
            style="width: 70%"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>70%</span>
          </div>
        </div>
        <label class="progress-bar-label"
          >PHP/ Wordpress - <span>1 year experience</span></label
        >
        <div class="progress">
          <div
            style="width: 45%"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>40%</span>
          </div>
        </div>
        <label class="progress-bar-label"
          >Photography - <span>4 years experience</span></label
        >
        <div class="progress">
          <div
            style="width: 85%"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>85%</span>
          </div>
        </div>
        <label class="progress-bar-label"
          >Graphic Design (CorelDraw, Photoshop, Figma, XD, Invision and
          Illustrator) - <span>3 years experience</span></label
        >
        <div class="progress">
          <div
            style="width: 70%"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>70%</span>
          </div>
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">Experience</h3>
        <div class="timeline experience">
          <div class="row">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      <span>Front-End Developer</span> @ Sankore Investments
                    </h4>
                    <h5>Apr 2020 - <span class="current">Present</span></h5>
                  </div>
                  <p>
                    Responsible for building and maintaining several application
                    front-end interfaces. Redesigned several pages to improve
                    optimization, user experience, responsivity and implement
                    new features
                  </p>
                </div>

                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      <span>Front-End and Back-End Developer</span> @ Hotels.ng
                    </h4>
                    <h5>Sept 2019 - Nov 2019</h5>
                  </div>
                  <p>
                    Intern in a ten-stage intensive training that began with
                    8,000+ developers and ended with under 300 finalists. Worked
                    to create several web applications.
                  </p>
                </div>

                <div class="exp">
                  <div class="hgroup">
                    <h4><span>Web Developer</span> @ Praxis Media</h4>
                    <h5>Sept 2019 - Mar 2020</h5>
                  </div>
                  <p>
                    Responsible for the building, update and maintenance of
                    several clients’ websites and web applications. Implemented
                    several functionalities on WordPress templates using PHP and
                    CSS.
                  </p>
                </div>

                <div class="exp">
                  <div class="hgroup">
                    <h4><span>Freelance Web Developer</span> @ Home</h4>
                    <h5>Aug 2018 - Sept 2019</h5>
                  </div>
                  <p>
                    Voluntarily helping start-ups and individuals to develop web
                    products for self-educational purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">Education</h3>
        <div class="timeline education">
          <div class="row">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      B.Sc. Elect/Elect Engineering |
                      <span>University of Lagos</span>
                    </h4>
                    <h5>Dec 2019</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="block-content">
        <h3 class="block-title">Services</h3>
        <div class="row">
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-laptop"></i>
            </div>
            <h4>Web App Development</h4>
            <p>Full-stack web design.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-camera"></i>
            </div>
            <h4>Photography</h4>
            <p>
              Concept, brand, studio, event, wedding and other kinds of
              photography.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="fab fa-android"></i>
            </div>
            <h4>App Development</h4>
            <p>Basic software development.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="fas fa-pen-nib"></i>
            </div>
            <h4>Graphic Design</h4>
            <p>
              Brand management, logos, banners and other graphic design jobs.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="fas fa-guitar"></i>
            </div>
            <h4>Music</h4>
            <p>Multi-instrumentalist and songwriter</p>
          </div>
        </div>
      </div> -->
      <!-- <div class="block-content">
        <h3 class="block-title">Certification</h3>
        <div class="timeline education">
          <div class="row">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      JavaScript, Ranking in The Top 10% | <span>TestDome</span>
                    </h4>
                    <h5>Sept 2019</h5>
                  </div>
                  <p>
                    <a
                      href="https://www.testdome.com/cert/edc1195173ed4514bc8060fc5f38cfc6"
                      >https://www.testdome.com/cert/edc1195173ed4514bc8060fc5f38cfc6</a
                    >
                  </p>
                </div>
                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      HTML/CSS and JavaScript, Ranking in The Top 10% |
                      <span>TestDome</span>
                    </h4>
                    <h5>Sept 2019</h5>
                  </div>
                  <p>
                    <a
                      href="https://www.testdome.com/cert/4545ea496e364cd886ef4a80b08ec15e"
                      >https://www.testdome.com/cert/4545ea496e364cd886ef4a80b08ec15e</a
                    >
                  </p>
                </div>
                <div class="exp">
                  <div class="hgroup">
                    <h4>
                      JavaScript Algorithms and Data Structures |
                      <span>freeCodeCamp</span>
                    </h4>
                    <h5>Sept 2019</h5>
                  </div>
                  <p>
                    <a
                      href="https://www.freecodecamp.org/certification/tommyopeters/javascript-algorithms-and-data-structures"
                      >https://www.freecodecamp.org/certification/tommyopeters/javascript-algorithms-and-data-structures</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

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
}
</script>

<style></style>
