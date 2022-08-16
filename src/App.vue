<script setup>
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

const navbarCollapse = ref(null);
const route =  useRoute();
const router = useRouter();

const goHome = () => {router.push({name: 'home'})}

watch(() => route.name, () => {
  navbarCollapse.value.classList.remove('show');
})


</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top bg-dark" id="mainNav">
      <div class="container-fluid">
        <a class="navbar-brand" style="cursor: pointer;" @click="goHome">
          <img src="src/assets/vue.svg" class="logo"  alt="..." />
        </a>
        <a class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-ellipsis-h ms-1"></i>
        </a>
        <div class="collapse navbar-collapse" id="navbarResponsive" ref="navbarCollapse">
          <ul class="navbar-nav text-uppercase ms-auto py-lg-0 fw-bold">
            <li class="nav-item"><router-link :to="{name: 'home'}" class="nav-link ">home</router-link></li>

            <li class="nav-item dropdown">
              <div class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                services
              </div>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">air condition installation</a></li>
                <li><a class="dropdown-item" href="#">laptops & computers</a></li>
                <li><a class="dropdown-item" href="#">decoder/antena installation</a></li>
                <li><a class="dropdown-item" href="#">fire alarm system</a></li>
                <li><a class="dropdown-item" href="#">cctv camera</a></li>
                <li><a class="dropdown-item" href="#">audio/video doorbell</a></li>
                <li><a class="dropdown-item" href="#">access control</a></li>
                <li><a class="dropdown-item" href="#">computer networking</a></li>
                <li><a class="dropdown-item" href="#">hardware & software</a></li>
                <li><a class="dropdown-item" href="#">3d signboards</a></li>
                <li><a class="dropdown-item" href="#">led signboard</a></li>
                <li><a class="dropdown-item" href="#">electric fence</a></li>
              </ul>
            </li>

            <li class="nav-item"><router-link :to="{name: 'about'}" class="nav-link ">about</router-link></li>
            <li class="nav-item"><router-link :to="{name: 'contact'}" class="nav-link ">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <br><br>

    <main class="mt-2">
      <router-view></router-view>
    </main>


    <!-- Footer-->
    <footer class="footer py-4 mt-5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-4 text-lg-start text-center">
            Copyright &copy;
            <span style="font-weight: bold;">RICHFAMILY TREE ENTERPRISE</span>
            2022
          </div>

          <div class="col-lg-4 my-3 my-lg-0 text-center">
            <a class="btn btn-dark btn-social mx-2" href="tel:+233249550469"><i class="fas fa-phone"></i></a>
            <a class="btn btn-success btn-social mx-2" href="https://api.whatsapp.com/send?phone=233249550469"><i class="fab fa-whatsapp"></i></a>
            <a class="btn btn-primary btn-social mx-2" href="https://web.facebook.com/Modern-Tiles-Gh-Ltd-107072184972560"><i class="fab fa-facebook-f"></i></a>
          </div>

        </div>
      </div>
    </footer>

  </div>

</template>

<style scoped>
.router-link-exact-active{
  color: goldenrod;
}
</style>
S