<script setup>

import {onMounted} from "vue";

onMounted(() => {

  const myCarouselElement = document.querySelector('#carouselExampleControls')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    wrap: true
  })
  carousel.cycle();
})

</script>

<template>
  <div class="">

    <div class="p-5 cover-img-container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="text-center">
              <h1 class="text-white">LET'S BUILD <br>YOUR DREAM WITH US</h1>
              <p class="text-white">Massa sit amet ullamcorper fringilla tortor consec adipis elit sedsmod.</p>
              <button class="btn btn-sm btn-warning px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm btn-light px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center">
            <h1 class="text-white">WE ARE TEAM OF THE <br> PROFESSIONALS</h1>
            <p class="text-white">Massa sit amet ullamcorper fringilla tortor consec adipis elit sedsmod.</p>
              <button class="btn btn-sm btn-warning px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm btn-light px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center">
              <h1 class="text-white"> HIGHEST STANDARDS <br>  OF CONDUCT</h1>
              <p class="text-white">Massa sit amet ullamcorper fringilla tortor consec adipis elit sedsmod.</p>
              <button class="btn btn-sm btn-warning px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm btn-light px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
            </div>
          </div>

        </div>

        <div class="d-none d-md-block">
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      </div>
    </div>

    <div class="text-center p-5">
      <h3 class="fw-bold">OUR<span class="text-warning"> SERVICES</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, temporibus ullam.
         <br>doloremque harum id porro totam voluptates? Blanditiis</p>
    </div>

    <div class="container-fluid">

      <div class="row mt-4">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-img-top"><img src="public/img/1.jpeg" alt="" class="img-fluid w-100"></div>
            <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cupiditate debitis delectus
                deleniti deserunt, esse molestiae natus non quaerat, quas similique tenetur vel.
                Accusamus et fuga inventore ipsa repudiandae.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-img-top"><img src="public/img/2.jpeg" alt="" class="img-fluid w-100"></div>
            <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cupiditate debitis delectus
                deleniti deserunt, esse molestiae natus non quaerat, quas similique tenetur vel.
                Accusamus et fuga inventore ipsa repudiandae.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-img-top"><img src="public/img/3.jpeg" alt="" class="img-fluid w-100"></div>
            <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cupiditate debitis delectus
                deleniti deserunt, esse molestiae natus non quaerat, quas similique tenetur vel.
                Accusamus et fuga inventore ipsa repudiandae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
