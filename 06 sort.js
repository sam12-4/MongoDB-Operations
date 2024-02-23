db.manager.insertMany([{
    "name": "Sameer",
    "age": 19,
    "email": "sameerh64h@gmail.com"
  },{
    "name": "Alice",
    "age": 26,
    "email": "alice@abc.com"
  },{
    "name": "Alian",
    "age": 23,
    "email": "alian@abc.com"
  },{
    "name": "Asad",
    "age": 29,
    "email": "asad@abc.com"
  }
])
db.manager.find()
//  Fetch/finds all Document
db.manager.find({"age": {$gt: 25}}) 
// Find documents


//           S  O   R   T   I   N   G
db.manager.find().sort({age : 1})
// returns all the documents  sorted by age in ascending order

db.manager.find().limit(1)
// Returns only first document from the collection
db.manager.find().limit(2)
// Returns only first two document from the collection

db.manager.find().skip(1)
// Skips the first document and returns from second document to the end of the collection

// For Pagination
let no  
db.manager.find().skip((pageNo-1)*no).limit(no)

