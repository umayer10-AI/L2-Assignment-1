
const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier
}
multiplyValue(10)
multiplyValue(10, 5)
multiplyValue(7, 0)




type Value = string | number | boolean

const processInput = (value: Value): string | number => {
    if(typeof value === "string")
        return value.trim().toLowerCase()
    else if(typeof value === "number")
        return value * 10
    else if(typeof value === "boolean"){
        if(value)
            return "Active";
        else if(value === false)
            return "Inactive";
    }

    return "Invalid input"
    
}
processInput("  TypeScript  ")
processInput(7)
processInput(true)
processInput(false)





type tuple = readonly [number, number, string]

const formatCoordinate = (s: tuple): string => {
    return `Location: ${s[2]} (${s[0]}, ${s[1]})`
}

formatCoordinate([23.81, 90.41, "Dhaka"])
formatCoordinate([22.35, 91.78, "Chittagong"])






const concatenateArrays = <T>(...arr: T[][]): T[] => {
    return arr.flat()
}
concatenateArrays(["a", "b"], ["c", "d"])
concatenateArrays([1, 2], [3, 4], [5])





interface Course {
    title: string;
    students: number;
    isPublished: boolean
}

const getPopularCourses = (c: Course[], num: number): Course[] => {
    return c.filter(v => v.isPublished && v.students >= num)
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

getPopularCourses(courses, 80)






const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] => {
    return items.map(v => v[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name")
pluckValues(users, "id")






class Employee {
    protected name: string;
    private baseSalary: number

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {

    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary)
        this.department = department
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();







const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if(age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}

await validateAgeAsync(20);
await validateAgeAsync(15);