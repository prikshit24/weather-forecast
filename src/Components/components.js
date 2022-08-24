import { Box, Typography, styled } from "@mui/material";

export const PageContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:'100vw',
    backgroundColor:'#cfd5d3',
    boxShadow: '5px 5px 20px #1a271e77',
}))

export const Container = styled(Box)(() => ({
    backgroundColor:'#2c089b',
    height:'500px',
    width:'400px',
    paddingBlock: '30px'
}))

export const TimeAndDateContainer = styled(Box)(() => ({
    width:'100%',
    paddingBlock: '20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}))

export const Date = styled(Typography)(() => ({
    color:'#f9f9f9',
    fontSize: '2rem',
    fontWeight: 'bold',
}))

export const Time = styled(Typography)(() => ({
    color:'#f9f9f9',
    fontSize: '3rem',
    fontFamily:'Montserrat, sans-serif',
}))

export const CurrentTempratureBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center'
}))

export const CurrentTemprature = styled(Typography)(() => ({
    color:'#f9f9f9',
    fontSize: '4rem',
    fontFamily:'Montserrat, sans-serif',
}))

export const Celsius = styled('span')(() => ({
    fontSize: '1.5rem',
    color:'#f9f9f9',
    marginTop: '10px'
}))

export const WeatherIcon = styled('img')(() => ({
    borderRadius:'50%', 
    height:'50px', 
    width:'50px', 
    marginTop:'20px', 
    marginLeft:'20px',
}))

export const WindContainer = styled(Box)(() => ({
    display:'flex',
    justifyContent:'center',
    gap:'15px',
}))

export const TempAndWind = styled(Typography)(() => ({
    color:'#f9f9f9',
    fontSize: '2rem',
    fontWeight: 'bold',
}))
