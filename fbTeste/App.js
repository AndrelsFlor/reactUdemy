import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyBxcNP2xiH15QMdzBdDCk2HoxCNw0a12hM',
      authDomain: 'configuracaofirebasereac-46290.firebaseapp.com',
      databaseURL: 'https://configuracaofirebasereac-46290.firebaseio.com',
      projectId: 'configuracaofirebasereac-46290',
      storageBucket: 'configuracaofirebasereac-46290.appspot.com',
      messagingSenderId: '1096468716140'
    };
    firebase.initializeApp(config);
  }
  // salvarDados() {
  //   var funcionarios = firebase.database().ref('funcionarios');
  //   //push serve para gerar um código identificador único
  //   // funcionarios
  //   //   .push()
  //   //   .child('nome')
  //   //   .set('Barada');

  //   funcionarios.push().set({
  //     nome: 'Klaatu',
  //     altura: '1,75',
  //     peso: '70kg'
  //   });
  // }

  // // listarDados() {
  // //   var pontuacao = firebase.database().ref('pontuacao');
  // //   pontuacao.on('value', snapshot => {
  // //     var pontos = snapshot.val();

  // //     this.setState({ pontuacao: pontos });
  // //   });
  // }

  cadastrarUsuario() {
    var email = 'klaatu@barada.com';
    var senha = 'klaatu';

    var usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha).catch(erro => {
      var mensagemErro = '';

      if (erro.code == 'auth/weak-password') {
        mensagemErro = 'A senha precisa ter no mínimo 6 caracteres';
      }
      alert(mensagemErro);
    });
  }

  verificaUsuarioLogado() {
    var usuario = firebase.auth();
    usuarioAtual = usuario.currentUser;

    usuario.onAuthStateChanged(usuarioAtual => {
      if (usuarioAtual) {
        alert('Usuário está logado');
      } else {
        alert('Usuário não está logado');
      }
    });

    // if (usuarioAtual) {
    //   alert('Usuário está logado');
    // } else {
    //   alert('Usuário não está logado');
    // }
  }

  deslogarUsuario() {
    var usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    var email = 'klaatu@barada.com';
    var senha = 'klaatu';

    var usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha).catch(erro => {
      var mensagemErro = '';

      alert(erro.message);
    });
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Button
          onPress={this.cadastrarUsuario}
          title="Cadastrar usuário"
          color="#841584"
          acessibilityLabel="Salvar dados"
        />

        <View style={{ marginTop: 40 }}>
          <Button
            onPress={this.verificaUsuarioLogado}
            title="Verifica usuário logado"
            color="#841584"
            acessibilityLabel="Verifica usuário logado"
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <Button
            onPress={this.deslogarUsuario}
            title="Deslogar usuário"
            color="#841584"
            acessibilityLabel="Deslogar usuário"
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <Button
            onPress={this.logarUsuario}
            title="Logar Usuário"
            color="#841584"
            acessibilityLabel="Logar Usuário"
          />
        </View>
        {/* <Button
          onPress={}
          title="Listar dados"
          color="#841584"
          acessibilityLabel="Listar dados"
        /> */}

        <Text />
      </View>
    );
  }
}
