function nextNumber(num){
    
    // Convert the number into string
    let numStr = num.toString();

    // Obtain the number of digits
    let digits = numStr.length;

    // Get the first digit
    let firstIndex = digits-1;
    let firstDigit = numStr[firstIndex];

    // Initialize smaller digit
    let smallerDigit = firstDigit;
    
    // Find until the first smaller digit is found
    let curIndex = firstIndex;
    while (curIndex > 0){
        curIndex--;
        curDigit = numStr[curIndex];
        
        // If a smaller digit is found, then swap it with
        // the first digit, then sort the numbers after it
        // in an ascending order (from left to right)
        if(smallerDigit > curDigit){
            return +[
                        numStr.substring(0,curIndex),
                        firstDigit,
                        numStr.substring(curIndex,digits-1)
                                    .split('')
                                    .sort()
                                    .join('')
                    ].join('');
        }
       
    }

    return -1;
}

module.exports = { nextNumber };