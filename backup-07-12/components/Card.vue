<template>
  <div>
    <div v-if="layout">
      <v-card class="full-height" dark>
        <slot name="recent"></slot>
        <v-img v-if="cover.video" v-bind:src="'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg'" v-bind:alt="cover.title" aspect-ratio="1.62" class="play-video">
          <div class="play-video-transparent"><h3>{{ cover.title }}</h3>
          </div>
        </v-img>
        <v-img v-else aspect-ratio="1.62" class="play-video">
        	<h3>Loading</h3>
        </v-img>
        <v-btn fab absolute class="play-button" light @click="dialog = true">
          <v-icon color="primary">play_arrow</v-icon>
        </v-btn>
        <v-layout row wrap class="myvideoinfo" justify-center>
          <v-flex xs6>
            <v-layout pa-2>
              <v-btn color="primary" :to="'/' + cover.slug">Sheet music</v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs6 align-center justify-center>
            <v-layout pa-2 align-center justify-end row fill-height>
              <v-flex xs4>
                <v-icon small>remove_red_eye</v-icon>
                {{ videoinfo[0] ? videoinfo[0].statistics.viewCount : '-' }}
              </v-flex>
              <v-flex xs3>
                <v-icon small>thumb_up</v-icon>
                {{ videoinfo[0] ? videoinfo[0].statistics.likeCount : '-' }}
              </v-flex>
              <v-flex xs2>
                <v-icon small>thumb_down</v-icon>
                {{ videoinfo[0] ? videoinfo[0].statistics.dislikeCount : '-' }}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
      <v-dialog v-model="dialog" dark class="video-dialog">
        <div class="loading-spinner"></div><iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" v-if="cover.video" v-bind:src="'//www.youtube.com/embed/' + cover.video + '?autoplay=0&amp;rel=0'"></iframe>
      </v-dialog>
    </div>
    <div v-else>
    <v-card flat>
      <v-layout row wrap mb-2 pt-1>     	
        <v-flex xs4>
          <v-img v-if="cover.video" v-bind:src="'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg'" v-bind:alt="cover.title" aspect-ratio="1.62" class="play-video">
            <div class="play-video-transparent">
              <v-btn fab absolute class="play-button" light @click="dialog = true">
                <v-icon color="primary">play_arrow</v-icon>
              </v-btn>
            </div>
          </v-img>
          <v-img v-else aspect-ratio="1.62" class="play-video">
        	<h3>Loading</h3>
          </v-img>
        </v-flex>
        <v-flex xs8>
          <nuxt-link :to="'/' + cover.slug"><h3>{{ cover.title }}</h3></nuxt-link>
          <v-container grid-list-xs justify-start fluid align-content-start>
            <v-layout row wrap>
              <v-flex xs12>
                <v-layout pt-2 justify-start align-start>
                  <v-flex>
                    <v-icon small>remove_red_eye</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.viewCount : '-' }}
                  </v-flex>
                  <v-flex>
                    <v-icon small>thumb_up</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.likeCount : '-' }}
                  </v-flex>
                  <v-flex>
                    <v-icon small>thumb_down</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.dislikeCount : '-' }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>   	
      </v-layout>
    </v-card>
      <v-dialog v-model="dialog" dark class="video-dialog">
        <div class="loading-spinner"></div><iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" v-if="cover.video" v-bind:src="'//www.youtube.com/embed/' + cover.video + '?autoplay=0&amp;rel=0'"></iframe>
      </v-dialog>
    </div>
  </div>
</template>
<style>
.play-video h3 {
  text-align: center;
  margin-top: 85px;
}

.full-height .play-video .v-image__image.v-image__image--cover {
  background-position: center 71% !important;
  background-size: cover;
}

.full-height {
  height: 100%;
  overflow: hidden;
}

.full-height .v-image__image.v-image__image--cover {
  background-size: contain;
  background-position: top center !important;
}

.play-video-transparent {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background-color: rgba(48, 60, 116, .76);
  transition: 250ms;
}

.myvideoinfo {
  position: absolute;
  width: 100%;
  height: 64px;
  bottom: 0;
  margin: 0 !important;
}

.myvideoinfo>div:nth-child(1) {
  background: -webkit-radial-gradient(100% 0%, circle, transparent 0, transparent 37px, #303c74 40px);
  background-position: bottom left, bottom right, top right, top left;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: -40px 0px 1px 1px rgba(0, 0, 0, 0.4);
}

.myvideoinfo>div:nth-child(2) {
  background: -webkit-radial-gradient(0% 0%, circle, transparent 0, transparent 37px, #303c74 40px);
  background-position: bottom left, bottom right, top right, top left;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 40px 0px 1px 1px rgba(0, 0, 0, 0.4);
}

.play-video:hover .play-video-transparent {
  opacity: 1;
}

.play-button {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px !important;
}

.v-dialog {
  height: 66%;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  position: relative;
}

.loading-spinner {
  display: inline-block;
  -webkit-animation-duration: .75s;
  -moz-animation-duration: .75s;
  animation-duration: .75s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: rotate-forever;
  -moz-animation-name: rotate-forever;
  animation-name: rotate-forever;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  border: 2px solid #d8d8d8;
  border-right-color: transparent;
  border-radius: 50%;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  position: absolute;
  height: 50px;
  width: 50px;
  z-index: 1;
}

@keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

#player {
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  display: inline-block;
  z-index: 2;
  position: absolute;
}

</style>
<script>
export default {
  name: 'Card',
  props: {
    cover: {
      type: Object,
      default: null
    },
    VideoStatistics: {
      type: Array,
      default: null
    },
    layout: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    videoID() {
      if (this.cover !== null) {
        return this.cover.video
      }
    },
    videoinfo() {
      if (this.cover !== null) {
        let videoIDVar = this.cover.video
        return this.VideoStatistics.filter(function(el) {
          return el.id === videoIDVar
        })
      } else {
        return null
      }
    }
  }
}
</script>
