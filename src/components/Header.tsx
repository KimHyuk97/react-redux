import { useDispatch, useSelector } from "react-redux";
import { authActions, RootState } from "../store/store";

const Header = () => {

    const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout())
        alert('로그아웃 성공하였습니다.')
    }

    return (
        <header>
           <h1>홈</h1> 
            {isAuthenticated && (
                <button onClick={logoutHandler}>로그아웃</button>
            )}
        </header>
    )
}

export default Header;