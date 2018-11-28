/**
 * @param {string} str
 * @returns {string}
 */
str = "the sky is blue"

var reverseWords = function(str) {
    const arr = [...str];
    let temp = ''
    let startIndex = arr.length;
    let setIndex = false;
    for (let index = arr.length;index--;) {
        if (arr[index] === ' ') {
        console.log(`$${index} ${startIndex}`);
             temp += `${arr.slice(index, startIndex)} `;
             setIndex = true
        } else {
            if (setIndex) {
                startIndex = index
            }
        } 

        if (index === 1) {
            temp += `${arr.slice(index, startIndex)}` 
            break;
        }
    } 
    console.log(temp);
};

reverseWords(str);