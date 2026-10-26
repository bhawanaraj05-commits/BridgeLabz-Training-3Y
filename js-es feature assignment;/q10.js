"use strict";

function outer() {
    console.log(count);

    var count = 5;

    function inner() {
        console.log(count);

        var count = 10;
    }

    inner();
}

outer();

// Arrow-function comparison
function outerArrowDemo() {
    console.log(count);

    var count = 5;

    const inner = () => {
        console.log(count);
    };

    inner();
}

outerArrowDemo();