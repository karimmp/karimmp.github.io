<template>
  <v-app id="app">
    <v-card id="nav">
      <v-app-bar flex color="white" height="80rem">
        <!-- elevate-on-scroll app -->
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = true"
          color="#EA5076"
        ></v-app-bar-nav-icon>

        <v-app-bar-title
          ><img alt="Addition logo" src="./assets/logo.png"
        /></v-app-bar-title>
        <v-spacer></v-spacer>

        <div class="nav-links hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.key" :to="item.link" plain tile
            >{{ item.title }}
          </v-btn>
          <v-btn rounded color="#ea5076" dark>
            Contáctanos <v-icon right dark small> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class=" text--accent-4">
            <v-list-item v-for="(item, i) in menu" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view />
    </v-card>

    <v-footer height="auto" class="pie-pagina" color="#e5e7eb" dark>
      <v-container fluid class="py-12">
        <v-row class="fila-datos" no-gutters>

          <v-col cols="12" md="4" sm="6" align-self="center">
            <img width="133" alt="Addition logo" src="./assets/logo.png" />
          </v-col>

          <v-col cols="12" md="4" sm="6" align-self="center">
            <v-list light color="#e5e7eb">
              <v-list-item class="lista-vertical">
                <v-btn
                  v-for="item in menu2"
                  :key="item.key"
                  :to="item.link"
                  plain
                  tile
                  >{{ item.title }}
                </v-btn>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="4" sm="12">
            <v-card
              light
              color="#e5e7eb"
              elevation="0"
              style="text-align: start"
            >
              <v-card-subtitle>
                <strong>Suscribete a nuestro newsletter</strong>
              </v-card-subtitle>
              <v-card-text class="pa-0 ma-0"> Email </v-card-text>
              <input type="email" required="" value="" class="input-correo" />
              <v-btn color="#ea5076" class="mx-3" dark>Suscríbete</v-btn>
              <v-card-text>
                Enterate de nuestras últimas novedades
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
      </v-container>

      <div class="footer-banner">
        <v-layout>
          <v-flex py-6>
            &copy;{{ new Date().getFullYear() }} — Addition
          </v-flex>
        </v-layout>
      </div>
    </v-footer>
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
.pie-pagina {
  padding: 0;

  .fila-datos {
    padding: 5% 0;
  }

  .lista-vertical {
    flex-direction: column;
    background-color: #e5e7eb;
    align-items: flex-start;
    a {
      color: #4b5563 !important;
      background-color: #e5e7eb;
      text-transform: capitalize;

      :hover {
        color: #ea5076;
      }
    }
  }

  .input-correo {
    background-color: #f3f4f680;
    border-radius: 4px;
    border: 1px solid #d1d5db;
    padding: 0.5rem;
  }

  .rounded-link {
    border-radius: 0.75rem;
  }
  .footer-banner {
    background-color: #ea5076;
    height: 5rem;
    width: 100%;
  }
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
      menu2: [
        { key: "inicio", title: "Inicio", link: "/" },
        { key: "nosotros", title: "Nosotros", link: "/Nosotros" },
        { key: "servicios", title: "Servicios", link: "/Servicios" },
        { key: "blog", icon: "", title: "Blog", link: "/Blog " },
        { key: "contactanos", icon: "", title: "Contáctanos", link: "/Contáctanos" },
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