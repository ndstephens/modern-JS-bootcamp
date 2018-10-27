//* Closure and basic Currying

// instead of...
const findTip = (tipPercent, billAmount) => {
  return tipPercent * billAmount;
};
// we can create a more flexible function using closures and currying

const createTipper = (tipPercent) => {
  return (billAmount) => {
    return tipPercent * billAmount;
  };
};

const tip10 = createTipper(0.1);
const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);

console.log(tip10(100));
console.log(tip15(100));
console.log(tip20(100));
