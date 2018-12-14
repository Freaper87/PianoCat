//import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    
    state: {
    	covers: [{
          created_at:"-",
          description:"-",
          id:null,
          metadescription:"-",
          metatitle:"-",
          sheetpdf: null,
          sheetpreview: null,
          slug:"-",
          subtitle:"-",
          title:"-",
          updated_at:"-",
          video: undefined
        }],
      allVideoStatistics: [{
        id: null,
        statistics: {
          dislikeCount: "-",
          likeCount: "-",
          viewCount: "-"
          }
      }],
      homedata: [{
        headline: '<b>Video game<br>sheet music</b>',
        description: '-'
      }]
    },
    getters: {
    	allCovers: state => state.covers,
      allHomedata: state => state.homedata,
      allVideostatistics: state => state.allVideoStatistics
    },
    mutations: {
    	GET_COVERS: (state, covers) => {
    		state.covers = covers
    	},
      GET_HOMEDATA: (state, homedata) => {
        state.homedata = homedata
      },
      GET_VIDEOINFO: (state, allVideoStatistics) => {
        state.allVideoStatistics = allVideoStatistics
      }
    },
    actions: {
    	getCovers({ commit }) {
    		axios.get('http://localhost/vue-pianocat/api/covers').then(response => {
  				commit('GET_COVERS', response.data)
  		  }).then(() => {
          var allVideoIDs = this.state.covers.map((cover) => {
            return cover.video
          })
          axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + allVideoIDs + '&key=AIzaSyBE6dRivDKn2QqTqDcmaHbYZSOyflrN7yE').then(response => {
            commit('GET_VIDEOINFO', response.data.items)
          })
        })
    	},
      getHomedata({ commit }) {
        axios.get('http://localhost/vue-pianocat/api/home').then(response => {
          commit('GET_HOMEDATA', response.data)
      })
      }
    }
  })
}
export default createStore
