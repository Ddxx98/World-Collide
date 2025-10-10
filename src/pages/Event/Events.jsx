import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Events.module.css";
import Join from "../../components/Join/Join";
import Contact from "../../components/Contact/Contact";
import Event from "../../components/Event/Event";



function Events() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Event />
                <Join />
                <Contact /> 
            </div>
            <Footer />
        </div >
    );
}

export default Events;
