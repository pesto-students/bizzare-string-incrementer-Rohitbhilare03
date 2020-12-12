// Start your implementation here

//check char is integer
function isNumeric(num) {
    return !isNaN(num)
}
//padding zero
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function getBizarreStringIncrementer(str) {
    let count = str.length;
    for (i = (str.length - 1); i >= 0; i--) {
        if (isNumeric(str[i])) {
            count = i; // counting number of integers from end of string
        } else {
            break; // break if found character 
        }
    }
    let number = str.substring(count, str.length); // getting number form end of string
    if (number === "") // if no number found assigns it to zero
        number = 0;
    number = pad(parseInt(number) + 1, (str.length - count))// padding 0 before number 
    console.log(str.substring(0, count).concat(String(number))) // concatinate final remaining string with added number
}

//Test Cases
getBizarreStringIncrementer('foo');//foo1
getBizarreStringIncrementer('foo23');//foo24
getBizarreStringIncrementer('foo0041');//foo0042
getBizarreStringIncrementer('foo9');//foo10
getBizarreStringIncrementer('foo099');//foo100
getBizarreStringIncrementer('f99oo');//f99oo1
getBizarreStringIncrementer('f99oo23');//f99oo24
getBizarreStringIncrementer('f99oo099');//f99oo100
getBizarreStringIncrementer('f99oo0099');//f99oo0100
