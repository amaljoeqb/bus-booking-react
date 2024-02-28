import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
    tripDetails,
    tripListing,
    passengerDetails,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    landingPage,
    logoutConfirmationModal,
    error,
    errorPage,
} = data;

const resources = {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    tripDetails,
    tripListing,
    landingPage,
    auth,
    passengerDetails,
    logoutConfirmationModal,
    error,
    errorPage,
} as const;

export default resources;
