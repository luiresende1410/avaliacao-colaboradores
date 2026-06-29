// ============================================
// DADOS INICIAIS DA PLANILHA
// ============================================
const HARD_SKILLS_SRE = [
    "Scripting e Automação (Python, Bash, PowerShell)",
    "Administração de Sistemas (Linux e Windows)",
    "Pipelines CI/CD (Jenkins, GitLab CI, GitHub Actions)",
    "Containers e Orquestração (Docker, Kubernetes)",
    "IaC (Terraform, Ansible, CloudFormation)",
    "GCP (Compute, Redes, Serverless)",
    "AWS (Compute, Redes, Serverless)",
    "Datadog (Monitoramento, APM, Logs)",
    "Observabilidade (Prometheus, Grafana, CloudWatch)",
    "Segurança de Endpoint e Firewall (Sophos)",
    "Redes (Firewalls, VPNs, Roteamento)",
    "Backup e Disaster Recovery (Acronis)",
    "Banco de Dados (SQL e NoSQL)",
    "Resolução de Problemas e Debugging",
    "Documentação e Gestão de Incidentes"
];

const HARD_SKILLS_DEV = [
    "Python (scripting, backend)",
    "JavaScript / TypeScript",
    "Frameworks Web (React, FastAPI, Express, etc.)",
    "APIs REST e Design de Contratos",
    "Banco de Dados SQL (modelagem, queries)",
    "Banco de Dados NoSQL (DynamoDB, MongoDB)",
    "Testes Automatizados (unitários, integração)",
    "Git e Estratégias de Branching",
    "Containers e Docker",
    "CI/CD (pipelines, deploy automatizado)",
    "IaC (Terraform, Ansible, CloudFormation)",
    "AWS: Serverless (Lambda, API Gateway, Step Functions)",
    "AWS: Serviços de Aplicação (S3, SQS, SNS, EventBridge)",
    "Segurança de Aplicações (OWASP, auth, secrets)",
    "IA Generativa (AWS Bedrock, Prompt Engineering)",
    "Machine Learning (AWS SageMaker)",
    "Resolução de Problemas e Debugging"
];

// Função para obter Hard Skills por área
function getHardSkills(area) {
    if (area === 'DEV') return HARD_SKILLS_DEV;
    return HARD_SKILLS_SRE; // SRE e DEVOPS usam a mesma lista
}

// Manter compatibilidade — HARD_SKILLS aponta para SRE/DEVOPS por padrão
const HARD_SKILLS = HARD_SKILLS_SRE;

const SOFT_SKILLS = [
    "Foco no Cliente",
    "Senso de Dono",
    "Inovação e Simplificação",
    "Tomada de Decisão",
    "Aprendizado Contínuo",
    "Excelência e Qualidade",
    "Visão Estratégica",
    "Proatividade",
    "Gestão de Recursos",
    "Confiabilidade e Transparência",
    "Capacidade Analítica",
    "Assertividade e Colaboração",
    "Orientação a Resultados"
];

const DISCIPLINAR = [
    "Pontualidade",
    "Assiduidade",
    "Postura Profissional",
    "Cumprimento de Prazos",
    "Comunicação",
    "Trabalho em Equipe",
    "Respeito aos Processos"
];

// Dados da planilha original (serão migrados como Q2-2026)
const DADOS_PLANILHA = [
    { nome: "André Novaes", email: "andre.novaes@clouddog.com.br", area: "DEVOPS", hard: [3,3,2,3,4,2,3,1,1,1,1,1,1,2,3], soft: [4,3,2,4,3,4,3,4,3,3,4,2,4], disciplinar: [4,4,4,3,3,4,4] },
    { nome: "Bruno Loschi", email: "bruno.loschi@clouddog.com.br", area: "SRE", hard: [3,3,1,3,3,3,3,1,2,1,2,1,3,3,3], soft: [4,4,3,3,3,3,3,2,3,3,3,3,3], disciplinar: [4,4,4,4,3,4,4] },
    { nome: "Felipe Vieira", email: "felipe.vieira@clouddog.com.br", area: "SRE", hard: [3,3,1,1,3,1,3,1,2,1,1,1,3,3,3], soft: [5,4,4,2,4,3,4,2,3,2,3,3,4], disciplinar: [5,5,4,4,3,4,5] },
    { nome: "Gabriel Abramo", email: "gabriel.abramo@clouddog.com.br", area: "SRE", hard: [5,5,5,4,5,1,5,3,4,1,3,1,4,5,3], soft: [4,3,5,4,5,4,4,2,4,3,3,4,4], disciplinar: [4,4,5,5,4,4,5] },
    { nome: "Guilherme Santos", email: "guilherme.santos@clouddog.com.br", area: "SRE", hard: [5,5,4,4,4,1,4,1,3,1,3,1,4,5,3], soft: [4,4,4,3,3,3,4,3,3,3,4,3,4], disciplinar: [4,4,4,4,4,4,4] },
    { nome: "Gustavo Kowalski", email: "gustavo.kowalski@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Gustavo Silva", email: "gustavo.silva@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Iago Faria", email: "iago.faria@clouddog.com.br", area: "SRE", hard: [3,3,3,2,3,1,3,1,3,2,2,1,3,4,3], soft: [5,4,2,3,3,4,3,3,3,3,3,3,4], disciplinar: [5,5,4,4,4,5,5] },
    { nome: "Jefferson Silva", email: "jefferson.silva@clouddog.com.br", area: "DEVOPS", hard: [4,4,5,5,5,4,5,5,4,2,3,3,4,5,3], soft: [5,5,5,5,5,5,5,4,5,5,5,5,5], disciplinar: [5,5,5,5,5,5,5] },
    { nome: "João Felipe Bertini", email: "joao.bertini@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Kayke Peres", email: "kayke.peres@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Kayky Stiliano", email: "kayky.stiliano@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Leonardo Miranda", email: "leonardo.miranda@clouddog.com.br", area: "SRE", hard: [5,5,4,3,5,3,5,3,5,2,4,1,4,5,3], soft: [3,3,5,3,4,4,4,3,4,4,4,3,4], disciplinar: [4,4,5,4,4,4,4] },
    { nome: "Lucas Ortiz", email: "lucas.ortiz@clouddog.com.br", area: "SRE", hard: [5,4,3,4,4,1,4,1,3,4,2,1,4,5,3], soft: [4,4,4,4,4,5,4,4,4,3,4,5,5], disciplinar: [5,5,5,5,4,5,5] },
    { nome: "Lucas Torino", email: "lucas.torino@clouddog.com.br", area: "SRE", hard: null, soft: null, disciplinar: null },
    { nome: "Vinicius Rodrigues", email: "vinicius.rodrigues@clouddog.com.br", area: "SRE", hard: null, soft: null, disciplinar: null },
    { nome: "Vitor Santana", email: "vitor.santana@clouddog.com.br", area: "SRE", hard: null, soft: null, disciplinar: null }
];

// Estado global da aplicação
const state = {
    colaboradores: [],   // Lista de perfis (nome, email, area)
    avaliacoes: [],      // Lista de avaliações com quarter
    currentQuarter: "Q2-2026"
};

// ============================================
// CLASSIFICAÇÃO DAS SOFT SKILLS
// ============================================
// Índices das Soft Skills que medem EXECUÇÃO (impactam desempenho atual)
const SOFT_EXECUCAO_INDICES = [0, 5, 8, 9, 12];
// 0 = Foco no Cliente
// 5 = Excelência e Qualidade
// 8 = Gestão de Recursos
// 9 = Confiabilidade e Transparência
// 12 = Orientação a Resultados

// Índices das Soft Skills que medem POTENCIAL (capacidade de crescimento)
const SOFT_POTENCIAL_INDICES = [1, 2, 3, 4, 6, 7, 10, 11];
// 1 = Senso de Dono
// 2 = Inovação e Simplificação
// 3 = Tomada de Decisão
// 4 = Aprendizado Contínuo
// 6 = Visão Estratégica
// 7 = Proatividade
// 10 = Capacidade Analítica
// 11 = Assertividade e Colaboração

// Pesos para o cálculo de Desempenho
const PESO_HARD = 0.4;
const PESO_DISCIPLINAR = 0.3;
const PESO_SOFT_EXECUCAO = 0.3;

// ============================================
// UTILITÁRIOS
// ============================================
function calcMediana(arr) {
    if (!arr || arr.length === 0) return null;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Calcula o DESEMPENHO (eixo X do Nine Box)
 * Média ponderada de:
 *   - Mediana Hard Skills (40%)
 *   - Mediana Disciplinar (30%)
 *   - Mediana Soft Skills de execução (30%)
 */
function calcDesempenho(avaliacao) {
    if (!avaliacao || !avaliacao.hard || !avaliacao.soft) return null;

    const medHard = calcMediana(avaliacao.hard);
    const softExecucao = SOFT_EXECUCAO_INDICES.map(i => avaliacao.soft[i]);
    const medSoftExec = calcMediana(softExecucao);

    // Se não tem disciplinar, redistribui o peso entre hard e soft execução
    if (!avaliacao.disciplinar) {
        return Math.round(((medHard * 0.55) + (medSoftExec * 0.45)) * 100) / 100;
    }

    const medDisc = calcMediana(avaliacao.disciplinar);
    return Math.round(((medHard * PESO_HARD) + (medDisc * PESO_DISCIPLINAR) + (medSoftExec * PESO_SOFT_EXECUCAO)) * 100) / 100;
}

/**
 * Calcula o POTENCIAL (eixo Y do Nine Box)
 * Mediana das Soft Skills de crescimento (8 skills)
 */
function calcPotencial(avaliacao) {
    if (!avaliacao || !avaliacao.soft) return null;

    const softPotencial = SOFT_POTENCIAL_INDICES.map(i => avaliacao.soft[i]);
    return calcMediana(softPotencial);
}

function getLevelLabel(val, type) {
    if (type === 'hard') {
        const labels = { 1: 'Sem conhecimento', 2: 'Baixo', 3: 'Bom', 4: 'Ótimo', 5: 'Especialista' };
        return labels[val] || '-';
    } else if (type === 'disciplinar') {
        const labels = { 1: 'Crítico', 2: 'Abaixo do esperado', 3: 'Adequado', 4: 'Bom', 5: 'Exemplar' };
        return labels[val] || '-';
    } else {
        const labels = { 1: 'Muito baixo', 2: 'Baixo', 3: 'Médio', 4: 'Alto', 5: 'Muito alto' };
        return labels[val] || '-';
    }
}

function getNineBoxPos(desempenho, potencial) {
    function getZone(val) {
        if (val <= 2.3) return 1;
        if (val <= 3.6) return 2;
        return 3;
    }
    return { row: getZone(potencial), col: getZone(desempenho) };
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `toast show ${type}`;
    setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// Buscar avaliação de um colaborador no quarter atual
function getAvaliacaoAtual(email) {
    return state.avaliacoes.find(a => a.email === email && a.quarter === state.currentQuarter);
}

// ============================================
// FIRESTORE: CARREGAR E SALVAR
// ============================================
async function carregarDados() {
    try {
        // Carregar perfis de colaboradores
        const colabSnapshot = await db.collection("colaboradores").get();
        const firebaseColabs = [];
        colabSnapshot.forEach(doc => {
            firebaseColabs.push({ id: doc.id, ...doc.data() });
        });

        // Carregar avaliações
        const avalSnapshot = await db.collection("avaliacoes").get();
        const firebaseAvals = [];
        avalSnapshot.forEach(doc => {
            firebaseAvals.push({ id: doc.id, ...doc.data() });
        });

        // Merge com dados da planilha (perfis)
        const emailsFirebase = firebaseColabs.map(c => c.email);
        DADOS_PLANILHA.forEach(p => {
            if (!emailsFirebase.includes(p.email)) {
                firebaseColabs.push({ id: null, nome: p.nome, email: p.email, area: p.area });
            }
        });

        // Merge avaliações da planilha (como Q2-2026)
        DADOS_PLANILHA.forEach(p => {
            if (p.hard && p.soft) {
                const jaExiste = firebaseAvals.find(a => a.email === p.email && a.quarter === "Q2-2026");
                if (!jaExiste) {
                    firebaseAvals.push({
                        id: null,
                        email: p.email,
                        quarter: "Q2-2026",
                        hard: p.hard,
                        soft: p.soft,
                        disciplinar: p.disciplinar || null
                    });
                }
            }
        });

        state.colaboradores = firebaseColabs;
        state.avaliacoes = firebaseAvals;
        console.log(`✅ ${state.colaboradores.length} colaboradores, ${state.avaliacoes.length} avaliações carregadas`);
    } catch (err) {
        console.warn("Firebase não configurado, usando dados locais:", err.message);
        state.colaboradores = DADOS_PLANILHA.map(p => ({ id: null, nome: p.nome, email: p.email, area: p.area }));
        state.avaliacoes = DADOS_PLANILHA.filter(p => p.hard && p.soft).map(p => ({
            id: null,
            email: p.email,
            quarter: "Q2-2026",
            hard: p.hard,
            soft: p.soft,
            disciplinar: p.disciplinar || null
        }));
    }

    popularSelects();
    popularSelectCadastro();
    renderNineBox();
}

async function salvarColaborador(dados) {
    const { nome, email, area, hard, soft, disciplinar, quarter } = dados;

    try {
        // Salvar/atualizar perfil
        const perfilExistente = state.colaboradores.find(c => c.email === email);
        if (perfilExistente && perfilExistente.id) {
            await db.collection("colaboradores").doc(perfilExistente.id).update({ nome, email, area });
            Object.assign(perfilExistente, { nome, email, area });
        } else {
            const docRef = await db.collection("colaboradores").add({ nome, email, area });
            if (perfilExistente) {
                perfilExistente.id = docRef.id;
                Object.assign(perfilExistente, { nome, email, area });
            } else {
                state.colaboradores.push({ id: docRef.id, nome, email, area });
            }
        }

        // Salvar/atualizar avaliação do quarter
        const avalDocId = `${email.replace(/[^a-zA-Z0-9]/g, '_')}_${quarter}`;
        const avalData = { email, quarter, hard, soft, disciplinar };
        await db.collection("avaliacoes").doc(avalDocId).set(avalData);

        const avalExistente = state.avaliacoes.find(a => a.email === email && a.quarter === quarter);
        if (avalExistente) {
            Object.assign(avalExistente, avalData);
        } else {
            state.avaliacoes.push({ id: avalDocId, ...avalData });
        }

        showToast("Avaliação salva com sucesso!", "success");
    } catch (err) {
        // Fallback local
        const perfilExistente = state.colaboradores.find(c => c.email === email);
        if (!perfilExistente) {
            state.colaboradores.push({ id: Date.now().toString(), nome, email, area });
        } else {
            Object.assign(perfilExistente, { nome, email, area });
        }

        const avalExistente = state.avaliacoes.find(a => a.email === email && a.quarter === quarter);
        if (avalExistente) {
            Object.assign(avalExistente, { hard, soft, disciplinar });
        } else {
            state.avaliacoes.push({ id: Date.now().toString(), email, quarter, hard, soft, disciplinar });
        }

        showToast("Salvo localmente (Firebase não configurado)", "success");
    }

    popularSelects();
    popularSelectCadastro();
    renderNineBox();
}

// ============================================
// POPULAR SELECTS
// ============================================
function popularSelects() {
    // Colaboradores que têm avaliação no quarter atual
    const avaliadosEmails = state.avaliacoes
        .filter(a => a.quarter === state.currentQuarter)
        .map(a => a.email);

    const avaliados = state.colaboradores.filter(c => avaliadosEmails.includes(c.email));
    const opts = avaliados.map(c => `<option value="${c.email}">${c.nome} (${c.area})</option>`).join('');

    document.getElementById('colaborador-select').innerHTML = '<option value="">Selecione um colaborador</option>' + opts;
    document.getElementById('plano-colaborador-select').innerHTML = '<option value="">Selecione um colaborador</option>' + opts;
}

function popularSelectCadastro() {
    // Todos os colaboradores para edição
    const opts = state.colaboradores.map(c => `<option value="${c.email}">${c.nome} (${c.area})</option>`).join('');
    document.getElementById('editar-colaborador-select').innerHTML = '<option value="">-- Novo colaborador --</option>' + opts;
}

// ============================================
// NAVEGAÇÃO
// ============================================
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});

// ============================================
// QUARTER - mudança atualiza tudo
// ============================================
document.getElementById('quarter-select').addEventListener('change', function () {
    state.currentQuarter = this.value;
    popularSelects();
    renderNineBox();
    // Limpar resumo e plano atuais
    document.getElementById('resumo-detalhe').innerHTML = '';
    document.getElementById('plano-conteudo').innerHTML = '';
    document.getElementById('colaborador-select').value = '';
    document.getElementById('plano-colaborador-select').value = '';
    // Atualizar pré-preenchimento do cadastro
    preencherFormularioEdicao();
});

// ============================================
// SELECT COLABORADOR → RESUMO
// ============================================
document.getElementById('colaborador-select').addEventListener('change', function () {
    const email = this.value;
    if (!email) {
        document.getElementById('resumo-detalhe').innerHTML = '';
        return;
    }
    const colab = state.colaboradores.find(c => c.email === email);
    const avaliacao = getAvaliacaoAtual(email);
    if (colab && avaliacao) renderResumo(colab, avaliacao);
});

// SELECT COLABORADOR → PLANO
document.getElementById('plano-colaborador-select').addEventListener('change', function () {
    const email = this.value;
    if (!email) {
        document.getElementById('plano-conteudo').innerHTML = '';
        return;
    }
    const colab = state.colaboradores.find(c => c.email === email);
    const avaliacao = getAvaliacaoAtual(email);
    if (colab && avaliacao) renderPlano(colab, avaliacao);
});

// ============================================
// SELECT EDITAR COLABORADOR → PRÉ-PREENCHER FORM
// ============================================
document.getElementById('editar-colaborador-select').addEventListener('change', preencherFormularioEdicao);

function preencherFormularioEdicao() {
    const email = document.getElementById('editar-colaborador-select').value;

    if (!email) {
        // Limpar formulário para novo colaborador
        document.getElementById('input-nome').value = '';
        document.getElementById('input-email').value = '';
        document.getElementById('input-email').disabled = false;
        document.getElementById('input-area').value = 'SRE';
        buildSkillInputs();
        setAllRatings('hard', getHardSkills('SRE').length, 3);
        setAllRatings('soft', SOFT_SKILLS.length, 3);
        setAllRatings('disc', DISCIPLINAR.length, 3);
        document.getElementById('preview-ninebox').style.display = 'none';
        return;
    }

    const colab = state.colaboradores.find(c => c.email === email);
    if (!colab) return;

    // Preencher dados básicos
    document.getElementById('input-nome').value = colab.nome;
    document.getElementById('input-email').value = colab.email;
    document.getElementById('input-email').disabled = true; // Não editar email
    document.getElementById('input-area').value = colab.area;

    // Rebuildar hard skills para a área do colaborador
    buildSkillInputs();

    // Preencher notas do quarter atual (se existirem)
    const avaliacao = getAvaliacaoAtual(email);
    if (avaliacao) {
        const hardSkills = getHardSkills(colab.area);
        avaliacao.hard.forEach((val, i) => {
            if (i < hardSkills.length) setRatingByValue('hard_' + i, val);
        });
        avaliacao.soft.forEach((val, i) => setRatingByValue('soft_' + i, val));
        if (avaliacao.disciplinar) {
            avaliacao.disciplinar.forEach((val, i) => setRatingByValue('disc_' + i, val));
        } else {
            setAllRatings('disc', DISCIPLINAR.length, 3);
        }
    } else {
        // Sem avaliação nesse quarter, valores padrão
        setAllRatings('hard', getHardSkills(colab.area).length, 1);
        setAllRatings('soft', SOFT_SKILLS.length, 1);
        setAllRatings('disc', DISCIPLINAR.length, 1);
    }

    document.getElementById('preview-ninebox').style.display = 'none';
}

// Helpers para o novo formulário com botões
function setRatingByValue(targetId, value) {
    document.getElementById(targetId).value = value;
    const container = document.querySelector(`.skill-rating[data-target="${targetId}"]`);
    if (container) {
        container.querySelectorAll('.rating-btn').forEach(b => {
            b.classList.toggle('active', parseInt(b.dataset.value) === value);
        });
    }
    const labelEl = document.getElementById(`${targetId}_label`);
    if (labelEl) {
        const labels = targetId.startsWith('hard_')
            ? ['Sem conhecimento', 'Baixo', 'Bom', 'Ótimo', 'Especialista']
            : targetId.startsWith('disc_')
                ? ['Crítico', 'Abaixo do esperado', 'Adequado', 'Bom', 'Exemplar']
                : ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto'];
        labelEl.textContent = labels[value - 1];
    }
}

function setAllRatings(prefix, count, value) {
    for (let i = 0; i < count; i++) {
        setRatingByValue(`${prefix}_${i}`, value);
    }
}

// ============================================
// RENDERIZAR RESUMO
// ============================================
function renderResumo(colab, avaliacao) {
    const hardSkills = getHardSkills(colab.area);
    const medHard = calcMediana(avaliacao.hard);
    const medSoft = calcMediana(avaliacao.soft);
    const medDisc = avaliacao.disciplinar ? calcMediana(avaliacao.disciplinar) : null;
    const desempenho = calcDesempenho(avaliacao);
    const potencial = calcPotencial(avaliacao);

    let hardBars = avaliacao.hard.map((val, i) => `
        <div class="skill-bar-container">
            <span class="skill-bar-label">${hardSkills[i] || 'Skill ' + (i+1)}</span>
            <div class="skill-bar">
                <div class="skill-bar-fill level-${val}"></div>
            </div>
            <span class="skill-bar-value">${val}</span>
        </div>
    `).join('');

    let softBars = avaliacao.soft.map((val, i) => `
        <div class="skill-bar-container">
            <span class="skill-bar-label">${SOFT_SKILLS[i]}${SOFT_POTENCIAL_INDICES.includes(i) ? ' <span class="tag-potencial">P</span>' : ' <span class="tag-execucao">D</span>'}</span>
            <div class="skill-bar">
                <div class="skill-bar-fill level-${val}"></div>
            </div>
            <span class="skill-bar-value">${val}</span>
        </div>
    `).join('');

    let discBars = '';
    if (avaliacao.disciplinar) {
        discBars = avaliacao.disciplinar.map((val, i) => `
            <div class="skill-bar-container">
                <span class="skill-bar-label">${DISCIPLINAR[i]}</span>
                <div class="skill-bar">
                    <div class="skill-bar-fill level-${val}"></div>
                </div>
                <span class="skill-bar-value">${val}</span>
            </div>
        `).join('');
    }

    const { row, col } = getNineBoxPos(desempenho, potencial);
    const nineBoxLabel = getNineBoxLabel(row, col);

    document.getElementById('resumo-detalhe').innerHTML = `
        <div class="resumo-header">
            <div>
                <h3>${colab.nome}</h3>
                <small>${colab.email} | Período: ${state.currentQuarter}</small>
            </div>
            <div style="display:flex;gap:0.5rem;align-items:center;">
                <span class="area-badge">${colab.area}</span>
                <span class="area-badge" style="background:var(--cd-dark);color:var(--cd-white);">${nineBoxLabel}</span>
            </div>
        </div>
        <div class="mediana-box" style="margin-bottom:1.5rem;">
            <span>Desempenho: <strong>${desempenho}</strong></span>
            <span>Potencial: <strong>${potencial}</strong></span>
        </div>
        <div class="calculo-detalhe" style="margin-bottom:1.5rem;">
            <small style="color:#666;">
                <strong>Cálculo do Desempenho:</strong> Hard Skills (med. ${medHard}) × 40% + Disciplinar (med. ${medDisc !== null ? medDisc : 'N/A'}) × 30% + Soft Execução × 30%<br>
                <strong>Cálculo do Potencial:</strong> Mediana das Soft Skills de crescimento (Senso de Dono, Inovação, Tomada de Decisão, Aprendizado, Visão Estratégica, Proatividade, Cap. Analítica, Assertividade)
            </small>
        </div>

        <div class="radar-charts-container">
            <div class="radar-chart-wrapper">
                <h4>Radar - Hard Skills</h4>
                <canvas id="radar-hard" width="400" height="400"></canvas>
            </div>
            <div class="radar-chart-wrapper">
                <h4>Radar - Soft Skills</h4>
                <canvas id="radar-soft" width="400" height="400"></canvas>
            </div>
            ${avaliacao.disciplinar ? `
            <div class="radar-chart-wrapper">
                <h4>Radar - Disciplinar</h4>
                <canvas id="radar-disc" width="400" height="400"></canvas>
            </div>` : ''}
        </div>

        <div class="skills-section">
            <h4>Hard Skills</h4>
            ${hardBars}
        </div>
        <div class="skills-section">
            <h4>Soft Skills</h4>
            ${softBars}
        </div>
        ${avaliacao.disciplinar ? `
        <div class="skills-section">
            <h4>Avaliação Disciplinar</h4>
            ${discBars}
        </div>` : ''}
    `;

    // Renderizar gráficos radar
    renderRadarCharts(avaliacao, colab);
}

function getNineBoxLabel(row, col) {
    const labels = {
        '3-1': 'Enigma', '3-2': 'Forte Potencial', '3-3': 'Estrela',
        '2-1': 'Questionável', '2-2': 'Mantenedor', '2-3': 'Forte Desempenho',
        '1-1': 'Insuficiente', '1-2': 'Eficaz', '1-3': 'Comprometido'
    };
    return labels[`${row}-${col}`] || '-';
}

// ============================================
// GRÁFICOS RADAR (Chart.js)
// ============================================

/**
 * Calcula a média da empresa para cada skill, considerando apenas
 * colaboradores da mesma área (para hard skills) ou todos (soft/disc)
 */
function calcMediaEmpresa(tipo, area) {
    const avaliacoes = state.avaliacoes.filter(a => a.quarter === state.currentQuarter);

    if (tipo === 'hard') {
        // Filtrar apenas colaboradores da mesma área
        const colabsArea = state.colaboradores.filter(c => {
            const areaGrupo = (c.area === 'DEV') ? 'DEV' : 'SRE_DEVOPS';
            const targetGrupo = (area === 'DEV') ? 'DEV' : 'SRE_DEVOPS';
            return areaGrupo === targetGrupo;
        }).map(c => c.email);

        const avalsArea = avaliacoes.filter(a => colabsArea.includes(a.email) && a.hard);
        if (avalsArea.length === 0) return null;

        const hardSkills = getHardSkills(area);
        const medias = hardSkills.map((_, i) => {
            const valores = avalsArea.map(a => a.hard[i]).filter(v => v !== undefined);
            return valores.length > 0 ? Math.round((valores.reduce((s, v) => s + v, 0) / valores.length) * 10) / 10 : 0;
        });
        return medias;
    }

    if (tipo === 'soft') {
        const avalsComSoft = avaliacoes.filter(a => a.soft);
        if (avalsComSoft.length === 0) return null;

        const medias = SOFT_SKILLS.map((_, i) => {
            const valores = avalsComSoft.map(a => a.soft[i]).filter(v => v !== undefined);
            return valores.length > 0 ? Math.round((valores.reduce((s, v) => s + v, 0) / valores.length) * 10) / 10 : 0;
        });
        return medias;
    }

    if (tipo === 'disciplinar') {
        const avalsComDisc = avaliacoes.filter(a => a.disciplinar);
        if (avalsComDisc.length === 0) return null;

        const medias = DISCIPLINAR.map((_, i) => {
            const valores = avalsComDisc.map(a => a.disciplinar[i]).filter(v => v !== undefined);
            return valores.length > 0 ? Math.round((valores.reduce((s, v) => s + v, 0) / valores.length) * 10) / 10 : 0;
        });
        return medias;
    }

    return null;
}

function renderRadarCharts(avaliacao, colab) {
    // Destruir gráficos anteriores se existirem
    if (window._radarHard) window._radarHard.destroy();
    if (window._radarSoft) window._radarSoft.destroy();
    if (window._radarDisc) window._radarDisc.destroy();

    const hardSkills = getHardSkills(colab.area);

    // Calcular médias da empresa
    const mediaHard = calcMediaEmpresa('hard', colab.area);
    const mediaSoft = calcMediaEmpresa('soft', colab.area);
    const mediaDisc = calcMediaEmpresa('disciplinar', colab.area);

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                beginAtZero: true,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                    font: { size: 10 }
                },
                pointLabels: {
                    font: { size: 9 },
                    callback: function(label) {
                        return label.length > 20 ? label.substring(0, 18) + '...' : label;
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: { font: { size: 10 }, boxWidth: 12 }
            }
        }
    };

    // Dataset da média da empresa (cinza)
    const mediaDatasetStyle = {
        backgroundColor: 'rgba(150, 150, 150, 0.08)',
        borderColor: 'rgba(150, 150, 150, 0.5)',
        borderWidth: 1.5,
        borderDash: [4, 4],
        pointBackgroundColor: 'rgba(150, 150, 150, 0.6)',
        pointRadius: 2
    };

    // Radar Hard Skills
    const ctxHard = document.getElementById('radar-hard');
    if (ctxHard) {
        const datasets = [{
            label: colab.nome.split(' ')[0],
            data: avaliacao.hard,
            backgroundColor: 'rgba(255, 153, 0, 0.2)',
            borderColor: '#FF9900',
            borderWidth: 2,
            pointBackgroundColor: '#EC7211',
            pointRadius: 3
        }];
        if (mediaHard) {
            datasets.push({
                label: 'Média ' + (colab.area === 'DEV' ? 'DEV' : 'SRE/DevOps'),
                data: mediaHard,
                ...mediaDatasetStyle
            });
        }
        window._radarHard = new Chart(ctxHard, {
            type: 'radar',
            data: { labels: hardSkills.map(s => s.length > 25 ? s.substring(0, 23) + '...' : s), datasets },
            options: radarOptions
        });
    }

    // Radar Soft Skills
    const ctxSoft = document.getElementById('radar-soft');
    if (ctxSoft) {
        const datasets = [{
            label: colab.nome.split(' ')[0],
            data: avaliacao.soft,
            backgroundColor: 'rgba(27, 101, 157, 0.2)',
            borderColor: '#1B659D',
            borderWidth: 2,
            pointBackgroundColor: '#1B659D',
            pointRadius: 3
        }];
        if (mediaSoft) {
            datasets.push({
                label: 'Média Empresa',
                data: mediaSoft,
                ...mediaDatasetStyle
            });
        }
        window._radarSoft = new Chart(ctxSoft, {
            type: 'radar',
            data: { labels: SOFT_SKILLS, datasets },
            options: radarOptions
        });
    }

    // Radar Disciplinar
    if (avaliacao.disciplinar) {
        const ctxDisc = document.getElementById('radar-disc');
        if (ctxDisc) {
            const datasets = [{
                label: colab.nome.split(' ')[0],
                data: avaliacao.disciplinar,
                backgroundColor: 'rgba(29, 129, 2, 0.2)',
                borderColor: '#1D8102',
                borderWidth: 2,
                pointBackgroundColor: '#1D8102',
                pointRadius: 3
            }];
            if (mediaDisc) {
                datasets.push({
                    label: 'Média Empresa',
                    data: mediaDisc,
                    ...mediaDatasetStyle
                });
            }
            window._radarDisc = new Chart(ctxDisc, {
                type: 'radar',
                data: { labels: DISCIPLINAR, datasets },
                options: radarOptions
            });
        }
    }
}

// ============================================
// FORMULÁRIO DE CADASTRO (MELHORADO)
// ============================================
function buildSkillInputs() {
    const area = document.getElementById('input-area').value;
    const hardSkills = getHardSkills(area);
    const hardContainer = document.getElementById('hardskills-inputs');
    const softContainer = document.getElementById('softskills-inputs');
    const discContainer = document.getElementById('disciplinar-inputs');

    const hardLabels = ['Sem conhecimento', 'Baixo', 'Bom', 'Ótimo', 'Especialista'];
    const softLabels = ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto'];
    const discLabels = ['Crítico', 'Abaixo do esperado', 'Adequado', 'Bom', 'Exemplar'];

    hardContainer.innerHTML = hardSkills.map((skill, i) => `
        <div class="skill-input-card">
            <div class="skill-input-label">${skill}</div>
            <div class="skill-rating" data-target="hard_${i}">
                ${[1,2,3,4,5].map(v => `<button type="button" class="rating-btn level-btn-${v}${v === 3 ? ' active' : ''}" data-value="${v}" title="${hardLabels[v-1]}" onclick="setRating(this)">${v}</button>`).join('')}
            </div>
            <input type="hidden" id="hard_${i}" name="hard_${i}" value="3">
            <span class="rating-label" id="hard_${i}_label">${hardLabels[2]}</span>
        </div>
    `).join('');

    softContainer.innerHTML = SOFT_SKILLS.map((skill, i) => {
        const tag = SOFT_POTENCIAL_INDICES.includes(i)
            ? '<span class="tag-potencial">Potencial</span>'
            : '<span class="tag-execucao">Desempenho</span>';
        return `
        <div class="skill-input-card">
            <div class="skill-input-label">${skill} ${tag}</div>
            <div class="skill-rating" data-target="soft_${i}">
                ${[1,2,3,4,5].map(v => `<button type="button" class="rating-btn level-btn-${v}${v === 3 ? ' active' : ''}" data-value="${v}" title="${softLabels[v-1]}" onclick="setRating(this)">${v}</button>`).join('')}
            </div>
            <input type="hidden" id="soft_${i}" name="soft_${i}" value="3">
            <span class="rating-label" id="soft_${i}_label">${softLabels[2]}</span>
        </div>
    `}).join('');

    discContainer.innerHTML = DISCIPLINAR.map((skill, i) => `
        <div class="skill-input-card">
            <div class="skill-input-label">${skill}</div>
            <div class="skill-rating" data-target="disc_${i}">
                ${[1,2,3,4,5].map(v => `<button type="button" class="rating-btn level-btn-${v}${v === 3 ? ' active' : ''}" data-value="${v}" title="${discLabels[v-1]}" onclick="setRating(this)">${v}</button>`).join('')}
            </div>
            <input type="hidden" id="disc_${i}" name="disc_${i}" value="3">
            <span class="rating-label" id="disc_${i}_label">${discLabels[2]}</span>
        </div>
    `).join('');
}

// Rebuildar Hard Skills quando a área muda
document.getElementById('input-area').addEventListener('change', function() {
    buildSkillInputs();
});

function setRating(btn) {
    const value = parseInt(btn.dataset.value);
    const container = btn.parentElement;
    const targetId = container.dataset.target;

    // Atualizar input hidden
    document.getElementById(targetId).value = value;

    // Atualizar botões ativos
    container.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Atualizar label
    const labelEl = document.getElementById(`${targetId}_label`);
    if (labelEl) {
        const labels = targetId.startsWith('hard_')
            ? ['Sem conhecimento', 'Baixo', 'Bom', 'Ótimo', 'Especialista']
            : targetId.startsWith('disc_')
                ? ['Crítico', 'Abaixo do esperado', 'Adequado', 'Bom', 'Exemplar']
                : ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto'];
        labelEl.textContent = labels[value - 1];
    }
}

// Pré-visualizar onde o colaborador cairá no Nine Box
document.getElementById('btn-preview-avaliacao').addEventListener('click', function() {
    const previewDiv = document.getElementById('preview-ninebox');
    const area = document.getElementById('input-area').value;
    const hardSkills = getHardSkills(area);

    const hard = hardSkills.map((_, i) => {
        const val = parseInt(document.getElementById(`hard_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    const soft = SOFT_SKILLS.map((_, i) => {
        const val = parseInt(document.getElementById(`soft_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    const disciplinar = DISCIPLINAR.map((_, i) => {
        const val = parseInt(document.getElementById(`disc_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    const avaliacao = { hard, soft, disciplinar };
    const desempenho = calcDesempenho(avaliacao);
    const potencial = calcPotencial(avaliacao);
    const { row, col } = getNineBoxPos(desempenho, potencial);
    const nineBoxLabel = getNineBoxLabel(row, col);

    previewDiv.style.display = 'block';
    previewDiv.innerHTML = `
        <div class="preview-result">
            <div class="preview-quadrante">
                <strong>Quadrante:</strong> ${nineBoxLabel}
            </div>
            <div class="preview-valores">
                <span>Desempenho: <strong>${desempenho}</strong></span>
                <span>Potencial: <strong>${potencial}</strong></span>
            </div>
            <small style="color:#666;">
                Hard (med. ${calcMediana(hard)}) × 40% + Disciplinar (med. ${calcMediana(disciplinar)}) × 30% + Soft Exec. × 30% = ${desempenho} |
                Potencial (med. soft crescimento) = ${potencial}
            </small>
        </div>
    `;
});

document.getElementById('form-colaborador').addEventListener('submit', async function (e) {
    e.preventDefault();

    const editandoEmail = document.getElementById('editar-colaborador-select').value;
    const nome = document.getElementById('input-nome').value.trim();
    const email = editandoEmail || document.getElementById('input-email').value.trim();
    const area = document.getElementById('input-area').value;
    const hardSkills = getHardSkills(area);

    const hard = hardSkills.map((_, i) => {
        const val = parseInt(document.getElementById(`hard_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    const soft = SOFT_SKILLS.map((_, i) => {
        const val = parseInt(document.getElementById(`soft_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    const disciplinar = DISCIPLINAR.map((_, i) => {
        const val = parseInt(document.getElementById(`disc_${i}`).value);
        return Math.min(5, Math.max(1, val));
    });

    await salvarColaborador({ nome, email, area, hard, soft, disciplinar, quarter: state.currentQuarter });

    // Reset
    document.getElementById('editar-colaborador-select').value = '';
    document.getElementById('input-email').disabled = false;
    this.reset();
    buildSkillInputs();
});

// ============================================
// INIT
// ============================================
buildSkillInputs();
carregarDados();
