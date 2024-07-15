//first function for adding

const data10 = require("./data10.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "ta add an item ",
  builder: {
    fname: {
      describe: "this is the first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addperson(x.id, x.fname, x.lname, x.city);
    console.log("item added successfully");
  },
});

////////////////////////////////////////////////
////////////////////////////////////////////////

// second function for deleting

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler:(x)=>{
        data10.deleteData(x.id)
        console.log("item deleted successfully")
    }
})
/////////////////////////////////
/////////////////////////////////
// third function for finding specific items in the database by id 

yargs.command({
    command: "find",
    describe: " to find a specific item in the database",
    // builder: {
    //     id : {
    //         describe: "to read an item in the database",
    //         demandOption: true,
    //         type: "string"
    //     }
    // },
    handler:(argv)=>{
        console.log("item found successfully")
        data10.findItem(argv.id)
    }
})
///////////////////////////////////////////////////////
    yargs.command({
        command: "list",
        describe: "to list an item",
        handler: () => {
            data10.listData()
        }
    })
  yargs.parse()