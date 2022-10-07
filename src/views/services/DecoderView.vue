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
    <!-- carousel -->
    <div id="decoderCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="cover1 py-5 text-white">
            <div class="container-fluid container-md">
              <div class="row justify-content-center justify-content-lg-start">
                <div class="col-md-8">
                  <h1 class="display-3 fw-bold">WE PROVIDE ULTIMATE TV ANTENNA INSTALLATION.</h1>
                  <p class="fs-6" style="letter-spacing: 0.2em;">
                    Transform your living room to theater.
                    Watch your favorite movies or tv shows in high definition from
                    the comfort of your home or office.
                    Tv entertainment will no longer be the same for you.
                  </p>
                  <a class="btn btn-lg btn-outline-light fw-bold" href="tel:+233249550469">Give us a call</a>
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
                  <h1 class="display-3 fw-bold">WE PROVIDE ULTIMATE TV ANTENNA INSTALLATION.</h1>
                  <p class="fs-6" style="letter-spacing: 0.2em;">
                    Transform your living room to theater.
                    Watch your favorite movies or tv shows in high definition from
                    the comfort of your home or office.
                    Tv entertainment will no longer be the same for you.
                  </p>
                  <a class="btn btn-lg btn-light fw-bold" href="tel:+233249550469">Give us a call</a>
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


    <!-- images container -->
    <div class="container-fluid container-md my-5">

      <div class="row mt-5">
        <h2 class="text-center text-danger">WHOLESALE AND RETAIL</h2>
        <p class="text-center fs-5">
          We also have all types of antennas, decoders and accessories
        </p>
        <div class="col-md-4 col-lg-4">
          <img src="/img/decoder/img1.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/decoder/img2.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/decoder/img3.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.cover1{
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url("/img/decoder/1.jpg");
  background-size: cover;
  background-position: center;
}
.cover2{
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url("/img/decoder/2.jpg");
  background-position: center;
  background-size: cover;
}
</style>