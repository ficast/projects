export async function getCategories() {
  const data = fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((file) => file.json())
    .catch((erro) => console.log(erro));
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (categoryId) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  if (query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const data = fetch(url)
    .then((file) => file.json())
    .catch((erro) => console.log(erro));
  return data;
}
