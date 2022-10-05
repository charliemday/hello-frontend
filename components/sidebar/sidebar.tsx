import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { HiAcademicCap, HiChartBar } from "react-icons/hi";
import { useRouter } from "next/router";

import { ROUTES } from "config";

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
  return (
    <Flex bgColor="purple.500" h="100vh" w="15vw">
      <Flex flexDir="column" position="relative" w="full">
        <Flex
          p={4}
          justifyContent="center"
          alignItems="flex-bottom"
        >
          <Text color="white" fontWeight="semibold" fontSize="xl">
            Orgment
          </Text>
        </Flex>
        <Divider my={6} />
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
      </Flex>
    </Flex>
  );
};
