function solution(arr1, arr2) {
    
    if (arr1.length == arr2.length ) {
        var sumArr1 = 0;
        var sumArr2 = 0;
        
        for(var i = 0; i < arr1.length; i++){
            sumArr1 += arr1[i];
        }

        for(var z = 0; z < arr2.length; z++) {
            sumArr2 += arr2[z];
        }

        if (sumArr1 > sumArr2) {
            return 1;
        } else if (sumArr1 < sumArr2){
            return -1;
        } else {
            return 0;
        }
    }

    if (arr1.length > arr2.length) {
        return 1;
    }
    if (arr1.length < arr2.length){
        return -1;
    }
}
