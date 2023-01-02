$(document).ready(function () {
  console.log("amjilttai");
  $("#menu-btn").click(function () {
    $(this).toggleClass("fa fa-times");
    $(".mid-menu").toggleClass("nav-toggle");
  });
});
/** buteegdehuun nemeh func */
var click = 0;
function plus() {
  click++;
  console.log("eheheh");
  document.getElementById("count").innerHTML = click;
  return click;
}
function minus() {
  if (click == 0) {
    alert("aldaa!!");
    document.getElementById("count").innerHTML = 0;
  } else {
    click--;
    document.getElementById("count").innerHTML = click;
  }
}
/** ongo ogno */
function listChange() {
  document.getElementById("lists").style.cssText =
    "border-bottom: 2px solid #fff";
}
/***   shop bot sagsalah too */
var count = 0;
function shopping(id) {
  console.log(id);
  count++;
  document.getElementById("shop-count").innerHTML = count;
}
