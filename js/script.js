// Taking the Row and Column of Matrix and Click Next Button 
// Next Button Function Start
function next() {
    var rowsA = document.getElementById('rowsA').value;
    var columnsA = document.getElementById('columnsA').value;
    var rowsB = document.getElementById('rowsB').value;
    var columnsB = document.getElementById('columnsB').value;

    if (rowsA === '' || columnsA === '' || rowsB === '' || columnsB === '') {
        alert('Please enter all dimensions.');
        return;
    }

    createMatrixInput('matrixA', rowsA, columnsA, 'A');
    createMatrixInput('matrixB', rowsB, columnsB, 'B');

    document.getElementById('matrixInput').style.display = 'block';
}
//  Next Button Function end

//Now After Clicking Next Button input box 
// taking matrix value by the user

function createMatrixInput(containerId, rows, columns, matrixName) {
    var container = document.getElementById(containerId);
    container.innerHTML = `<p><b>Enter values for Matrix ${matrixName}:</b></p>`;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var inputId = `${containerId}_input_${i}_${j}`;
            container.innerHTML += `<input type="number" id="${inputId}" placeholder="${matrixName}[${i}][${j}]">`;
        }
        container.innerHTML += '<br>';
    }
}

// Calculation function for performing the operation

function calculate() {
    var rowsA = document.getElementById('rowsA').value;
    var columnsA = document.getElementById('columnsA').value;
    var rowsB = document.getElementById('rowsB').value;
    var columnsB = document.getElementById('columnsB').value;

    var matrixA = getMatrixValues('matrixA', rowsA, columnsA);
    var matrixB = getMatrixValues('matrixB', rowsB, columnsB);

    // Perform matrix multiplication (replace this with your own logic)
    var result = multiplyMatrices(matrixA, matrixB);

    document.getElementById('result').innerHTML = `<p>Result: ${result}</p>`;
}

function getMatrixValues(containerId, rows, columns) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < columns; j++) {
            var inputId = `${containerId}_input_${i}_${j}`;
            matrix[i][j] = parseFloat(document.getElementById(inputId).value) || 0;
        }
    }
    return matrix;
}
// Multiplyng the Matrix
function multiplyMatrices(matrixA, matrixB) {
    // This is a simple matrix multiplication example, replace it with your own logic
    var result = [];
    for (var i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;
            for (var k = 0; k < matrixB.length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    // Show the result
    return result;
}