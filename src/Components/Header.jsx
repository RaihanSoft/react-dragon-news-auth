import moment from 'moment'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-2 " >
            <img src={logo} alt="" />
            <h1 className='text-gray-400' >Journalism Without Fear or Favour</h1>
            <h1 className='text-xl' >{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h1>
        </div>
    )
}

export default Header
