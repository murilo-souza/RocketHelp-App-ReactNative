import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";
import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";
import auth from "@react-native-firebase/auth";
import { Input } from "../components/Input";
import { Alert } from "react-native";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "E-mail e senha são necessários");
    }

    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail ou senha inválido");
        }

        if (error.code === "auth/wrong-password") {
          return Alert.alert("Entrar", "E-mail ou senha inválido");
        }

        if (error.code === "auth/user-not-found") {
          return Alert.alert("Entrar", "Usuário não cadastrado");
        }

        return Alert.alert("Entrar", "Não foi possível acessar");
      });
  }

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

      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  );
}
