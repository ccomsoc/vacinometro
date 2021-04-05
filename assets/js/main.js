let porcentagem;

const url =
  "https://spreadsheets.google.com/feeds/cells/1pHdaU7ECJyAuDnDUtWmEbvV3dBi5ZqHiXMVadzhaMAE/od6/public/basic?alt=json";

var request = new XMLHttpRequest();

request.open("GET", url, true);
request.onload = function () {
  // Begin accessing JSON data here
  var { feed } = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    //const efetivo = feed.entry[5].content.$t;
    const vacinados = feed.entry[6].content.$t;
    //const naoVacinado = feed.entry[7].content.$t;
    porcentagem = feed.entry[8].content.$t;
    const date = feed.entry[9].content.$t;

    //$(".efetivo").html(efetivo);
    $(".vacinados").html(vacinados);
    //$(".nao-vacinados").html(naoVacinado);
    $(".date").html(date);
    $(".porcentagem").html(porcentagem);

    animation();
    //console.log(feed);
  } else {
    console.log("error");
  }
};

request.send();

// GSAP
// Timelines
const animation = () => {
  // var tl0 = gsap.timeline({
  //   defaults: { duration: 3.0, ease: Circ.easeOut },
  // });
  var tl1 = gsap.timeline({
    defaults: { duration: 3.0, ease: Circ.easeOut },
  });
  var tl2 = gsap.timeline({
    defaults: { duration: 3.0, ease: Circ.easeOut, delay: 4 },
  });
  var tl3 = gsap.timeline({
    defaults: { duration: 3.0, ease: Circ.easeOut, delay: 4 },
  });
  var tl4 = gsap.timeline({
    defaults: { duration: 3.0, ease: Circ.easeOut, delay: 4 },
  });
  var tl5 = gsap.timeline({
    defaults: { duration: 1.0, ease: Circ.easeOut, delay: 0.3 },
  });

  // Animations

  tl1
    .fromTo(
      ".seringa",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    )
    .to("#liquido", {
      scaleX: 0.7,
      transformOrigin: "right",
      delay: 1,
    }),
    tl2.fromTo(
      "#empurrador-interno",
      {
        x: -50,
        transformOrigin: "right",
      },
      {
        x: 110,
        transformOrigin: "right",
      }
    ),
    tl3.fromTo(
      "#empurrador-externo",
      {
        x: -50,
        transformOrigin: "right",
      },
      {
        x: 110,
        transformOrigin: "right",
      }
    ),
    tl4.fromTo(
      "#cano",
      {
        x: -50,
        transformOrigin: "right",
      },
      {
        x: 110,
        transformOrigin: "right",
      }
    ),
    tl5
      .fromTo(
        ".complete",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      )
      .fromTo(
        ".details",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );
};
