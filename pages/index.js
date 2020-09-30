import Head from "next/head";
import { useMemo, useState } from 'react';
import styles from '../styles/Home.module.css'
import Filter from "../components/filter";
import Content from "../components/content";
import Loader from "../components/loader";

var filterParams = {
  "launch_year": "",
  "launch_success": "",
  "land_success": ""
};

function Home({ launches }) {
  const [data, setData] = useState(launches);
  const [loader, setLoader] = useState(false);

  const getButtonClickActionValue = async (key, value) => {
    setLoader(true);
    if (value != "" && value != null) {
      filterParams[key] = value;
    }
    else {
      filterParams = {
        "launch_year": "",
        "launch_success": "",
        "land_success": ""
      }
    }
    getData();
  }

  const handleButtonClick = (event, key, value) => {
    event.preventDefault();
    getButtonClickActionValue(key, value)
  };

  const getData = async () => {
    setData([]);
    var filterOptions = "";
    Object.entries(filterParams).map(([key, value]) => {
      if (value != "")
        filterOptions += `&${key}=${value}`;
    });

    const apiUrl = "https://api.spacexdata.com/v3/launches?limit=100" + filterOptions;
    const req = await fetch(apiUrl);
    const newData = await req.json();
    setLoader(false);
    setData(newData);
  }

  return (
    <html lang="en">
      <Head>
        <title>SpaceX Launches</title>
        <meta name="spacex" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <h3>SpaceX Launch Programs</h3>
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <Filter onButtonClick={handleButtonClick} />
          </div>
          <div className="col-sm-12 col-lg-10">
            {loader ?
              <Loader />
              :
              <Content data={data} />
            }
          </div>
        </div>
        <div className={styles.footer}>
          <strong>Developed by: </strong> Lavish Aggarwal
      </div>
      </div>
    </html>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
  const json = await res.json()
  return { launches: json }
}

export default Home;