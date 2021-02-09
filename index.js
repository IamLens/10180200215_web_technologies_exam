
const express = require ('express');
var mongoose = require ('mongoose');
const gatherComplaint = require ('./models/gatherComplaint');

const index = express();
index.use(express.static(__dirname + '/views'));

index.use(express.json());
index.use(express.urlencoded({ extended: false}));

index.set('view engine', 'ejs');

index.get('/',(req, res)=>{
    res.render('index.ejs')
})

index.get('/index',(req, res)=>{
    res.render('index.ejs')
})


index.get('/complaints',(req, res)=>{
    res.render('complaints.ejs')
})

index.get('/data', (req, res) => {

    gatherComplaint.find({}, function(err, complaints) {
        res.render('data.ejs', {
            complaintData: complaints
        })
    })
    
});

index.post('/complaints', (req, res)=>{
    const complaints = gatherComplaint({
    firstname : req.body.fname,
    lastname : req.body.lname,
    email : req.body.email,
    complaints : req.body.subject
    })

    complaints.save().then((document) => {
        console.log(document);
    });

    res.render('complaints.ejs', {});
});


mongoose.connect('mongodb+srv://acity:webtech@exams.xrbci.mongodb.net/likem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
        console.log('server started');
    }).catch(() => {
        console.log('error');
})
index.listen(8080)


