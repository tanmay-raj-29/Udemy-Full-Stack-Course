let date = new Date();
let today = date.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

module.exports = today;