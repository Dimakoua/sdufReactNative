import { append, insertAfter, insertBefore, remove, setCurrentScreen } from "../redux/screens";
import { setFloatCardWidgets, showFloatCard } from "../redux/floatCard";
import { logOut, setCurrentUser } from "../redux/users";
import { setMarkers } from "../redux/map";
import store from "../redux/store";

export const insertBeforeCallback = (data) => {
    store.dispatch(insertBefore({ parent_id: data.parent_id, widget: data.widget }))
};
export const insertAfterCallback = (data) => {
    store.dispatch(insertAfter({ parent_id: data.parent_id, widget: data.widget }))
};
export const removeCallback = (data) => {
    store.dispatch(remove({ parent_id: data.parent_id }))
};
export const changeCallback = (data) => {
    //update current screen
    console.log("changeCallback", data);
};
export const replaceCallback = (data) => {
    store.dispatch(insertAfter({ parent_id: data.parent_id, widget: data.widget }));
    store.dispatch(remove({ parent_id: data.parent_id }));
};
export const appendCallback = (data) => {
    store.dispatch(append({ widget: data.widget }));
};
export const logInCallback = (data) => {
    console.log("LOG IN", data)
    store.dispatch(setCurrentUser({ id: data.id, token: data.token }));
};
export const logOutCallback = (data) => {
    store.dispatch(logOut());
};
export const screenReceivedCallback = (data) => {
    console.log('screenReceivedCallback', data)
    store.dispatch(setCurrentScreen({
        id: data.id,
        name: data.name,
        nestedComponents: data.nestedComponents
    }))
};
export const openPopupCallback = (data) => {
    console.log("openPopupCallback", data);
};
export const closePopupCallback = (data) => {
    console.log("closePopupCallback", data);
};
export const showFloatCardCallback = (data) => {
    store.dispatch(showFloatCard());
    store.dispatch(setFloatCardWidgets({ nestedComponents: data.widget }))

    console.log("showFloatCallback", data);
};
export const hideFloatCardCallback = (data) => {
    console.log("hideFloatCallback", data);
};
export const openScreenCallback = (data) => {
    console.log("openScreenCallback", data);
};
export const updateMapMarkersCallback = (data) => {
    console.log("updateMapMarkersCallback", data);
    store.dispatch(setMarkers(data.markers));
};