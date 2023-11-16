class restaurantManager {
    //part 1
    // Array of objects
    restaurantList = [
        {
            name: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi',
        },
        {
            name: 'Dominos',
            address: 'Savita Vihar',
            city: 'Delhi',
        },
        {
            name: 'Burger king',
            address: 'Civil lines',
            city: 'Pune',
        },
        {
            name: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai',
        },
    ];

    //part 2
    //function 
    printAllRestaurantNames = () => {
        return this.restaurantList.map((data) => {
            return data.name;
        });
    };

    //part 3
    //function
    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter((data) => {
            return (data.city == cityName);
        });
    };
}

let restObj = new restaurantManager

console.log(restObj.printAllRestaurantNames());

console.log(restObj.filterRestaurantByCity("Delhi"));


var orderData = { 'Below 500': 20, '500-1000': 29, '1000-1500': 30, '1500-2000': 44, 'Above 2000': 76 }; 

let out=0;

for(key in orderData) {
    out += orderData[key];
}

console.log("Total number of orders placed = " + out);

let count=0;

for(key in orderData) {
    count += 1;
}

console.log("Total number of order proportions = " + count);

function getPercent(orderData) {

    let total=0;

        for(key in orderData) {
            total += orderData[key];
        }
    let output= [];
    for (key in orderData) {
       let percentValue = ((orderData[key] / total) * 100).toFixed(2);
        let myObj = {};
        myObj.percentage = `${percentValue}%`;
        output.push(myObj);
    }
    

    

    return output;
}

console.log(getPercent(orderData));     