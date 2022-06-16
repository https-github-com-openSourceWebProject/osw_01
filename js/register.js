var dbReg = firebase.firestore();

$("#register").click(() => {
  var name = $("#name-new").val();
  var email = $("#email-new").val();
  var password = $("#pw-new").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      var userInfo = {
        name: name,
        email: email,
        password: password,
        displayName: name,
      };
      dbReg.collection("user").add(userInfo);
      firebase.auth().updateProfile;
      alert("회원가입이 완료되었습니다.");
      window.location.reload();
    });
});
