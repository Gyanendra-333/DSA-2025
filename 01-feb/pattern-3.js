

function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        let pattern = 1
        let result = ""

        for (j = 0; j <= i; j++) {
            result +=
                pattern++

        }
        console.log(result)
    }
}
printPattern(5);