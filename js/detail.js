const db = firebase.firestore();
const storage = firebase.storage();

var 내uid = JSON.parse(localStorage.getItem("user")).uid; // user db에서 uid 추출
var 판매자uid = "";
var 상품명;

var 쿼리스트링 = new URLSearchParams(window.location.search); //DB에 저장된 상품 정보
db.collection("product")
  .doc(쿼리스트링.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());

    $(".author").html("올린사람 : " + result.data().이름); // 상세정보에 올린사람 표기

    판매자uid = result.data().uid;
    상품명 = result.data().제목;
    $(".title").html(result.data().제목); //제목정보 불러오기
    $(".price").html(result.data().가격); //가격정보 불러오기
    $(".date").html(result.data().날짜); //가격정보 불러오기
    $(".detail-pic").css("background-image", `url(${result.data().이미지})`); //이미지 정보 불러오기
  });

$("#edit").click(function () {
  //버튼 누르면 edit.html로 이동
  window.location.href = "/edit.html?id=" + 쿼리스트링.get("id");
});

$("#chat").click(function () {
  // 채팅버튼을 눌렀을때 작동하는 함수

  var 데이터 = {
    who: [내uid, 판매자uid],
    product: 상품명,
    date: new Date(),
  };

  db.collection("chatroom").add(데이터);
});
