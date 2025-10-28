// Données électorales - Élection Présidentielle 2025
const electionData = {
    totalNational: {
        location: "TOTAL NATIONAL",
        nbBV: 25149,
        inscrits: 8568456,
        persAstreinte: 24674,
        votants: 4292474,
        tauxParticipation: 50.10,
        bulletinsNuls: 105156,
        suffExprimes: 4187318,
        bulletinsBlancs: 66788,
        candidates: {
            rhdp: 3759030,
            mgc: 101238,
            gpPaix: 48261,
            code: 129493,
            independant: 82508
        }
    },
    
    regions: [
        {
            location: "AGNEBY-TIASSA",
            type: "region",
            nbBV: 737,
            inscrits: 256319,
            persAstreinte: 378,
            votants: 103096,
            tauxParticipation: 40.16,
            bulletinsNuls: 3477,
            suffExprimes: 99619,
            bulletinsBlancs: 1453,
            candidates: { rhdp: 82713, mgc: 5649, gpPaix: 2263, code: 4150, independant: 3391 },
            departements: [
                { location: "AGBOVILLE", nbBV: 379, inscrits: 135093, persAstreinte: 238, votants: 44766, tauxParticipation: 33.08, bulletinsNuls: 1972, suffExprimes: 42794, bulletinsBlancs: 867, candidates: { rhdp: 35224, mgc: 3001, gpPaix: 770, code: 1592, independant: 1340 } },
                { location: "SIKENSI", nbBV: 96, inscrits: 35369, persAstreinte: 41, votants: 14152, tauxParticipation: 39.97, bulletinsNuls: 412, suffExprimes: 13740, bulletinsBlancs: 168, candidates: { rhdp: 9615, mgc: 1293, gpPaix: 755, code: 947, independant: 962 } },
                { location: "TAABO", nbBV: 68, inscrits: 23159, persAstreinte: 49, votants: 6509, tauxParticipation: 28.05, bulletinsNuls: 364, suffExprimes: 6145, bulletinsBlancs: 150, candidates: { rhdp: 4979, mgc: 256, gpPaix: 226, code: 341, independant: 193 } },
                { location: "TIASSALE", nbBV: 194, inscrits: 62698, persAstreinte: 50, votants: 37669, tauxParticipation: 60.03, bulletinsNuls: 729, suffExprimes: 36940, bulletinsBlancs: 268, candidates: { rhdp: 32895, mgc: 1099, gpPaix: 512, code: 1270, independant: 896 } }
            ]
        },
        {
            location: "BAFING",
            type: "region",
            nbBV: 368,
            inscrits: 92295,
            persAstreinte: 349,
            votants: 80764,
            tauxParticipation: 87.18,
            bulletinsNuls: 587,
            suffExprimes: 80177,
            bulletinsBlancs: 526,
            candidates: { rhdp: 78593, mgc: 225, gpPaix: 144, code: 469, independant: 220 },
            departements: [
                { location: "KORO", nbBV: 119, inscrits: 30718, persAstreinte: 87, votants: 28419, tauxParticipation: 92.25, bulletinsNuls: 106, suffExprimes: 28313, bulletinsBlancs: 118, candidates: { rhdp: 27884, mgc: 31, gpPaix: 43, code: 207, independant: 30 } },
                { location: "OUANINOU", nbBV: 106, inscrits: 25316, persAstreinte: 71, votants: 19862, tauxParticipation: 78.24, bulletinsNuls: 259, suffExprimes: 19603, bulletinsBlancs: 213, candidates: { rhdp: 19130, mgc: 58, gpPaix: 46, code: 73, independant: 83 } },
                { location: "TOUBA", nbBV: 143, inscrits: 36261, persAstreinte: 191, votants: 32483, tauxParticipation: 89.11, bulletinsNuls: 222, suffExprimes: 32261, bulletinsBlancs: 195, candidates: { rhdp: 31579, mgc: 136, gpPaix: 55, code: 189, independant: 107 } }
            ]
        },
        {
            location: "BAGOUE",
            type: "region",
            nbBV: 425,
            inscrits: 144374,
            persAstreinte: 394,
            votants: 138226,
            tauxParticipation: 95.48,
            bulletinsNuls: 333,
            suffExprimes: 137893,
            bulletinsBlancs: 844,
            candidates: { rhdp: 136177, mgc: 166, gpPaix: 117, code: 325, independant: 264 },
            departements: [
                { location: "BOUNDIALI", nbBV: 169, inscrits: 56207, persAstreinte: 238, votants: 54527, tauxParticipation: 96.60, bulletinsNuls: 103, suffExprimes: 54424, bulletinsBlancs: 74, candidates: { rhdp: 54111, mgc: 56, gpPaix: 32, code: 99, independant: 52 } },
                { location: "KOUTO", nbBV: 147, inscrits: 51263, persAstreinte: 141, votants: 48879, tauxParticipation: 95.09, bulletinsNuls: 109, suffExprimes: 48770, bulletinsBlancs: 486, candidates: { rhdp: 47948, mgc: 49, gpPaix: 49, code: 117, independant: 121 } },
                { location: "TENGRELA", nbBV: 109, inscrits: 36904, persAstreinte: 15, votants: 34820, tauxParticipation: 94.31, bulletinsNuls: 121, suffExprimes: 34699, bulletinsBlancs: 284, candidates: { rhdp: 34118, mgc: 61, gpPaix: 36, code: 109, independant: 91 } }
            ]
        },
        {
            location: "BELIER",
            type: "region",
            nbBV: 496,
            inscrits: 153352,
            persAstreinte: 323,
            votants: 52371,
            tauxParticipation: 34.08,
            bulletinsNuls: 2467,
            suffExprimes: 49904,
            bulletinsBlancs: 1749,
            candidates: { rhdp: 40968, mgc: 1562, gpPaix: 1478, code: 2822, independant: 1325 },
            departements: [
                { location: "DIDIEVI", nbBV: 129, inscrits: 36304, persAstreinte: 111, votants: 16767, tauxParticipation: 46.04, bulletinsNuls: 617, suffExprimes: 16150, bulletinsBlancs: 541, candidates: { rhdp: 12993, mgc: 493, gpPaix: 563, code: 1149, independant: 411 } },
                { location: "DJEKANOU", nbBV: 39, inscrits: 11372, persAstreinte: 10, votants: 2367, tauxParticipation: 20.80, bulletinsNuls: 236, suffExprimes: 2131, bulletinsBlancs: 124, candidates: { rhdp: 1463, mgc: 108, gpPaix: 151, code: 198, independant: 87 } },
                { location: "TIEBISSOU", nbBV: 147, inscrits: 42781, persAstreinte: 106, votants: 12393, tauxParticipation: 28.90, bulletinsNuls: 629, suffExprimes: 11764, bulletinsBlancs: 523, candidates: { rhdp: 9295, mgc: 440, gpPaix: 406, code: 715, independant: 385 } },
                { location: "TOUMODI", nbBV: 181, inscrits: 62895, persAstreinte: 96, votants: 20844, tauxParticipation: 33.09, bulletinsNuls: 985, suffExprimes: 19859, bulletinsBlancs: 561, candidates: { rhdp: 17217, mgc: 521, gpPaix: 358, code: 760, independant: 442 } }
            ]
        },
        {
            location: "BERE",
            type: "region",
            nbBV: 418,
            inscrits: 122505,
            persAstreinte: 376,
            votants: 103108,
            tauxParticipation: 83.91,
            bulletinsNuls: 890,
            suffExprimes: 102218,
            bulletinsBlancs: 1630,
            candidates: { rhdp: 98267, mgc: 598, gpPaix: 332, code: 873, independant: 518 },
            departements: [
                { location: "DIANRA", nbBV: 88, inscrits: 26729, persAstreinte: 71, votants: 24612, tauxParticipation: 91.84, bulletinsNuls: 189, suffExprimes: 24423, bulletinsBlancs: 494, candidates: { rhdp: 23722, mgc: 26, gpPaix: 17, code: 63, independant: 101 } },
                { location: "KOUNAHIRI", nbBV: 84, inscrits: 24391, persAstreinte: 77, votants: 14488, tauxParticipation: 59.21, bulletinsNuls: 275, suffExprimes: 14213, bulletinsBlancs: 277, candidates: { rhdp: 12630, mgc: 478, gpPaix: 182, code: 426, independant: 220 } },
                { location: "MANKONO", nbBV: 246, inscrits: 71385, persAstreinte: 228, votants: 64008, tauxParticipation: 89.38, bulletinsNuls: 426, suffExprimes: 63582, bulletinsBlancs: 859, candidates: { rhdp: 61915, mgc: 94, gpPaix: 133, code: 384, independant: 197 } }
            ]
        },
        {
            location: "BOUNKANI",
            type: "region",
            nbBV: 321,
            inscrits: 89669,
            persAstreinte: 305,
            votants: 69813,
            tauxParticipation: 77.59,
            bulletinsNuls: 1218,
            suffExprimes: 68595,
            bulletinsBlancs: 1795,
            candidates: { rhdp: 60140, mgc: 1252, gpPaix: 682, code: 3267, independant: 1459 },
            departements: [
                { location: "BOUNA", nbBV: 132, inscrits: 37672, persAstreinte: 117, votants: 31305, tauxParticipation: 82.84, bulletinsNuls: 472, suffExprimes: 30833, bulletinsBlancs: 755, candidates: { rhdp: 27716, mgc: 583, gpPaix: 224, code: 934, independant: 621 } },
                { location: "DOROPO", nbBV: 67, inscrits: 19827, persAstreinte: 67, votants: 14711, tauxParticipation: 73.95, bulletinsNuls: 254, suffExprimes: 14457, bulletinsBlancs: 485, candidates: { rhdp: 12787, mgc: 259, gpPaix: 120, code: 477, independant: 329 } },
                { location: "NASSIAN", nbBV: 76, inscrits: 21508, persAstreinte: 86, votants: 14405, tauxParticipation: 66.71, bulletinsNuls: 349, suffExprimes: 14056, bulletinsBlancs: 350, candidates: { rhdp: 11160, mgc: 292, gpPaix: 277, code: 1603, independant: 374 } },
                { location: "TEHINI", nbBV: 46, inscrits: 10662, persAstreinte: 35, votants: 9392, tauxParticipation: 87.80, bulletinsNuls: 143, suffExprimes: 9249, bulletinsBlancs: 205, candidates: { rhdp: 8477, mgc: 118, gpPaix: 61, code: 253, independant: 135 } }
            ]
        },
        {
            location: "CAVALLY",
            type: "region",
            nbBV: 412,
            inscrits: 130922,
            persAstreinte: 305,
            votants: 60592,
            tauxParticipation: 46.17,
            bulletinsNuls: 2867,
            suffExprimes: 57725,
            bulletinsBlancs: 1352,
            candidates: { rhdp: 51450, mgc: 2052, gpPaix: 564, code: 1475, independant: 832 },
            departements: [
                { location: "BLOLEQUIN", nbBV: 115, inscrits: 34438, persAstreinte: 71, votants: 19127, tauxParticipation: 55.43, bulletinsNuls: 920, suffExprimes: 18207, bulletinsBlancs: 353, candidates: { rhdp: 16363, mgc: 562, gpPaix: 245, code: 412, independant: 272 } },
                { location: "GUIGLO", nbBV: 146, inscrits: 50114, persAstreinte: 129, votants: 18469, tauxParticipation: 36.76, bulletinsNuls: 1011, suffExprimes: 17458, bulletinsBlancs: 505, candidates: { rhdp: 15333, mgc: 665, gpPaix: 148, code: 550, independant: 257 } },
                { location: "TAI", nbBV: 67, inscrits: 23648, persAstreinte: 50, votants: 10648, tauxParticipation: 44.93, bulletinsNuls: 385, suffExprimes: 10263, bulletinsBlancs: 198, candidates: { rhdp: 9301, mgc: 200, gpPaix: 99, code: 302, independant: 163 } },
                { location: "TOULEPLEU", nbBV: 84, inscrits: 22722, persAstreinte: 55, votants: 12348, tauxParticipation: 54.21, bulletinsNuls: 551, suffExprimes: 11797, bulletinsBlancs: 296, candidates: { rhdp: 10453, mgc: 625, gpPaix: 72, code: 211, independant: 140 } }
            ]
        },
        {
            location: "DIASPORA",
            type: "region",
            nbBV: 289,
            inscrits: 113171,
            persAstreinte: 212,
            votants: 39085,
            tauxParticipation: 34.47,
            bulletinsNuls: 503,
            suffExprimes: 38582,
            bulletinsBlancs: 863,
            candidates: { rhdp: 34067, mgc: 1120, gpPaix: 683, code: 868, independant: 981 },
            departements: [
                { location: "AFRIQUE DU SUD", nbBV: 3, inscrits: 804, persAstreinte: 7, votants: 352, tauxParticipation: 43.40, bulletinsNuls: 11, suffExprimes: 341, bulletinsBlancs: 5, candidates: { rhdp: 280, mgc: 9, gpPaix: 1, code: 43, independant: 3 } },
                { location: "ALLEMAGNE", nbBV: 5, inscrits: 1508, persAstreinte: 12, votants: 444, tauxParticipation: 29.21, bulletinsNuls: 2, suffExprimes: 442, bulletinsBlancs: 13, candidates: { rhdp: 366, mgc: 34, gpPaix: 1, code: 12, independant: 16 } },
                { location: "ANGOLA", nbBV: 2, inscrits: 745, persAstreinte: 0, votants: 628, tauxParticipation: 84.30, bulletinsNuls: 4, suffExprimes: 624, bulletinsBlancs: 23, candidates: { rhdp: 536, mgc: 5, gpPaix: 1, code: 7, independant: 2 } },
                { location: "BELGIQUE", nbBV: 5, inscrits: 2030, persAstreinte: 0, votants: 1469, tauxParticipation: 72.38, bulletinsNuls: 9, suffExprimes: 1460, bulletinsBlancs: 10, candidates: { rhdp: 1401, mgc: 28, gpPaix: 1, code: 6, independant: 14 } },
                { location: "BURKINA FASO", nbBV: 0, inscrits: 0, persAstreinte: 0, votants: 0, tauxParticipation: 0.00, bulletinsNuls: 0, suffExprimes: 0, bulletinsBlancs: 0, candidates: { rhdp: 0, mgc: 0, gpPaix: 0, code: 0, independant: 0 } },
                { location: "CANADA", nbBV: 16, inscrits: 5986, persAstreinte: 0, votants: 1492, tauxParticipation: 24.92, bulletinsNuls: 26, suffExprimes: 1466, bulletinsBlancs: 34, candidates: { rhdp: 1031, mgc: 90, gpPaix: 8, code: 138, independant: 165 } },
                { location: "CONGO", nbBV: 2, inscrits: 870, persAstreinte: 0, votants: 662, tauxParticipation: 76.09, bulletinsNuls: 17, suffExprimes: 645, bulletinsBlancs: 9, candidates: { rhdp: 611, mgc: 10, gpPaix: 3, code: 4, independant: 8 } },
                { location: "EGYPTE", nbBV: 4, inscrits: 1504, persAstreinte: 0, votants: 273, tauxParticipation: 18.15, bulletinsNuls: 13, suffExprimes: 260, bulletinsBlancs: 2, candidates: { rhdp: 236, mgc: 6, gpPaix: 2, code: 4, independant: 10 } },
                { location: "ETATS-UNIS", nbBV: 21, inscrits: 7525, persAstreinte: 3, votants: 2093, tauxParticipation: 27.80, bulletinsNuls: 24, suffExprimes: 2069, bulletinsBlancs: 30, candidates: { rhdp: 1907, mgc: 63, gpPaix: 4, code: 37, independant: 28 } },
                { location: "FRANCE", nbBV: 111, inscrits: 47111, persAstreinte: 110, votants: 21053, tauxParticipation: 44.58, bulletinsNuls: 201, suffExprimes: 20852, bulletinsBlancs: 516, candidates: { rhdp: 18549, mgc: 421, gpPaix: 603, code: 324, independant: 439 } },
                { location: "GABON", nbBV: 14, inscrits: 5469, persAstreinte: 0, votants: 3184, tauxParticipation: 58.22, bulletinsNuls: 18, suffExprimes: 3166, bulletinsBlancs: 22, candidates: { rhdp: 3008, mgc: 16, gpPaix: 1, code: 20, independant: 9 } },
                { location: "GHANA, BENIN, TOGO", nbBV: 10, inscrits: 3575, persAstreinte: 3, votants: 567, tauxParticipation: 16.41, bulletinsNuls: 11, suffExprimes: 576, bulletinsBlancs: 55, candidates: { rhdp: 395, mgc: 37, gpPaix: 6, code: 58, independant: 25 } },
                { location: "GRANDE-BRETAGNE", nbBV: 9, inscrits: 3998, persAstreinte: 2, votants: 728, tauxParticipation: 18.70, bulletinsNuls: 3, suffExprimes: 745, bulletinsBlancs: 8, candidates: { rhdp: 641, mgc: 52, gpPaix: 1, code: 8, independant: 15 } },
                { location: "GUINEE", nbBV: 8, inscrits: 2778, persAstreinte: 11, votants: 736, tauxParticipation: 26.39, bulletinsNuls: 23, suffExprimes: 713, bulletinsBlancs: 23, candidates: { rhdp: 558, mgc: 43, gpPaix: 8, code: 35, independant: 46 } },
                { location: "ITALIE", nbBV: 30, inscrits: 10649, persAstreinte: 27, votants: 2768, tauxParticipation: 25.93, bulletinsNuls: 44, suffExprimes: 2724, bulletinsBlancs: 43, candidates: { rhdp: 2567, mgc: 50, gpPaix: 14, code: 30, independant: 20 } },
                { location: "MALI", nbBV: 0, inscrits: 0, persAstreinte: 0, votants: 0, tauxParticipation: 0.00, bulletinsNuls: 0, suffExprimes: 0, bulletinsBlancs: 0, candidates: { rhdp: 0, mgc: 0, gpPaix: 0, code: 0, independant: 0 } },
                { location: "MAROC", nbBV: 19, inscrits: 7059, persAstreinte: 12, votants: 799, tauxParticipation: 11.30, bulletinsNuls: 23, suffExprimes: 776, bulletinsBlancs: 19, candidates: { rhdp: 577, mgc: 84, gpPaix: 8, code: 47, independant: 41 } },
                { location: "SENEGAL, MAURITANIE", nbBV: 14, inscrits: 5545, persAstreinte: 1, votants: 1084, tauxParticipation: 19.73, bulletinsNuls: 49, suffExprimes: 1045, bulletinsBlancs: 29, candidates: { rhdp: 785, mgc: 76, gpPaix: 7, code: 61, independant: 107 } },
                { location: "SUISSE", nbBV: 4, inscrits: 1449, persAstreinte: 0, votants: 209, tauxParticipation: 14.42, bulletinsNuls: 9, suffExprimes: 200, bulletinsBlancs: 10, candidates: { rhdp: 151, mgc: 16, gpPaix: 2, code: 10, independant: 11 } },
                { location: "TUNISIE", nbBV: 12, inscrits: 4586, persAstreinte: 24, votants: 494, tauxParticipation: 10.76, bulletinsNuls: 16, suffExprimes: 478, bulletinsBlancs: 12, candidates: { rhdp: 328, mgc: 80, gpPaix: 12, code: 24, independant: 22 } }
            ]
        },
        {
            location: "D.A. ABIDJAN",
            type: "region",
            nbBV: 5592,
            inscrits: 2313917,
            persAstreinte: 7018,
            votants: 912470,
            tauxParticipation: 39.31,
            bulletinsNuls: 25167,
            suffExprimes: 887303,
            bulletinsBlancs: 13394,
            candidates: { rhdp: 781908, mgc: 27801, gpPaix: 7555, code: 32125, independant: 24520 },
            departements: [
                { location: "ABOBO", nbBV: 1058, inscrits: 438021, persAstreinte: 1820, votants: 186148, tauxParticipation: 42.32, bulletinsNuls: 4710, suffExprimes: 181438, bulletinsBlancs: 2717, candidates: { rhdp: 163805, mgc: 3763, gpPaix: 1316, code: 6251, independant: 3586 } },
                { location: "ADJAME", nbBV: 284, inscrits: 118995, persAstreinte: 451, votants: 48138, tauxParticipation: 40.30, bulletinsNuls: 975, suffExprimes: 47163, bulletinsBlancs: 504, candidates: { rhdp: 44348, mgc: 550, gpPaix: 149, code: 1078, independant: 534 } },
                { location: "ATTECOUBE", nbBV: 250, inscrits: 103500, persAstreinte: 137, votants: 65104, tauxParticipation: 62.82, bulletinsNuls: 1520, suffExprimes: 63584, bulletinsBlancs: 915, candidates: { rhdp: 58903, mgc: 1267, gpPaix: 488, code: 1277, independant: 734 } },
                { location: "COCODY", nbBV: 667, inscrits: 279785, persAstreinte: 857, votants: 53986, tauxParticipation: 19.24, bulletinsNuls: 2825, suffExprimes: 51161, bulletinsBlancs: 1455, candidates: { rhdp: 34347, mgc: 4125, gpPaix: 603, code: 4844, independant: 5787 } },
                { location: "KOUMASSI", nbBV: 430, inscrits: 177354, persAstreinte: 286, votants: 107730, tauxParticipation: 60.65, bulletinsNuls: 2402, suffExprimes: 105328, bulletinsBlancs: 1417, candidates: { rhdp: 96667, mgc: 2102, gpPaix: 755, code: 2773, independant: 1614 } },
                { location: "MARCORY", nbBV: 272, inscrits: 113786, persAstreinte: 94, votants: 44860, tauxParticipation: 39.39, bulletinsNuls: 1403, suffExprimes: 43457, bulletinsBlancs: 761, candidates: { rhdp: 38407, mgc: 1340, gpPaix: 292, code: 1661, independant: 996 } },
                { location: "PLATEAU", nbBV: 228, inscrits: 97533, persAstreinte: 535, votants: 26878, tauxParticipation: 27.30, bulletinsNuls: 434, suffExprimes: 26444, bulletinsBlancs: 330, candidates: { rhdp: 21818, mgc: 1696, gpPaix: 325, code: 1357, independant: 918 } },
                { location: "PORT-BOUET", nbBV: 352, inscrits: 145545, persAstreinte: 151, votants: 62151, tauxParticipation: 42.60, bulletinsNuls: 1615, suffExprimes: 60536, bulletinsBlancs: 973, candidates: { rhdp: 52658, mgc: 2300, gpPaix: 654, code: 2358, independant: 1503 } },
                { location: "TREICHVILLE", nbBV: 150, inscrits: 63093, persAstreinte: 219, votants: 27107, tauxParticipation: 42.81, bulletinsNuls: 710, suffExprimes: 26397, bulletinsBlancs: 304, candidates: { rhdp: 24273, mgc: 488, gpPaix: 153, code: 792, independant: 387 } },
                { location: "YOPOUGON", nbBV: 1320, inscrits: 555901, persAstreinte: 1559, votants: 173857, tauxParticipation: 31.19, bulletinsNuls: 5438, suffExprimes: 168419, bulletinsBlancs: 2595, candidates: { rhdp: 145778, mgc: 6288, gpPaix: 1714, code: 6467, independant: 5577 } },
                { location: "ANYAMA", nbBV: 256, inscrits: 99348, persAstreinte: 452, votants: 59201, tauxParticipation: 59.32, bulletinsNuls: 1285, suffExprimes: 57916, bulletinsBlancs: 509, candidates: { rhdp: 53011, mgc: 1544, gpPaix: 520, code: 1405, independant: 927 } },
                { location: "BINGERVILLE", nbBV: 190, inscrits: 68611, persAstreinte: 274, votants: 26757, tauxParticipation: 38.84, bulletinsNuls: 897, suffExprimes: 25860, bulletinsBlancs: 449, candidates: { rhdp: 21453, mgc: 1365, gpPaix: 248, code: 1104, independant: 1241 } },
                { location: "BROFODOUME", nbBV: 23, inscrits: 8181, persAstreinte: 16, votants: 2003, tauxParticipation: 24.44, bulletinsNuls: 220, suffExprimes: 1783, bulletinsBlancs: 77, candidates: { rhdp: 930, mgc: 268, gpPaix: 100, code: 196, independant: 212 } },
                { location: "SONGON", nbBV: 122, inscrits: 43864, persAstreinte: 167, votants: 28550, tauxParticipation: 64.84, bulletinsNuls: 733, suffExprimes: 27817, bulletinsBlancs: 388, candidates: { rhdp: 25510, mgc: 705, gpPaix: 238, code: 562, independant: 414 } }
            ]
        },
        {
            location: "GBEKE",
            type: "region",
            nbBV: 1412,
            inscrits: 459305,
            persAstreinte: 2306,
            votants: 196677,
            tauxParticipation: 42.81,
            bulletinsNuls: 7384,
            suffExprimes: 189293,
            bulletinsBlancs: 4393,
            candidates: { rhdp: 158242, mgc: 5302, gpPaix: 4995, code: 11305, independant: 4776 },
            departements: [
                { location: "BEOUMI", nbBV: 204, inscrits: 58692, persAstreinte: 235, votants: 17269, tauxParticipation: 29.21, bulletinsNuls: 1078, suffExprimes: 16191, bulletinsBlancs: 672, candidates: { rhdp: 11567, mgc: 1171, gpPaix: 733, code: 1300, independant: 668 } },
                { location: "BOTRO", nbBV: 172, inscrits: 42752, persAstreinte: 236, votants: 12973, tauxParticipation: 30.18, bulletinsNuls: 826, suffExprimes: 12147, bulletinsBlancs: 449, candidates: { rhdp: 8249, mgc: 527, gpPaix: 785, code: 1558, independant: 579 } },
                { location: "BOUAKE", nbBV: 894, inscrits: 319807, persAstreinte: 1594, votants: 155215, tauxParticipation: 48.54, bulletinsNuls: 4750, suffExprimes: 150465, bulletinsBlancs: 2759, candidates: { rhdp: 131051, mgc: 2965, gpPaix: 2827, code: 7734, independant: 3129 } },
                { location: "SAKASSOU", nbBV: 142, inscrits: 37854, persAstreinte: 241, votants: 11220, tauxParticipation: 29.45, bulletinsNuls: 730, suffExprimes: 10490, bulletinsBlancs: 513, candidates: { rhdp: 7375, mgc: 639, gpPaix: 650, code: 913, independant: 400 } }
            ]
        },
        {
            location: "PORO",
            type: "region",
            nbBV: 1095,
            inscrits: 368868,
            persAstreinte: 1573,
            votants: 345990,
            tauxParticipation: 93.40,
            bulletinsNuls: 2034,
            suffExprimes: 343956,
            bulletinsBlancs: 2224,
            candidates: { rhdp: 338373, mgc: 516, gpPaix: 368, code: 1702, independant: 773 },
            departements: [
                { location: "KORHOGO", nbBV: 788, inscrits: 274888, persAstreinte: 1231, votants: 256231, tauxParticipation: 92.80, bulletinsNuls: 1613, suffExprimes: 254618, bulletinsBlancs: 1540, candidates: { rhdp: 250226, mgc: 432, gpPaix: 331, code: 1514, independant: 575 } },
                { location: "DIKODOUGOU", nbBV: 103, inscrits: 28727, persAstreinte: 92, votants: 26484, tauxParticipation: 91.90, bulletinsNuls: 151, suffExprimes: 26333, bulletinsBlancs: 157, candidates: { rhdp: 25982, mgc: 19, gpPaix: 13, code: 74, independant: 88 } },
                { location: "M'BENGUE", nbBV: 111, inscrits: 35022, persAstreinte: 162, votants: 34367, tauxParticipation: 97.68, bulletinsNuls: 97, suffExprimes: 34270, bulletinsBlancs: 48, candidates: { rhdp: 34077, mgc: 30, gpPaix: 9, code: 45, independant: 61 } },
                { location: "SINEMATIALI", nbBV: 93, inscrits: 30231, persAstreinte: 88, votants: 28908, tauxParticipation: 95.35, bulletinsNuls: 173, suffExprimes: 28735, bulletinsBlancs: 479, candidates: { rhdp: 28088, mgc: 35, gpPaix: 15, code: 69, independant: 49 } }
            ]
        },
        {
            location: "TONKPI",
            type: "region",
            nbBV: 1129,
            inscrits: 342205,
            persAstreinte: 1018,
            votants: 204174,
            tauxParticipation: 59.49,
            bulletinsNuls: 5572,
            suffExprimes: 198602,
            bulletinsBlancs: 4397,
            candidates: { rhdp: 179065, mgc: 4943, gpPaix: 1724, code: 4540, independant: 3933 },
            departements: [
                { location: "BIANKOUMA", nbBV: 173, inscrits: 52302, persAstreinte: 130, votants: 40111, tauxParticipation: 76.50, bulletinsNuls: 793, suffExprimes: 39318, bulletinsBlancs: 556, candidates: { rhdp: 36788, mgc: 581, gpPaix: 228, code: 575, independant: 590 } },
                { location: "DANANE", nbBV: 320, inscrits: 87015, persAstreinte: 222, votants: 48267, tauxParticipation: 55.33, bulletinsNuls: 1336, suffExprimes: 46931, bulletinsBlancs: 1077, candidates: { rhdp: 42166, mgc: 1076, gpPaix: 358, code: 1058, independant: 1196 } },
                { location: "MAN", nbBV: 370, inscrits: 124169, persAstreinte: 516, votants: 67737, tauxParticipation: 54.33, bulletinsNuls: 2173, suffExprimes: 65564, bulletinsBlancs: 1916, candidates: { rhdp: 56920, mgc: 2529, gpPaix: 868, code: 2022, independant: 1309 } },
                { location: "SIPILOU", nbBV: 47, inscrits: 14298, persAstreinte: 15, votants: 9537, tauxParticipation: 66.63, bulletinsNuls: 255, suffExprimes: 9282, bulletinsBlancs: 199, candidates: { rhdp: 8494, mgc: 149, gpPaix: 70, code: 179, independant: 191 } },
                { location: "ZOUAN-HOUNIEN", nbBV: 219, inscrits: 64421, persAstreinte: 135, votants: 38522, tauxParticipation: 59.67, bulletinsNuls: 1015, suffExprimes: 37507, bulletinsBlancs: 649, candidates: { rhdp: 34697, mgc: 608, gpPaix: 200, code: 706, independant: 647 } }
            ]
        },
        {
            location: "KABADOUGOU",
            type: "region",
            nbBV: 351,
            inscrits: 112204,
            persAstreinte: 282,
            votants: 109834,
            tauxParticipation: 97.64,
            bulletinsNuls: 349,
            suffExprimes: 109485,
            bulletinsBlancs: 233,
            candidates: { rhdp: 108986, mgc: 65, gpPaix: 23, code: 103, independant: 75 },
            departements: [
                { location: "GBELEBAN", nbBV: 50, inscrits: 15782, persAstreinte: 30, votants: 15652, tauxParticipation: 98.99, bulletinsNuls: 7, suffExprimes: 15645, bulletinsBlancs: 4, candidates: { rhdp: 15629, mgc: 1, gpPaix: 1, code: 2, independant: 8 } },
                { location: "MADINANI", nbBV: 55, inscrits: 17672, persAstreinte: 33, votants: 17013, tauxParticipation: 96.09, bulletinsNuls: 55, suffExprimes: 16958, bulletinsBlancs: 44, candidates: { rhdp: 16878, mgc: 13, gpPaix: 2, code: 13, independant: 8 } },
                { location: "ODIENNE", nbBV: 188, inscrits: 60211, persAstreinte: 197, votants: 59281, tauxParticipation: 98.13, bulletinsNuls: 197, suffExprimes: 59084, bulletinsBlancs: 154, candidates: { rhdp: 58752, mgc: 40, gpPaix: 15, code: 73, independant: 50 } },
                { location: "SAMATIGUILA", nbBV: 27, inscrits: 9043, persAstreinte: 12, votants: 8616, tauxParticipation: 95.15, bulletinsNuls: 47, suffExprimes: 8569, bulletinsBlancs: 14, candidates: { rhdp: 8532, mgc: 7, gpPaix: 0, code: 9, independant: 4 } },
                { location: "SEGUELON", nbBV: 31, inscrits: 9496, persAstreinte: 10, votants: 9272, tauxParticipation: 97.54, bulletinsNuls: 43, suffExprimes: 9229, bulletinsBlancs: 17, candidates: { rhdp: 9195, mgc: 4, gpPaix: 2, code: 6, independant: 5 } }
            ]
        },
        {
            location: "LA ME",
            type: "region",
            nbBV: 580,
            inscrits: 219338,
            persAstreinte: 657,
            votants: 111496,
            tauxParticipation: 50.68,
            bulletinsNuls: 3129,
            suffExprimes: 108367,
            bulletinsBlancs: 2010,
            candidates: { rhdp: 90007, mgc: 5921, gpPaix: 2366, code: 5329, independant: 2734 },
            departements: [
                { location: "ADZOPE", nbBV: 225, inscrits: 86763, persAstreinte: 412, votants: 55707, tauxParticipation: 63.90, bulletinsNuls: 1045, suffExprimes: 54662, bulletinsBlancs: 1032, candidates: { rhdp: 47502, mgc: 2367, gpPaix: 951, code: 1890, independant: 920 } },
                { location: "AKOUPE", nbBV: 150, inscrits: 57537, persAstreinte: 149, votants: 18328, tauxParticipation: 31.77, bulletinsNuls: 1169, suffExprimes: 17159, bulletinsBlancs: 438, candidates: { rhdp: 13019, mgc: 876, gpPaix: 354, code: 1915, independant: 557 } },
                { location: "ALEPE", nbBV: 136, inscrits: 47820, persAstreinte: 37, votants: 19591, tauxParticipation: 40.94, bulletinsNuls: 712, suffExprimes: 18879, bulletinsBlancs: 349, candidates: { rhdp: 15180, mgc: 1408, gpPaix: 457, code: 819, independant: 666 } },
                { location: "YAKASSE-ATTOBROU", nbBV: 69, inscrits: 27218, persAstreinte: 59, votants: 17870, tauxParticipation: 65.51, bulletinsNuls: 203, suffExprimes: 17667, bulletinsBlancs: 191, candidates: { rhdp: 14306, mgc: 1270, gpPaix: 604, code: 705, independant: 591 } }
            ]
        },
        {
            location: "LOH-DJIBOUA",
            type: "region",
            nbBV: 856,
            inscrits: 270361,
            persAstreinte: 796,
            votants: 105057,
            tauxParticipation: 38.74,
            bulletinsNuls: 3848,
            suffExprimes: 101209,
            bulletinsBlancs: 1879,
            candidates: { rhdp: 92276, mgc: 1976, gpPaix: 944, code: 2596, independant: 1538 },
            departements: [
                { location: "DIVO", nbBV: 457, inscrits: 156435, persAstreinte: 463, votants: 54114, tauxParticipation: 34.49, bulletinsNuls: 2459, suffExprimes: 51655, bulletinsBlancs: 1028, candidates: { rhdp: 46600, mgc: 1125, gpPaix: 496, code: 1543, independant: 863 } },
                { location: "GUITRY", nbBV: 168, inscrits: 43128, persAstreinte: 190, votants: 22209, tauxParticipation: 51.27, bulletinsNuls: 793, suffExprimes: 21416, bulletinsBlancs: 554, candidates: { rhdp: 19135, mgc: 434, gpPaix: 267, code: 643, independant: 383 } },
                { location: "LAKOTA", nbBV: 231, inscrits: 70798, persAstreinte: 143, votants: 28734, tauxParticipation: 40.50, bulletinsNuls: 596, suffExprimes: 28138, bulletinsBlancs: 297, candidates: { rhdp: 26541, mgc: 417, gpPaix: 181, code: 410, independant: 292 } }
            ]
        },
        {
            location: "MARAHOUE",
            type: "region",
            nbBV: 736,
            inscrits: 231687,
            persAstreinte: 553,
            votants: 82715,
            tauxParticipation: 35.62,
            bulletinsNuls: 2608,
            suffExprimes: 80107,
            bulletinsBlancs: 1501,
            candidates: { rhdp: 71009, mgc: 2062, gpPaix: 1273, code: 2824, independant: 1438 },
            departements: [
                { location: "BONON", nbBV: 94, inscrits: 29374, persAstreinte: 79, votants: 11902, tauxParticipation: 40.41, bulletinsNuls: 305, suffExprimes: 11597, bulletinsBlancs: 186, candidates: { rhdp: 10612, mgc: 230, gpPaix: 151, code: 235, independant: 183 } },
                { location: "BOUAFLE", nbBV: 220, inscrits: 71772, persAstreinte: 214, votants: 20418, tauxParticipation: 28.36, bulletinsNuls: 736, suffExprimes: 19682, bulletinsBlancs: 515, candidates: { rhdp: 16785, mgc: 637, gpPaix: 307, code: 939, independant: 499 } },
                { location: "GOHITAFLA", nbBV: 67, inscrits: 21930, persAstreinte: 23, votants: 2200, tauxParticipation: 10.02, bulletinsNuls: 156, suffExprimes: 2044, bulletinsBlancs: 87, candidates: { rhdp: 1443, mgc: 200, gpPaix: 49, code: 167, independant: 98 } },
                { location: "SINFRA", nbBV: 222, inscrits: 67917, persAstreinte: 150, votants: 31372, tauxParticipation: 46.09, bulletinsNuls: 909, suffExprimes: 30463, bulletinsBlancs: 483, candidates: { rhdp: 27762, mgc: 556, gpPaix: 607, code: 703, independant: 352 } },
                { location: "ZUENOULA", nbBV: 133, inscrits: 40694, persAstreinte: 87, votants: 16823, tauxParticipation: 41.25, bulletinsNuls: 502, suffExprimes: 16321, bulletinsBlancs: 230, candidates: { rhdp: 14407, mgc: 439, gpPaix: 159, code: 780, independant: 306 } }
            ]
        },
        {
            location: "MORONOU",
            type: "region",
            nbBV: 398,
            inscrits: 137763,
            persAstreinte: 221,
            votants: 54746,
            tauxParticipation: 39.68,
            bulletinsNuls: 2932,
            suffExprimes: 51814,
            bulletinsBlancs: 1317,
            candidates: { rhdp: 38675, mgc: 2891, gpPaix: 1915, code: 2134, independant: 4882 },
            departements: [
                { location: "ARRAH", nbBV: 95, inscrits: 34560, persAstreinte: 95, votants: 18499, tauxParticipation: 53.38, bulletinsNuls: 906, suffExprimes: 17593, bulletinsBlancs: 442, candidates: { rhdp: 13807, mgc: 939, gpPaix: 642, code: 661, independant: 1102 } },
                { location: "BONGOUANOU", nbBV: 155, inscrits: 56693, persAstreinte: 84, votants: 17424, tauxParticipation: 30.69, bulletinsNuls: 1074, suffExprimes: 16350, bulletinsBlancs: 403, candidates: { rhdp: 11414, mgc: 1210, gpPaix: 802, code: 823, independant: 1698 } },
                { location: "M'BATTO", nbBV: 148, inscrits: 46510, persAstreinte: 42, votants: 18823, tauxParticipation: 40.43, bulletinsNuls: 952, suffExprimes: 17871, bulletinsBlancs: 472, candidates: { rhdp: 13454, mgc: 742, gpPaix: 471, code: 650, independant: 2082 } }
            ]
        },
        {
            location: "NAWA",
            type: "region",
            nbBV: 741,
            inscrits: 203261,
            persAstreinte: 646,
            votants: 56780,
            tauxParticipation: 27.85,
            bulletinsNuls: 2697,
            suffExprimes: 54083,
            bulletinsBlancs: 1634,
            candidates: { rhdp: 45806, mgc: 1604, gpPaix: 1235, code: 2490, independant: 1314 },
            departements: [
                { location: "BUYO", nbBV: 115, inscrits: 27587, persAstreinte: 135, votants: 6900, tauxParticipation: 24.89, bulletinsNuls: 361, suffExprimes: 6539, bulletinsBlancs: 298, candidates: { rhdp: 5220, mgc: 209, gpPaix: 201, code: 414, independant: 197 } },
                { location: "GUEYO", nbBV: 72, inscrits: 19222, persAstreinte: 87, votants: 5559, tauxParticipation: 28.79, bulletinsNuls: 255, suffExprimes: 5304, bulletinsBlancs: 163, candidates: { rhdp: 4475, mgc: 158, gpPaix: 166, code: 213, independant: 129 } },
                { location: "MEAGUI", nbBV: 211, inscrits: 56534, persAstreinte: 155, votants: 14200, tauxParticipation: 25.05, bulletinsNuls: 945, suffExprimes: 13255, bulletinsBlancs: 510, candidates: { rhdp: 10522, mgc: 475, gpPaix: 422, code: 870, independant: 456 } },
                { location: "SOUBRE", nbBV: 343, inscrits: 99918, persAstreinte: 269, votants: 30121, tauxParticipation: 30.06, bulletinsNuls: 1136, suffExprimes: 28985, bulletinsBlancs: 663, candidates: { rhdp: 25589, mgc: 762, gpPaix: 446, code: 993, independant: 532 } }
            ]
        },
        {
            location: "N'ZI",
            type: "region",
            nbBV: 352,
            inscrits: 107760,
            persAstreinte: 153,
            votants: 32041,
            tauxParticipation: 29.69,
            bulletinsNuls: 2217,
            suffExprimes: 29824,
            bulletinsBlancs: 1302,
            candidates: { rhdp: 21100, mgc: 1463, gpPaix: 2185, code: 1986, independant: 1788 },
            departements: [
                { location: "BOCANDA", nbBV: 157, inscrits: 44986, persAstreinte: 45, votants: 13106, tauxParticipation: 29.10, bulletinsNuls: 823, suffExprimes: 12283, bulletinsBlancs: 656, candidates: { rhdp: 8110, mgc: 737, gpPaix: 1153, code: 853, independant: 774 } },
                { location: "DIMBOKRO", nbBV: 149, inscrits: 49439, persAstreinte: 83, votants: 15042, tauxParticipation: 30.37, bulletinsNuls: 1217, suffExprimes: 13825, bulletinsBlancs: 519, candidates: { rhdp: 10362, mgc: 550, gpPaix: 631, code: 937, independant: 826 } },
                { location: "KOUASSI-KOUASSIKRO", nbBV: 46, inscrits: 13333, persAstreinte: 25, votants: 3893, tauxParticipation: 29.14, bulletinsNuls: 177, suffExprimes: 3716, bulletinsBlancs: 127, candidates: { rhdp: 2628, mgc: 176, gpPaix: 401, code: 196, independant: 188 } }
            ]
        },
        {
            location: "SAN-PEDRO",
            type: "region",
            nbBV: 676,
            inscrits: 210417,
            persAstreinte: 813,
            votants: 96241,
            tauxParticipation: 45.56,
            bulletinsNuls: 5111,
            suffExprimes: 91130,
            bulletinsBlancs: 2458,
            candidates: { rhdp: 70611, mgc: 3208, gpPaix: 1674, code: 10345, independant: 2834 },
            departements: [
                { location: "SAN-PEDRO", nbBV: 512, inscrits: 166808, persAstreinte: 596, votants: 76475, tauxParticipation: 45.68, bulletinsNuls: 4052, suffExprimes: 72423, bulletinsBlancs: 1782, candidates: { rhdp: 57480, mgc: 2460, gpPaix: 1409, code: 7079, independant: 2213 } },
                { location: "TABOU", nbBV: 164, inscrits: 43609, persAstreinte: 217, votants: 19766, tauxParticipation: 45.10, bulletinsNuls: 1059, suffExprimes: 18707, bulletinsBlancs: 676, candidates: { rhdp: 13131, mgc: 748, gpPaix: 265, code: 3266, independant: 621 } }
            ]
        },
        {
            location: "SUD-COMOE",
            type: "region",
            nbBV: 768,
            inscrits: 278880,
            persAstreinte: 327,
            votants: 125587,
            tauxParticipation: 44.98,
            bulletinsNuls: 3952,
            suffExprimes: 121635,
            bulletinsBlancs: 2114,
            candidates: { rhdp: 105261, mgc: 5984, gpPaix: 1069, code: 4989, independant: 2218 },
            departements: [
                { location: "ABOISSO", nbBV: 305, inscrits: 109204, persAstreinte: 200, votants: 49549, tauxParticipation: 45.29, bulletinsNuls: 1485, suffExprimes: 48064, bulletinsBlancs: 689, candidates: { rhdp: 41438, mgc: 1901, gpPaix: 430, code: 2761, independant: 845 } },
                { location: "ADIAKE", nbBV: 94, inscrits: 32509, persAstreinte: 61, votants: 23054, tauxParticipation: 70.78, bulletinsNuls: 681, suffExprimes: 22373, bulletinsBlancs: 460, candidates: { rhdp: 19941, mgc: 898, gpPaix: 179, code: 579, independant: 316 } },
                { location: "GRAND-BASSAM", nbBV: 307, inscrits: 119756, persAstreinte: 40, votants: 44378, tauxParticipation: 37.04, bulletinsNuls: 1396, suffExprimes: 42982, bulletinsBlancs: 802, candidates: { rhdp: 36683, mgc: 2817, gpPaix: 351, code: 1441, independant: 888 } },
                { location: "TIAPOUM", nbBV: 62, inscrits: 17411, persAstreinte: 26, votants: 8606, tauxParticipation: 49.35, bulletinsNuls: 390, suffExprimes: 8216, bulletinsBlancs: 163, candidates: { rhdp: 7199, mgc: 368, gpPaix: 109, code: 208, independant: 169 } }
            ]
        },
        {
            location: "TCHOLOGO",
            type: "region",
            nbBV: 502,
            inscrits: 160890,
            persAstreinte: 638,
            votants: 152100,
            tauxParticipation: 94.16,
            bulletinsNuls: 964,
            suffExprimes: 151136,
            bulletinsBlancs: 782,
            candidates: { rhdp: 148849, mgc: 262, gpPaix: 121, code: 691, independant: 431 },
            departements: [
                { location: "FERKESSEDOUGOU", nbBV: 190, inscrits: 64846, persAstreinte: 302, votants: 61646, tauxParticipation: 94.62, bulletinsNuls: 434, suffExprimes: 61212, bulletinsBlancs: 307, candidates: { rhdp: 60069, mgc: 147, gpPaix: 63, code: 435, independant: 191 } },
                { location: "KONG", nbBV: 103, inscrits: 25546, persAstreinte: 90, votants: 24842, tauxParticipation: 96.90, bulletinsNuls: 80, suffExprimes: 24762, bulletinsBlancs: 27, candidates: { rhdp: 24682, mgc: 9, gpPaix: 7, code: 17, independant: 20 } },
                { location: "OUANGOLODOUGOU", nbBV: 209, inscrits: 70498, persAstreinte: 246, votants: 65612, tauxParticipation: 92.75, bulletinsNuls: 450, suffExprimes: 65162, bulletinsBlancs: 448, candidates: { rhdp: 64098, mgc: 106, gpPaix: 51, code: 239, independant: 220 } }
            ]
        },
        {
            location: "WORODOUGOU",
            type: "region",
            nbBV: 344,
            inscrits: 103236,
            persAstreinte: 418,
            votants: 97438,
            tauxParticipation: 94.00,
            bulletinsNuls: 536,
            suffExprimes: 96902,
            bulletinsBlancs: 371,
            candidates: { rhdp: 95806, mgc: 150, gpPaix: 81, code: 374, independant: 120 },
            departements: [
                { location: "KANI", nbBV: 107, inscrits: 33523, persAstreinte: 133, votants: 33346, tauxParticipation: 99.08, bulletinsNuls: 48, suffExprimes: 33298, bulletinsBlancs: 30, candidates: { rhdp: 33192, mgc: 21, gpPaix: 15, code: 30, independant: 10 } },
                { location: "SEGUELA", nbBV: 237, inscrits: 69713, persAstreinte: 285, votants: 64092, tauxParticipation: 91.56, bulletinsNuls: 488, suffExprimes: 63604, bulletinsBlancs: 341, candidates: { rhdp: 62614, mgc: 129, gpPaix: 66, code: 344, independant: 110 } }
            ]
        },
        {
            location: "D.A. YAMOUSSOUKRO",
            type: "region",
            nbBV: 411,
            inscrits: 159484,
            persAstreinte: 498,
            votants: 68336,
            tauxParticipation: 42.72,
            bulletinsNuls: 1239,
            suffExprimes: 67097,
            bulletinsBlancs: 790,
            candidates: { rhdp: 61193, mgc: 1214, gpPaix: 991, code: 1656, independant: 1253 },
            departements: [
                { location: "AI TIEBISSOU", nbBV: 61, inscrits: 22039, persAstreinte: 17, votants: 14270, tauxParticipation: 64.79, bulletinsNuls: 193, suffExprimes: 14077, bulletinsBlancs: 192, candidates: { rhdp: 12297, mgc: 364, gpPaix: 512, code: 586, independant: 318 } },
                { location: "YAMOUSSOUKRO", nbBV: 350, inscrits: 137445, persAstreinte: 481, votants: 54066, tauxParticipation: 39.32, bulletinsNuls: 1046, suffExprimes: 53020, bulletinsBlancs: 598, candidates: { rhdp: 48896, mgc: 850, gpPaix: 479, code: 1070, independant: 935 } }
            ]
        },
        {
            location: "FOLON",
            type: "region",
            nbBV: 158,
            inscrits: 49678,
            persAstreinte: 84,
            votants: 49114,
            tauxParticipation: 98.70,
            bulletinsNuls: 109,
            suffExprimes: 49005,
            bulletinsBlancs: 74,
            candidates: { rhdp: 48860, mgc: 13, gpPaix: 6, code: 24, independant: 28 },
            departements: [
                { location: "KANIASSO", nbBV: 90, inscrits: 28434, persAstreinte: 50, votants: 28065, tauxParticipation: 98.53, bulletinsNuls: 80, suffExprimes: 27985, bulletinsBlancs: 48, candidates: { rhdp: 27898, mgc: 8, gpPaix: 2, code: 14, independant: 15 } },
                { location: "MINIGNAN", nbBV: 68, inscrits: 21244, persAstreinte: 34, votants: 21049, tauxParticipation: 99.02, bulletinsNuls: 29, suffExprimes: 21020, bulletinsBlancs: 26, candidates: { rhdp: 20962, mgc: 5, gpPaix: 4, code: 10, independant: 13 } }
            ]
        },
        {
            location: "GBOKLÉ",
            type: "region",
            nbBV: 262,
            inscrits: 76869,
            persAstreinte: 240,
            votants: 47140,
            tauxParticipation: 66.29,
            bulletinsNuls: 1050,
            suffExprimes: 46090,
            bulletinsBlancs: 772,
            candidates: { rhdp: 40782, mgc: 1355, gpPaix: 813, code: 1449, independant: 919 },
            departements: [
                { location: "FRESCO", nbBV: 82, inscrits: 19869, persAstreinte: 67, votants: 11979, tauxParticipation: 59.59, bulletinsNuls: 333, suffExprimes: 11646, bulletinsBlancs: 186, candidates: { rhdp: 10345, mgc: 263, gpPaix: 169, code: 337, independant: 215 } },
                { location: "SASSANDRA", nbBV: 180, inscrits: 57000, persAstreinte: 173, votants: 35261, tauxParticipation: 58.91, bulletinsNuls: 717, suffExprimes: 34544, bulletinsBlancs: 586, candidates: { rhdp: 30437, mgc: 1092, gpPaix: 645, code: 1112, independant: 704 } }
            ]
        },
        {
            location: "GOH",
            type: "region",
            nbBV: 865,
            inscrits: 271391,
            persAstreinte: 305,
            votants: 60935,
            tauxParticipation: 22.43,
            bulletinsNuls: 1929,
            suffExprimes: 59006,
            bulletinsBlancs: 1646,
            candidates: { rhdp: 52837, mgc: 1291, gpPaix: 688, code: 1625, independant: 919 },
            departements: [
                { location: "GAGNOA", nbBV: 599, inscrits: 192825, persAstreinte: 165, votants: 39918, tauxParticipation: 20.68, bulletinsNuls: 979, suffExprimes: 38939, bulletinsBlancs: 804, candidates: { rhdp: 35853, mgc: 718, gpPaix: 312, code: 813, independant: 439 } },
                { location: "OUME", nbBV: 266, inscrits: 78566, persAstreinte: 140, votants: 21017, tauxParticipation: 26.76, bulletinsNuls: 950, suffExprimes: 20067, bulletinsBlancs: 842, candidates: { rhdp: 16984, mgc: 573, gpPaix: 376, code: 812, independant: 480 } }
            ]
        },
        {
            location: "GONTOUGO",
            type: "region",
            nbBV: 864,
            inscrits: 259541,
            persAstreinte: 488,
            votants: 147635,
            tauxParticipation: 56.76,
            bulletinsNuls: 4658,
            suffExprimes: 142977,
            bulletinsBlancs: 2857,
            candidates: { rhdp: 122227, mgc: 5286, gpPaix: 2204, code: 5922, independant: 5361 },
            departements: [
                { location: "BONDOUKOU", nbBV: 392, inscrits: 122480, persAstreinte: 283, votants: 71230, tauxParticipation: 58.02, bulletinsNuls: 1988, suffExprimes: 69242, bulletinsBlancs: 1387, candidates: { rhdp: 59820, mgc: 2242, gpPaix: 1040, code: 1238, independant: 2515 } },
                { location: "KOUN-FAO", nbBV: 166, inscrits: 47678, persAstreinte: 77, votants: 19729, tauxParticipation: 41.31, bulletinsNuls: 1160, suffExprimes: 18569, bulletinsBlancs: 554, candidates: { rhdp: 14143, mgc: 1224, gpPaix: 587, code: 1209, independant: 852 } },
                { location: "SANDEGUE", nbBV: 63, inscrits: 19968, persAstreinte: 4, votants: 15138, tauxParticipation: 75.80, bulletinsNuls: 113, suffExprimes: 15025, bulletinsBlancs: 154, candidates: { rhdp: 14446, mgc: 98, gpPaix: 32, code: 179, independant: 117 } },
                { location: "TANDA", nbBV: 141, inscrits: 39059, persAstreinte: 55, votants: 25511, tauxParticipation: 65.22, bulletinsNuls: 833, suffExprimes: 24678, bulletinsBlancs: 401, candidates: { rhdp: 21132, mgc: 957, gpPaix: 291, code: 689, independant: 1208 } },
                { location: "TRANSUA", nbBV: 102, inscrits: 30356, persAstreinte: 69, votants: 16027, tauxParticipation: 52.68, bulletinsNuls: 564, suffExprimes: 15463, bulletinsBlancs: 361, candidates: { rhdp: 12687, mgc: 765, gpPaix: 254, code: 707, independant: 689 } }
            ]
        },
        {
            location: "GRANDS-PONTS",
            type: "region",
            nbBV: 405,
            inscrits: 131155,
            persAstreinte: 358,
            votants: 44164,
            tauxParticipation: 33.58,
            bulletinsNuls: 1556,
            suffExprimes: 42608,
            bulletinsBlancs: 935,
            candidates: { rhdp: 34881, mgc: 2139, gpPaix: 752, code: 2458, independant: 1443 },
            departements: [
                { location: "DABOU", nbBV: 175, inscrits: 63967, persAstreinte: 189, votants: 23690, tauxParticipation: 36.93, bulletinsNuls: 531, suffExprimes: 23159, bulletinsBlancs: 250, candidates: { rhdp: 19541, mgc: 1170, gpPaix: 280, code: 1175, independant: 743 } },
                { location: "GRAND-LAHOU", nbBV: 145, inscrits: 39303, persAstreinte: 94, votants: 12291, tauxParticipation: 31.20, bulletinsNuls: 501, suffExprimes: 11790, bulletinsBlancs: 403, candidates: { rhdp: 9634, mgc: 396, gpPaix: 284, code: 746, independant: 327 } },
                { location: "JACQUEVILLE", nbBV: 85, inscrits: 27885, persAstreinte: 75, votants: 9183, tauxParticipation: 29.27, bulletinsNuls: 524, suffExprimes: 7659, bulletinsBlancs: 282, candidates: { rhdp: 5706, mgc: 573, gpPaix: 188, code: 537, independant: 373 } }
            ]
        },
        {
            location: "GUEMON",
            type: "region",
            nbBV: 617,
            inscrits: 202158,
            persAstreinte: 343,
            votants: 90592,
            tauxParticipation: 44.74,
            bulletinsNuls: 3402,
            suffExprimes: 87190,
            bulletinsBlancs: 2281,
            candidates: { rhdp: 76443, mgc: 3355, gpPaix: 1875, code: 2944, independant: 1892 },
            departements: [
                { location: "BANGOLO", nbBV: 194, inscrits: 60846, persAstreinte: 129, votants: 32698, tauxParticipation: 53.63, bulletinsNuls: 1181, suffExprimes: 31517, bulletinsBlancs: 577, candidates: { rhdp: 27396, mgc: 1237, gpPaix: 568, code: 909, independant: 651 } },
                { location: "DUEKOUE", nbBV: 254, inscrits: 88377, persAstreinte: 178, votants: 43895, tauxParticipation: 49.56, bulletinsNuls: 1412, suffExprimes: 42483, bulletinsBlancs: 1288, candidates: { rhdp: 37525, mgc: 1229, gpPaix: 821, code: 959, independant: 663 } },
                { location: "FACOBLY", nbBV: 85, inscrits: 25298, persAstreinte: 14, votants: 6866, tauxParticipation: 26.34, bulletinsNuls: 291, suffExprimes: 6575, bulletinsBlancs: 174, candidates: { rhdp: 5133, mgc: 458, gpPaix: 148, code: 262, independant: 202 } },
                { location: "KOUIBLY", nbBV: 84, inscrits: 27637, persAstreinte: 22, votants: 7340, tauxParticipation: 26.54, bulletinsNuls: 518, suffExprimes: 6822, bulletinsBlancs: 242, candidates: { rhdp: 6420, mgc: 431, gpPaix: 149, code: 363, independant: 256 } }
            ]
        },
        {
            location: "HAMBOL",
            type: "region",
            nbBV: 546,
            inscrits: 165803,
            persAstreinte: 548,
            votants: 126153,
            tauxParticipation: 75.84,
            bulletinsNuls: 1772,
            suffExprimes: 124381,
            bulletinsBlancs: 2044,
            candidates: { rhdp: 114579, mgc: 715, gpPaix: 427, code: 5448, independant: 1168 },
            departements: [
                { location: "DABAKALA", nbBV: 263, inscrits: 69412, persAstreinte: 276, votants: 63706, tauxParticipation: 77.18, bulletinsNuls: 792, suffExprimes: 53003, bulletinsBlancs: 670, candidates: { rhdp: 48627, mgc: 122, gpPaix: 89, code: 2412, independant: 474 } },
                { location: "KATIOLA", nbBV: 118, inscrits: 45033, persAstreinte: 109, votants: 28454, tauxParticipation: 63.03, bulletinsNuls: 661, suffExprimes: 27793, bulletinsBlancs: 639, candidates: { rhdp: 22899, mgc: 419, gpPaix: 193, code: 2357, independant: 487 } },
                { location: "NIAKARAMADOUGOU", nbBV: 155, inscrits: 51358, persAstreinte: 163, votants: 43531, tauxParticipation: 85.77, bulletinsNuls: 346, suffExprimes: 43585, bulletinsBlancs: 535, candidates: { rhdp: 41993, mgc: 174, gpPaix: 136, code: 579, independant: 267 } }
            ]
        },
        {
            location: "HAUT-SASSANDRA",
            type: "region",
            nbBV: 1084,
            inscrits: 344942,
            persAstreinte: 1292,
            votants: 199878,
            tauxParticipation: 57.74,
            bulletinsNuls: 3269,
            suffExprimes: 196609,
            bulletinsBlancs: 2264,
            candidates: { rhdp: 178739, mgc: 4278, gpPaix: 2182, code: 4783, independant: 3325 },
            departements: [
                { location: "DALOA", nbBV: 575, inscrits: 188762, persAstreinte: 759, votants: 101897, tauxParticipation: 53.77, bulletinsNuls: 1634, suffExprimes: 100263, bulletinsBlancs: 1164, candidates: { rhdp: 91677, mgc: 2364, gpPaix: 784, code: 2609, independant: 1695 } },
                { location: "ISSIA", nbBV: 226, inscrits: 73197, persAstreinte: 166, votants: 36247, tauxParticipation: 49.05, bulletinsNuls: 760, suffExprimes: 34487, bulletinsBlancs: 539, candidates: { rhdp: 31484, mgc: 763, gpPaix: 395, code: 795, independant: 511 } },
                { location: "VAVOUA", nbBV: 237, inscrits: 64561, persAstreinte: 259, votants: 50224, tauxParticipation: 77.48, bulletinsNuls: 625, suffExprimes: 49599, bulletinsBlancs: 522, candidates: { rhdp: 46693, mgc: 648, gpPaix: 330, code: 648, independant: 753 } },
                { location: "ZOUKOUGBEU", nbBV: 46, inscrits: 18432, persAstreinte: 18, votants: 12510, tauxParticipation: 67.80, bulletinsNuls: 229, suffExprimes: 12281, bulletinsBlancs: 39, candidates: { rhdp: 9925, mgc: 501, gpPaix: 707, code: 743, independant: 366 } }
            ]
        },
        {
            location: "IFFOU",
            type: "region",
            nbBV: 447,
            inscrits: 130755,
            persAstreinte: 224,
            votants: 38028,
            tauxParticipation: 29.03,
            bulletinsNuls: 2045,
            suffExprimes: 35983,
            bulletinsBlancs: 1455,
            candidates: { rhdp: 26042, mgc: 1545, gpPaix: 3281, code: 2260, independant: 1400 },
            departements: [
                { location: "DAOUKRO", nbBV: 154, inscrits: 49027, persAstreinte: 122, votants: 8778, tauxParticipation: 17.86, bulletinsNuls: 642, suffExprimes: 8136, bulletinsBlancs: 285, candidates: { rhdp: 5018, mgc: 334, gpPaix: 1716, code: 523, independant: 260 } },
                { location: "M'BAHIAKRO", nbBV: 118, inscrits: 31073, persAstreinte: 28, votants: 10415, tauxParticipation: 33.49, bulletinsNuls: 532, suffExprimes: 9883, bulletinsBlancs: 421, candidates: { rhdp: 7367, mgc: 569, gpPaix: 535, code: 607, independant: 384 } },
                { location: "OUELLE", nbBV: 70, inscrits: 19944, persAstreinte: 42, votants: 5200, tauxParticipation: 26.02, bulletinsNuls: 340, suffExprimes: 4860, bulletinsBlancs: 194, candidates: { rhdp: 3055, mgc: 225, gpPaix: 666, code: 472, independant: 248 } },
                { location: "PRIKRO", nbBV: 105, inscrits: 30711, persAstreinte: 32, votants: 13635, tauxParticipation: 44.35, bulletinsNuls: 531, suffExprimes: 13104, bulletinsBlancs: 555, candidates: { rhdp: 10602, mgc: 417, gpPaix: 364, code: 658, independant: 508 } }
            ]
        },
        {
            location: "INDENIE-DJUABLIN",
            type: "region",
            nbBV: 482,
            inscrits: 159981,
            persAstreinte: 335,
            votants: 90098,
            tauxParticipation: 56.20,
            bulletinsNuls: 3285,
            suffExprimes: 86813,
            bulletinsBlancs: 1449,
            candidates: { rhdp: 74078, mgc: 3277, gpPaix: 1441, code: 4152, independant: 2416 },
            departements: [
                { location: "ABENGOUROU", nbBV: 294, inscrits: 99848, persAstreinte: 194, votants: 51285, tauxParticipation: 51.26, bulletinsNuls: 1885, suffExprimes: 49400, bulletinsBlancs: 776, candidates: { rhdp: 41404, mgc: 2065, gpPaix: 874, code: 2687, independant: 1594 } },
                { location: "AGNIBILEKROU", nbBV: 141, inscrits: 46047, persAstreinte: 133, votants: 32326, tauxParticipation: 70.00, bulletinsNuls: 1117, suffExprimes: 31209, bulletinsBlancs: 540, candidates: { rhdp: 27547, mgc: 898, gpPaix: 473, code: 1092, independant: 659 } },
                { location: "BETTIE", nbBV: 47, inscrits: 14086, persAstreinte: 8, votants: 6487, tauxParticipation: 46.03, bulletinsNuls: 283, suffExprimes: 6204, bulletinsBlancs: 133, candidates: { rhdp: 5127, mgc: 314, gpPaix: 94, code: 373, independant: 163 } }
            ]
        }
    ]
};

// Informations sur les candidats
const candidatesInfo = [
    {
        id: 'rhdp',
        name: 'ALASSANE OUATTARA',
        party: 'RHDP',
        color: '#FF8C00',
        number: 1
    },
    {
        id: 'mgc',
        name: 'EHIVET SIMONE epse GBAGBO',
        party: 'MGC',
        color: '#DC143C',
        number: 2
    },
    {
        id: 'gpPaix',
        name: 'LAGOU ADJOUA HENRIETTE',
        party: 'GP-PAIX',
        color: '#32CD32',
        number: 3
    },
    {
        id: 'code',
        name: 'BILLON JEAN-LOUIS EUGENE',
        party: 'CODE',
        color: '#4169E1',
        number: 4
    },
    {
        id: 'independant',
        name: 'DON-MELLO SENIN AHOUA JACOB',
        party: 'INDÉPENDANT',
        color: '#9370DB',
        number: 5
    }
];
