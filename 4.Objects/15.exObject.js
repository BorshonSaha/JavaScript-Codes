// create an address object with properties 
// street, city, zipCode and create a function 
// to show them with key value pairs

let address = {
    street: 'High Way',
    city: 'California',
    zipCode: 1200
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);