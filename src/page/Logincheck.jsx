import axios from "axios";
import { useNavigate } from "react-router-dom";


const CheckLogin = async () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    console.log('토큰', token);
    if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/Login');
    }
try {
    const response = await axios.get('https://moneyfulpublicpolicy.co.kr/user', 
    {
 headers: {
            authorization: `Bearer ${token}`,
        },
    });
    if (response.status === 200) {
        console.log('유저정보', response.data);
    }

} catch (error) {
    console.log(error);
}    }


export default CheckLogin;  