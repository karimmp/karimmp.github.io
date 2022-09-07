<template>
  <v-container fluid class="pa-0">
    <p class="text-title texto-rosa">Contáctanos</p>
    <p class="mt-n8">
      Estamos a su disposición para resolver cualquier tipo de duda
    </p>
    <v-form v-model="valid">
      <v-container>
        <v-row class="px-16">
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
  }),
};
</script>