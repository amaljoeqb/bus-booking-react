import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';
import es from './locales/es/es.json';

const {
    ns1: enNs1,
    ns2: enNs2,
    headerFooter: enHeaderFooter,
    seatLayout: enSeatLayout,
    actionBarTab: enActionBarTab,
    actionBar: enActionBar,
    pnrSearch: enPnrSearch,
    filterSort: enFilterSort,
    tripDetails: enTripDetails,
    tripListing: enTripListing,
    landingPage: enLandingPage,
    auth: enAuth,
    passengerDetails: enPassengerDetails,
    logoutConfirmationModal: enLogoutConfirmationModal,
    error: enError,
    bookingPageConfirmation: enBookingPageConfirmation,
    errorPage: enErrorPage,
} = en;

const {
    ns1: esNs1,
    ns2: esNs2,
    headerFooter: esHeaderFooter,
    seatLayout: esSeatLayout,
    auth: esAuth,
    actionBarTab: esActionBarTab,
    actionBar: esActionBar,
    pnrSearch: esPnrSearch,
    filterSort: esFilterSort,
    tripDetails: esTripDetails,
    tripListing: esTripListing,
    landingPage: eslandingPage,
    passengerDetails: esPassengerDetails,
    logoutConfirmationModal: esLogoutConfirmationModal,
    error: esError,
    bookingPageConfirmation: esBookingPageConfirmation,
    errorPage: esErrorPage,
} = es;

export const defaultNS = 'ns1';
const language = localStorage.getItem('language')?.toString();

void i18n.use(initReactI18next).init({
    resources: {
        en: {
            ns1: enNs1,
            ns2: enNs2,
            auth: enAuth,
            headerFooter: enHeaderFooter,
            seatLayout: enSeatLayout,
            actionBarTab: enActionBarTab,
            actionBar: enActionBar,
            pnrSearch: enPnrSearch,
            filterSort: enFilterSort,
            tripDetails: enTripDetails,
            tripListing: enTripListing,
            landingPage: enLandingPage,
            passengerDetails: enPassengerDetails,
            logoutConfirmationModal: enLogoutConfirmationModal,
            error: enError,
            bookingPageConfirmation: enBookingPageConfirmation,
            errorPage: enErrorPage,
        },
        es: {
            ns1: esNs1,
            ns2: esNs2,
            auth: esAuth,
            headerFooter: esHeaderFooter,
            seatLayout: esSeatLayout,
            actionBarTab: esActionBarTab,
            actionBar: esActionBar,
            pnrSearch: esPnrSearch,
            filterSort: esFilterSort,
            tripDetails: esTripDetails,
            tripListing: esTripListing,
            landingPage: eslandingPage,
            passengerDetails: esPassengerDetails,
            logoutConfirmationModal: esLogoutConfirmationModal,
            error: esError,
            bookingPageConfirmation: esBookingPageConfirmation,
            errorPage: esErrorPage,
        },
    },
    lng: language,
    fallbackLng: 'en',
    defaultNS,
    ns: [
        'ns1',
        'ns2',
        'headerFooter',
        'seatLayout',
        'tripDetails',
        'passengerDetails',
        'actionBarTab',
        'actionBar',
        'pnrSearch',
        'filterSort',
        'tripListing',
        'landingPage',
        'auth',
        'logoutConfirmationModal',
        'bookingPageConfirmation',
        'errorPage',
    ],
    interpolation: {
        escapeValue: false, //escape dynamic content and opting not to have the i18n library perform additional escaping for the interpolated values.
    },
});

export default i18n;
