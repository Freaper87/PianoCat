<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>     
          <v-flex xs12>
             <h1 class="display-3 white--text" style="line-height: 1 !important; "><b>{{ homedata[0].aboutheadline }}</b></h1>
             <div class="border white mt-4 mb-4"></div>
            <v-layout>
                <div class="white--text" :class="{'columnCount-2': $vuetify.breakpoint.sm, 'columnCount-3': $vuetify.breakpoint.smAndUp}" v-html="homedata[0].aboutdescription">            
                </div>              
            </v-layout>
          </v-flex>
          <v-flex xs2 ml-2 class="hidden-xs-only">
          <img src="@/static/chibi-2.png" class="chibi" alt="PianoCat baloon chibi" />
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.columnCount-3 {
  column-count: 3;
}
.columnCount-2 {
  column-count: 2;
}
</style>
<script>
export default {
  name: 'About',
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
