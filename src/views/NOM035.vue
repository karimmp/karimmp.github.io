<template>
  <v-container fluid class="coach-pag">
    <div class="fondo-contenedor">
    <v-row class="contenedor">
        <v-col cols="auto" md="6" sm="12" class="glass">
          <v-card class="transparent" elevation="0">
            <v-card-title
              class="text-title text-left"
              style="word-break: break-word"
            > Norma Oficial Mexicana NOM-035-STPS-2018 
            </v-card-title>
            <v-card-subtitle class="text-sub-title texto-rosa text-left py-2" >Factores de riesgo
              psicosocial en el trabajo. Identificación, análisis y prevención.</v-card-subtitle>
            <v-card-text class="pa-8  text-left" style="font-size: 18px; font-weight: 500;">
                Normativa obligatoria, <strong>la NOM 035</strong>  rige en todo el territorio
                nacional y aplica en todos los centros de trabajo.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="glass px-5">
          <v-container fluid class="pa-0">
            <p class="text-title texto-rosa">
              Estamos a su disposición para resolver cualquier tipo de duda.
            </p>
            <p class="">
              Completa nuestro formulario y nos pondremos en contacto contigo lo
              más pronto posible.
            </p>

            <v-form v-model="valid">
              <v-container>
                <v-row class="">
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      v-model="firstname"
                      :rules="nameRules"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-textarea
                      outlined
                      label="Mensaje"
                      v-model="lastname"
                      :counter="150"
                      :rules="msgRules"
                      maxlength="150"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <div class="pa-5">
              <v-btn color="#ea5076" style="text-transform: none" dark
                >Enviar</v-btn
              >
            </div>

            <p class="texto-rosa">contacto@additionrh.com</p>
          </v-container>
        </v-col>
      </v-row>
    </div>

    <v-row no-gutters class="contadores">
      <v-col cols="4" class="pt-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+20</strong></span>
        <br />
        <span class="texto">años de experiencia</span>
      </v-col>
      <v-col cols="4" class="px-5 py-10" style="border-right: 2px #fff solid">
        <span class="numero"><strong>+40,000</strong></span>
        <br />
        <span class="texto">personas por año impactadas</span>
      </v-col>
      <v-col cols="4" class="pt-10">
        <span class="numero"><strong>+2,000</strong></span>
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
    gap: 20px;
  }

  .glass {
    background-color: rgba($color: #fff, $alpha: 0.7);
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
    border-width: 1px;
    min-height: 450px;
    padding: 1%;
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

  .fondo-contenedor {
    background-image: url("~@/assets/home/servicios-especializados.jpg"); /* Ruta a tu imagen */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    .text-title{
      padding: 2rem;
    }
  }
}
</style>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    nameRules: [(v) => !!v || "El nombre es requerido"],
    lastname: "",
    msgRules: [
      (v) => !!v || "El campo mensaje es requerido",
      (v) => v.length <= 150 || "El mensaje debe ser máximo 150 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "Introduce un e-mail válido",
    ],
    listItems: [
      "Obtén puntos adicionales en licitaciones públicas para la adquisición de bienes, arrendamientos o servicios.",
      "Impulsa la imagen y reputación empresarial.",
      "Fortalecer la permanencia, lealtad y compromiso del personal hacia el centro de trabajo.",
      "Aumento de la productividad y rendimiento.",
      "Obtener mayor impacto en la cadena de valor del centro de trabajo.",
    ],
  }),
};
</script>
