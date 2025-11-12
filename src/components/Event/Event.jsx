import React from 'react'
import styles from './Event.module.css'
import HangoutVideo from '../../assets/icons/events/hangout_video.svg'
import CalendarMonth from '../../assets/icons/events/calendar_month.svg'
import Schedule from '../../assets/icons/events/schedule.svg'
import Groups from '../../assets/icons/events/groups.svg'

const events = [
    // {
    //     type: "Online",
    //     date: "16, march 2025",
    //     start: "01:30 PM",
    //     end: "02:30 PM",
    //     title: "let's discuss how can we make students summer holidays better",
    //     link: "https://meet.google.com/event-link",
    //     address: "",
    //     img: "",
    // },
    // {
    //     type: "Offline",
    //     date: "16, march 2025",
    //     start: "01:30 PM",
    //     end: "02:30 PM",
    //     title: "let's discuss how can we make students summer holidays better",
    //     link: "",
    //     address: "123 Main St, Springfield",
    //     img: "",
    // },
    // {
    //     type: "Offline",
    //     date: "16, march 2025",
    //     start: "01:30 PM",
    //     end: "02:30 PM",
    //     title: "let's discuss how can we make students summer holidays better",
    //     link: "",
    //     address: "456 College Ave, Metro City",
    //     img: "",
    // },
];

const iconOnline = (
    <img src={HangoutVideo} alt="Online Event" width="22" height="22" />
);
const iconOffline = (
    <img src={Groups} alt="Offline Event" width="22" height="22" />
);
const iconCalendar = (
    <img src={CalendarMonth} alt="Event Date" width="18" height="18" />
);
const iconClock = (
    <img src={Schedule} alt="Event Time" width="18" height="18" />
);

function Event() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>Events</h1>
            <div className={styles.eventList}>
                {events.length === 0 ? <p className={styles.noEvents}>No events to display, whenever there is an event that will display here</p> : events.map((event, idx) => (
                    <div className={styles.eventCard} key={idx}>
                        <div className={styles.eventCardLeft}>
                            <div className={styles.eventImageBox}>
                                <img src={event.img || 'https://via.placeholder.com/150'} alt="Event" className={styles.eventImage} />
                            </div>
                        </div>
                        <div className={styles.eventCardContent}>
                            <div className={styles.eventMeta}>
                                <div className={styles.eventMetaItem}>
                                    {event.type === "Online" ? iconOnline : iconOffline}
                                    <span className={event.type === "Online" ? styles.online : styles.offline}>{event.type}</span>
                                </div>
                                <div className={styles.eventMetaItem}>
                                    {iconCalendar}
                                    <span>{event.date}</span>
                                </div>
                                <div className={styles.eventMetaItem}>
                                    {iconClock}
                                    <span>
                                        {event.start} <span style={{ fontWeight: "bold" }}>–</span> {event.end}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.eventTitle}>{event.title}</div>
                            <div className={styles.eventLinkSection}>
                                <div className={styles.eventLinkBox}>
                                    {event.type === "Online" && event.link && (
                                        <>
                                            {/* <span className={styles.eventLinkLabel}>Click here&nbsp;</span>
                                            <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                                                to copy the link
                                            </a> */}
                                            <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>Click here</a>
                                            <span className={styles.eventLinkLabel}> to copy the link</span>
                                        </>
                                    )}
                                    {event.type === "Offline" && event.address && (
                                        <>
                                            {/* <span className={styles.eventLinkLabel}>Click here&nbsp;</span>
                                            <a href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                                                to copy the address
                                            </a> */}
                                            <a href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>Click here</a>
                                            <span className={styles.eventLinkLabel}> to copy the address</span>
                                        </>
                                    )}
                                </div>
                                <div className={styles.eventAddressLabel}>
                                    Google meet link if the event is online or address if the event is offline will appear here within this box
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Event