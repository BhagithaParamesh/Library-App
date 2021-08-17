const mongoose= require('mongoose');//accessing mongoos package

mongoose.connect('mongourl',
{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});// connection string

//console.log(mongoose.connection.readyState)

const Schema = mongoose.Schema;//schema definition
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
     //imag will be saved with fil
},{strict:false});

//model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
