/*
"A class should have one, and only one reason to change."

If we put too many responsibilities in classes, then they become what we call a God object: an object that knows too much or does too much. The real challenge is finding the balance of responsibilities.
*/

import { kebabCase } from "lodash";

class User {
    private username: string;
    private email: string;
    private password: string;

    constructor(username: string, email: string, password: string) {
        this.email = email;
        this.password = password;
        this.username = username;
    }


    /*
    Now, you have a requirement to get a slug field, which is a field that we use to store and generate valid URLs from a User model. It's a good idea to add the following method inside the model as it is related to it
    */

    generateSlug(): string {
        return kebabCase(this.username);
    }

    // now you may need to implement login functionality
    login(email: string, password: string) {
        console.log("login")
    }

    /*
    The single-responsibility principle here advises us not to do that as it gives too many responsibilities to the User model. Instead, what you should do is create two different services that perform the login and sending the emails for the User model
    */
}

class UserAccountService {
    login(user: User, password: string) {
        console.log(user, password)
    }
}
class EmailService {
    sendEmailToUser(user: User, template: string) {
        console.log(user, template);
    }
}

/*
The benefits you gain by separating those concerns with this principle are mostly obvious:
• Testing: Easier to test a single feature or branch instead of multiple branches.
• Organization: Smaller classes can be located easier when given a proper name and core functionality can be discovered faster.

Naturally, you have to consider that splitting those methods into their own classes creates multiple objects that may have to be consolidated if needed or used as part of a Façade design pattern. This is because directly invoking 100 services in a function to perform a business workflow is not ideal.
*/