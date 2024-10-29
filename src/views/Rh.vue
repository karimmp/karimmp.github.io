<template>
  <v-container fluid class="rh-pag">
    <v-img alt="fondo" src="https://d1z76heyx58zfh.cloudfront.net/assets/gestion/junta.png">
      <v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass" elevation="1">
            <v-card-title class="pt-8 texto-titulo" style="word-break: break-word">
              <h2>Gestión de Recursos Humanos</h2>
            </v-card-title>
            <v-card-text class="pt-8 texto-land">
              Conocemos la importancia de la gestión del personal para tu
              empresa, por lo que brindamos soluciones de gestión total o
              parcial de sus procesos de Recursos Humanos.
              <br />
              <br />
              Te ayudamos a mejorar y gestionar tu plantilla laboral con la
              atracción y
              <strong>
                selección, evaluación, entrenamiento, capacitación y desarrollo
                de talento humano
              </strong>
              dentro de tu organización para que puedas concentrarte en las
              tareas más importantes para el crecimiento de tu empresa.
              <br />
            </v-card-text>
            <div class="pt-5 text-left">
              <v-btn color="#12b0f4" rounded class="pa-7" dark @click="$vuetify.goTo('#serviciosd')">
                Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-img>

    <v-container fluid class="soluciones">
      <section id="serviciosd">
        <h1 class="txt-white mt-5">Gestión de recursos humanos</h1>
        <v-row class="pa-15 contenedor">
          <v-col cols="auto" md="3" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="https://d1z76heyx58zfh.cloudfront.net/assets/gestion/juntas.png"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Atracción y selección de talento humano.
                  </p>

                  <div class="texto-body cuerpo" style="text-align: center !important">
                    Contrata al personal adecuado para el crecimiento de tu
                    organización.
                    <br />
                    <br />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn outlined color="#12b0f4" @click="reveal = true" style="text-transform: none" class="ma-5">
                    Conoce más
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%"
                    elevation="0">
                    <v-card-text class="pb-0 my-5">
                      <p class="texto-body">Contamos con servicios de:</p>
                      <ul class="texto-body text-left">
                        <li>Reclutamiento y selección de personal</li>
                        <li>Head hunter</li>
                        <li>Estudios socioeconómicos y laborales</li>
                        <p class="texto-body text-left mt-1">Y más..</p>
                      </ul>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn outlined color="#12b0f4" @click="reveal = false" class="ml-5" style="text-transform: none">
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="auto" md="3" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="https://d1z76heyx58zfh.cloudfront.net/assets/gestion/proyecto.png"></v-img>
              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Evaluación de talento humano y organizacional.
                  </p>

                  <div class="texto-body cuerpo" style="text-align: center !important">
                    Fortalece los procesos internos de tu organización con
                    nuestras evaluaciones y diagnóstico.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn outlined color="#12b0f4" @click="reveal2 = true" style="text-transform: none" class="ma-5">
                    Conoce más
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card v-if="reveal2" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%"
                    elevation="0">
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
                      <v-btn outlined color="#12b0f4" @click="reveal2 = false" class="ma-5"
                        style="text-transform: none">
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="auto" md="3" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-img src="https://d1z76heyx58zfh.cloudfront.net/assets/gestion/entrenamiento2.png"></v-img>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <p class="titulos text--primary">
                    Entrenamiento, capacitación y desarrollo.
                  </p>
                  <p>Virtual y Presencial</p>
                  <div class="texto-body cuerpo mt-n2 mb-n5" style="text-align: center !important">
                    La capacitación y desarrollo del personal de tu empresa es
                    básico para el crecimiento de esta.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn outlined color="#12b0f4" @click="reveal3 = true" style="text-transform: none" class="ma-5">
                    Conoce más
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <v-card v-if="reveal3" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%"
                    elevation="0">
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
                      <v-btn outlined color="#12b0f4" @click="reveal3 = false" class="ma-5"
                        style="text-transform: none">
                        Cerrar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-card>
          </v-col>

          <v-col cols="auto" md="3" sm="12">
            <v-card elevation="10" color="white" class="tarjeta-serv">
              <v-card elevation="0" class="texto-card">
                <v-img src="https://d1z76heyx58zfh.cloudfront.net/assets/gestion/especializados.png"></v-img>
                <v-card-text>
                  <p class="titulos text--primary pb-5">
                    Servicios especializados.
                  </p>

                  <div class="texto-body cuerpo pt-5" style="text-align: center !important">
                    ¡En Addition evolucionamos a un modelo de servicios
                    especializados!
                    <br />
                    <br />
                  </div>
                </v-card-text>
                <v-card-actions class="ma-5">
                  <div>
                    <v-btn outlined color="#12b0f4" @click="reveal4 = true" style="text-transform: none">
                      Conoce más
                    </v-btn>
                  </div>
                </v-card-actions>

                <v-expand-transition>
                  <v-card v-if="reveal4" class="
                      transition-fast-in-fast-out
                      v-card--reveal
                      d-flex
                      flex-column
                    " style="height: 100%" elevation="0">
                    <v-card-text class="pb-0">
                      <p class="text-left" style="line-height: 1.3rem">
                        Estamos autorizados y cumplimos con todos los requisitos
                        para ofrecer
                        <strong> Servicios Especializados</strong> enfocados en
                        enriquecer al personal de tu empresa para que logres
                        alcanzar objetivos administrativos, comerciales y de
                        innovación.
                      </p>
                      <v-row align-items="center">
                        <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
                          <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
                            <div>
                              <v-btn :input-value="active" icon @click="toggle">
                                <v-icon>mdi-record</v-icon>
                              </v-btn>
                            </div>
                          </v-item>
                        </v-item-group>

                        <v-col>
                          <v-window v-model="window" class="elevation-1" vertical>
                            <v-window-item>
                              <v-card flat>
                                <v-card-text>
                                  <v-row class="mb-4" align-items="center">
                                    <strong class="text-h6">Addition back office
                                      administrativo</strong>
                                  </v-row>
                                  <p class="text-left">
                                    Ofrecemos
                                    <strong> soluciones profesionales</strong>
                                    que optimizan los procesos contables,
                                    legales, comerciales y administrativos de tu
                                    empresa para mejorar la productividad y
                                    cumplimiento de los objetivos de esta.
                                  </p>
                                </v-card-text>
                              </v-card>
                            </v-window-item>
                            <v-window-item>
                              <v-card flat>
                                <v-card-text>
                                  <v-row class="mb-4" align-items="center">
                                    <strong class="text-h6">Addition IT technology</strong>
                                  </v-row>
                                  <p class="text-left">
                                    Contamos con un
                                    <strong>
                                      soporte profesional especializado</strong>
                                    en programación, implementación, diseño,
                                    asesoría y servicios de internet.
                                  </p>
                                </v-card-text>
                              </v-card>
                            </v-window-item>
                            <v-window-item>
                              <v-card flat>
                                <v-card-text>
                                  <v-row class="mb-4" align-items="center">
                                    <strong class="text-h6">Addition personal de Marketing</strong>
                                  </v-row>
                                  <p class="text-left">
                                    Brindamos
                                    <strong> soluciones especializadas</strong>
                                    en el área de mercadotecnia, publicidad y
                                    actividades relacionadas, ayudando a
                                    nuestros clientes a impulsar sus ventas y
                                    hacer crecer tu negocio.
                                  </p>
                                </v-card-text>
                              </v-card>
                            </v-window-item>

                            <v-window-item>
                              <v-card flat>
                                <v-card-text>
                                  <v-row class="mb-4" align-items="center">
                                    <strong class="">Servicios Especializados</strong>
                                  </v-row>
                                  <p class="text-left mb-n3 mt-n2">
                                    En Addition pensamos en ti y en las
                                    necesidades específicas de tu empresa, por
                                    eso, evolucionamos y te ofrecemos un modelo
                                    de
                                    <strong>
                                      soporte profesional especializado
                                    </strong>
                                    que ayude a tu organización a gestionar
                                    áreas y procesos de suma importancia en tu
                                    empresa para que tú puedas enfocarte en el
                                    crecimiento y desarrollo de esta.
                                  </p>
                                </v-card-text>
                              </v-card>
                            </v-window-item>
                          </v-window>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn outlined color="#12b0f4" @click="reveal4 = false" class="ma-5"
                        style="text-transform: none">
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
          <v-img height="100%" src="https://d1z76heyx58zfh.cloudfront.net/assets/servicios/servicios-section.png"></v-img>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="">
          <v-card class="mx-12 my-12" elevation="0">
            <h2 class="text-left mb-n1 blue-color">
              Gestión de Recursos Humanos
            </h2>
            <v-card-text class="text-justify texto-body">En <strong> Addition Human Resources</strong> sabemos que el
              recurso más valioso de tu empresa es su gente.
              <br />
              <br />
              En Addition estamos comprometidos a ayudarte con la
              <strong>
                motivación, retención y desarrollo de talento de tu equipo de
                trabajo,</strong>
              por lo que proporcionamos soluciones funcionales y prácticas con
              una comunicación estrecha y personalizada a nivel organizacional,
              individual y/o grupal para cumplir con los objetivos de tu
              organización.
              <br />
            </v-card-text>
            <div class="text-left">
              <v-btn color="#12b0f4" style="text-transform: none" dark class="pa-6" rounded to="contactanos">
                ¡Contáctanos!</v-btn>
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
      <v-row no-gutters style="background-color: #12b0f4">
        <v-col cols="auto" md="6" class="solo-desk contenedor" style="color: #fff">
          <div class="pl-16 ml-16" style="text-align: left !important">
            <span class="texto-big">¿Por qué pensar en<br />
              <strong> gestión de RH?</strong></span>
          </div>
        </v-col>

        <v-col cols="auto" md="6" sm="12">
          <div class="solo-mob pa-10" style="color: #fff">
            <span class="text-h4">¿Por qué pensar en <br />
              <strong>gestión de RH?</strong></span>
          </div>
          <div>
            <v-carousel cycle :show-arrows="false" hide-delimiter-background style="background-color: #fff" light>
              <v-carousel-item>
                <v-card max-width="750" min-height="350" class="mx-auto text-justify" elevation="0">
                  <v-img max-height="300" src="https://d1z76heyx58zfh.cloudfront.net/assets/home/bolsa-de-trabajo.jpg"></v-img>
                  <div class="texto-ex ma-5">
                    <v-card-text class="text-h5">
                      Una correcta gestión de
                      <strong> Recursos Humanos</strong> ayuda a las empresas a
                      lograr objetivos financieros y de crecimiento profesional.
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card max-width="750" min-height="350" class="mx-auto text-justify" elevation="0">
                  <v-img max-height="300" src="https://d1z76heyx58zfh.cloudfront.net/assets/home/alianzas-casos-de-exito.jpg"></v-img>
                  <div class="texto-ex ma-5">
                    <v-card-text class="text-h5">
                      El desarrollo del <strong> talento humano</strong> de una empresa ahorra
                      costos de rotación de personal y salud organizacional.
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card max-width="750" min-height="350" class="mx-auto text-justify" elevation="0">
                  <v-img max-height="300" src="https://d1z76heyx58zfh.cloudfront.net/assets/home/servicios-especializados.jpg"></v-img>
                  <div class="texto-ex ma-5">
                    <v-card-text class="text-h5">
                      Mejora la productividad, el <strong> clima laboral</strong> y la comunicación interna de la
                      empresa.
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card max-width="750" min-height="350" class="mx-auto text-justify" elevation="0">
                  <v-img max-height="300" src="https://d1z76heyx58zfh.cloudfront.net/assets/home/diversidad-inclusion.jpg"></v-img>
                  <div class="texto-ex ma-5">
                    <v-card-text class="text-h5">
                      Fortalece la <strong> pertenencia, lealtad y compromiso</strong> con su empresa por parte del
                      personal.
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
.rh-pag {
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
    background: rgb(0, 219, 255);
    background: linear-gradient(129deg,
        rgba(0, 219, 255, 1) 22%,
        rgba(89, 2, 201, 1) 84%);

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

  .tarjeta-serv {
    height: 100%;

    img {
      min-height: 500px;
    }
  }

  .casos-ex {
    /* background-color: #69c6fa; */
    background: linear-gradient(90deg,
        rgba(105, 198, 250, 1) 0%,
        rgba(255, 255, 255, 1) 20%);

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
      font-size: xx-large;
      white-space: nowrap;
      }
      .texto {
        text-transform: uppercase;
        word-break: keep-all; /* Evita que las palabras se corten */
        overflow-wrap: normal; /* Mantiene las palabras juntas */
        width: 100%; /* Asegura que ocupe todo el ancho disponible */
        text-align: center; /* Centra el texto */
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
    reveal4: false,
    length: 4,
    window: 0,
  }),
};
</script>


