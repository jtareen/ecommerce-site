import CartItem from '../components/CartItem/CartItem';
import { useGlobalContext } from '../Context/Context'
import { useNavigate, Link } from 'react-router-dom'
import './css/cart.css'

const Cart = () => {
    const { cartItems, totalCartCost, dispatch } = useGlobalContext()
    const navigate = useNavigate()

    const cartItemsArray = Array.from(cartItems)

    return <main>
        <p className='breadcrumb'>
            <Link to='/'>Home</Link>
            &nbsp;/&nbsp;
            <span>Cart</span>
        </p>

        {
            cartItemsArray.length === 0 ? (
                <>
                    <section className='empty'>
                        <h1>Cart is Empty</h1>
                        <p>To add items to Cart, You may go back to home page</p>
                        <button className='btn' onClick={() => navigate('/')}>Back to home page</button>
                    </section>
                </>
            ) : (
                <>
                    <table className='cart-table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItemsArray.map((item, index) => {
                                return <CartItem key={index} item={item[1]} dispatch={dispatch} />
                            })}
                        </tbody>
                    </table>
                </>
            )
        }

        <section className='cart-bottom-section'>
            <button className='btn-4' onClick={() => navigate('/')}>Return to Shop</button>
            <div>
                <h5>Cart Total</h5>
                <div><span>Subtotal: </span><span>${totalCartCost?.toFixed(2) || 0}</span></div>
                <hr />
                <div><span>Shipping: </span><span>Free</span></div>
                <hr />
                <div><span>Total: </span><span>${totalCartCost?.toFixed(2) || 0}</span></div>
                <hr />
                <div style={{
                    justifyContent: 'center'
                }}>
                    <button className='btn'>Proceed to checkout</button>
                </div>
            </div>
        </section>
    </main>
}

export default Cart