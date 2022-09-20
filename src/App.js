import logo from "./logo.svg";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Stack, Button, Spinner, Input } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="telegram" size="xs">
        Button
      </Button>
      <Button colorScheme="messenger" size="sm">
        Button
      </Button>
      <Button colorScheme="twitter" size="md">
        Button
      </Button>
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" color="blue.500" />
        <Spinner size="sm" color="red.500" />
        <Spinner size="md" color="green.500" />
      </Stack>

      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
