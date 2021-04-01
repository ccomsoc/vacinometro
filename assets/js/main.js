const url =
  "https://spreadsheets.google.com/feeds/cells/1pHdaU7ECJyAuDnDUtWmEbvV3dBi5ZqHiXMVadzhaMAE/od6/public/basic?alt=json";

var request = new XMLHttpRequest();

request.open("GET", url, true);
request.onload = function () {
  // Begin accessing JSON data here
  var { feed } = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    const efetivo = feed.entry[5].content.$t;
    const vacinados = feed.entry[6].content.$t;
    const naoVacinado = feed.entry[7].content.$t;

    const date = new Date(feed.updated.$t);
    let dataFormatada =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    $(".efetivo").html(efetivo);
    $(".vacinados").html(vacinados);
    $(".nao-vacinados").html(naoVacinado);
    $(".date").html(dataFormatada);
  } else {
    console.log("error");
  }
};

request.send();
