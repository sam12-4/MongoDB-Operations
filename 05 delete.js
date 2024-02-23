db.manager.deleteOne( { age: 20 } )
// deletes one document containing age 20

db.manager.deleteMany({})
// deletes all the documents

db.manager.deleteMany({ age : 20 })
// deletes all documents with the field 'age' equal to 20

//         Both returns a boolean either true or false

db.manager.remove({age : 23})
//  returns the deleted  documents or object, as it will remove all the documents that matches the specifies field