const myObj = {
  name: 'Link',
  age: 20,
};

localStorage.setItem('myData', JSON.stringify(myObj));

const recoveredObject = JSON.parse(localStorage.getItem('myData'));
