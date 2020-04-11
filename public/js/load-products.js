export async function loadProducts() {
  const data = await fetch('/.netlify/functions/get-products')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const products = document.querySelector('.products');

  // TODO add markup to display products
  const pre = document.createElement('pre');
  pre.innerText = JSON.stringify(data, null, 2);

  products.appendChild(pre);
}
