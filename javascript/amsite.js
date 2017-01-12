// AsciiMorph - made by Tim Holman, tholman.com

// Set up Initial Morpher
var morphElement = document.querySelectorAll('pre')[0];
AsciiMorph(morphElement, {x: 51,y: 28});
AsciiMorph.render(asciis[0]);

var currentlyRendered = 0;
