<template>
  <div>
    <v-container mt-4>
      <v-layout 
        justify-center 
        align-center 
        row>
        <v-flex 
          xs12 
          sm8 
          md5>
          <v-card flat>
            <v-layout 
              justify-center 
              align-center 
              row 
              elevation-1>
              <v-flex 
                xs9 
                md8>
                <v-combobox 
                  id="searchcovers" 
                  v-model="search" 
                  :items="items" 
                  :label="search" 
                  prepend-icon="search" 
                  aria-label="search" 
                  placeholder="search" 
                  clearable 
                  clear-icon="clear" 
                  name="searchcovers" />
              </v-flex>
              <v-flex xs1>
                <v-tooltip bottom>
                  <v-btn 
                    slot="activator" 
                    icon 
                    tag="a">
                    <v-icon 
                      style="color: rgba(0,0,0,0.54);" 
                      @click="toggle()">{{ layout.grid ? 'view_list' : 'view_module' }}</v-icon>
                  </v-btn>
                  <span>Layout</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout 
        align-space-around 
        justify-center 
        wrap 
        row 
        fill-height>
        <v-flex 
          v-for="(cover, index) in filteredCovers" 
          :key="index" 
          :class="{ 'xs12 sm6 lg4': layout.grid == true, 'xs12 sm6 lg6': layout.grid == false }" 
          align-stretch>
          <card 
            :cover="cover" 
            :video-statistics="VideoStatistics" 
            :layout="layout.grid" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Card from '@/components/Card'

export default {
  name: 'CardList',
  components: {
    Card
  },
  data() {
    return {
      //search: this.$store.getters.search,
      sortSettings: {
        za: false,
        recent: false
      },
      layout: {
        grid: true
      }
    }
  },
  computed: {
    covers() {
      return this.$store.getters.allCovers
    },
    VideoStatistics() {
      return this.$store.getters.allVideostatistics
    },
    filteredCovers(sorKey) {
      if (typeof this.$store.getters.search !== 'undefined' && this.$store.getters.search !== null) {
        return this.covers
          .filter(cover => {
            return cover.title.toLowerCase().match(this.$store.getters.search.toLowerCase())
          })
          .reverse()
      } else {
        return this.covers
          .filter(cover => {
            return cover
          })
          .reverse()
      }
    },
    search: {
      get () {
        return this.$store.getters.search
      },
      set (value) {
        this.$store.commit('GET_SEARCH', value)
      }
    },
    items() {
      return this.covers.map(cover => {
        return cover.title
      })
    }
  },
  methods: {
    toggle: function() {
      this.layout.grid = !this.layout.grid
    }
  }
}
</script>
