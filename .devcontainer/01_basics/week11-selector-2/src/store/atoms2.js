// this atom is designed for the asynchoronous quesroes part
import axios from "axios"
import {atom, selector} from "recoil"
// here we have all the atoms in one object

export let notifications = atom({
    key: "notifications",
    default: selector({
        key: "asyncSelector",
        get: async ({get}) => {
            // here we will call the backend request
            // because in the recoil the selector get object can have a async function
            let response = await axios.get("http://localhost:3000/");
            return response.data;
        }
    })
})

export let totalNotificationsCount = selector({
    key: "totalNotificationsCount",
    get: ({get}) => {
        let allNotifications = get(notifications);
        return ((allNotifications.notifications) + (allNotifications.network) 
        + (allNotifications.jobs) + (allNotifications.messaging));
    }
})