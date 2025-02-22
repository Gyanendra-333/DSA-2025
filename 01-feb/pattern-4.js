

function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        let pattern = 1
        let result = ""
        for (let j = 0; j <= i - 1; j++) {
            result +=
                pattern++
        }
        console.log(result);
    }
}
printPattern(5);



