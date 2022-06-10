const db = firebase.firestore();
const storage = firebase.storage();

$("#register").click(() => {
  var email = $("#email-new").val();
  var password = $("#pw-new").val();
  var name = $("#name-new").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({ displayName: name });
      console.log(result);
      console.log(result.user);
    });
});
