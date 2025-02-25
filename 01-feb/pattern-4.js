
// first method 
function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        let pattern = 1
        let result = ""
        for (let j = i; j <= i - 1; j++) {
            result +=
                pattern++
        }
        console.log(result);
    }
}
printPattern(5);



// second method 

let num = 6;
for (let i = 1; i <= num; i++) {
    let space = ""
    for (let j = 1; j <= i; j++) {
        space += j + " "
    }
    console.log(space)
}


