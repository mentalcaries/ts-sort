"use strict";
class Container {
    constructor() {
        this.array = [];
    }
    /**
     * Adds the specified value to the container
     */
    add(value) {
        // TODO: implement this method
        this.array.push(value);
    }
    delete(value) {
        // TODO: implement this method
        return false;
    }
    getMedian() {
        // TODO: implement this method
        return 0;
    }
}
const container = new Container;
container.add(1);
container.add(2);
container.add(5);
console.log(container);
