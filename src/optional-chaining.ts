const obj = JSON.parse(JSON.stringify({
    name: 'Raj',
    age: 24,
    add: {
        street: 'KPHB',
        city: 'Hyderabad',
        country: {
           state: 'Telangana' 
        }
    } 
}))

// Previously we have to check these way
if(obj && obj.add && obj.add.country) {
    console.log(obj.add.country)
}

// This is Optional Chaining
// by usig optional chaining we can easily check conditions with ?
if(obj.add?.country?.state) {
    console.log(obj.add.country.state);
}