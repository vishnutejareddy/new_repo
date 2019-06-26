const fs = require("fs")
const chalk = require("chalk")

const addNotes = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=>note.title === title)
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title !== title)
    saveNotes(duplicateNotes)
    
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse("note titles are:"))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title===title)
    if(note){
        console.log(chalk.bold(note.title))
        console.log(note.body)
    }
    else{console.log(chalk.red.inverse("error!!"))}

}

const saveNotes = (notes)=>{
    const notes1 = JSON.stringify(notes)
    fs.writeFileSync("notes.json",notes1)

}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const datajson = dataBuffer.toString()
        return JSON.parse(datajson)
    }catch(e){return []}
}

module.exports={
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
