var rect = {
  primeter: (l, b) => console.log("perimeter of a rectange is", 2 * (l + b)),
  area: (l, b) => console.log(`Area of a rectange ${l * b}`),
};

function rectangle(l, b) {
  rect.primeter(l, b);
  rect.area(l, b);
}
rectangle(10, 12);
