import Vue from "vue";

Vue.filter("abbreviation", (followers) => {
  let followersAbb = 0;
  if (followers >= 1000) {
    let num = followers / 1000;
    followersAbb = num
      .toFixed(1)
      .replace(/\.0+$/g, "")
      .toString()
      .concat("K");
  } else {
    followersAbb = followers;
  }
  return followersAbb;
});

Vue.filter("separationBythousands", (followers) => {
  followers = String(followers).replace(/\D/g, "");
  return followers === "" ? followers : Number(followers).toLocaleString();
});

Vue.filter("removeMinusSymbol", (num) => {
  if (num < 0) {
    return parseInt(num.toString().substring(1));
  }
  return num;
});
