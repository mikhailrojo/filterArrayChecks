### 2 Loops iterations tests in Javascript ###

Here I iterate through 2 arrays with 8 different variations of Javascript loops.
To make benchmark tests in the run time I generate
- 1000 random arrays like [{id: 879},{id: 1},{id: 55}]
- 1000 random arrays like [0....1000]

And iterate 1000 times and measure time to find matching and return the array of objects, whose ids correspond to the numbers in the second array.

Example
```Javascript
var a = [1,2,3,4,5,1,5,5,5];
var b = [{id: 1},{id: 5},{id: 122},{id: 12121},{id: 4}]

/// Will return [{id: 1},{id: 5},{id: 4}];

```
These tests have been accomplished in node and browser environment.

As we have to loop thought 2 arrays, each method name comprises of 2 iterations
For example forFor function is 2 simple for loops one inside another with length caching.
#### 8 functions: ####

1. forFor
2. whileFor
3. whileWhile
4. shiftFor
5. forEach
6. filterFor
7. filterSome
8. forInLoop

Results:

* Node.js Mac
* ![Node](https://github.com/mikhailrojo/filterArrayChecks/blob/master/webtest/img/node.png "Node.js")
* Chrome Mac
* ![Node](https://github.com/mikhailrojo/filterArrayChecks/blob/master/webtest/img/chrome.png "Node.js")
* Firefox Mac
* ![Node](https://github.com/mikhailrojo/filterArrayChecks/blob/master/webtest/img/firefox.png "Node.js")
* Opera Mac
* ![Node](https://github.com/mikhailrojo/filterArrayChecks/blob/master/webtest/img/opera.png "Node.js")
* SAfari Mac
* ![Node](https://github.com/mikhailrojo/filterArrayChecks/blob/master/webtest/img/safari.png "Node.js")
