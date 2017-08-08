var a = prompt('Podaj długość podstawy "a"'),
    h = prompt('Podaj wysokość trójkąta "h"'),
    triangleArea = (a * h) / 2,

    function getTriangleArea(a, h) {
        if (a > 0) || (h > 0) {
            alert('Pole trójkąta wynosi: ' + triangleArea)
            console.log(triangleArea)
        } else {
            alert('Nieprawidłowe dane.')
        }
    };




value = (a * a) + (2 * a * b) - (b * b);

alert('The result of (a * a) + (2 * a * b) - (b * b) operation is: ' + value);
console.log(value);

if (value < 0) {
    alert('Wynik jest ujemny');
    console.log('Wynik jest ujemny');
} else if (value > 0) {
    alert('Wynik jest dodatni');
    console.log('Wynik jest dodatni');
} else {
    alert('Wynik równy zero');
    console.log('Wynik równy zero');
};


alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);