/**
 =========================================================
 * Material Dashboard 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import BG_ACTIVE from "../../assets/images/bg-home-active.jpeg";
import BG_DEACTIVE from "../../assets/images/bg-home.jpeg";
import BG_WARNING from "../../assets/images/warning.jpeg";
import { useEffect, useState } from "react";
import { dateFormat, getRandom } from "../../utils/Common";
import Card from "@mui/material/Card";
import MDTypography from "../../components/MDTypography";

import { instance } from "../../service/service";

let interval = null;
let intervalTime = null;

function Dashboard() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [nhietDo, setNhietDo] = useState(0);
  const [doAm, setDoAm] = useState(0);

  const init = () => {
    instance({
      method: 'get',
      url: '/alarm/get-all-heart-beat-current-day?token=Y3ODkwIiwi'
    }).then(resp => {
      const data = resp.data
      if (data?.data?.length > 0) {
        const result = data?.data[data?.data?.length - 1]
        setNhietDo(result.temperature)
        setDoAm(result.humidity)
      }
    })
  }

  useEffect(() => {
    intervalTime = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000)
    init()
    interval = setInterval(() => {
      init()
    }, 60000);
    return () => {
      clearInterval(interval);
      clearInterval(intervalTime)
    };
  }, []);

  const getImage = () => {
    if ((nhietDo > 0 && nhietDo <= 25) || (doAm >= 30 && doAm <= 50)) {
      return BG_ACTIVE;
    } else if ((nhietDo > 25 && nhietDo <= 50) || (doAm > 50 && doAm <= 100)) {
      return BG_WARNING;
    } else {
      return BG_DEACTIVE;
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Trang chủ
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Grid container spacing={6}>
                  <Grid item lg={8} style={{
                    width: '100%'
                  }}>
                    <img style={{
                      width: "100%"
                    }} src={getImage()} alt="" />
                  </Grid>
                  <Grid item lg={4} style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    marginBottom: '10px'
                  }}>
                    <div>
                      <h2><b>{dateFormat(currentDate)}</b></h2>
                      <h2><b>Nhiệt độ hiện tại: {nhietDo + "°C"}</b></h2>
                      <h2><b>Độ ẩm hiện tại: {doAm + "%"}</b></h2>
                      <h2><b>Nguồn: AC</b></h2>
                    </div>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
