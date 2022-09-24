import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const SnapshotCard: React.FC<Props> = ({ title, subtitle, icon }) => (
  <Flex border="solid 1px gray" borderRadius="md" py={3} px={6} alignItems="center" cursor="pointer" _hover={{
    boxShadow: "md",
  }}>
     <Flex flexDir="column" pr={6}>
    <Text fontSize="xs" textColor="gray.500">{subtitle}</Text>
    <Text fontSize="2xl" fontWeight="bold">{title}</Text>

     </Flex>
     {icon}
  </Flex>
);
