<template>
  <div>
    <div v-if="layout">
      <v-card class="full-height" dark>
        <slot name="recent"></slot>
        <v-img v-if="cover.video" v-bind:src="'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg'" v-bind:alt="cover.title" aspect-ratio="1.42" class="play-video" :class="{'shine': !cover.id}">
          <nuxt-link class="play-video-transparent" :to="'/' + cover.slug">
            <v-layout justify-center align-center full-height>
          	 <v-btn color="primary" :to="'/' + cover.slug">Sheet music</v-btn>
            </v-layout>
          </nuxt-link>
        </v-img>
        <v-img v-else aspect-ratio="1.62" class="play-video shine">
        	<h3>Loading</h3>
        </v-img>
        
        <v-layout row nowrap class="myvideoinfo" justify-start>

          <v-flex xs10>
            <v-layout pt-2 pl-3 column>
        		<nuxt-link :to="'/' + cover.slug"><h3 class="body-2 primary--text">{{ cover.title }}</h3></nuxt-link>
				<v-flex xs6>
				<span class="caption font-weight-thin roboto-font blue-grey--text">
				<v-icon small light color="blue-grey lighten-3">remove_red_eye</v-icon>
				{{ videoinfo[0] ? videoinfo[0].statistics.viewCount : '-' }}				
				<v-icon small light color="blue-grey lighten-3" class="ml-2">thumb_up</v-icon>
				{{ videoinfo[0] ? videoinfo[0].statistics.likeCount : '-' }}				
				<v-icon small light color="blue-grey lighten-3" class="ml-2">thumb_down</v-icon>
				{{ videoinfo[0] ? videoinfo[0].statistics.dislikeCount : '-' }}
				</span>
				</v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2 align-center justify-center>
            <v-layout pa-2 align-center justify-end row fill-height>
            	<v-btn fab flat absolute light tag="a" class="play-button">         		
		          <v-icon color="primary">play_arrow</v-icon>
		        </v-btn>             
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
    <div v-else>
    <v-hover>
    <v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 0}`">
      <v-layout row wrap mb-2 pt-1>     	
        <v-flex xs4>
          <v-img v-if="cover.video" v-bind:src="'https://img.youtube.com/vi/' + videoID + '/mqdefault.jpg'" v-bind:alt="cover.title" aspect-ratio="1.62" class="play-video" :class="{'shine': !cover.id}">
            <div class="play-video-transparent">
              <v-btn fab absolute class="play-button" light @click="dialog = true" tag="a">
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
            <v-layout row wrap grid-list-xs justify-start fluid align-content-start>
              <v-flex xs12>
                <v-layout pt-2 justify-start align-start>
                	<span class="caption font-weight-thin roboto-font blue-grey--text">
                    <v-icon small class="ml-2">remove_red_eye</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.viewCount : '-' }}
                    <v-icon small class="ml-2">thumb_up</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.likeCount : '-' }}
                    <v-icon small class="ml-2">thumb_down</v-icon>
                    {{ videoinfo[0] ? videoinfo[0].statistics.dislikeCount : '-' }}
                  	</span>
                </v-layout>
              </v-flex>
            </v-layout>
        </v-flex>   	
      </v-layout>
    </v-card>
	</v-hover>
      <!--<v-dialog v-model="dialog" dark class="video-dialog">
        <div class="shine"></div><iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" v-if="cover.video" v-bind:src="'//www.youtube.com/embed/' + cover.video + '?autoplay=0&amp;rel=0'"></iframe>
      </v-dialog>-->
    </div>
  </div>
</template>
<style>
.play-video h3 {
  text-align: center;
  margin-top: 85px;
}

.full-height .play-video .v-image__image.v-image__image--cover {
  background-position: center 213% !important;
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
  height: calc(100% - 64px);
  position: absolute;
  opacity: 0;
  background-color: rgba(48, 60, 116, .76);
  transition: 250ms;
}

.myvideoinfo {
  position: absolute;
  width: 100%;
  height: 64px;
  bottom: 0px;
  margin: 0 !important;
  background-color: #fff;
  color: #000;
}

.play-video:hover .play-video-transparent {
  opacity: 1;
}

.play-button {
  position: absolute;
  bottom: 8px;
  right: 10px;
  transform: translate(-0%, -50%);
  font-size: 100px !important;
  background-color: #efefef;
}

.v-dialog {
  height: 66%;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  position: relative;
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
      dialog: false,
      Videoiframe: ``
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
