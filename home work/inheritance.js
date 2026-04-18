// 1. Create a base class Person and derive Student and Teacher.

// class Person{
//     constructor(name){
//         this.name=name
//     }
//     show(){
//         console.log(`Name: ${this.name}`)
//     }
// }

// class Student extends Person{
//     constructor(name,marks){
//         super(name)
//         this.marks=marks
//     }
// }
// class Teacher extends Person{
//     constructor(name,subject){
//         super(name)
//         this.subject=subject
//     }
// }
// const s1=new Student("subrata",80)
// s1.show()
// const t1=new Teacher("Suresh","English")
// t1.show()

// 2.Implement multilevel inheritance: Animal- Mammal - Dog

// class Animal{
//     eat(){
//         console.log("animal eat")
//     }
// }
// class Mammal extends Animal{
//     walk(){
//         console.log('Mammal walks')
//     }
// }
// class Dog extends Mammal{
//     bark(){
//         console.log('Dog barks')
//     }
// }
// const d=new Dog()
// d.eat()
// d.walk()
// d.bark()

// 3.Create a Vehicle class and extend it into Bike and Car

// class Vehicle{
//     constructor(name){
//         this.name=name
//     }
//     start(){
//         console.log(`${this.name} starts`)
//     }
// }
// class Bike extends Vehicle{
//     constructor(name){
//         super(name)
//     }
// }
// class Car extends Vehicle{
//     constructor(name){
//         super(name)
//     }
// }
// const b=new Bike("Honda")
// b.start()
// const c=new Car("BMW")
// c.start()

// 4. Override a method showDetails() in child classes

// class Parent{
//     showDetails(){
//         console.log("parent details")
//     }
// }
// class Child extends Parent{
//     showDetails(){
//         console.log("child details")
//     }
    
// }
// const obj=new Child()
// obj.showDetails()