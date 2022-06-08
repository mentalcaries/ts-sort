class Container {
  array:number[]
  constructor() {
    this.array= []
  }

  /**
   * Adds the specified value to the container
   */
    add(value: number): void {
    // TODO: implement this method
    this.array.push(value)
    
  }

  delete(value: number): boolean {
    // TODO: implement this method
    return false;
  }
  getMedian(): number {
    // TODO: implement this method
    return 0;
  }
}

const container = new Container
container.add(1)
container.add(2)
container.add(5)
console.log(container)