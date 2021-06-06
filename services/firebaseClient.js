import firebase from "../middlewares/firebase";

const db = firebase.firestore();

//GET
const getProjects = async () => {
  let projects = [];
  const snapshot = await db.collection("projects").get();
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  return projects;
};

const getField = (id) => db.collection("projects").doc(id).get();
//GET ASYNC
const onGetTable = (callback) =>
  db.collection("projects").orderBy("name", "asc").onSnapshot(callback);

//POST
const saveTable = (project) => {
  db.collection("projects").doc().set({
    project,
  });
};

//PUT

const updateTable = (id, project) =>
  db.collection("projects").doc(id).update({
    project,
  });

//DELETE
const deleteTable = (id) => db.collection("table").doc(id).delete();

module.exports = {
  getProjects,
  getField,
  onGetTable,
  saveTable,
  updateTable,
  deleteTable,
};
