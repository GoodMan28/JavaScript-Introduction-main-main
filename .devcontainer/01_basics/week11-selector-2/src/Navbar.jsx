import { RecoilRoot, useRecoilValue } from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalCountAtom } from "./store/atoms";
import { useMemo, memo } from "react";
export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {

    let networkCount = useRecoilValue(networkAtom);
    let jobCount = useRecoilValue(jobAtom);
    let notificationCount = useRecoilValue(notificationAtom);
    let messageCount = useRecoilValue(messagingAtom);

    // ----------------------------------------------------------------------------------------------------------------
    // suppose we want to show the sum of all the counts
    // method 1 using a memo because it will only re-render when the deps will be changed
    let totalCount = useMemo(() => {
        return networkCount + jobCount + notificationCount + messageCount;
    }, [networkCount, jobCount, notificationCount, messageCount])
    // this method can also be done by making a memoized component usign these atoms values
    // ----------------------------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------------------------
    // method2 : we are using a selector on all the atoms
    totalCount = useRecoilValue(totalCountAtom);
    // ----------------------------------------------------------------------------------------------------------------

    return (
        <>
            {/* making four buttons */}
            <button>Home</button>

            <button>My Network ({networkCount > 100 ? "100+" : networkCount})</button>
            <button>Jobs ({jobCount})</button>
            <button>Notification ({notificationCount})</button>
            <button>Messages ({messageCount})</button>

            <button>Home ({totalCount})</button>
            {/* <TotalCount networkCount={networkCount} jobCount={jobCount} notificationCount={notificationCount} messageCount={messageCount}/> */}
        </>
    )
}


// method 1 : using memo but a dfferernt component
// let TotalCount = memo(function (props) {
//     let total = props.networkCount + props.jobCount + props.notificationCount + props.messageCount;

//     return <div>
//         {total}
//     </div>
// })



// ----------------------------------------------------------------------------------------------------------------
// Verdict : Using a selector is a better approach because in the future we could also use the selector for making other selectors