    function getTriangleArea(a, h) {
        if ((a > 0) && (h > 0)) {
            alert(a * h / 2);
            return (a * h / 2)
        } else {
            alert('Nieprawidłowe dane.');
            return ('Nieprawidłowe dane.')
        }
    };
    console.log(getTriangleArea(10, 6));
    var triangle1Area = getTriangleArea(10, 15),
        triangle2Area = getTriangleArea(4, 0),
        triangle3Area = getTriangleArea(1, 3);
    console.log([triangle1Area, triangle2Area, triangle3Area])