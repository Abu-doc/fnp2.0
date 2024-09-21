import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Stories from "../components/Stories";
import Hero2 from "../components/Hero2";
import RangeDisplay from "../components/RangeItems";
import ChooseSection from "../components/Choose";
import ChooseOccasion from "../components/Occasion";
import PerfectSurprise from "../components/Surprise";
import Best from "../components/Bestcaraousel";
import FavouriteColor from "../components/Color";
import Newest from "../components/Newest";
import Showstopper from "../components/Showstopper";
import Luxe from "../components/Luxe";
import DesignersPick from "../components/Designers";
import Pair from "../components/Pair";
import ShopByPrice from "../components/ByPrice";
import BloomsIndia from "../components/BloomIndia";
import Preserved from "../components/PreservedFlowers";
import BloomsGlobal from "../components/BloomGlobal.js";
import Customer from "../components/Customers.js";
import ReadMore from "../components/Read.js";
import Worldwide from "../components/Worldwide.js";
import HelpPanel from "../components/Help.js";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Dropdown />
            <Stories />
            <Hero2 />
            <RangeDisplay />
            <ChooseSection />
            <ChooseOccasion />
            <PerfectSurprise />
            <Best />
            <FavouriteColor />
            <Newest />
            <Showstopper />
            <Luxe />
            <DesignersPick />
            <Pair />
            <ShopByPrice />
            <BloomsIndia />
            <Preserved />
            <BloomsGlobal />
            <Customer />
            <ReadMore />
            <Worldwide />
            <HelpPanel />
            
        </div>
    )
}

//second change

export default Home;