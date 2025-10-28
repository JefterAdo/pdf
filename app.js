// Application principale
let filteredData = [];
let allTableData = [];

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Charger les données
    loadDashboardStats();
    loadCandidatesResults();
    prepareTableData();
    populateRegionFilter();
    renderTable(allTableData);
    initializeCharts();
    setupEventListeners();
}

// Charger les statistiques du dashboard
function loadDashboardStats() {
    const total = electionData.totalNational;
    
    document.getElementById('total-inscrits').textContent = formatNumber(total.inscrits);
    document.getElementById('total-votants').textContent = formatNumber(total.votants);
    document.getElementById('taux-participation').textContent = total.tauxParticipation.toFixed(2) + '%';
    document.getElementById('suffrages-exprimes').textContent = formatNumber(total.suffExprimes);
}

// Charger les résultats des candidats
function loadCandidatesResults() {
    const container = document.getElementById('candidates-grid');
    const total = electionData.totalNational;
    const totalVotes = total.suffExprimes;
    
    // Calculer les pourcentages et trier
    const candidatesResults = candidatesInfo.map(candidate => {
        const votes = total.candidates[candidate.id];
        const percentage = (votes / totalVotes * 100).toFixed(2);
        return {
            ...candidate,
            votes: votes,
            percentage: parseFloat(percentage)
        };
    }).sort((a, b) => b.votes - a.votes);
    
    // Générer les cartes
    candidatesResults.forEach((candidate, index) => {
        const isWinner = index === 0;
        const card = document.createElement('div');
        card.className = `candidate-card ${isWinner ? 'winner' : ''}`;
        card.style.borderTopColor = candidate.color;
        
        card.innerHTML = `
            <div class="candidate-header">
                <div class="candidate-number" style="background: ${candidate.color}">
                    ${candidate.number}
                </div>
                <div class="candidate-info">
                    <h3>${candidate.party}</h3>
                    <p>${candidate.name}</p>
                </div>
            </div>
            <div class="candidate-stats">
                <div class="stat-row">
                    <span class="stat-label">Voix obtenues</span>
                    <span class="stat-value">${formatNumber(candidate.votes)}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Pourcentage</span>
                    <span class="stat-value" style="color: ${candidate.color}">${candidate.percentage}%</span>
                </div>
            </div>
            <div class="percentage-bar">
                <div class="percentage-fill" style="background: ${candidate.color}; width: ${candidate.percentage}%"></div>
            </div>
            ${isWinner ? '<span class="winner-badge"><i class="fas fa-trophy"></i> En tête</span>' : ''}
        `;
        
        container.appendChild(card);
    });
}

// Préparer les données du tableau
function prepareTableData() {
    allTableData = [];
    
    // Ajouter le total national
    allTableData.push({
        ...electionData.totalNational,
        type: 'total',
        searchText: 'total national'
    });
    
    // Ajouter toutes les régions et départements
    electionData.regions.forEach(region => {
        allTableData.push({
            ...region,
            type: 'region',
            searchText: region.location.toLowerCase()
        });
        
        if (region.departements) {
            region.departements.forEach(dept => {
                allTableData.push({
                    ...dept,
                    type: 'departement',
                    parentRegion: region.location,
                    searchText: dept.location.toLowerCase()
                });
            });
        }
    });
    
    filteredData = [...allTableData];
}

// Peupler le filtre des régions
function populateRegionFilter() {
    const select = document.getElementById('region-filter');
    const regions = electionData.regions.map(r => r.location).sort();
    
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        select.appendChild(option);
    });
}

// Afficher le tableau
function renderTable(data) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = row.type === 'total' ? 'total-row' : (row.type === 'region' ? 'region-row' : '');
        
        tr.innerHTML = `
            <td>${row.location}</td>
            <td>${formatNumber(row.nbBV)}</td>
            <td>${formatNumber(row.inscrits)}</td>
            <td>${formatNumber(row.persAstreinte)}</td>
            <td>${formatNumber(row.votants)}</td>
            <td>${row.tauxParticipation.toFixed(2)}%</td>
            <td>${formatNumber(row.bulletinsNuls)}</td>
            <td>${formatNumber(row.suffExprimes)}</td>
            <td>${formatNumber(row.bulletinsBlancs)}</td>
            <td style="background: rgba(255, 140, 0, 0.15); font-weight: 600;">${formatNumber(row.candidates.rhdp)}</td>
            <td style="background: rgba(220, 20, 60, 0.15); font-weight: 600;">${formatNumber(row.candidates.mgc)}</td>
            <td style="background: rgba(50, 205, 50, 0.15); font-weight: 600;">${formatNumber(row.candidates.gpPaix)}</td>
            <td style="background: rgba(65, 105, 225, 0.15); font-weight: 600;">${formatNumber(row.candidates.code)}</td>
            <td style="background: rgba(147, 112, 219, 0.15); font-weight: 600;">${formatNumber(row.candidates.independant)}</td>
        `;
        
        tbody.appendChild(tr);
    });
    
    updateResultsCount(data.length);
}

// Mettre à jour le compteur de résultats
function updateResultsCount(count) {
    const countElement = document.getElementById('results-count');
    if (count === allTableData.length) {
        countElement.textContent = 'Affichage de tous les résultats';
    } else {
        countElement.textContent = `Affichage de ${count} résultat${count > 1 ? 's' : ''} sur ${allTableData.length}`;
    }
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Recherche
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.trim();
        clearBtn.classList.toggle('active', value.length > 0);
        applyFilters();
    });
    
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        clearBtn.classList.remove('active');
        applyFilters();
    });
    
    // Filtre région
    document.getElementById('region-filter').addEventListener('change', applyFilters);
    
    // Tri
    document.getElementById('sort-filter').addEventListener('change', applyFilters);
    
    // Export
    document.getElementById('export-btn').addEventListener('click', exportToCSV);
}

// Appliquer les filtres
function applyFilters() {
    const searchValue = document.getElementById('search-input').value.toLowerCase().trim();
    const regionValue = document.getElementById('region-filter').value;
    const sortValue = document.getElementById('sort-filter').value;
    
    // Filtrer
    filteredData = allTableData.filter(row => {
        // Filtre de recherche
        const matchSearch = !searchValue || row.searchText.includes(searchValue);
        
        // Filtre région
        const matchRegion = !regionValue || 
            row.location === regionValue || 
            row.parentRegion === regionValue;
        
        return matchSearch && matchRegion;
    });
    
    // Trier
    if (sortValue !== 'default') {
        filteredData.sort((a, b) => {
            switch(sortValue) {
                case 'participation-desc':
                    return b.tauxParticipation - a.tauxParticipation;
                case 'participation-asc':
                    return a.tauxParticipation - b.tauxParticipation;
                case 'votants-desc':
                    return b.votants - a.votants;
                case 'votants-asc':
                    return a.votants - b.votants;
                default:
                    return 0;
            }
        });
    }
    
    renderTable(filteredData);
}

// Exporter en CSV
function exportToCSV() {
    const headers = [
        'Localisation', 'NB BV', 'Inscrits', 'Pers. Astreinte', 'Votants', 
        'Taux Participation', 'Bulletins Nuls', 'Suffrages Exprimés', 'Bulletins Blancs',
        'RHDP', 'MGC', 'GP-PAIX', 'CODE', 'INDÉPENDANT'
    ];
    
    let csv = headers.join(',') + '\n';
    
    filteredData.forEach(row => {
        const line = [
            `"${row.location}"`,
            row.nbBV,
            row.inscrits,
            row.persAstreinte,
            row.votants,
            row.tauxParticipation,
            row.bulletinsNuls,
            row.suffExprimes,
            row.bulletinsBlancs,
            row.candidates.rhdp,
            row.candidates.mgc,
            row.candidates.gpPaix,
            row.candidates.code,
            row.candidates.independant
        ];
        csv += line.join(',') + '\n';
    });
    
    // Télécharger le fichier
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'resultats_election_2025.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialiser les graphiques
function initializeCharts() {
    createCandidatesChart();
    createParticipationChart();
}

// Graphique des candidats
function createCandidatesChart() {
    const ctx = document.getElementById('candidatesChart').getContext('2d');
    const total = electionData.totalNational;
    
    const data = candidatesInfo.map(candidate => ({
        label: candidate.party,
        value: total.candidates[candidate.id],
        color: candidate.color
    })).sort((a, b) => b.value - a.value);
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.label),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: data.map(d => d.color),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            // Utiliser le total des suffrages exprimés du document officiel
                            const total = electionData.totalNational.suffExprimes;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${context.label}: ${formatNumber(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Graphique de participation
function createParticipationChart() {
    const ctx = document.getElementById('participationChart').getContext('2d');
    
    // Top 10 régions par taux de participation
    const regions = electionData.regions
        .map(r => ({
            name: r.location,
            participation: r.tauxParticipation
        }))
        .sort((a, b) => b.participation - a.participation)
        .slice(0, 10);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions.map(r => r.name),
            datasets: [{
                label: 'Taux de Participation (%)',
                data: regions.map(r => r.participation),
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.x.toFixed(2)}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Fonction utilitaire pour formater les nombres
function formatNumber(num) {
    if (num === undefined || num === null || num === '') return '-';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Gestion du défilement horizontal du tableau
function initTableScroll() {
    const tableWrapper = document.querySelector('.table-wrapper');
    if (!tableWrapper) return;
    
    // Détecter le défilement
    tableWrapper.addEventListener('scroll', function() {
        const scrollLeft = this.scrollLeft;
        const maxScroll = this.scrollWidth - this.clientWidth;
        
        // Masquer l'indicateur si on a défilé vers la droite
        if (scrollLeft > 50) {
            this.classList.add('scrolled-right');
        } else {
            this.classList.remove('scrolled-right');
        }
    });
    
    // Afficher un message au chargement si le tableau est trop large
    setTimeout(() => {
        if (tableWrapper.scrollWidth > tableWrapper.clientWidth) {
            showScrollHint();
        }
    }, 1000);
}

// Afficher un message d'aide pour le défilement
function showScrollHint() {
    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    hint.innerHTML = '<i class="fas fa-hand-point-right"></i> Faites glisser le tableau vers la droite pour voir toutes les colonnes';
    hint.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 1001;
        animation: slideUp 0.5s ease-out;
    `;
    
    document.body.appendChild(hint);
    
    // Masquer après 5 secondes
    setTimeout(() => {
        hint.style.animation = 'slideDown 0.5s ease-out';
        setTimeout(() => hint.remove(), 500);
    }, 5000);
}

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translate(-50%, 100px);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, 100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', initTableScroll);
