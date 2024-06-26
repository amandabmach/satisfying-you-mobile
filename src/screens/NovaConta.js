import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#372775',
    secondary: 'gray',
  },
};

const NovaConta = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaAgain, setSenhaAgain] = useState('');

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleCadastroPress = () => {
    if (!email || !email.includes('@')) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }

    if (senha !== senhaAgain) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  const goBackHome = () => {
    props.navigation.pop()
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.backgroundView}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            label="Email"
            value={email}
            onChangeText={text => {setEmail(text); setInvalidEmail(false);}}
          />
          {invalidEmail && <Text style={styles.invalidText}>E-mail inválido</Text>}

          <TextInput
            style={styles.input}
            label="Senha"
            value={senha}
            onChangeText={text => {setSenha(text); setInvalidPassword(false);}}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            label="Repetir Senha"
            value={senhaAgain}
            onChangeText={text => {setSenhaAgain(text); setInvalidPassword(false);}}
            secureTextEntry={true}
          />
          {invalidPassword && <Text style={styles.invalidText}>As senhas não correspondem</Text>}

          <Button
            style={styles.newAccountButton}
            mode="contained"
            onPress={handleCadastroPress}
            onPressOut={goBackHome}>
            <Text style={styles.newAccountButtonLabel}>Cadastrar</Text>
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  newAccountButton: {
    backgroundColor: '#37BD6D',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    padding: 5,
  },
  invalidText: {
    color: '#FD7979',
    marginBottom: 10,
  },
  newAccountButtonLabel: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 21,
  },
});

export default NovaConta;
