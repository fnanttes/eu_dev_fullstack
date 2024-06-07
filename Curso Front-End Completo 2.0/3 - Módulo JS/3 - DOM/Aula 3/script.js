// A variável "elementos" recebe um NodeList de elementos HTML que correspondem à classe "box".
var elementos = document.getElementsByClassName("box");

// O loop "for" itera sobre cada elemento no NodeList "elementos".
for (var i = 0; i < elementos.length; i++) {
  // A variável "el" recebe o elemento atual no loop.
  var el = elementos[i];

  // As propriedades de estilo CSS do elemento são alteradas para definir seu estilo.
  el.style.width = "100px";
  el.style.height = "100px";
  el.style.backgroundColor = "green";
  el.style.marginLeft = "200px";
  el.style.marginTop = "10px";
  el.style.border = "1px solid black";
  el.style.padding = "10px";
  el.style.borderRadius = "10px";
  el.style.textAlign = "center";
  el.style.color = "white";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bold";
  el.style.lineHeight = "100px";
  el.style.cursor = "pointer";
  el.style.boxShadow = "0px 0px 10px black";
  el.style.textShadow = "0px 0px 10px black";
  el.style.transition = "all 0.5s";
  el.style.opacity = "0.5";
  el.style.display = "inline-block";
  el.style.position = "relative";
  el.style.overflow = "hidden";
  el.style.zIndex = "1";
  el.style.boxSizing = "border-box";
  el.style.userSelect = "none";
  el.style.webkitUserSelect = "none";
  el.style.mozUserSelect = "none";
  el.style.msUserSelect = "none";
  el.style.oUserSelect = "none";
  el.style.webkitTransition = "all 0.5s";
  el.style.mozTransition = "all 0.5s";
  el.style.msTransition = "all 0.5s";
  el.style.oTransition = "all 0.5s";
  el.style.transition = "all 0.5s";
  el.style.webkitTransform = "scale(1)";
  el.style.mozTransform = "scale(1)";
  el.style.msTransform = "scale(1)";
  el.style.oTransform = "scale(1)";
  el.style.transform = "scale(1)";
  el.style.webkitTransformOrigin = "50% 50%";
}
