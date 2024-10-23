prompt("이름을 입력하세요")

var currentYear = 2024;
var birthYear;
var age;
var phoneNumber;
var gmail;

console.log(currentYear);
console.log(birthYear);

birthYear = prompt("태어난 연도를 입력하세요 (YYYY)", "");
phoneNumber = prompt("전화번호를 입력하세요")
gmail = prompt("이메일을 입력세요 ")


age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");

var login = [currentYear, birthYear, age, phoneNumber, gmail]
console.log(login)

