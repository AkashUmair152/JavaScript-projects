let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (dets) {
  let rectLocation = rect.getBoundingClientRect();

  let insderect = dets.clientX - rectLocation.left;

  if (insderect < rectLocation.width / 2) {
    console.log("left");
  } else {
    console.log("right");
  }
});
