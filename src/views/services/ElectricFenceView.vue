<script setup>

import {onMounted} from "vue";

onMounted(() => {

  const myCarouselElement = document.querySelector('#carouselFence')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    wrap: true
  })
  carousel.cycle();
})
</script>

<template>
  <div class="mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <img src="/img/fence/1.jpg" alt="" class="img-fluid d-block w-100">
        </div>
      </div>




      <div class="row mt-5 mb-3">
        <div class="col-md-6 col-lg-7 pt-xl-5">
          <p>
            In an ideal world, no one will need to build a boundary or even gate their
            premises but that is not so. This is why we go a long way to ensure the people
            we love and care for are safe.
          </p>
          <p>
            The reality is that the news of unsafe neighbourhood never seem to go away and with
            recent kidnappings in the country things are entirely different when the issue of home security pops up.
          </p>
          <p>
            There are some cost-effective ways to ensure the safety of your office and home especially
            when you are not around. We are talking about no other method than electric fencing which had
            proven over the years to be one of the best physical intrusion prevention mechanism.
          </p>
        </div>

        <div class="col-md-6 col-lg-5">
          <div id="carouselFence" class="carousel slide carousel-fade p-xl-5" data-bs-ride="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/fence/2.jpg" class="img-fluid d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/img/fence/3.jpg" class="img-fluid d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/img/fence/4.jpg" class="img-fluid d-block w-100" alt="...">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>