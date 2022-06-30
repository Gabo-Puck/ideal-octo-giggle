let todos = [];

function getDataAsignaturaAlumno() {
    var reg = document.getElementById("reg").value;
    var pass = document.getElementById("pass").value;
    if (reg === "19100274") {
        alert("Página no apta para furros");
    }
    if (reg === "19100256") {
        alert("te amo <3");
    }
    var uri = "https://apiceti.herokuapp.com/api/webScrapping/" + reg + "/" + pass;
    console.log(uri);
  fetch(uri)
    .then((response) => response.json())
    .then((response) => displayData(response))
    .catch((error) => alert("Algo ha salido mal \n" + error));
}

function displayData(data) {
  var table = document.createElement("table");
  var tabla = document.createElement("table");
  var tablaDiv = document.getElementById("tablaCalificaciones");
  tablaDiv.appendChild(tabla);
    if (data != null) {
        var row = document.createElement("tr");
        tabla.appendChild(row);
    for (const key in data[0]) {
      // var value = data[key];

      var variable = data[0];
      if (Array.isArray(variable[key])) {
        console.log("it is variable");
        var count = 0;
        variable[key].forEach((element) => {
          count++;
          var th = document.createElement("th");
          var text = document.createTextNode(key + " " + count);
          th.appendChild(text);
          row.appendChild(th);
        });
      } else {
        var th = document.createElement("th");
        var text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
      console.log(key);
      // console.log(value);
      console.log("pilin");
      }
      data.forEach(element => {
        var row2 = document.createElement("tr");
        
        for (const key in element) {
            // var value = data[key];
      
            var variable = element;
            if (Array.isArray(variable[key])) {
              console.log("it is variable");
              var count = 0;
              variable[key].forEach((element2) => {
                count++;
                var th2 = document.createElement("td");
                var text = document.createTextNode(element2);
                th2.appendChild(text);
                row2.appendChild(th2);
              });
            } else {
              var th2 = document.createElement("td");
              var text = document.createTextNode(element[key]);
              th2.appendChild(text);
              row2.appendChild(th2);
            }
            tabla.appendChild(row2);
            } 
      });
  }
}
