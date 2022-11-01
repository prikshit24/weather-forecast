import React, { useEffect, useState } from 'react';
import './App.css';
import { Celsius, Container, CurrentTemprature, CurrentTempratureBox, Date, PageContainer, TempAndWind, Time, TimeAndDateContainer, WeatherIcon, WindContainer } from './Components/components';
import { FormControl, Select, MenuItem } from "@mui/material";
import { Name } from './CitiesNames/citiesName'
import { fetchAsyncWeather, getWeather } from './Store/WeatherSlice/WeatherSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './Components/useStyles';

function App() {

  const [cityName, setCityName] = useState('Chandigarh')
  
  const dispatch = useDispatch();
  const data = useSelector(getWeather);
  
  useEffect(() => {
    dispatch(fetchAsyncWeather(cityName))
  }, [cityName])

  const TimeDate = data?.location?.localtime?.trim().split(/\s+/);

  const handleChange = (event) => {
    setCityName(event.target.value)
  }

  const classes = useStyles()

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
  };

  return (
    <PageContainer>
      <Container>

        <FormControl className={classes.formControl} fullWidth>
          <Select
            MenuProps={menuProps}
            classes={{
              select: classes.select,
              icon: classes.selectIcon,
              iconOpen: classes.iconOpen,
            }}
            value={cityName}
            label="Age"
            onChange={handleChange}
          >
            {Name.map((data, index) => <MenuItem key={index} value={data}>{data}</MenuItem>)}
          </Select>
        </FormControl>

        <TimeAndDateContainer>
          <Date>
            {TimeDate && TimeDate[0]}
          </Date>
          <Time>
            {TimeDate && TimeDate[1]}
          </Time>
        </TimeAndDateContainer>

        <CurrentTempratureBox>
          <CurrentTemprature>
            {data?.current?.temperature}
          </CurrentTemprature>
          <Celsius>&#8451;</Celsius>
          <WeatherIcon src={data?.current?.weather_icons[0]}/>
        </CurrentTempratureBox>

        <WindContainer>
          <TempAndWind>
            Wind Speed: {data?.current?.wind_speed}km/h
          </TempAndWind>
        </WindContainer>

        <WindContainer>
          <TempAndWind>
            Humidity: {data?.current?.humidity}%
          </TempAndWind>
        </WindContainer>

        <WindContainer>
          <TempAndWind>
            Air Pressure: {data?.current?.pressure}hPa
          </TempAndWind>
        </WindContainer>

      </Container>
    </PageContainer>
  );
}

export default App;
