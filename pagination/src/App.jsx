import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(products,totalPages)

  const paginationHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage != page) {
      setPage(selectedPage)
    }
  }
  const getProductList = async () => {
    try {
      const products = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
      if (products.data) {
        setProducts(products.data.products)
        setTotalPages(Math.floor(products.data.total / 10))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  return (
    <>
      <div>
        {products.length > 0 && <div className='products'>
          {products.map((prod) => (
            <span className='products__single' key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
        }
        {
          products.length > 0 && <div className='pagination'>
            <span
              className={page > 1 ? "" : "pagination__disable"}
              onClick={() => paginationHandler(page - 1)}
            >
              ◀️
            </span>
            {
              [...Array(totalPages)].map((val, index) => (
                <span
                  className={page === index + 1 ? "pagination__selected" : ""}
                  key={index}
                  onClick={() => paginationHandler(index + 1)}
                >
                  {index + 1}
                </span>
              ))
            }
            <span
              className={page < totalPages ? "" : "pagination__disable"}
              onClick={() => paginationHandler(page + 1)}
            >
              ▶️
            </span>
          </div>
        }
      </div>
    </>
  )
}

export default App
