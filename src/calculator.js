#!/usr/bin/env node

// Calculator CLI (supports basic arithmetic operations)
// Supported operations:
//  - add / +        : addition
//  - subtract / -   : subtraction
//  - multiply / *   : multiplication
//  - divide / /     : division

function printHelp() {
  console.log(`Usage: node src/calculator.js <operation> <num1> <num2>\n
Operations:\n  add, +, subtract, -, multiply, *, divide, /\n
Examples:\n  node src/calculator.js add 2 3    # 5\n  node src/calculator.js divide 8 2 # 4\n`);
}

function parseNumber(s) {
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function main(argv) {
  if (argv.length < 3) {
    printHelp();
    process.exit(1);
  }

  const op = argv[0].toLowerCase();
  if (op === '--help' || op === '-h') {
    printHelp();
    process.exit(0);
  }

  const a = parseNumber(argv[1]);
  const b = parseNumber(argv[2]);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both operands must be valid numbers');
    process.exit(2);
  }

  let result;
  switch (op) {
    case 'add':
    case '+':
      result = a + b;
      break;
    case 'subtract':
    case '-':
      result = a - b;
      break;
    case 'multiply':
    case '*':
    case 'x':
    case '×':
      result = a * b;
      break;
    case 'divide':
    case '/':
    case '÷':
      if (b === 0) {
        console.error('Error: division by zero');
        process.exit(3);
      }
      result = a / b;
      break;
    default:
      console.error(`Error: unknown operation '${op}'`);
      printHelp();
      process.exit(4);
  }

  // Print the result
  console.log(result);
}

// Run with arguments after the script name

// Export arithmetic functions for testing
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { if (b === 0) { throw new Error('division by zero'); } return a / b; }

module.exports = { add, subtract, multiply, divide, parseNumber, printHelp, main };

if (require.main === module) {
  main(process.argv.slice(2));
}
