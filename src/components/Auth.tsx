import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";


const Auth = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const {username, password} = user;

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const loginHandler = () => {
        if(username === '') {
            alert('아이디를 입력해주세요.');
            return
        }
        if(password === '') {
            alert('비밀번호를 입력해주세요.')
            return
        }

        if(username == 'rlagur' && password === '1234') {
            alert('로그인 성공하였습니다.')
            dispatch(authActions.login())
        } else {
            alert('로그인 실패')
        }

    }

    return (
        <main>
            <h1>Redux Login</h1>
            <div>
                <p>아이디</p>
                <input type="text" name="username" value={username} onChange={handleChange}/>
            </div>
            <div>
                <p>비밀번호</p>
                <input type="password" name="password" value={password} onChange={handleChange}/>
            </div>
            <button onClick={loginHandler}>로그인</button>
        </main>
    )
}

export default Auth;