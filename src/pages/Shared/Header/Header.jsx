import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div className="mt-12 mb-8">
            <img className="mx-auto" src={logo}/>
            <h1 className='text-lg text-[#706F6F] text-center mt-3'>Journalism Without Fear or Favour</h1>
            <p className="text-xl text-[#403F3F] font-medium text-center">Sunday, November 27, 2022</p>
        </div>
    );
};

export default Header;