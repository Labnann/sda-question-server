const Questions = require("./Model/questions.model")
module.exports = {
    read: async (id)=>{
        const result = await Questions.find({"id":id});

        return result;
    },

    write: async (req)=>{
        console.log(req.body);
        const data = req.body;
        const count = await Questions.count();
        
        data.id = count+1;
        data.options = JSON.parse(data.options);
        console.log(data);
        new Questions(data).save();
        // new Questions({name: "test"}).save().catch(console.log);
    }
}