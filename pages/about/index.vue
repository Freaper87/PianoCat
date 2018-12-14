<template>
  <div class="home">
    <v-container class="myContainer">
      <v-layout>     
          <v-flex xs10>
             <h1 class="display-3" style="line-height: 1 !important; "><b>About PianoCat</b></h1>
             <div class="border white mt-4 mb-4"></div>
            <v-layout>
                <div style="column-count: 3;">
                  <p><strong>How long are you playing Piano?</strong></p>
                  <p>I&#8217;ve started playing the piano when I was 7 years old. Today I have over 20 years experience.</p>
                  <p><strong>Do you play other Instruments?</strong></p>
                  <p>I play Saxophon (Beginner), Guitar (Beginner) and Harp (Advanced).</p>
                  <p><strong>What was your motivation to create a YouTube Channel?</strong></p>
                  <p>I&#8217;ve been looking myself for interesting game arrangements but I hardly find any sheet music and when I did, I didn&#8217;t like the style and voicing. So I decided to arrange Soundtracks by myself and ofcourse I&#8217;m curious, if people like my covers. That&#8217;s why I created the YouTube Channel.</p>
                  <p><strong>How long does your YouTube Channel exist?</strong></p>
                  <p>I created my Channel in 2009 &#8211; but at that time I just uploaded Videos to share them with a very small group of people. It was in 2017, when i decided to rename the Channel to PianoCat and to make consistent pianovideos.</p>
                  <p><strong>How often do you upload your Content?</strong></p>
                  <p>At least 2 times a month!</p>
                  <p><strong>What&#8217;s your equipment?</strong></p>
                  <p>I use an old masterkeyboard Studiologic SL 880 Pro and an expander Roland (XV-2020) with advanced Piano sounds.</p>
                  <p><strong>What music are you interested in?</strong></p>
                  <p>I like every Genre- Jazz, Progressive Metal (Animals as Leaders), Electro. I love filmmusic and music by Ravel and Debussy. Other people I adore: Hiromi Uehara, Eric Whitacre, Hans Zimmer, Cliff Martinez and many more!</p>
                  <p><strong>What are your future plans?</strong></p>
                  <p>I don&#8217;t think much about the future and I try to live in the present.</p>
                  <p><strong>Where can I find you?</strong></p>
                  <p><a href="https://www.patreon.com/PianoCat" target="_blank" onclick="ga('send', 'event', 'Patreon', 'Patreon-visit', 'https://www.pianocat.de/about',0);">Patreon</a>, <a href="https://www.facebook.com/PianoCatMusic">Facebook</a>, <a href="https://de.pinterest.com/pianocat6144">Pinterest</a> and <a href="https://www.youtube.com/channel/UCZvjfiVTlRKIeUKH3lJjK3g">YouTube</a></p>
                </div>
              
            </v-layout>
          </v-flex>
          <v-flex xs2 ml-2>
          <img src="@/static/chibi-2.png" class="chibi" alt="PianoCat baloon chibi" />
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>

</style>
<script>
import Card from '@/components/Card'
export default {
  name: 'About',
  components: {
    Card
  },
  head() {
    return {
      title: 'PianoCat | About page - questions and answers',
      meta: [
        { name: 'description', content: 'I am arranging free sheet music of video games and animes for piano. You can listen to my arrangements on this website!'}
      ]
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getHomedata')
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    covers() {
      return this.$store.getters.allCovers
    },
    VideoStatistics() {
      return this.$store.getters.allVideostatistics
    },
    homedata() {
      return this.$store.getters.allHomedata
    }
  }
}
</script>
