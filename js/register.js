var dbReg = firebase.firestore();

$("#register").click(() => {
  var name = $("#name-new").val();
  var email = $("#email-new").val();
  var password = $("#pw-new").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      var userInfo = {
        name: name,
        email: email,
        password: password,
      };

      dbReg.collection("user").add(userInfo);

      // result.user.updateProfile({ displayName: name });
      alert("회원가입이 완료되었습니다.");
    });
});
