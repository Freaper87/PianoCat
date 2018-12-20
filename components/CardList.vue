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
              elevation-1 >

              <v-flex 
                xs9 
                md8
                >
                	
                <v-combobox 
                  v-model="search" 
                  id="searchcovers" 
                  :items="items" 
                  :label="search" 
                  
                  prepend-icon="search" 
                  aria-label="search" 
                  placeholder="search" 
                  clearable 
clear-icon="clear" name="searchcovers"/>
                	
                  <!--<v-autocomplete v-model="search" :items="items" :label="search" type="text" prepend-icon="search"></v-autocomplete> -->
                  <!-- <v-text-field label="search" type="text" v-model="search" prepend-icon="search" :items="items" browser-autocomplete></v-text-field> -->
              </v-flex>
              <!--
                <v-flex xs1>
                  <v-menu>
                    <v-toolbar-title slot="activator">
                      <v-tooltip bottom>
                        <v-icon slot="activator">filter_list</v-icon>
                        <span>Sort</span>
                      </v-tooltip>
                    </v-toolbar-title>
                    <v-list>
                      <v-list-tile @click="sortSettings.za = false ? sortSettings.za == true : sortSettings.za == false">
                        <span v-if="sortSettings.za === false">z-a</span>
                        <span v-if="sortSettings.za === true">a-z</span>
                      </v-list-tile>
                      <v-list-tile @click="sortSettings.recent = false ? sortSettings.recent == true : sortSettings.recent == false">
                        <span v-if="sortSettings.recent === false">Most recent active</span>
                        <span v-if="sortSettings.recent === true">Most recent inactive</span>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-flex>
            -->
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
            :layout="layout.grid"/>
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
      search: '',
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
      if (typeof this.search !== 'undefined' && this.search !== null) {
        return this.covers.filter(cover => {
          return cover.title.toLowerCase().match(this.search.toLowerCase())
        }).reverse()
      } else {
        return this.covers.filter(cover => {return cover}).reverse()
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
