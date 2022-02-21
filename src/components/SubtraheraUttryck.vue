<script>
  import Calculator from './Calculator.vue'

  export default {
    components: {
      Calculator
    },
    props: ['initialValue'],
    data() {
      return {
        expressions: null,
        svar: 0,
        message: '',
        error: '',
        // eslint-disable-next-line vue/no-dupe-keys
        initialValue: 'Skriv här ditt svar'
      }
    },
    methods: {
      hamtaUttryck() {
        fetch('https://x-math.herokuapp.com/api/sub/')
          .then((response) => response.json())
          .then((expressions) => {
            this.expressions = [expressions]
          })
      },
      kontrolleraSvar() {
        this.message = 'Ditt svar är korrekt'
        this.error = 'Ditt svar är inte korrekt'
      }
    }
  }
</script>

<template>
  <p :key="operation.id" v-for="operation in expressions">
    {{ operation.expression }}
  </p>
  <input type="button" value="hämta en ny uttryck" @click="hamtaUttryck" />
  <p>{{ initialValue }}</p>
  <p>
    <input v-model="svar" type="text" placeholder="skriv här ditt svar" />
  </p>
  <input
    type="button"
    value="kontrollera ditt svar här"
    @click="kontrolleraSvar"
  />
  <div :key="operation.id" v-for="operation in expressions">
    <span v-if="this.svar === ''" />
    <span
      id="message"
      v-else-if="Number(this.svar) === Number(operation.answer)"
      >{{ message }}</span
    >
    <span id="error" v-else>{{ error }}</span>
  </div>
  <Calculator />
</template>

<style lang="scss">
  $message-color: green;
  $error-color: red;

  #message {
    color: $message-color;
  }
  #error {
    color: $error-color;
  }
</style>
