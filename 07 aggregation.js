db.orders.aggregate([
    //  Stage 1: Filter pizza order documents by pizza size
    {
        $match : {size : "medium"}
    }, 
    //  Stage 2: Group Remaining documents by pizza name and calculate quantity
    {
        $group : { _id : "$name", totalQuantity: {$sum : "quantity"}} 
    }
])