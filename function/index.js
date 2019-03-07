module.exports = {
    fourNumberSum: (array=[],total) => {

        let hash = {};
        let result = [];

        for (i = 0; i < array.length; i++) {
            for (j = i + 1; j < array.length; j++) {
                const sum1 = array[i]+array[j];
                const sum2 = total - sum1;

                if (hash[sum2]) {
                    for (m = 0; m < hash[sum2].length; m ++) {
                        var array_4 = hash[sum2][m].concat(array[i],array[j]);
                        result.push(array_4);
                    }
                }
            }

            for (k = 0; k < i; k++) {
                const sum3 = array[i] + array[k];
                if (hash[sum3]) {
                    hash[sum3].push([array[i],array[k]]);
                } else {
                    hash[sum3] = [];
                    hash[sum3].push([array[i],array[k]]);
                }
            }

        }

        return result;
    },
    largestRange: (array=[]) => {
        
    }
}