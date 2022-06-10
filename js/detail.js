const db = firebase.firestore();
const storage = firebase.storage();

var 쿼리스트링 = new URLSearchParams(window.location.search); //DB에 저장된 상품 정보
db.collection("product")
  .doc(쿼리스트링.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());
    $(".title").html(result.data().제목); //제목정보 불러오기
    $(".price").html(result.data().가격); //가격정보 불러오기
    $(".detail-pic").css("background-image", `url(${result.data().이미지})`); //이미지 정보 불러오기
  });

$("#edit").click(function () {
  //버튼 누르면 edit.html로 이동
  window.location.href = "/edit.html?id=" + 쿼리스트링.get("id");
});
