import { useState, useEffect } from 'react';
import * as API from './services/launches';
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';
import logo from './assets/logo-spacex.png';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(data => setLaunches(data))
  }, []);

  return (
    <>
    <Image m={4} src={logo} width={300}></Image>
    <Heading as='h1' size='lg' m={4} align='center'>SpaceX Launches</Heading>
    <ul>
      {launches.map((launch) => (
        <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
      ))}
    </ul>
    </>
  )
}
