<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>     
          <v-flex xs10>
             <h1 class="display-3" style="line-height: 1 !important; "><b>{{ homedata[0].aboutheadline }}</b></h1>
             <div class="border white mt-4 mb-4"></div>
            <v-layout>
                <div style="column-count: 3;" v-html="homedata[0].aboutdescription">
                  
                </div>
              
            </v-layout>
          </v-flex>
          <v-flex xs2 ml-2>
          <img src="@/static/chibi-2.png" class="chibi" alt="PianoCat baloon chibi" />
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>

</style>
<script>
import Card from '@/components/Card'
export default {
  name: 'About',
  components: {
    Card
  },
  head() {
    return {
      title: this.homedata[0].aboutmetatitle,
      meta: [
        { hid: 'description', name: 'description', content: this.homedata[0].aboutmetadescription }
      ]
    }
  },
  async fetch ({ store }) {
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
