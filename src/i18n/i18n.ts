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
    landingPage: enLandingPage,
    auth: enAuth,
    passengerDetails: enPassengerDetails,
    logoutConfirmationModal: enLogoutConfirmationModal,
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
    landingPage: eslandingPage,
    passengerDetails: esPassengerDetails,
    logoutConfirmationModal: esLogoutConfirmationModal,
} = es;

export const defaultNS = 'ns1';

void i18n.use(initReactI18next).init({
    debug: true, // for debugging
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
            landingPage: enLandingPage,
            passengerDetails: enPassengerDetails,
            logoutConfirmationModal: enLogoutConfirmationModal,
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
            landingPage: eslandingPage,
            passengerDetails: esPassengerDetails,
            logoutConfirmationModal: esLogoutConfirmationModal,
        },
    },
    lng: 'en',
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
        'landingPage',
        'auth',
        'logoutConfirmationModal',
    ],
    interpolation: {
        escapeValue: false, //escape dynamic content and opting not to have the i18n library perform additional escaping for the interpolated values.
    },
});

export default i18n;
