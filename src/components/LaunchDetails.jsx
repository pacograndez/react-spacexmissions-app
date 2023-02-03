import { Box, Flex, Text, Center, Spinner, Button, Image, AspectRatio, Icon, Spacer, VStack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiCalendar } from "react-icons/hi";
import * as API from './../services/launches';

import dayjs from 'dayjs';
import 'dayjs/locale/es';

export function LaunchDetails() {

    const { launchId } = useParams();
    const [launch, setLaunch] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(data => setLaunch(data))
            .catch(console.log);
        setTimeout(() => setIsLoaded(true), 1000);
    }, [launchId]);

    return (
        <Flex justify={'center'}>
            <SimpleGrid columns={1} padding={4} width={'600px'}>
                <Box background={'gray.100'} padding={4} borderRadius='lg'>
                    <Skeleton isLoaded={isLoaded} fadeDuration={2}>
                        <VStack>
                            <Flex justify={'center'}>
                                <Image src={launch.links?.mission_patch_small} boxSize='200px' alt='Dan Abramov' />
                            </Flex>
                            <Box>
                                <Text fontSize='3xl'>
                                    Mission <strong>{launch.mission_name}</strong>
                                </Text>
                                <Flex align={'center'} justify={'center'}>
                                    <Icon as={HiCalendar} color={'gray.500'}></Icon>
                                    <Text fontSize={'sm'} ml={1} color={'gray.500'}>
                                        {dayjs(launch.launch_date_local).locale('es').format('D MMMM, YYYY')}
                                    </Text>
                                </Flex>
                            </Box>
                            <Box width={'100%'}>
                                <Text fontSize={{ base: 'md', md: 'md' }} my={8}>{launch.details}</Text>
                            </Box>
                            <Box width={'100%'}>
                                <AspectRatio maxWidth={{ base: '100%', md: '300px' }} margin={'auto'}>
                                    <iframe
                                        title='naruto'
                                        src={`${launch.links?.video_link.replace("watch?v=", "v/").replace('v/', 'embed/')}`}
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                            <Box>
                                <Link to={`/`}>
                                    <Button colorScheme={'purple'} size='xs'>Back to list</Button>
                                </Link>
                            </Box>
                        </VStack>
                    </Skeleton>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}