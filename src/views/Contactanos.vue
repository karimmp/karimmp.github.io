<!-- <template>
  <v-container fluid class="pa-0">
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <form>
      <v-container>
        <v-row class="px-16">
          <v-col cols="12" md="6">
            <v-text-field
              outlined
              v-model="firstname"
              :rules="nameRules"
              label="nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              outlined
              v-model="email"
              :rules="emailRules"
              label="email"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-textarea
              outlined
              label="mensaje"
              v-model="lastname"
              :counter="150"
              :rules="msgRules"
              maxlength="150"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <input type="submit" value="Send">
    </form>
    <div class="pa-5">
      <v-btn color="#ea5076" style="text-transform: none" dark>Enviar</v-btn>
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
</style>
 -->

<template>
  <v-container fluid class="pa-0">
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <form id="form">
      <div class="field">
        <label for="nombre">nombre</label>
        <input type="text" name="nombre" id="nombre" />
      </div>
      <div class="field">
        <label for="message">mensaje</label>
        <input type="text" name="message" id="message" />
      </div>
      <div class="field">
        <label for="email">email</label>
        <input type="text" name="email" id="email" />
      </div>

      <input type="submit" id="button" value="Send Email" />
    </form>
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
</style>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>

<script type="text/javascript">
emailjs.init("cqG37n5OJJU7ta-J5");
</script>

<script>
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_t3rdqq9";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
</script>

<!-- <script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_e1qd3r9",
          "template_t3rdqq9",
          e.target,
          "cqG37n5OJJU7ta-J5",
          {
            name: this.name,
            email: this.email,
            message: this.meessage,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script> -->

<!-- <script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    name: "ContactUs",
    data() {
      return {
        nombre: "",
        email: "",
        mensaje: "",
      };
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm(
            "service_e1qd3r9",
            "template_t3rdqq9",
            e.target,
            "cqG37n5OJJU7ta-J5",
            {
              nombre: this.nombre,
              email: this.email,
              mensaje: this.mensaje,
            }
          );
        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.name = "";
        this.email = "";
        this.message = "";
      }, -->
<!--    }/* ,

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
    ], */
  }),
};
</script> -->
