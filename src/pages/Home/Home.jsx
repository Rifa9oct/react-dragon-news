import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#F3F3F3] p-4">
                <button className="btn bg-[#D72050] hover:bg-[#D72050] text-white">Latest</button>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-4">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border-4">
                    <h1 className='text-3xl'>News comming soon....</h1>
                </div>
                <div className="border-4">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;