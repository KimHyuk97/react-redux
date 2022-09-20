import { useSelector, useDispatch } from 'react-redux';
import { cartActions, Item } from '../store/cart';
import { RootState } from '../store/store';

const ItemComponents = () => {
    const isAuth: boolean = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
    const items: Item[] = [
        { id: 1, name: 'Java', count: 1, price: 1000},
        { id: 2, name: 'TypeScript', count: 1, price: 2000},
        { id: 3, name: 'Spring', count: 1, price: 3000},
        { id: 4, name: 'SQL', count: 1, price: 5000},
        { id: 5, name: 'AWS', count: 1, price: 10000},
    ]
    const dispatch = useDispatch();

    const cartHandler = (item: Item) => {
        dispatch(cartActions.save(item));
    }
    
    return (
        <main>
            <h1>아이템</h1>
            {items.map(item => (
                <div key={item.id} style={{display: 'flex', border: '1px solid', marginBottom: 12, padding: 12, width: 350, justifyContent: 'space-between'}}>
                    <p>{item.name}</p>
                    <p>{item.price}원</p>
                    {isAuth && <button type='button' onClick={()=>cartHandler(item)}>장바구니</button>}
                </div>
            ))}
        </main>
    )
}

export default ItemComponents;