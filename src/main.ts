 
var Star:string=""; 
var Blank:string=""; 
function Pyramid(level) { 
    for (var i = 0; i < level; i++) { 
      for (var j = 0; j < level - i; j++) { 
      Blank=Blank+" "; 
      } 
      for (j = 0; j < 2 * i + 1; j++) { 
      Star=Star+"*"; 
      } 
      console.log(Blank+Star); 
      Blank=""; 
      Star=""; 
      } 
  } 
  function getLine(line) { 
  return line; 
} 

window.onload = () => {
    Pyramid(5);
};