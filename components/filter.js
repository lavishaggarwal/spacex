import styles from '../styles/Home.module.css'

const year = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

export default function Filter({onButtonClick}) {
    return (
        <div className={styles.filterContainer}>
            <div style={{padding: 5}}><h4>Filters</h4></div>
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h5>Launch Year</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row">
                    {
                        year.map((yr, i) => {
                            return <div key={i} className="col-6 col-lg-6"><button key={Math.random()} onClick={(e) => onButtonClick(e, "launch_year", yr)} className={styles.filterButton}>{yr}</button></div>
                        })
                    }
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h5>Successful Launch</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => onButtonClick(e, "launch_success", "true")} className={styles.filterButton}>True</button>
                        <div className="clear-fix"></div>
                    </div>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => onButtonClick(e, "launch_success", "false")} className={styles.filterButton}>False</button>
                        <div className="clear-fix"></div>
                    </div>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h5>Successful Landing</h5>
                    <div className="border border-secondary"></div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => onButtonClick(e, "land_success", "true")} className={styles.filterButton}>True</button>
                        <div className="clear-fix"></div>
                    </div>
                    <div className="col-6 col-lg-6">
                        <button onClick={(e) => onButtonClick(e, "land_success", "false")} className={styles.filterButton}>False</button>
                        <div className="clear-fix"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
