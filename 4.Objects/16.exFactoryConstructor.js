// write a Factory and a Constructor function to
// initialize an address object

// Factory function
let address = createAddress('a', 'b', 'c');

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};

console.log(address);

// Constructor function
const address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(address2);