// XMLHttpRequest
function loadjson(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState ===4 && xhr.status===200) {
          callback(xhr.responseText);
		}
	}
	xhr.send();	
}
// passing data and getting response
loadjson("data.json",function(text){
   var d = JSON.parse(text);
   console.log(d);
     basic(d.details);
     trainer_details(d.trainers)
})
var main = document.querySelector(".apssdc-details");
function basic(a){
  var im = document.createElement("img");
  im.src=a.image;
  im.alt="XMLHttpRequest-image";
  main.appendChild(im);
  var name = document.createElement("h1");
  name.textContent=a.name;
  name.classList.add("name");
  name.setAttribute("id","name");
  main.appendChild(name);
  var n = document.createElement("p");
  n.textContent=a.age;
  n.classList.add("age");
  main.appendChild(n);
  var h1 = document.createElement("h1");
  h1.textContent="APSSDC-COURSES";
  h1.appendChild(document.createElement("hr"));
  main.appendChild(h1);
  var ul=document.createElement("ol");
  for (var i = 0; i < a.courses.length; i++) {
  	var li=document.createElement("li");
  	li.textContent=a.courses[i];
  	ul.appendChild(li);
  }
main.appendChild(ul);
}
function trainer_details(t){
var h1 = document.createElement("h1");
  h1.textContent="Trainers-Details";
  h1.appendChild(document.createElement("hr"));
  main.appendChild(h1);
  var table = document.createElement("table");
  var row = "";
  for (var i = 0; i <t.length; i++) {
  row +="<tr><td>"+t[i].name+"</td><td>"+t[i].phone+"</td><td>"+t[i].email+"</td><td>"+t[i].salary+"</td></tr>";	
  }
  table.innerHTML=row;
  main.appendChild(table);
}