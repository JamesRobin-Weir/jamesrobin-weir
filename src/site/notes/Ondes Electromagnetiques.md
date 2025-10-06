---
{"dg-publish":true,"permalink":"/ondes-electromagnetiques/"}
---


[[Mnemo Physique\|Mnemo Physique]]
##### MAGNÉTOSTAT PCSI
- LDChamps -> courbe auquel $\vec{B}$ tangent
- Bobines Helmoltz -> 2 bobines coaxiales
- Solénoïde $\infty$ -> $B=\mu_0ni$ 
- Moment mag spire -> $\vec{m}=IS\vec{n}$, $\vec{n}$ selon RdlMainDroite, $[m]=A.m^2$ 
- Laplace -> $\vec{F_L}=i\vec{dl} \wedge \vec{B}$ 
- ==Rails Laplace== -> Barre MN mobile complète circuit fixe, $F_L=i(\int_{MN} \vec{dl}) \wedge \vec{B}=i\vec{MN}.\vec{B}$ 
- Puiss $F_L$ -> $P(F_L)=iMNB_0v_x>0$ => $F_L$, $\vec{v}$ même sens => motrice (sinon rés)
- Spire SPQR (rect) rot axe $\Delta$ -> $\vec{n}$ RdlMD forme angle $\theta$ avec $\vec{B}$  ds plan orthog spire, $\vec{F}_{SP}=i\vec{SP} \wedge \vec{B}=-\vec{F}_{QR}$ or pt applicat° diff => couple forces idem autres
![markup_1000022136.jpg](/img/user/markup_1000022136.jpg)
- Momen rés SPQR centre O -> $\vec{F}_{SP}$, $\vec{F}_{QR}$ ont ==droites d'act° passant O => moment / O nulle==, $\vec{\Gamma}=\vec{M}_{O}(\vec{F}_{PQ}) + \vec{M}_{O}(\vec{F}_{RS})$=$\vec{OH} \wedge \vec{F}_{PQ}+ \vec{OK} \wedge \vec{F}_{RS}$=$\vec{OH} \wedge 2 \vec{F}_{PQ}$ or $\vec{OH}=\frac{b}{2}cos(\theta)-\ff
- $\vec{\Gamma}=\sum{\vec{M}(\vec{f})}=\vec{m} \wedge \vec{B}$ ds champ mag
- $\vec{M}(\vec{f})=\vec{OM} \wedge \vec{f}$    mf Ô mf
- Loi lenz -> $i_{induit}$ tends par $\vec{B}_{induit}$ modérer variation de $\phi (\vec{B})=L.i +M.i_{autres bobines}$ 
- Inductance mutuelle -> $[M]=H$
- Loi de Faraday: $e_{induit}=- \frac{\partial \phi (\vec{B})}{\partial t}$ 
- P=Ui=-$e_{induit}i$=$\frac{\partial \frac{1}{2} Li^{2}}{\partial t}$ donc $E_L=\frac{1}{2} Li^{2}$ 
- $I=\int \int \vec{j} \vec{dS}$ 
##### ÉLECTROSTATIQUE
- $\vec{E}=-\vec{grad}(V)$ seulement quant $\vec{rot}(\vec{E})=\vec{0}$ 
- Poisson $\Delta V=\frac{-\rho  }{ \epsilon _0 }$ 
- Laplace qd $\rho=0$ 
- $\vec{E}$ orienté vers potentiels décroissants
- V=0 n'implique pas E=0
- Potentiel électrostatique -> $\vec{A}$ 

##### FORCES ELECTROSTAT
- $\vec{F_{A \rightarrow B}}=\frac{q_aq_b}{4 \pi \epsilon _0} \frac{\vec{AB}}{AB^3}$ force de Coulomb 
-  $V(M)=\sum \frac{q_i}{4 \pi \epsilon _0 A_iM}$ 
- $\vec{E}(M)=\sum{\frac{q_i}{4 \pi \epsilon _0} \frac{\vec{A_iM}}{A_iM^3}}$ champs elec distrib
-  $\vec{E}(M)=\int\int\int{\frac{\rho(P)}{4 \pi \epsilon _0} \frac{\vec{PM}}{PM^3}}d \tau _p$ champs elec distrib
- Sphérique $d \tau _M =r^2drd \theta sin(\theta) d \phi$ 
- $\pm$ sym $\mathcal{D}_{charges}$ est $\pm$ sym $\vec{E}$, et $\pm$ sym $\mathcal{D}_{courant}$ est $\mp$ sym $\vec{B}$
- Champs tangent plan sym, orthog antisym
- Plan sym rotationnel est anti sym champ
- LDC $\vec{B}$ -> pôle nord vers sud (traj q)
- LDC $\vec{E}$ -> traj q > 0 libre (charge + vers -)
- $\vec{E}$, $\vec{B}$ tangent -> aux LdC
- $\text{Cylindrique } \vec{grad}(U)= \frac{\partial{U}}{\partial r } \vec{u_r} +\frac{ 1 }{ r } \frac{ \partial U }{ \partial \theta } \vec{u_\theta}+\frac{ \partial U }{ \partial z } \vec{u_z}$
  $div(\vec{E})=\frac{1 }{r } \frac{ \partial rE_r }{ \partial r }+\frac{ 1 }{ r } \frac{ \partial E_\theta }{ \partial \theta }+\frac{ \partial E_z }{ \partial z }$
  $\Delta(V)=\frac{1 }{r } \frac{ \partial }{ \partial r }(r\frac{ \partial V }{ \partial r })+\frac{ 1 }{ r^2 } \frac{ \partial
{ #2}
 V}{ \partial
{ #2}
 \theta }+\frac{ \partial
{ #2}
 V }{ \partial
{ #2}
 z }$ 
- Force (cons) champ -> $\vec{F_{elec}}=q \vec{E}(M)=-\vec{grad}(E_p)$ 
- $E_{pot}(M)=qV(M)$ 
- $\vec{B} \ selon \ \vec{u}_{\theta} \Rightarrow \text{turns autour } \vec{u}_{z} \Rightarrow \vec{rot} \ \text{porte par } \vec{u}_z$ 
- $$\text{Cylindrique: } \vec{rot}(\vec{A}) =\begin{pmatrix}
\frac{ 1 }{ r } \frac{ \partial A_z }{ \partial \theta } -\frac{ \partial A_\theta }{ \partial z }  \\
\frac{ \partial A_r }{ \partial z } -\frac{ \partial A_z }{ \partial r }  \\
\frac{ 1 }{ r } (\frac{ \partial rA_r }{ \partial r } - \frac{ \partial A_r }{ \partial \theta } ) \\

\end{pmatrix}$$
- $$\vec{rot}(F)=\boldsymbol \nabla \wedge \mathbf{F} = \begin{pmatrix} {\partial \mathrm{F}_z / \partial y} - {\partial \mathrm{F}_y / \partial z} \\ {\partial \mathrm{F}_x / \partial z} - {\partial \mathrm{F}_z / \partial x}\\ {\partial \mathrm{F}_y / \partial x} - {\partial \mathrm{F}_x / \partial y} \end{pmatrix}$$
- $$\Longleftrightarrow \vec{\nabla}\times \vec{F} = \vec{\nabla}\wedge {F} = \bigg(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\bigg)\vec{u_x} + \bigg(\frac{\partial F_x}{\partial z}-\frac{\partial F_z}{\partial x}\bigg)\vec{u_y}+\bigg(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\bigg)\vec{u_z}$$

##### MAXWELL
- Dimensions champs -> $[E]=V.m^{-1}$, $[B/\mu_0]=A.m^{-1}$
- Eq cons charge -> $\frac{\delta \rho}{dt}+div(\vec{j}(M,t))=0$ établi par bilan Q cylindre 1D ou div(MA) => $div(\vec{j})+\epsilon_0\frac{\delta div\vec{E}}{\delta t}=0$ puis MG
- célérité lum -> $\mu_0 \epsilon_0=1/c^2$ 
- Thm Gauss -> $\Phi(\vec{E})=Q_{int}/\epsilon_0$ demo ostro, MG
- B flux cons sur $\Gamma$-> $\Phi(\vec{B})=0$ demo ostro, M$\Phi$ puisqu'il n'existe pas de monopôle magnétique
- ==Loi Faraday== -> $\mathcal{C}_E(t)=-\dot{\Phi_B}$ demo stokes, MF, et pr circuit = $e_{induit}$ 
- L cste $\Phi_B=Li(t)$ -> car $U=L\frac{di}{dt}=\frac{d\Phi_B}{dt}$
- ==Thm Ampère== -> $\mathcal{C}_B(t)=\mu_0I+\frac{1}{c^2}\dot{\Phi_E}$ sur $S_{\Gamma}$ appuyé $\Gamma$ fermé, en electrostat $\dot{\Phi_E}=0$ 
- Eq Poisson -> $\Delta V + \frac{\rho(M)}{\epsilon_0}=0$ demo div(MG)
- ==Effet joule== -> $P_V=\vec{j}\vec{E}=\gamma \vec{E}^2=\frac{\vec{j}^2}{\gamma}$ 
- E électromag -> $u_{em}=\epsilon_0 \frac{\vec{E}^2}{2}+\frac{1}{\mu_0} \frac{\vec{B}^2}{2}$ en $J.m^{-3}$
- Poynting -> $\vec{\Pi}=\frac{1}{\mu_0} \vec{E} \wedge \vec{B}$ tel que  $d^2U_{em}=\vec{\Pi}(M,t).\vec{dS}_Mdt$, décris mvmt Eem en $W.m^{-2}$ 
- ==Bilan global Eem== -> $U_{em}=\int \int \int u_{em} d\tau$, varie SI Eem sort/entre donc $\Phi_{\Pi}=\int\int_{Sfermé} \vec{\Pi}\vec{dS}=P_{sortant}$ ou SI perte énergie volumique $P_{perdu}=\int\int\int\vec{j}.\vec{E}d\tau$ donc $\frac{dU_{em}}{dt}+P_{sortant}= \frac{dU_{em}}{dt} +\Phi_{\Pi} =-P_{perdu}$ 
- ==Bilan local Eem== -> $\frac{du_{em}}{dt} +div{\vec{\Pi}}=-\vec{j}\vec{E}$ équivaut à terme stockage + terme transfert = terme production
##### SITUATIONS ÉLECTROMAG VIDE
- 2 plaques $\infty$ charges opposé ->
##### ONDES ELECTROMAG DS MILIEUX MAT
- Vitesse phase -> Vais fas oméga/caca $v_{\phi}=\frac{\omega}{Re(k)}$ est la ==vit prop de la porteuse sous l'enveloppe==, c'est un réel !?
- Vitess grp -> Végéta=derive Oméga DK en $k_0$ (vitesse groupe) $v_g=\frac{1}{\frac{dk}{dw}(w_0)}$ est la ==vit d'un nœud d'onde==, vit déplacement d'énergie
- Millieu non dispersif -> ($v_{\phi}$ ==dépend pas de k==): $\omega$ forcément proportionnel à _k_, donc deux vitesses sont ==égales==, et constantes $v_{\phi}=v_g=cste$
- Milieu dispersif -> deux vitesses sont plus égales, dépendent de k
- $w_0$ et $k_0$ -> les pulsations et modules d'ondes moyennes du paquet d'onde, donc de la porteuse
- Différenciation -> $d(k^n)=nk^{n-1}dk$ 
##### ONDES DS PLASMAS
- ==Plasma== -> $\rho_{tot}=0 \ne -en_e =  \rho_{e}$, $\vec{j}=\vec{0}$ (absence champ) sinon $\vec{j}=\gamma \vec{E}$, dilué donc similaire GP, $e^-$ non relativistes donc $\vec{F}_{Lorentz}=-e\vec{E}$
- ==Conductivité plasma== -> cheche vitesse $\mathbb{C}$ PFD + loi d'Ohm $\underline{\vec{j_e}}=-en_e \underline{\vec{v}}=  \frac{n_ee^2}{i m_e \omega} \underline{\vec{E}}=\underline{\gamma} \underline{\vec{E}}$ puis MF $\mathbb{C}$ ds MA $\mathbb{C}$ donne relation disp, sinon rot(rot(E)) puis avec gamma
- Relat° disp plasma -> MF $\mathbb{C}$ ds MA $\mathbb{C}$ donne relation disp, sinon rot(rot(E)) puis avec gamma : $k^2=\frac{w^2-w_p^2}{c^2}=(\frac{\omega}{c})^2 - \frac{\mu_0 n_ee^2}{m_e}$ donc $w_p=c\sqrt{\frac{\mu_0n_ee^2}{m_e}}$ la pulsation plasma (pulsation de coupure)
- $\omega>\omega_p$ -> ==domaine transparent==, k réel, $v_{\phi}=\frac{wc}{\sqrt{w^2-w_p^2}}$ dépends $\omega$ donc dispersif
- $\omega<\omega_p$ -> $k=\pm \frac{i}{l_c} \in \mathbb{C} / \mathbb{R}$ ==domaine réactif==: onde evanescente $\vec{E}=\vec{E_0} e^{i\omega t}e^{\mp \frac{\vec{u}.\vec{r}}{l_c}}$ pas de propagation, attenuation sur $l_c$ (Nolan réactif (rage) car pas de transport de matière (baise pas))
- Onde évanescente -> $\vec{\Pi}$ est nulle en moyenne sur une oscillation
- Indice optique plasma -> $n(\lambda)=A+\frac{i^3}{\lambda^2}$ 
- Résonance -> analyse amplitude
##### CONDUCTEUR OHMIQUE
- Métal -> $\rho=0$, $e^-$ libres non relativistes => $\vec{F}_C=-e\vec{E}$, loi Ohm, modèle drude PFD $\vec{f}_{frott}=-\frac{m_e}{\tau}\vec{v}$ donc $\vec{v}_{lim}=-\frac{e\tau}{m_e}\vec{E}$ donc $\vec{j}=\frac{n_ee^2\tau}{m_e}\vec{E}$ donc $\gamma$ est $\mathbb{R}$ 
- Equation propagation -> rot(rot(E)) puis loi d'ohm puis passage complexes
- Relat° disp -> MF ds MA $\mathbb{C}$ : $k^2=\mu_0\epsilon_0\omega^2-i\mu_0\gamma\omega$ 
- $P_V=\frac{dP_{prod}}{dV}$ -> pour effet joule $P_{prod}=<Re(\vec{j}.\vec{E})>_{moy}=\frac{\vec{j}^2}{\gamma}$ si $\gamma$, j, E réels
##### Ondes dispersion absorption
- Poynting -> $\vec{\Pi}=\vec{E} \wedge \vec{B} / \mu_0$ evict magnets without moo's 
- Densité énergie -> $u_{em}=\frac{\epsilon_0}{2}E^2+\frac{1}{2\mu_0}B^2$ réécrit donne : 2/Epstein énergétique = eux sont carrés, (carte bancaire) carré
- OG E,B -> c||B||=||E|| : carte bleu E, utile trouver relation prop plasma démo avec Uem
- B tang π*, B orthog π
- E orthog π*, E tang π
- E tan(π)=0
- MG, Mphi, MF it's ma balls
- ==Re(k)>0== -> propagation da,ns x croissants
- ==Im(k)=0== -> milieu neutre; Im(k)>0 <=> amplification, sinon atténuation (dispertion)
- ==Milieu dispersif== -> $v_{\phi} \ne c$ alors $k=k'+ik''$ il y a étalement signal
- ==Milieu atténuateur== -> diminution amp
- $k(\Omega + \omega ) \approx k(\Omega)+\omega \frac{dk}{d\omega}(\Omega)$ pour $\Omega >> \omega$
- Paquet d'ondes: $A(\omega) \approx 0$ pour $\omega \notin [w_m -\Delta \omega/2, w_m +\Delta \omega/2]$, et s(z,t) est l'intégrale sur $\mathbb{R}$ de $A(\omega)e^{i(\omega t-k(\omega)z)}$ 
- Onde sphérique : $s(M,t)=\frac{s_0}{r} cos(\omega t + \Phi(M))$ avec $\Phi(M)=\pm \frac{2\pi}{\lambda_0}(SM)+\Phi(S)$
- OPM: $s(M,t)=s_0 cos(\omega( t \pm \frac{\vec u.\vec{OM}}{c}) - \Phi_0)$ 
- Cable coaxial: LDM+LDN donne eq d'Al $c^2=1/\gamma \lambda$ et $k^2=\omega^2 \gamma \lambda -i \gamma (g \lambda +r \gamma)+ rg$

