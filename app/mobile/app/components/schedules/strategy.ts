import Assignments from "../Assignments";
import Classes from "./Contents/Classes";
import Events from "./Contents/Events";
import Schedules from "./Schedules";


const schedulesStrategy = {
    classes: {
        fetcher: () => console.log("tester"),
        component: Classes
    },
    events: {
        fetcher: () => console.log("tester"),
        component: Events
    }
}


export default schedulesStrategy;