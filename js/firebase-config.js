// ============================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================
// Substitua os valores abaixo pelas credenciais do seu projeto Firebase.
// Para obter essas informações:
// 1. Acesse https://console.firebase.google.com
// 2. Selecione seu projeto (ou crie um novo)
// 3. Vá em Configurações do projeto (engrenagem) > Geral
// 4. Na seção "Seus apps", clique em Web (</>) para registrar um app
// 5. Copie os valores do firebaseConfig

const firebaseConfig = {
    apiKey: "AIzaSyAKbqSL-MsuO04wCl_oqef7ylftZVleg-E",
    authDomain: "avaliacao-colab.firebaseapp.com",
    projectId: "avaliacao-colab",
    storageBucket: "avaliacao-colab.firebasestorage.app",
    messagingSenderId: "443586765686",
    appId: "1:443586765686:web:a9272ad9425fcbc7615057"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao Firestore
const db = firebase.firestore();
