import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Overlay } from '../actionBar/pnrSearch/PnrSearch.styled';
import { Ticket } from './Ticket';
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader';
import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ITicket } from '../../types';
import { getTicketByPnr } from '../../api/endpoints/ticket.api';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';

export const TicketModal = ({
    showTicketStateObject,
}: {
    showTicketStateObject: {
        showTicket: boolean;
        setShowTicket: Dispatch<SetStateAction<boolean>>;
    };
}) => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const pnrNumber: string | null = searchParams.get('pnr');
    const { t } = useTranslation('error');

    const ticketDataFromState = location.state as ITicket | null;

    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);

    const errorText = t('unexpected');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pnrNumber) {
                    const response = await getTicketByPnr(pnrNumber);
                    setTicketData(response);
                }
            } catch (error) {
                toast.error(errorText, { toastId: 'Error toast ' });
            } finally {
                setLoading(false);
            }
        };

        if (!ticketDataFromState) {
            void fetchData();
        } else {
            setTicketData(ticketDataFromState);
            setLoading(false);
        }
    }, [errorText, pnrNumber, ticketDataFromState]);

    return loading ? (
        <FullScreenLoader open={loading} />
    ) : (
        ticketData && (
            <Overlay
                onClick={() => {
                    searchParams.delete('pnr');
                    setSearchParams(searchParams);
                    showTicketStateObject.setShowTicket(false);
                }}
            >
                <CloseIcon
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents the overlay's onClick from being triggered
                        showTicketStateObject.setShowTicket(false);
                    }}
                    className="close-icon"
                />
                <div className="centered-ticket-container">
                    <Ticket data={ticketData} />
                </div>
            </Overlay>
        )
    );
};
