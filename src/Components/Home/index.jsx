import { Component } from "react";
import LocationList from "../LocationList";

class Home extends Component{
    render(){
        return <><div className="md:pt-16  h-[70vh] bg-amber-100">
            <div className="p-4 flex flex-col items-center ">
            <h1 className="text-4xl font-bold text-center pt-12 my-5">ZoneSRH Makes together</h1>
            <p className="text-2xl text-center">confused where to stay?.. Here you are find your roommate and build memories</p>
            <button className="px-4 py-2 bg-black text-white rounded mt-5 ">Explore</button>
            </div>
        </div>
            <div className="p-4">
                <LocationList/>
            </div>
        </>
    }
}


export default Home