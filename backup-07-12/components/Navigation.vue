<template>
  <v-container>
    <v-toolbar style="z-index:2;" color="transparent" dense flat>
      <v-tooltip bottom>
        <a href="https://www.youtube.com/c/PianoCatMusic?sub_confirmation=1" target="_blank" slot="activator" class="navlogotext"><img src="@/assets/YouTube_light_icon.png" width="35px"><span class="pacifico-font">PianoCat</span></a>
        <span><v-layout align-center row justify-top><v-icon left dark color="patreon">play_arrow</v-icon> &nbsp;Find me on YouTube!</v-layout></span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" dark>Home</v-btn>
        <v-btn flat to="/about" dark>About</v-btn>
        <v-tooltip bottom>
          <v-btn to="/about" color="patreon" dark depressed slot="activator">
            <span class="patreonlogo">
		        <svg viewBox="0 0 569 546" version="1.1" xmlns="http://www.w3.org/2000/svg" class="patronsvg v-icon v-icon--left material-icons theme--dark"><title>Patreon logo</title><g><circle data-color="1" id="Oval" cx="362.589996" cy="204.589996" r="204.589996" fill="#fff"></circle><rect data-color="2" id="Rectangle" x="0" y="0" width="100" height="545.799988"></rect></g></svg>
		        </span>
            Become A Patron </v-btn>
          <span><v-layout align-center row justify-top><v-icon left dark color="patreon">favorite</v-icon> &nbsp;Support my music!</v-layout></span>
        </v-tooltip>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<style>
.navlogotext {
  color: #fff;
  text-decoration: none !important;
}

.navlogotext .pacifico-font {
  margin-left: 10px;
  font-size: 20px;
  vertical-align: text-bottom;
}

.patronsvg {
  align-self: center;
  height: 20px;
  width: 20px;
}

.patreonlogo {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}

.v-toolbar {
  margin-top: 20px !important;
}
.v-toolbar__content {
  height: 40px !important;
}

.v-toolbar__content a.v-btn {
  border-radius: 20px;
  margin: 0 10px !important;
}
</style>
<script>
export default {
  name: 'Navigation'
}
</script>
