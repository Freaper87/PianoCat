<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card class="radius-border">
            <v-layout :class="{'ml-0 mr-5': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}">
              <v-container>
                <v-flex xs12 mb-4 pt-5>
                  <h1 class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-2':$vuetify.breakpoint.smAndUp} text-uppercase primary--text font-weight-bold" v-if="cover">{{cover.title}}</h1>
                </v-flex>
                <v-flex xs12 mb-4>
                  <h2 class="title primary--text" v-if="cover">{{cover.subtitle}}</h2>
                </v-flex>
                <div class="border"></div>
              </v-container>
            </v-layout>
            <v-layout :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}" wrap>
              <v-flex xs12 lg6>
                <v-container>
                  <v-card height="301px">
                    <iframe v-if="cover" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" v-bind:src="'//www.youtube.com/embed/' + cover.video + '?autoplay=0&amp;rel=0'"></iframe>
                    <div v-else>Loading</div>
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
                    <v-card-text>
                      <p v-if="cover" v-html="cover.description"></p>
                    </v-card-text>
                    <v-btn color="primary" class="white--text" v-if="cover" :href="cover.sheetpdf.path" target="_blank">
                      <v-icon left dark>picture_as_pdf</v-icon>
                      Download
                    </v-btn>
                    <v-tooltip bottom>
                      <v-btn color="patreon" flat class="white--text" slot="activator">
                        <span class="patreonlogo">
							        <svg viewBox="0 0 569 546" version="1.1" xmlns="http://www.w3.org/2000/svg" class="patronsvg v-icon v-icon--left material-icons theme--dark"><g><circle data-color="1" id="Oval" cx="362.589996" cy="204.589996" r="204.589996" fill="#f96854"></circle><rect data-color="2" id="Rectangle" x="0" y="0" width="100" height="545.799988"></rect></g></svg>
							        </span>
                        Become a Patron
                      </v-btn>
                      <span><v-icon left dark color="patreon">favorite</v-icon> Support me on Patreon so I can continue to provide free sheet music!</span>
                    </v-tooltip>
                  </v-flex>
                </v-container>
              </v-flex>
              <v-flex xs12 lg6>
                <v-layout justify-space-between row fill-height>
                  <v-container>
                    <v-carousel light height="700px" v-if="cover">
                      <v-carousel-item v-for="(item, index) in sheetpreview" :key="index" v-bind:src="item.path" width="100%"></v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout pl-5 pr-5>
              <v-container>
                <v-flex xs12 mb-4 align-self-center justify-self-center>
                  <h2 class="title primary--text">Supporting Patrons</h2>
                </v-flex>
                <div class="border"></div>
              </v-container>
            </v-layout>
            <v-container grid-list-md>
              <v-layout row wrap :class="{'ml-0 mr-5': $vuetify.breakpoint.smAndDown, 'ml-5 mr-5': $vuetify.breakpoint.smAndUp}" justify-start>
                <v-flex xs6 sm4 md3 mb-3 v-for="(patron, index) in patrons" :key="index">
                  <v-layout align-center>
                    <img :src="patron.img" class="patron-img"/>
                    <span>{{patron.name}}</span>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
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

@media (max-width: 600px) {
  .iframeWrapper {
    height: 250px;
  }
}

iframe {
  display: inline-block;
  height: 100%;
  max-height: 450px;
}

.radius-border {
  border-radius: 20px !important;
}

.patron-img {
  margin-right: 10px;
}

</style>
<script>
export default {
  data() {
    return {
      cover: {
        created_at: '-',
        description: '-',
        id: '-',
        metadescription: '-',
        metatitle: '-',
        sheetpdf: {},
        sheetpreview: [],
        slug: '-',
        subtitle: '-',
        title: '-',
        updated_at: '-',
        video: '-'
      },
      patrons: [
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Gibbons'
        },
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Nr2'
        },
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Nr2'
        },
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Nr2'
        },
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Nr2'
        },
        {
          img: require('@/./assets/6755055.png'),
          name: 'Stephen Nr2'
        }
      ]
    }
  },

  computed: {
    coverData() {
      let SlugVar = this.$route.params.slug
      return this.$store.getters.allCovers.filter(singlecover => {
        return singlecover.slug === SlugVar
      })[0]
    },
    videoinfo() {
      if (typeof this.cover !== 'undefined' && this.cover.video != '-') {
        let videoIDVar = this.cover.video
        return this.$store.getters.allVideostatistics.filter(el => {
          return el.id === videoIDVar
        })
      }
    },
    sheetpreview() {
      if (typeof this.cover !== 'undefined' && this.cover.video != '-') {
        return this.cover.sheetpreview
      } else {
        return null
      }
    },
    videopreview() {
      if (typeof this.cover !== 'undefined' && this.cover.video != '-') {
        return this.cover.video
      } else {
        return null
      }
    }
  },
  watch: {
    coverData(newValue, old) {
      this.cover = this.coverData
    }
  },
  mounted() {
    this.cover = this.coverData
  }
}
</script>
