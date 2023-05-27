const url = 'http://example.com/data'; // addres
fetch(url) 
  .then(response => response.json()) 
  .then(data => console.log(data)) 
  .catch(error => console.error(error));
