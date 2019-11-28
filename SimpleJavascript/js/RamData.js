x=16;
txtDeger = document.getElementById('txtDeger');
txtDeger.value=x;
function degistir(){
  x=parseInt(txtDeger.value);
}
function buyut(){
  x=x+1;
  txtDeger.value=x;
}
function kucult(){
  x=x-1;
  txtDeger.value=x;
}
