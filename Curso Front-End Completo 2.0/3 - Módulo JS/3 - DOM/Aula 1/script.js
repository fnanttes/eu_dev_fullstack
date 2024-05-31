var p = document.getElementsByTagName("p");

console.log(p.length);

p[0].innerHTML = "Manipulado via JS!";

console.log(p[0].innerHTML);

console.log(p[1].innerHTML);

console.log(p[2].innerHTML);

console.log(p[3].innerHTML);

console.log(p[4].innerHTML);

console.log(p[5].innerHTML);

for (var i = 0; i < p.length; i++) {
  p[i].innerHTML = "Manipulado via JS no For!";
}

for (var i = 0; i < 10; i++) {
  p[0].innerHTML = p[i].innerHTML;
}
