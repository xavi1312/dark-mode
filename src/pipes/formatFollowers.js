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

Vue.filter("moreLegible", (followers) => {
  followers = String(followers).replace(/\D/g, "");
  return followers === "" ? followers : Number(followers).toLocaleString();
});
