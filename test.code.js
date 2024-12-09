const fs = require('fs');
const assert = require('assert');

// Import the implementation
eval(fs.readFileSync('code.js') + '');

// Test cases
const graph1 = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
};
assert.strictEqual(hasCycle(graph1), false);

const graph2 = {
    'A': ['B', 'C'],
    'B': ['A', 'C'],
    'C': ['A', 'B']
};
assert.strictEqual(hasCycle(graph2), true);

const graph3 = {
    'A': ['B'],
    'B': ['A', 'C', 'D'],
    'C': ['B', 'D'],
    'D': ['B', 'C']
};
assert.strictEqual(hasCycle(graph3), true);

const graph4 = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B', 'D'],
    'D': ['C']
};
assert.strictEqual(hasCycle(graph4), false);

const graph5 = {
    'A': ['B'],
    'B': ['A'],
    'C': ['D'],
    'D': ['C']
};
assert.strictEqual(hasCycle(graph5), false);

const graph6 = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C', 'E'],
    'E': ['D']
};
assert.strictEqual(hasCycle(graph6), true);

console.log("All tests passed!");
