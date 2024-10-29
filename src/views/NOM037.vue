<template>
  <v-container fluid class="coach-pag">
    <div class="fondo-contenedor2">
      <v-row class="contenedor">
        <v-col cols="auto" md="6" sm="12" class="glass">
          <v-card class="transparent" elevation="0">
            <v-card-title
              class="text-title text-left"
              style="word-break: break-word"
            >
              NORMA Oficial Mexicana NOM-037-STPS-2023
            </v-card-title>
            <v-card-subtitle class="text-sub-title texto-rosa text-left py-2"
              >Condiciones de seguridad y salud en el trabajo.
            </v-card-subtitle>
            <v-card-text class="pt-8 texto-titulo">
              <v-list class="text-left transparent">
                <v-list-item v-for="(item, index) in listItems" :key="index">
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-circle-medium</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content
                    class=""
                    style="font-size: 18px; font-weight: 400"
                    >{{ item }}</v-list-item-content
                  >
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

            <v-form ref="form" v-model="valid" @submit.prevent="submit">
              <v-row md="6">
                <v-col>
                  <v-text-field
                    v-model="from_name"
                    :rules="from_nameRules"
                    outlined
                    color="#ea5076"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="from_email"
                    :rules="from_emailRules"
                    outlined
                    color="#ea5076"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-textarea
                v-model="message"
                :rules="messageRules"
                outlined
                color="#ea5076"
                label="Mensaje"
                value=""
                required
              ></v-textarea>
              <v-alert
                :value="alert"
                v-model="alert"
                type="success"
                dismissible
                color="#ea5076"
                transition="scale-transition"
              >
                El correo se ha enviado con éxito
              </v-alert>
              <v-btn
                type="submit"
                class="white--text"
                color="#ea5076"
                :disabled="!valid"
                :loading="loading"
                @click="submit"
                @click.native="loader = 'loading'"
              >
                enviar
              </v-btn>
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
        <span class="numero"><strong>+2000</strong></span>
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
    padding: 1%;
  }
  .custom-img {
    height: auto; /* Ejemplo de altura fija */
    width: 100%; /* Ancho completo del contenedor */
    padding: 0% !important;
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

  .fondo-contenedor2 {
    background-image: url("~@/assets/teletrabajo.png"); /* Ruta a tu imagen */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .glass2 {
    background-color: rgba($color: #fff, $alpha: 0.7);
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
    border-width: 1px;
    padding: 1%;
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
import emailjs from "emailjs-com";

export default {
  name: "Contactenos",

  data() {
    return {
      valid: true,
      from_name: "",
      from_nameRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) =>
          (v && v.length > 3) || "El nombre debe ser mayor a tres caracteres",
      ],
      from_email: "",
      from_emailRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) => /.+@.+/.test(v) || "E-mail debe ser válido",
      ],
      message: "",
      messageRules: [(v) => !!v || "Este campo es obligatorio"],

      listItems: [
        "Obtén puntos adicionales en licitaciones públicas para la adquisición de bienes, arrendamientos o servicios.",
        "Impulsa la imagen y reputación empresarial.",
        "Fortalecer la permanencia, lealtad y compromiso del personal hacia el centro de trabajo.",
        "Aumento de la productividad y rendimiento.",
        "Obtener mayor impacto en la cadena de valor del centro de trabajo.",
      ],
      alert: false,
      alertType: "success",
      alertMessage: "",
      loading: false,
    };
  },

  created() {
    emailjs.init("cqG37n5OJJU7ta-J5");
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate() && !this.loading) {
        this.loading = true;
        try {
          const response = await emailjs.send(
            "service_e1qd3r9",
            "template_t3rdqq9",
            {
              from_name: this.from_name,
              from_email: this.from_email,
              message: this.message,
            }
          );

          if (response.status === 200) {
            this.alertType = "success";
            this.alertMessage = "El correo se ha enviado con éxito";
            this.$refs.form.reset();
          } else {
            throw new Error("Respuesta no exitosa");
          }
        } catch (error) {
          console.error("Error al enviar el correo:", error);
          this.alertType = "error";
          this.alertMessage = "Ocurrió un problema al enviar el correo";
        } finally {
          this.loading = false;
          this.alert = true;
        }
      }
    },
  },
};
</script>