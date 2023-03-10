import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./servicesCompo/Charts";
import News from "./servicesCompo/News";
const Services = () => {
    return (
        <div>
        <div className="gradient-bg-services">
            <News/>    
        </div>
        <Charts/>
        </div>
    )
}
export default Services;