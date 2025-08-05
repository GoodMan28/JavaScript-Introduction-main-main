# Suppose we have multiple values in the atom such as 
export const appStateAtom = atom({
  key: "appState",
  default: {
    userId: null,
    notificationCount: 0,
    messages: [],
  },
});

# ---------------------------------------------------------------------------------------------------------------------------------------------
TIP 1
# suppose we subscribe to the whole default value from the atom then suppose we have the flowwing component

# --------------------------------------
# Notification  |  Username |  Messages 
# --------------------------------------

Then we cannnot uniquley subscribe to the "notificationCount" (for the "Notification" component)

So we nned to make a selector for all the default values 


# ---------------------------------------------------------------------------------------------------------------------------------------------
TIP 2
why do we update the object or an array using the spread operator?
becuse arrays and objects in the recoil are immutable, hence we need to make a new array/object and assign it to the previous value

Example
For object
setState(prev => {...prev, prev.notificationCount++})

For array
setState(prev => [...prev, newItem])