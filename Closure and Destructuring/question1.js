function createCounter() {
    let count = 0;
    return function () {
        console.log(count++);
    }
}

const counter = createCounter();
counter();
counter();
counter();
