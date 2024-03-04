import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../../components';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { Home } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { paths } from '../../config';
import { useGetTicketData } from '../../components/Ticket/utils/useGetTicketData';

export const TicketPage = () => {
    const navigate = useNavigate();

    const { t } = useTranslation('errorPage');

    const goHomeHandler = () => {
        navigate(paths.home);
    };

    const { ticketData, loading } = useGetTicketData();

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }

    return (
        ticketData && (
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Ticket data={ticketData} />
                <Button
                    variant="contained"
                    onClick={goHomeHandler}
                    startIcon={<Home />}
                    sx={{ margin: '2rem', alignSelf: 'center' }}
                >
                    {t('goHome')}
                </Button>
            </Stack>
        )
    );
};
