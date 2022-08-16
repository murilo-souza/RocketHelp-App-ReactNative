import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";
import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";

import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {}

  return (
    <VStack flex={1} alignItems="center" bg="gray.400" px={8} pt={24}>
      <Logo />
      <Heading color="gray.50" fontSize="xl" mt={20} mb={6}>
        Acessar sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setEmail}
        value={email}
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mb={8}
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
