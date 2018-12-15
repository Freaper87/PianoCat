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
      patreon: [],
      error: ''
    },
    getters: {
    	allCovers: state => state.covers,
      allHomedata: state => state.homedata,
      allVideostatistics: state => state.allVideoStatistics,
      getsingleCover: state => state.singlecover,
      getError: state => state.error
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
      },
      GET_ERROR: (state, error) => {
        state.error = error
      }
    },
    actions: {
   	getCovers({ commit }) {
     		axios.get(process.env.url + '/covers').then(response => {
  				commit('GET_COVERS', response.data)
          commit('GET_ERROR', 'covers loaded')
  		  })
        .catch((error) => {
          commit('GET_ERROR', 'Could not load covers')
        })
        .then(() => {
          var allVideoIDs = this.state.covers.map((cover) => {
            return cover.video
          })
          axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + allVideoIDs + '&key=' + process.env.key).then(response => {
            commit('GET_VIDEOINFO', response.data.items)
          })
          .catch((error) => {
            commit('GET_ERROR', 'could not load YouTube statistics')
          })
        })
       
    	},
      async getHomedata({ commit }) {
        try {
        const { data } = await axios.get(process.env.url + '/home')
          commit('GET_HOMEDATA', data)
          commit('GET_ERROR', 'Homepage data loaded')
        } catch (error) {
            commit('GET_ERROR', 'could not load homepage data')
          }
      },
      async getsingleCover({ commit }) {
        try {
        let SlugVar = this.$router.history.current.path
        const { data } = await axios.get(process.env.url + '/covers' + SlugVar)
          commit('GET_SINGLECOVER', data[0]) 
          commit('GET_ERROR', 'Single cover loaded')
        } catch (error) {
          commit('GET_ERROR', 'could not load cover')
        }
      }
    }
  })
}
export default createStore
