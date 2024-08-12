import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from '../styles/TicketBooking.module.css'; // Import the CSS module

export default function Ticket({ guest, setEditingId, removeGuestTicket }) {

    const guestId = guest.id;
    const guestName = guest.name;
    const guestAge = guest.age;
    const guestPrice = guest.price;

    return (
        <div className={styles.ticket}>
            <div className={styles.ticketContent}>
                <h3>
                    🙏Welcome ~ {guestName}
                </h3>

                <p>
                    Age: {guestAge}
                </p>

                <p>
                    Price: ₹{guestPrice}
                </p>
            </div>

            <button
                className={styles.editButton}
                onClick={() => setEditingId(guestId)}
            >
                <FaEdit />
            </button>

            <button
                className={styles.deleteButton}
                onClick={() => removeGuestTicket(guestId)}
            >
                <FaTrash />
            </button>
        </div>
    );
};
