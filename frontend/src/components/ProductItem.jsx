import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
  return (
    <>
   <Link to={`/product/${id}`}>
    <div className='overflow-hidden'>
        {/* the overflow hidden make the image zoom inside the div */}
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="product image" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'>{price} {currency}</p>
   </Link>
    </>
  )
}

export default ProductItem
