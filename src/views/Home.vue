<script setup>

import {onMounted} from "vue";

onMounted(() => {

  const myCarouselElement = document.querySelector('#carouselExampleControls')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
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
              <p class="text-white" style="word-spacing: 0.2em;">Best performance over the years.</p>
              <button class="btn btn-sm btn-warning sm-btn px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm btn-light sm-btn px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center">
            <h1 class="text-white">WE ARE TEAM OF THE <br> PROFESSIONALS</h1>
            <p class="text-white" style="word-spacing: 0.2em;">We do big things with great ideas.</p>
              <button class="btn btn-sm sm-btn btn-warning px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm sm-btn btn-light px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center">
              <h1 class="text-white"> HIGHEST STANDARDS <br>  OF CONDUCT</h1>
              <p class="text-white">Committed to superior quality and results.</p>
              <button class="btn btn-sm sm-btn btn-warning px-3 py-2 py-md-3 px-md-5 fw-bold">LEARN MORE</button>
              <button class="btn btn-sm sm-btn btn-light px-3 py-2 py-md-3 px-md-5 ms-2 ms-md-5 fw-bold">CONTACT US</button>
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

    <div class="text-center px-5 py-4">
      <h3 class="fw-bold display-5">OUR<span class="text-warning"> SERVICES</span></h3>
      <p class="text-muted font">Our experience and commitment to cutting edge technology allows us to assist our clients in
        <br class="d-none d-md-block">bringing their ideas and projects from concept to reality</p>
    </div>

    <div class="container-fluid container-lg p-4">

      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/decoder1.jpg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">decoder/antenna installation</h6>
              <p>
                Receive improved sound and picture <br class="d-none d-md-block"> quality
              </p>
              <router-link :to="{name: 'decoder-antenna'}" class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/2.jpeg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">electric fence</h6>
              <p>
                Excellent security deterrent to burglary <br class="d-none d-md-block">  and trespassing
              </p>
              <router-link :to="{name: 'electric-fence'}" class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/cctv.jpg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">cctv cameras</h6>
              <p>
                Add a layer of security to your home <br class="d-none d-md-block"> or office
              </p>
              <router-link :to="{name: 'cctv-cameras'}" class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/laptop.jpg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">laptops & computers</h6>
              <p>
                We have variety of laptops and accessories <br class="d-none d-md-block"> at sale
              </p>
              <a class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/led.jpg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">led/3d signboards</h6>
              <p>
                Show your audience dynamic advertisement with<br class="d-none d-md-block"> high attention
              </p>
              <router-link :to="{name: 'led-3d-billboard'}" class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-img-top"><img src="/img/fire_alarm.jpg" alt="" class="img-fluid w-100"></div>
            <div class="card-body text-center">
              <h6 class="text-uppercase fw-bold">fire alarm system</h6>
              <p>
                Warn people when fire or smoke is<br class="d-none d-md-block"> detected
              </p>
              <a class="text-decoration-none">
                <h6 class="text-warning fw-bold">READ MORE</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>

@media screen and (max-width: 300px) {
  .sm-btn{
    width: 47% !important;
    font-size: 0.8em;
    padding: 4px !important;
  }
}

</style>
