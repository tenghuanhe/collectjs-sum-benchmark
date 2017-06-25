/**
 * Created by tenghuanhe on 2017/6/22.
 */
'use strict';

function Collection(collection) {
    this.items = collection || [];
}

Collection.prototype.currentReduceSum = function (key) {
    return this.items.reduce(function (accumulator, current) {
        if (key === undefined) {
            return accumulator + current;
        } else if (typeof key === 'function') {
            return accumulator + key(current);
        } else {
            return accumulator + current[key];
        }
    }, 0);
};

Collection.prototype.anotherReduceSum = function (key) {
    if (key === undefined) {
        return this.items.reduce(function (accumulator, current) {
            return accumulator + current;
        }, 0);
    } else if (typeof key === 'function') {
        return this.items.reduce(function (accumulator, current) {
            return accumulator + key(current);
        }, 0);
    } else {
        return this.items.reduce(function (accumulator, current) {
            return accumulator + current[key];
        }, 0);
    }
};

Collection.prototype.originIteratorSum = function (key) {
    let total = 0;

    if (typeof key === 'undefined') {
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i];
        }
    } else if (typeof key === 'function') {
        for (let i = 0; i < this.items.length; i++) {
            total += key(this.items[i]);
        }
    } else {
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i][key];
        }
    }

    return total;
};

module.exports = function (collection) {
    return new Collection(collection);
};