

// ********** დავალებები დანომრილია, შესამოწმებლად ამოაკომენტარეთ კონკრეტული ნომერი ************


// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i

// for(let i =0;i<100;i++){
//     console.log(i)
// }

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i

// let i = 0

// while(i<50){
//     console.log(i)
//     i++
// }

// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push 
// მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. 
// ისე როგორც ლექციაზე გავაკეთეთ.

// let arr = ["john","james","johnathan","joe","june"]

// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.shift()

// console.log(arr)

// arr.push("ilia")

// console.log(arr)

// arr.unshift("whiliam")

// console.log(arr)

// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,
// მასივში ჩაწერეთ ინდექსი გამრავლებული
//  ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია

// let arr = []

// for(let i = 1;i<10000;i++){
//    arr.push(i*i)
// }

// console.log(arr)


// 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული 
// ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი

// let arr = [1,2,3,4,5]

// let arrCount = 0

// for(let i=0;i<=arr.length;i++){
//    arrCount+=i
// }

// console.log(arrCount)

// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და 
// დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.



// const oddChecker = (number) =>{
//    let oddOrEven = number % 2 === 0
//    return oddOrEven === false ? true : false
// }


// console.log(oddChecker(7))
// console.log(oddChecker(8))

// 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და
//  დააბრუნებს LowerCase (my name is john) სტრინგს

// function deCapitalise(string){
//    return string.toLowerCase()
// }

// console.log(deCapitalise("TEXT"))

// 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს 
// .filter სადაც მხოლოდ ლუწი რიცხვები იქნება   


// function evenFilter(numsArr){
//    return numsArr.filter((number) => number % 2 ==0)
// }

// let numbersArray = [1,2,3,4,5,6,7,8,9]

// console.log(evenFilter(numbersArray))