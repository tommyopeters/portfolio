<template>
  <div class="content-blocks contact" :class="{ showx: open }">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">Get in touch</h3>
        <div class="row">
          <div class="col-md-6">
            <form
              class="contact-form bv-form"
              action="send_mail.php"
              method="post"
              id="contact_form"
              novalidate="novalidate"
            >
              <button
                type="submit"
                class="bv-hidden-submit"
                style="display: none; width: 0px; height: 0px"
              ></button>
              <div class="form-control-wrap">
                <div
                  id="message"
                  class="alert alert-danger alert-dismissible fade"
                ></div>
                <div class="form-group has-feedback">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Name*"
                    name="fname"
                    data-bv-field="fname"
                  /><i
                    style="display: none"
                    class="form-control-feedback bv-no-label"
                    data-bv-icon-for="fname"
                  ></i>
                  <small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="stringLength"
                    data-bv-for="fname"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter a value with valid length</small
                  ><small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="notEmpty"
                    data-bv-for="fname"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter your name</small
                  >
                </div>
                <div class="form-group mar-top-40 has-feedback">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="email*"
                    name="email"
                    data-bv-field="email"
                  /><i
                    style="display: none"
                    class="form-control-feedback bv-no-label"
                    data-bv-icon-for="email"
                  ></i>
                  <small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="notEmpty"
                    data-bv-for="email"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter your email address</small
                  ><small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="emailAddress"
                    data-bv-for="email"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter a valid email address</small
                  >
                </div>
                <div class="form-group mar-top-60 has-feedback">
                  <textarea
                    class="form-control"
                    rows="10"
                    name="comment"
                    id="comment"
                    placeholder="Your Message"
                    data-bv-field="comment"
                  ></textarea
                  ><i
                    style="display: none"
                    class="form-control-feedback bv-no-label"
                    data-bv-icon-for="comment"
                  ></i>
                  <small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="stringLength"
                    data-bv-for="comment"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter at least 10 characters and no more than
                    200</small
                  ><small
                    style="display: none"
                    class="help-block"
                    data-bv-validator="notEmpty"
                    data-bv-for="comment"
                    data-bv-result="NOT_VALIDATED"
                    >Please enter a description</small
                  >
                </div>
                <div class="form-group mar-top-40">
                  <button type="submit" class="btn v7">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-5 offset-md-1">
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-location-outline"></i>
              </div>
              <div class="contact-details">
                <h5>Address</h5>
                <p>2A, Iyalla Street, Ikeja, Lagos, Nigeria</p>
              </div>
            </div>
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-telephone-outline"></i>
              </div>
              <div class="contact-details">
                <h5>Call</h5>
                <p><a href="tel:+2348172127320">+234 817 212 7320</a></p>
              </div>
            </div>
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-email-outline"></i>
              </div>
              <div class="contact-details">
                <h5>Enquiries</h5>
                <p>tommyopeters@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <!--Google Map-->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2764721565977!2d3.3537787509323165!3d6.61253072393156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cba817d48f%3A0xf5a9d799c30e4a87!2s2a%20Iyalla%20St%2C%20Oregun%5C%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1567460025525!5m2!1sen!2sng"
              style="border: 0"
              allowfullscreen=""
              width="800"
              height="600"
              frameborder="0"
            ></iframe>
            <!--Google Map End-->
          </div>
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
