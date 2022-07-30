<template>
  <v-app>
    <v-card id="nav">
      <v-app-bar flex color="white" elevate-on-scroll app height="80rem" >

        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = true"
        ></v-app-bar-nav-icon>


        <v-app-bar-title
          ><img alt="Addition logo" src="./assets/logo.png"
        /></v-app-bar-title>
        <v-spacer></v-spacer>
      
          <div class="nav-links hidden-sm-and-down">
            <v-btn
            
              v-for="item in menu"
              :key="item.key"
              :to="item.link"

              plain
              tile
              >{{ item.title }}
              
            </v-btn>
            <v-btn class="rounded-link" color="#ea5076" dark>
              Contáctanos <v-icon right dark small> mdi-arrow-right </v-icon>
            </v-btn>
          </div>
<v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class=" text--accent-4">
            <v-list-item v-for="(item, i) in menu" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      </v-app-bar>

      

      <!--  <v-toolbar id="nav" color="white" fixed elevation="0">

      <v-toolbar-title
        ><img alt="Addition logo" src="./assets/logo.png"
      /></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <div class="nav-links">
          <v-btn
            v-for="item in menu"
            :key="item.key"
            :to="item.link"
            color="black"
            plain
            >{{ item.title }}
            <v-icon right dark small>{{ item.icon }} </v-icon>
          </v-btn>
          <v-btn class="rounded-link" color="#ea5076" dark>
            Contáctanos <v-icon right dark small> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </v-toolbar-items> -->

      <!-- <v-menu class="hidden-md-and-up">
        <template v-slot:activator="{ on, attrs }">
          <v-btn light icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in menu" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item> -->

      <!-- <v-list-tile v-for="item in menu" :key="item.key">
            <v-list-tile-content>
              <v-list-title>{{ item.title }}</v-list-title>
            </v-list-tile-content>
          </v-list-tile> -->
      <!-- </v-list>
      </v-menu> -->
      <!-- </v-toolbar> -->
      <div >
        <router-view />
      </div>

      <v-footer height="auto" color="indigo" dark>
        <v-layout justify-center row wrap>
          <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
            &copy;2018 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-card>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Commissioner, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-family: Montserrat;
  align-items: center;

 
}



.nav-links {


  a {
    
    :hover {
      color: #ea5076;
    }
  }
}

.rounded-link {
  border-radius: 0.75rem;
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        { key: "inicio", icon: "", title: "Inicio", link: "/" },
        { key: "nosotros", icon: "", title: "Nosotros", link: "/Nosotros" },
        {
          key: "servicios",
          icon: "mdi-menu-down-outline",
          title: "Servicios",
          link: "/Servicios",
        },
        { key: "blog", icon: "", title: "Blog", link: "/Blog " },
      ],
      drawer: false,
      group: null,
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>