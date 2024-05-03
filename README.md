<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Calculator</title>
    <link rel="stylesheet" href="calc.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <button onclick="appendNumber('1')">1</button>
        <button onclick="appendNumber('2')">2</button>
        <button onclick="appendNumber('3')">3</button>
        <button onclick="setOperator('+')">+</button>
        <button onclick="appendNumber('4')">4</button>
        <button onclick="appendNumber('5')">5</button>
        <button onclick="appendNumber('6')">6</button>
        <button onclick="setOperator('-')">-</button>
        <button onclick="appendNumber('7')">7</button>
        <button onclick="appendNumber('8')">8</button>
        <button onclick="appendNumber('9')">9</button>
        <button onclick="setOperator('x')">x</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="appendNumber('0')">0</button>
        <button onclick="calculateResult()">=</button>
        <button onclick="setOperator('/')">/</button>
    </div>
    <script src="C:\CALC\CALC.js"></script>
</body>
</html>
