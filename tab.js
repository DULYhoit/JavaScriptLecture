//for문을통해 안에있는 코드들이 3번 복사됨
const num = $(".container").children(".tab-content").length;

//이벤트리스너가 많아질수록 성능이 많이필요해짐
//이벤트버블링 특성을 이용해 이벤트리스너 하나만 만들수있다.
// for (let i = 0; i < num; i++) {
//   $(".tab-button").eq(i).on("click", function (event)
//   {
//       opentap(i);
//     });
// }

$(".list").click(function (event) {
  const num = event.target.dataset.id;
  console.log(num);
  opentap(num);
});

function opentap(param) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(param).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(param).addClass("show");
}
//Object,Array 데이터바인딩
var car = ["소나타", 50000, "white"];
var car2 = { name: "소나타", price: [50000, 40000, 30000], color: "black" };
$(".car-title").text(car2.name);
$(".car-price").text(car2.price[1]);

const closes = [
  { 'id': 0, 'item': "hat", 'size': [95, 100, 105] },
  { 'id': 1, 'item': "shirt", 'size': [110, 115, 120, 125] },
];

$(".form-select").on("input", function (e) {

  if (e.target.value == "-선택사항-") {
    $(".form-select").eq(1).addClass("off");
  } else {
    if (e.target.value == "모자") {
      $(".form-select").eq(1).html('');
      // for (let i = 0; i < closes[0].size.length; i++) {
      //   // $(".form-select").eq(1).children().eq(i).text(closes[0].size[i]);
      //   var a = document.createElement('option');
      //   a.innerHTML = closes[0].size[i];
      //   $(".form-select").eq(1).append(a);
      
      // }
      //코드가길어서 foreach로 만들어봄
      closes[0].size.forEach(function(val) {
          var a = document.createElement('option');
        a.innerHTML = val;
        $(".form-select").eq(1).append(a);
      });

      $(".form-select").eq(1).removeClass("off");
    } else if (e.target.value == "셔츠") {
      $(".form-select").eq(1).html('');
      for (let i = 0; i< closes[1].size.length; i++) {
        // $(".form-select").eq(1).children().eq(i).text(closes[1].size[i]);
        var a = document.createElement('option');
        a.innerHTML = closes[1].size[i];
        $(".form-select").eq(1).append(a);
      }
      $(".form-select").eq(1).removeClass("off");
    }
  }
});

//자바스크립트로 element 만들기
var a = document.createElement('p'); 
a.innerHTML= '안녕d';
// document.querySelector('#test').appendChild(a);

//제이쿼리버전
$('#test').append(a);

