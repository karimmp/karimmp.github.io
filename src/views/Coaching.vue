<template>
  <v-container fluid class="coach-pag">
    <v-img alt="fondo" src="../assets/especializados/portada-especializados.png"
      ><v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              <h2>Coaching Laboral</h2>
            </v-card-title>
            <v-card-text class="pt-8 texto-land">
              Acompañamos a las personas en la búsqueda de empleo para
              crecimiento personal, familiar y profesional.
              <br />
              <br />
              <strong>
                <ul>
                  <li>Job Hunter.</li>
                  <li>Job First (Orientación vocacional).</li>
                  <li>Outplacement.</li>
                </ul>
              </strong>
            </v-card-text>
            <div class="pt-5 text-left">
              <v-btn
                color="#12b0f4"
                rounded
                class="pa-7"
                dark
                @click="$vuetify.goTo('#soluciones')"
              >
                Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-img>

    <v-container fluid class="soluciones">
      <section id="soluciones">
        <h1 class="txt-white mt-5">Gestión de Recuesos Humanos</h1>
        <v-row class="pa-15 contenedor">
          <v-col cols="auto" md="4" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="../assets/gestion/juntas.png"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">Job Hunter.</p>

                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Acompañamiento integral con nuestros equipos expertos en la
                    búsqueda de empleo; haciendo frente a los procesos de
                    selección actuales.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-col cols="6">
                      <v-btn
                        outlined
                        color="#fe6472"
                        to="contactanos"
                        style="text-transform: none"
                        class="mx-0 my-5"
                      >
                        Contáctanos
                      </v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn
                        outlined
                        color="#fe6472"
                        @click="reveal = true"
                        style="text-transform: none"
                        class="mx-0 my-5"
                      >
                        Conoce más
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                    elevation="0"
                  >
                    <v-card-text class="pb-0 my-5">
                      <p class="texto-body">Contamos con servicios de:</p>
                      <ul class="texto-body text-left">
                        <li>
                          Identificación de potencial (habilidades blandas) y
                          objetivos individuales.
                        </li>
                        <li>Definición estrategia (elaboración de CV)</li>
                        <li>
                          Estrategia para entrevistas de impacto. (Contención
                          emocional - Branding personal)
                        </li>
                        <li>
                          Implementación de la Búsqueda (Redes Sociales -
                          LinkedIn-Algoritmos - Red de apoyo).
                        </li>
                      </ul>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#fe6472"
                        @click="reveal = false"
                        class="ml-5"
                        style="text-transform: none"
                      >
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="auto" md="4" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="../assets/gestion/proyecto.png"></v-img>
              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Job First (Orientación vocacional).
                  </p>

                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Creemos que la juventud es el legado más valioso, por eso
                    los apoyamos en la búsqueda de su primer trabajo.
                    <br />
                    <br />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="#fe6472"
                    to="contactanos"
                    style="text-transform: none"
                    class="ma-5"
                  >
                    Contáctanos
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal2"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                    elevation="0"
                  >
                    <v-card-text class="pb-0">
                      <p class="texto-body">
                        Nuestras evaluaciones y diagnósticos:
                      </p>
                      <ul class="texto-body text-left">
                        <li>Assessment Center</li>
                        <li>
                          Evaluación de Competencias Psicometría y Proyectiva
                        </li>
                        <li>Evaluación del Desempeño</li>
                        <li>Diagnóstico de Clima Laboral y Organizacional</li>
                      </ul>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#fe6472"
                        @click="reveal2 = false"
                        class="ma-5"
                        style="text-transform: none"
                      >
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="auto" md="4" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="../assets/gestion/entrenamiento2.png"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">Outplacement.</p>
                  <div
                    class="texto-body cuerpo mt-n2 mb-n5"
                    style="text-align: center !important"
                  >
                    Desvinculación de personal. Desarrollamos efectivos
                    programas para mejorar la imagen interna y externa de su
                    organización una vez que se decide que la persona dejará la
                    compañía.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-col sm="12" md="6">
                      <v-btn
                        outlined
                        color="#fe6472"
                        to="contactanos"
                        style="text-transform: none"
                        class="mx-0 my-5"
                      >
                        Contáctanos
                      </v-btn>
                    </v-col>
                    <!-- <v-col cols="6">
                      <v-btn
                        outlined
                        color="#fe6472"
                        @click="reveal3 = true"
                        style="text-transform: none"
                        class="mx-0 my-5"
                      >
                        Conoce más
                      </v-btn>
                    </v-col> -->
                  </v-row>
                </v-card-actions>

                <!-- <v-expand-transition>
                  <v-card
                    v-if="reveal3"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                    elevation="0"
                  >
                    <v-card-text class="pb-0">
                      <p class="texto-body">
                        En Addition, contamos con diferentes metodologías de
                        capacitación y desarrollo para el crecimiento de tu
                        organización.
                      </p>
                      <ul class="texto-body text-left">
                        <li>Team Building</li>
                        <li>Capacitación tradicional</li>
                        <li>Diseño de Programas de Coaching</li>
                      </ul>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#fe6472"
                        @click="reveal3 = false"
                        class="ma-5"
                        style="text-transform: none"
                      >
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition> -->
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <v-row no-gutters class="contadores">
      <v-col cols="4" class="pt-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+12</strong></span>
        <br />
        <span class="texto">años de experiencia</span>
      </v-col>
      <v-col cols="4" class="px-5 py-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+100</strong></span>
        <br />
        <span class="texto">personas por año impactadas</span>
      </v-col>
      <v-col cols="4" class="pt-10">
        <span class="numero"><strong>+80</strong></span>
        <br />
        <span class="texto">empresas impactadas</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.coach-pag {
  padding: 0;
  font-family: Commissioner !important;

  .texto-big {
    font-size: 2.25rem;
    line-height: 3.5rem;
  }

  .contenedor {
    padding: 60px !important;
    align-self: center;
  }

  .glass {
    background-color: rgba($color: #fff, $alpha: 0.7);
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
    border-width: 1px;
    min-height: 450px;
    padding: 5%;
  }

  .texto-land {
    font-size: large;
    color: #374751 !important;
    text-align: justify;
  }
  .texto-card {
    .titulos {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2.5rem;
      letter-spacing: 0.0073529412em !important;
    }
    .cuerpo {
      font-size: 1.3rem !important;
      font-weight: 300;
      line-height: 2rem;
      letter-spacing: normal !important;
      margin-top: 1.3rem;
    }
  }
  .texto-body {
    font-size: medium;
    color: #374751 !important;
    text-align: justify;
  }
  .pink-color {
    color: #ea5076;
    font-size: 30px;
  }
  .purple-color {
    color: #9825a6;
    font-size: 30px;
  }
  .blue-color {
    color: rgb(0, 219, 255);
    font-size: 30px;
  }

  .formato-video {
    padding: 40px !important;
  }

  .soluciones {
    background: rgb(255, 221, 51);
    background: linear-gradient(
      129deg,
      rgba(255, 221, 51, 1) 22%,
      rgba(253, 23, 146, 1) 84%
    );

    .txt-white {
      color: #fff;
      font-size: 30px;
      padding-top: 20px;
    }
    .sol-card {
      border-radius: 2.5rem;
      border-width: 1px;
    }
  }
  .contadores {
    background-color: #e5e7eb;
    padding: 0px !important;

    .numero {
      font-size: 60px;
    }
    .texto {
      text-transform: uppercase;
    }
  }
  .glass2 {
    background-color: rgba($color: #fff, $alpha: 0.7);
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
    border-width: 1px;
    padding: 5%;
  }
  .solo-mob {
    display: none;
  }

  .tarjeta-serv {
    height: 100%;
    img {
      min-height: 500px;
    }
  }
  .casos-ex {
    /* background-color: #69c6fa; */
    background: linear-gradient(
      90deg,
      rgba(105, 198, 250, 1) 0%,
      rgba(255, 255, 255, 1) 20%
    );
    .texto-ex {
      font-size: medium;
      color: #000 !important;
    }
    .vertical-center {
      margin: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }

  @media only screen and (max-width: 600px) {
    .solo-desk {
      display: none;
    }
    .solo-mob {
      display: inline;
    }
    .contenedor {
      padding: 20px !important;
    }

    .texto-land {
      font-size: medium;
    }
    .texto-body {
      font-size: small;
    }
    .texto-titulo {
      font-size: medium;
    }
    .formato-video {
      padding: 0px !important;
    }
    .contadores {
      padding: 0px !important;
      .numero {
        font-size: medium;
      }
      .texto {
        font-size: x-small;
      }
    }
    .casos-ex {
      .texto-tit {
        font-size: x-large !important;
      }
      .texto-ex {
        font-size: small;
      }
    }
  }
}
</style>

<script>
export default {
  data: () => ({
    reveal: false,
    reveal2: false,
    reveal3: false,
  }),
};
</script>
