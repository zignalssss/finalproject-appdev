import Tilt from 'react-parallax-tilt'
import {useState ,useEffect} from 'react';
import { axiosInstance } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../buttonLink/ButtonLink';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fname: '',
    lname: '',
    phonenumber: ''
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  //Set data from user input to fromData variable
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  //submit and post data to Database (MongoDB)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/user/login', formData)
        .then(response => {
          const token = "welcome!"
          localStorage.setItem('IsLog',JSON.stringify(token))
          setMessage('Login successful!');
          navigate("/allcourse");
        })
        .catch(error => {
          console.error('Error fetching data:', error);
      });
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Login failed');
      } else {
        setMessage('Login failed');
      }
    }
  };
    return (
      <div className='flex w-screen h-screen bg-cover bg-login_imge text-white bg-no-repeat justify-center items-center flex-col'>
        <Tilt>
          <form onSubmit={handleSubmit} className="bg-slate-700 p-12 rounded-3xl bg-opacity-60 shadow-5xl border-white border-t-2 border-l-2 border-opacity-20 backdrop-filter backdrop-blur-sm">
          <h2 className="text-4xl font-semibold">Login</h2>
            <div className='mt-5'>
              <label htmlFor="username" className="font-medium text-ls ">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className='w-full rounded-lg bg-slate-800 p-2 mt-1'/>
            </div>
            <div className='mt-1'>
              <label htmlFor="password" className="font-medium text-ls ">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className='w-full rounded-lg bg-slate-800 p-2 mt-1' />
            </div>
            <div className="gep-y-4 text-center mt-4">
              <button className= 'btn bg-sky-600 rounded-lg w-32 active:scale-[.98] active:duration-75 transition-al' type="submit">Login</button>
              
            </div>
            <div className="mt-5 text-sm first-line: active:scale-[.98] active:duration-75 transition-all text-center">
                    <ButtonLink tailwind="font-medium"to="/signup">
                          <span className='text-gray-200 mr-1'>no account</span>
                          <span className='underline underline-offset-2 font-bold'> Sign Up</span>
                    </ButtonLink>
            </div>
          </form>
        </Tilt>
        <div className='text-white'>
          {message && <p>{message}</p>}
        </div>
      </div>
    );
  };


export default LoginPage;
