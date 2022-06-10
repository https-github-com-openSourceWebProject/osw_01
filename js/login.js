firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem("userName", JSON.stringify(user));
    localStorage.setItem("flag", "success");
  }
});

if (localStorage.getItem("flag") == "success") {
  $("#btn-login").css("display", "none");
  $("#btn-logout").css("display", "inline");
  //var user = localStorage.getItem("userName");
  //$("#userName").html(JSON.parse(user).displayName);
}

$("#login").click(function () {
  var email = $("#email").val();
  var password = $("#pw").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("success");
      window.location.href = "./main.html";
    });
});

$("#btn-logout").click(function () {
  firebase.auth().signOut();
  localStorage.removeItem("userName");
  window.location.href = "./main.html";
  localStorage.setItem("flag", "false");
});
