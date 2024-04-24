<template>
  <v-container fluid class="px-0 blog-page">
    <v-img
      max-height="300"
      src="../assets/especializados/especializado-equipo2.png"
    ></v-img>
    <p class="text-h3 texto-land">Nuestro Blog</p>
    <v-container fluid class="sec-blog">
      <p class="rosa-tit text-left">Ultimas entradas</p>
      <v-card class="pa-5" max-width="380">
        <v-img
          contain
          
          src="../assets/home/alianzas-casos-de-exito.jpg"
        ></v-img>
        <v-card-title style="word-break: break-word"
          >Addition y Proanalytics unen esfuerzos por la Diversidad e
          Inclusión</v-card-title
        >
        <div class=" text-justify">
          Diferentes instrumentos nacionales e internacionales han enfocado su
          atención en la importancia de generar ambientes laborales ...
        </div>
        <v-card-actions>
          <v-btn
                    outlined
                    color="#fe6472"
                    @click="reveal = true"
                    style="text-transform: none"
                    class="my-5"
                    to="/2021/diciembre"
                  >
                    Seguir leyendo
                  </v-btn>
        </v-card-actions>
        <p class="text-left">2 diciembre 2021</p>
      </v-card>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.blog-page {
  .texto-land {
    color: #ea5076;
    font-weight: 600;
    align-self: center;
    margin: 5rem;
  }

  .sec-blog {
    background-color: #ededed;
    padding: 2rem;

    .rosa-tit {
      color: #ea5076;
      padding: 2rem;
    }
  }
}
</style>