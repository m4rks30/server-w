const url = 'http://example.com/data'; //addres  
const username = 'myusername';
const password = 'mypassword';

fetch(`${url}?username=${username}&password=${password}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
