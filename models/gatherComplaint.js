

var mongoose=require('mongoose')

const Schema= mongoose.Schema
const schemaComplaint =new Schema ({

    firstname: {type : String},
    lastname: {type : String},
    email: {type : String},
    complaints: {type : String}
});
const gatherComplaint=mongoose.model('gatherComplaint', schemaComplaint);
module.exports= gatherComplaint;