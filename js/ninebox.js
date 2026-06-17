// ============================================
// NINE BOX - RENDERIZAÇÃO
// ============================================

function renderNineBox() {
    // Limpar todas as células
    document.querySelectorAll('.cell-people').forEach(el => el.innerHTML = '');

    state.colaboradores.forEach(colab => {
        // Não avaliados
        if (!colab.hard || !colab.soft) {
            // Colocar na célula "Insuficiente" como não avaliado
            const cell = document.querySelector('.nine-cell[data-row="1"][data-col="1"] .cell-people');
            if (cell) {
                const badge = document.createElement('span');
                badge.className = 'person-badge nao-avaliado';
                badge.textContent = colab.nome.split(' ')[0];
                badge.title = `${colab.nome} - NÃO AVALIADO`;
                cell.appendChild(badge);
            }
            return;
        }

        const medHard = calcMediana(colab.hard);
        const medSoft = calcMediana(colab.soft);
        const { row, col } = getNineBoxPos(medHard, medSoft);

        const cell = document.querySelector(`.nine-cell[data-row="${row}"][data-col="${col}"] .cell-people`);
        if (cell) {
            const badge = document.createElement('span');
            badge.className = 'person-badge';
            badge.textContent = colab.nome.split(' ')[0];
            badge.title = `${colab.nome}\nDesempenho: ${medHard} | Potencial: ${medSoft}`;
            badge.addEventListener('click', () => {
                // Navegar para resumo
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelector('[data-section="resumos"]').classList.add('active');
                document.getElementById('resumos').classList.add('active');
                document.getElementById('colaborador-select').value = colab.email;
                renderResumo(colab);
            });
            cell.appendChild(badge);
        }
    });
}
