/**
 * Created by tenghuanhe on 2017/6/22.
 */
const Collection = require('./collect.js');
const Benchmark = require('benchmark');

const size = parseInt(process.argv.slice(2));
const arr = [];
for (let i = 0; i < size; i++) {
    arr.push(Math.random());
}

var square = function (x) {
    return x * x;
};

const collect = new Collection(arr);

var suite = new Benchmark.Suite;

suite.add('currentReduceSum', function () {
    collect.currentReduceSum(square);
}).add('anotherReduceSum', function () {
    collect.anotherReduceSum(square);
}).add('originIteratorSum', function () {
    collect.originIteratorSum(square);
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
