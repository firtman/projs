JavaScript introduced `WeakRef` and `FinalizationRegistry` to provide more control over garbage collection and manage memory usage more efficiently.

```js
/*
The `WeakRef` object allows you to create weak references to objects, which do not prevent those objects from being garbage collected. This is useful when you want to hold a reference to an object without preventing it from being reclaimed by the garbage collector.
*/
// Create a weak reference to an object
let obj = { message: 'Hello, world!' };
const weakRef = new WeakRef(obj);

// Access the object through the weak reference
console.log("Message:", weakRef.deref().message); // 'Hello, world!'

/*
The FinalizationRegistry object allows you to register a callback to be executed when an object is garbage collected. This is useful for cleanup tasks that need to be performed after an object is no longer in use.
*/
const registry = new FinalizationRegistry(heldValue => {
    console.log(`Object with held value ${heldValue} has been garbage collected`);
});
registry.register(obj, 'my object')


// Remove the strong reference to the object
obj = null;

// Attempt to access the object through the weak reference
console.log("Is null?", weakRef.deref()==null); // Likely 'null' if garbage collected


```


