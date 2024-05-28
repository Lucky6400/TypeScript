/*
Software entities should be open for extension but closed for modification.

The open-closed principle states that when you define software entities, you should be able to extend their functionality, but you should not be able to modify the existing entity. Instead, you should just add a new mapping or configuration that allows the right strategy to be applied when running it.
*/

type Account = "Admin" | "Employee" | "Manager" | "HR"

class User {
    private name: string;
    private email: string;
    private password: string;

    // suppose we need to add a new field like account type
    private accountType: Account = "Admin";

    // isAdmin(): boolean {
    //     return this.accountType === "Admin";
    // }

    // isManager(): boolean {
    //     return this.accountType === "Manager";
    // }

    // above code is cool

    // but what if you had to add another user type?
    // isHR(): boolean {
    //     return this.accountType === "HR"; //❌
    // }

    // instead of above, do below
    getAccountType(): Account {
        return this.accountType;
    }
}

const Roles: Record<Account, string> = {
    "Admin": "/dashboard",
    "Employee": "/",
    "Manager": "/employee-list",
    "HR": "/salaries"
}

class RoleService {
    getRole(user: User): string {
        return Roles[user.getAccountType()];
    }
}