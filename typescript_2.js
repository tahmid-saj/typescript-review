var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favoriteQuote = "i'm not old, I'm only ".concat(age);
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'john'
};
var nulll = undefined;
var no = null;
var basket;
basket = ['basket', 5];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
var whatever = 'foo';
whatever = basket;
var sing = function () {
    console.log('no return');
};
// never - either never returns or a variable returned is never true - may throw error
var error = function () {
    throw Error("oops");
};
