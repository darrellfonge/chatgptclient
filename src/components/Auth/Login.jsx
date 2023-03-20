import React, { useReducer } from 'react';

const Login = () => {
    const initialState = {
        username: '',
        password: '',
        loading: false,
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'username':
                return { ...state, username: action.payload };
                case 'password':
                    return { ...state, password: action.payload };
                        case 'loading':
                            return { ...state, loading: action.payload };
            default:
                return state;
            }
        };

        
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value });
    };

    const onSubmit = async (e) => {
        console.log(e)
        e.preventDefault();
        dispatch({ type: 'loading', payload: true });
        try {
            const res = await axios.post('/auth/login', { username, password, display });
            console.log(res)
            dispatch({ type: 'loading', payload: false });
            window.location.href = '/';
        } catch (error) {
            console.log(error)
            dispatch({ type: 'display', payload: error.response.data });
            dispatch({ type: 'loading', payload: false });
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__logo">

                </div>
                <div className="login__form">
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={state.username}
                            onChange={onChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={onChange}
                        />
                        <button type="submit" disabled={state.loading}>
                            {state.loading ? 'Loading...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;