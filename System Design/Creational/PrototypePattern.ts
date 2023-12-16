/*
Sometimes we may need to add a subclass just for changing the class name while
performing the same new operation. Instances of a single class usually share the same
methods and properties, so we can clone one existing instance for new instances to be
created. That is the concept of a prototype.
*/

/* This pattern has no image in book */

class Base {
    state: number;
}

let base = new Base();
base.state = 0;
class Derived extends Base { }
Derived.prototype = base;
let derived = new Derived();

/*
Now, the derived object will keep the state of the base object. This could be useful when
you want to create copies of a specific instance, but keep in mind that properties in a
prototype of these copies are not the own properties of these cloned objects.
*/