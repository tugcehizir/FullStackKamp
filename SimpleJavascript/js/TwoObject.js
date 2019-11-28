var person = {name:"John", age:5};

function ekle(){
person.name = document.getElementById('name').value;
person.age=document.getElementById('age').value;
}
function goster() {
  document.getElementById('nameR').value = person.name;

  document.getElementById('ageR').value = person.age;
}
