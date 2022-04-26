const baseUrl =
  "http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN";

//TODO: PROMESAS
function getData(url) {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function () {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

var data;

getData(baseUrl)
  .then((respuesta) => {
    data = JSON.parse(respuesta);
  })
  .then(() => {
    var datos =
      '<div class="divContent">' +
      "<h2> Title: " +
      data.data.title +
      "</h2>" +
      '<img class="imagen" src="' +
      data.data.image_url +
      '" />' +
      "</div>";
    document.getElementById("data").innerHTML = datos;
  });

//TODO: Fetch
fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    var datos =
      '<div class="divContent">' +
      "<h2> Title: " +
      data.data.title +
      "</h2>" +
      '<img class="imagen" src="' +
      data.data.image_url +
      '" />' +
      "</div>";

    document.getElementById("data2").innerHTML = datos;
  });

//TODO: Async await

async function fetchAPI() {
  let response = await fetch(baseUrl);
  let data = await response.json();
  return data;
}

fetchAPI(baseUrl)
  .then((data) => {
    var datos =
      '<div class="divContent">' +
      "<h2> Title: " +
      data.data.title +
      "</h2>" +
      '<img class="imagen" src="' +
      data.data.image_url +
      '" />' +
      "</div>";

    document.getElementById("data3").innerHTML = datos;
  })
  .catch((error) => {
    console.log(error);
  });
