// collect information to complete a survey with your friend
// create an object named customer 
// add a key and value of firstName
// add a key and value of lastName
// add a key and value of emailName
// add a key and value of phone
// add a key and value of zipCode
// add a key and value of favoriteFlavors
// add a key and value of cupSize
// add a key and value of favoriteStore
// add a key and value of firstVisit
// modify any properties with the correct information from the customer
// delete zipCode and favoriteStore properties
// add some new properties: toppings, futureFlavors, todaysPurchaseCost
// print final updates to key and values in an array

const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 31,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false, 
}

customer["email"] = "Jak3Smith1992@email.com"
customer["phone"] = "3195551234"
customer["zipCode"] = "63132"
customer["favoriteFlavors"] = "coffee, strawberry, matcha"

delete customer["zipCode"]
delete customer["favoriteStore"] 

customer.toppings = "chocolate sprinkles, wafer straws, and gummy bears"
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = "5.32"

//object.keys

console.log(Object.keys(customer));

//object.values
console.log(Object.values(customer));

