const classmates2 = [
    {name:"철수", age:10, school:"다람쥐초등학교"},
    {name:"영희", age:10, school:"공룡초등학교"}
]


const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
let result = ""
for (let i = 0; i < fruits.length; i++) {
    result += fruits[i].number+" "+fruits[i].title+"\n"
    // console.log(fruits[i].number+" "+fruits[i].title)
}
console.log(result)


let date = new Date()
let y = date.getFullYear()
let m = date.getMonth()
let d = date.getDay()

console.log("오늘은 "+y+"년 "+(m+1)+"월 "+d+"일 입니다.")




const token = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
console.log(token)

const token = Math.floor(Math.random()*1000000)
console.log(token)


let email = "coDecAmp@gamil.com "

if(email.includes('@')){
    email = email.trim().toLowerCase()
}


let tmp = email.split('@') 
console.log(tmp[0].slice(0,-2)+"**@"+tmp[1])


let movies = [
    { title: "킹스맨", genre: "액션", 상영관: "메가박스" },
    { title: "러브레터", genre: "로맨스", 상영관: "cgv" },
    { title: "스폰지밥", genre: "코미디", 상영관: "메가박스" },
      { title: "노트북", genre: "드라마", 상영관: "cgv" },
      { title: "임파서블", genre: "액션", 상영관: "cgv" },
    { title: "파리의 인어", genre: "로맨스", 상영관: "메가박스" },
    { title: "심슨", genre: "코미디", 상영관: "메가박스" },
      { title: "포레스트 검프", genre: "드라마", 상영관: "cgv" },
 ]

 let action = movies.filter(arr => arr.genre === "액션")
 let cgv = movies.filter(arr => arr.상영관 === "cgv")
 let romance = movies.filter(arr => arr.genre === "로맨스" && arr.상영관 === "cgv")

 console.log(action)
 console.log(cgv)
 console.log(romance)




 let List = [
  { number: 1, title: "장미", price: 4000 },
  { number: 2, title: "식칼", price: 7000 },
  { number: 3, title: "슬리퍼", price: 12000 },
  { number: 4, title: "주전자", price: 5000 },
  { number: 5, title: "선풍기", price: 5700 },
  { number: 6, title: "마우스 패드", price: 1800 },
  { number: 7, title: "휴대폰 케이스", price: 5500 },
  { number: 8, title: "마우스", price: 6500 },
]

List.sort((a,b)=>{
  return a.price - b.price;
})

List


let numberData = [1, "가나", true, 126, "false", 100 ]
let result = []
for(let i = 0 ; i < numberData.length; i++){
    if(typeof numberData[i] === 'number'){
      result.push(numberData[i])
    }
}
numberData = result




function password(input1, input2) {
  input1 = String(input1).toLowerCase()
  input2 = String(input2).toLowerCase()
  if(input1 === input2) console.log("회원가입을 축하합니다.")
  else console.log("비밀번호를 다시 확인해주세요.")
}

password("1234",1234)


password("1234", "1235") // "비밀번호를 다시 확인해주세요."
password("1234", "1234") // "회원가입을 축하합니다."
password("1234", 1234) // "회원가입을 축하합니다."
password("aaaa", "AAAA") // "회원가입을 축하합니다."


// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"
// 라는 문구를 띄워주세요.


function grade(score) {
  if(score > 100 || score < 0) console.log("잘못된 점수입니다")
  else if(score >= 90) console.log("A")
  else if(score >= 80) console.log("B")
  else if(score >= 70) console.log("C")
  else if(score >= 60) console.log("D")
  else console.log("F")
}

// 현재 1위 과일은 레드향입니다.
// 현재 2위 과일은 샤인머스켓입니다.
// 현재 3위 과일은 산청딸기입니다.

const fruits = [
  { number:  1, title: "레드향"　　　　},
  { number:  2, title: "샤인머스켓"　　},
  { number:  3, title: "산청딸기"　　　},
  { number:  4, title: "한라봉"　　　　},
  { number:  5, title: "사과"　　　　　},
  { number:  6, title: "애플망고"　　　},
  { number:  7, title: "딸기"　　　　　},
  { number:  8, title: "천혜향"　　　　},
  { number:  9, title: "과일선물세트"　},
  { number: 10, title: "귤"　　　　　 },
]

for(let i = 1; i <= 3; i++){
  
  for (let j = 0; j < fruits.length; j++) {
    if(fruits[j].number === i){
      console.log(`현재 ${i}위 과일은 ${fruits[j].title}입니다.`)
      break;
    }
  }
}


const myShopping = [
  { category: "과일", price: 12000　},
  { category: "의류", price:10000　 },
  { category: "의류", price: 20000　},
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000　 },
  { category: "의류", price: 10000  },
  { category: "과일", price: 8000　　},
  { category: "의류", price: 7000　　},
  { category: "장난감", price: 5000  },
  { category: "의류", price: 10000　 },
]

let count = 0;
let price = 0;
let grade = "";

for (let i = 0; i < myShopping.length; i++) {
  if(myShopping[i].category === "의류"){
    count++;
    price += myShopping[i].price
  }
}

if(count >= 5){
  grade = "Gold"
} else if (count >= 3){
  grade = "Silver"
}else{
  grade = "Bronze"
}


// === 의류를 구매한 횟수는 총 5
console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + price + "원이며 등급은" + grade + "입니다."
	
)

function random() {
    console.log(String(Math.floor(Math.random()*10000)).padStart(4,'0'))
  }
  
  random()



const TodoList = [
		{ work: "청소", finish: false },
		{ work: "미적분 과제", finish: true  },
		{ work: "논문 해석", finish: false },
		{ work: "알고리즘 풀기", finish: false },
		{ work: "미니홈피 제작", finish: false },
		{ work: "Blog 글 쓰기", finish: true }
]
let count = 0;
for (let i = 0; i < TodoList.length; i++) {
  const element = TodoList[i];
  if(element.finish) count++;
}
console.log(`총 ${Math.ceil(count/TodoList.length*100)}% 진행하셨습니다.`)




function validation(email, password, passwordCheck) {
  if(!email.includes('@')) {
    return console.log("이메일 주소를 다시 확인해주세요.")
  }
    
  if(password.length < 8 || password.length > 16){
    return console.log("비밀번호는 8~16자여야 합니다.")
  }

  if(password !== passwordCheck){
    return console.log("비밀번호를 다시 확인해주세요.")
  }

  return console.log("회원가입을 축하합니다")
}


function Timer(){
  const processID = setInterval(() => {
    
  }, interval);
}



let time = 60
setInterval(function(){
    if(time >= 0){
      let minutes = Math.floor(time / 60)
        let seconds = time % 60
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        console.log(minutes + ":" + seconds)
        time--
    }
}, 50)


let post = "2021년 05월 02일"
let date = new Date()
let y = date.getFullYear()
let m = date.getMonth()
let d = date.getDay()

let tmp = post.split(" ")
let post_y = tmp[0].slice(0,4)
let post_m = tmp[1].slice(0,2)
let post_d = tmp[2].slice(0,2)

let ans = (y-post_y)*365+(m-post_m)*30+(d-post_d)
console.log(`${ans}일이 지났습니다.`)