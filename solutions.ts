
const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier
}




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





type tuple = readonly [number, number, string]

const formatCoordinate = (s: tuple): string => {
    return `Location: ${s[2]} (${s[0]}, ${s[1]})`
}







const concatenateArrays = <T>(...arr: T[][]): T[] => {
    return arr.flat()
}






interface Course {
    title: string;
    students: number;
    isPublished: boolean
}

const getPopularCourses = (c: Course[], num: number): Course[] => {
    return c.filter(v => v.isPublished && v.students >= num)
}







const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] => {
    return items.map(v => v[key]);
};







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
