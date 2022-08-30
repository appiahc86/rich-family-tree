<script setup>


</script>

<template>
  <div class="mt-3">

    <div class="cover py-4">
      <div class="container-fluid container-xl">
        <div class="row">
          <div class="col-md-6 text-white pt-5 text-center text-md-start">
            <h1 class="pt-5 display-5 fw-bold">Installation of CCTV</h1>
            <p class="pt-3 fw-bol fs-6 text">
              We will select the optimum solution for all your problems. With us <br class="d-none">
              you will always feel safe. Cameras apartments have stylish design and <br class="d-none">
              can be installed in each room where you want to observe.
            </p>
            <a class="btn btn-lg fw-bold btn-success sm-btn" href="https://api.whatsapp.com/send?phone=233249550469">
              <span class="fas fa-comment"></span>
              Whatsapp Us
            </a>
            <a class="btn btn-lg fw-bold btn-outline-light sm-btn ms-2 px-5" href="tel:+233249550469">
              <span class="fas fa-phone"></span>
              Call Us
            </a>
          </div>
          <div class="col-md-6">
            <img src="/img/cameras/cam.png" alt="" class="d-none d-md-block img-fluid w-100">
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid container-md my-5">
      <div class="row">
        <h2>MONITOR YOUR HOME AND BUSINESS</h2>
        <div class="col">
          <img src="/img/cameras/cover.jpg" alt="" class="img-fluid w-100">
        </div>
      </div>

      <div class="row">
        <h2 class="text-center text-danger">WHOLESALE AND RETAIL</h2>
        <p class="text-center fs-5">
          We also have all types of cctv and accessories
        </p>
        <div class="col-md-4 col-lg-4">
          <img src="/img/cameras/dome.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/cameras/grp.png" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/cameras/bullet.png" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.cover{
  background: linear-gradient(rgba(0,0,0,0.7), rgb(0,0,0,0.7)), url("/img/cameras/house.jpg");
  background-position: center;
}

@media screen and (min-width: 1000px) {
.text{
  font-size: 1.4em !important;
}
}

@media screen and (max-width: 300px) {
  .sm-btn{
    width: 40% !important;
    font-size: 0.8em;
    padding: 5px !important;
  }
}
</style>