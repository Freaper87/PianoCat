<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>
        <v-container>
          <img src="@/static/chibi-1.png" class="chibi" />
      </v-container>
          <v-flex xs12 sm10 lg8>
            <v-layout column>
              <v-flex mb-5>
                <h1 class="display-3" style="line-height: 1 !important; " v-html="homedata[0].headline" ></h1>
              </v-flex>
              <v-flex mb-5>
                <p class="subheading" v-html="homedata[0].description"></p>
              </v-flex>
              <v-flex>
                <card :cover="covers[covers.length - 1]" :VideoStatistics="VideoStatistics"><span slot="recent" class="primary ribbon color-3">Most recent</span></card>
              </v-flex>
            </v-layout>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.pacifico-font {
  font-family: 'Pacifico', cursive;
}

.hero-font {
  font-size: 126px;
  font-weight: 100;
  text-shadow: 0px 0px 60px #cacddc, 0px 2px 4px #cacddc, 0px -2px 4px #cacddc;
  color: #242c53;
}

.v-parallax.myParallax {
  position: absolute;
  width: 100%;
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

</style>
<script>
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      search: '',
      sortSettings: {
        za: false
      }
    }
  },
  computed: {
    covers() {
      return this.$store.getters.allCovers
    },
    VideoStatistics() {
      return this.$store.getters.allVideostatistics
    },
    homedata() {
      return this.$store.getters.allHomedata
    }
  }
}
</script>
