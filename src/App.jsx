import { Image } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png';
import { Route, Routes } from 'react-router-dom';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';

export function App() {

  return (
    <>
      <Image m={4} src={logo} width={300}></Image>
      <Routes>
        <Route path='/react-spacexmissions-app/' element={<LaunchList></LaunchList>}></Route>
        <Route path='/react-spacexmissions-app/launch/:launchId' element={<LaunchDetails></LaunchDetails>}></Route>
      </Routes>
    </>
  )
}
