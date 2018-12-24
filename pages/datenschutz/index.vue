<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>
        <v-flex xs12>
          <h1 class="display-3 white--text" style="line-height: 1 !important; "><b>{{ impressum[0].datenheadline }}</b></h1>
          <div class="border white mt-4 mb-4"></div>
          <v-layout>
            <v-card class="pa-4">
              <span class="primary--text" v-html="impressum[0].datendescription"></span>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Datenschutz',
  head() {
    return {
      title: 'PianoCat - Datenschutz',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PianoCat - Datenschutz'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ]
    }
  },
  async fetch({ store }) {
    await store.dispatch('getImpressum')
  },
  computed: {
    impressum() {
      return this.$store.getters.allImpressum
    }
  }
}
</script>
