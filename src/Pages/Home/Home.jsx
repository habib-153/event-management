
import Footer from "../Footer/Footer";
import Team from "../Team/Team";
import SimpleSlider from "./Banner/Banner";
import HomeAbout from "./HomeAbout";
import Services from "./Services/Services";

const Home = () => {

    return (
        <div>
            <SimpleSlider></SimpleSlider>
            <Services></Services>
            <Team></Team>
            <HomeAbout></HomeAbout>
            <Footer></Footer>
        </div>
    );
};

export default Home;