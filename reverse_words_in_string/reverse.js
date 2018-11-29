/**
 * @param {string} str
 * @returns {string}
 */
str = "the sky is blue";

var reverseWords = function(str) {
    const arr = [...str];
    let temp = [];
    let startIndex = 0;
    let endIndex = arr.length;
    for (let index = arr.length;index--;) {
        if (arr[index] === ' ') {
             startIndex = index + 1;
             console.log(`${startIndex} ${endIndex}`);
             temp.push(arr.slice(startIndex, endIndex) + ' ');
             endIndex = index 
             startIndex = index - 1;
        } 

        if (index === 0) {
            startIndex = index;
             console.log(`${startIndex} ${endIndex}`);
             temp.push(arr.slice(startIndex, endIndex) + ' ');
        }
    }
    console.log(Object.entries(temp));
    const reversed = temp.join(',');
    console.log(reversed);
};

reverseWords(str);