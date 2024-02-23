db.manager.insertOne({
    "name": "Alice",
    "age": 26,
    "email": "alice@abc.com"
  })   
  // (Insert  a new document into the collection)
  
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
// (Insert multiple documents into the collection)