import { Box, Button, Flex, Spacer, Text, Icon, Avatar, Tag } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

import dayjs from 'dayjs';
import 'dayjs/locale/es';


export function LaunchItem(launch) {
  return (
    <Box bg='gray.100' p={4} borderRadius='lg'>
      <Flex>
        <Flex align={'center'}>
          <Box mr={4}>
            <Avatar src={launch.links?.mission_patch_small} />
          </Box>
          <Box>
            <Text fontWeight='bold'>
              Mission <strong>{launch.mission_name}</strong>
            </Text>
            <Flex align={'center'}>
              <Icon as={HiCalendar} color={'gray.500'}></Icon>
              <Text fontSize={'sm'} ml={1} color={'gray.500'}>
                {dayjs(launch.launch_date_local).locale('es').format('D MMMM, YYYY')}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Spacer></Spacer>
        <Box>
          <Tag colorScheme={launch.launch_success ? 'green' : 'red'}>
            {launch.launch_success ? 'Success' : 'Failure'}
          </Tag>
        </Box>
      </Flex>
      <Flex justify={'end'}>
        <Link to={`/react-spacexmissions-app/launch/${launch.flight_number}`}>
          <Button mt={2} colorScheme={'purple'} size='sm'>More Details</Button>
        </Link>
      </Flex>
    </Box>
  )
}