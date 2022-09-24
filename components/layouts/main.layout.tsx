import { Flex, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useUserDetailsQuery } from "api/user.api";
import { Sidebar } from "components/sidebar";
import { RootState } from "store";
import { AuthState } from "store/slices";
import { useRouter } from "next/router";
import { ROUTES } from "config";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    /**
     * On load check if the user has a token
     */
    if (router.isReady) {
      if (!authState.token) {
        router.push(ROUTES.BASE);
      }
    }
  }, [router, authState?.token]);

  useUserDetailsQuery(undefined);

  return (
    <div>
      <Flex>
        <Sidebar />
        <Box>{children}</Box>
      </Flex>
    </div>
  );
};
