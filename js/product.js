const db = firebase.firestore();

db.collection("product")
  .get()
  .then((result) => {
    result.forEach((doc) => {
      console.log(doc.data());
      //디브를 동적으로 만들어서 출력할수 있음!!
      var template = `<div class="product">
      <div class="thumbnail" style="background-image: url('${
        doc.data().이미지
      }')"></div>
      <div class="flex-grow-1 p-4">
        <h5 class="title">${doc.data().제목}</h5>
        <p class="date">${doc.data().날짜}</p>
        <p class="price">${doc.data().가격}</p>
        <p class="float-end">0</p>
      </div>
      </div>`; // html을 만들어서
      $(".container").append(template); // 해당 클래스에 넣어줄것
    });
  });
