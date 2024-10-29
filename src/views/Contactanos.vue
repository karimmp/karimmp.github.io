<template>
  <div>
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-container grid-list-sm fluid>
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
        </v-container>

        <p class="texto-rosa">contacto@additionrh.com</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss">
.texto-rosa {
  color: #ea5076;
}
.text-title {
  padding: 2rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

</style>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contactenos",

  data() {
    return {
      valid: true,
      from_name: "",
      from_nameRules: [
        v => !!v || "Este campo es obligatorio",
        v => (v && v.length > 3) || "El nombre debe ser mayor a tres caracteres",
      ],
      from_email: "",
      from_emailRules: [
        v => !!v || "Este campo es obligatorio",
        v => /.+@.+/.test(v) || "E-mail debe ser válido",
      ],
      message: "",
      messageRules: [v => !!v || "Este campo es obligatorio"],
      alert: false,
      alertType: 'success',
      alertMessage: '',
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
          const response = await emailjs.send("service_e1qd3r9", "template_t3rdqq9", {
            from_name: this.from_name,
            from_email: this.from_email,
            message: this.message,
          });
          
          if (response.status === 200) {
            this.alertType = 'success';
            this.alertMessage = 'El correo se ha enviado con éxito';
            this.$refs.form.reset();
          } else {
            throw new Error('Respuesta no exitosa');
          }
        } catch (error) {
          console.error('Error al enviar el correo:', error);
          this.alertType = 'error';
          this.alertMessage = 'Ocurrió un problema al enviar el correo';
        } finally {
          this.loading = false;
          this.alert = true;
        }
      }
    },
  },
};
</script>



<!-- <script>
import emailjs from 'emailjs-com';
export default {
  name: "Contactenos",

  data() {
    return {
      valid: true,
      from_name: "",
      from_nameRules: [
        v => !!v || "Este campo es obligatorio",
        v => (v && v.length > 3) || "El nombre debe ser mayor a tres caracteres",
      ],
      from_email: "",
      from_emailRules: [
        v => !!v || "Este campo es obligatorio",
        v => /.+@.+/.test(v) || "E-mail debe ser válido",
      ],
      message: "",
      messageRules: [v => !!v || "Este campo es obligatorio"],
      alert: false,
      alertType: 'success',
      alertMessage: '',
      loading: false,
    };
  },

  created() {
    emailjs.init("cqG37n5OJJU7ta-J5");
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          const response = await emailjs.send("service_e1qd3r9", "template_t3rdqq9", {
            from_name: this.from_name,
            from_email: this.from_email,
            message: this.message,
          });
          
          if (response.status === 200) {
            this.alertType = 'success';
            this.alertMessage = 'El correo se ha enviado con éxito';
            this.$refs.form.reset();
          } else {
            throw new Error('Respuesta no exitosa');
          }
        } catch (error) {
          console.error('Error al enviar el correo:', error);
          this.alertType = 'error';
          this.alertMessage = 'Ocurrió un problema al enviar el correo';
        } finally {
          this.loading = false;
          this.alert = true;
        }
      }
    },
  },
};
</script>
 -->