//1. Filter banned words
(function (){
    "user strict"


    String.prototype.bannedFilter = function (arr){
        let str = this.split(" ");
        let newArray = [...str];
        str.forEach(element => {
            for(let s=0;s<arr.length; s++){
                if(arr[s]===element){
                    newArray.splice(newArray.indexOf(element),1);
                }
            }
        });

        return newArray;
    }

//Mocha test

    const assert = chai.assert;

    describe('Mocha test for filtering banned words.', function(){

        const sentences = "This house is not nice!";
        const bannedWords = ['not'];
        it("Assertion passed: When we filter the sentence 'This house is not nice!' for the banned words:'not' the output is ['This', 'house', 'is', 'nice!']", function(){
            assert.equal( JSON.stringify(sentences.bannedFilter(bannedWords)),  JSON.stringify(["This", "house", "is", "nice!"]));
        });
    });
})();

//2. Bubble sort

(function(){
    "use strict"

    Array.prototype.bubbleSort = function(){
        for(let m=0;m<this.length;m++){
            for(let i=0;i<this.length-1;i++){
                if(this[i]>this[i+1]){
                    let temp = this[i];
                    this[i]=this[i+1];
                    this[i+1]=temp;
                }
            }}
        return this;
    }
})();


// Bubble sort test

const assert = chai.assert;

describe('Mocha test for bubble sort', function(){

    const unsorted = [6,4,0, 3,-2,1];
    it("Assertion passed: The bubble sort of [6,4,0, 3,-2,1] is [-2, 0, 1, 3, 4, 6]", function(){
        assert.equal( JSON.stringify(unsorted.bubbleSort()),  JSON.stringify([-2, 0, 1, 3, 4, 6]));
    });
});


// 3. Teacher Student

(function(){
    const Person = function() {};

    Person.prototype.initialize = function(name){
        this.name = name;
    }

    Person.prototype.describe = function(){
        return this.name + ", ";
    }

    var Teacher = function(){}
    Teacher.prototype = new Person();

    Teacher.prototype.teaches = function(course){
        console.log(this.name + " is now teaching " + course);
        return this.name + " is now teaching " + course;
    }

    const myTeacher = new Teacher();

    myTeacher.initialize("Dr. Keith Levi");
    myTeacher.teaches("WAP");

// Teacher's test

    const assert = chai.assert;

    describe('Mocha test for inheritance', function(){

        it("Assertion passed: WAP is taught by Dr. Keith Levi: ", function(){
            assert.equal( myTeacher.teaches("WAP") ,  "Dr. Keith Levi is now teaching WAP");
        });
    });

})()