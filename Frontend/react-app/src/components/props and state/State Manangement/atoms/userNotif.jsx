import { atom, selector } from "recoil";

async function getNofiticationData() {
  return {
    network: 10,
    jobs: 20,
    notifications: 30,
    messaging: 101,
  };
}

export const networkNotifications = atom({
  key: "networkAtom",
  /*
    here we could've give some default value to network atom like
    {
      network: 0, jobs: 0, notifications: 0, messaging: 0
    }
    and fetch and fill the recoil state in useEffect
    but till the data hasn't come yet, we will have that default value and we don't want user to show 0

    so we will fetch the data on the initial load and put it in the state before using this state
    for this we've to use selector because selector's get function can use async function 
    but atom's default can't have async function
   */
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
// this is a 5 sec counter, during these 5 second we don't have a data so we will have a blank screen - we don't want this
      await new Promise((r) => setTimeout(r, 5000));
      return await getNofiticationData();
    },
  }),
});

/*
  selector is like getter in vue or we can also replcae them with useMemo
  useMemo and selector both uses some state variables and derive some value from them

  why to use selector instead of useMemo -> selector is defined in state management so we can use that anywhere
  but we can't declare useMemo outside the component
 */ 
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => { // this is the only syntax of this get function
    const { network, jobs, notifications, messaging } = get(networkNotifications);
    return network + jobs + notifications + messaging;
  },
});
