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

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg_login.jpeg";
import { instance } from "../../../service/service"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Basic() {

  const history = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {

    if (username === 'admin' && password === '12345') {
      history('/trang-chu')
    } else {
      alert("Tên tài khoản hoặc mật khẩu không chính xác!")
    }
    // const url = `http://34.124.188.122:8084/api/v1/account/login?username=${username}&password=${password}`
    // instance.get(url).then(el => {
    // })
  }
  return (
    <>
      <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Đăng nhập
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Tên đăng nhập" fullWidth onChange={evt => {
                setUsername(evt.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Mật khẩu" fullWidth onChange={evt => {
                setPassword(evt.target.value)
              }}/>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
                Đăng nhập
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
    </>
  );
}

export default Basic;
