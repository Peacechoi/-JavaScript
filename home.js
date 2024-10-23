// 1.사용자로부터 이름 / 생년월일 / 전화번호 / 이메일을 입력받으세요.
// 2.입력 받은 데이터를 배열로 저장하세요.
// 3. 배열로 저장한 데이터를 화면에 
// "(이름)님 환영합니다! // (현재 나이)세" 이렇게 출력하세요.

var currentYear = 2024;
var birthYear;

console.log(currentYear);
console.log(birthYear);

birthYear = prompt("태어난 연도를 입력하세요 (YYYY)", "");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");

