import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { HiAcademicCap, HiChartBar } from "react-icons/hi";

import { ROUTES } from "config";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

interface Props {}

const sidebarItems: {
  label: string;
  icon: React.ReactNode;
  route: string;
  isDisabled?: boolean;
}[] = [
  {
    label: "Dashboard",
    icon: <BiHomeAlt color="white" fontSize={24} />,
    route: ROUTES.DASHBOARD,
  },
  {
    label: "Route #2",
    icon: <HiAcademicCap color="white" fontSize={24} />,
    route: ROUTES.DASHBOARD,
    isDisabled: true,
  },
  {
    label: "Route #3",
    icon: <HiChartBar color="white" fontSize={24} />,
    route: ROUTES.DASHBOARD,
    isDisabled: true,
  },
];

export const Sidebar: React.FC<Props> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Flex bgColor="purple.500" h="100vh" w="15vw">
      <Flex flexDir="column" position="relative" w="full">
        <Divider my={12} />
        <Stack>
          {sidebarItems.map((item, index) => (
            <HStack
              key={index}
              alignItems="center"
              h={10}
              pl={6}
              onClick={() => router.push(item.route)}
              cursor={item.isDisabled ? "not-allowed" : "pointer"}
              opacity={item.isDisabled ? 0.5 : 1}
              w="full"
            >
              {item.icon}
              <Text
                textColor="white"
                fontWeight="medium"
                fontSize="large"
                _hover={{
                  fontWeight: "semibold",
                }}
              >
                {item.label}
              </Text>
            </HStack>
          ))}
        </Stack>

        <HStack
          alignItems="center"
          cursor="pointer"
          pl={6}
          position="absolute"
          bottom={10}
          onClick={() => dispatch({ type: "LOGOUT" })}
        >
          <IoMdExit color="white" fontSize={24} />
          <Text
            textColor="white"
            fontWeight="medium"
            fontSize="large"
            _hover={{
              fontWeight: "semibold",
            }}
          >
            Logout
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
