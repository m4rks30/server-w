const url = 'http://example.com/data'; // addres

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchData().catch(error => console.error(error));
