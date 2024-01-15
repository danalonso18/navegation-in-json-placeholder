import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext/AuthContext';
import "../../styles/register.css"
import { iUser } from '../../interfaces/interfaces';



const RegistrationForm: React.FC = () => {
    const { login } = useAuthContext();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [users, setUsers] = useState<iUser[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleRegister = () => {
        if (username && password) {
            const newUser: iUser = { username, password };
            const updateUsers = [...users, newUser];

            setUsers(updateUsers);

            localStorage.setItem('users', JSON.stringify(updateUsers));

            login(username, password);

            setUsername('');
            setPassword('');

            navigate('/login');
        }
    };

    return (
        <div className='registerContainer'>
            <div className="register">
                <h2>Registro</h2>
                <form>
                    <div className="formContainer">
                        <div className="username">
                            <label> Usuario:</label><br />
                            <input type="text" id='username'  placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <br />
                        </div>
                        <div className="password">
                            <label> Contraseña: </label><br />
                            <input type="password" id='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                        </div>

                    </div>
                </form>
                        <div className="btnRegister">
                            <button type="button" onClick={handleRegister}>Registrar</button>
                        </div>
                <div>
                    <h3>Usuarios registrados:</h3>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                {user.username} - {user.password}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className='home'><Link to="/login">Volver al Login</Link></p>
            </div>
        </div>
    );
};

export default RegistrationForm;