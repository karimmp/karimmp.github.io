<template>
  <v-container fluid class="coach-pag">
    <v-img gradient="to top, rgba(0,0,0,.60), rgba(0,0,0,0)" alt="fondo" src="../assets/servicios/nom037.webp"
      ><v-row class="contenedor">
        <v-col cols="auto" md="6" sm="12" class="mx-5">
          <v-card class="glass" elevation="1">
            <v-card-title
              class="pt-8 texto-titulo"
              style="word-break: break-word"
            >
              <h2>
                NORMA Oficial Mexicana NOM-037-STPS-2023,
                Teletrabajo-Condiciones de seguridad y salud en el trabajo.
              </h2>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text class="pt-8 texto-titulo">
                <v-list class="text-left transparent pa-0">
                    <v-list-item 
                      v-for="(item, index) in listItems"
                      :key="index"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-circle-small</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content class="text-lg-h5">{{ item }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
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
    </v-img>

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
      "Regula las condiciones de seguridad y salud en la modalidad teletrabajo (Home office).",
      "Tiene por objetivo garantizar la seguridad y salud de los trabajadores.",
      "Obligatoria para todos los patrones, centros de trabajo  y lugares de trabajo que tengan  personas teletrabajadoras que su jornada laboral abarque más del 40% en modalidad teletrabajo.",
    ],
  }),
};
</script>
