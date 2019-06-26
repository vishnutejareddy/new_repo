const chalk= require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

// console.log(chalk.green("s!!"))

// const error = chalk.underline.red;
// const warning = chalk.keyword('orange');
 
// console.log(error('E'));
// console.log(warning('W'));

yargs.command({
    command: "add",
    describe: "adding to doc",
    builder:{
        title:{
            describe:"give title",
            demandOption: true,
            type:"string"
        },
        body:{
            describe:"give body",
            demandOption: true,
            type:"string"
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"remove content",
    builder:{
        title:{
            describe:"give title to remove",
            demandOption: true,
            type:"string"
        }},
    handler:function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list the notes",
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:"read",
    describe:"read the note",
    builder:{
        title:{
            describe:"title is given",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()