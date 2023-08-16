const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      enteredValueCalculator: "",
      arrayOfValues: [],
    };
  },
  watch: {
    arrayOfValues() {
      const that = this;
      if (that.arrayOfValues.length === 4) {
        switch (that.arrayOfValues[1]) {
          case "-":
            that.enteredValueCalculator =
              parseFloat(that.arrayOfValues[0]) -
              parseFloat(that.arrayOfValues[2]);
            break;
          case "+":
            that.enteredValueCalculator =
              parseFloat(that.arrayOfValues[0]) +
              parseFloat(that.arrayOfValues[2]);
            break;
          case "x":
            that.enteredValueCalculator =
              parseFloat(that.arrayOfValues[0]) *
              parseFloat(that.arrayOfValues[2]);
            break;
          case "%":
            that.enteredValueCalculator =
              parseFloat(that.arrayOfValues[0]) /
              parseFloat(that.arrayOfValues[2]);
            break;
        }
        that.arrayOfValues = []
      } 
    },
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    insertNumber(x) {
      this.enteredValueCalculator = this.enteredValueCalculator + x.toString();
    },
    fraction() {
      this.enteredValueCalculator = this.enteredValueCalculator + ".";
    },
    operator(y) {
      this.arrayOfValues.push(this.enteredValueCalculator);
      this.arrayOfValues.push(y);
      this.enteredValueCalculator = "";
    },
    clearValue() {
      this.enteredValueCalculator = "";
      this.arrayOfValues = [];
    },
    result() {
      this.arrayOfValues.push(this.enteredValueCalculator);
      this.arrayOfValues.push("=");
      this.arrayOfValues = [...this.arrayOfValues];
    },
  },
});

app.mount("#app");
