if(1+1 === 2){
    console.log(true)
}else{   
    console.log(false)
}
// VM384:2 true
// undefined
if(1+1 === 3){
    console.log(true)
}else{   
    console.log(false)
}
// undefined
let age = 13
// undefined
age
// 13
if(age >= 20){
    console.log("성인입니다.")
} else if(age >= 8){
    console.log("학생입니다.")
} else{
    console.log("어린이입니다.")
}
// VM743:4 학생입니다.
// undefined
age = 6
// 6
if(age >= 20){
    console.log("성인입니다.")
} else if(age >= 8){
    console.log("학생입니다.")
} else{
    console.log("어린이입니다.")
}
// VM790:6 어린이입니다.
// undefined
const profile ={
    name:"철수",
    age:7,
    school:"다람쥐초등학교"
}
// undefined
profile.age
// 7