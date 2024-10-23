// 1. 사용자로부터 국어 점수 / 과학 점수 / 수학 점수 / 영어 점수를 입력 받아 저장하세요.
// 2. 모든 점수를 합해서 평균을 내세요. => 연산자
// 3. 만약 평균이 60이 넘는다면 "합격" 출력 / 넘지 않는다면 "낙제" 출력

var userNumber = prompt("이름을 적으세요")
var korean = prompt("검정고시 점수를 입력하세요 국어")
var math = prompt("검정고시 점수를 입력하세요 수학")
var science = prompt("검정고시 점수를 입력하세요 과학")
var english = prompt("검정고시 점수를 입력하세요 영어")

var test = korean + math + science + english
var text = test / 4

if(text !=null) {
    if(text< 60) {
        alert('낙제')
    } else (
        alert("합격")
    )
}




