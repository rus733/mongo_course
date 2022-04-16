 const {MongoClient} = require("mongodb")
 const client = new MongoClient ('mongodb+srv://as:ikl999@cluster0.ttvdb.mongodb.net/mongo?retryWrites=true&w=majority')
 //mongodb+srv://as:<password>@cluster0.8k7yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 //mongodb+srv://as:<password>@cluster0.ttvdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 const start = async () =>  {
    try {
         await client.connect()
         console.log('соединение установлено')
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name:'ulbi tv', age: 21})
        const user = await users.findOne({name: "ulbi tv"})
        console.log(user)
    } catch (e) {
        console.log(e)
    }
 }
 start()
