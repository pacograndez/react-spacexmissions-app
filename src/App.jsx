import { Image } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png';
import { Route, Routes } from 'react-router-dom';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';

export function App() {

  return (
    <>
      <Image m={4} src={logo} width={300}></Image>
      <Routes>
        <Route path='' element={<LaunchList></LaunchList>}></Route>
        <Route path='launch/:launchId' element={<LaunchDetails></LaunchDetails>}></Route>
        <Route path='rockets/:rocketId' element={<RocketDetails></RocketDetails>}></Route>
      </Routes>
    </>
  )
}
