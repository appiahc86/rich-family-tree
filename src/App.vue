<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";

const navbarCollapse = ref(null);
const route =  useRoute();
const router = useRouter();
const moreServices = ref(null);

const togglerElement = ref(null);


const togglerFunction = (e) => {

  if ( e.delegateTarget.classList.contains('collapsed')){
    e.delegateTarget.children[0].style.display = 'block';
    e.delegateTarget.children[1].style.display = 'none';
  }else{
    e.delegateTarget.children[0].style.display = 'none';
    e.delegateTarget.children[1].style.display = 'block';
  }

}

const hideTimesIcon = () => {
  togglerElement.value.children[0].style.display = 'block';
  togglerElement.value.children[1].style.display = 'none';
}

const goHome = () => {router.push({name: 'home'})}

onMounted(() => {

  watch(() => route.name, () => {
    navbarCollapse.value.classList.remove('show');
    togglerElement.value.children[0].style.display = 'block';
    togglerElement.value.children[1].style.display = 'none';
  })

  moreServices.value.onclick = () =>  navbarCollapse.value.classList.remove('show');


})


</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top bg-dark p-0" id="mainNav">
      <div class="container-fluid">
        <a class="navbar-brand" style="cursor: pointer;" @click="goHome">
          <img src="/logo.png" class="logo" height="50" width="200" alt="logo"/>
        </a>
        <a class="navbar-toggler text-white" @click="togglerFunction($event)" ref="togglerElement" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars ms-1"></i>
          <i class="fas fa-times ms-1" style="display: none;"></i>
        </a>
        <div class="collapse navbar-collapse text-white" id="navbarResponsive" ref="navbarCollapse">
          <ul class="navbar-nav text-uppercase ms-auto py-lg-0 fw-bold">
            <li class="nav-item text-center"><router-link :to="{name: 'home'}" class="nav-link ">home</router-link></li>

            <li class="nav-item dropdown">
              <div class="nav-link dropdown-toggle text-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>services
              </div>
              <ul class="dropdown-menu text-center">
                <li><router-link :to="{name: 'laptops-and-computers'}" class="dropdown-item">laptops & computers</router-link></li>
                <li><router-link :to="{name: 'decoder-antenna'}" class="dropdown-item">decoder/antenna installation</router-link></li>
                <li><router-link :to="{name: 'fire-alarm-system'}" class="dropdown-item">fire alarm system</router-link></li>
                <li><router-link :to="{name: 'cctv-cameras'}" class="dropdown-item">cctv cameras</router-link></li>
                <li><router-link :to="{name: 'led-3d-billboard'}" class="dropdown-item">led/3d signboards</router-link></li>
                <li><router-link :to="{name: 'electric-fence'}" class="dropdown-item">electric fence</router-link></li>
                <li><a class="dropdown-item fw-bold text-info" href="#more-services" ref="moreServices" @click="hideTimesIcon">more services</a></li>
              </ul>
            </li>
            <li class="nav-item text-center"><router-link :to="{name: 'about'}" class="nav-link ">about us</router-link></li>
            <li class="nav-item text-center"><router-link :to="{name: 'contact'}" class="nav-link ">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <br><br>

    <main class="mt-2">
      <router-view></router-view>
    </main>

      <!--   Services List  -->
    <div class="bg-dark mt-4 p-5" id="more-services">

    <div class="container">
      <div class="row">
        <h3 class="text-center text-white my-3 mt-3">SERVICES LIST</h3>
        <div class="col-md-4 text-white">
          <ul class="text-capitalize">
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> air condition installation</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> laptops & computers</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> decoder/antenna installation</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> fire alarm system</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> led/3d signboards</li>
          </ul>
        </div>

        <div class="col-md-4 text-white">
          <ul class="text-capitalize">
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> cctv camera installation</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> audio/video doorbell</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> access control</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> computer networking</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> hardware & software</li>
          </ul>
        </div>

        <div class="col-md-4 text-white">
          <ul class="text-capitalize">
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> electric fence</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> graphic designing</li>
            <li class="list-unstyled"><span class="fas fa-arrow-alt-circle-right"></span> general printing</li>
          </ul>
        </div>
      </div>
    </div>

  </div>


    <!-- Footer-->
    <footer class="footer py-4 mt-5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-5 text-lg-start text-center">
            Copyright &copy;
            <span style="font-weight: bold;">RICHFAMILY TREE ENTERPRISE</span>
            2022
          </div>

          <div class="col-lg-4 my-3 my-lg-0 text-center">
            <a class="btn btn-dark btn-social mx-2" href="tel:+233249550469"><i class="fas fa-phone"></i></a>
            <a class="btn btn-success btn-social mx-2" href="https://api.whatsapp.com/send?phone=233249550469"><i class="fab fa-whatsapp"></i></a>
            <a class="btn btn-primary btn-social mx-2" href="https://www.facebook.com/profile.php?id=100063596876607" target="_blank"><i class="fab fa-facebook-f"></i></a>
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
