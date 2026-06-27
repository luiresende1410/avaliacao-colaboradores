// ============================================
// DADOS INICIAIS DA PLANILHA
// ============================================
const HARD_SKILLS = [
    "Desenvolvimento de Scripts (Python, Bash, PowerShell)",
    "Comandos e Administração Linux",
    "Gerenciamento de Servidores Windows (AD, GPO)",
    "Pipelines CI/CD (Jenkins, GitLab CI, GitHub Actions)",
    "Containers (Docker, Kubernetes)",
    "Terraform (ou Ansible / CloudFormation)",
    "GCP: Compute & Containers (GCE, GKE)",
    "GCP: Redes (VPC, Load Balancing, Cloud Armor)",
    "GCP: Serverless (Cloud Functions, Cloud Run)",
    "AWS: Compute & Containers (ECS, EKS)",
    "AWS: Redes (VPC, Load Balancing, WAF/Shield)",
    "AWS: Serverless (Lambda, Fargate)",
    "Datadog: Monitoramento de Infra & APM",
    "Datadog: Gestão de Logs e Dashboards",
    "Ferramentas (Prometheus, Grafana, CloudWatch)",
    "Sophos: Gestão de Endpoint (Central)",
    "Sophos: Gestão de Firewall (XG/SFOS)",
    "Conceitos de Redes (Firewalls, VPNs, Roteamento)",
    "Acronis Cyber Protect: Gestão de Backup",
    "Acronis Cyber Protect: Resposta a Ransomware",
    "Banco de Dados Relacionais (MySQL, PostgreSQL)",
    "Banco de Dados NoSQL (MongoDB)",
    "Resolução de Problemas e Debugging"
];

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
    "Respeito às Normas"
];

// Dados da planilha original (serão migrados como Q2-2026)
const DADOS_PLANILHA = [
    { nome: "André Novaes", email: "andre.novaes@clouddog.com.br", area: "DEVOPS", hard: [3,2,3,2,3,4,2,2,1,3,2,1,1,1,1,1,1,1,1,1,1,1,2], soft: [4,3,2,4,3,4,3,4,3,3,4,2,4], disciplinar: [4,4,4,3,3,4,4] },
    { nome: "Bruno Loschi", email: "bruno.loschi@clouddog.com.br", area: "SRE", hard: [3,3,3,1,3,3,3,3,2,3,3,3,1,1,2,1,1,2,1,1,3,1,3], soft: [4,4,3,3,3,3,3,2,3,3,3,3,3], disciplinar: [4,4,4,4,3,4,4] },
    { nome: "Felipe Vieira", email: "felipe.vieira@clouddog.com.br", area: "SRE", hard: [3,3,1,1,1,3,1,1,1,2,2,3,1,1,2,1,1,1,1,1,3,1,3], soft: [5,4,4,2,4,3,4,2,3,2,3,3,4], disciplinar: [5,5,4,4,3,4,5] },
    { nome: "Gabriel Abramo", email: "gabriel.abramo@clouddog.com.br", area: "SRE", hard: [5,5,3,5,4,5,1,1,1,4,5,4,3,3,4,1,1,3,1,1,4,2,5], soft: [4,3,5,4,5,4,4,2,4,3,3,4,4], disciplinar: [4,4,5,5,4,4,5] },
    { nome: "Guilherme Santos", email: "guilherme.santos@clouddog.com.br", area: "SRE", hard: [5,5,3,4,4,4,1,1,1,4,4,4,1,1,3,1,1,3,1,1,4,2,5], soft: [4,4,4,3,3,3,4,3,3,3,4,3,4], disciplinar: [4,4,4,4,4,4,4] },
    { nome: "Gustavo Kowalski", email: "gustavo.kowalski@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Gustavo Silva", email: "gustavo.silva@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Iago Faria", email: "iago.faria@clouddog.com.br", area: "SRE", hard: [3,3,1,3,2,3,1,1,1,3,3,3,1,1,3,2,1,2,1,1,3,1,4], soft: [5,4,2,3,3,4,3,3,3,3,3,3,4], disciplinar: [5,5,4,4,4,5,5] },
    { nome: "Jefferson Silva", email: "jefferson.silva@clouddog.com.br", area: "DEVOPS", hard: [4,4,4,5,5,5,4,4,4,5,5,5,5,5,4,2,2,3,3,3,4,3,5], soft: [5,5,5,5,5,5,5,4,5,5,5,5,5], disciplinar: [5,5,5,5,5,5,5] },
    { nome: "João Felipe Bertini", email: "joao.bertini@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Kayke Peres", email: "kayke.peres@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Kayky Stiliano", email: "kayky.stiliano@clouddog.com.br", area: "DEVOPS", hard: null, soft: null, disciplinar: null },
    { nome: "Leonardo Miranda", email: "leonardo.miranda@clouddog.com.br", area: "SRE", hard: [5,5,3,4,3,5,3,3,3,3,4,5,3,3,5,2,2,4,1,1,4,3,5], soft: [3,3,5,3,4,4,4,3,4,4,4,3,4], disciplinar: [4,4,5,4,4,4,4] },
    { nome: "Lucas Ortiz", email: "lucas.ortiz@clouddog.com.br", area: "SRE", hard: [5,4,2,3,4,4,1,1,1,4,3,4,1,1,3,4,1,2,1,1,4,2,5], soft: [4,4,4,4,4,5,4,4,4,3,4,5,5], disciplinar: [5,5,5,5,4,5,5] },
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

function getNineBoxPos(medHard, medSoft) {
    function getZone(val) {
        if (val <= 2.3) return 1;
        if (val <= 3.6) return 2;
        return 3;
    }
    return { row: getZone(medSoft), col: getZone(medHard) };
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
        HARD_SKILLS.forEach((_, i) => { document.getElementById(`hard_${i}`).value = 3; });
        SOFT_SKILLS.forEach((_, i) => { document.getElementById(`soft_${i}`).value = 3; });
        DISCIPLINAR.forEach((_, i) => { document.getElementById(`disc_${i}`).value = 3; });
        return;
    }

    const colab = state.colaboradores.find(c => c.email === email);
    if (!colab) return;

    // Preencher dados básicos
    document.getElementById('input-nome').value = colab.nome;
    document.getElementById('input-email').value = colab.email;
    document.getElementById('input-email').disabled = true; // Não editar email
    document.getElementById('input-area').value = colab.area;

    // Preencher notas do quarter atual (se existirem)
    const avaliacao = getAvaliacaoAtual(email);
    if (avaliacao) {
        avaliacao.hard.forEach((val, i) => { document.getElementById(`hard_${i}`).value = val; });
        avaliacao.soft.forEach((val, i) => { document.getElementById(`soft_${i}`).value = val; });
        if (avaliacao.disciplinar) {
            avaliacao.disciplinar.forEach((val, i) => { document.getElementById(`disc_${i}`).value = val; });
        } else {
            DISCIPLINAR.forEach((_, i) => { document.getElementById(`disc_${i}`).value = 3; });
        }
    } else {
        // Sem avaliação nesse quarter, valores padrão
        HARD_SKILLS.forEach((_, i) => { document.getElementById(`hard_${i}`).value = 1; });
        SOFT_SKILLS.forEach((_, i) => { document.getElementById(`soft_${i}`).value = 1; });
        DISCIPLINAR.forEach((_, i) => { document.getElementById(`disc_${i}`).value = 1; });
    }
}

// ============================================
// RENDERIZAR RESUMO
// ============================================
function renderResumo(colab, avaliacao) {
    const medHard = calcMediana(avaliacao.hard);
    const medSoft = calcMediana(avaliacao.soft);
    const medDisc = avaliacao.disciplinar ? calcMediana(avaliacao.disciplinar) : null;

    let hardBars = avaliacao.hard.map((val, i) => `
        <div class="skill-bar-container">
            <span class="skill-bar-label">${HARD_SKILLS[i]}</span>
            <div class="skill-bar">
                <div class="skill-bar-fill level-${val}"></div>
            </div>
            <span class="skill-bar-value">${val}</span>
        </div>
    `).join('');

    let softBars = avaliacao.soft.map((val, i) => `
        <div class="skill-bar-container">
            <span class="skill-bar-label">${SOFT_SKILLS[i]}</span>
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

    const { row, col } = getNineBoxPos(medHard, medSoft);
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
            <span>Desempenho (Hard): <strong>${medHard}</strong></span>
            <span>Potencial (Soft): <strong>${medSoft}</strong></span>
            ${medDisc !== null ? `<span>Disciplinar: <strong>${medDisc}</strong></span>` : ''}
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
    renderRadarCharts(avaliacao);
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
function renderRadarCharts(avaliacao) {
    // Destruir gráficos anteriores se existirem
    if (window._radarHard) window._radarHard.destroy();
    if (window._radarSoft) window._radarSoft.destroy();
    if (window._radarDisc) window._radarDisc.destroy();

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
                        // Truncar labels longos
                        return label.length > 20 ? label.substring(0, 18) + '...' : label;
                    }
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // Radar Hard Skills
    const ctxHard = document.getElementById('radar-hard');
    if (ctxHard) {
        window._radarHard = new Chart(ctxHard, {
            type: 'radar',
            data: {
                labels: HARD_SKILLS.map(s => s.length > 25 ? s.substring(0, 23) + '...' : s),
                datasets: [{
                    label: 'Hard Skills',
                    data: avaliacao.hard,
                    backgroundColor: 'rgba(255, 153, 0, 0.2)',
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    pointBackgroundColor: '#EC7211',
                    pointRadius: 3
                }]
            },
            options: radarOptions
        });
    }

    // Radar Soft Skills
    const ctxSoft = document.getElementById('radar-soft');
    if (ctxSoft) {
        window._radarSoft = new Chart(ctxSoft, {
            type: 'radar',
            data: {
                labels: SOFT_SKILLS,
                datasets: [{
                    label: 'Soft Skills',
                    data: avaliacao.soft,
                    backgroundColor: 'rgba(27, 101, 157, 0.2)',
                    borderColor: '#1B659D',
                    borderWidth: 2,
                    pointBackgroundColor: '#1B659D',
                    pointRadius: 3
                }]
            },
            options: radarOptions
        });
    }

    // Radar Disciplinar
    if (avaliacao.disciplinar) {
        const ctxDisc = document.getElementById('radar-disc');
        if (ctxDisc) {
            window._radarDisc = new Chart(ctxDisc, {
                type: 'radar',
                data: {
                    labels: DISCIPLINAR,
                    datasets: [{
                        label: 'Disciplinar',
                        data: avaliacao.disciplinar,
                        backgroundColor: 'rgba(29, 129, 2, 0.2)',
                        borderColor: '#1D8102',
                        borderWidth: 2,
                        pointBackgroundColor: '#1D8102',
                        pointRadius: 3
                    }]
                },
                options: radarOptions
            });
        }
    }
}

// ============================================
// FORMULÁRIO DE CADASTRO
// ============================================
function buildSkillInputs() {
    const hardContainer = document.getElementById('hardskills-inputs');
    const softContainer = document.getElementById('softskills-inputs');
    const discContainer = document.getElementById('disciplinar-inputs');

    hardContainer.innerHTML = HARD_SKILLS.map((skill, i) => `
        <div class="skill-input-group">
            <label for="hard_${i}">${skill}</label>
            <input type="number" id="hard_${i}" name="hard_${i}" min="1" max="5" value="3" required>
        </div>
    `).join('');

    softContainer.innerHTML = SOFT_SKILLS.map((skill, i) => `
        <div class="skill-input-group">
            <label for="soft_${i}">${skill}</label>
            <input type="number" id="soft_${i}" name="soft_${i}" min="1" max="5" value="3" required>
        </div>
    `).join('');

    discContainer.innerHTML = DISCIPLINAR.map((skill, i) => `
        <div class="skill-input-group">
            <label for="disc_${i}">${skill}</label>
            <input type="number" id="disc_${i}" name="disc_${i}" min="1" max="5" value="3" required>
        </div>
    `).join('');
}

document.getElementById('form-colaborador').addEventListener('submit', async function (e) {
    e.preventDefault();

    const editandoEmail = document.getElementById('editar-colaborador-select').value;
    const nome = document.getElementById('input-nome').value.trim();
    const email = editandoEmail || document.getElementById('input-email').value.trim();
    const area = document.getElementById('input-area').value;

    const hard = HARD_SKILLS.map((_, i) => {
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
