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