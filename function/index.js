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
        let hash = {};
        for (var i = 0; i < array.length; i++) {
            hash[array[i]] = 1;
        }

        let finishArray = [];
        for (var i = 0; i < array.length; i++) {
            let temp = []
            for (var j = array[i]; j > Number.MIN_SAFE_INTEGER; j--) {
                if (hash[j]) {
                    temp.push(j);
                } else {
                    break;
                }
            }

            for (var j = array[i]; j < Number.MAX_SAFE_INTEGER; j++) {
                if (hash[j]) {
                    temp.push(j);
                } else {
                    break;
                }
            }

            if (temp.length > finishArray.length) {
                finishArray = temp.concat([]);
            }
        }
        finishArray.sort((a,b) => a-b);
        
        return [finishArray[0],finishArray[finishArray.length-1]];
    },

    maxSumIncreasingSubsequence: (array=[]) => {
        let hash = {};

        // array.sort((a,b) => a-b);

        for (var i = 0; i < array.length; i++) {
            hash[array[i]] = {
                sum: array[i],
                seq: [array[i]]
            }
        }

        var placeholder = {
            num: array[0],
            sum: array[0]
        }

        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < i; j++) {
                if (array[j] < array[i] && hash[array[i]].sum < hash[array[j]].sum + array[i]) {
                    hash[array[i]].sum = hash[array[j]].sum + array[i];
                    hash[array[i]].seq = hash[array[j]].seq.concat([array[i]])
                }

                if (hash[array[i]].sum > placeholder.sum) {
                    placeholder.num = array[i];
                    placeholder.sum = hash[array[i]].sum;
                }
            }
        }

        return hash[placeholder.num];
    },

    longestCommonSubsequence: (str1="",str2="") => {
        if (str1.length === 0 || str2.length === 0) {
            return []
        }

        let _str1 = str1.split("");
        let _str2 = str2.split("");

        let table = [];

        for (var i = 0; i <= _str2.length; i++) {
            var row = (new Array(_str1.length+1));
            table.push(row);
        }

        console.log(table);

        for (var i = 0; i < _str2.length; i++) {
            for (var j = 0; j < _str1.length; j++) {
                if (i === 0 || j === 0) {
                    table[i][j] = 0;
                } else if (_str1[j-1] === _str2[i-1]) {
                    table[i][j] = table[i-1][j-1] + 1;
                } else {
                    table[i][j] = Math.max(table[i][j-1],table[i-1][j]);
                }
            }
        }

        
        

        // retrace
        var i = _str2.length;
        var j = _str1.length;
        let res = []
        while (i >= 0 && j >= 0) {
            if (table[i][j] === table[i-1][j]) {
                i = i - 1;
            } else if (table[i][j] === table[i][j-1]) {
                j = j - 1;
            } else {
                i = i - 1;
                j = j - 1;
                res.push(str1[i]);
            }
        }
        return res.reverse();
    }
}