---
{"dg-publish":true,"permalink":"/mnemo-chimie/"}
---

Préface : les molécules sont visualisés sous format SMILES numérique
##### ==Abréviations== 
- Rdt -> Rendement
- $\varphi$ -> phase
- fonc -> fonctionnel
- grp -> groupe
- $p^+$ -> proton ou particule
- nrj -> énergie
- fav cin/$\theta$ -> favorisé thermodynamiquement ou cinétiquement
- RO -> Réacteur Ouvert
- $\bar{m}$ -> même
##### Générale :
- $x_{eq}<<c°$ -> néglige termes ds $K°$ de type $(c°-x_{eq})$~$c°$ puis vérifie hypothèse avec valeur trouvée
##### Noms et tableau:
- 2ieme ligne -> Li, Be, B, C, N, O, F, Ne = Lili Becta Bien Chez Notre Oncle Fernand-Nestor
- 3ieme ligne -> Na, Mg, Al, Si, P, S, Cl, Ar= Napoléon Mangea Allégrement Six Poulets Sans Claquer d’Argon
- Mon éléphant a des pâtes bleues -> methane, ethane, propane, butane, pentane, hexane, heptane, octane, nonane
- CIP -> Cahn, Ingold, Prelog
- VESPR -> AX5 bipyramide trig AX4 tetrahédrique, AX3 trigonal plan, AX2 lin, AX2E1/AX2E2 coudée, AX3E1 trig pyramidale (nom = nb faces)
- 400-800nm -> Very Big Geese Yeet Our Rubbish = Violet Blue Green Yellow Orange Red
- Utilisation atomique -> M(prod)/sum(M(réac))
- methanal -> H2C=O
##### Spectro IR
- C=C -> $\sigma= 1650 cm^{-1}$ (nb d'onde), $\delta$= 5-6ppm (déblindage sans unité)
- C=O -> $\sigma =1675 cm^{-1}$
- C=O et C=C conjugué -> affaibli C=O donc blinde H de $C_{fonc}$ car $e^-$ moins situés sur oxygène
- $\sigma$ diminue -> liason moins forte d'apres Hooke eg OM L vacante avec interactions AL internes qui se remplie lors liason M
##### RMN 
- ==Principe RMN== -> Aimant excite état spin $e^-$ +1/2 à -1/2 avec $B_{cree}$, puis passe en récepteur mesurant $B_{induit}$ de la désexcitation : FFT donne $\nu_i$ 
- ==Déplacement $\chi$ appareil $\nu$ cste== -> $\delta=\frac{\nu-\nu_{réf}}{\nu_{travail}}$, réf avec TMS tétraméthylsilane $Si(CH_3)_3$ ou avec $CHCl_3$ solvant 
- Déplacement $\chi$ appareil B cste -> $\delta=\frac{Be_{TMS}-Be_{H}}{Bo}$
- ==Blindé== -> "= bouclier", car noyau protégé par plus $e^-$ => $\delta$ diminue car moins d'effet
- ==Déblindé== -> "=retirer bouclier", appauvri $e^-$ => $\delta$ augemente ($H^+$ attire $e^-$ vers lui => déblindé)
- un $p^+$ (ou groupe de $p^+$ eq) -> n $p^+$ voisins => le signal correspondant présentera (n+1) pics (doublet de doublets si deux $p^+$ non eq...?) ©
- $p^+$ eq -> $\exists$ plan sym/libre rot => eq => $\bar{m}$ $\delta$ 
- grp de $p^+$ proche d’atomes électronégatifs, $\delta$  augemente = déblindés.
- Les $p^+$ liés atomes avec liaisons doubles (C=C ou C=O) -> très déblindés
- Hauteur courbe d’intégration -> proportionnelle au nombre de $p^+$ eq associés au signal
- États spin -> en nb $2I+1$, si $\ne \exists$ spin I=0, sinon
- ==Lèver la dégénérescence== -> mettre particule ds $\vec{B_0}$ (effet Zeeman) car moments mag de spin s'alignent parallèle/antipara en f° de la charge, en tournant autour de l'axe (= toupie)
- $\vec{M_0}$ -> résultante moments mag de spins $\mu$ 
- Vecteur moment mag -> $\nu_0=\frac{\omega}{2\pi}$ donne formule fonda RMN $2\pi\nu=\gamma B_0$ 
- Excès de magnétisation -> si $\exists$ plus particules w/ même spin
- ==fr travail== -> $\nu=\gamma \frac{B_0}{2\pi}$ avec $\gamma$ la cste gyromag, il faut choisir $\nu$ et $B_0$ tels qu'on se trouve à **une** fr de résonance des $p^+$ 
- Excitation réel -> on envoie une gamme de fr car $p^+$ n'ont pas les $\bar{m}$ environments, mais on pourra négliger cela en vue largeur du spectre reçu
- ==Résolution de l'appareil== -> $\nearrow$ avec B car plus grande fluctuation de l'énergie de d'etat des atomes
- Excitation résonant -> passage de diff états de spin e.g. -1/2 à 1/2 puis émission lumière
- Free induction decay -> solénoïde w/ AC ds lequel sont noyaux
- Temps relaxat° -> après excitat°, il faut attendre 5-6 fois $T_1$ pr revenir à $M_0$ 
- $T_1$ relaxat° longitudinale -> lié voisins noyaux, pr $^{13}C$ donne infos mvmt mol
- $T_2$ relax transversale -> dépends homogénéité de $B_0$ : signal de largeur $\Delta$ sur graphe, dépendant des fr, $\Delta= \frac{1}{2\pi T_2}$
- Temps relax $H^+$ -> $T_1\approx T_2 \approx 1s$
- Plaques shim -> permettent homog $B_0$ 
- Spinner -> tourne tube essaie pr corriger inhomog locales, permet voir singulet/doublet etc
- Champs écran $e^-$ -> $\exists$ format° champ diamag $B_e$ empêche résonance => + amp $B_0$ 
- Fréquence de Larmor -> réf en rot à $\omega_0$ 
- Effet de toit -> tendance pour deux groupes de pics de même hauteur a prendre la forme d'un toit en se rapprochant
- ==Sys AX==  (2 $p^+$) -> 2 doublets de pics de $\bar{m}$ hauteur et fines, lorsque $|\delta_a-\delta_b|>>J_{AX}$
- Sys AM -> 2 doublets pics plus proches, petites et de legeremen diff tailles, éloignés mtn de $J_{AM}$ 
- ==Sys AB== -> 2 doublets de hauteurs très différents selon effet toit
- ==Sys A2== -> Isochronie, mtn $\exists!$ pic (cas H eq)
- Sys AX2 -> 3 interactions spin-spin diff au niveau du $p^+_A$ 
- Si on irradie constament à $\nu_0$ de l'hydrogène => ils s'excitent/desexcitent en permanence et donc on peut ignorer leur couplage avec les autres espèces (car ils sont de synchronisés à la différence de lorsqu'on fait une irradiation instantanée)

##### Effets des grps en RMN
- ==Effet 1% $^{13}C$== -> couplent $H^+$ créent mini pics autour de la base du signal vrai
- Effet VdV ->
- Effet Deutérium D -> aucun signal RMN, alcool w/ $H_{\alpha}$ peut se deuterer en présence $D-CCl_3$ et disparaître du spectre => il faut ajouter de l'eau pr reprot
- Règle Karplus -> 
- Fluor 19 -> suit règle Karplus
- Rapport signal/bruit -> $\dfrac{A_{signal}}{A_{bruit}}$ si on coupe haute fr => $\nearrow$ mais perds proportionnalité nb noyaux/$\mathcal{A_{courbe}}$ 
![Rapport signal bruit.png](/img/user/Rapport%20signal%20bruit.png)
##### Cinétique ($\alpha A +\beta B =\gamma C$ )
- Vit vol R° -> $r=\frac{dx}{dt}=\frac1V\frac{d\xi}{dt}$ à vol cste (x avancement vol)
- Vit disp A -> $v_{disp}=-\frac{1}{\gamma}\frac{d[A]}{dt}$ 
- Temps 1/2 R° -> $[A](t_{\frac12})=\frac{[A]_0}{2}$, R° fini $5t_{\frac12}$ 
- Ordre R° -> $v(t)=k\prod [X_i]^{n_i}$ => $\sum n_i$ 
- Ordre 0/1/2 -> $v_{disp}=k$ / $k[A]$ / $k[A]^2$ (dim k varie)
- ==AECD== -> actes successifs avec $k_1>>k_2$ (énergie d'activat° important) => $v_{k2}=v_{globale}$ 
- ==AEQS== -> $\frac{d[IR]}{dt} = \sum_iv_{i,IR}\approx 0$ 
- ==Pre-equilibre rapide== -> utile pr IR peu réactifs qd $\ne$ AEQS, eq atteint entre prod/réactif lorsque $k_1,k_{-1}>>k_i \ \forall i \notin \{1,-1\}$ alors $v_{k_1}=v_{k_{-1}}$ donc ==Qr=K°== 
- Réaction par stades -> chaque IR formé est consommé dans l'étape suivante et n'est pas régénéré 
- Réaction en chaîne -> $\exists$ IR formé, consommé puis reformé: 1) amorçage : création 1ier IR 2) propagation : transfo reacts en prods et conso IR 3) terminaison : conso derniers IR
- Michaelis-Menten -> $S+E\rightleftarrows^{k_1}_{k_{-1}} SE$ et $SE \rightarrow ^{k_2} P+E$ alors pre-eq rapide: $v_1 = v_{−1}$ ⇔ $k_1[E] [S] = k_{−1}[ES]$
- Constante MM -> $K_{M}=\frac{k_{2}+k_{-1}}{k_{1}}$ 
##### Interactions:
- $E_{covalente}$ -> $100 \ kJ/mol$
- $E_{VDW}$ -> $5 \ kJ/mol$
- $E_{hydrogene}$ -> $25 \ kJ/mol$
- Puissance effets stabiliseurs -> méso donneur > inductif donneur/attracteur (comparer $\Delta \chi$, et alkyl tjrs donneur)
- Keesom -> some of deez nuts : deez = deux polaire
- Debye -> Demie : 1 polaire, 1 polarisable
- London -> apolitical : 2 apolaire
- van Der Waals c la somme des 3
- Puissance VdV -> Keesom > Debye > London et VdV=$\sum$
- ==Insaturations== -> $i=\frac{2n_C-n_I +2+n_{III}}{2}$ Ah je sature! D(eux)(carb)onne moi(ns) un 2eme ou 3eme demi verre!
##### Attaques:
- $S_N2$ -> ordre 2, 1 étape, sensible encombrement => regio, inversion Walden
- $S_N1$ -> ordre 1, 2 étapes, IR plan => mél final racémique
- $\beta -élimination$ -> grp nucleofuge sur $C_{\alpha}$ et H sur $C_{\beta}$ subit atk base, crée C=C, necessite chauffage: regioselective si $\exists$ plusieurs $C_{\alpha}$ avec $H_{\alpha}$ 
- $E_1 \ (E_2)$ -> $\beta$-elim ordre 1, 2 etapes (et inversement): $E_2$ suit Vant Hoff, et n'est possible que en position décalé anti, stéréo si $C_{\beta}$ possède 1 H, E2 suit Van't Hoff
- $E_{1,cb}$ -> ECD monomoléculaire, cb= base conjuguée (permet départ grp partant)
- $A_N$ ->
- Loi de van't Hoff -> pr étape ele, ordres partiels = nb stœchiométriques.

##### Halogenoalcanes
- ==Zaïtsev== -> lors déshydrohalogénation ($\beta$-elim, E2...), alcène maj est celui + stable selon : 1) db liason conj 2) substitution alkyles (grps electro donneurs) 3) (E) +stable (Z)
- Réactivité $A_N$ -> $R_{III}>R_{II}>R_I$ ©
- Réactivité E ->
- Compétition subs/elim -> si reactif à la fois Nu et base: $\Delta$ et $R_{III}$ fav elim
##### Chimie quantique
- indice liason -> $i_L=\frac{1}{2} (L-AL)$ : ==1/2ice L-iALson==
- Liant car liées même couleur
- Pauli -> Quanti(que) : nombres
- Klechkowski -> Check how it's (filled)
- Hund -> (Mini)mund : spin para pour énergie MINimale
- Nvx énergie atome d'Hydrogène -> $E(n)=-\dfrac{E_0}{n^2}$ 
- Symétries -> sigma autour de l'ax  e, π sinon
- nrj OM liant/antiliant -> $\Delta E_{al} > \Delta E_l$ 
- ==Loi Hooke== -> $\sigma=\frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}$ liason = ressort, nb onde diminue => liaison - forte
- Nbx Quant -> $n\in \mathbb{N}$, $l \in [\![0;n-1]\!]$, $m_l\in [\![-l;l]\!]$, $m_s\in [\![-s;s]\!]$ (pas de 1 même si s pas entier)
- Terme spectroscopique -> Sober Physicists Don't Find Giraffes Hidden In the Kitchen (s,p,d,f,g,h,i,k)
##### Orbitales frontalières :
- Approx Fukui -> HO énergie+ haute reagit BV énergie+ basse sous CC
- Recouvrement axial > latéral
- 
##### OXYDORÉDUCTION:
- Règle $\gamma$ -> Meilleur ox réagit avec meilleur red
- Order of redox -> always Ox Red (couples, échelle avec flèche Ox | Red, Nernst Ox/Red $K°=10^{(\frac{n}{0.059}(E°_{ox}-E°_{red}))}$ , Ox augemente haut pot, sur graphique sens horaire augemente 
- $E°_1>E°_2$ -> plus $\Delta E°$ grand plus $K°$ grand: écart $>0.24V$ pour n=1 on considère totale (domaines prédominance disjoint)
- $E°_1<E°_2$ -> inverse, écart grand => quasi nulle
- Échelle pot. nombre d'oxydation -> alcanes < OH, C=C, RX < carbonyles, diols < acide carbox
- Ampholyte redox -> participe 2 couples
- Dismutation -> (Deez = deux du meme) réaction ampho sur lui même VS médiamutation réaction inverse
- ==Enthalpie libre electronique== -> Dans sens RÉDUCTION $\Delta _{\frac12}G=-nFE_{ox/red}$ or $\Delta_rG=-RTln(Q_r)$ donc $E°=\frac{RT}{nF}ln(K°)$ 
- Nernst réel -> $E = E^0 + \frac{RT}{nF}  ln(10)$$log\frac{a^y_{ox}}{a^x_{red}}$ 
- Nernst opérationel -> $E = E^0 + \frac{0.059}{n} log\frac{[ox]^x}{[red]^y}$ 
- ESH -> $H^+/H_2$, $[H^+]=1 \ mol.L^{-1}$, 1 bar 
- Relation charge-intensité -> $Q=I\Delta t$
##### RÉDUCTEURS:
- $S_4O_6^{2-}/S_2O_3^-$ -> (red) ion tétrathionate/ thiosulfatethiosulfate
##### OXYDANTS:
- $Cr_2O_7^{2-}$/$Cr^{3+}$ -> (ox) ion dichromate/chrome
- $MnO_4^-$/$Mn^{2+}$ -> (ox) ion permanganate/manganèse
- $Cl_2$/$Cl^-$ -> dichlore (ox PUISSANT)
- $ClO^-$/$Cl^-$ -> (ox) ion hypochlorite
- $H_2O_2$/$H_2O$ -> (ox) peroxyde d'hydrogène
##### Potentiels E°
- $H_2O$/$H_2$ -> 0V
- $O_2$/$H_2O$ -> 1,23V
##### ACIDE-BASE:
- $K_d$ -> $K_e=K_aK_b$ pour n'importe quel espèce
- Order of acide base -> always Base Acide except couple AH/A- (echelle, $K_A=\frac{[H_{3}O^+]_{eq}[A^-]_{eq}}{[AH]_{eq}}$, $K°=10^{pKa_{Base}-pKa_{Acide}}$, Henderson $pH=pKa + log(\frac{[A-]_{eq}}{[AH]_{eq}})$
- pKa faible -> $K_A$ grand => acide fort
- Base (acide) Lewis -> donneur (accepteur) électron
- Base (acide) Bronsted -> donneur (accepteur) proton
- Relation ph -> ==pH = 14 + log(OH-)=-log(H3O+)= 14-pOH==
- Solution tampon -> contient acide/base faibles conjugués => Henderson $pH \approx pK_A$ car on se situe à 1/2 équivalence (conc egaux): peut etre préparé avec base forte + acide faible ou inversement
##### RÉACTIVITÉ PKA W/ BASES DE AH/A-:
- pkA $HCl/Cl^-$ anhydre -> -7
- pkA $H_{3}O^+/H_2O$ et $ROH_{2}^+/ROH$ -> 0
- pkA Acide aminé (cas particulier) -> 2
- pkA Acide carbox $RCO_2H/RCO_2^-$ -> 4,5
- pkA $R_3NH^+/R_{3}N$ ou $NH_4^+/NH3$ -> 10
- pkA $H_{2}O/HO^-$ et $ROH/RO^-$-> 16
- pKA énolate -> 20
- pKA alcyne vraie -> 25
- pKA $NH_{3}/NaNH_2$ amidure de sodium -> 33
- pkA $R_2N^-$ inclu LDA -> 35
- pkA grignard -> 50
- pkA $R^-$ et $H^-$ inclu hydrures alcalins (NaH, KH, LiH avec couple $H_2/H^-$ ) (purement basiques !) -> 50
- pkA Buli/nBuli -> 50
```smiles
[Li+].CC(C)[N-]C(C)C
```
- 50 nBuli (=Buli)
```smiles
[Li]CCC[CH2]
```
- Pour deprotonner base doit -> avoir pkA bien plus élevé
- $CH_3Li$ base super forte (organolithien)
- Na(s) -> R° redox 
##### E-pH :
- Diag E-pH -> front verticale <=> même no, perte/gain $HO^-$ ou $H+$, front horiz <=> $\Delta$no donc $\pm e^-$, oblique les deux
- Convent° front usuel -> Solide/sol : $C_{sol}=C_t$, X/gaz : $P_{Ai}=P_t$, sol/sol : $C_1=C_2=C_t$
- Convent° front espèces -> $C_1=C_2$ et $C_1+C_2=C_t$
- Convent° atomique -> égalité conc au même nb d'atomes eg $[I_2]_f=\frac{1}{2}[I^-]_f$ jd
- Méthode E-pH -> tableau no, det front vert avec eq dissolut° + LAM
##### Solubilité
- Ks -> vers la solution
- Solubilité -> masse max soluté ds 1 L solvant
- Compétit° précipit° d'ions -> lim sat atteint qd $Q_r=K_{s,min}$ avec même $C_{ini}$ et stoech
- Milieu acide dilué évite précipitation $M(OH)_n$
##### À Reclarifier
Amine en complexation amène 3 H 
NO nitrosyle
Cyano CN
Électrodes : pH: intégrée verre
Potentiel: calomel
##### Complexation 1:
- $\mathbb{C}$ de coordinat° $ML_n$ -> édifice polyat : ==centre métallique M== (ALewis accepte $e^-$, svnt $\in$ bloc d) coordiné w/ anions/mol (BLewis, atk avec db $\ne$ liiant) = ==ligands L==, $\exists$ stéréochimie
- Métal de transit° -> sous couche d $\ne$ remplie
- L monodentate -> liason L-M assuré $\exists$! at de L ($\exists$ plusieurs sites => poly dent=sites)
- ==Noms $L^-$== -> $(H/HO)^-$ hydruro/oxo ($\exists A/B$), $(F/Cl/Br/I)^-$ fluoro..., $CN^-$ cyano, $SCN^-$ thiocyanato ($\ne A/B$), $C_2O_4^{2-}$ oxalato
- ==Nom L neutre== -> $CH_3-NH_2$ méthanamine, $NH_2-CH_2-CH_2-NH_2$ 1,2-diaminoéthane, $C_2H_4$ ethylène, $PPh_3$ triphénylphosphine
- ==L particuliers== -> $H_2O$ aqua, $NH_3$ ammine, $CO$ carbonyle, $NO$ nitrosyle
- Nom $\mathbb{C}$ -> 1) ion si chargé 2) nb L (mono, di, tri, tétra) 3) nature L ordre alpha 4) nom M (suivi -ate si anion) puis no(M) "(+IV)" 
- ==Coordinace== (nb sites coordinat°) -> nb de sites de L liés M
- no(M) -> faculté M accepter $e^-$, dissociat° db vont sur ligands + $\chi$, tjrs > 0
- NEV(M) -> $2 *nb$ liasons L-M $+\sum EV$ attention compte que $e^-$ couche d pas s,p!!!
- Eq $\mathbb{C}$ -> $[M(L_{anion})_a(L_{neutre})_b]^{charge}_{aq}$ 
- Eq $\mathbb{C}$ation -> $M_{aq}+nL_{aq}=ML_{n,aq}$ 
- ==Cste format°== -> $\beta_n=\frac{[ML_{n}](c^0)^n}{[M][L]^n}|_{eq}=\frac{1}{Kd}$, Beta make some complexes (breaking bad)
- pKd -> $pK_d=-log(\frac{[M]}{[ML_n]})-nlog[L]$ 
- Diag prédom -> gradué en $pL=-log[L]=\frac{pKd}{n}+\frac{1}{n}log(\frac{[M]}{[ML_n]}$ : pL>$\frac{pKd}{n}$ => $[M]>[ML_n]$ et inversement (L grd = ML grd=> pL petit)
- Diag distrib -> $\alpha_{\mathbb{C}}=$ %$\mathbb{C}$ ou M = f° pL, intersect° 2 pL=pKd/n, $\alpha_{\mathbb{C}}=\frac{[ML_n]}{[ML_n]+[M]}=\frac{1}{1+Kd/[L]^n}=1-\alpha_{M}$ 
- ==Effet chelate== -> augmentat° de la stabilité $\mathbb{C}$ avec ligands polydentates (compétit° avec monodentates) (à même indice de coord de M) (car nb entités augemente => $\Delta S >0$ => $\Delta G<0$ donc $Q_r$ diminue fav sens directe)
- EDTA -> $Y^{4-}$ 
- Règle du gamma -> s'applique sur pKd (sinon diag prédom)
- $\mathbb{C}$ complique -> A/B avec ligands A/B, redox avec métaux qui se $\mathbb{C}^{ifient}$, les précipitations, et il y a svnt compétition entre plusieurs $\mathbb{C}$ 
- Cste format° successive -> 

##### Complexation et orbitales 2:
- liason M-L -> liason de coordinat° = cov partiellement ionique
- nvx E $\mathbb{C}$ -> M -electroneg possède généralement orbitales + hautes en energie
- ==OA d== -> dxy/dyz/dxz/dx2-y2 ont quatres lobes ds plan décrit, dz2 a deux lobes et un cercle au milieu sur oz, attention axe inter nucléaire sur important
- choix site liason L -> liason avec atome sur lequel HO est + localisé : cet OM fait ==donat==° $\sigma$ ou $\pi$ (peut aussi être $\sigma$ \ $\pi$ accepteur avec OMs vacantes interagissent OA d)
- donat° -> se fait tjrs vers M, sinon parle de rétrodonat° 
- rétrodonat° -> renforce liason avec format° OM liante
- $\mathbb{C}-\pi$ -> liason M-dérivée éthylénique ou sys (les OM) $\pi$ même direct° metal (sens dz2) (on admet $E_{Md}$ compris entre E OF de L) : $OM_L$ $\pi$ (HO) => donat°, $OM_L$ $\pi*$ (BV) => rétrodonat°
![M-derivee_ethylenique.png](/img/user/Excalidraw/M-derivee_ethylenique.png)
- Peut avoir C=C lié en sys pi 
- Longeur liason augmente -> moins forte avec occupat° du a rétrodonat°
- $\mathbb{C}$ comme cat -> modifient densité elec ds molécule orga (donat°/retrodonat°), ou repositionnent optimalement réactifs
- ==cycle cat== -> 1) introduct° précat/précurseur (pas regénéré) qu'on transforme en cat situé sur le cycle 2) R°s avec elim prod, ajout reactifs (écrire no(M) chaque étape pr identifier R°)
- associat°/diss $\mathbb{C}$ -> classique ©
- ==ech/subs ligands== -> remplacement L
- ==addit° ox/ elim red (AO, ER)== -> XY se scinde en deux $L_nM+X-Y=X-L_M-Y$ : ==sens dir fav $\mathbb{C}$ faible no, indir ceux fort no== 
- Syn grignard AO -> RX+Mg(s)=R-Mg-X no(Mg) passe de 0 à  
- ==insert°== -> ligand A=B insaturé s'insère sur ML ==sans variat° no== : type (1,1) obtiens $L_nM-A(=B)-L$ et type (1,2) obtiens $L_nM-A-B-L$ : une étape de complexat° puis une migrat° 
- $\mathbb{C}$° (1,2) et (1,1) méca -> (1,2) 
![Complexation_12_11_mecanisme.png](/img/user/Excalidraw/Complexation_12_11_mecanisme.png)
- ==élim non reductrice = désinsert°== -> R° inverse insert° : $\alpha$-elim pr (1,1) négligeable, $\beta$-elim (1,2)
- Sur cycle -> $\exists$ AO = $\exists$ ER, flèche entre et sort <=> échange, peut avoir plusieurs R° une étape
- Polymères se fabriquent sur cycles
##### Thermodynamique:
- Ext VS Int var -> Extensive massive black hole (mass)
- ==Carré thermo borne== -> Good physicists have studied under very fine teachers
- Enthalpie -> H=U+PV
- R° endo (exo)-> $\Delta_rH>0$ (<0) => 
- Enthalpie Libre -> G=H-UV=H-TS et $\Delta_rG=\Delta_rG°+RTln(Q_r)$
- Enthalpie libre std -> $\Delta_rG°=\Delta_rH°-T\Delta_rS°$
- Petite var H -> dH=Qp=CpdT Des hâches c'est pêté (isoT,P)
- Enthalpie molaire -> $\Delta_rH=\frac{dH}{d\xi}$ J/mol
- Sens évolution spontanée -> $\Delta_rG° d\xi=-dS_cdT$
- Condit° eq -> $\Delta _rG=0$ donc $K°=exp(\frac{-\Delta_rG°}{RT})$ 
- Approx d'Ellingham -> $\Delta_rS°, \Delta_rH°$ indep T
- Vant Hoff -> $\frac{d(lnK°)}{dT}=\frac{\Delta_rH°}{RT^2}$ demo avec d' partielles G/T par rapport T puis $\xi$ swartz, permet faire integrat°
- Affinité chimique -> A=-$\Delta_rG$ donne crit evol A.d$\xi$>0 

##### R1, R2, R3
- $G_{elec}$ -> $\Delta_{1/2}G_{ox/red}=-nFE_{ox/red}$ pr 1/2 eq ds sens réduction ($F=-e\mathcal{N}_A$ charge par mol), eq globale $\alpha Ox_2+\beta Red_1=\alpha Ox_1 +\beta Red_2$ donc $\Delta_rG=\Delta_{1/2}G_{red}-\Delta_{1/2}G_{ox}$ 
- $\Delta_rG=-n_{ech}F(E_{ox2/red2}-E_{ox1/red1})<0$ 
- Condit° eq -> $\Delta_rG=0$ => $log(K°)=\frac{n_{ech}}{0.06}(E°_2-E°_1)$
- ==Pile Daniell== -> -R1|Ox1||pont salin||Ox2|R2|+, convet° $i_a>0$, $i_c<0$ et $e_{vide}=V_c-V_a=E_c-E_a$ à courant =0, alors $\Delta_rG=-n_{ech}Fe$ (idem en °) 
- Coef T pile -> $\frac{de°}{dT}=\frac{-1}{n_{ech}F}\frac{\Delta _rG°}{dT}=\frac{\Delta_rS}{n_{ech}F}$
- ==Vit globale surf.== -> $v_s=\frac{-1}{\alpha S}\frac{dn_{ox}}{dt}=\frac{1}{\beta S}\frac{dn_{red}}{dt}$=$\frac{1}{S}\frac{d\xi}{dt}=v_{red}-v_{ox}$, $i=\frac{dq}{dt}=-nF\frac{d\xi}{dt}=-nFv_S$ car $dq=dn_eF$ et $dn_e=nd\xi$ nb $e^-$ éch en dt
- Comparer $v_{r}$, $v_{ox}$ -> $v_{ox}>v_r$ => i>0 => ox
- ==Montage 3 électrodes== -> Viagra rêve ton cul, CE inerte, ref pot connue $U_{mes}=E_T-E_{ref}$ 
- Pôle + -> cathode <=> réduct°
- Qtot -> peut fournir A.h  
- Moles d'e ech -> $n_e=\frac{Q}{F}$ 
- Énergie cons électrolyse -> $E=UI\Delta t$ 
- $E_{eq}$ -> qd deux Nernst egaux, 
- Surpot seuil -> $\eta_c=E_c-E_{eq} \le 0$, f° de T, $i_{\mu}$, electrode, couple 
- Loin Eeq -> transfert mat limitant: convect° par mvmt solvant, sinon diffusion vers zones - concentrés => pallier (si espèce dissoute, pas si électrode/solvant $\in$ couple)
- ==Courant lim diffus°== -> $i_{lim,c}=-n_{ech}FSm_{ox}[ox]$ avec $m_{ox}$ une cste de diffusion
- Domaine inertie electrochim solvant -> $\exists$ 2 barrières infranchissables = murs du solvant (solvant agit redox dehors)
- i-E : pH ++ -> décalage gauche courbes
- Vagues successives -> $i=\sum i_reac$ 
- Potentiel mixte -> $V_M$ amp max => fav cin
- Upile -> $U_{pile}^{eff}$=$E_{eq,c}-E_{eq,a}+\eta_c-\eta_a-ri$ $<e$
- Électrolyse -> on impose w/ générateur $U_{seuil}=E{eq,a}-E_{eq_c}+\eta_{a,o}+\eta_{c,o}$ 
- Rdt faradique -> $\rho=\frac{n}{n_{theo}}$ 
- Cémentat° -> ajout poudre métal pr faire précipiter impuretés
- Accumulateur electrochim -> gén/récepteur
##### Potentiels et activités chim
- Activité GP -> $a_i = \frac{p_i}{p^\circ}$
- Activité soluté ds sol idéale -> $a_i=\dfrac{c_i}{c°}$ 
- Activité espèce s/l pur -> $a_i=1$
- Activité sol réelle -> $a_i = \gamma_i \frac{c_i}{c^\circ}$
 - $\gamma_i$ -> coefficient d'activité, mesure l'écart par rapport au comportement idéal.
- Relation avec le potentiel chimique -> $\mu_i = \mu_i^\circ + RT \ln a_i$
- Pot chim -> $\mu_i=(\frac{dG}{dn_i})_{T,P}$ = $\mu_i° +RTln(a_i)+V_{m,i}(P-P°)$ dernier terme neg sauf pr osmose
- Pression osmotique-> $\Pi=P_g-P_d=\rho g h$
- Eq potentiels -> à l'eq $\mu_{phase 1}=\mu_{phase 2}$ 
##### Diag binaires:
- Thm de l'horizontal -> pr mélange **idéal** $x_l$, $x_v$ se lisent sur la courbe de rosée (pt L)  et d'ébullition (pt V) respectivement
- ==Thm moments -> chimique== $n_{tot}^lLM=MVn_{tot}^V$ (ou $m_{tot}$), nécessite $n_{tot}$
- Diag à extremum -> azéotropique ($\ne$ mél idéal, mais miscibilité tot) : si homoazéotropique lors CE : $x_2^l=x_2^v=x_z$ 0DDL )
- Distillation -> donne résidu -volatil et distillat +volatil
- Distillation fractionnée -> colonne vigreux, plein de distillations (vapeur s'enrichie en + volatil) = zig-zag down diagramme à maximum (récupère distillat pur) ou minimum (récupère résidu pur)
- Diag miscibilité nulle -> présente courbe rosée horizontale
- Miscibilité nulle (hétéroazéotropique)-> 2 $\phi$ liq pure, 1 $\phi$ gaz, H = pt commun à $T_H=min(T_1^*,T_2^*)$ à laquelle $\exists$ palier car 0DDL
- Hydrodist -> excès eau, sert pr espèces non miscibles => CE à T cste => dist simple
- ==Diag avec démixtion== -> miscibilité partielle A ds B ou B ds A slmt qd $x_A<<x_B$ et inversement (combinaison azéotrope ), diag forme arche
- Diag bin isoP -> papillon horizontal coupée en bas
- $\forall$ compo $\exists$ palier T CE -> hétéroazéotropique

##### Variance: 
- Variance -> v=PI-R, PI : T,P,$x_i$ et R (indep) : $\sum_{x_i ds \phi_i}x_i$ =1, eq $\chi$ ou $\varphi$ , K°=Qr,eq (LAM)
- Forme gen variance -> v=(n-k-r)+2-$\phi$ avec n nb composants, k nb relat°s, r paramètres imposées, phi le nb de phases
- Monovariant -> connaître 1 PI donne tt autres (idem divariant etc)
- Invariant v=0 -> coord pt triple imposées par nature
- DDL -> v'=v-C les contraintes
- Si PI $\ne$ facteur d'eq -> doit le fixer pr connaître eq, eg athermique => T $\ne$ facteur eq
- Principe de modération -> le châtelier
- Effet T sur eq -> Vant Hoff, R° endo (exo) fav T++(--) 
- Effet P sur eq -> loi dalton ds Qr (idem effet compo)
##### Contrôles
- Cinétique -> compare stabilité IR
- Thermo -> comp stabilité produits
- Orbitalaire -> R° sur HO/BV coef max
- Charges -> charges nette maximale v.a. réagissent
##### Réacteurs ouverts (RO)
- Vit vol R° -> $r=\frac1V\frac{d\xi}{dt}$ ou dV si infinitésimal
- Débit mol -> $D_n=\frac{dn}{dt}$ et $dn_A=dV[A]$ => $D_n=D_V[A]$ 
- ==RPAC== -> fermé, T et $[X]$ uniformes en RS ($D_m$ cons), $!\exists$ R° $\varphi$ liq incomp ($\rho \approx$ solvant donc $D_m=\rho D_V=\frac{D_n}{M}$ )
- Rdt RPAC -> $X=\frac{k \tau}{1+k \tau}$ (catho en croix) :  $X=\frac{D_n^e-D_n^s}{D_n^e}=\frac{[A]^e-[A]^s}{[A]^e}$ car RS or $n(t+dt)-n(t)=dn^e-dn^s-dn^r=0$ donc $D_n^edt=D_n^sdt+d\xi$ et 
- RP -> $0=d^2n(x)-d^2n(x+dx)-d^2n_r=d\xi$ <=> $D_V[A](x)dt-D_V[A](x+dx)dt=d\xi$ <=> or  vit vol $D_V\frac{d[A]}{dx}dx=-\frac{d\xi}{dt}=-rdxS$ et pr ordre 1 $r=-\frac{d[A]}{dt}$ => $[A]_s=[A]_ee^{-k\tau}$ et $X=1-e^{-k\tau}$ 
![Reacteur_piston.png](/img/user/Excalidraw/Reacteur_piston.png)
- Thermo/cin RO -> Arrhenius : T + => k + => fav cin
##### Composés bizarres:
- Zwitterion -> associé acide aminé ou il y a $NH^3$ et l'acide est deprotonné (O4)
```smiles
C1=CC=C(C=C1)CC(C(=O)[O-])[NH3+]
```
##### $A_N$ suivi de $E$
- d' d'acides -> $RC(=O)-Z|=RC(-O^-)$=$Z^+$ peuvent subir $A_N$ puis $E$ avec $Nu$
- Electrophilie $C_{fonc}$ -> augmente avec diminution $E_{BV}$ => 
- Réactivité pr $A_N$ -> chlorure d'acyle d'acyle > anhydre d'acide > RCOOH > cétone > amide
- Activation ex-situ COOH en acyle -> $SoCl_2$, $PCl_3$, $PCl_5$ agents chlorant dans pyridine sous $\Delta$ 
- Synth anhydre d'acide -> acide carbo + $P_{2}O_{5}$ en $\Delta$ (que pour les symétriques)
- Activat° COOH in situ -> COOH et $H^+$ 
- Activation COOH agents couplage -> DCC
- ==Estérification de fischer== -> RC(=O)-OH+HO-R' = R-C(=O)-OR'+$H_2O$, R° lente athermique et limitée, $\Delta$ , déplacement eq DS / excès : Pour OH($I$,$II$) cat acide active C=O puis atk de OH, prototropie puis elim eau, impossible OH($III$)
- ==Synthèse esters with acyle== -> RC(=O)Cl+R'-OH=RC(=O)OR' + HCl(g) rapide, quantitative et avec alchools $I,II,III$, mais faut pieger gaz base pyridine : $A_N$ OH sur acyle, elim puis A/B
- ==Synth esters anhydre d'acide== -> BnOH+CC(=O)OC(=O)C=CC(=O)Bn +CH_3COOH avec $A_N$ OH sur AA, elim ion carboxylate qui va ensuite capter H de alcool : reaction sensible encombrement et pas de pyridine nécessaire
- ==Transtérification== -> transfo chaine n esters et n alcools en chaine, cat milieu acide = Fischer*n avec esters
- Synthèse différents amides -> d' acide avec Z nucléofuge +$NH_3$ ; Primaire : +$Et-NH_2$ ; Secondaire : +amine tertiaire ; impossible COOH car R° A/B fav formant $NH4^+$
- Synth amides acyle/AA -> $A_N$ d'azote sur $C_{fonc}$ puis $E_1$ et base récupère $H^+$, produit HCl pr 1ier
- Acide $\alpha$-aminé -> $RC_{\alpha}C(=O)OH$ avec $NH_2$ sur $C_{\alpha}$: tous chiraux sauf si R=H
- Liason peptidique avec 2 acide $\alpha$-aminé -> OH et $NH_2$ couplent donnant C1-NH-C2 et $H_2O$
- Monomère -> morceau polymère 
##### Réactivité d'énolates (O4):
- énol (cétol) -> alcène (cétone) avec un -OH en position vinylique (sur C=C) : en équilibre avec cétone, $K°\approx 10^{-6}$ trés défav (sauf si existe noyau aromatique ou C=C conjugé sur $C_{\alpha}$ ou liasons H internes avec dicétone ou qu'il y a formation d'un noyau arom), formée sous cat acide/basique 
```smiles
CC(=C)O
```
- Ion énolate -> charge formelle sur O ou sur $C_{\alpha}$, pKa $\approx$ 20, stabilisé par méso avec carbanion, préparé quantitativement base forte pkA>30 ou catalytiquement soude/potasse, et reaction tirera l'eq en sens directe
```smiles
C(=O)[C-]([H])[H]
C(=C)[O-]
```
- Controle thermo/cin sur énolate -> thermo suit Zaitsev ou cin déprot C - encombré par base encombé type LDA
- ==R° impossible pr esters avec $HO^-$ car base donc saponification== -> $RC(=O)OMe+HO^-=RC(=O)O^-+MeOH$
- énolate est la forme déprotonné d'un énol
- Extracteur Soxhlet

##### An suivi de E (O5):
- electro$\varphi$ C <=> $E_{BV}$ diminue -> Réactivité amides < acide carbo < aldéhyde< Cl d'acyle
- effets elec Z -> Cl > anhydre d'acide (-O, -CO, -R) > acide (-OH) > Ester > amide
- Bon nucleo$\varphi$ Z -> pKa $Cl^-$ < ion carbox < ion ester < amide < cétone 
- ==Bilan réactivité== -> Cl d'acyle > anhydre d'acide > acide carbo > ester > amide
- Activat° electro$\varphi$ acide ex situ-> $SOCl_2$, $PCl_{3/5}$ ou $P_2O_5$ crée anhydre d'acide
- Activat° in situ -> protonat° O de C=O
- Agents couplage -> DCC active électro$\varphi$ C
- ==Esterificat° Fischer== -> $COOH + HOR=COOR+H_2O$  (fisherman => williamson prod eau), Dean Stark, cat acide, seulement R $I/II$, prototropie
- Synth esters Cl d'acyle -> $A_N$ alchool $I/II/III$ puis E Cl, pyridine pr H+ ($HCl_g$), rapide quant
- Synth esters w/ anhydre acide -> An puis E et ion estzr
##### Vademécum de groupes communs: 
- Toluène -> cycle 6 C conjugés 1 méthyl
```smiles
CC1=CC=CC=C1
```
- Sulfonyle -> O=(S(-R)-R)=O
```smiles
O=S(=O)(*)*
```
- Benzyl -> symbole Bn (eg Bn-OH alcool benzylique)
```smiles
[R]-C-c1-c-c-c-c-c1
```
- Cy -> cyclohexyl 
```smiles
C1CCCCC1
```
- Formaldéhyde -> l'aldéhyde le + simple
- Nitro -> $NO_2^-$ 
- Anhydre d'acide -> deux esters partageant O centrale
```smiles
CC(=O)OC(=O)C
```

##### Catalyseurs:
- Pd de Lindlar -> empoisonné va jusqu'à C=C
- Nickel de Raney -> va jusqu'à C-C
- mCPBA -> $H^+$ catalytique

##### Collent l'alcool, hydro acide rend flacide:
- (O)Ts -> sans le reste, nucléofuge l'alcool bouge (paratoluènesulfonyle)
- (O)THP -> reste baiser (tetrahydropropane)
- (O)Bn -> reste ken (Benzyle)
- ATPS -> active O sans reste
```smiles
CC1=CC=C(C=C1)S(=O)(=O)O
```
- LDA -> crabe H s'en va (base), Li+ et N-, moins nucléophile que n-bulli
```smiles
CC(C)[N-]C(C)C
```

##### Acide base/nucleophilie:
- t-BuOK -> base forte, mauvais nucleophile
- $H_2SO_4$ -> acide fort, sert à hydratation acide suivant Markovnikov avec attaque d'un hydrogène puis d'une molécule d'eau, régénération de $H^+$
```smiles 
S(=O)(=O)(O)(O)
```
- R-NH, CN-
- NH4+ acide faible
##### Touchent les groupes:
- Dibal-H H- faible, réduit ester en aldehyde
```smiles
[H-].CC(C)C[Al]CC(C)C
```
- LiAlH4, a 4 H- qui mattraquent, elle n'est pas chimio, reduit en alcoo(l), meilleur que NaBH4 (peut pas réduire esters, amides, acides carbox)
- ==Sarret== oxyde alcool (s'arrete à l') en aldehyde, $CrO_3$ ds pyridine
- ==Jones==: CrO3, Old Joe Crow ds H2SO4 oxyde audelà <=> dichromate de potassium $K_2Cr_2O_7$ en milieu acide (tt deux toxiques): oxydent alcool $I$ en acide carbox, alcool $II$ en cétone
- le MCPBA, peroxyacide commun, ==oxyde l'alcène==, epoxyde stereogene, stereospecificité aussi est là (et regiosélectivité) (peracide attaché à chlorobenzene), (généré in situ carbox + H2O2)
```smiles
C1=CC(=CC(=C1)Cl)C(=O)OO
```
- Ouverture epoxyde avec $HO^-$ ou RMgX -> SN2 atk sur C moins encombré (régio), puis hydrolyse, forme HO ou R en **anti** cat SN2 (stéréoselect) 
```smiles
C1OC1C
```
##### Transfo d'alcènes 
- ==Markovnikov== -> OH maj formé est issu carbo  plus substitué par grps donneurs d'$e^-$ (regio) (attention cas particulier existe mésomérie)
- Effet Karash -> anti-markovnikov
- ==Oxydation avec $H_2SO_4$== -> atk $H^+$ sur C de C=C le moins substitué puis atk $H_2O$ et deprotonation donne alcool
- ==Hydroboration== -> $BH_3$ ds solvant base lewis qui solvate lacunes ($Et_2O$, THF...), syn-addit° (aucun carbocat°) anti-markovnikov (se fixe sur C - encombré donc - substitué) de $BH_2^-$ sur C=C, $H^+$ l'autre, puis oxydé en milieu basique avec $H_2O_2, \ NaOH$ pr donner alcool. Attention le bore peut attaquer pls fois (tri-alkyl-borane)
- ==Hydratation d'alcènes== -> Rcc + H2O = ROH, CC avec excès d'eau, cat acide, suit Markovnikov, activation cc $H^+$ puis $A_N$ eau, + rapide si subs + grps electro donneurs, attentuation grp électro attracteur avec distance

##### Activations:
- Protonation -> OH avec ATPS, acides forts ; cétone avec 

##### Protections:
- R-OH -> chlorotrialkylsilane $Cl-SiR'_3 +R-OH = R'-O-SiR_3$ en presence base faible type pyridine.  $R \in$ {Ph, trialkyl} pr selectionner alcools peu encombrés
```smiles
[R][Si]([R])([R])[Cl]
```
- Ethers benzyliques -> BnBr+NaH+R-OH=BnOR car $S_N2$ après que NaH déprot alcool = Williamson
##### Solvants:
- Base de lewis (BdL) -> sert solubiliser lacunes
- Aprotique évite trucs ©
- diéthylether -> batman: base lewis (RMgX)
```smiles
CCOCC
```
- THF -> polaire, BdL (solvatat° RMgX), aprotique, oxacyxlopentane
```smiles
C1CCOC1
```
- pyridine -> polaire aprot, BdL
```smiles
C1=CC=NC=C1
```
- DMSO diméthylsulfoxyde -> polaire, aprot, BdL  $R_2$S=O 
##### REACTIONS:
- R° combustion -> $\alpha O_2 + \beta R= \gamma CO_2 + \delta H_2O$
- ==Umpolung== -> RX(dans Et2O)+Mg=RMgX mat  séché etuve car R A/B  H20-organomag, bain glacé, CaCl2, RX goutte a goutte eviter Wurtz, pince 3 refrig et isobare, 2 ballon, N2
- ==Wurtz== -> RMgX+RX=RR+$MgX_{2}$  
- ==Williamson== -> ROH+RX +NaOH= ROR+NaX+$H_2O$ his son is water bender
- Williamson intra -> $HO-CH_2CH_2-X$ = $X^-$ + expoxyde : ==plus rapide que inter==
- Préparation quantitative énolates w/ base forte -> NaH, LiH
- Sechage -> Sulfate de Magnésium anhydre, ajouté jusqu'à qu'on perçoit des grains de solide virevolter
- Dean Stark -> il faut que solvant orga soit moins dense que l'eau pour que ça retombe en solution avec l'appareil de Dean Stark. De plus il faut que la fraction massique en eau dans l'heteroazotrope qui se liquéfie dans le réfrigérant soit important pour justifier l'utilisation du DS. 
- Acételisation -> il faut que le solvant dissous bien les espèces, créat°/destruct° cycles, activat° cétone $H^+$ puis atk OH sur $C_{fonc}$ , régénération cat
##### Nomenclature générale
- ==Aldéhyde== (Alde-hide) -> R-H suffixe -anal (pentanal), indice position tjrs 1 (pas chiffre) (-énal signifie $\exists$ C=C aussi)
- ==Cétone== (Set-one -> R-R suffixe -one, préfixe oxo
- ortho (o), meto (m), para (p) -> pos 2,3,4 par rapport au carbone fonc ($CH_3omp$ )
```smiles
CCC1C(O)C(=O)C(O)C(CC)C1P
```
- Ester (Este-rior) -> R-OR, Méthanoate (sans O et inclu Cfonc) de butyle (avec O)
- Acide carboxylique -> acide -oïque yg 
- Éther-oxyde -> R-O-R', prefix oxa, base lewis
- https://www.chem.ucla.edu/~harding/IGOC/C/common_name.html
- $H_3O^+$ -> hydronium $\in$ oxonium $R_3O^+$
- Ni-tri-l  -> N#CH 
- Amine -> R-NH2 has less than amid -amine, présence d'amine => A/B créé $NH_3^+$ avant de pvr activer O de acide carbo etc
- Amide R-(C=O)-NH2 has more than am in
- Éther-oxyde (Ethe-ror-xyde) -> R-O-R
- Hémiacétal -> alcool + aldéhyde cat $H^+$
```smiles
[H]C([R])(O[R])[OH]
```
- Hémicétal -> Idem hémiacétal mais avec un H au lieu d'un des 2 R
```smiles
[R]C([R])(O[R])[OH]
```

- Acétal -> Diol + propanone ou 2-dimethoxy-propane et $\Delta$ 
```smiles
C1COC(C)(C)O1
```
- Anhydride d'acide ->
 ```smiles
CC(=O)OC(=O)C
```
- Cas particulier cétone -> pentan-3-one mais 2-méthylpent-3-one

##### Nomenclature stéréochimique
- R/S -> Rectus = dRoite, Sinister = sinistra en italien = gauche
##### Mécanismes réactionnels:
- ==Chimioselectif== -> 1 grp f° privilégié
- ==Régioselective== (Stéréosel) -> forme 1 iso const (stereoisomère) préférentiellement
- ==Stereospecifique== -> reactifs $\ne$ stereochim => prods $\ne$ stereochim: Diels Alder est stéréospécifique, les cis restent avec les cis, les trans restent avec les trans (ou cis donnent trans, trans donnent cis)
- ==Postulat Hammond==-> 2 états successifs ont E semblable <=> faible réorganisation moléculaire, donc R° exo (endo) => ET $\approx$ reac (prod) => ET précoce (tardif)
- Loi Vant Hoff pr acte ele -> ordres partielles = coefs stoech et ordre global = molécularité
- $E_{a,indirecte}>>E_{a,directe}$ -> acte ele non renversible 

##### Caracterisation chimique:
- énantiomères -> images MP (dia ne l'est pas)
- Chiral -> C* et pas de plan de symétrie <=> non superposable image miroir plan
- Activité optique (pvr rot) -> capacité tourner lum polarisée, mesuré par polarimètre de Laurent, nulle si mélange racémique
- ==Loi biot== -> $\alpha = [\alpha]_\lambda^T\ l\ C$ en degrés
- diol anti -> 2 -OH pas ds plan molécule

##### Cristallographie
- Cristal -> solide doté structure 3D unique conférant un ordre à longue distance
- Réseau -> distribution tripériodique de nœuds
- ==Nœuds== -> points d'ancrage d'un motif identique (équivalents par translation du réseau de $u.a+v.b+w.c$ avec a,b,c une base de l'espace) ; m nb nœuds => m V ; compte pr 1 milieu, 1/2 face, 1/4 arrête, 1/8 sommet
- Maille simple/primitive -> $\exists !$ nœuds aux sommets
- Paramètres maille -> a,b,c et $\alpha, \beta, \gamma$ , $V=a.b\wedge c$ 
- Critères choix maille -> 1. + sym (angles $\frac{\pi}{2}$ ou $120°$) 2. - grd 3. + régulière
- Coordonnée réduite -> $x=\frac{x_a}{a}$ avec a en Armstrung => nœuds coord entiers (ou 1/2 entiers si maille multiple)
- ==Axe/rangée réticulaire== $[u \ v \ w]$ -> droite passant par nœuds M,M' tq MM'=u.a+v.b+w.c ou u,v,w premiers entre eux (PEE) => axe principales $[1 \ 0 \ 0]$ ...
- ==Plan réticulaire== $hx+ky+lz=m$ -> eq cartésien coefs h,k,l PEE ; familles formées par valeur m ; ==faces cristaux sont plans réticulaires==
- Projection stéréographique -> 
- Variété allotropique -> diff struc cristalline
- Rayon métallique (cov) (ionique) -> $\frac{1}{2}d_{noy}$ + proches (liées cov) (anion-cation)
- Compacité -> $V_{espèces}/V_{maille}$
- Habitabilité (d'un site) -> rayon maximale espèce dedans
- Empilement compacte -> $\forall$ sphère tangent à 6 autres ds plan, et plans décalés
- Cubique centré -> chaque sommet et centre
- CFC -> cube côté a, condition contacte $4r=\sqrt{2}a$, centre chaque cube côté a/2 = site tétra tq $r_{tetra} \le (\sqrt{3/2}-1)r$, milieu arrêtes extérieurs + centre = sites octa tq $r_{octa} \le (\sqrt{2}-1)r$
- Crystal macrovalent -> espèces liés liasons cov
- Graphite -> plans macrovalents liés VdV
- Aire hexagone -> 6x Aire triangle $=\dfrac{3\sqrt{3}a^2}{2}$ 

##### HP orga:
- Coupure oxydante -> $OsO_4-NaIO_4$ + réduction (Zn, Me_2S) brise liason C=C sur C plus substitué en ajoutant O sur les deux nvlles molécules