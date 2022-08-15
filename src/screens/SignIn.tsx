import { VStack, Heading } from "native-base";
import Logo from "../assets/logo_primary.svg";

export function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.400" px={8} pt={24}>
      <Logo />
      <Heading color="gray.50" fontSize="xl" mt={20} mb={6}>
        Acessar sua conta
      </Heading>
    </VStack>
  );
}
