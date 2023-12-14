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
