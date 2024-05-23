//Rectangles

//makeLine(size) Function
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
console.log(makeLine(5));

//makeSquare(size) Function
//rewrite function to use makeRectangle
function makeRectangle(width, height) {
    let square = '';
    for (let i = 0; i < height; i++) {
        square += (makeLine(size) + '\n');
    }
    return square
}
console.log(makeRectangle(5, 5));

//makeRectangle(width, height) Function
function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width)+ '\n');
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

// Triangle
// makeDownwardStairs(height)
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));

// makeSpaceLine(numSpaces, numChars)
function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += "_";
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += "#";
    }
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += "_";
    }
    return spaceLine
}
console.log(makeSpaceLine(3, 5));

// makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.replaceAll("_"," ").slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

// makeDiamond(height) function
function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));

function reverse(height) {
    let reversed = ''
    for (let i = height.length; i < height; i--) {
        reversed += (makeSpaceLine(height[i]) + '\n');
    }
    return reversed;
}

console.log(reverse)