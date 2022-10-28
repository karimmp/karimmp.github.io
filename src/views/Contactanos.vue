<!-- <template>
  <v-container fluid class="pa-0">
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <div class="container2">
      <form>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Tu email"
        />
        <label>Mensaje</label>
        <textarea
          name="mensaje"
          cols="30"
          rows="5"
          placeholder="Déjanos un mensaje"
        >
        </textarea>

        <input type="submit" value="Enviar" />
      </form>
    </div>

    <p class="texto-rosa">contacto@additionrh.com</p>
  </v-container>
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

* {
  box-sizing: border-box;
}

.container2 {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;

  padding: 20px;
  width: 60%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input:focus {
  outline: none !important;
  border: 1.5px solid #ea5076;
}
textarea:focus {
  outline: none !important;
  border: 1.5px solid #ea5076;
}

input[type="submit"] {
  background-color: #ea5076;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #eb2c5c;
}
</style>

<script>
import emailjs from '@emailjs/browser';
export default {
  methods: {
    
    sendEmail() {
      console.log('Entre aquí');
      emailjs.sendForm('service_e1qd3r9', 'template_t3rdqq9', this.$refs.form, 'cqG37n5OJJU7ta-J5')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
};
</script> -->

<template>
  <div>
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-container grid-list-sm fluid>
          <v-form ref="form" v-model="valid" lazy-validation>
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
let emailjs = require("emailjs-com");

export default {
  name: "contactenos",

  data: () => ({
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
      (v) => /.+@.+/.test(v) || "E-mail es un campo obligatorio",
    ],
    subject: "",
    subjectRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => (v && v.length > 3) || "Asunto es un campo obligatorio",
    ],
    message: "",
    messageRules: [(v) => !!v || "Este campo es obligatorio"],
    alert: false,
    loader: null,
    loading: false,
  }),

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      this.alert = true;
      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },

  created() {
    emailjs.init("cqG37n5OJJU7ta-J5");
  },

  methods: {
    submit() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: "",
      };

      if (this.$refs.form.validate()) {
        emailjs.send("service_e1qd3r9", "template_t3rdqq9", data).then(
          function (Response) {
            if (Response.text === "OK") {
              //alert("El correo se ha enviado con éxito");
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              Response.status,
              Response.text
            );
          },
          function (err) {
            alert("Ocurrio un problema al enviar  el correo");
            console.log("FAILDED. error=", err);
          },
          this.$refs.form.reset()
        );
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
