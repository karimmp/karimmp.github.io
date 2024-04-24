<template>
  <v-container fluid class="noso-pag">
  
    <v-img
      max-height="200"
      alt="fondo-nosotros"
      src="../assets/alianzas/portada-alianzas.png"
    ></v-img>

    <v-container fluid class="soluciones">
      <section ref="serviciosd">
        <h1 class="txt-white mt-5">Conoce a nuestros aliados comerciales</h1>
        <v-row class="pa-15 contenedor">
          <!-- Aliado EFH -->
          <v-col cols="auto" md="4" sm="12">
            <v-card
              elevation="10"
              color="white"
              class="tarjeta-serv texto-card"
            >
              <v-img
                class="img-logo pt-10"
                contain
                max-width="200"
                src="../assets/alianzas/EFHlogo.png"
              ></v-img>

              <p style="text-align: center" class="titulos">
                <strong> EFH</strong>
              </p>
              <p style="text-align: center" class="mt-n5">
                <strong>Excelencia en Factor Humano</strong>
              </p>
              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Somos distribuidores oficiales de todas sus herramientas.
                  </div>
                  <v-row class="imagenes-logos px-5 pt-5">
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image001.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image002.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image003.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image004.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image005.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image006.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image007.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="auto" md="4" sm="6">
                      <v-img
                        contain
                        max-width="100"
                        class="pa-5"
                        src="../assets/alianzas/image008.jpg"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="px-15 pb-5">
                  <v-btn
                    text
                    color="#9825a6"
                    width="100%"
                    href="https://www.efhcorporativo.com/"
                    target="_blank"
                    style="text-transform: none"
                  >
                    <v-icon>mdi-web</v-icon> https://www.efhcorporativo.com/
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <!-- Aliado Factual Services S.C.  -->
          <v-col cols="auto" md="4" sm="12">
            <v-card
              elevation="10"
              color="white"
              class="tarjeta-serv texto-card"
            >
              <v-img
                class="img-logo pt-10"
                contain
                max-width="200"
                src="../assets/alianzas/FSLogo.png"
              ></v-img>

              <p style="text-align: center" class="titulos">
                <strong> Factual Services S.C. </strong>
              </p>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Alianza para fortalecer el apoyo con las organizaciones
                    interesadas en certificarse en la
                    <strong> Norma Mexicana </strong> NMX-R-025-SCFI-2015
                    <strong> en Igualdad Laboral y No Discriminación</strong> y
                    verificarse en el grado de cumplimiento de la Norma Oficial
                    Mexicana
                    <strong>
                      NOM-035-STPS-2018 de factores de riesgo
                      psicosocial.</strong
                    >
                  </div>
                </v-card-text>
                <v-card-actions class="px-15 pt-10">
                  <v-btn
                    text
                    color="#9825a6"
                    width="100%"
                    href="https://www.factual-services.com.mx/"
                    target="_blank"
                    style="text-transform: none"
                  >
                    <v-icon>mdi-web</v-icon> https://www.factual-services.com.mx/
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <!-- Aliado Proanalytics -->
          <v-col cols="auto" md="4" sm="12">
            <v-card
              elevation="10"
              color="white"
              class="tarjeta-serv texto-card"
            >
              <v-img
                class="img-logo pt-5"
                contain
                min-width="250"
                src="../assets/alianzas/Logo Proanalytics-01.png"
              ></v-img>

              <p style="text-align: center" class="titulos">
                <strong> Proanalytics</strong>
              </p>

              <v-card elevation="0" class="texto-card">
                <v-card-text>
                  <div
                    class="texto-body cuerpo"
                    style="text-align: center !important"
                  >
                    Alianza para fortalecer nuestros programas de capacitación y
                    climas organizacionales.
                  </div>
                </v-card-text>
                <v-card-actions class="px-15 pb-5">
                  <v-btn
                    text
                    color="#9825a6"
                    width="100%"
                    href="https://proanalytics.mx/"
                    target="_blank"
                    style="text-transform: none"
                  >
                    <v-icon>mdi-web</v-icon> https://proanalytics.mx/
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </section>
      
    </v-container>
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
      padding: 0 10% 0 10%;
    }
    p {
      margin-bottom: 1rem;
    }
    .img-logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding: 5rem;
      width: 50%;
    }
    .imagenes-logos {
      justify-content: center;
      align-content: center;
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
  .texto-land {
    font-size: large;
    color: #374751 !important;
    text-align: justify;
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
  .tarjeta-serv {
    height: 100%;
    border-radius: 15px;
  }

  @media only screen and (max-width: 600px) {
    .contenedor {
      padding: 2px !important;
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