import "./App.css"
import meetingRoomLogo from "./theory/meeting_room_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
export default function App() {
    return (
        <div>
            <div className="h-screen bg-blue-600 flex flex-col items-center justify-around">
                <div className="bg-red-300"><span><img src={meetingRoomLogo} alt="logo of the company"/></span><span className="text-blue-500">Webinar</span>.gg</div>
                <div className="bg-green-300">Item 2</div>
                <div className="bg-blue-300">Item 3</div>
            </div>
        </div>
    )
}