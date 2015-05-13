//--------------------------------------------------------------------------

//                  hashes, arrays, and conditionals
//                           the iron yard
//                        homework exercises

//--------------------------------------------------------------------------



//PALINDROME:create a function to determine if something is a palindrome
    function isPalindrome(word){
        var revWord=word.split('').reverse('').join('');
        console.log('compare '  + word + ' to ' + revWord);

        if (word===revWord){
            console.log('Hooray! You found a palindrome');
            };
            else {
            console.log('Nope, this word is not a palindrome!');
            };
    }

    isPalindrome('kayak');


//AVERAGE:Write a function which takes an array of numbers and returns the average.

    function sum(numbers){{
        var total = 0;
        for (var i = 0; i < numbers.length; ++i){
            total += numbers[i];
        }
        return total/numbers.length;
        }
    }

    sum([12,18,44,1971,71,68]);


//STRING TO HASH:Write a function makeUser which takes a name (a string) and returns a hash containing a 'firstName' and a 'lastName' key/value.

    function makeUser(name) {
      var firstLast=name.split(' ');
      return {
        firstName:firstLast[0],
        lastName:firstLast[1]
      };
    }

    makeUser('Patti MacKay');


//CSV SUMMATION:Write a function that takes a string containing a comma-separated list of numbers and returns the sum of those numbers.

    function csvString(str){
        var numArray=str.split(',').map(function(str){return Number(str);});
        var sum=0;
        for(var i=0;i<numArray.length;++i){
          sum+=numArray[i];
        };
        return sum;
    }

    csvString('12,24,14,50');


//COMPUTE FACTORIAL: Write a function that computes the factorial of a number.

    function factorial(num){
        var value=1;
        for (var i = 2; i <= num; ++i){
            value *=i;};
        return value;
    }

    factorial(5);


//LONGEST WORD:Return the longest word in a string.

    function longestWord(str) {
      var words=str.split(' ').sort(function(a,b){return b.length-a.length;});
      return (words[0]);
    }

    longestWord('Implement a function that returns the longest word in a string. If there is a tie, return the first word.');
