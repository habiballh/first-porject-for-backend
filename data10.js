// add person function
const fs = require("fs");

const addperson = (id, fname, lname, city) => {
  const alldata = loadInfo();
  const duplicateddata = alldata.filter((obj) => {
    return obj.id === id;
  });
  if (duplicateddata.length == 0) {
    alldata.push({
      id: id,
      fname: fname,
      lname: lname,
      city: city,
    });
  } else console.log("Error : duplicate data");

  savealldata(alldata);
};
//loadinfo function

const loadInfo = () => {
  try {
    const alldatajson = fs.readFileSync("data10.json").toString();
    return JSON.parse(alldatajson);
  } catch {
    return [];
  }
};

//savealldata function

const savealldata = (alldata) => {
  const savealldatajson = JSON.stringify(alldata);
  fs.writeFileSync("data10.json", savealldatajson);
};

//////////////////////////////////////////////////////////////
//delete person function
const deleteData = (id) => {
  const alldata = loadInfo();
  const datatokeep = alldata.filter((obj) => {
    return obj.id !== id;
  });

  savealldata(datatokeep);
};

//////////////////////////////////////////////////////////////

const findItem = (id) => {
  const alldata = loadInfo();
  const itemneeded = alldata.find((obj) => {
    return obj.id === id;
  });
  if (itemneeded){
  console.log(itemneeded);}
  else
   console.log("Error : item not found");
};

//////////////////////////////////////////
//list 

 const listData = () => {
    const alldata = loadInfo()
    alldata.forEach((obj) => {
        console.log(obj.fname, obj.city);
    })
 }

module.exports = {
  addperson,
  deleteData,
  findItem,
  listData,
};
