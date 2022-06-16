firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("flag", "success");
  }
});

if (localStorage.getItem("flag") == "success") {
  $("#btn-login").css("display", "none");
  $("#btn-register").css("display", "none");
  $("#btn-logout").css("display", "inline");
}

$("#login").click(function () {
  var email = $("#email").val();
  var password = $("#pw").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("login success");
      window.location.reload();
    });
});

$("#btn-logout").click(function () {
  firebase.auth().signOut();
  localStorage.removeItem("userName");
  localStorage.setItem("flag", "false");
  $("#btn-logout").css("display", "none");
  window.location.reload();
});
