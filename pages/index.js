import { useMemo, useState } from 'react';
import styles from '../styles/Home.module.css'
import Filter from "../components/filter";
import Content from "../components/content";

var filterParams = {
  "launch_year": "",
  "launch_success": "",
  "land_success": ""
};
function Home({ launches }) {
  const [data, setData] = useState(launches);

  const getButtonClickActionValue = async (key, value) => {
    if (value != "") {
      filterParams[key] = value;
      getData();
    }
  }

  const handleButtonClick = (event, key, value) => {
    event.preventDefault();
    getButtonClickActionValue(key, value)
  };

  const getData = async () => {
    var filterOptions = "";
    Object.entries(filterParams).map(([key, value]) => {
      if (value != "")
        filterOptions += `&${key}=${value}`;
    });

    const apiUrl = "https://api.spacexdata.com/v3/launches?limit=100" + filterOptions;
    const req = await fetch(apiUrl);
    const newData = await req.json();
    setData(newData);
  }

  return (
    <>
      <div className={styles.container}>
        <h3>SpaceX Launch Programs</h3>
        <div className="row">
          <div className="col-sm-2">
            <Filter onButtonClick={handleButtonClick} />
          </div>
          <div className="col-sm-9">
            <Content data={data} />
          </div>
        </div>
        <div className={styles.footer}>
          <strong>Developed by:</strong> Lavish Aggarwal
      </div>
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
  const json = await res.json()
  return { launches: json }
}

export default Home;