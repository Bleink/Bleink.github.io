/*
	This function compares two inputs and returns the larges one
*/
function maxTwo(a,b){
    if(a>b) {
        console.log("max of [10,20] is : "+ a);
        return a;
    }
    else {
        console.log("max of [10,20] is : "+ b);
        return b;

    }
}
/*
	This function compares three inputs and returns the larges one
*/
function maxThree(a,b,c){
    let max=0;

    if(a>b){
        if(a>c) {
            console.log("max of [5,4,44] is :"+a);
            return a;
        }
        else if(b>c){
            {
                console.log("max of [5,4,44] is :"+b);
                return b;
            }
        }
        else if(b>c){
            console.log("max of [5,4,44] is :"+b);
            return b
        }

        else {
            console.log("max of [5,4,44] is :"+c);
            return c;
        }
    }
}

/*
	This function checks if an input is a vowel
*/
function isVowel(ch){
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch ==='o' || ch === 'u' )
        return true ;
    else
        return false;
}

/*
	This function sums the elements of an input array
*/
function sum(arr){
    let sum = 0;
    for( const i of arr){
        sum+=i;
    }
    console.log("Summation of [1,2,3,4,5] is:" + sum);

    return sum;
}
/*
	This function multiply the elements of an input array
*/
function multiply(arr){
    let mul = 1;
    for( const i of arr){
        mul*=i;
    }
    console.log("Product of [1,2,3,4] is: " + mul);

    return mul;
}
/*
	This function reverses a string input
*/
function stringReverse(input){
    let reversedInput = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedInput += input[i];
    }
    console.log("When 'blein' is reversed it become: "+reversedInput);

    return reversedInput;
}

/*
	This function returns the longes word from an array of word inputs
*/
function findLongestWord(arr){
    let longest = "";
    for( const i of arr){
        if(i.length>longest.length)
            longest = i;
    }
    console.log("The longest word from ['blein','yirdaw','girma','henok'] is: " + longest);
    return longest;
}
/*
	This function returns the list of longes words from an array of word inputs lengths greater than  a given length
*/
function  filterLongWords(arr,num){
    let longestList = [];
    for( const i of arr){
        if(num<i.length)
            longestList.push(i);
    }
    console.log("The words with length >4 from ['blein','yirdaw','girma','henok'] are: "+longestList);

    return longestList;
}
/*
	This function multiplies each element of an array by 10
*/
function multiplyByTen(){
    const a = [1,2,3,4,5];
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    })
    console.log("When each element of [1,2,3,4,5] mul by 10: "+b);
}
/*
	This function selects each element of an array with value of 3
*/
function ElementOf3(){
    const a = [1,5,3,5,5];

    const c = a.filter(function(elem, i, array){
        return elem === 3;
    });
    console.log("Elements of 3 from [1,5,3,5,5] are: "+c);
}
/*
	This function multiplies each element of an array each other
*/
function arrayProduct(){
    const a = [1,3,5,3,3];

    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    console.log("Element product of [1,3,5,3,3] is: "+d);
}

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

function areEqualArrays(array1, array2) {
    try{
        if(! Array.isArray(array1))   {return false;}
        if(! Array.isArray(array2))   {return false;}
        if(array1.length != array2.length){
            return false;
        }

        for(var i=0; i < array1.length; i++ ){
            if(array1[i] !== array2[i]){
                return false;
            }
        }
        return true;
    }catch(e) {
        return false;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, maxTwo(20, 10)));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxThree(5, 4, 44)));

console.log("Expected output of isVowel('o') is true  " + myFunctionTest(true, isVowel("o")));

console.log("Expected output of sum('[1,2,3,4,5]') is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));

console.log("Expected output of multiply('[1,2,3,4]') is 24  " + myFunctionTest(24, multiply([1,2,3,4])));

console.log("Expected output of reverse('blein') is 'nielb'  " + myFunctionTest('nielb', stringReverse('blein')));

console.log("Expected output of findLongestWord(['blein','yirdaw','girma','henok']) is 'yirdaw'" + myFunctionTest(3, findLongestWord(['blein','yirdaw','girma','henok'])));

console.log("Expected output of filterLongWords(['blein','yirdaw','girma','henok']) is '['blein','yirdaw','girma','henok']'  " + myFunctionTest(["blein","yirdaw","girma","henok"], filterLongWords(["blein","kidane","girma","henok"],4)));

console.log("Expected output of multiplyByTen('[1,2,3,4,5]') is '[10,20,30,40,50]'  " + myFunctionTest([10,20,30,40,50], multiplyByTen([1,2,3,4,5])));

console.log("Expected output of ElementOf5('[1,5,3,5,5]') is '[10,50,30,50,50]'  " + myFunctionTest([5,5,5], ElementOf3([1,5,3,5,5])));

console.log("Expected output of arrayProduct(' [1,3,5,3,3]') is 135  " + myFunctionTest(135, arrayProduct( [1,3,5,3,3])));
