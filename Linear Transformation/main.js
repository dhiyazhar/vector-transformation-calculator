function panjang(vector){    

    const result = [];
    let sum = 0;

    for (let i = 0; i < vector.length; i++){
        result.push(vector[i] * vector[i]);
    }

    for (let i = 0; i < result.length; i++){
        sum += result[i];
    }

    return sum;
}

function hasiluuT(vector){
    var newArray = [];
    for(var i = 0; i < vector.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < vector.length; i++){
        for(var j = 0; j < vector.length; j++){
            newArray[i].push(vector[i] * vector[j]);
        };
    };

    return newArray;
}

function identityMatrix(vector){
    let matrix = [];
    for (let i = 0; i < vector.length; i++) {
        let temp = [];

        for (let j = 0; j < vector.length; j++) {
            if (i == j) {
                temp.push(1);
            }
            else {
                temp.push(0);
  
            }
        }
        matrix.push(temp);
    }
    return matrix;
}

function projection(vector) {
    let array = hasiluuT (vector);
    for(var i = 0; i < vector.length; i++ ){
        for(var j = 0; j < vector.length; j++){
            
            const resultProjection = array[i][j] / panjang(vector);
            array [i][j] = resultProjection.toFixed(2);

        }
    }

    let result = [];
    for(var i = 0; i < vector.length; i++ ){
        let temp = "[";
        temp += array[i].join(", ");
        temp += "]";
        result.push (temp);
    }

    return result.join(", ");
}

function reflection(vector){
    let array = hasiluuT(vector);
    let length = panjang(vector);
    let matrix_identity = identityMatrix(vector);
 
    let result = [];
    for (var i = 0; i < vector.length; i++) {
        let temp = [];
        for (var j = 0; j < vector.length; j++) {
            const resultReflection = (2 * array[i][j] / length) - matrix_identity[i][j];
            temp.push(resultReflection.toFixed(2));
        }
        result.push("[" + temp.join(", ") + "]");
    }
 
    return result.join(", ");
}

function rotateVector(vector, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const [x, y] = vector;

    const newX = cosAngle * x - sinAngle * y;
    const newY = sinAngle * x + cosAngle * y;

    return [newX, newY];
}

function rotationResult() {
    const vectorInput = document.getElementById('vectorR').value;
    const angleInput = document.getElementById('angle').value;
    const direction = document.getElementById('direction').value;
    const vector = vectorInput.split(',').map(Number);
    const angle = parseFloat(angleInput);

    if (isNaN(angle) || vector.length !== 2) {
        document.getElementById('rotation-result').innerHTML = "Please enter valid inputs.";
        return;
    }

    // Convert angle to radians
    const angleInRadians = (direction === 'clockwise' ? -angle : angle) * (Math.PI / 180);

    // Rotation matrix
    const rotationMatrix = [
        [Math.cos(angleInRadians), -Math.sin(angleInRadians)],
        [Math.sin(angleInRadians), Math.cos(angleInRadians)]
    ];

    // Perform rotation transformation
    const rotatedX = vector[0] * rotationMatrix[0][0] + vector[1] * rotationMatrix[0][1];
    const rotatedY = vector[0] * rotationMatrix[1][0] + vector[1] * rotationMatrix[1][1];

    document.getElementById('rotation-result').innerHTML = `Rotation Matrix: [${rotatedX.toFixed(2)}, ${rotatedY.toFixed(2)}]`;
}


function calculateResults() {
    const vectorV = document.getElementById('vectorV').value;
    const v = vectorV.split(',').map(Number);
    console.log(panjang(v));
    console.log(hasiluuT(v));
    console.log(identityMatrix(v));
    console.log("aku " + "suka" + " azhar");

    document.getElementById('projection-result').innerHTML = `Projection Matrix: [ ${projection(v)} ]`;
    document.getElementById('reflection-result').innerHTML = `Reflection Matrix: [ ${reflection(v)} ]`;

    
}

    document.getElementById('vectorV').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            calculateResults();
        }
    });


    
