<script>
export default {
  data() {
    return {
      current: "",
      operator: null,
      förreNummer: null,
      operatorKlickade: false,
    };
  },
  methods: {
    radera() {
      this.current = "";
    },
    tecken() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    procent() {
      this.current = `${Number(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorKlickade) {
        this.current = "";
        this.operatorKlickade = false;
      }
      this.current = `${this.current}${number}`;
    },
    punkt() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    foregaende() {
      this.förreNummer = this.current;
      this.operatorKlickade = true;
    },
    dividera() {
      this.operator = (a, b) => a / b;
      this.foregaende();
    },
    multiplicera() {
      this.operator = (a, b) => a * b;
      this.foregaende();
    },
    substrahera() {
      this.operator = (a, b) => a - b;
      this.foregaende();
    },
    addera() {
      this.operator = (a, b) => a + b;
      this.foregaende();
    },
    lika() {
      this.current = `${this.operator(
        Number(this.förreNummer),
        Number(this.current)
      )}`;
      this.förreNummer = null;
    },
  },
};
</script>

<template>
  <div class="calculator">
    <div class="display">{{ current || "0" }}</div>
    <div @click="radera" class="calculatorButton">C</div>
    <div @click="tecken" class="calculatorButton">+/-</div>
    <div @click="procent" class="calculatorButton">%</div>
    <div @click="dividera" class="calculatorButton operator">÷</div>
    <div @click="append('7')" class="calculatorButton">7</div>
    <div @click="append('8')" class="calculatorButton">8</div>
    <div @click="append('9')" class="calculatorButton">9</div>
    <div @click="multiplicera" class="calculatorButton operator">X</div>
    <div @click="append('4')" class="calculatorButton">4</div>
    <div @click="append('5')" class="calculatorButton">5</div>
    <div @click="append('6')" class="calculatorButton">6</div>
    <div @click="substrahera" class="calculatorButton operator">-</div>
    <div @click="append('1')" class="calculatorButton">1</div>
    <div @click="append('2')" class="calculatorButton">2</div>
    <div @click="append('3')" class="calculatorButton">3</div>
    <div @click="addera" class="calculatorButton operator">+</div>
    <div @click="append('0')" class="calculatorButton zero">0</div>
    <div @click="punkt" class="calculatorButton">.</div>
    <div @click="lika" class="calculatorButton operator">=</div>
  </div>
</template>
