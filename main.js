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

    function rotation(vector, angleDerajat) {

        if (vector.length !== 2) {

            return "Error, silahkan masukkan vector 2D."; 

        }

        const angleRadian = (angleDerajat * Math.PI) / 180;
        const cosTheta = Math.cos(angleRadian);
        const sinTheta = Math.sin(angleRadian);

        const rotationMatrix = [
            [cosTheta, -sinTheta],
            [sinTheta, cosTheta]
        ];

        const resultArray = [];

        for (let i = 0; i < vector.length; i++) {
            let result = 0;

            for (let j = 0; j < rotationMatrix[i].length; j++) {
                result += rotationMatrix[i][j] * vector[j];
            }

            resultArray.push(result.toFixed(2));
        }

        return resultArray.join(", ");
    }

    function calculateResults() {
        const vectorV = document.getElementById('vectorV').value;
        const angle = parseFloat(document.getElementById('rotationAngle').value);
        const v = vectorV.split(',').map(Number);

        if (vectorV.trim() === '') {

            document.getElementById('projection-result').innerHTML = "Silahkan masukkan vector.";
            document.getElementById('reflection-result').innerHTML = "Silahkan masukkan vector.";
            document.getElementById('rotation-result').innerHTML = "Silahkan masukkan vector.";

            return;

        }
    
        document.getElementById('projection-result').innerHTML = `Projection Matrix: [ ${projection(v)} ]`;
    
        document.getElementById('reflection-result').innerHTML = `Reflection Matrix: [ ${reflection(v)} ]`;
    
        let rotationResult = "";
    
        if (isNaN(angle)) {
            document.getElementById('rotation-result').innerHTML = "Silahkan masukkan sudut rotasi.";
        } else {
            rotationResult = rotation(v, angle);
            document.getElementById('rotation-result').innerHTML = `Rotation Matrix: [ ${rotationResult} ]`;
        }
    }
    
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            calculateResults();
        }
    });

        
