<script setup>


</script>

<template>
  <div class="mt-3">

    <div class="cover py-4">
      <div class="container-fluid container-xl">
        <div class="row">
          <div class="col-md-6 text-white py-5 text-center text-md-start">
            <h1 class="pt-md-5 display-5 fw-bold">Need a laptop or desktop?</h1>
            <p class="pt-3 fw-bol fs-6 text">
              Want a computer that is smart, secure, and ready when you are? It's <br class="d-none">
              time for an HP Chromebook. Designed to run fast and stay fast, HP Chromebook  <br class="d-none">
              come with the best of Google built-in.
            </p>
            <a class="btn btn-lg fw-bold btn-success sm-btn" href="https://api.whatsapp.com/send?phone=233249550469">
              <span class="fas fa-comment"></span>
              Whatsapp Us
            </a>
            <a class="btn btn-lg fw-bold btn-light sm-btn ms-2 px-5" href="tel:+233249550469">
              <span class="fas fa-phone"></span>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid container-md my-5">
      <div class="row">
        <h2 class="text-danger text-center">MAINTENANCE AND REPAIRS</h2>
        <p class="text-center">
          When it comes to repairs and maintenance, whether it is a laptop, desktop or tablet,
          RichFamily Tree Enterprise <br class="d-none d-lg-block"> is second to none. Call us now!!!.
        </p>
        <div class="col">
          <img src="/img/computers/repair.jpg" alt="" class="img-fluid w-100">
        </div>
      </div>

      <div class="row mt-5">
        <h2 class="text-center text-danger">WHOLESALE AND RETAIL</h2>
        <p class="text-center">
          Whether you want a simple budget PC, a productivity workhorse, or a screamer of
          a gaming notebook, <br class="d-none d-lg-block"> our deep-dive guide has the advice (and top picks!)
          you need to find the best laptop for you.
        </p>
        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/1.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/2.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/3.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
      </div>

      <div class="row mt-3">

        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/4.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/5.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="/img/computers/6.jpg" alt="" class="img-fluid w-100 p-4 p-lg-0">
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.cover{
  background: linear-gradient(rgba(0,0,0,0.4), rgb(0,0,0,0.4)), url("/img/computers/cover.jpg");
  background-position: center;
  background-size: cover;
}

@media screen and (min-width: 1020px) {
  .cover{
    background-size: auto;
  }
}


@media screen and (min-width: 1000px) {
  .text{
    font-size: 1.4em !important;
  }
}


@media screen and (max-width: 365px) {
  .sm-btn{
    width: 40% !important;
    font-size: 0.8em;
    padding: 10px 0 !important;
  }
}


</style>