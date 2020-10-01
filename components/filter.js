import styles from '../styles/Home.module.css';
import { useState } from 'react';

const year = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

export default function Filter({ onButtonClick }) {

    const [selectedYear, useYear] = useState(null);
    const [successLaunch, useLaunch] = useState(null);
    const [successLanding, useLanding] = useState(null);

    const resetAllFilters = () => {
        useYear(null);
        useLaunch(null);
        useLanding(null);
    }

    return (
        <div className={styles.filterContainer}>
            <div style={{ padding: 5, textAlign: "left" }}>
                <p style={{ display: "inline", fontSize: 25 }}>Filters</p>
                {selectedYear != null || successLaunch != null || successLanding != null ?
                    <p style={{ display: "inline", float: "right", fontSize: 25 }} onClick={(e) => { resetAllFilters(), onButtonClick(e, "Reset", null) }}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </p>
                    :
                    null
                }
            </div>
            <br />
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h5>Launch Year</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row" style={{ textAlign: "center", marginRight: 5 }}>
                    {
                        year.map((yr, i) => {
                            return <div key={i} className="col-6 col-lg-6"><button key={Math.random()} onClick={(e) => { useYear(yr), onButtonClick(e, "launch_year", yr) }} className={`${styles.filterButton} ${selectedYear == yr ? styles.active : ''}`}>{yr}</button></div>
                        })
                    }
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h5>Successful Launch</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row" style={{ textAlign: "center", marginRight: 5 }}>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => { useLaunch(true), onButtonClick(e, "launch_success", "true") }} className={`${styles.filterButton} ${successLaunch == true ? styles.active : ''}`}>True</button>
                        <div className="clear-fix"></div>
                    </div>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => { useLaunch(false), onButtonClick(e, "launch_success", "false") }} className={`${styles.filterButton} ${successLaunch == false ? styles.active : ''}`}>False</button>
                        <div className="clear-fix"></div>
                    </div>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h5>Successful Landing</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row" style={{ textAlign: "center", marginRight: 5 }}>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => { useLanding(true), onButtonClick(e, "land_success", "true") }} className={`${styles.filterButton} ${successLanding == true ? styles.active : ''}`}>True</button>
                        <div className="clear-fix"></div>
                    </div>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => { useLanding(false), onButtonClick(e, "land_success", "false") }} className={`${styles.filterButton} ${successLanding == false ? styles.active : ''}`}>False</button>
                        <div className="clear-fix"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
