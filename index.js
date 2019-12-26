"use strict";

const fs = require("fs");
const binarySearchTree = require("@datastructures-js/binary-search-tree");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY num
 *  2. INTEGER k
 */

function minSum(num, k) {
  /*
    // naive sorting
    if (!num.length) return 0;
    for(let i = 0; i < k; ++i) {
        num.sort((a, b) => b - a);
        let newValue = Math.ceil(num[0]/2);
        let position = 0;
        while (num[position] > )
    }
    let sum = 0;
    num.forEach(el => sum += el);
    return sum; */

  // heap implementation
  const heap = binarySearchTree();
  let sum = 0;
  num.forEach(el => {
    sum += el;
    heap.insert(el);
  });

  for (let i = 0; i < k; ++i) {
    const topNode = heap.max();
    heap.remove(topNode.getKey());
    const oldValue = topNode.getKey();
    const newValue = Math.ceil(oldValue / 2);
    heap.insert(newValue);
    const diff = oldValue - newValue;
    if (diff === 0) break;
    sum -= diff;
  }

  return sum;
}

function main() {
  const numCount = parseInt(readLine().trim(), 10);

  let num = [];

  for (let i = 0; i < numCount; i++) {
    const numItem = parseInt(readLine().trim(), 10);
    num.push(numItem);
  }

  const k = parseInt(readLine().trim(), 10);

  const result = minSum(num, k);

  console.log(result + "\n");
}
