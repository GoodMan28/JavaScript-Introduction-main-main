import {atom, selector} from "recoil"

export let networkAtom = atom({
    key: "networkAtom",
    default: 106
})

export let jobAtom = atom({
    key: "jobAtom",
    default: 0
})

export let notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

export let messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export let totalCountAtom = selector({
    key: "totalCountAtom",
    get: ({get}) => {
        let networkCount = get(networkAtom);
        let jobCount = get(jobAtom);
        let notificationCount = get(notificationAtom);
        let messagingCount = get(messagingAtom);

        return (networkCount + jobCount + notificationCount + messagingCount);
    }
})