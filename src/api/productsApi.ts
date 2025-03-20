import axios from "axios"

const API_URL = "https://test2.sionic.ru/api/Products"

const fetchProductsApi = (
  range: [number, number] = [0, 15],
  filter: {} = {}
) => {
  const response = axios.get(API_URL, {
    params: {
      range: JSON.stringify(range),
      filter: JSON.stringify(filter),
    },
  })

  return response
}

export { fetchProductsApi }
