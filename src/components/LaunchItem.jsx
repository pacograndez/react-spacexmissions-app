import { Box, Button, Flex, Spacer, Tag, Text, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";

import dayjs from 'dayjs';
import 'dayjs/locale/es';


export function LaunchItem(launch) {  
    return (
        <Box key={launch.flight_number} bg='gray.100' p={4} m={4} borderRadius='lg'>
          <Flex>
            <Text fontSize='2x1'>
              Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
            </Text>
            <Spacer></Spacer>
            <Tag p='2' colorScheme={launch.launch_success ? 'green' : 'red'}>
              {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>
          </Flex>
          <Flex align={'center'}>
            <Icon as={HiCalendar} color={'gray.500'}></Icon>
            <Text fontSize={'sm'} ml={1} color={'gray.500'}>
                {dayjs(launch.launch_date_local).locale('es').format('D MMMM, YYYY')}
                </Text>
          </Flex>
          <Button mt={2} colorScheme={'purple'}>More Details</Button>
        </Box>
    )
}