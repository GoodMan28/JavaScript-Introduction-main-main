// Till now we have hardcoded the values now we will learn how to fetch the values from the Backend
// Use this api: localhost:3000/ 
// we can use this when the http server is live

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notifications, totalNotificationsCount } from "./store/atoms2.js";
export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    let [navbar, setNavbar] = useRecoilState(notifications);
    let total = useRecoilValue(totalNotificationsCount);

    // we dont send any backend request here because it gets sent after the components are mounted so it seems 
    // very ugly
    return (
        <>
            {/* making four buttons */}
            <button>Home</button>

            <button>My Network ({navbar.network > 100 ? "100+" : navbar.network})</button>
            <button>Jobs ({navbar.jobs})</button>
            <button>Notification ({navbar.notifications})</button>
            <button>Messages ({navbar.messaging})</button>

            <button>Home ({total})</button>
            
        </>
    )
}
