//1
export {};
// const multiplyValue = (num: number, multiplier: number = 2) => {
//     return num * multiplier
// }
// console.log(multiplyValue(10))
// console.log(multiplyValue(10, 5))
// console.log(multiplyValue(17, 0))
//2
// type Value = string | number | boolean
// const processInput = (value: Value) => {
//     if(typeof value === "string")
//         return `"${value.trim().toLowerCase()}"`
//     else if(typeof value === "number")
//         return value * 10
//     else if(typeof value === "boolean"){
//         if(value)
//             return `"Active"`;
//         else if(value === false)
//             return `"Inactive"`;
//     }
// }
// console.log(processInput("  TypeScript  "))
// console.log(processInput(7))
// console.log(processInput(true))
// console.log(processInput(false))
//3
// type tuple = readonly [number, number, string]
// const formatCoordinate = (s: tuple) => {
//     return `"Location: ${s[2]} (${s[0]}, ${s[1]})"`
// }
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))
//4
// const concatenateArrays = <T>(...arr: T[][]) => {
//     return arr.flat()
// }
// console.log(concatenateArrays(["a", "b"], ["c", "d"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]))
//5
// interface Course {
//     title: string;
//     students: number;
//     isPublished: boolean
// }
// const getPopularCourses = (c: Course[], num: number) => {
//     return c.filter(v => v.isPublished && v.students >= num)
// }
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];
// console.log(getPopularCourses(courses, 80))
//6
// const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] => {
//     return items.map(v => v[key]);
// };
// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" }
// ];
// console.log(pluckValues(users, "name"))
// console.log(pluckValues(users, "id"))
//7
// class Employee {
//     protected name: string;
//     private baseSalary: number
//     constructor(name: string, baseSalary: number){
//         this.name = name;
//         this.baseSalary = baseSalary
//     }
//     getDetails(){
//         console.log(`"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`)
//     }
// }
// class Manager extends Employee {
//     private department: string;
//     constructor(name: string, baseSalary: number, department: string){
//         super(name, baseSalary)
//         this.department = department
//     }
//     getRoleInfo(){
//         console.log(`"Manager of ${this.department}: ${this.name}"`)
//     }
// }
// const manager = new Manager("Alice", 50000, "Engineering");
// manager.getDetails();
// manager.getRoleInfo();
//8
// const validateAgeAsync = (age: number): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         if(age < 18) {
//             reject(new Error("Access Denied: Must be 18 or older"));
//             return;
//         }
//         setTimeout(() => {
//             resolve(`"Access Granted"`);
//         }, 1000);
//     });
// }
// console.log(await validateAgeAsync(20));
// await validateAgeAsync(15);
