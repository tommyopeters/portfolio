<template>
  <div class="content-blocks blog" :class="{ showx: open }">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">My Blog</h3>
        <p>
          Coming soon
          <!-- You're now going through mental snaptshots of my state of mind on
          different days. Don't take too literally. Don't be too stiff. Don't be
          close-minded.
          <br />
          <small>Coming soon</small> -->
        </p>

        <!-- <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="post">
              <div class="post-thumbnail">
                <a class="open-post" href="post-single.html">
                  <nuxt-img
                    format="webp"
                    quality="100"
                    loading="lazy"
                    src="images/blog/midium/4.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="post-title">
                <a class="open-post" href="post-single.html"
                  ><h2>Typography for web</h2></a
                >
                <p class="post-info">
                  <span class="post-author">Posted by John Sparrow</span>
                  <span class="slash"></span>
                  <span class="post-date">Dec 08, 2017</span>
                  <span class="slash"></span>
                  <span class="post-catetory">Food</span>
                </p>
              </div>
              <div class="post-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non enim ut enim fringilla adipiscing id in lorem.
                  Quisque aliquet neque vitae lectus tempus consectetur. Aliquam
                  erat volutpat. Nunc eu nibh nulla, id cursus arcu.
                </p>
                <a class="btn open-post" href="post-single.html">Read More</a>
              </div>
            </div>
            <div class="post">
              <div class="post-thumbnail">
                <a class="open-post" href="post-single.html">
                  <nuxt-img
                    format="webp"
                    quality="100"
                    loading="lazy"
                    src="images/blog/midium/3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="post-title">
                <a class="open-post" href="post-single.html"
                  ><h2>Typography for web</h2></a
                >
                <p class="post-info">
                  <span class="post-author">Posted by John Sparrow</span>
                  <span class="slash"></span>
                  <span class="post-date">Dec 08, 2017</span>
                  <span class="slash"></span>
                  <span class="post-catetory">Food</span>
                </p>
              </div>
              <div class="post-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non enim ut enim fringilla adipiscing id in lorem.
                  Quisque aliquet neque vitae lectus tempus consectetur. Aliquam
                  erat volutpat. Nunc eu nibh nulla, id cursus arcu.
                </p>
                <a class="btn open-post" href="post-single.html">Read More</a>
              </div>
            </div>
            <div class="post">
              <div class="post-thumbnail">
                <a class="open-post" href="post-single.html">
                  <nuxt-img
                    format="webp"
                    quality="100"
                    loading="lazy"
                    src="images/blog/midium/2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="post-title">
                <a class="open-post" href="post-single.html"
                  ><h2>Typography for web</h2></a
                >
                <p class="post-info">
                  <span class="post-author">Posted by John Sparrow</span>
                  <span class="slash"></span>
                  <span class="post-date">Dec 08, 2017</span>
                  <span class="slash"></span>
                  <span class="post-catetory">Food</span>
                </p>
              </div>
              <div class="post-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non enim ut enim fringilla adipiscing id in lorem.
                  Quisque aliquet neque vitae lectus tempus consectetur. Aliquam
                  erat volutpat. Nunc eu nibh nulla, id cursus arcu.
                </p>
                <a class="btn open-post" href="post-single.html">Read More</a>
              </div>
            </div>
            <div class="post">
              <div class="post-thumbnail">
                <a class="open-post" href="post-single.html">
                  <nuxt-img
                    format="webp"
                    quality="100"
                    loading="lazy"
                    src="images/blog/midium/1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="post-title">
                <a class="open-post" href="post-single.html"
                  ><h2>Typography for web</h2></a
                >
                <p class="post-info">
                  <span class="post-author">Posted by John Sparrow</span>
                  <span class="slash"></span>
                  <span class="post-date">Dec 08, 2017</span>
                  <span class="slash"></span>
                  <span class="post-catetory">Food</span>
                </p>
              </div>
              <div class="post-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean non enim ut enim fringilla adipiscing id in lorem.
                  Quisque aliquet neque vitae lectus tempus consectetur. Aliquam
                  erat volutpat. Nunc eu nibh nulla, id cursus arcu.
                </p>
                <a class="btn open-post" href="post-single.html">Read More</a>
              </div>
            </div>
            <div class="text-center">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#"
                    >2 <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
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
