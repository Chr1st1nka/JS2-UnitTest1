function sum(n1, n2) {
    return n1 + n2;
}

// ['a', 'bc'] => ['A', 'BC']
function allUpper(arr) {
    return arr.map(el => el.toUpperCase());
}

console.log(sum(1, 1))

module.exports = { sum, allUpper } ;


