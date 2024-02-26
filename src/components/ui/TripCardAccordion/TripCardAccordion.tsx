import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import acIcon from '../../../assets/AcIcon.svg';
import nonAcIcon from '../../../assets/NonAcIcon.svg';
import seatIcon from '../../../assets/SeatIcon.svg';
import sleeperIcon from '../../../assets/SleeperIcon.svg';
import Stack from '@mui/material/Stack';
import LongArrow from '../../icons/LongArrow';
import Tooltip from '@mui/material/Tooltip';
import { TripAccordionWrapper } from './TripCardAccordion.styled';
import { convertTimeStamp } from '../../../utils';
import { TripCardDetails } from './AccordionDetails/TripCardDetails';
import { ITrip, IBusType, ISeatType } from '../../../types';
import { useTranslation } from 'react-i18next';

let borderDesignClass: string;

interface ITripCardAccordionProps {
    data: ITrip;
    defaultExpanded?: boolean;
}

export const TripCardAccordion = ({
    data,
    defaultExpanded = false,
}: ITripCardAccordionProps) => {
    const { t } = useTranslation('tripListing');

    if (data.availableSeats >= 20) {
        borderDesignClass = 'more-seats';
    } else if (data.availableSeats > 0) {
        borderDesignClass = 'less-seats';
    } else {
        borderDesignClass = 'no-seats';
    }

    const dates: {
        formattedDepartureTime: string;
        formattedDepartureDate: string;
        formattedArrivalTime: string;
        formattedArrivalDate: string;
        formattedDuration: string;
    } = convertTimeStamp(data.departureTimestamp, data.arrivalTimestamp);
    return (
        <TripAccordionWrapper
            className={`summary ${borderDesignClass}`}
            defaultExpanded={defaultExpanded}
        >
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel-content"
                id="panel-header"
                disabled={data.totalSeats == 0}
            >
                <Stack
                    className="details"
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Stack className="trip-card-icons">
                        <Tooltip
                            title={
                                data.busType == IBusType.AC
                                    ? t('busTypeAC')
                                    : t('busTypeNonAC')
                            }
                            arrow
                        >
                            <img
                                src={
                                    data.busType == IBusType.AC
                                        ? acIcon
                                        : nonAcIcon
                                }
                                alt="Bus Type Icon"
                            />
                        </Tooltip>
                        <Tooltip
                            title={
                                data.seatType == ISeatType.SLEEPER
                                    ? t('SeatTypeSleeper')
                                    : t('SeatTypeSeater')
                            }
                            arrow
                        >
                            <img
                                src={
                                    data.seatType == ISeatType.SLEEPER ||
                                    ISeatType.Sleeper
                                        ? sleeperIcon
                                        : seatIcon
                                }
                                alt="Seat Type Icon"
                            />
                        </Tooltip>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={4}
                        className="date-time-parent"
                    >
                        <Stack className="date-time">
                            <p>{dates.formattedDepartureTime}</p>
                            <p className="date">
                                {dates.formattedDepartureDate}
                            </p>
                        </Stack>
                        <LongArrow width="39px" height="6px" />
                        <Stack className="date-time">
                            <p>{dates.formattedArrivalTime}</p>
                            <p className="date">{dates.formattedArrivalDate}</p>
                        </Stack>
                    </Stack>
                    <Tooltip title={dates.formattedDuration} arrow>
                        <p className="duration">{dates.formattedDuration}</p>
                    </Tooltip>
                    <p className={`seats ${borderDesignClass}`}>
                        {data.availableSeats} {t('seatsAvailable')}
                    </p>
                    <p className="price">Rs. {data.farePerSeat}/-</p>
                </Stack>
            </AccordionSummary>
            <TripCardDetails />
        </TripAccordionWrapper>
    );
};
