const Work = require('../workSchema')


function addWork(req, res){
    //console.log('Test')
    //console.log(req.body)
    let work = new Work()
    work.save()
    .then(() =>res.send({status: "Add Work sucessfully"}) )
    .catch(() => res.send );
    res.send({status: "Add Work sucessfully"})
}

function Update(req, res){
    Work.updateOne({ _id: req.body.id }, req.body)
        .then (() => res.send("Update sucessfully"))
        .catch(() => res.send("Update eror"));
}

function Delete (req , res){
    Work.updateOne({ _id: req.body.id  },  {status: 3})
        .then (() => res.send("Delete sucessfully"))
        .catch(() => res.send("Delete eror"));
}

async function SearchName(req , res ){
    Work.find({name: req.query.name})
        .then(works => {
            works = works.map(work => work.toObject());
            res.send(works)
        })
        .catch(() =>
            res.send({err: "Search error"})
        )
    
    
}

function SearchStatus(req, res){
     Work.find({status: req.query.status})
     .then(works => {
        works = works.map(work => work.toObject())
        res.send(works)
    })
    .catch(()=>
        res.send({err: "Search error"})
    );
    
}

module.exports = {addWork, Update, Delete , SearchName, SearchStatus}