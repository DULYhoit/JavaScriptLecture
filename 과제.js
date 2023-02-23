function 삼육구게임(num) {
    if (num % 3 == 0) {
      console.log("박수");
    } else {
      console.log("통과");
    }
  }

  function 삼육구업글(num) {
    if (num % 9 == 0) {
      console.log("박수x2");
    } else if (num % 3 == 0) {
      console.log("박수");
    } else {
      console.log("통과");
    }
  }
  function 합격했냐(test1, test2) {
    if (test1 >= 40 && test2 >= 40) {
      if (test1 + test2 >= 120) {
        console.log("통과");
      } else {
        console.log("불합격");
      }
    } else {
      console.log("불합격");
    }
  }
  function 합격했냐1(a, b) {
    if (a < 40 || b < 40) {
      console.log("불합격");
    } else if (a + b >= 120) {
      console.log("합격");
    } else {
      console.log("불합격");
    }
  }
  삼육구게임(3);
  삼육구업글(6);
  합격했냐(40, 60);

  // ---------------------------변수과제---------------------------------
  let age = 1;
  let where = "서울";
  //--------------- 왜 이 변수는 동작하지 않죠? ----------------
  var name = "park";
  var id = 0;

  function showName() {
    var name = "kim";
    var id = 1;
    console.log(name);
  }

  showName();
  console.log(id);

  //-----------이자율 계산----------------

  var 예금액 = 60000;
  var 미래예금액 = 0;
  //첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
  //첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.

  if (예금액 >= 50000) {
    미래예금액 = 예금액 * 1.2 * 1.2;
  } else {
    미래예금액 = 예금액 * 1.15 * 1.15;
  }
  console.log(미래예금액);

  //커피양 계산

  var first = 360;
  var total = 0;

  total = first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
  console.log(total);
  
  //ui 퀴즈
  let count = 0;
  $('#send-answer').on('click',function(){
    const answer = $('#answer').val();
  
    if(answer == '1335'){
      alert('성공');
    }else{
      alert('실패');
      if(count == 3){
        alert('멍청아');
      }
      console.log(count+=1);
    }
    
  })
//array과제
  var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
   
  출석부.forEach(function(array){
    
    if(name == array){
        console.log('있어요');
    }
  })
}
이름찾기('재석');

//구구단 과제
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(i+'*'+j+ '='+ i*j);
       
        
//     }
    
// }

//평균점수 계산기

function 계산(params,param) {
    let cal = 0 ;
    let result = 0 ;
    
    for (let i = 0; i < params.length; i++) {
        cal+=params[i];
    }
    cal =  cal/params.length;   
    result = param - cal;
    
    if( result < 0 ){
        console.log(result*-1 + '점이 떨어졌네요 재수추천');
    }else{
        console.log('평균보다 '+result+'점이 올랐네요');
    }
}
    계산([40, 40, 40], 20);

    
        
