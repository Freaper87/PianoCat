<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>
        <v-container class="hidden-xs-only">
          <img src="@/static/chibi-1.png" class="chibi" alt="PianoCat sleepy chibi" />
      </v-container>
          <v-flex xs12 sm12 lg8>
            <v-layout column>
              <v-flex mb-4>
                <h1 class="white--text" :class="{'display-2': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp}" style="line-height: 1 !important; " v-html="homedata[0].headline"></h1>
                <div class="border white mt-4 mb-4"></div>
                <span class="subheading white--text" v-html="homedata[0].description"></span>
              </v-flex>
              <v-flex v-if="covers">
                <card :cover="covers[covers.length - 1]" :VideoStatistics="VideoStatistics"><span slot="recent" class="ribbon color-3"><v-tooltip bottom><v-icon slot="activator">star</v-icon><span>Most recent cover</span></v-tooltip></span></card>
              </v-flex>
            </v-layout>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.chibi {
  width: 100%;
  max-width: 385px;
}
</style>
<script>
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  head() {
    return {
      title: this.homedata[0].metatitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.homedata[0].metadescription
        }
      ]
    }
  },
  async fetch({ store }) {
    await store.dispatch('getHomedata')
  },
  data() {
    return {
      search: ''
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
