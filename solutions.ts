function multiplyValue(value: number, multiplier?: number): number{
    
    if(multiplier === undefined){
        return value * 2
    }
    else{
        return value * multiplier
    }
    
}



function processInput(value: string | number | boolean): string | number{
    
    if(typeof value === "string"){
        return value.trim().toLowerCase()
    }
        
    else if(typeof value === "number"){
        return value * 10
    }
        
    else{
        if(value){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }
    
}



function formatCoordinate(location: readonly [number, number, string] ): string{
    
    const latitude = location[0]
    const longitude = location[1]
    const locationName = location[2]

    return `Location: ${locationName} (${latitude}, ${longitude})`
}



function concatenateArrays<T>(...arrays: T[][]): T[]{

    const combinedArray: T[] = []
    
    for (const array of arrays){
        for (const element of array){
            combinedArray.push(element)
        }
    }

    return combinedArray
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[]{

    const validCourses: Course[] = []

    for (const course of courses){
        if(course.isPublished && course.students >= minStudents){
            validCourses.push(course)
        }
    }

    return validCourses
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]{

    const pluckValuesArray: T[K][] = []
    
    for (const item of items){
        pluckValuesArray.push(item[key])
    }

    return pluckValuesArray
}




class Employee {
  protected name: string = "";
  private baseSalary: number = 0;

  constructor(name: string, baseSalary: number){
    this.name = name
    this.baseSalary = baseSalary
  }

  getDetails(): string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee{
  private department: string = "";

  constructor (name: string, baseSalary: number, department: string){
    super(name, baseSalary)
    this.department = department
  }
  
  getRoleInfo(): string{
    return `Manager of ${this.department}: ${this.name}`
  }
}



