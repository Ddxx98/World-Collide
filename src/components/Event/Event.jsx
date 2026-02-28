import React, { useState, useEffect } from 'react'
import styles from './Event.module.css'
import HangoutVideo from '../../assets/icons/events/hangout_video.svg'
import CalendarMonth from '../../assets/icons/events/calendar_month.svg'
import Schedule from '../../assets/icons/events/schedule.svg'
import Groups from '../../assets/icons/events/groups.svg'
import { contentService } from '../../firebase/contentService'

const staticEvents = [
    // No static events by default — the component will show "No events" text
    // Add entries here if you want default placeholder events
]

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
    const [events, setEvents] = useState(staticEvents);

    useEffect(() => {
        const unsubscribe = contentService.subscribe('events', (data) => {
            if (data.length > 0) setEvents(data);
        });
        return () => unsubscribe();
    }, []);

    // Use live Firebase data if available, otherwise fall back to static events
    const displayEvents = events.length > 0 ? events : staticEvents

    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>Events</h1>
            <div className={styles.eventList}>
                {displayEvents.length === 0 ? <p className={styles.noEvents}>No events to display, whenever there is an event that will display here</p> : displayEvents.map((event, idx) => (
                    <div className={styles.eventCard} key={event.id || idx}>
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
                                            <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>Click here</a>
                                            <span className={styles.eventLinkLabel}> to copy the link</span>
                                        </>
                                    )}
                                    {event.type === "Offline" && event.address && (
                                        <>
                                            <a href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>Click here</a>
                                            <span className={styles.eventLinkLabel}> to copy the address</span>
                                        </>
                                    )}
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
