<template>
  <v-container fluid class="main-pag">
    <v-img
      alt="fondo"
      src="https://d1z76heyx58zfh.cloudfront.net/assets/portada/imagen-portada.png"
      ><v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              <h2>La Diversidad e Inclusión enriquece a tu organización</h2>
            </v-card-title>

            <v-card-subtitle class="pt-8">
              <h3 class="texto-land">
                ¿Tu organización promueve ambientes de Diversidad e Inclusión?
              </h3>
            </v-card-subtitle>
            <v-card-text class="pt-1 texto-land">
              Más de 20 años de experiencia haciendo trascender a empresas
              nacionales y transnacionales, a través de la implementación de
              sistemas que promueven la
              <b>inclusión y permanencia laboral.</b>
              <br />
              <br />
              Somos la primera empresa de consultoría en
              <b>Recursos Humanos</b> en obtener la certificación en la
              <b
                >Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No
                Discriminación.</b
              >
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="#ea5076"
                rounded
                class="pa-7"
                dark
                @click="$vuetify.goTo('#soluciones')"
                >Conoce más
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-img>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="auto" md="6" sm="12" class="formato-video">
          <video width="100%" height="auto" controls autoplay muted>
            <source
              src="../assets/video/V3-ADD 2024 OK.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="pa-5">
          <v-card elevation="0">
            <v-card-title class="pink-color" style="word-break: break-word">
              <p>¡Bienvenida/o a <strong>Addition Human Resources!</strong></p>
            </v-card-title>
            <v-card-text class="texto-body">
              Sabemos que las personas que conforman tu empresa son cruciales
              para su crecimiento.
              <br />
              <br />
              En Addition estamos comprometidos a ayudarte con la
              <b>motivación, retención y desarrollo de tu equipo de trabajo</b>
              basado en una <b>cultura de respeto</b> y de
              <b>Diversidad e Inclusión </b>para el crecimiento de tu empresa.
              <br />
              <br />
              Proporcionamos soluciones funcionales y prácticas con una
              comunicación estrecha y personalizada a nivel organizacional,
              individual y/o grupal para cumplir con los objetivos de tu
              organización.
              <br />
              <br />
              Addition ocupa el lugar 11 a nivel nacional dentro de las 50
              mejores empresas de consultoría en<b> Recursos Humanos</b>, de
              acuerdo con el ranking de la Revista Consultoría y el lugar No.34
              de las mejores empresas de consultoría Administrativa y de
              Gestión.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="soluciones">
      <section id="soluciones">
        <h1 class="txt-white mt-2">Nuestras Soluciones</h1>
        <v-row class="pa-4">
          <v-col
            v-for="(card, index) in cards"
            :key="index"
            cols="auto"
            md="4"
            sm="12"
          >
            <v-card
              class="service-card"
              elevation="10"
              color="white"
              height="100%"
            >
              <div class="service-card__image-container">
                <v-img
                  :src="card.image"
                  height="200"
                  class="service-card__image"
                ></v-img>
              </div>
              <v-card-title class="service-card__title text-left">{{
                card.title
              }}</v-card-title>
              <v-card-subtitle class="service-card__subtitle text-left">
                {{ card.subtitle }}
              </v-card-subtitle>
              <v-card-text class="service-card__content text-left">
                <v-list class="service-card__list">
                  <v-list-item
                    v-for="(item, subIndex) in card.listItems"
                    :key="subIndex"
                    class="service-card__list-item pa-0"
                    dense
                  >
                    <v-list-item-icon class="mr-2">
                      <v-icon color="primary" small>mdi-circle-medium</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 text-wrap">{{
                        item
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :to="card.link"
                  style="text-transform: none"
                  color="#ea5076"
                  outlined
                  class="pa-5, ma-5"
                  dark
                  >Conoce más</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <v-container fluid>
      <v-row class="pa-5">
        <v-col cols="auto" md="6" sm="12" style="align-self: center">
          <v-card elevation="0">
            <v-card-title class="purple-color" style="word-break: break-word">
              <p>
                <strong
                  >¡Nos preocupamos por las personas que forman tu
                  empresa!</strong
                >
              </p>
            </v-card-title>
            <v-card-text class="texto-body">
              Con más de 20 años de experiencia, hemos ayudado a empresas
              nacionales y transnacionales, a través de la implementación de
              sistemas que promueven la <b>inclusión y permanencia laboral</b>
              ofreciendo soluciones a la medida de cada uno de nuestros
              clientes.
              <br />
              <br />
              Con nuestra fórmula hemos participado en asesoría, formación, y/o
              certificación de más de 2,879 empresas del sector público y
              privado.
              <br />
              <br />
              Siendo “Agente Capacitador” en temas de
              <b
                >desarrollo, derechos humanos, hostigamiento y acoso, igualdad
                laboral, violencia laboral y no discriminación</b
              >
              ante la STPS.
              <br />
              <br />
              Contamos con un equipo de asesores con certificaciones
              internacionales en temas de <b>Equidad de Género.</b>
              <br />
              <br />
              ¡Es momento de transformar tu empresa y destacar el potencial de
              tu equipo!
            </v-card-text>
            <div class="pt-5 text-left">
              <v-btn
                to="/nosotros#formula"
                color="#9825a6"
                style="text-transform: none"
                rounded
                class="pa-7"
                dark
                >Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="pa-5">
          <v-img
            max-width="700px"
            src="https://d1z76heyx58zfh.cloudfront.net/assets/1.webp"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-row no-gutters class="contadores">
      <v-col cols="4" class="pa-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+20</strong></span>
        <br />
        <span class="texto">años de experiencia</span>
      </v-col>
      <v-col cols="4" class="px-5 py-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+40.000</strong></span>
        <br />
        <span class="texto">personas por año impactadas</span>
      </v-col>
      <v-col cols="4" class="pa-10">
        <span class="numero"><strong>+2000</strong></span>
        <br />
        <span class="texto">empresas satisfechas</span>
      </v-col>
    </v-row>
    <v-parallax
      src="https://d1z76heyx58zfh.cloudfront.net/assets/portada/laboral.jpg"
    >
      <v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass2" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              “El éxito de una empresa es simplemente el reflejo de la actitud,
              grado de motivación y compromiso de las personas que la forman.”
            </v-card-title>
            <div class="text-right text-md-body-1 mx-5">Camilo Cruz.</div>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="casos-ex" fluid>
      <v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor texto">
          <v-card elevation="10">
            <v-img
              src="https://d1z76heyx58zfh.cloudfront.net/assets/home/alianzas-casos-de-exito.jpg"
            ></v-img>
            <v-card-title style="word-break: break-word">
              Diversidad e Inclusión
            </v-card-title>
            <v-card-text class="text-left">
              Con la asesoría de nuestro Coach, podrás elegir entre uno o varios
              temas de nuestro catálogo de servicios ajustándose a un tiempo y
              presupuesto objetivo.
            </v-card-text>
            <div class="pa-5 text-left">
              <v-btn
                outlined
                to="/blog"
                class="text-left"
                color="#69c6fa"
                style="text-transform: none"
                >Leer artículo</v-btn
              >
            </div>
          </v-card>
        </v-col>
        <v-col md="6" sm="12" class="contenedor">
          <v-card elevation="0">
            <v-card-title style="color: #69c6fa; word-break: normal">
              <span class="text-h4 texto-tit">Casos de éxito por alianzas</span>
            </v-card-title>
            <v-card-text class="text-justify texto-ex">
              Para Addition, la unión hace la fuerza.
              <br />
              <br />
              Nuestros clientes son parte importante de nuestro crecimiento, por
              lo que hemos construido útiles alianzas con empresas
              especializadas para mayor eficiencia en nuestras soluciones.
              <br />
              <br />
              Hemos trabajado con empresas tanto públicas como privadas de todos
              los giros:
              <br />
              <br />
              <div class="px-3 text-left">
                ● Industriales: Extractivas, manufactureras, de consumo final,
                producción, etc.
                <br />
                <br />
                ● Comerciales: Mayoristas, minoristas, comisionistas.
                <br />
                <br />
                ● De servicios: Transporte, turismo, instituciones financieras,
                servicios públicos y privados, educación, finanzas, salud,
                farmacéutica, etc.
              </div>
            </v-card-text>
            <div class="text-right py-5">
              <v-btn
                rounded
                color="#69c6fa"
                dark
                style="text-transform: none"
                to="/alianzas"
                class="py-5"
              >
                Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="soluciones">
      <p class="txt-white my-5">
        <strong> Lo que nuestros clientes opinan de nosotros </strong>
      </p>
      <v-container fluid>
        <v-row>
          <v-col
            cols="auto"
            md="4"
            sm="12"
            v-for="item in menu"
            :key="item.key"
          >
            <v-card
              class="mx-auto text-justify pa-5"
              max-width="auto"
              min-height="100%"
              color="#fff"
              width=""
            >
              <v-card-text>{{ item.text }}</v-card-text>
              <v-row no-gutters>
                <v-col style="align-self: center">
                  <v-img
                    style="
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      width: 50%;
                    "
                    contain
                    max-width="80"
                    v-bind:src="
                      require('../assets/portada/clientes/' + item.img)
                    "
                  ></v-img>
                </v-col>
                <v-col>
                  <div class="text-right pa-5">
                    <span>{{ item.persona }}</span>
                    <br />
                    <span class="text-left"> {{ item.puesto }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container fluid>
      <v-row no-gutters>
        <v-col
          class="pa-5"
          cols="auto"
          md="4"
          sm="12"
          style="align-self: center"
          ><strong
            ><p class="text-h4">
              Somos una empresa de calidad comprobada
            </p></strong
          ></v-col
        >
        <v-col cols="auto" md="4" sm="12" class="pa-10">
          <v-card width="100%" elevation="0">
            <v-img
              style="
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
              "
              contain
              max-width="200"
              src="https://d1z76heyx58zfh.cloudfront.net/assets/home/certificado-igualdad.png"
            ></v-img>
            <v-card-text class="text-justify"
              >Somos la primer empresa de consultoría en Recursos Humanos en
              obtener la certificación en la Norma Mexicana de Igualdad Laboral
              y No Discriminación.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="auto" md="4" sm="12"
          ><v-card elevation="0">
            <v-img
              style="
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
              "
              contain
              src="../assets/reconocida2025.png"
            ></v-img>
            <v-card-text class="text-justify"
              >Ocupamos el lugar número 9 a nivel Nacional dentro de las 50
              mejores empresas en Recursos Humanos, y el 34 de las mejores
              empresas de consultoría administrativa de gestión.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.main-pag {
  padding: 0;
  font-family: Commissioner;

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
    background-color: #ea5076;

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
  }

  .service-card__title {
    white-space: normal;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 16px 16px 8px;
    word-break: break-word;
}

  .service-card__subtitle {
    font-size: 0.9rem;
    padding: 16px;
    color: rgba(0, 0, 0, 0.6);
    height: 100px;
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
  }

  @media only screen and (max-width: 600px) {
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
    .service-card__subtitle {
      height: auto;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
      model: null,
      menu: [
        {
          key: "garzana",
          icon: "",
          title: "garnanza",
          img: "garanzaLogo.png",
          persona: "Guillermo Ortega",
          puesto: "CEO",
          text: "“Nuestros principales clientes de la industria automotriz solicitan a sus proveedores sumarnos a una cadena devalor promoviendo conceptos de Diversidad & Inclusión, por tal, motivo buscamos el acompañamiento de Addition para certificarnos en la Norma de Igualdad Laboral y No Discriminación, teniendo como beneficio la certificación de nuestro cliente como proveedor y una mejora en nuestro ambiente laboral interno”. ",
        },
        {
          key: "adt",
          icon: "",
          title: "adt",
          img: "adtLogo.png",
          persona: "Gabriela Esquivel",
          puesto: "Gerente de EHS",
          text: "“Somos una empresa donde la seguridad e integridad de nuestros colaboradores es de suma importancia por las actividades que desempeñan, Addition nos asesoró para implementar la Nom 035, alineando el cumplimiento de esta norma a otras que estamos obligados a atender por el giro de nuestro negocio”. ",
        },
        {
          key: "johnson",
          icon: "",
          title: "johnson",
          img: "johnsonLogo.png",
          persona: "Ricardo Bussey",
          puesto: "Director Public Affairs LATAM",
          text: "“Somos clientes de Addition desde hace más de una década para nuestras operaciones en México, han contribuido con su asesoría para fortalecer nuestra cultura organizacional y reforzar en cada una de nuestras acciones la Integridad y el trabajo en equipo como valores principales”. ",
        },
        {
          key: "marken",
          icon: "",
          title: "marken",
          img: "markenLogo.png",
          persona: "David Zendejas",
          puesto: "Manager, Billing Services",
          text: "“Somos una empresa transnacional con representación en México. Addition nos ha brindado asesoría integral en la gestión de nuestro personal, Addition es reconocido internamente en nuestra organización por otros países, como parte del éxito de los resultados en el crecimiento de la operación en México”. ",
        },
        {
          key: "kpmg",
          icon: "",
          title: "kpmg",
          img: "kpmgLogo.png",
          persona: "Ruth Sanders",
          puesto: "Inclusión, Diversidad y Equidad",
          text: "“Somos una Firma comprometida con la inclusión y la diversidad, por esto, decidimos apoyarnos de Addition para obtener la certificación en la Norma de Igualdad Laboral y No Discriminación, quienes nos asesoraron en materia de interpretación e integración de evidencias. Agradecemos su apoyo para cumplir con dicho objetivo”. ",
        },
      ],
      cards: [
        {
          title: "Diversidad e Inclusión",
          subtitle:
            "Implementamos programas de Diversidad e Inclusión para mejorar la productividad de las organizaciones y cumplimiento de la normatividad vigente.",
          image: require("@/assets/home/diversidad-inclusion.jpg"),
          listItems: [
            "Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.",
            "Norma Oficial Mexicana. NOM-035-STPS-2018 de Factores de Riesgo Psicosocial en el trabajo-Identificación, análisis y prevención",
            "Norma Oficial Mexicana NOM-037-STPS-2023, Teletrabajo-Condiciones de seguridad y salud en el trabajo.",
            "Distintivo Empresa Socialmente Responsable.",
            'Administración de "Sistema ético de denuncia".',
            /* "Vigilancia de áreas de riesgo dentro de las organizaciones.  Detectando conductas no éticas que pueden afectar seriamente el desarrollo y la reputación de su organización. Entre los riesgos más comunes se encuentran: Acoso Laboral, Hostigamiento, Discriminación, Abusos de autoridad,  Fraudes y/o Condiciones de trabajo inseguras.", */
          ],
          link: "/diversidad",
        },
        {
          title: "Gestión de Recursos Humanos",
          subtitle:
            "Brindamos soluciones de gestión total o parcial en los procesos de Recursos Humanos.",
          image: require("@/assets/home/gestion-recursos.jpg"),
          listItems: [
            "Atracción y Selección de Talento Humano.",
            "Evaluación de Talento Humano y Organizacional.",
            "Servicios Especializados.",
            "Entrenamiento, Capacitación y Desarrollo.",
          ],
          link: "/Rh",
        },
        {
          title: "Coaching laboral",
          subtitle:
            "Acompañamos a las personas en la búsqueda de empleo para crecimiento personal, familiar y profesional.",
          image: require("@/assets/home/servicios-especializados.jpg"),
          listItems: [
            "Job Hunter",
            "Job First (Orientación vocacional)",
            "Outplacement",
          ],
          link: "/coaching",
        },
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
