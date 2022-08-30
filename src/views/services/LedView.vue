<script setup>

import {onMounted} from "vue";

onMounted(() => {

  const myCarouselElement = document.querySelector('#carouseLed')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    wrap: true
  })
  carousel.cycle();
})

</script>

<template>
  <div class="mt-3">
   <div class="" style="background: #ecf0f1">
     <div class="container-fluid py-2">
       <div class="row p-lg-6 flex-md-row-reverse">
         <div class="col-lg-6 py-4 p-2 p-md-3">
           <img src="/img/led/led1.jpg" alt="" class="img-fluid shadow w-100">
         </div>
         <div class="col-lg-6 py-5 px-3">
           <h1 class="display-6 fw-bold p-lg-3">LED DIGITAL BILLBOARD <br class="d-none d-lg-block">SOLUTIONS</h1>
           <p class="mt-5 fs-5 fw-bold text-center">
             When looking for LED digital billboard solution, you are searching
             for a reliable and durable product that fits your needs. We offer LED digital billboard
             solutions for every situation.If your project has specific integration requirements just simply let us know.
           </p>
         </div>
       </div>
     </div>
   </div>


        <!--  Carousel  -->

    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h2 class="text-danger text-md-center">We also have all sizes of 3D billboards available</h2>
          <div id="carouseLed" class="carousel slide carousel-fade p-xl-5" data-bs-ride="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/led/3D-1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/img/led/3D-2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/img/led/3D-3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>






          <!--    Led Billboard -->
    <div class="container-fluid container-md mt-5 p-0 p-lg-5">
      <h2 class="fw-bold px-2">Billboard solutions of any size</h2>
      <p class="fs-5 px-2">
        Our goal is to create the ideal digital billboard solution for you.
        To do so, we keep your needs in mind and aim to find the best solution for your application.
        That also means we offer billboards in many different sizes. From small to XXL-sized billboards,
        we never turn down a challenge!
      </p>
      <div class="row flex-md-row-reverse g-0" style="background: #ecf0f1">
        <div class="col-md-6">
          <img src="/img/led/indoor.jpg" alt="" class="img-fluid w-100">
        </div>
        <div class="col-md-6 pt-5  px-3">
          <h2 class="fw-bold">INDOOR LED SCREENS</h2>
          <p class="mt-2 mt-lg-5 fs-6 text-center">
            Our indoor LED screens can be used for any application you can think of.
            Advertising in malls, event screens, control rooms, churches, TV studios, exhibition
            centers, showrooms or interactive applications. Communicate your message on any size
            and at any resolution you want in a truly impactful way.
          </p>
        </div>
      </div>


      <div class="row g-0" style="background: #ecf0f1;">
        <div class="col-md-6">
          <img src="/img/led/church.jpg" alt="" class="img-fluid w-100 h-100">
        </div>
        <div class="col-md-6 pt-5 px-3">
          <h2 class="fw-bold">CHURCH LED</h2>
          <p class="mt-2 mt-lg-5 fs-6 text-center">
            Bring sermons to life with led displays. Our display solutions can
            be used for e.g. streaming video or content such as lyrics, scripture and much
            more. Contact us and we will provide a solution that fits your church.
          </p>
        </div>

      </div>


    </div>

  </div>
</template>

<style scoped>

</style>
