import Vue from "vue";

// Ex: transform 1000 to 1K
Vue.filter("abbreviation", number => {
  if (number >= 1000) {
    let num = number / 1000;
    return num
      .toFixed(1)
      .replace(/\.0+$/g, "")
      .toString()
      .concat("K");
  }
  return number;
});

// Ex: transform 10000 to 10.000
Vue.filter("separationBythousands", number => {
  number = String(number).replace(/\D/g, "");
  return number === "" ? number : Number(number).toLocaleString();
});

Vue.filter("removeMinusSymbol", num => {
  if (num < 0) {
    return parseInt(num.toString().substring(1));
  }
  return num;
});
