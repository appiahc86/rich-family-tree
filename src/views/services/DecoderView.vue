<script setup>
import {onMounted} from "vue";

onMounted(() => {

  const myCarouselElement = document.querySelector('#decoderCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    wrap: true
  })
  carousel.cycle();
})

</script>

<template>
  <div class="mt-3">
    <div id="decoderCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="cover1 py-5 text-white">
            <div class="container-fluid container-md">
              <div class="row justify-content-center justify-content-lg-start">
                <div class="col-md-8">
                  <h1 class="display-3">WE PROVIDE ULTIMATE TV ANTENNA INSTALLATION.</h1>
                  <p class="fs-6" style="letter-spacing: 0.2em;">
                    Our team is proficient in an array of services that can help elevate and empower your
                    company or organization. We work with you to build comprehensive, thoughtful,
                    and purpose-driven identities and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="cover2 py-5 text-white">
            <div class="container-fluid container-md">
              <div class="row justify-content-center justify-content-lg-end">
                <div class="col-md-8">
                  <h1 class="display-3">WE PROVIDE ULTIMATE TV ANTENNA INSTALLATION.</h1>
                  <p class="fs-6" style="letter-spacing: 0.2em;">
                    Our team is proficient in an array of services that can help elevate and empower your
                    company or organization. We work with you to build comprehensive, thoughtful,
                    and purpose-driven identities and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="d-none d-md-block d-lg-none">
        <button class="carousel-control-prev" type="button" data-bs-target="#decoderCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#decoderCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.cover1{
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url("/img/decoder/1.jpg");
  /*background-size: 100%;*/
  background-size: cover;
  background-position: center;
}
.cover2{
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url("/img/decoder/2.jpg");
  /*background-size: cover;*/
  background-position: center;
  background-size: cover;
}
</style>