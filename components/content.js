import styles from '../styles/Home.module.css'

export default function Content({ data }) {
    return (
        <div className="row">
            {
                data.length > 0 ? data.map((launch, index) => {
                    return (<div key={index} className={`${styles.missionContainerWidth} col-sm-12 col-md-6 col-lg-3`}>
                        <div className={styles.missionContainer}>
                            <div style={{ backgroundColor: "rgb(241,242,242)", textAlign: "center" }}>
                                <img alt="spacex_mission_patch" className="img-fluid" src={launch.links.mission_patch_small} />
                            </div>
                            <br />
                            <div className={styles.missionName}>{launch.mission_name} #{launch.flight_number}</div>
                            <br />
                            <h5>Mission Ids:</h5> <ul>{launch.mission_id.map((id, index) => { return <li key={index}>{id}</li> })}</ul>
                            <h5>Launch Year: <span className={styles.textColor}>{launch.launch_year}</span></h5>
                            <h5>Successful Launch: <span className={styles.textColor}>{launch.launch_success ? "true" : "false"}</span></h5>
                            <h5>Successful Landing: <span className={styles.textColor}>{launch.rocket.first_stage.cores[0].land_success ? "true" : "false"}</span></h5>
                        </div>
                    </div>)
                })
                :
                <div className={`alert alert-warning ${styles.noRecordContainer}`}>No Records Found</div>
            }
        </div>
    )
}