<template>
  <v-container>
    <v-toolbar 
      style="z-index:2;" 
      color="rgba(0, 0, 0, 0)" 
      dense 
      flat>
      <v-tooltip 
        bottom 
        class="hidden-xs-only">
        <a 
          slot="activator" 
          href="https://www.youtube.com/c/PianoCatMusic?sub_confirmation=1" 
          rel="noopener" 
          target="_blank" 
          class="navlogotext"><img 
            src="@/assets/YouTube_light_icon.png" 
            alt="YouTube Icon" 
            width="35px"><span class="pacifico-font">PianoCat</span></a>
        <span><v-layout 
          align-center 
          row 
          justify-top><v-icon 
            left 
            dark 
            color="patreon">play_arrow</v-icon> &nbsp;Find me on YouTube!</v-layout></span>
      </v-tooltip>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          to="/" 
          dark>Home</v-btn>
        <v-btn 
          flat 
          to="/about" 
          dark>About</v-btn>
        <v-tooltip bottom>
          <v-btn 
            slot="activator" 
            href="https://www.patreon.com/bePatron?c=945106" 
            target="_blank" 
            tag="a" 
            rel="noopener" 
            dark 
            flat
            depressed>
            <span class="patreonlogo white--text">
              <svg 
                viewBox="0 0 569 546" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                class="patronsvg v-icon v-icon--left material-icons theme--dark"><title>Patreon logo</title><g><circle 
                  id="Oval" 
                  data-color="1" 
                  cx="362.589996" 
                  cy="204.589996" 
                  r="204.589996" 
                  fill="#f96854"/><rect 
                    id="Rectangle" 
                    data-color="2" 
                    x="0" 
                    y="0" 
                    width="100" 
                    height="545.799988" 
                    fill="rgb(0, 44, 73)"/></g></svg>
            </span>
            Become A Patron </v-btn>
          <span><v-layout 
            align-center 
            row 
            justify-top><v-icon 
              left 
              dark 
              color="patreon">favorite</v-icon> &nbsp;Support my music!</v-layout></span>
        </v-tooltip>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-up">
      	
        <v-btn 
          flat 
          to="/" 
          dark 
          icon><v-icon>home</v-icon></v-btn>
        <v-btn 
          flat 
          to="/about" 
          dark 
          icon><v-icon>forum</v-icon></v-btn>
        <v-tooltip bottom>
          <v-btn 
            slot="activator" 
            href="https://www.patreon.com/bePatron?c=945106" 
            target="_blank" 
            tag="a" 
            rel="noopener" 
            flat 
            dark 
            depressed 
            outline 
            small>
            <span class="patreonlogo">
              <svg 
                viewBox="0 0 569 546" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                class="patronsvg v-icon v-icon--left material-icons theme--dark"><title>Patreon logo</title><g><circle 
                  id="Oval" 
                  data-color="1" 
                  cx="362.589996" 
                  cy="204.589996" 
                  r="204.589996" 
                  fill="#fff"/><rect 
                    id="Rectangle" 
                    data-color="2" 
                    x="0" 
                    y="0" 
                    width="100" 
                    height="545.799988" 
                    fill="rgb(249, 104, 84)"/></g></svg>
            </span>
            Become A Patron </v-btn>
          <span><v-layout 
            align-center 
            row 
            justify-top><v-icon 
              left 
              dark 
              color="patreon">favorite</v-icon> &nbsp;Support my music!</v-layout></span>
        </v-tooltip>
    	
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<style>
.navlogotext {
  color: #fff;
  text-decoration: none !important;
}

.navlogotext .pacifico-font {
  margin-left: 10px;
  font-size: 20px;
  vertical-align: text-bottom;
}

.patronsvg {
  align-self: center;
  height: 20px;
  width: 20px;
}
.hidden-sm-and-up .v-btn .v-icon--left.patronsvg {
  margin: 0 5px;
}
@media only screen and (max-width: 959px) {
  .container .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}
.patreonlogo {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}

.v-toolbar {
  margin-top: 20px !important;
}
.v-toolbar__content {
  height: 40px !important;
}

.v-toolbar__content a.v-btn {
  border-radius: 20px;
  margin: 0 10px !important;
}
</style>
<script>
export default {
  name: 'Navigation'
}
</script>
