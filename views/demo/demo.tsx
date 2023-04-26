import React from "react";
import { Container, Stack, Heading } from "@chakra-ui/react";

export const DemoView: React.FC = () => {
  return (
    <Container pt={12}>
      <Stack>
        <Heading>This is the Demo Page</Heading>
      </Stack>
      <Stack>{/* INSERT DEMO CODE HERE AND PRESS SAVE */}</Stack>
    </Container>
  );
};
