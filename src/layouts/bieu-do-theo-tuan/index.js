// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ReactECharts from 'echarts-for-react'

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useEffect, useState } from "react";
import { instance } from "../../service/service";


let interval = null
function Tables() {

  const [dataNhietDo, setDataNhietDo] = useState([])

  const [dataDoAm, setDataDoAm] = useState([])

  const nhietDo = {
    title: {
      show: false,
      text: 'Nhiệt độ'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['Max', 'Min', 'Avg']
    },
    xAxis: [
      {
        type: 'category',
        data: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '°C',
        min: 0,
        max: 100,
        interval: 50,
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      {
        type: 'value',
        name: '',
        min: 0,
        max: 100,
        interval: 5,
        axisLabel: {
          formatter: ''
        }
      }
    ],
    series: [
      {
        name: 'Max',
        type: 'bar',
        data: dataNhietDo.map(el => el.max)
      },
      {
        name: 'Min',
        type: 'bar',
        data: dataNhietDo.map(el => el.min)
      },
      {
        name: 'Avg',
        type: 'line',
        yAxisIndex: 1,
        data: dataNhietDo.map(el => el.avg)
      }
    ]
  }

  const doAm = {
    title: {
      show: false,
      text: 'Độ ẩm'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      show: false,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: false }
      }
    },
    legend: {
      data: ['Max', 'Min', 'Avg']
    },
    xAxis: [
      {
        type: 'category',
        data: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '%',
        min: 0,
        max: 100,
        interval: 50,
        axisLabel: {
          formatter: '{value} %'
        }
      },
      {
        type: 'value',
        name: '',
        min: 0,
        max: 100,
        interval: 5,
        axisLabel: {
          formatter: ''
        }
      }
    ],
    series: [
      {
        name: 'Max',
        type: 'bar',
        data: dataDoAm.map(el => el.max)
      },
      {
        name: 'Min',
        type: 'bar',
        data: dataDoAm.map(el => el.min)
      },
      {
        name: 'Avg',
        type: 'line',
        yAxisIndex: 1,
        data: dataDoAm.map(el => el.avg)
      }
    ]
  }

  const init = () => {
    instance({
      method: 'get',
      url: '/alarm/get-all-heart-beat-current-week?token=Y3ODkwIiwi'
    }).then(resp => {
      const dataChart = [[], [], [], [], [], [], []]
      if (resp?.data?.data?.length > 0) {
        let flag = resp?.data?.data[0].createdDate.split('T')[0]
        let i = 0
        resp.data.data.forEach(el => {
          if (flag !== el.createdDate.split('T')[0]) {
            dataChart[i+1].push(el)
            flag = el.createdDate.split('T')[0]
            i++
          } else {
            dataChart[i].push(el)
          }
        })
        const dataView = []
        const dataViewTemp = []

        for(let j = 0; j < dataChart.length; j++) {
          if (dataChart[j].length > 0) {
            let min = dataChart[j][0].humidity, max = 0;
            let min1 = dataChart[j][0].temperature, max1 = 0;
            dataChart[j].forEach(el => {
              // do am
              if (min > el.humidity) {
                min = el.humidity
              }
              if (max < el.humidity) {
                max = el.humidity
              }

              // nhiet do
              if (min1 > el.temperature) {
                min1 = el.temperature
              }
              if (max1 < el.temperature) {
                max1 = el.temperature
              }
            })
            dataView.push({
              min,
              max,
              avg: (min + max) / 2
            })
            dataViewTemp.push({
              min: min1,
              max: max1,
              avg: (min1 + max1) / 2
            })
          } else {
            dataView.push({
              min: 0,
              max: 0,
              avg: 0
            })
            dataViewTemp.push({
              min: 0,
              max: 0,
              avg: 0
            })
          }
        }
        setDataDoAm(dataView)
        setDataNhietDo(dataViewTemp)
      }
    });
  }

  useEffect(() => {
    init()
    interval = setInterval(() => {
      init()
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={5}>
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
                  Biểu đồ nhiệt độ
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={nhietDo}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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
                  Biểu đồ độ ẩm
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={doAm}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
}

export default Tables;
