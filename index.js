//######################################################################
//  Divisible By Finder with limits and ranges.
//  *read the code below and push commands accordingly
//  author: Bilal Amjad
//  gitHub: @thedevelop3r
//######################################################################
//
//

const readline = require('readline');
//---
class Calc {
    constructor() {
        console.log(`
######################################################################
  Divisible By Finder with limits and ranges.
  *read the code below and push commands accordingly
  author: Bilal Amjad
  gitHub: @thedevelop3r
######################################################################

        `)
        this.num1 = 0;
    }

    ThisNumber(num) {
        if (num === 0) throw "0 cannot be divisable!";
        this.num1 = num;
        return this;
    }

    DivisableBy(num) {
        if (num === 0) throw "0 cannot be divisable!";
        if (this.num1 % num == 0) {
            console.log(`${this.num1} is divisible by ${num}`);
            return this;
        } else {
            console.log(`${this.num1} is not divisible by ${num}`);
            return this;
        }
    }

    FindDivisble(num) {
        let current = 100;
        const divisbleBy = [];
        while (current >= 1) {
            if (num % current === 0) {
                for (let i = 0; ; i++) {
                    if (current * i === num) {
                        divisbleBy.push(`${current}  x  ${i} = ${num}`);
                        break;
                    }
                }
            }
            current--
        }
        if (divisbleBy.length === 0) return console.log(`${num} is not divisble by 1-10`)

        divisbleBy.map(item => {
            console.log(item);
        })
        return [...divisbleBy]
    }

    TryCatch(method) {
        try {
            return method();
        } catch (error) {
            console.error(error);
        }
    }
}

const CC = new Calc();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (input === "e" || input === "exit") {
        rl.close();
    } else {
        const num1 = Number(input);

        // const result = CC.ThisNumber(num1).DivisableBy(num2);
        console.log(`\n---------------\n`)
        const result = CC.FindDivisble(num1);
        console.log(`\n---------------\n`)
        // console.log(result);
    }
});

console.log("Type a number to find its divisibles and multiples!");
