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

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReactECharts from "echarts-for-react";

import { instance } from "../../service/service";


function Notifications() {

  const [data, setData] = useState([])
  const [dataDoAm, setDataDoAm] = useState([])

  const init = () => {
    instance({
      method: 'get',
      url: '/alarm/get-all-heart-beat-current-day?token=Y3ODkwIiwi'
    }).then(resp => {
      const data = resp.data
      if (data?.data?.length > 0) {
        const result = data?.data
        const dataChart = []
        const dataChartDoAm = []
        result.forEach(el => {
          const currentTime = el.createdDate.split('T')[1].split('.')[0].split(':')[0] + ':' + el.createdDate.split('T')[1].split('.')[0].split(':')[1]
          switch (currentTime) {
            case '00:00':
              dataChart.push(['0h', el.temperature])
              dataChartDoAm.push(['0h', el.humidity])
              break
            case '00:30':
              dataChart.push(['0h30p', el.temperature])
              dataChartDoAm.push(['0h30p', el.humidity])
              break
            case '01:00':
              dataChart.push(['1h', el.temperature])
              dataChartDoAm.push(['1h', el.humidity])
              break
            case '01:30':
              dataChart.push(['1h30p', el.temperature])
              dataChartDoAm.push(['1h30p', el.humidity])
              break
            case '02:00':
              dataChart.push(['2h', el.temperature])
              dataChartDoAm.push(['2h', el.humidity])
              break
            case '02:30':
              dataChart.push(['2h30p', el.temperature])
              dataChartDoAm.push(['2h30p', el.humidity])
              break
            case '03:00':
              dataChart.push(['3h', el.temperature])
              dataChartDoAm.push(['3h', el.humidity])
              break
            case '03:30':
              dataChart.push(['3h30p', el.temperature])
              dataChartDoAm.push(['3h30p', el.humidity])
              break
            case '04:00':
              dataChart.push(['4h', el.temperature])
              dataChartDoAm.push(['4h', el.humidity])
              break
            case '04:30':
              dataChart.push(['4h30p', el.temperature])
              dataChartDoAm.push(['4h30p', el.humidity])
              break
            case '05:00':
              dataChart.push(['5h', el.temperature])
              dataChartDoAm.push(['5h', el.humidity])
              break
            case '05:30':
              dataChart.push(['5h30p', el.temperature])
              dataChartDoAm.push(['5h30p', el.humidity])
              break
            case '06:00':
              dataChart.push(['6h', el.temperature])
              dataChartDoAm.push(['6h', el.humidity])
              break
            case '06:30':
              dataChart.push(['6h30p', el.temperature])
              dataChartDoAm.push(['6h30p', el.humidity])
              break
            case '07:00':
              dataChart.push(['7h', el.temperature])
              dataChartDoAm.push(['7h', el.humidity])
              break
            case '07:30':
              dataChart.push(['7h30p', el.temperature])
              dataChartDoAm.push(['7h30p', el.humidity])
              break
            case '08:00':
              dataChart.push(['8h', el.temperature])
              dataChartDoAm.push(['8h', el.humidity])
              break
            case '08:30':
              dataChart.push(['8h30p', el.temperature])
              dataChartDoAm.push(['8h30', el.humidity])
              break
            case '09:00':
              dataChart.push(['9h', el.temperature])
              dataChartDoAm.push(['9h', el.humidity])
              break
            case '09:30':
              dataChart.push(['9h30p', el.temperature])
              dataChartDoAm.push(['9h30p', el.humidity])
              break
            case '10:00':
              dataChart.push(['10h', el.temperature])
              dataChartDoAm.push(['10h', el.humidity])
              break
            case '10:30':
              dataChart.push(['10h30p', el.temperature])
              dataChartDoAm.push(['10h30p', el.humidity])
              break
            case '11:00':
              dataChart.push(['11h', el.temperature])
              dataChartDoAm.push(['11h', el.humidity])
              break
            case '11:30':
              dataChart.push(['11h30p', el.temperature])
              dataChartDoAm.push(['11h30p', el.humidity])
              break
            case '12:00':
              dataChart.push(['12h', el.temperature])
              dataChartDoAm.push(['12h', el.humidity])
              break
            case '12:30':
              dataChart.push(['12h30p', el.temperature])
              dataChartDoAm.push(['12h30p', el.humidity])
              break
            case '13:00':
              dataChart.push(['13h', el.temperature])
              dataChartDoAm.push(['13h', el.humidity])
              break
            case '13:30':
              dataChart.push(['13h30p', el.temperature])
              dataChartDoAm.push(['13h30p', el.humidity])
              break
            case '14:00':
              dataChart.push(['14h', el.temperature])
              dataChartDoAm.push(['14h', el.humidity])
              break
            case '14:30':
              dataChart.push(['14h30p', el.temperature])
              dataChartDoAm.push(['14h30p', el.humidity])
              break
            case '15:00':
              dataChart.push(['15h', el.temperature])
              dataChartDoAm.push(['15h', el.humidity])
              break
            case '15:30':
              dataChart.push(['15h30p', el.temperature])
              dataChartDoAm.push(['15h30p', el.humidity])
              break
            case '16:00':
              dataChart.push(['16h', el.temperature])
              dataChartDoAm.push(['16h', el.humidity])
              break
            case '16:30':
              dataChart.push(['16h30p', el.temperature])
              dataChartDoAm.push(['16h30p', el.humidity])
              break
            case '17:00':
              dataChart.push(['17h', el.temperature])
              dataChartDoAm.push(['17h', el.humidity])
              break
            case '17:30':
              dataChart.push(['17h30p', el.temperature])
              dataChartDoAm.push(['17h30p', el.humidity])
              break
            case '18:00':
              dataChart.push(['18h', el.temperature])
              dataChartDoAm.push(['18h', el.humidity])
              break
            case '18:30':
              dataChart.push(['18h30p', el.temperature])
              dataChartDoAm.push(['18h30p', el.humidity])
              break
            case '19:00':
              dataChart.push(['19h', el.temperature])
              dataChartDoAm.push(['19h', el.humidity])
              break
            case '19:30':
              dataChart.push(['19h30p', el.temperature])
              dataChartDoAm.push(['19h30p', el.humidity])
              break
            case '20:00':
              dataChart.push(['20h', el.temperature])
              dataChartDoAm.push(['20h', el.humidity])
              break
            case '20:30':
              dataChart.push(['20h30p', el.temperature])
              dataChartDoAm.push(['20h30p', el.humidity])
              break
            case '21:00':
              dataChart.push(['21h', el.temperature])
              dataChartDoAm.push(['21h', el.humidity])
              break
            case '21:30':
              dataChart.push(['21h30p', el.temperature])
              dataChartDoAm.push(['21h30p', el.humidity])
              break
            case '22:00':
              dataChart.push(['22h', el.temperature])
              dataChartDoAm.push(['22h', el.humidity])
              break
            case '23:30':
              dataChart.push(['23h30p', el.temperature])
              dataChartDoAm.push(['23h30p', el.humidity])
              break
            default:
              break
          }
        })
        setData(dataChart)
        setDataDoAm(dataChartDoAm)
      }
    })
  }

  const getOptionNhietDo = () => {
    const temp = [["0h", 0], ["0h30p", 0], ["1h", 0],
      ["1h30p", 0], ["2h", 0], ["2h30p", 0], ["3h", 0],
      ["3h30p", 0], ["4h", 0], ["4h30p", 0], ["5h", 0],
      ["5h30p", 0], ["6h", 0], ["6h30p", 0], ["7h", 0],
      ["7h30p", 0], ["8h", 0], ["8h30p", 0], ["9h", 0],
      ["9h30p", 0], ["10h", 0], ["10h30p", 0], ["11h", 0],
      ["11h30p", 0], ["12h", 0], ["12h30p", 0], ["13h", 0],
      ["13h30p", 0], ["14h", 0], ["14h30p", 0], ["15h", 0],
      ["15h30p", 0], ["16h", 0], ["16h30p", 0], ["17h", 0],
      ["17h30p", 0], ["18h", 0], ["18h30p", 0], ["19h", 0],
      ["19h30p", 0], ["20h", 0], ["20h30p", 0], ["21h", 0],
      ["21h30p", 0], ["22h", 0], ["22h30p", 0], ["23h", 0],
      ["23h30p", 0]];

    const a = temp.map(el => {
      for(let i = 0; i < data.length; i++) {
        if (data[i][0] === el[0]) {
          return data[i]
        }
      }
      return el
    })

    const a1 = temp.map(el => {
      for(let i = 0; i < dataDoAm.length; i++) {
        if (dataDoAm[i][0] === el[0]) {
          return dataDoAm[i]
        }
      }
      return el
    })

    const dateList = a.map(function (item) {
      return item[0];
    });
    const valueList = a.map(function (item) {
      return item[1];
    });

    const dateList1 = a1.map(function (item) {
      return item[0];
    });
    const valueList1 = a1.map(function (item) {
      return item[1];
    });
    return {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        },
        {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: 100
        }
      ],
      title: [
        {
          left: 'center',
          text: 'Nhiệt độ'
        },
        {
          top: '55%',
          left: 'center',
          text: 'Độ ẩm'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [
        {
          data: dateList
        },
        {
          data: dateList1,
          gridIndex: 1
        }
      ],
      yAxis: [
        {},
        {
          gridIndex: 1
        }
      ],
      grid: [
        {
          bottom: '60%'
        },
        {
          top: '60%'
        }
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList
        },
        {
          type: 'line',
          showSymbol: false,
          data: valueList1,
          xAxisIndex: 1,
          yAxisIndex: 1
        }
      ]
    };
  }

  useEffect(() => {
    init()
  }, [])

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
                  Biểu đồ đánh giá theo ngày
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={getOptionNhietDo()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                  style={{height: '80vh', width: '100%'}}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
