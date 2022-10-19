<template>
  <v-container fluid class="diver-pag">
    <v-img alt="fondo" src="../assets/servicios/portada-servicios.png"
      ><v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              <h2>Diversidad e Inclusión</h2>
            </v-card-title>
            <v-card-text class="pt-8 texto-land">
              Nuestro compromiso es crear un buen ambiente laboral dentro de las
              empresas, por lo que implementamos programas de
              <strong> diversidad & inclusión </strong> para mejorar la
              productividad de las organizaciones y el cumplimiento de la
              normatividad vigente.
              <br />
              <br />
              Apoyamos a las empresas a implementar mecanismos de denuncia por
              lo que podemos administrar sus sistema para
              <strong>
                prevenir, atender y sancionar prácticas de discriminación y
                violencia laboral.
              </strong>
              <br />
              <br />
              <span
                ><strong
                  >Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y no
                  Discriminación</strong
                ></span
              >
            </v-card-text>
            <div class="pt-5 text-left">
              <v-btn
                color="#9825a6"
                rounded
                class="pa-7"
                dark
                @click="$vuetify.goTo('#servicios')"
              >
                Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-img>

    <v-container fluid class="soluciones">
      <about id="servicios" />
      <section ref="serviciosd">
        <h1 class="txt-white mt-5">Servicios en diversidad e inclusión</h1>
        <v-row class="pa-15 contenedor">
          <v-col cols="auto" md="4" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="../assets/home/diversidad-inclusion.jpg"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Norma Mexicana NMX-R-025-SCFI-2015
                  </p>
                  <p>Igualdad Laboral y No Discriminación</p>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Certifícate con nosotros
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="#9825a6"
                    @click="reveal = true"
                    style="text-transform: none"
                    class="ma-9"
                  >
                    Conoce más
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                    elevation="0"
                  >
                    <v-card-text class="pb-0">
                      <p class="text-h6 text--primary">
                        Igualdad Laboral y No Discriminación
                      </p>
                      <p class="texto-body">
                        Reconoce a tu empresa como un centro de trabajo que
                        cuenta con prácticas en materia de
                        <strong> igualdad laboral y no discriminación,</strong>
                        para favorecer el desarrollo integral de las y los
                        trabajadores.
                        <br />
                        <br />
                        ¡Esta certificación te ayuda a obtener puntos
                        adicionales para poder ganar licitaciones publicas!
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#9825a6"
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
            <v-card elevation="10" color="white" class="tarjeta-serv" >
              <v-img src="../assets/home/servicios-especializados.jpg"></v-img>
              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Norma Oficial Mexicana NOM-035-STPS-2018
                  </p>
                  <p>Factores de riesgo psicosocial</p>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Logra su implentación de forma correcta
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="#9825a6"
                    @click="reveal2 = true"
                    style="text-transform: none"
                    class="ma-5"
                  >
                    Conoce más
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
                      <p class="text-h6 text--primary">
                        Factores de riesgo psicosocial
                      </p>
                      <p class="texto-body">
                        ¡Nos preocupamos por las personas que forman tu empresa!
                        <br />
                        <br />
                        Identificar, analizar y prever
                        <strong> factores de riesgo psicosocial </strong> en tu
                        empresa y promueve un entorno organizacional favorable
                        para tus trabajadores.
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#9825a6"
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
              <v-img src="../assets/home/gestion-recursos.jpg"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Distintivo de Empresa Socialmente Responsable
                  </p>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Obtén el distintivo de Empresa Socialmente Responsable.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="#9825a6"
                    @click="reveal3 = true"
                    style="text-transform: none"
                    class="ma-10"
                  >
                    Conoce más
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal3"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                    elevation="0"
                  >
                    <v-card-text class="pb-0">
                      <p class="text-h6 text--primary">
                        Empresa Socialmente Responsable
                      </p>
                      <p class="texto-body">
                        Adopta los principios de una empresa socialmente
                        responsable como parte de la cultura de tu empresa y
                        como estrategia de negocio generando más competitividad
                        empresarial y un mejor funcionamiento interno de tus
                        trabajadores
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        outlined
                        color="#9825a6"
                        @click="reveal3 = false"
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
        </v-row>
      </section>
    </v-container>

    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="6" class="solo-desk">
          <v-img
            height="100%"
            src="../assets/servicios/servicios-section.png"
          ></v-img>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="">
          <v-card class="mx-12 my-12" elevation="0">
            <h2 class="text-left mb-n3 purple-color">
              ¿Tu organización asume los temas sobre diversidad e inclusión?
            </h2>
            <v-card-text class="text-justify texto-body"
              >Con nuestra fórmula hemos participado en la asesoría, formación,
              y/o certificación de más de 2,879 empresas del sector público y
              privado.
              <br />
              <br />
              Iniciamos con un <strong>diagnóstico gratuito,</strong> de
              igualdad laboral y no discriminación y/
              <strong>
                factores de riesgo psicosocial de tu organización,</strong
              >
              medimos el <strong>clima laboral,</strong> sensibilizamos y
              capacitamos a todos los integrantes de la empresa, asesoramos y
              hacemos ajustes en las políticas, procedimientos y estrategias de
              gestión.
              <br />
              <br />
              Apoyamos a tu empresa a implementar mecanismos de denuncia de
              <strong> discriminación y violencia laboral.</strong>
              <br />
              <br />
              ¡Evalúate y certifícate!
              <br />
            </v-card-text>
            <div class="text-left">
              <v-btn
                color="#9825a6"
                style="text-transform: none"
                dark
                class="pa-6"
                rounded
                to="contactanos"
                >Obtén un diagnóstico gratuito</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row no-gutters class="contadores">
      <v-col cols="4" class="pt-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+20</strong></span>
        <br />
        <span class="texto">años de experiencia</span>
      </v-col>
      <v-col cols="4" class="px-5 py-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+40.000</strong></span>
        <br />
        <span class="texto">personas por año impactadas</span>
      </v-col>
      <v-col cols="4" class="pt-10">
        <span class="numero"><strong>+2000</strong></span>
        <br />
        <span class="texto">empresas satisfechas</span>
      </v-col>
    </v-row>

    <v-container fluid class="pa-0">
      <v-row no-gutters style="background-color: #9825a6">
        <v-col
          cols="auto"
          md="6"
          class="solo-desk contenedor"
          style="color: #fff"
        >
          <div class="pl-16 ml-16" style="text-align: left !important">
            <span class="texto-big"
              >¿Por qué pensar en<br />
              <strong> diversidad e inclusión?</strong></span
            >
          </div>
        </v-col>

        <v-col cols="auto" md="6" sm="12">
          <div class="solo-mob pa-10" style="color: #fff">
            <span class="text-h4"
              >¿Por qué pensar en <br />
              <strong>diversidad e inclusión?</strong></span
            >
          </div>
          <div>
            <v-carousel
              cycle
              :show-arrows="false"
              hide-delimiter-background
              style="background-color: #fff"
              light
            >
              <v-carousel-item>
                <v-card
                  max-width="750"
                  min-height="350"
                  class="mx-auto text-justify"
                  elevation="0"
                >
                  <v-img
                    max-height="300"
                    src="../assets/home/bolsa-de-trabajo.jpg"
                  ></v-img>
                  <v-card-title class="pb-0"
                    >Hasta un 35% más de retorno sobre el capital
                  </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-text class="texto-body">
                      Las empresas con mayor representación de mujeres en
                      puestos directivos, tienen hasta un 35% más de retorno
                      sobre el capital y hasta un 34% más de retorno total para
                      los accionistas. (The Balance).
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card
                  max-width="750"
                  min-height="350"
                  class="mx-auto text-justify"
                  elevation="0"
                >
                  <v-img
                    max-height="300"
                    src="../assets/home/alianzas-casos-de-exito.jpg"
                  ></v-img>
                  <v-card-title class="pb-0"
                    >Lealtad y compromiso
                  </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-text class="texto-body">
                      Fortalece la pertenencia, lealtad y compromiso con su
                      empresa por parte del personal
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card
                  max-width="750"
                  min-height="350"
                  class="mx-auto text-justify"
                  elevation="0"
                >
                  <v-img
                    max-height="300"
                    src="../assets/home/servicios-especializados.jpg"
                  ></v-img>
                  <v-card-title class="pb-0"
                    >Diversidad e igualdad
                  </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-text class="texto-body">
                      Consolida la cultura directiva y laboral en la que se
                      respeta la diversidad y se proporciona igualdad de trato,
                      de oportunidades, de remuneración y de beneficios.
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card
                  max-width="750"
                  min-height="350"
                  class="mx-auto text-justify"
                  elevation="0"
                >
                  <v-img
                    max-height="300"
                    src="../assets/home/diversidad-inclusion.jpg"
                  ></v-img>
                  <v-card-title class="pb-0">Mejores decisiones </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-text class="texto-body">
                      Los equipos inclusivos toman mejores decisiones hasta en
                      un 87 % del tiempo (Trello).
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.diver-pag {
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
      font-size: 2rem !important;
      font-weight: 500;
      line-height: 2.5rem;
      letter-spacing: 0.0073529412em !important;
    }
    .cuerpo {
      font-size: 1.5rem !important;
      font-weight: 400;
      line-height: 2rem;
      letter-spacing: normal !important;
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

  .formato-video {
    padding: 40px !important;
  }

  .soluciones {
    background: rgb(251, 20, 147);
    background: linear-gradient(
      129deg,
      rgba(251, 20, 147, 1) 22%,
      rgba(92, 1, 177, 1) 87%
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
      font-size: xx-large;
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

    .tarjeta-serv {
      height: 105%;
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
