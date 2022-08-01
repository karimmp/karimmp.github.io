<template>
  <v-container fluid class="main-pag">
    <v-img alt="fondo" src="../assets/portada/imagen-portada.png"
      ><v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              <h2>La diversidad e inclusión enriquece a tu organización</h2>
            </v-card-title>

            <v-card-subtitle class="pt-8">
              <h3 class="texto-land">
                ¿Tu organización promueve ambientes de diversidad e inclusión?
              </h3>
            </v-card-subtitle>
            <v-card-text class="pt-8 texto-land">
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
            <div class="pt-5 text-left">
              <v-btn color="#ea5076" rounded class="pa-7" dark
                >Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-img>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="auto" md="6" sm="12" class="formato-video">
          <video width="100%" height="auto" controls autoplay muted>
            <source src="../assets/videoAdd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </v-col>
        <v-col cols="auto" md="6" sm="12" class="pa-5">
          <v-card elevation="0">
            <v-card-title class="pink-color" style="word-break: break-word">
              <p>¡Bienvenido/a <strong>Addition RH!</strong></p>
            </v-card-title>
            <v-card-text class="texto-body">
              Sabemos que las personas que conforman tu empresa son cruciales
              para su crecimiento.
              <br />
              <br />
              En Addition estamos comprometidos a ayudarte con la
              <b>motivación, retención y desarrollo de tu equipo de trabajo</b>
              basado en una <b>cultura de respeto</b> y de
              <b>diversidad e inclusión </b>para el crecimiento de tu empresa.
              <br />
              <br />
              Proporcionamos soluciones funcionales y prácticas con una
              comunicación estrecha y personalizada a nivel organizacional,
              individual y/o grupal para cumplir con los objetivos de tu
              organización.
              <br />
              <br />
              Addition ocupa el lugar 13 a nivel nacional dentro de las 50
              mejores empresas de consultoría en <b> Recursos Humanos</b>, de
              acuerdo con el ranking de la Revista Consultoría y el lugar No.40
              de las mejores empresas de
              <b>consultoría Administrativa y de Gestión.</b>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="soluciones">
      <span class="txt-white">Nuestas Soluciones</span>
      <v-row class="pa-15">
        <v-col cols="auto" md="4" sm="12">
          <v-card elevation="10" color="white" height="100%">
            <v-img src="../assets/home/diversidad-inclusion.jpg"></v-img>
            <v-card-title class="px-5">Diversidad e inclusión</v-card-title>
            <v-card-text class="texto-body px-5">
              Implementamos programas de diversidad e inclusión para mejorar la
              productividad de las organizaciones y cumplimiento de la
              normatividad vigente.
            </v-card-text>
            <v-list
              dense
              style="text-align: justify; font-size: 15px; padding: 2%"
            >
              <v-list-item
                ><strong
                  >Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No
                  Discriminación.</strong
                ></v-list-item
              >
              <v-list-item
                ><strong
                  >Norma Oficial Mexicana NOM-035-STPS-2018 de factores de
                  riesgo psicosocial.</strong
                ></v-list-item
              >
              <v-list-item
                ><strong
                  >Distintivo Empresa Socialmente Responsable.</strong
                ></v-list-item
              >
            </v-list>
            <div class="pa-5 text-left">
              <v-btn
                to="/servicios#diversidad"
                style="text-transform: none"
                color="#ea5076"
                outlined
                class="pa-5"
                dark
                >Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto" md="4" sm="12">
          <v-card elevation="10" color="white" height="100%">
            <v-img src="../assets/home/gestion-recursos.jpg"></v-img>
            <v-card-title class="px-5"
              >Gestión de recursos humanos
            </v-card-title>
            <v-card-text class="texto-body px-5">
              Brindamos soluciones de gestión total o parcial en los procesos de
              Recursos Humanos
            </v-card-text>
            <v-list
              dense
              style="text-align: justify; font-size: 15px; padding: 2%"
            >
              <v-list-item
                ><strong
                  >Atracción y Selección de Talento Humano</strong
                ></v-list-item
              >
              <v-list-item
                ><strong
                  >Evaluación de Talento Humano y Organizacional</strong
                ></v-list-item
              >
              <v-list-item
                ><strong>Servicios Especializados</strong></v-list-item
              >
              <v-list-item
                ><strong
                  >Entrenamiento, Capacitación y Desarrollo</strong
                ></v-list-item
              >
            </v-list>
            <div class="pa-5 text-left">
              <v-btn
                to="/servicios#gestion"
                style="text-transform: none"
                color="#ea5076"
                outlined
                class="pa-5"
                dark
                >Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto" md="4" sm="12">
          <v-card elevation="10" color="white" height="100%">
            <v-img src="../assets/home/servicios-especializados.jpg"></v-img>
            <v-card-title class="px-5">Coaching laboral</v-card-title>
            <v-card-text class="texto-body px-5">
              Acompañamos a las personas en la búsqueda de empleo para
              crecimiento personal, familiar y profesional.
            </v-card-text>
            <v-list style="text-align: justify; font-size: 15px; padding: 2%">
              <v-list-item><strong>Findy JOB</strong></v-list-item>
              <v-list-item
                ><strong
                  >Job first (Orientación vocacional)</strong
                ></v-list-item
              >
              <v-list-item><strong>Outplacement</strong></v-list-item>
            </v-list>
            <div class="pa-5 text-left" style="justify-content: center">
              <v-btn
                to="/servicios#coaching"
                style="text-transform: none"
                color="#ea5076"
                outlined
                class="pa-5"
                dark
                >Conoce más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="pa-5" style="align-self: center">
        <v-col cols="auto" md="6" sm="12">
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
              Con nuestra formula hemos participado en asesoría, formación, y/o
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
              ¡Transforma tu empresa!
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
            src="../assets/home/formula-addition.png"
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
    <v-parallax src="../assets/portada/laboral.jpg">
      <v-row no-gutters>
        <v-col md="6" sm="12" class="contenedor">
          <v-card class="glass2" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              “El éxito de una empresa es simplemente el reflejo de la actitud,
              grado de motivación y compromiso de las personas que la forman”
            </v-card-title>
            <div class="text-right text-md-body-1 mx-5">Camilo Cruz</div>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<style lang="scss">
.main-pag {
  padding: 0;
  font-family: Commissioner;

  .contenedor {
    padding: 60px !important;
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
      font-weight: 300;
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
  }
}
</style>

<script>
</script>
