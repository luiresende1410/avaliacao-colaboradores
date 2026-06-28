// ============================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================
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

// ============================================
// CONTROLE DE ACESSO
// ============================================
const EMAILS_PERMITIDOS = [
    "alessandro.oliveira@clouddog.com.br",
    "lucas.torino@clouddog.com.br",
    "jefferson.silva@clouddog.com.br",
    "leonardo.miranda@clouddog.com.br",
    "luiz.resende@clouddog.com.br"
];

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Força seleção de conta a cada login
provider.setCustomParameters({ prompt: 'select_account' });

function isEmailPermitido(email) {
    return EMAILS_PERMITIDOS.includes(email.toLowerCase());
}

function mostrarLogin() {
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('login-error').style.display = 'none';
}

function mostrarApp(user) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    document.getElementById('user-info').innerHTML = `
        <img src="${user.photoURL || ''}" alt="" class="user-avatar">
        <span class="user-name">${user.displayName || user.email}</span>
        <button class="btn-logout" onclick="fazerLogout()">Sair</button>
    `;
}

function mostrarAcessoNegado(email) {
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-error').innerHTML = `
        <strong>Acesso negado</strong><br>
        O email <code>${email}</code> não tem permissão para acessar este sistema.<br>
        Entre em contato com o administrador.
    `;
}

async function fazerLogin() {
    try {
        const result = await auth.signInWithPopup(provider);
        const email = result.user.email;

        if (!isEmailPermitido(email)) {
            mostrarAcessoNegado(email);
            await auth.signOut();
            return;
        }

        mostrarApp(result.user);
    } catch (err) {
        console.error("Erro no login:", err);
        document.getElementById('login-error').style.display = 'block';
        document.getElementById('login-error').textContent = 'Erro ao fazer login. Tente novamente.';
    }
}

async function fazerLogout() {
    await auth.signOut();
    mostrarLogin();
}

// Verificar estado de autenticação ao carregar
auth.onAuthStateChanged(user => {
    if (user && isEmailPermitido(user.email)) {
        mostrarApp(user);
    } else {
        if (user) {
            // Usuário logado mas sem permissão
            mostrarAcessoNegado(user.email);
            auth.signOut();
        } else {
            mostrarLogin();
        }
    }
});
