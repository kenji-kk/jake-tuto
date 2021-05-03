import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";

export default function app() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>あああああああ</p>
    </ChakraProvider>
  );
}
