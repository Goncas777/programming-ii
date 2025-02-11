try {
    function verifycoin(items, capacity) {
        items.sort((a, b) => b.weight - a.weight);
        let totalweight = 0;
        let values = [];
        let indexitemsused = [];
        let inicialcapacity = capacity;
        let totalvalue = 0;
        let count = 0;
        let set = new Set ();


        for (let item of items) {
            while (capacity >= item.weight) {
                capacity -= item.weight;
                totalweight += item.weight;
                values.push(item.value);
                indexitemsused.push(items.indexOf(item));
                totalvalue += item.value;
                count++;

                break;

            }

        }
        if (capacity != 0) {

            throw ("The total weight must match the capacity");
        }
        return [totalweight, values, indexitemsused, totalvalue, count];
    }


    const items = [
        { weight: 2, value: 10 },
        { weight: 3, value: 15 },
        { weight: 5, value: 40 }
    ];
    const capacity = 5;

    const result = verifycoin(items, capacity);


        const values = result[1];
        const index = result[2];

        if (result[4]==1){
            console.log(result[3], "(Item ", index[0], ") -> ", values[0], " = ", result[3], " with total of weight ", result[0]);
            
        } else if (result[4] < 3) {
            console.log(result[3], "(Items ", index[0], " and ", index[1], ") -> ", values[0], " + ", values[1], " = ", result[3], " with total of weight ", result[0]);

        } else {
            console.log("The maximum value that you can carry is ", result[3], "found in ", result[4] , "items");
        }

} catch (error) {
    console.log("Erro:", error)
}

