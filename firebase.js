$(function firebasedata() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA3SK_gP4HaT3A8WTo4h_RSIXEx6bBF_6M",
    authDomain: "projectmobile-1-2563.firebaseapp.com",
    databaseURL: "https://projectmobile-1-2563.firebaseio.com",
    projectId: "projectmobile-1-2563",
    storageBucket: "projectmobile-1-2563.appspot.com",
    messagingSenderId: "313189445418",
    appId: "1:313189445418:web:e2b0c475b4607f3b3b3853",
    measurementId: "G-9XHXW160PG",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
  db.collection("Movie")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var card = `
      <ons-carousel swipeable auto-scroll overscrollable id="carousel">
      <ons-card style="backcolor-color:#333333" 
      onclick="detail('${doc.id}')" >
        <ons-carousel-item id="detail1">
          <div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">
          <img src="${doc.data().poster}" width="100%">
          </ons-card>
          </div>
        </ons-carousel-item>
      </ons-card>
      </ons-carousel>`;
        $("#ducument").append(card);
      });
    });

  db.collection("wallpaperhome")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var card = ` <img src="${doc.data().wall}" width="100%"  > `;
        $("#ducument2").append(card);
      });
    });
});

function detail(data) {
  $("#myNavigator").load("avengers.html");
  console.log("testtttttttt ", data);

  var db = firebase.firestore();

  db.collection("Movie")
    .doc(data)
    .get()
    .then(function (doc) {
      console.log("Document data:", doc.data());
      var card2 = `
      <video width="100%" height="" controls autoplay>
        <source src="${doc.data().vtailer}" type="video/mp4">
      </video>
      <ons-card>
      <p style="text-align: center; font-size:15px;">${doc.data().title}</p>
      <p style="  font-size:15px;">${doc.data().detail}</p>
      </ons-card>
     `;
      $("#detail1").append(card2);
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById("appSplitter").right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById("appTabbar").setActiveTab(index);
  document.getElementById("sidemenu").close();
};

window.fn.loadLink = function (url) {
  window.open(url, "_blank");
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document
      .getElementById("appNavigator")
      .pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document
      .getElementById("appNavigator")
      .pushPage(page.id, { data: { title: page.title } });
  }
};
