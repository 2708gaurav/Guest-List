var names_of_people_Array=[];
function submit() {
    var name = document.getElementById("name1").value;
    names_of_people_Array.push(name);
    console.log(name);
    console.log(names_of_people_Array);
    var length = names_of_people_Array.length;
    console.log(length);
    document.getElementById("display_names").innerHTML=names_of_people_Array.toString();
}

function show() {
    var i = names_of_people_Array.join("<br>");
    console.log(names_of_people_Array);
    document.getElementById("show_names").style.display="block";
    document.getElementById("p1").innerHTML=i.toString();
}

function sorting() {
names_of_people_Array.sort();
var i = names_of_people_Array.join("<br>");
console.log(names_of_people_Array);
document.getElementById("sorted_names").innerHTML = i.toString();
}

function search() {
    var k = document.getElementById("search_names").value;
    var found = 0;
    var j;
    for(j=0; j<names_of_people_Array.length; j++) {
if(k=names_of_people_Array[j]){
    found = found+1;
}
    }
    document.getElementById("search_names").innerHTML = "namefound "+found+ "time/s"
}