import { Heading, Box, Center, Spinner, SimpleGrid, Flex, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as API from './../services/launches';
import { LaunchItem } from './LaunchItem';

export function LaunchList() {

    const [launches, setLaunches] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        API.getAllLaunches().then(data => setLaunches(data))
        setTimeout(() => setIsLoaded(true), 3000);
    }, []);

    return (
        <>
            <Heading as='h1' size='lg' m={4} align='center'>SpaceX Launches</Heading>
            <Flex justify={'center'}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} padding={4} width={'1300px'}>
                    {launches.map((launch) => (
                        <Skeleton isLoaded={isLoaded} fadeDuration={2}>
                            <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
                        </Skeleton>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}