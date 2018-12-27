<template>
  <v-app>
    <no-ssr>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLV8DF8"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    </no-ssr>
    <div id="pianocat-app">
      <div 
        :class="{'bg-maxheight' : $vuetify.breakpoint.smAndUp}" 
        class="bg">
        <img 
          src="@/static/gradient5.svg" 
          alt="background-gradient" 
          style="left: 26%;" >
        <img 
          src="@/static/gradient4.svg" 
          alt="background-gradient" 
          style="left: -1%;bottom: 10px;" >
        <img 
          src="@/static/gradient3.svg" 
          alt="background-gradient" 
          style="height: 100%; bottom: 10px;" >

      </div>
      <navigation />
      <nuxt />
      <card-list/>
      <v-footer class="pa-3 footer">
        <v-spacer/>
        <nuxt-link to="/impressum" rel="nofollow">Impressum</nuxt-link>&nbsp;|&nbsp;<nuxt-link to="/datenschutz" rel="nofollow"> Datenschutz</nuxt-link>
        <no-ssr>
          <cookie-law buttonText="OK">
            <div slot="message">
              PianoCat uses cookies to ensure you a better service. By using this site, you agree to our <nuxt-link to="/datenschutz">cookie and privacy policy</nuxt-link>.
            </div>
          </cookie-law>
        </no-ssr>
      </v-footer>
      <v-snackbar 
        v-model="snackbar" 
        bottom>{{ this.$store.getters.getError }} <v-btn 
          color="pink" 
          flat 
          @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <div class="mydialog-content" :class="{'mydialog-active': dialog.open}">
        <div class="mydialog" :class="{'minimize': dialog.minimize}">
          <div class="videoContainer">
            <div class="videoclose">
              <v-btn 
                small 
                icon 
                @click="minimizeDialog()">
                <v-icon class="white--text">minimize</v-icon>
              </v-btn>
              <v-btn 
                small 
                icon 
                @click="clearDialog()">
                <v-icon class="white--text">close</v-icon>
              </v-btn>
            </div>
            <div class="shine" v-if="dialog.video != ''">
              <iframe 
                id="player" 
                :src="`//www.youtube.com/embed/${dialog.video}?version=3&amp;loop=1&amp;playlist=${dialog.allexceptthisvideo}`" 
                frameborder="0" 
                allowfullscreen="1" 
                title="YouTube video player" 
                width="100%" 
                height="100%"/>   
            </div>
          </div>
        </div>
      </div>
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
  font-weight: 600;
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

.ribbon {
  z-index: 2;
  padding: 5px 20px;
  box-shadow: 0 2px 4px -2px #242c53;
  color: #fff;
  text-align: center;
  vertical-align: sub;
  text-transform: capitalize;
  position: absolute;
  border-bottom-right-radius: 45px;
  overflow: hidden;
  display: inline;
  background-color: #23a1f3;
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
  max-height: 1200px;
  background-color: #77d5fb;
  background: url(../assets/bg.jpg);
  background-size: cover;
  background-position: 0% 100%;
  z-index: 0;
  overflow: hidden;
}

.bg-maxheight {
  max-height: 765px;
}

.bg img {
  position: absolute;
}

.border {
  width: 220px;
  height: 6px;
  background-color: #303c74;
  display: block;
}

.shine {
  background-color: #ccc !important;
  animation-name: shine;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate-reverse;
}

.v-dialog {
  height: 66%;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  position: relative;
  background-color: #303c74;
}

.videoclose {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}

#player {
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 40px);
  border: 0;
  overflow: hidden;
  display: inline-block;
  position: absolute;
}

.mydialog.minimize {
  bottom: 0;
  right: 0;
  width: 30%;
  min-width: 320px;
  height: 30%;
  min-height: 210px;
  position: absolute;
}
.mydialog-content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: 6;
    outline: none;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s ease-out;
}
.mydialog-active {
    display: flex;
    transform: scale(1);
    opacity: 1;
}
.mydialog {
    box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
    border-radius: 2px;
    margin: 24px;
    overflow-y: auto;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: inherit;
    height: 66%;
    overflow: hidden;
    width: 100%;
    max-width: 1000px;
    position: relative;
    background-color: #303c74;
}
.footer {
  position: relative;
}
.footer .Cookie--base {
    padding: 0.25em 1em;
    max-width: 1000px;
    margin: 0 auto;
}
.Cookie--base .Cookie__buttons {margin: 0;}
.Cookie--base .Cookie__buttons button.Cookie__button{margin: 0; background: #303c74;}
.Cookie--base .Cookie__buttons button.Cookie__button:hover {background: #1e2648;}
@keyframes shine {
  from {
    transition: none;
  }

  to {
    background-color: #f6f7f8;
    transition: all 0.3s ease-out;
  }
}
</style>
<script>
import Navigation from '@/components/Navigation'
import CardList from '@/components/CardList'
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    Navigation,
    CardList,
    CookieLaw
  },
  computed: {
    snackbar() {
      if (this.$store.getters.getError === '') {
        return false
      } else {
        return true
      }
    },
    dialog() {
      return this.$store.getters.getDialog
    },
    allVideoIds() {
      var allVideoIds = this.$store.getters.allCovers.map(cover => {
        return cover.video
      })
      return allVideoIds.reverse().toString()
    }
  },
  watch: {
    dialog: function() {
      return this.$store.getters.getDialog
    }
  },
  mounted() {
    this.$store.dispatch('getCovers')
  },
  methods: {
    clearDialog() {
      let dialog = {
        open: false,
        video: '',
        minimize: false
      }
      this.$store.commit('GET_DIALOG', dialog)
    },
    minimizeDialog() {
      if (this.dialog.minimize == true) {
        return (this.dialog.minimize = false)
      } else {
        return (this.dialog.minimize = true)
      }
    }
  }
}
</script>
