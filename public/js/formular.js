function pressed() {
  console.log("btn1 gedrückt");
}

var btn2 = document.getElementById("btn2");
btn2.addEventListener<"click">("click", function () {
  console.log("btn2 gedrückt");
});
