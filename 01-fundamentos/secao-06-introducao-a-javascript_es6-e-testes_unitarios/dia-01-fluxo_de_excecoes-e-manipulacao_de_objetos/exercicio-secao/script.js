const studant= {
  firstName: 'Pedro',
  age: 23,
  job: 'Programmer',
};

let newKey = 'lastName';
const lastName = 'Rener';

const newObject = (object, propety, value) => {
  object[propety] = value;
}

newObject(studant, newKey, lastName);

newKey = 'fullName';
const fullName = `${studant.firstName} ${studant.lastName}`;

newObject(studant, newKey, fullName);
console.log(studant);