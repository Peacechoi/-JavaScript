//alert("안녕하십니까")
//confirm("정말 이 페이지로 들어가겠습니까?")
//prompt("이름을 입력하세요")
//prompt("이름을 입력하세요", "홍길동" )
//document.write("<hi>안녕하십니까<h1>")


var currentYear = 2024;
var birthYear;
var age;

console.log(currentYear);
console.log(birthYear);

birthYear = prompt("태어난 연도를 입력하세요 (YYYY)", "");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");
