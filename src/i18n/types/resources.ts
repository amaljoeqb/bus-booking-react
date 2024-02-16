import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    passengerDetails,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    bookingsList,
    usersList,
    tableNoRowsOverlay,
    landingPage,
    auth,
} = data;

const resources = {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    tripDetails,
    bookingsList,
    usersList,
    tableNoRowsOverlay,
    landingPage,
    passengerDetails,
} as const;

export default resources;
