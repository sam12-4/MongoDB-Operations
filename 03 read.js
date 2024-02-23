db.manager.find()
//  Fetch/finds all Document

db.manager.find({name : "Sameer"})
//   Find a document by the name Sameer

db.manager.find({ name: { $in: [ "Sameer", "Asad" ] } })
//  Find documents where the name is either Sameer or Asad i.e it will find all the names of Sameer and  Asad in the collection


// And Operator
db.manager.find({ name: "Asad", age: { $lt: 30 } })

//OR
db.manager.find( { $or: [ { name: "Asad" }, { age: { $lt: 30 } } ] } )

// Find One document only gives the output in the form of object not in the form of array
db.manager.findOne({ name: { $in: [ "Sameer", "Asad" ] } })