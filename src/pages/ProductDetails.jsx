import '../scssPages/productDetails.scss'
import React from 'react'
// import { FaCartPlus } from 'react-icons/fa'
import useDoc from '../hooks/useDocs'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'


const ProductDetails = () => {

  const { id } = useParams()
  const { data: product, error, loading } = useDoc('products', id)

  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <div className="container-productDetails">
      <div className='banner'>
        <img src="https://static.euronews.com/articles/stories/06/48/94/10/1440x810_cmsv2_72145961-5fb7-5e54-852d-997299cf9e10-6489410.jpg" alt="" />
      </div>
      {/* ____________________________________SECTION 1____________________________________ */}
      <div className='productdetails-section-1'>
        <div className='container-left'>
          <div className='img-big'>
            <img src={product.imgUrl} className="img-fluid" />
          </div>
          <div className='img-sm'>
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
          </div>
        </div>
        <div className="container-right">
          <div className="product-info">
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
          </div>
         
          <div className="price">
            <p>${product.price}</p>
          </div>
          <div className="addToCart">
           
            <button className='btn btn-cart'>UPDATE</button>
            <button className='btn btn-cart'>DELETE</button>
          </div>
      
        </div>


      </div>
            <div className="productdetails-section-2">
       
      </div>

    </div>
  )
}

export default ProductDetails