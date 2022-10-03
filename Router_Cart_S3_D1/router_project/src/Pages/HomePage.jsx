import KidsBanner from "../Components/KidsBanner";
import MensBanner from "../Components/MensBanner";
import SideScroll from "../Components/SideScrollComponent";
import WomensBanners from "../Components/WomensBanner";

export default function HomePage ( ){
    return (
        <>
        <div className="dummy"></div>
        <WomensBanners/>
        <br /> <br />
        <MensBanner/>
        <br /><br />
        <KidsBanner/>
        <br />
        <SideScroll/>
        </>
    )
}