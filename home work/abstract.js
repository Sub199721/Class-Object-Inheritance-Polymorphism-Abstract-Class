// 1.Create an abstract class Shape with abstract method area().Extend Shape into Circle and Rectangle and calculate area.

// class Shape{
//     constructor(){
//         if(this.constructor==Shape){
//             throw new Error("we can not create object of abstract class shape")
//         }
//     }
//     area(){
//         throw new Error("method area() must be implemented")
//     }
// }
// class Circle extends Shape{
//     constructor(r){
//         super()
//         this.r=r
//     }
//     area(){
//         console.log(`Circle Area: ${3.14*this.r * this.r}`)
//     }
// }
// class Rectangle extends Shape{
//     constructor(l,b){
//         super()
//         this.l=l
//         this.b=b
//     }
//     area(){
//         console.log(`Circle Area: ${this.l * this.b}`)
//     }
// }
// const c=new Circle(5)
// c.area()
// const r=new Rectangle(5,6)
// r.area()

// 2.Create abstract class Bank and implement HDFC, SBI

// class Bank{
//     constructor(){
//         if(this.constructor===Bank){
//             throw new Error("can't create object of abstract class Bank")
//         }
//     }
//     interest(){
//         throw new Error("Method interest() must be implemented")
//     }
// }
// class HDFC extends Bank{
//    interest(){
//        console.log("HDFC interest Rate: 7%")
//    }
// }
// class SBI extends Bank{
//    interest(){
//        console.log("SBI interest Rate: 6%")
//    }
// }
// const h=new HDFC()
// h.interest()
// const s=new SBI()
// s.interest()