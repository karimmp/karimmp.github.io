<template>
  <v-app id="app">
    <v-card id="nav">
      <v-app-bar flex color="white" height="80rem" elevate-on-scroll app>
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="drawer = true"
          color="#EA5076"
        ></v-app-bar-nav-icon>

        <v-app-bar-title class="pt-2"
          ><a href="/"> <img alt="Addition logo" src="./assets/logo.png" /></a
        ></v-app-bar-title>
        <v-spacer></v-spacer>

        <div class="nav-links hidden-md-and-down">
          <v-btn v-for="item in menu" :key="item.key" :to="item.link" plain tile
            >{{ item.title }}
          </v-btn>

          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain tile v-bind="attrs" v-on="on"> Soluciones </v-btn>
            </template>

            <v-list class="text-left">
              <v-list-item
                v-for="(item, index) in menua"
                :key="index"
                link
                :to="item.link"
              >
                <v-list-item-title>
                  {{ item.title }}
                  <v-list style="">
                    <v-list-item
                      v-for="(subitem, subindex) in item.submenu"
                      :key="subindex"
                      link
                      :to="subitem.link"
                      class="text-caption"
                    >
                      {{ subitem.title }}
                    </v-list-item>
                  </v-list>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            v-for="item in menub"
            :key="item.key"
            :to="item.link"
            plain
            tile
            >{{ item.title }}
          </v-btn>

          <v-btn rounded color="#ea5076" dark to="contactanos">
            Contáctanos <v-icon right dark small> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class=" text--accent-4">
            <v-list-item v-for="(item, i) in menu2" :key="i" :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view class="pt-16" />
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

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
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
      ],
      menua: [
        {
          title: "Diversidad e inclusión",
          link: "/diversidad",
          submenu: [
            { title: "NMX-R-025-SCFI-2015", link: "/NMX025" },
            { title: "NOM-035-STPS-2018", link: "/NOM035" },
            { title: "NOM-037-STPS-2023", link: "/NOM037" },
            { title: "Servicios adicionales", link: "/ServiciosAdicionales" },
          ],
        },
        { title: "Gestión de Recursos Humanos", link: "/rh" },
        { title: "Coaching Laboral", link: "/coaching" },
      ],
      menub: [
        {
          key: "alianzas",
          icon: "",
          title: "Alianzas Comerciales",
          link: "/alianzas",
        },
        { key: "blog", icon: "", title: "Blog", link: "/blog" },
      ],

      menu2: [
        { key: "inicio", title: "Inicio", link: "/" },
        { key: "nosotros", title: "Nosotros", link: "/Nosotros" },
        { key: "servicios", title: "Servicios", link: "/diversidad" },
        {
          key: "alianzas",
          icon: "",
          title: "Alianzas Comerciales",
          link: "/alianzas",
        },
        { key: "blog", icon: "", title: "Blog", link: "/blog" },
        {
          key: "contactanos",
          icon: "",
          title: "Contáctanos",
          link: "/Contactanos",
        },
      ],

      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
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
