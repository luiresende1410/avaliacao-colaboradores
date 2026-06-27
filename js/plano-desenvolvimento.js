// ============================================
// PLANO DE DESENVOLVIMENTO
// ============================================

function gerarSugestoes(colab, avaliacao) {
    const sugestoes = [];

    if (!avaliacao || !avaliacao.hard || !avaliacao.soft) return sugestoes;

    // Identificar Hard Skills com nota ≤ 2 (maiores gaps)
    avaliacao.hard.forEach((val, i) => {
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
    avaliacao.soft.forEach((val, i) => {
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

    // Identificar Disciplinar com nota ≤ 2
    if (avaliacao.disciplinar) {
        avaliacao.disciplinar.forEach((val, i) => {
            if (val <= 2) {
                sugestoes.push({
                    tipo: 'disciplinar',
                    skill: DISCIPLINAR[i],
                    nivelAtual: val,
                    meta: `Melhorar "${DISCIPLINAR[i]}" do nível ${val} para pelo menos ${Math.min(val + 2, 5)}`,
                    descricao: gerarDescricaoDisciplinar(DISCIPLINAR[i], val),
                    prazo: gerarPrazo(),
                    responsavel: colab.nome,
                    status: 'pendente'
                });
            }
        });
    }

    // Se não há gaps críticos, sugerir evolução das medianas
    if (sugestoes.length === 0) {
        const medHard = calcMediana(avaliacao.hard);
        const medSoft = calcMediana(avaliacao.soft);

        if (medHard < 4) {
            const indexadas = avaliacao.hard.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
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
            const indexadas = avaliacao.soft.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
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
        'Foco no Cliente': 'Conduzir ao menos 2 reuniões com clientes e coletar feedback ativo.',
        'Senso de Dono': 'Assumir ownership de um projeto end-to-end no quarter.',
        'Inovação e Simplificação': 'Propor e implementar 1 melhoria de processo documentada.',
        'Tomada de Decisão': 'Embasar decisões com dados. Documentar 3 decisões técnicas.',
        'Aprendizado Contínuo': 'Apresentar 2 tech talks ou compartilhar aprendizados com o time.',
        'Excelência e Qualidade': 'Criar ou melhorar 2 padrões de qualidade no time.',
        'Visão Estratégica': 'Propor roadmap de 6 meses para área de atuação.',
        'Proatividade': 'Reduzir tempo médio de resposta a incidentes em 20%.',
        'Gestão de Recursos': 'Identificar e implementar 1 redução de custo em infraestrutura.',
        'Confiabilidade e Transparência': 'Pedir feedback 360 e implementar 2 pontos de melhoria.',
        'Capacidade Analítica': 'Documentar deep-dive de 2 sistemas críticos.',
        'Assertividade e Colaboração': 'Participar ativamente de 3 design reviews com posição clara.',
        'Orientação a Resultados': 'Atingir 100% das metas do quarter anterior.'
    };

    for (const [key, acao] of Object.entries(acoes)) {
        if (skill.includes(key)) return acao;
    }
    return `Desenvolver ${skill} com feedback constante e prática deliberada.`;
}

function gerarDescricaoDisciplinar(skill, nivelAtual) {
    const acoes = {
        'Pontualidade': 'Manter registro de horários e reduzir atrasos a zero no próximo mês.',
        'Assiduidade': 'Reduzir faltas não justificadas. Comunicar ausências com antecedência.',
        'Postura Profissional': 'Participar de workshop de comunicação profissional e aplicar no dia a dia.',
        'Cumprimento de Prazos': 'Usar ferramenta de gestão de tarefas e entregar 100% dentro do prazo.',
        'Comunicação': 'Praticar comunicação assertiva em reuniões e documentar decisões por escrito.',
        'Trabalho em Equipe': 'Participar de pair programming semanal e contribuir em code reviews.',
        'Respeito às Normas': 'Revisar e seguir políticas internas. Reportar impedimentos proativamente.'
    };

    for (const [key, acao] of Object.entries(acoes)) {
        if (skill.includes(key)) return acao;
    }
    return `Melhorar ${skill} com acompanhamento semanal e feedbacks regulares.`;
}

function gerarPrazo() {
    const hoje = new Date();
    const prazo = new Date(hoje.getTime() + 90 * 24 * 60 * 60 * 1000);
    return prazo.toISOString().split('T')[0];
}

// ============================================
// RENDERIZAR PLANO
// ============================================
function renderPlano(colab, avaliacao) {
    const container = document.getElementById('plano-conteudo');

    if (!avaliacao || !avaliacao.hard || !avaliacao.soft) {
        container.innerHTML = '<p style="color:#666;">Este colaborador não foi avaliado neste período.</p>';
        return;
    }

    // Tentar carregar plano existente do Firebase
    carregarPlano(colab.email).then(metasSalvas => {
        const sugestoes = metasSalvas || gerarSugestoes(colab, avaliacao);
        window._planoAtual = sugestoes;
        renderPlanoComDados(colab, avaliacao, sugestoes);
    });
}

function renderPlanoComDados(colab, avaliacao, metas) {
    const container = document.getElementById('plano-conteudo');
    const medHard = calcMediana(avaliacao.hard);
    const medSoft = calcMediana(avaliacao.soft);
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
            ${metasHTML || '<p style="color:#666;">Nenhuma sugestão gerada. Este colaborador tem excelentes notas!</p>'}
        </div>
    `;
}

function escapeHTML(str) {
    if (!str) return '';
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
        const email = document.getElementById('plano-colaborador-select').value;
        const colab = state.colaboradores.find(c => c.email === email);
        const avaliacao = getAvaliacaoAtual(email);
        if (colab && avaliacao) {
            renderPlanoComDados(colab, avaliacao, window._planoAtual);
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
    const avaliacao = getAvaliacaoAtual(email);
    if (colab && avaliacao) {
        renderPlanoComDados(colab, avaliacao, window._planoAtual);
    }
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
        const docId = `${email.replace(/[^a-zA-Z0-9]/g, '_')}_${state.currentQuarter}`;
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
        const docId = `${email.replace(/[^a-zA-Z0-9]/g, '_')}_${state.currentQuarter}`;
        const doc = await db.collection("planos").doc(docId).get();
        if (doc.exists) {
            return doc.data().metas;
        }
    } catch (err) {
        console.warn("Erro ao carregar plano:", err.message);
    }
    return null;
}

// ============================================
// DOWNLOAD PDF DO PLANO
// ============================================
function downloadPlanoPDF() {
    const conteudo = document.getElementById('plano-conteudo');

    if (!conteudo || !conteudo.innerHTML.trim()) {
        showToast("Selecione um colaborador primeiro.", "error");
        return;
    }

    const email = document.getElementById('plano-colaborador-select').value;
    const colab = state.colaboradores.find(c => c.email === email);
    const nomeArquivo = colab
        ? `plano-desenvolvimento-${colab.nome.replace(/\s+/g, '-').toLowerCase()}-${state.currentQuarter}.pdf`
        : `plano-desenvolvimento-${state.currentQuarter}.pdf`;

    const opt = {
        margin: [10, 10, 10, 10],
        filename: nomeArquivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Temporariamente esconder botões para não aparecerem no PDF
    const buttons = conteudo.querySelectorAll('button');
    buttons.forEach(btn => btn.style.display = 'none');

    html2pdf().set(opt).from(conteudo).save().then(() => {
        buttons.forEach(btn => btn.style.display = '');
        showToast("PDF gerado com sucesso!", "success");
    }).catch(() => {
        buttons.forEach(btn => btn.style.display = '');
        showToast("Erro ao gerar PDF.", "error");
    });
}
