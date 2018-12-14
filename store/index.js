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
          sheetpdf: "-",
          sheetpreview: null,
          slug:"-",
          subtitle:"-",
          title:"-",
          updated_at:"-",
          video: undefined
        }],
      singlecover: {
          created_at:"-",
          description:"-",
          id:null,
          metadescription:"-",
          metatitle:"-",
          sheetpdf: [],
          sheetpreview: [],
          slug:"-",
          subtitle:"-",
          title:"-",
          updated_at:"-",
          video: undefined,
          patrons: null
        },
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
      }],
      patreon: []
    },
    getters: {
    	allCovers: state => state.covers,
      allHomedata: state => state.homedata,
      allVideostatistics: state => state.allVideoStatistics,
      getsingleCover: state => state.singlecover
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
      },
      GET_SINGLECOVER: (state, singlecover) => {
        state.singlecover = singlecover
      }
    },
    actions: {
     /* nuxtServerInit ({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },*/
    	getCovers({ commit }) {
    		axios.get('http://localhost/vue-pianocat/api/covers').then(response => {
  				commit('GET_COVERS', response.data)
  		  }).then(() => {
          var allVideoIDs = this.state.covers.map((cover) => {
            return cover.video
          })
          axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + allVideoIDs + '&key=' + process.env.key).then(response => {
            commit('GET_VIDEOINFO', response.data.items)
          })
        })
    	},
      async getHomedata({ commit }) {
        const { data } = await axios.get('http://localhost/vue-pianocat/api/home')
          commit('GET_HOMEDATA', data)
      },
      async getsingleCover({ commit }) {
        let SlugVar = this.$router.history.current.path
        const { data } = await axios.get('http://localhost/vue-pianocat/api/covers' + SlugVar)
          commit('GET_SINGLECOVER', data[0])
      }
    }
  })
}
export default createStore
