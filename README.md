# CodeWars
One of the most popular platform among developers, where people can train their skills through challenges of different difficulty levels.

I'm currently training myself in 2 different languages: **Javascript and Python** 

Here are the exercises I have completed so far.

## Javascript
 - **Multiply**: The code does not execute properly. Try to figure out why.
 - **Binary addiction**: Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string.
 - **Give me a diamond**: You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. 
The shape that will be returned from print method resembles a diamond, where the number provided as input represents the
number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure. Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).
- **Delete occurrences of an element if it occurs more than n times**: Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
- **Sort the odd**: You have an array of numbers. Your task is to sort ascending odd numbers but even numbers must be on their places. Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
- **Scramblies**: Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
- **Maximum subarray sum**: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead. Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
- **Direction reductions**: Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side). The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
- **Memoized fibonacci**: function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers. For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly. The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number. Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function?
- **Where my anagrams at?**: Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
- **Base conversion**: In this kata you have to implement a base converter, which converts between arbitrary bases / alphabets. Here are some pre-defined alphabets:
var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.
- **Strings mix**: Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
- **String repeat**: Write a function called repeatStr which repeats the given string string exactly n times.
- **Playing with digits**: Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n
- **Simple pig latin**: Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
- **Descending order**: Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.
- **Calculate average**: Write function avg which calculates average of numbers in given list.
- **Chain me**: Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).
- **Father and son**: Every uppercase letter is Father, The corresponding lowercase letters is the Son.
Give you a string ```s```, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.
- **House of cards**: You want to build a standard house of cards, but you don't know how many cards you will need. Write a program which will count the minimal number of cards according to the number of floors you want to have
- **Bingo card**: Can you help the association by writing a method to create a random Bingo card?
- **Pete the baker**: Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
- **Square matrix multiplication**: Write a function that accepts two square (nxn) matrices (two dimensional arrays), and returns the product of the two. Only square matrices will be passed in.
- **Hard time bomb**: A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
- **Explosive sum**: In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition.
- **Keep up the hoop**: Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
- **Complete the pattern**: Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
- **Autocomplete, YAY**: The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.
- **Breaking chocolate problem**: Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
- **Multiplication tables**: Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
- **Paperboy**: Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.
- **Stringy strings**: write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.the string should start with a 1.a string with size 6 should return :'101010'.with size 4 should return : '1010'.with size 12 should return : '101010101010'.The size will always be positive and will only use whole numbers.
- **If else and ternary operator**: Complete function saleHotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
- **Katastrophe**: Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.
- **Roman numeral encoder**: Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
- **Sum of intervals**: Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
- **Is this a triangle**: Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
- **Build a pile of cubes**: Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
- **Rot13**: Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation"
- **Invisible cubes**: Imagine there's a big cube consisting of n^3 small cubes. Calculate, how many small cubes are not visible from outside.
- **Remove the noise from the machine**: We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.
Your mission is to write a function which removes this noise from the message.
- **Grouped by commas**: Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.
- **Weight for weights**: My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
- **Adding big numbers**: Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
- **Don't drink the water**: Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.
- **Debug the function**: Debug the functions
- **Driving school**: Every month, a random number of students take the driving test at Fast & Furious(F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed,rounded to the nearest integer.
Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'. 
- **Selective array reversing**: Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.
- **Find the murderer**: An important person was murdered, he said the name of the murderer before he died, but because the sound was so low it was difficult to identify.
Given two parameters: ```said```, a string, what the person said before death;```said``` starts with the first letter of the name, each "~" represents an uncertain letter, the length of the said does not mean the length of the name, because he might have died before he could say the full name of the murderer. ```suspects```, a string array, name list of all suspects.
Please refer to ```said```, find the murderer from the ```suspects```.
Result will be a string. If not found, should return ```""```, if more than one suspect is found, return the name of all, separated by ','.
- **DNA to RNA**: Create a funciton which translates a given DNA string into RNA.
- **Permutations**: In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
- **Human readable time**: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
- **Guess the gifts**: You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)
You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}
Your task is to create a list of all possible presents you might get.
- **Ten minute walk**: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
- **Number climber**: For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.
- **Calculating with functions**: Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
- **Suzuki needs help**: Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.
You will be given a string of student names. Sort them and return a list of names in descending order.


## Python
- **A needle in the Haystack**: Write a function findNeedle() that takes an array full of junk but containing one "needle"
- **Power of 2**: Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
- **Replace all items**: Write function replaceAll (Python: replace_all) that will replace all occuriencies of an item with another.
- **Bit counting**: Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
- **Keep Hydrated**: You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
- **Making six toast**: Make a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
- **Duck duck goose**: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player. 
- **Grasshopper**: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
- **Sum of two lowest positive integers**: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
- **The dropwhile function**: implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.
- **Discore the original price**: We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places. We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
- **Two sum**: Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
- **Count all the sheep on farm in the heights of New Zealand**: Every week (Friday and Saturday night), the farmer and his son count amount of sheep returned to the yard of their farm.They count sheep on Friday night, the same goes for Saturday (suppose that sheep returned on Friday are not feeding back on hills on Saturday).As sheep are not coming in one flock, you will be given two arrays (one for each night) representing number of sheep as they were returning to the yard during the evenings (entries are positive ints, higher than zero).Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.
- **No ifs no buts**: Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.
- **is even?**: If the numbers is even return true. If it's odd, return false.
- **Flatten and sort array**: Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
- **The shell game**: Given the shell that the ball starts under, and list of swaps, return the location of the ball at the end. All shells are indexed by the position they are in at the time
- **The book of mormons**: Create a function Mormons(startingNumber, reach, target) that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.All model inputs are valid positive integers.
- **Same array?**: Given two arrays, the purpose of this Kata is to check if these two arrays are the same. "The same" in this Kata means the two arrays contains arrays of 2 numbers which are same and not necessarily sorted the same way.
- **Dubstep**: Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
- **Sum of digits**: A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
- **IQ test**: Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
- **Rank vector**: Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values
- **Truncate a string**: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
- **Unicode total**: You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.
- **Unexpecte parsing**: This code is buggy. Can you fix it?
- **Triple trouble**: Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
- **Watermelon**: Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.
- **Transportation on vacation**: Write a code that gives out the total amount for different days(d).
- **Credit card checker**: Write a function that checks whether a credit card number is correct or not, using the Luhn algorithm.
- **Luck check**: write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.
- **Power of 4**: Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well. (In C# Integer means all integer Types like Int16,Int32,.....)
- **Least common multiple**: Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.
- **Arabic String**: You must create a method that can convert a string from any format into CamelCase. This must support symbols too.


