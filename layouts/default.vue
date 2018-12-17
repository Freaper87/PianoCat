<template>
  <v-app>
    <div id="pianocat-app">
      <div class="bg">
        <img src="@/static/gradient5.svg" alt="background-gradient" style="left: 26%;" />
        <img src="@/static/gradient4.svg" alt="background-gradient" style="left: -1%;bottom: 10px;" />
        <img src="@/static/gradient3.svg" alt="background-gradient" style="height: 100%; bottom: 10px;" />

      </div>
        <navigation />
        <nuxt />
        <card-list></card-list>
        <v-footer class="pa-3">
          <v-spacer></v-spacer>
          <div>footer</div>
        </v-footer>
        <v-snackbar v-model="snackbar" bottom>{{ this.$store.getters.getError }} <v-btn color="pink" flat @click="snackbar = false">Close</v-btn></v-snackbar>
       <!-- <v-dialog v-model="dialog" dark class="video-dialog" lazy>
        <div class="shine"><iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" v-bind:src="`//www.youtube.com/embed/${this.$store.modal}?autoplay=0&amp;rel=0`"></iframe></div>
      </v-dialog> -->
      </div>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700');

body {
  font-family: 'Raleway', sans-serif;
}
a {
  text-decoration: none;
}
.roboto-font {
  font-family: 'Roboto';
}
.pacifico-font {
  font-family: 'Pacifico', cursive;
}
.hero-font {
  font-size: 126px;
  font-weight: 100;
  text-shadow: 0px 0px 60px #cacddc, 0px 2px 4px #cacddc, 0px -2px 4px #cacddc;
  color: #242c53;
}

.myContainer {
  position: relative;
  background-color: inherit;
  box-shadow: inherit;
}

.myContainer h1,
.myContainer p {
  color: #fff;
}

.ribbon {
  z-index: 2;
  padding: 10px 55px;
  box-shadow: 0 2px 4px -2px #242c53;
  color: #fff;
  text-align: center;
  vertical-align: sub;
  text-transform: capitalize;
  position: absolute;
  transform: rotateZ(-45deg);
  left: -45px;
  top: 31px;
  overflow: hidden;
  display: inline;
}

.application.theme--light {
  background-color: #77d5fb !important;
  background-image: url(../assets/bg-pattern.png) !important;
  background-position: 44px 0px !important;
}

.bg {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  max-height: 765px;
  background-color: #77d5fb;
  background: url(../assets/bg.jpg);
  background-size: cover;
  background-position: 0% 100%;
  z-index: 0;
  overflow: hidden;
}

.bg img {
  position: absolute;

}

.border {
  width: 200px;
  height: 6px;
  background-color: #303c74;
  display: block;
}
.shine {
  background-color: #CCC !important;
  animation-name: shine; 
  animation-duration: 2s; 
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate-reverse;
}
@keyframes shine {
    from {transition:none;}
    to {background-color:#f6f7f8;transition: all 0.3s ease-out;}
}
</style>
<script>
import Navigation from '@/components/Navigation'
import CardList from '@/components/CardList'

export default {
  components: {
    Navigation,
    CardList
  },
  computed: {
    snackbar() {
      if (this.$store.getters.getError === '') {
        return false
      } else {
      return true
      }
    }
  },
  mounted() {
    this.$store.dispatch('getCovers')
  }
}
</script>
