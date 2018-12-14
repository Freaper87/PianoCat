<template>
  <v-app>
    <div id="app">
      <div class="bg">
        <img src="@/static/gradient5.svg" style="left: 26%;" />
        <img src="@/static/gradient4.svg" style="left: -1%;bottom: 10px;" />
        <img src="@/static/gradient3.svg" style="height: 100%; bottom: 10px;" />

      </div>
        <navigation />
        <nuxt />
        <card-list></card-list>
      </div>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700');

body {
  font-family: 'Raleway', sans-serif;
}

.application.theme--light {
  background-color: #fff !important;
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

</style>
<script>
import Navigation from '@/components/Navigation'
import CardList from '@/components/CardList'

export default {
  components: {
    Navigation,
    CardList
  },
  mounted() {
    this.$store.dispatch('getCovers')
    this.$store.dispatch('getHomedata')
  }
}
</script>
