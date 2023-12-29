class Employee {
    constructor(public name: string, public age: number, public department: string) {}
  
    clone(): Employee {
      // Using the prototype pattern to create a new instance by copying the current object
      const clone = Object.create(this);
      return clone;
    }
  }
  
  // Usage example
  const originalEmployee = new Employee('John Doe', 25, 'IT');
  
  // Now, let's create multiple instances with slight variations using the prototype pattern
  const employeeClone1 = originalEmployee.clone();
  employeeClone1.name = 'Jane Doe';
  
  const employeeClone2 = originalEmployee.clone();
  employeeClone2.age = 30;
  
  console.log(employeeClone1);
  // ...
  
  // Now, you have multiple instances of the Employee class with different configurations
  