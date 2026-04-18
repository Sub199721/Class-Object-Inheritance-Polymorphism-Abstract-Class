//1. Create method overloading for add() (int, float, double)

// class Add{
//     add(a,b,c){
//       if(c!==undefined){
//         return a+b+c
//       }
//       return a+b
//     }
    
// }
// const num1=new Add()
// console.log(num1.add(5,8))
// const num2=new Add()
// console.log(num2.add(5,8,7))

// 2.Create method overriding using Shape Circle, Rectangle Demonstrate runtime polymorphism using parent reference.

// class Shape{
//     area(){
//         console.log("Calculate Area")
//     }
// }
// class Circle extends Shape{
//     area(r){
//         console.log(`Circle Area: ${3.14*r*r}`)
//     }
// }
// class Rectangle extends Shape{
//     area(l,b){
//         console.log(`Rectangle Area: ${l*b}`)
//     }
// }
// const c=new Circle()
// c.area(5)
// const r=new Rectangle()
// r.area(5,6)

// 3. Create a program where same method name behaves differently in multiple classes

// class CreditCard{
//     pay(){
//         console.log("paid using credit card")
//     }
// }
// class Upi{
//     pay(){
//         console.log("paid using UPI")
//     }
// }
// class Cash{
//     pay(){
//         console.log("paid using cash")
//     }
// }

// const payments=[new CreditCard(),new Upi(),new Cash]
// payments.forEach(p=>p.pay())