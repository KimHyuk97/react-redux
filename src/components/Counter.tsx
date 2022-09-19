import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import { RootState } from '../store/store';

const Counter = () => {

    const counter = useSelector<RootState, number>(state => state.counter.counter);
    const showCounter = useSelector<RootState, boolean>(state => state.counter.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = (number: number) => {
        dispatch(counterActions.increment(number))
    };

    const decrementHandler = (number: number) => {
        dispatch(counterActions.decrement(number))
    };

    const toggleHandler = () => {
        dispatch(counterActions.toggle())
    }

    return (

        <main>
            {showCounter && (
                <>
                    <h1>Redux Counter</h1>
                    <div>{counter}</div>
                    <button onClick={()=>incrementHandler(1)}>increment</button>
                    <button onClick={()=>incrementHandler(5)}>increase by 5</button>
                    <button onClick={()=>decrementHandler(1)}>decrement</button>

                </>
            )}
            <button onClick={toggleHandler}>toggle</button>
        </main>
    )
}

export default Counter;