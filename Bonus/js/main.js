const gridDom = document.getElementById('grid');


for(let i = 1; i <= 100; i++) {
    const currentElement = createGridSquare(i);
    currentElement.addEventListener('click', 
        function() {
            this.classList.toggle('clicked');
            console.log(currentElement.textContent);
        }
    );
        gridDom.append(currentElement);
}

function createGridSquare(number) {
        const currentElement = document.createElement('div');
        currentElement.classList.add('square');
        const numberSquare = document.createElement('div');
        numberSquare.classList.add('square-number');
        numberSquare.append(number);
        currentElement.append(number);

        return currentElement;
}
/*
function createGridSquare(number) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square_Medium');
    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.append(number);
    currentElement.append(number);

    return currentElement;
}

function createGridSquare(number) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square_Hard');
    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.append(number);
    currentElement.append(number);

    return currentElement;
}*/