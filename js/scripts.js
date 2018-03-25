$(document).ready(event){
  event.preventDefault
  //var favorites = (function){
    //$(favorites).enter(enter)
    var inputs = document.getElementById('inputType').getElementsByTagName('input');
var input = [];
for (var i = 0, l = inputs.length; i < l; ++i) {
    if (inputs[i].value.length) {
        input.push(inputs[i].value);
    }
}
  }
}
