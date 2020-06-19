Math.randomDec = function (low, high) {
    return Math.random() * (high - low) + low;
}
Math.randomInt = function (low, high) {
    return Math.floor(Math.randomDec(low, high));
}
Math.randomElement = function (anArray) {
    return anArray[Math.randomInt(0, anArray.length)];
}
Math.randomColor = function () {
    return `rgb(${Math.randomInt(0, 255)}, ${Math.randomInt(0, 255)}, ${Math.randomInt(0, 255)})`;
}
// RETURNS THE FACTORIAL VALUE
Math.factorial = function (number) {
    let sum = 1;
    for (let i = 0; i < number - 1; i++) {
        sum *= (number - i);
    }
    return sum;
}
// FINDING THE MINIMUM VALUE FROM AN ARRAY
Math.minFind = function (anArray) {
    let min = anArray[0];
    min = min.AVALUE;
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[0].value < min) {
            min = anArray[0];
        }
    }
    return min;
};
// FINDING THE MAX VALUE FROM AN ARRAY
Math.maxFind = function (anArray) {
    let max = anArray[0];
    max = min.AVALUE;
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[0].value > max) {
            max = anArray[0];
        }
    }
    return max;
};
// FINDING THE AVERAGE VALUE FROM AN ARRAY
Math.aveFind = function (anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i].AVALUE;
    }
    return sum;
}
// BUBBLE SORT AN ARRAY OF ITEMS 
function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}
// QUICK SROTS AN ARRAY OF ITEMS
// NOTE: THE FUNCTION MUST BE CALLED WITH 3 ARGUMENTS
// NOTE: quick_sort(arr, 0, arr.length - 1);
function quick_sort(arr, left_index, right_index) {
    if (left_index < right_index) {
        let index = partition(arr, left_index, right_index);
        quick_sort(arr, left_index, index - 1);
        quick_sort(arr, index + 1, right_index);
    }
}
// WORKS WITH THE quick_sort FUNCTION
function partition(arr, left_index, right_index) {
    let compare = left_index;
    let pivotValue = arr[right_index];
    for (let i = left_index; i < right_index; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, compare);
            compare++;
        }
    }
    swap(arr, compare, right_index);
    return compare;
}
//BIINARY NUMBER SEARCH (RETURNS THE INDEX OF THE VALU SEARCHED FOR)
function binary_number_search(arr, value) {
    let high_index = arr.length - 1;
    let low_index = 0;
    let middle_index = 0
    while (low_index <= high_index) {
        middle_index = Math.floor((high_index + low_index) / 2)
        if (arr[middle_index] == value) {
            return middle_index;
        } else if (value > arr[middle_index]) {
            low_index = middle_index + 1;
        } else if (value < arr[middle_index]) {
            high_index = middle_index - 1;
        }
    }
    return -1;
}
// GETS AND ARRAY AND 2 INDICES AND SWAPS THEM 
// NOTE: a and b MUST BE AN INDEX
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Convert single timer units to double digits
// 1 => 01
function addZeroTimer(element) {
    if (element < 10) {
        return `0${element}`
    } else {
        return element;
    }
}

// getting URL variables
// ?var=___
function searchtheURL(search) {
    let url = new URL(window.location.href);
    return url.searchParams.get(search);
};

function removeDuplicates(arr) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        if (b.indexOf(arr[i]) == -1) {
            b.push(arr[i]);
        }
    }
    return b;
};

function make2DArray(cols, rows) {
    let arr = [];
    arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

function makeVector(x, y, z) {
    return { x: x, y: y, z: z };
};