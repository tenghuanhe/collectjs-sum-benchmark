# collect.js sum benchmark

### Run test

```
npm run test1
npm run test2
npm run test3
```

### Test results

Test results with different size of `Collection` (1000 ~ 10000000) show that `sum` using `iterator` is 3x ~ 5x times faster than using `reduce`.

test1(`key` is `undefined`)
```
currentReduceSum x 1.33 ops/sec ±23.86% (8 runs sampled)
anotherReduceSum x 1.69 ops/sec ±11.77% (9 runs sampled)
originIteratorSum x 4.82 ops/sec ±3.21% (16 runs sampled)
Fastest is originIteratorSum
```

test2(`key` is `function square(x) { return x * x; }`)
```
currentReduceSum x 1.10 ops/sec ±31.38% (8 runs sampled)
anotherReduceSum x 1.48 ops/sec ±6.51% (8 runs sampled)
originIteratorSum x 4.65 ops/sec ±4.28% (16 runs sampled)
Fastest is originIteratorSum
```

test3(`key` is object attribute)
```
currentReduceSum x 1.22 ops/sec ±35.30% (8 runs sampled)
anotherReduceSum x 1.72 ops/sec ±9.24% (9 runs sampled)
originIteratorSum x 3.95 ops/sec ±3.15% (14 runs sampled)
Fastest is originIteratorSum
```