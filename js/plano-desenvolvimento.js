// ============================================
// PLANO DE DESENVOLVIMENTO
// ============================================

function gerarSugestoes(colab) {
    const sugestoes = [];

    if (!colab.hard || !colab.soft) return sugestoes;

    // Identificar Hard Skills com nota ≤ 2 (maiores gaps)
    colab.hard.forEach((val, i) => {
        if (val <= 2) {
            sugestoes.push({
                tipo: 'hard',
                skill: HARD_SKILLS[i],
                nivelAtual: val,
                meta: `Elevar "${HARD_SKILLS[i]}" do nível ${val} para pelo menos ${Math.min(val + 2, 5)}`,
                descricao: gerarDescricaoMeta(HARD_SKILLS[i], val),
                prazo: gerarPrazo(),
                responsavel: colab.nome,
                status: 'pendente'
            });
        }
    });

    // Identificar Soft Skills com nota ≤ 2
    colab.soft.forEach((val, i) => {
        if (val <= 2) {
            sugestoes.push({
                tipo: 'soft',
                skill: SOFT_SKILLS[i],
                nivelAtual: val,
                meta: `Desenvolver "${SOFT_SKILLS[i]}" do nível ${val} para pelo menos ${Math.min(val + 2, 5)}`,
                descricao: gerarDescricaoSoft(SOFT_SKILLS[i], val),
                prazo: gerarPrazo(),
                responsavel: colab.nome,
                status: 'pendente'
            });
        }
    });

    // Se não há gaps críticos, sugerir evolução das medianas
    if (sugestoes.length === 0) {
        const medHard = calcMediana(colab.hard);
        const medSoft = calcMediana(colab.soft);

        if (medHard < 4) {
            // Top 3 skills mais baixas
            const indexadas = colab.hard.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
            indexadas.slice(0, 3).forEach(item => {
                if (item.v < 4) {
                    sugestoes.push({
                        tipo: 'hard',
                        skill: HARD_SKILLS[item.i],
                        nivelAtual: item.v,
                        meta: `Aprimorar "${HARD_SKILLS[item.i]}" do nível ${item.v} para ${Math.min(item.v + 1, 5)}`,
                        descricao: gerarDescricaoMeta(HARD_SKILLS[item.i], item.v),
                        prazo: gerarPrazo(),
                        responsavel: colab.nome,
                        status: 'pendente'
                    });
                }
            });
        }

        if (medSoft < 4) {
            const indexadas = colab.soft.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
            indexadas.slice(0, 2).forEach(item => {
                if (item.v < 4) {
                    sugestoes.push({
                        tipo: 'soft',
                        skill: SOFT_SKILLS[item.i],
                        nivelAtual: item.v,
                        meta: `Fortalecer "${SOFT_SKILLS[item.i]}" do nível ${item.v} para ${Math.min(item.v + 1, 5)}`,
                        descricao: gerarDescricaoSoft(SOFT_SKILLS[item.i], item.v),
                        prazo: gerarPrazo(),
                        responsavel: colab.nome,
                        status: 'pendente'
                    });
                }
            });
        }
    }

    return sugestoes;
}

function gerarDescricaoMeta(skill, nivelAtual) {
    const acoes = {
        'Desenvolvimento de Scripts': 'Completar curso de automação e entregar 2 scripts de produção.',
        'Comandos e Administração Linux': 'Estudar para LPIC-1 e gerenciar ao menos 3 servidores em produção.',
        'Gerenciamento de Servidores Windows': 'Lab prático de AD + GPO, documentar procedimentos.',
        'Pipelines CI/CD': 'Criar/otimizar 2 pipelines para projetos internos.',
        'Containers': 'Completar curso Docker/K8s e deployar app em cluster.',
        'Terraform': 'Provisionar infraestrutura completa com módulos reutilizáveis.',
        'GCP': 'Realizar labs GCP e obter certificação Associate Cloud Engineer.',
        'AWS': 'Realizar labs AWS e obter certificação Solutions Architect Associate.',
        'Datadog': 'Configurar dashboards e alertas para 2 serviços.',
        'Ferramentas': 'Implementar stack de monitoramento (Prometheus+Grafana) em projeto.',
        'Sophos': 'Treinamento oficial Sophos e gerenciar políticas de endpoint.',
        'Conceitos de Redes': 'Estudar networking fundamentals, configurar VPN site-to-site.',
        'Acronis': 'Implementar plano de backup com testes de restore.',
        'Banco de Dados': 'Realizar curso e administrar instância em produção.',
        'Resolução de Problemas': 'Liderar troubleshooting de 3 incidentes e documentar root cause.'
    };

    for (const [key, acao] of Object.entries(acoes)) {
        if (skill.includes(key)) return acao;
    }
    return `Estudar e praticar ${skill}. Buscar certificação ou entregar projeto prático.`;
}

function gerarDescricaoSoft(skill, nivelAtual) {
    const acoes = {
        'Obsessão pelo Cliente': 'Conduzir ao menos 2 reuniões com clientes e coletar feedback.',
        'Propriedade': 'Assumir ownership de um projeto end-to-end no quarter.',
        'Inventar e Simplificar': 'Propor e implementar 1 melhoria de processo documentada.',
        'Estar Certo': 'Embasar decisões com dados. Documentar 3 decisões técnicas.',
        'Aprender e Ser Curioso': 'Apresentar 2 tech talks ou compartilhar aprendizados com o time.',
        'Insistir nos Padrões': 'Criar ou melhorar 2 padrões de qualidade no time.',
        'Pensar Grande': 'Propor roadmap de 6 meses para área de atuação.',
        'Viés para a Ação': 'Reduzir tempo médio de resposta a incidentes em 20%.',
        'Frugalidade': 'Identificar e implementar 1 redução de custo em infraestrutura.',
        'Ganhar Confiança': 'Pedir feedback 360 e implementar 2 pontos de melhoria.',
        'Mergulhar Profundamente': 'Documentar deep-dive de 2 sistemas críticos.',
        'Ter Firmeza': 'Participar ativamente de 3 design reviews com posição clara.',
        'Entregar Resultados': 'Atingir 100% das metas do quarter anterior.'
    };

    for (const [key, acao] of Object.entries(acoes)) {
        if (skill.includes(key)) return acao;
    }
    return `Desenvolver ${skill} com feedback constante e prática deliberada.`;
}

function gerarPrazo() {
    const hoje = new Date();
    const prazo = new Date(hoje.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 dias
    return prazo.toISOString().split('T')[0];
}

// ============================================
// RENDERIZAR PLANO
// ============================================
function renderPlano(colab) {
    const sugestoes = gerarSugestoes(colab);
    const container = document.getElementById('plano-conteudo');

    if (!colab.hard || !colab.soft) {
        container.innerHTML = '<p style="color:#666;">Este colaborador ainda não foi avaliado.</p>';
        return;
    }

    const medHard = calcMediana(colab.hard);
    const medSoft = calcMediana(colab.soft);
    const { row, col } = getNineBoxPos(medHard, medSoft);
    const nineBoxLabel = getNineBoxLabel(row, col);

    let metasHTML = sugestoes.map((s, i) => `
        <div class="meta-card" data-index="${i}">
            <div class="meta-header">
                <span class="status-badge ${s.status}">${formatStatus(s.status)}</span>
                <button class="btn-danger" onclick="removerMeta(${i})">Remover</button>
            </div>
            <label>Meta</label>
            <input type="text" value="${escapeHTML(s.meta)}" data-field="meta" data-index="${i}" onchange="atualizarMeta(this)">
            <label>Descrição / Ações</label>
            <textarea data-field="descricao" data-index="${i}" onchange="atualizarMeta(this)">${escapeHTML(s.descricao)}</textarea>
            <div class="meta-row">
                <div>
                    <label>Prazo</label>
                    <input type="date" value="${s.prazo}" data-field="prazo" data-index="${i}" onchange="atualizarMeta(this)">
                </div>
                <div>
                    <label>Responsável</label>
                    <input type="text" value="${escapeHTML(s.responsavel)}" data-field="responsavel" data-index="${i}" onchange="atualizarMeta(this)">
                </div>
                <div>
                    <label>Status</label>
                    <select data-field="status" data-index="${i}" onchange="atualizarMeta(this)">
                        <option value="pendente" ${s.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="em-andamento" ${s.status === 'em-andamento' ? 'selected' : ''}>Em andamento</option>
                        <option value="concluido" ${s.status === 'concluido' ? 'selected' : ''}>Concluído</option>
                    </select>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="resumo-header">
            <div>
                <h3>${colab.nome}</h3>
                <small>Período: ${state.currentQuarter} | Quadrante: ${nineBoxLabel}</small>
            </div>
            <div class="mediana-box">
                <span>Desempenho: <strong>${medHard}</strong></span>
                <span>Potencial: <strong>${medSoft}</strong></span>
            </div>
        </div>
        <div class="sugestoes-header">
            <h3>Metas de Desenvolvimento (${sugestoes.length})</h3>
            <div style="display:flex;gap:0.5rem;">
                <button class="btn-secondary" onclick="adicionarMeta()">+ Adicionar Meta</button>
                <button class="btn-primary" onclick="salvarPlano('${colab.email}')" style="margin:0;padding:0.5rem 1rem;">Salvar Plano</button>
            </div>
        </div>
        <div id="metas-container">
            ${metasHTML || '<p style="color:#666;">Nenhuma sugestão gerada. Este colaborador tem excelentes notas!</p>'}
        </div>
    `;

    // Salvar sugestões no state temporário
    window._planoAtual = sugestoes;
}

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatStatus(status) {
    const map = { 'pendente': 'Pendente', 'em-andamento': 'Em andamento', 'concluido': 'Concluído' };
    return map[status] || status;
}

function atualizarMeta(el) {
    const index = parseInt(el.dataset.index);
    const field = el.dataset.field;
    if (window._planoAtual && window._planoAtual[index]) {
        window._planoAtual[index][field] = el.value;
    }
}

function removerMeta(index) {
    if (window._planoAtual) {
        window._planoAtual.splice(index, 1);
        // Re-render
        const email = document.getElementById('plano-colaborador-select').value;
        const colab = state.colaboradores.find(c => c.email === email);
        if (colab) {
            renderPlanoComDados(colab, window._planoAtual);
        }
    }
}

function adicionarMeta() {
    if (!window._planoAtual) window._planoAtual = [];
    window._planoAtual.push({
        tipo: 'custom',
        skill: '',
        nivelAtual: 0,
        meta: 'Nova meta',
        descricao: 'Descreva as ações necessárias.',
        prazo: gerarPrazo(),
        responsavel: '',
        status: 'pendente'
    });

    const email = document.getElementById('plano-colaborador-select').value;
    const colab = state.colaboradores.find(c => c.email === email);
    if (colab) {
        renderPlanoComDados(colab, window._planoAtual);
    }
}

function renderPlanoComDados(colab, metas) {
    const container = document.getElementById('plano-conteudo');
    const medHard = calcMediana(colab.hard);
    const medSoft = calcMediana(colab.soft);
    const { row, col } = getNineBoxPos(medHard, medSoft);
    const nineBoxLabel = getNineBoxLabel(row, col);

    let metasHTML = metas.map((s, i) => `
        <div class="meta-card" data-index="${i}">
            <div class="meta-header">
                <span class="status-badge ${s.status}">${formatStatus(s.status)}</span>
                <button class="btn-danger" onclick="removerMeta(${i})">Remover</button>
            </div>
            <label>Meta</label>
            <input type="text" value="${escapeHTML(s.meta)}" data-field="meta" data-index="${i}" onchange="atualizarMeta(this)">
            <label>Descrição / Ações</label>
            <textarea data-field="descricao" data-index="${i}" onchange="atualizarMeta(this)">${escapeHTML(s.descricao)}</textarea>
            <div class="meta-row">
                <div>
                    <label>Prazo</label>
                    <input type="date" value="${s.prazo}" data-field="prazo" data-index="${i}" onchange="atualizarMeta(this)">
                </div>
                <div>
                    <label>Responsável</label>
                    <input type="text" value="${escapeHTML(s.responsavel)}" data-field="responsavel" data-index="${i}" onchange="atualizarMeta(this)">
                </div>
                <div>
                    <label>Status</label>
                    <select data-field="status" data-index="${i}" onchange="atualizarMeta(this)">
                        <option value="pendente" ${s.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="em-andamento" ${s.status === 'em-andamento' ? 'selected' : ''}>Em andamento</option>
                        <option value="concluido" ${s.status === 'concluido' ? 'selected' : ''}>Concluído</option>
                    </select>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="resumo-header">
            <div>
                <h3>${colab.nome}</h3>
                <small>Período: ${state.currentQuarter} | Quadrante: ${nineBoxLabel}</small>
            </div>
            <div class="mediana-box">
                <span>Desempenho: <strong>${medHard}</strong></span>
                <span>Potencial: <strong>${medSoft}</strong></span>
            </div>
        </div>
        <div class="sugestoes-header">
            <h3>Metas de Desenvolvimento (${metas.length})</h3>
            <div style="display:flex;gap:0.5rem;">
                <button class="btn-secondary" onclick="adicionarMeta()">+ Adicionar Meta</button>
                <button class="btn-primary" onclick="salvarPlano('${colab.email}')" style="margin:0;padding:0.5rem 1rem;">Salvar Plano</button>
            </div>
        </div>
        <div id="metas-container">
            ${metasHTML || '<p style="color:#666;">Nenhuma meta definida.</p>'}
        </div>
    `;
}

// ============================================
// SALVAR PLANO NO FIRESTORE
// ============================================
async function salvarPlano(email) {
    if (!window._planoAtual) return;

    const planoData = {
        email: email,
        quarter: state.currentQuarter,
        metas: window._planoAtual,
        updatedAt: new Date().toISOString()
    };

    try {
        const docId = `${email}_${state.currentQuarter}`;
        await db.collection("planos").doc(docId).set(planoData);
        showToast("Plano salvo com sucesso!", "success");
    } catch (err) {
        console.warn("Firebase não configurado:", err.message);
        showToast("Plano salvo localmente (Firebase não configurado)", "success");
    }
}

// Carregar plano existente
async function carregarPlano(email) {
    try {
        const docId = `${email}_${state.currentQuarter}`;
        const doc = await db.collection("planos").doc(docId).get();
        if (doc.exists) {
            return doc.data().metas;
        }
    } catch (err) {
        console.warn("Erro ao carregar plano:", err.message);
    }
    return null;
}
