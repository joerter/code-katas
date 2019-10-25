import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { asciiToGrid } from "../../game-of-life/ascii-to-grid";
import { Grid } from "../../game-of-life/grid";
import { evolveGrid } from "../../game-of-life/evolve-grid";
import { gridToAscii } from "../../game-of-life/grid-to-ascii";

let grid: Grid;
let evolvedGrid: Grid;

Given("I have supplied the following {string}", function(generation, docString) {
    grid = asciiToGrid(docString);
});

When("I tell the world to evolve once", function() {
    evolvedGrid = evolveGrid(grid);
});

Then("the next {string} should be", function(generation, docString) {
    expect(gridToAscii(evolvedGrid)).equal(docString);
});
