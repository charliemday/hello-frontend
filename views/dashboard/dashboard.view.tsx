import { Box, HStack, Text } from "@chakra-ui/react";
import { SnapshotCard } from "components/cards";
import React from "react";
import { HiChartPie } from "react-icons/hi";

interface Props {}

const ICON_SIZE = 32;

export const DashboardView: React.FC<Props> = () => (
  <Box p={24}>
    <HStack>
      <SnapshotCard
        title="£12,600"
        subtitle="Net Profit"
        icon={<HiChartPie fontSize={ICON_SIZE} />}
      />
      <SnapshotCard
        title="£36,809"
        subtitle="Gross Profit"
        icon={<HiChartPie fontSize={ICON_SIZE} />}
      />
      <SnapshotCard
        title="£10,901"
        subtitle="Net Income"
        icon={<HiChartPie fontSize={ICON_SIZE} />}
      />
    </HStack>

    <Box mt={24}>
      <Text opacity={0.75}>Some more components...</Text>
    </Box>
  </Box>
);
