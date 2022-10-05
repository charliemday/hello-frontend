import { Flex, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { useUserDetailsQuery } from "api/user.api";
import { Sidebar } from "components/sidebar";
import { RootState } from "store";
import { AuthState, setActiveTeam } from "store/slices";
import { ROUTES } from "config";
import { useListTeamsQuery } from "api/team.api";
import { ProfileCard } from "components/cards";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const activeTeam = useSelector((state: RootState) => state.team?.activeTeam);
  const authToken = authState?.token;

  const router = useRouter();
  const dispatch = useDispatch();

  useUserDetailsQuery(undefined, {
    skip: !authToken,
  });
  const { data: teamsData } = useListTeamsQuery(undefined, {
    skip: !authToken,
  });

  useEffect(() => {
    if (!activeTeam && teamsData?.length) {
      dispatch(setActiveTeam(teamsData[0]));
    }
  }, [teamsData, activeTeam, dispatch]);

  useEffect(() => {
    /**
     * On load check if the user has a token
     */
    if (router.isReady) {
      if (!authToken) {
        router.push(ROUTES.BASE);
      }
    }
  }, [router, authToken]);

  return (
    <div>
      <Flex position="relative" bgColor="#F5F5F5">
        <Sidebar />
        <Box position="absolute" right={10} top={10}>
          <ProfileCard />
        </Box>
        <Box w="full">
          {children}
        </Box>
      </Flex>
    </div>
  );
};
