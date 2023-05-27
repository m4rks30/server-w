const url = 'http://example.com/data'; // addres
const token = 'mytoken';

fetch(url, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
