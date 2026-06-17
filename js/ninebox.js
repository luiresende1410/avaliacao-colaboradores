// ============================================
// NINE BOX - RENDERIZAÇÃO
// ============================================

function renderNineBox() {
    // Limpar todas as células
    document.querySelectorAll('.cell-people').forEach(el => el.innerHTML = '');

    state.colaboradores.forEach(colab => {
        const avaliacao = getAvaliacaoAtual(colab.email);

        // Não avaliados neste quarter
        if (!avaliacao) {
            const cell = document.querySelector('.nine-cell[data-row="1"][data-col="1"] .cell-people');
            if (cell) {
                const badge = document.createElement('span');
                badge.className = 'person-badge nao-avaliado';
                badge.textContent = colab.nome.split(' ')[0];
                badge.title = `${colab.nome} - NÃO AVALIADO (${state.currentQuarter})`;
                cell.appendChild(badge);
            }
            return;
        }

        const medHard = calcMediana(avaliacao.hard);
        const medSoft = calcMediana(avaliacao.soft);
        const { row, col } = getNineBoxPos(medHard, medSoft);

        const cell = document.querySelector(`.nine-cell[data-row="${row}"][data-col="${col}"] .cell-people`);
        if (cell) {
            const badge = document.createElement('span');
            badge.className = 'person-badge';
            badge.textContent = colab.nome.split(' ')[0];
            badge.title = `${colab.nome}\nDesempenho: ${medHard} | Potencial: ${medSoft}\nPeríodo: ${state.currentQuarter}`;
            badge.addEventListener('click', () => {
                // Navegar para resumo
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelector('[data-section="resumos"]').classList.add('active');
                document.getElementById('resumos').classList.add('active');
                document.getElementById('colaborador-select').value = colab.email;
                renderResumo(colab, avaliacao);
            });
            cell.appendChild(badge);
        }
    });
}
