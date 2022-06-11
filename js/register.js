$("#register").click(() => {
  var name = $("#name-new").val();
  var email = $("#email-new").val();
  var password = $("#pw-new").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({ displayName: name });
      alert("회원가입이 완료되었습니다.");
      window.location.href = "./main.html";
    });
});
