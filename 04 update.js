// Updates only the first matched or only one document
db.manager.updateOne(
    { name: "Asad" },
    {
      $set: { "name": "Asad Hussain", age: "20" },
      $currentDate: { lastModified: true }
    }
 )


 // Updates many matched document
 
    db.manager.updateMany(
        { "age": { $lt: 20 } },
        {
        $set: { age : "21" },
        $currentDate: { lastModified: true }
        }
    )