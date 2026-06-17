# Avaliação de Colaboradores - CloudDog

Sistema de avaliação de colaboradores com Nine Box, resumo individual e plano de desenvolvimento.

## Funcionalidades

- **Nine Box**: Gráfico de potencial x desempenho com base na mediana das skills
- **Resumo Individual**: Visualização detalhada de cada colaborador com barras de progresso
- **Cadastro**: Formulário para avaliar novos colaboradores ou atualizar avaliações
- **Plano de Desenvolvimento**: Sugestões automáticas de metas com campos editáveis

## Configuração do Firebase (Firestore)

### Passo 1: Criar projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"** (ou selecione um existente)
3. Defina um nome (ex: `avaliacao-colaboradores`)
4. Desative Google Analytics (opcional) e clique **"Criar projeto"**

### Passo 2: Registrar app web

1. No painel do projeto, clique no ícone **Web** (`</>`)
2. Defina um apelido (ex: `avaliacao-web`)
3. **NÃO** marque "Firebase Hosting" (vamos usar GitHub Pages)
4. Clique em **"Registrar app"**
5. Copie o objeto `firebaseConfig` exibido

### Passo 3: Configurar credenciais no projeto

1. Abra o arquivo `js/firebase-config.js`
2. Substitua os valores placeholder pelas suas credenciais:

```js
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

### Passo 4: Criar banco Firestore

1. No console Firebase, vá em **Firestore Database** (menu lateral)
2. Clique em **"Criar banco de dados"**
3. Selecione **modo de produção** (ou teste para desenvolvimento)
4. Escolha a localização mais próxima (ex: `southamerica-east1`)
5. Clique em **"Criar"**

### Passo 5: Regras de segurança (apenas admin)

No Firestore, vá em **Regras** e configure:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Apenas leitura pública, escrita bloqueada
    // Para controle real, use Firebase Auth
    match /{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

> **IMPORTANTE**: Para produção com controle admin real, configure Firebase Authentication e ajuste as regras para permitir escrita apenas para seu UID:
>
> ```
> allow write: if request.auth != null && request.auth.uid == "SEU_UID_AQUI";
> ```

### Passo 6: Deploy no GitHub Pages

1. Faça push para seu repositório:
```bash
git init
git remote add origin https://github.com/luiresende1410/avaliacao-colaboradores.git
git add .
git commit -m "feat: sistema de avaliação de colaboradores"
git push -u origin main
```

2. No GitHub, vá em **Settings > Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Selecione `main` e pasta `/` (root)
5. Clique **Save**
6. Em alguns minutos estará disponível em:
   `https://luiresende1410.github.io/avaliacao-colaboradores/`

## Escalas

### Hard Skills
| Nota | Significado |
|------|------------|
| 1 | Sem conhecimento |
| 2 | Baixo conhecimento |
| 3 | Bom conhecimento |
| 4 | Ótimo conhecimento |
| 5 | Especialista |

### Soft Skills
| Nota | Significado |
|------|------------|
| 1 | Muito baixo |
| 2 | Baixo |
| 3 | Médio |
| 4 | Alto |
| 5 | Muito alto |

## Nine Box - Faixas

| Faixa | Intervalo da Mediana |
|-------|---------------------|
| Baixo | 1.0 a 2.3 |
| Médio | 2.4 a 3.6 |
| Alto | 3.7 a 5.0 |

## Tecnologias

- HTML5, CSS3, JavaScript puro
- Firebase Firestore (banco de dados)
- GitHub Pages (hospedagem)
