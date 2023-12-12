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

function identityMatrix(){

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
    let array = hasiluuT (vector);
    for(var i = 0; i < vector.length; i++ ){
        for(var j = 0; j < vector.length; j++){
            
            const resultReflection = 2 * array[i][j] / panjang(vector);
            array [i][j] = resultReflection.toFixed(2);

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


function calculateResults() {
    const vectorV = document.getElementById('vectorV').value;
    const v = vectorV.split(',').map(Number);
    console.log(panjang(v));
    console.log(hasiluuT(v));
    console.log(reflection(v));
    console.log("aku " + "suka" + " azhar");

    document.getElementById('projection-result').innerHTML = `Projection Matrix: [ ${projection(v)} ]`;

    // Reflection Calculation
    const r11 = (v[0] * v[0])  ;
    const r12 = (v[0] * v[1]) ;
    const r21 = (v[1] * v[0]) ;
    const r22 = (v[1] * v[1]) ;

    document.getElementById('reflection-result').innerHTML = `Projection Matrix: [ ${reflection(v)} ]`;

    // Rotation Calculation
    const angle = Math.PI / 2; // 90 degrees for simplicity
    const r11_rot = Math.cos(angle);
    const r12_rot = -Math.sin(angle);
    const r21_rot = Math.sin(angle);
    const r22_rot = Math.cos(angle);

    document.getElementById('rotation-result').innerHTML = `Rotation Matrix: [ [${r11_rot.toFixed(2)}, ${r12_rot.toFixed(2)}], [${r21_rot.toFixed(2)}, ${r22_rot.toFixed(2)}] ]`;
}