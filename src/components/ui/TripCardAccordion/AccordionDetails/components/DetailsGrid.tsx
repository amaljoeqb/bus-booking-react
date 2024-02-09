import { Box, Grid } from '@mui/material';
import { DetailsItem } from './DetailItem';
import { useTranslation } from 'react-i18next';
import { BusDepartureIcon } from '../../../../../assets/accordianDetails/BusDepartureIcon';
import { BusArrivalIcon } from '../../../../../assets/accordianDetails/BusArrivalIcon';
import { StopwatchIcon } from '../../../../../assets/accordianDetails/StopwatchIcon';
import { BusIcon } from '../../../../../assets/accordianDetails/BusIcon';
import { IBusType, ISeatType } from '../../../../../api/types/trip';

export const DetailsGrid = ({
    tripDetails,
}: {
    tripDetails: {
        departureTime: string;
        departureDate: string;
        arrivalTime: string;
        arrivalDate: string;
        duration: string;
        origin: string;
        destination: string;
        seatType: ISeatType;
        busType: IBusType;
    };
}) => {
    const { t } = useTranslation('tripDetails');

    const detailsData = [
        {
            title: t('departure'),
            value: `${tripDetails.origin} ${tripDetails.departureDate}, ${tripDetails.departureTime}`,
            icon: <BusDepartureIcon />,
        },
        {
            title: t('arrival'),
            value: `${tripDetails.destination} ${tripDetails.arrivalDate}, ${tripDetails.arrivalTime}`,
            icon: <BusArrivalIcon />,
        },
        {
            title: t('duration'),
            value: tripDetails.duration,
            icon: <StopwatchIcon />,
        },
        {
            title: t('busType'),
            value: `${tripDetails.busType} , ${tripDetails.seatType}`,
            icon: <BusIcon />,
        },
    ];

    return (
        <Box sx={{ width: '100%' }} mt={3}>
            <Grid container rowSpacing={2} columnSpacing={30}>
                {detailsData.map((detail, index) => (
                    <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                        {/* 
                        For small and medium screens (xs, sm), it will be a single column.
                        For screens equal to or larger than md (medium) or lg(large), it will be 2 columns.*/}
                        <DetailsItem
                            title={detail.title}
                            value={detail.value}
                            icon={detail.icon}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
