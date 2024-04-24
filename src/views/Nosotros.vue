<template>
  <v-container fluid class="noso-pag">
    <v-img
      max-height="200"
      alt="fondo-nosotros"
      src="../assets/nosotros/portada-nosotros.png"
    ></v-img>
    <v-card class="mx-auto my-12 landing" max-width="800" elevation="0">
      <v-card-title class="text-big">¿Quiénes Somos?</v-card-title>
      <v-card-text class="text-justify text-med">
        En Addition Human Resources sabemos que el recurso más valioso de su
        empresa es tu gente.
        <br />
        <br />
        Somos una empresa mexicana de consultoría en
        <strong>Recursos Humanos</strong> con más de 20 años de experiencia en
        proporcionar asesoría para la
        <strong
          >motivación, retención y desarrollo del recurso humano de las
          empresas.</strong
        >
        <br />
        <br />        
        Contamos con programas de gestión interna para
        <strong> ingreso, permanencia y
        desarrollo del personal;</strong> basado en una<strong> cultura de respeto </strong> que contribuye a tener una
        sociedad más incluyente con
        <strong>igualdad de oportunidades, sin discriminación </strong> o
        cualquier dimensión que prive los derechos de la persona.
        <br />
        <br />
        Estamos constituidos por personal de amplia experiencia y trayectoria en
        Sistemas de
        <strong>Gestión, Recursos Humanos, Igualdad Laboral y Género.</strong>
      </v-card-text>
    </v-card>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="auto" md="4" sm="12">
          <v-img
            height="613"
            src="../assets/nosotros/lihuba-nosotros.png"
          ></v-img>
        </v-col>
        <v-col cols="auto" md="8" sm="12" class="soluciones">
          <v-card class="mx-12 my-12" color="#ea5076" dark elevation="0">
            <h2 class="text-left mb-n3">Acerca de Lihuba Vences</h2>
            <v-card-subtitle class="text-left"
              >CEO de Addition Human Resources.</v-card-subtitle
            >
            <v-card-text class="text-justify"
              >Psicóloga egresada de la Universidad Nacional Autónoma de México
              especializada en el área laboral y desarrollo organizacional, con
              certificaciones para asesorar y auditar programas de género para
              erradicar la discriminación y contribuir a la igualdad de
              oportunidades.
              <br />
              Cuenta con capacitación en el desarrollo de competencias de
              Ombudsperson Organizacional, Coach e instructora de diversos
              temas; Recursos Humanos, sistemas de gestión, derechos humanos,
              hostigamiento y acoso, igualdad laboral, violencia laboral y no
              discriminación.
              <br />
              Fundó Addition Human Resources con el propósito de optimizar el
              cumplimiento de los objetivos estratégicos de las empresas, a
              través, del establecimiento de planes y estrategias de motivación,
              retención y desarrollo de Capital Humano, enfocados a atender la
              Diversidad e Inclusión de las personas.<br />
              <br />
              Ha apoyado de manera parcial o integral a más de 2000 empresas en
              sus procesos de gestión de Recursos Humanos, cuenta con
              experiencia en formación, procesos de auditoría y asesoría para la
              acreditación, certificación y re - certificación de Distintivos de
              Género, Discriminación, <br />
              <br />
              Diversidad & Inclusión; incluyendo la Norma Mexicana
              NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación, y
              Norma Oficial Mexicana NOM-035-STPS- Factores de riesgo
              psicosocial Identificación, análisis, prevención y distintivos de
              la Secretaria de Trabajo y Previsión Social.<br />
            </v-card-text>
            <div class="text-left">
              <v-btn
                color="white"
                style="color: #ea5076; text-transform: none"
                rounded
                to="contactanos"
                >Ponte en contacto conmigo</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="">
        <v-col cols="auto" md="6" sm="12">
          <v-card
            elevation="10"
            class="mx-auto my-12"
            max-width="600"
            min-height="460"
          >
            <v-parallax
              height="200"
              src="../assets/nosotros/portada-nosotros2.png"
            >
            </v-parallax>
            <div class="glass2">
              <v-card-title>Nuestra Misión</v-card-title>
              <v-card-text class="text-justify texto-ex">
                Proporcionar soluciones funcionales, prácticas y eficaces a
                nuestros clientes en el área de
                <strong> Recursos Humanos</strong>, utilizando como herramienta
                de trabajo la calidad y una comunicación estrecha y
                personalizada; además de brindar satisfacción total para cada
                uno de los involucrados a nivel individual, organizacional y/o
                grupal.
              </v-card-text>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto" md="6" sm="12">
          <v-card
            elevation="10"
            class="mx-auto my-12"
            max-width="600"
            min-height="460"
          >
            <v-parallax
              height="200"
              src="../assets/nosotros/footer-nosotros.png"
            >
            </v-parallax>
            <div class="glass2">
              <v-card-title>Nuestra Visión</v-card-title>
              <v-card-text class="text-justify texto-ex"
                >Ser reconocidos como una de las principales empresas de
                <strong> Recursos Humanos</strong> dentro del país en donde la
                confianza sea nuestra primera recomendación.</v-card-text
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="purple-color">
      <v-row class="my-5">
        <v-col cols="auto" md="6" sm="12">
          <span
            >Esta es la fórmula <br />
            <strong>Addition</strong></span
          >
          <div class="py-5">
            <v-carousel
              cycle
              min-height="410"
              hide-delimiter-background
              :show-arrows="false"
            >
              <v-carousel-item>
                <v-card
                  max-width="650"
                  min-height="350"
                  class="mx-auto text-justify glass2"
                >
                  <v-card-title class="pb-0"
                    >Diversidad e Inclusión
                  </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-subtitle>
                      Implementamos programas de
                      <strong>Diversidad e Inclusión</strong> para mejorar la
                      productividad de las organizaciones en cumplimiento de la
                      normatividad vigente.
                    </v-card-subtitle>
                    <v-card-text>
                      <strong>
                        <ul>
                          <li>
                            Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad
                            Laboral y No Discriminación.
                          </li>
                          <li>
                            Norma Oficial Mexicana NOM-035-STPS-2018 de
                            <strong>Factores de Riesgo Psicosocial</strong>
                          </li>
                          <li>Distintivo Empresa Socialmente Responsable.</li>
                        </ul>
                      </strong>
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card
                  max-width="650"
                  min-height="350"
                  class="mx-auto text-justify glass2"
                >
                  <v-card-title class="pb-0" style="word-break: break-word"
                    >Gestión de Recursos Humanos</v-card-title
                  >
                  <div class="texto-ex mt-0">
                    <v-card-subtitle>
                      Brindamos soluciones de gestión total o parcial en los
                      procesos de Recursos Humanos
                    </v-card-subtitle>
                    <v-card-text>
                      <strong>
                        <ul>
                          <li>Atracción y Selección de Talento Humano</li>
                          <li>Evaluación de Talento Humano y Organizacional</li>
                          <li>Servicios Especializados</li>
                          <li>Entrenamiento, Capacitación y Desarrollo</li>
                        </ul>
                      </strong>
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
              <v-carousel-item>
                <v-card
                  max-width="650"
                  min-height="350"
                  class="mx-auto text-justify glass2"
                >
                  <v-card-title class="pb-0">Coaching laboral </v-card-title>
                  <div class="texto-ex mt-0">
                    <v-card-subtitle>
                      Acompañamos a las personas en la búsqueda de empleo para
                      crecimiento personal, familiar y profesional.
                    </v-card-subtitle>
                    <v-card-text>
                      <strong>
                        <ul>
                          <li>Job Hunter</li>
                          <li>Job First (Orientación vocacional)</li>
                          <li>Outplacement</li>
                        </ul>
                      </strong>
                    </v-card-text>
                  </div>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="solo-desk">
          <v-img
            src="../assets/nosotros/footer-nosotros.png"
            aspect-ratio="1.4"
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
      <v-col cols="4" class="pt-10">
        <span class="numero"><strong>+2000</strong></span>
        <br />
        <span class="texto">empresas satisfechas</span>
      </v-col>
    </v-row>

    <v-container class="casos-ex" fluid>
      <v-row class="solo-mob"
        ><v-col md="6" sm="12" class="contenedor">
          <v-card elevation="0" style="background-color: rgba(0, 0, 0, 0)">
            <v-card-title style="color: #1d588e">
              <span class="texto-tit">Nuestros valores</span>
            </v-card-title>
            <v-card-text class="text-justify texto-ex">
              Para Addition, los valores son la base de toda organización
              contribuyendo con el crecimiento y desarrollo de sus
              colaboradores.
            </v-card-text>
          </v-card>
        </v-col></v-row
      >
      <v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor texto">
          <v-row>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/equidad.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Equidad</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                  min-width="137"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/compromiso.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Compromiso</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                  min-width="137"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/trabajo.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Trabajo en equipo</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/orientacion.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Orientación al cliente</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/congruencia.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Congruencia</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/flexibilidad.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Flexibilidad</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/trato.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Trato personal</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="glass2"
                  :style="{ color: hover ? '#69c6fa' : '#fff' }"
                  min-height="170"
                >
                  <v-img
                    contain
                    max-height="100"
                    src="../assets/nosotros/valores/profesionalismo.png"
                  ></v-img>

                  <v-card-text
                    class="pt-0 text-val text-no-wrap"
                    :style="{ color: hover ? '#69c6fa' : '' }"
                    >Profesionalismo</v-card-text
                  >
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col> </v-col>
          </v-row>
        </v-col>

        <v-col md="6" sm="12" class="contenedor solo-desk">
          <v-card elevation="0">
            <v-card-title style="color: #69c6fa">
              <span class="text-h4 texto-tit">Nuestros valores</span>
            </v-card-title>
            <v-card-text class="text-justify texto-ex">
              Para Addition, los valores son la base de toda organización
              contribuyendo con el crecimiento y desarrollo de sus
              colaboradores.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax src="../assets/nosotros/footer-nosotros.png"></v-parallax>
  </v-container>
</template>

<style lang="scss">
.noso-pag {
  padding: 0;
  font-family: Commissioner;

  .contenedor {
    padding: 60px !important;
    align-self: center;
  }

  .glass {
    background-color: rgba($color: #fff, $alpha: 0.6);
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
    background-color: rgba($color: #fff, $alpha: 0.9);
    border-radius: 1.5rem;
    border-width: 1px;
    padding: 5%;
  }
  .casos-ex {
    background-color: #69c6fa;
    background: linear-gradient(
      129deg,
      rgba(105, 198, 250, 1) 10%,
      rgba(255, 255, 255, 1) 47%
    );
  }
  .texto-ex {
    font-size: medium;
    color: #000 !important;
  }
  .purple-color {
    background-color: #9825a6;
    font-size: 30px;
    color: #fff;
    h2 {
      font-size: xx-large;
    }
  }
  .text-val {
    font-size: small;
  }
  .solo-mob {
    display: none;
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
    }
    .solo-desk {
      display: none;
    }
    .solo-mob {
      display: inline;
    }
  }
}
.landing {
  .text-big {
    color: #000 !important;
    font-size: xx-large;
  }
  .text-med {
    color: #000 !important;
    font-size: medium;
  }
}
</style>
