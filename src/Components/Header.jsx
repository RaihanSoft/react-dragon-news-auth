import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-2 " >
            <img src={logo} alt="" />
            <h1>Journalism Without Fear or Favour</h1>
            <h1>Sunday, November 27, 2025</h1>
        </div>
    )
}

export default Header
