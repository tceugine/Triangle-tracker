function checkTriangle() {
            var a = parseFloat(prompt(document.getElementById('sideA').value));
            var b = parseFloat(prompt(document.getElementById('sideB').value));
            var c = parseFloat(prompt(document.getElementById('sideC').value));
            var res = document.getElementById('result');
            if (a + b <= c || a + c <= b || b + c <= a) {
                res.innerHTML = "Result: scalene triangle";
            } 
            else if (a === b && b === c) {
                res.innerHTML = "Result: Equilateral Triangle";
            } 
            else if (a === b || b === c || a === c) {
                res.innerHTML = "Result: Isosceles Triangle";
            } 
            else {
                res.innerHTML = "Result: Not a Triangle";
            }
        }

