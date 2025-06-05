<template>
  <v-container fluid class="diver-pag">
    <v-img
      alt="fondo"
      src="../assets/servicios/portada-servicios.png"
      ><v-row no-gutters>
        <v-col lg="6" md="9" sm="12" class="contenedor">
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
              <strong> Diversidad & Inclusión </strong> para mejorar la
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
                  Discriminación.</strong
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
      <div id="servicios"></div>
      <section ref="serviciosd">
        <h1 class="txt-white mt-5">Servicios en Diversidad e Inclusión</h1>
        <v-row class="py-16 px-5 justify-space-around" height="100%">
          <v-col
            class="d-flex"
            v-for="(card, index) in cards"
            :key="index"
            cols="auto"
            lg="4"
            md="6"
            sm="12"
          >
            <v-card elevation="10" color="white" height="100%">
              <div class="service-card__image-container">
                <v-img
                  :src="card.image"
                  height="200"
                  class="service-card__image"
                >
                  <v-img width="80px" class="icono" :src="card.icono"></v-img>
                </v-img>
              </div>

              <v-card elevation="0">
                <v-card-title class="service-card__title text-left">{{
                  card.title
                }}</v-card-title>
                <v-card-subtitle class="service-card__subtitle text-left">
                  {{ card.subtitle }}
                </v-card-subtitle>
                <v-card-actions class="d-flex justify-space-between pa-7">
                  <v-btn
                    outlined
                    color="#9825a6"
                    @click="revealCard(index)"
                    style="text-transform: none"
                    class=""
                  >
                    Conoce más
                  </v-btn>
                  <v-btn
                    outlined
                    color="#9825a6"
                    :to="card.link"
                    style="text-transform: none"
                    class=""
                  >
                    Contáctanos
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <v-card
                    v-if="card.reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    max-height="50vh"
                    elevation="0"
                  >
                    <v-card-subtitle class="text-justify font-weight-black">
                      {{ card.text }}
                    </v-card-subtitle>
                    <v-card-text
                      class="pb-10 text-justify"
                      v-html="card.description"
                    >
                    </v-card-text>
                    <v-card-actions class="d-flex justify-space-between pa-7">
                      <v-btn
                        outlined
                        color="#9825a6"
                        @click="hideCard(index)"
                        class="ml-5"
                        style="text-transform: none"
                      >
                        Cerrar
                      </v-btn>
                      <v-btn
                        outlined
                        color="#9825a6"
                        :to="card.link"
                        style="text-transform: none"
                        class=""
                      >
                        Contáctanos
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
            src="https://d1z76heyx58zfh.cloudfront.net/assets/servicios/servicios-section.png"
          ></v-img>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="">
          <v-card class="mx-12 my-12" elevation="0">
            <h2 class="text-left mb-n3 purple-color">
              ¿Tu organización asume los temas sobre Diversidad e Inclusión?
            </h2>
            <v-card-text class="text-justify texto-body"
              >Con nuestra fórmula hemos participado en la asesoría, formación,
              y/o certificación de más de 2,879 empresas del sector público y
              privado.
              <br />
              <br />
              Iniciamos con un <strong>diagnóstico gratuito,</strong> de
              Igualdad Laboral y No Discriminación y/
              <strong>
                factores de riesgo psicosocial de tu organización,</strong
              >
              medimos el <strong>clima laboral,</strong> sensibilizamos y
              capacitamos a todos los integrantes de la empresa, asesoramos y
              hacemos ajustes en las políticas, procedimientos y estrategias de
              gestión.
              <br />
              <br />
              Apoyamos a tu empresa a implementar mecanismos, protocolos de
              linea de Atención a Quejas/ Denuncia de acoso laboral,
              hostigamiento, discriminación, abusos de autoridad, fraudes y/o
              condiciones de trabajo inseguras.
              <br />
              <br />
              ¡Evalúate y certifícate!.
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
              <strong> Diversidad e Inclusión?</strong></span
            >
          </div>
        </v-col>

        <v-col cols="auto" md="6" sm="12">
          <div class="solo-mob pa-10" style="color: #fff">
            <span class="text-h4"
              >¿Por qué pensar en <br />
              <strong>Diversidad e Inclusión?</strong></span
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
                    src="https://d1z76heyx58zfh.cloudfront.net/assets/home/bolsa-de-trabajo.jpg"
                  ></v-img>
                  <v-card-title class="pb-0 text-break"
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
                    src="https://d1z76heyx58zfh.cloudfront.net/assets/home/alianzas-casos-de-exito.jpg"
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
                    src="https://d1z76heyx58zfh.cloudfront.net/assets/home/servicios-especializados.jpg"
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
                    src="https://d1z76heyx58zfh.cloudfront.net/assets/home/diversidad-inclusion.jpg"
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

  .service-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .service-card__image-container {
    height: 200px;
    overflow: hidden;
  }

  .service-card__image {
    height: 100%;
    object-fit: cover;

    .icono {
      margin-top: 20%;
      margin-left: 80%;
    }
  }

  .service-card__title {
    white-space: normal;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 16px 16px 8px;
    word-break: break-word;
    height: 90px;
    align-content: flex-start;
  }

  .service-card__subtitle {
    font-size: 1.0rem;
    padding: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    height: 110px;
  }
  .service-card__content {
    flex-grow: 1;
    padding: 0 16px;
  }

  .service-card__list {
    margin-top: 16px;
  }

  .service-card__list-item {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.2;
    max-width: 100%;
    padding: 4px 0;
  }

  .service-card__actions {
    padding: 16px;
    justify-content: center;
  }

  .service-card__button {
    text-transform: none;
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

  .v-card--reveal {
    max-height: 80vh; /* Altura máxima de la tarjeta */
    overflow-y: auto; /* Añadir barra de desplazamiento vertical */
  }

  .v-card-text {
    max-height: 70vh; /* Ajustar la altura máxima del contenido de texto */
    overflow-y: auto; /* Añadir barra de desplazamiento vertical al texto */
  }

  .contadores {
    background-color: #e5e7eb;
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

    .service-card__image {
      .icono {
        width: 60px;
        margin-left: 73%;
        margin-top: 35%;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "NMX-R-025-SCFI-2015",
          subtitle: "Norma Mexicana, Igualdad Laboral y No Discriminación.",
          image:
            "https://d1z76heyx58zfh.cloudfront.net/assets/home/diversidad-inclusion.jpg",
          reveal: false,
          link: "/NMX025",
          description:
            "Reconoce a tu empresa como un centro de trabajo que cuenta con prácticas en materia de <strong>Igualdad Laboral y No Discriminación,</strong> para favorecer el desarrollo integral de las y los trabajadores. <br><br>¡Esta certificación te ayuda a obtener puntos adicionales para poder ganar licitaciones públicas!.",
        },
        {
          title: "NOM-035-STPS-2018",
          subtitle: "Norma Oficial Mexicana, Factores de riesgo psicosocial.",
          text: "Logra su implementación de forma correcta",
          image:
            "https://d1z76heyx58zfh.cloudfront.net/assets/home/servicios-especializados.jpg",
          reveal: false,
          link: "NOM035",
          description:
            "Identificar, analizar y prever factores de riesgo psicosocial en tu empresa y promueve un entorno organizacional favorable para tus trabajadores.",
        },
        {
          title: "NOM-037-STPS-2023",
          subtitle:
            "Teletrabajo-Condiciones de seguridad y salud en el trabajo.",
          text: "Logra su implementación de manera adecuada cuando su personal  realiza más del 40 % de su jornada laboral en teletrabajo (home office).",
          image: require("@/assets/teletrabajo.png"),
          reveal: false,
          nota: "Nuevo Servicio",
          icono: require("@/assets/nuevo.png"),
          link: "/NOM037",
          description:
            "Cumplir con la Norma 037 es fundamental para prevenir accidentes y enfermedades, y para promover un entorno laboral seguro y saludable, en los lugares de trabajo donde las personas operen bajo la modalidad de Teletrabajo.",
        },
        {
          title: "Distintivo de Empresa Socialmente Responsable ",
          subtitle: "Obtén el distintivo de Empresa Socialmente Responsable.",
          image:
            "https://d1z76heyx58zfh.cloudfront.net/assets/home/gestion-recursos.jpg",
          reveal: false,
          link: "contactanos",
          description:
            "Adopta los principios de una empresa socialmente responsable como parte de la cultura de tu empresa y como estrategia de negocio generando más competitividad empresarial y un mejor funcionamiento interno de tus trabajadores.",
        },
        {
          title: "Administración de Sistema Ético de Denuncia",
          subtitle:
            "Administramos sus medios de denuncia para mejorar el ambiente laboral y reputación de la marca; asegurando objetividad, imparcialidad y confidencialidad en todo el proceso.",
          text: "Creamos resultados en:",
          image: require("@/assets/servicios.jpg"),
          reveal: false,
          nota: "Nuevo Servicio",
          icono: require("@/assets/nuevo.png"),
          link: "/ServiciosAdicionales",
          description: `
    • Elaboración de protocolos para prevenir, atender y dar seguimiento a prácticas de discriminación, violencia laboral y faltas éticas. <br>
    • Administración de líneas de denuncia <br>
    • Apoyo externo de Ombudsman <br><br>
    
    Todos nuestros servicios llevan seguimiento y recursos personalizados de acuerdo a las necesidades específicas de tu organización. Detectando conductas no éticas que pueden afectar seriamente el desarrollo y la reputación de su organización.`,
        },
      ],
    };
  },
  methods: {
    revealCard(index) {
      this.cards[index].reveal = true;
    },
    hideCard(index) {
      this.cards[index].reveal = false;
    },
    scrollToContact() {
      this.$vuetify.goTo("#Contactanos");
    },
  },
};
</script>
