<template>
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
      emailjs.sendForm('service_e1qd3r9', 'template_t3rdqq9', this.$refs.form, 'cqG37n5OJJU7ta-J5')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
};
</script>
