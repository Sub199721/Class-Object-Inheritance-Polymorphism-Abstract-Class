// 1.Create a Student class with id, name, marks and display details using object.

// class Student{
//     constructor(id,name,marks){
//         this.id=id;
//         this.name=name;
//         this.marks=marks
//     }
//     display(){
//         console.log(`ID: ${this.id}; NAME: ${this.name}; Marks: ${this.marks}`)
//     }
// }
// const s1=new Student(1,"Subrata",60)
// s1.display()

//2.  Write a class Employee and calculate salary using method.

// class Employee{
//     constructor(name,basic){
//         this.name=name
//         this.basic=basic
//     }
//     display(){
//         let hra=this.basic*0.2
//         let da=this.basic*0.1
//         let final=this.basic+hra+da
//         console.log(`${this.name}'s salary :${final}`)
//     }
// }
// const e=new Employee("subrata",20000)
// e.display()

// 3.Create a BankAccount class and implement deposit & withdraw methods

// class BankAccount{
//     constructor(balance){
//         this.balance=balance
//     }
//     deposit(amount){
//         this.balance+=amount
//         console.log(`Your balance is ${this.balance}`)
//     }
//     withdraw(amount){
//        if(this.balance>=amount){
//         this.balance-=amount
//         console.log(`Your withdrawn amount is ${amount}`)
//        }else{
//          console.log(`Insufficient Balance`)
//        }
//     }
// }
// const acc=new BankAccount(5000)
// acc.deposit(3000)
// acc.withdraw(7000)


// 4.Create a class Car with constructor and display car details.

// class Car{
//     constructor(brand,model){
//         this.brand=brand;
//         this.model=model; 
//     }
//     display(){
//         console.log(`Brand: ${this.brand}; Model: ${this.model};`)
//     }
// }
// const c=new Car("Toyota","Fortuner")
// c.display()
