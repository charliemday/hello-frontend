import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { SnapshotCard, TerritoryCard } from "components/cards";
import { LineChart } from "components/charts";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface Props {}

const ICON_SIZE = 32;

export const DashboardView: React.FC<Props> = () => {
  const activeTeam = useSelector((state: RootState) => state.team?.activeTeam);

  const [selectedSnapshot, setSelectedSnapshot] = useState(0);

  return (
    <>
      <Box pl={24} pt={12}>
        {activeTeam ? (
          <Heading>{`${activeTeam?.name}'s Territories`}</Heading>
        ) : null}
      </Box>
      <Box p={24} w="full">
        <HStack alignItems="flex-start">
          <Stack flex={2}>
            <HStack>
              <SnapshotCard
                title="$20.3M"
                onClick={() => setSelectedSnapshot(0)}
                isSelected={selectedSnapshot === 0}
                subtitle="Total AOV/ARR"
                listItems={[
                  {
                    prefix: "12%",
                    suffix: "Y/Y Growth",
                  },
                  {
                    prefix: "30%",
                    suffix: "2YR CAGR",
                  },
                ]}
              />
              <SnapshotCard
                title="$ 2.3M"
                onClick={() => setSelectedSnapshot(1)}
                isSelected={selectedSnapshot === 1}
                subtitle="ACV Closed this FY"
                listItems={[
                  {
                    prefix: "-2%",
                    suffix: "Y/Y",
                  },
                ]}
              />
              <SnapshotCard
                title="$156M"
                onClick={() => setSelectedSnapshot(2)}
                isSelected={selectedSnapshot === 2}
                subtitle="Total Addressable Market"
                listItems={[
                  {
                    prefix: "13%",
                    suffix: "Penetration",
                  },
                ]}
              />
            </HStack>

            <Box
              mt={24}
              w="100%"
              h={400}
              boxShadow="lg"
              borderRadius="lg"
              p={6}
              border="solid 1px lightgray"
              bgColor="white"
            >
              <LineChart />
            </Box>
          </Stack>

          <Box flex={1}>
            <TerritoryCard />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
