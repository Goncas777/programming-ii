let a = [32,4,200,5];

function equal(a) {

    let seen = new Set();

    for (let num of a) {

        if (seen.has(num)) {
            return console.error("true");
        }

        seen.add(num);
    }
    returnconsole.error('false');
}

equal(a);