import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] p-4">
            <button className="btn bg-[#D72050] hover:bg-[#D72050] text-white">Latest</button>
            <Marquee speed={100} pauseOnHover={true} >
                <Link to="/" className="mr-10 text-lg text-[#403F3F] font-semibold ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-10 text-lg text-[#403F3F] font-semibold ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-10 text-lg text-[#403F3F] font-semibold ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;