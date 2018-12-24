<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card class="radius-border">
            <v-layout :class="{'ml-0 mr-5': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}">
              <v-container>
                <v-flex xs12 mb-4 pt-5>
                  <h1 class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-2':$vuetify.breakpoint.smAndUp} text-uppercase primary--text font-weight-bold" v-if="cover" :class="{'shine': !cover.id}">{{cover.title}}</h1>
                </v-flex>
                <v-flex xs12 mb-4>
                  <h2 class="title primary--text" v-if="cover" :class="{'shine': !cover.id}">{{cover.subtitle}}</h2>
                </v-flex>
                <div class="border"></div>
              </v-container>
            </v-layout>
            <v-layout :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}" wrap>
              <v-flex xs12 md6>
                <v-container>
                  <v-card height="301px" :class="{'shine': !cover.id}">
                    <iframe frameborder="0" v-if="cover.video" allowfullscreen="1" title="YouTube video player" width="100%" v-bind:src="'https://www.youtube.com/embed/' + cover.video + '?autoplay=0&amp;rel=0'"></iframe>
                  </v-card>
                  <v-flex xs12>
                    <v-flex offset-sm6 xs12 sm6 mt-2>
                      <v-layout v-if="videoinfo" class="text-xs-right">
                        <v-flex xs6 sm6 right>
                          <v-icon small>remove_red_eye</v-icon>
                          {{ videoinfo[0] ? videoinfo[0].statistics.viewCount : '-'}}
                        </v-flex>
                        <v-flex xs3 sm3>
                          <v-icon small>thumb_up</v-icon>
                          {{ videoinfo[0] ? videoinfo[0].statistics.likeCount : '-'}}
                        </v-flex>
                        <v-flex xs3 sm3>
                          <v-icon small>thumb_down</v-icon>
                          {{ videoinfo[0] ? videoinfo[0].statistics.dislikeCount : '-'}}
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-card-text :class="{'shine': !cover.id}">
                      <span v-if="cover" v-html="cover.description"></span>
                    </v-card-text>
                    <v-btn aria-label="Download PDF" color="primary" class="white--text" v-if="cover.sheetpdf != null" :href="cover.sheetpdf.path" rel="noopener" target="_blank">
                      <v-icon left dark>picture_as_pdf</v-icon>
                      Download
                    </v-btn>
                    <v-btn aria-label="Loading" color="primary" class="white--text" v-else disabled><v-icon left dark>picture_as_pdf</v-icon>Loading</v-btn>
                    <v-tooltip bottom>
                      <v-btn flat class="primary--text" slot="activator" aria-label="Become a Patron" href="https://www.patreon.com/bePatron?c=945106" target="_blank" tag="a" rel="noopener">
                        <span class="patreonlogo">
							        <svg viewBox="0 0 569 546" version="1.1" xmlns="http://www.w3.org/2000/svg" class="patronsvg v-icon v-icon--left material-icons theme--dark"><g><circle data-color="1" id="PatreonOval" cx="362.589996" cy="204.589996" r="204.589996" fill="#f96854"></circle><rect data-color="2" id="PatreonRectangle" x="0" y="0" width="100" height="545.799988"></rect></g></svg>
							        </span>
                        Become a Patron
                      </v-btn>
                      <span><v-icon left dark color="patreon">favorite</v-icon> Support me on Patreon so I can continue to provide free sheet music!</span>
                    </v-tooltip>
                  </v-flex>
                </v-container>
              </v-flex>
              <v-flex xs12 md6 class="carouselwidth">
                <v-layout justify-start column fill-height align-content-start>
                  <v-container>
                    <v-carousel v-if="cover" :class="{'shine': !cover.id}" next-icon="keyboard_arrow_right" prev-icon="keyboard_arrow_left" hide-delimiters :cycle="false" height="auto">
                      <v-carousel-item v-for="(item, index) in sheetpreview" :key="index" v-bind:src="item.path"></v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-layout>
              </v-flex>
            </v-layout>
            <div v-if="cover.patrons">
            <v-layout :class="{'ml-0 mr-5': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}">
              <v-container>
                <v-flex xs12 mb-4 align-self-center justify-self-center>
                  <h2 class="title primary--text"><span class="font-weight-bold patreon--text">{{ countPatrons }}</span> Supporting Patrons</h2>

                </v-flex>
                <div class="border"></div>
              </v-container>
            </v-layout>
            <v-container grid-list-md fluid>
              <v-layout row wrap :class="{'ml-0 mr-5': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}">
                <v-flex xs6 sm4 md3 mb-3  v-for="(patron, index) in cover.patrons.slice().reverse()" :key="index">
                  <v-layout align-center nowrap>
                    <v-img :src="`https://c8.patreon.com/2/50/` + patron.patronid" class="patron-img" alt="supporting patron" aspect-ratio="1" contain max-width="50px" max-height="50px"/>
                    <v-flex xs8>{{patron.name}}</v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
        	</div>
          </v-card>
          <v-container mt-5>
            <v-flex mb-4>
              <h1 class="display-1 text-uppercase primary--text font-weight-bold">Discover more piano covers</h1>
            </v-flex>
            <div class="border"></div>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.iframeWrapper {
  height: 301px;
}
.flex.carouselwidth {
    max-width: 100%;
  }
@media (max-width: 960px) {
  .flex.carouselwidth {
    max-width: 400px;
  }
}
@media (max-width: 600px) {
  .iframeWrapper {
    height: 250px;
  }
}
.v-window.v-carousel .v-btn__content {
	background-color: rgba(48, 60, 116, 0.75) !important;
	color: #fff !important;
}
iframe {
  display: inline-block;
  height: 100%;
}

.radius-border {
  border-radius: 20px !important;
}

.patron-img {
  margin-right: 10px;
}

</style>
<script>
import axios from 'axios'

export default {
	head() {
		return {
			title: this.cover.metatitle,
			meta: [
				{ hid: 'description', name: 'description', content: this.cover.metadescription }
			]
		}
	},
  async asyncData({ store }) {
  	if (process.server) {
  		await store.dispatch('getsingleCover')
    }
  },
  computed: {
  	cover() {
  		return this.$store.getters.getsingleCover
  	},
    videoinfo() {
      if (this.cover.id !== null && this.cover.video != null) {
        let videoIDVar = this.cover.video
        return this.$store.getters.allVideostatistics.filter(el => {
          return el.id === videoIDVar
        })
      }
    },
    sheetpreview() {
      if (this.cover.id !== null && this.cover.video != null) {
        return this.cover.sheetpreview
      } else {
        return null
      }
    },
    path() {
      return this.$route.name
    },
    countPatrons (){
      return this.cover.patrons.length
    }
  },
  watch: {
     path(newValue) {
            this.$store.dispatch('getsingleCover')
        }
    },
  mounted() {
  	this.$store.dispatch('getsingleCover')
  }
}
</script>
