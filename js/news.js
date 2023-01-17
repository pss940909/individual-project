// element argument can be a selector string
//   for an individual element
let elem = document.querySelector(".grid");
let msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  percentPosition: true,
});
