import { useSelector, useDispatch } from 'react-redux';
import { cartActions, Item } from '../store/cart';
import { RootState } from '../store/store';

const Cart = () => {
    
    const dispatch = useDispatch();
    const isAuth: boolean = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
    const items = useSelector<RootState, Item[]>(state => state.cart.items);

    const incrementHandler = (item: Item) => {
        dispatch(cartActions.increment(item))
    };

    const decrementHandler = (item: Item) => {
        dispatch(cartActions.decrement(item))
    };

    return (
        <>
        {isAuth && (
            <main>
                <h1>장바구니</h1>
                {items.length > 0 && (
                    items.map(item => (
                        <div className='itemBox' key={item.id}>
                            <div className=''>
                                <p>{item.name}</p>
                                <div>
                                    <button type='button' onClick={()=>incrementHandler(item)}>+</button>
                                    <p>{item.count}</p>
                                    <button type='button' onClick={()=>decrementHandler(item)}>-</button>
                                </div>
                            </div>
                            <div>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </main>
        )}
        </>
    )
}

export default Cart;