---
{"dg-publish":true,"permalink":"/quantique/"}
---


[[Mnemo Physique\|Mnemo Physique]]
##### PARTICULES QUANTIQUE
- $\lambda$ de de Broglie -> $=h/p$ est OG effets quant
- Plank réduit -> $\bar{h}=h/2\pi$
- ==Eq Schröd== -> I acheté, hache2 deuxième des X2 = potentiellement (h réduit) $i \bar{h}\frac{d\Psi}{dt} + \frac{\bar{h}^2}{2m} \frac{d^2\Psi}{dx^2} = V(x,t)\Psi(x,t)$
- Densité $\mathbb{P}$ présence -> $dP(x,t)=|\Psi(x,t)|^2dx$ et $P^{+\infty}_{-\infty}=1$ 
- ==Relat° Heisenberg==-> $\Delta p \Delta x \ge \bar{h}/2$ des pédés d'X ont majoré h4 la moitié du temps (h réduit) 
- ES -> $|\Psi| \ne f(t)$ 
- ==Solut° quant== -> OPPH après hyp RS $\Psi(x,t)=\Phi(x)f(t)$ alors on divise par $\Phi f$ et on obtiens $\frac{i\bar{h}}{f}\dot{f}(t)=\frac{-\bar{h}^2}{2m\Phi} \frac{d^2\Phi}{dx^2}(x)+V(x)=E_{cste}$ (seule sol cste) : résout 2 eq diff, $f(t)=f_0e^{-iEt/\bar{h}}= e^{-i\omega t}$ on prends $f_0=1$ sans perte de généralité
- Relat° Plank -> $E=\bar{h}\omega=h\nu$ pr ES=RS
- De Broglie -> Cache ton pèt $\vec{k} \bar{h}=\vec{p}$ 
- ==Relat° disp quant== -> $\Phi(x)=Ae^{\pm kx}$ injecte ds eq diff => $E=\frac{\bar{h}^2\vec{k}^2}{2m}=\bar{h}\omega$ fourni relat° disp $\omega=\frac{\bar{h}}{2m}\vec{k}^2$ donc $v_{\phi}=\frac{\bar{h}k}{2m}$ (depends k => $\exists$ dispersion)
- Relat° Einstein -> $E_c=\frac{\vec{p}^2}{2m}=\frac{\bar{h}^2\vec{k}^2}{2m}$ ; $\vec{p}=\bar{h}\vec{k}$ 
- Paquet d'onde quant -> décris $p^+$ comme ensemble OPPM module d'onde moy $k_0$, se prop a $v_g=(\frac{d\omega}{dk})(k_0)=\frac{\bar{h}k_0}{m}$ et $l_c = \Delta x \approx 1/\Delta k$ la largeur spectrale (retrouve cas lim $\Delta x$ ou $\Delta k \rightarrow 0$)
- ==Vect densité $\mathbb{P}$== -> $\vec{j}=\frac{\bar{h}\vec{k}}{m}|\Psi(x,t)|^2$ car $\vec{j}=\frac{\vec{p}}{m} \rho$ 
- ==Continuité quant== -> $\Phi(x)$ $\mathcal{C}$ ($\bar{m}$ si V(x) $\ne \mathcal{C}$), diverge pas en norme, $\frac{d \Phi}{dx}(x)$ $\mathcal{C}$ si V(x) finie
- Coef réflexion -> $r=B_I/A_I$ 
- Marche pot -> passe en $I$ de pot nulle à $V_0$ en $II$ : OPPM $\Phi_I(x)=A_Ie^{ik_Ix}+B_Ie^{-ik_Ix}$ partie incidente/réfléchie où $k_I=\frac{\sqrt{2mE}}{\bar{h}}$ 
- Cas E>V° -> sol OPPM $\frac{-\bar{h}^2}{2m} \frac{d^2\Phi_{II}}{dx^2}(x)=(E-V_0)\Phi_{II}(x)$ => $\frac{\bar{h}^2k_{II}^2}{2m}=E-V_0$ => $k_{II}=\frac{\sqrt{2m(E-V_0)}}{\bar{h}}$ et $B_{II}=0$ car prop $e^-$ vers metal
- Transf energie -> $j_i=\frac{\bar{h}k}{2m}|A_I|^2\vec{u}_x$ , $j_r=-\frac{\bar{h}k}{2m}|B_I|^2\vec{u}_x$ et $j_t=|A_{II}|^2\frac{\bar{h}k}{m}\vec{u}_x$ 
- Solut° -> CL $\Phi_I(0)=\Phi_{II}(0)$ idem $\dot{\Phi}$ donc $A_I+B_I=A_{II}$ (1) et $ik_IA_I-ik_IB_I=ik_{II}A_{II}$ (2) => $r=B_I/A_I=\frac{k_I-k_{II}}{k_I+k_{II}}$ , $t=\frac{2k_I}{k_I+k_{II}}$  et (1)+(2)/$k_I$ => $A_{II}/A_I=\frac{2k_I}{k_I+k_{II}}$, (1)-(2)/$ik_{II}$ => $B_I/A_I=\frac{k_I-k_{II}}{k_I+k_{II}}$ alors $\Psi(x,t)=A_Ie^{-itE/\bar{h}}(e^{ik_Ix}+re^{-ik_Ix})$ x<0 et $=A_Ite^{-itE/\bar{h}}e^{ik_{II}x}$ x>0
- $\mathbb{P}$ trans/reflect° -> $R=j_r/j_i=|r|^2$ et $T=j_t/j_i=\frac{k_{II}}{k_I}|t|^2$
- Cas E<V° -> $E-V_0<0$ donc $\Phi_{II}(x)=A_{II}e^{-k_{II}x}+B_{II}e^{k_{II}x}$ or div pas en |.| => $B_{II}=0$ => $k_{II}=\frac{\sqrt{2m(V_0-E)}}{\bar{h}}=\frac{1}{\delta}$ lc d'attentuat°, donc $\Psi_{II}(x,t)=A_{II}e^{-itE/\bar{h}}e^{-x/\delta}$ onde évanescente 
- $l_c$ d'atténuat° -> minimale E=0, tends $+\infty$ $E\rightarrow V_0$ 
- ==Barrière de pot E<$V_0$== -> $V(x)=V_0$ pr $x\in[0,a]$ ($II$) sinon nulle : 
- Approx barrière épaisse -> $\delta <<a$ : $T=\frac{16E(V_0-E)}{V_0^2}e^{-2a/x}$ det $\mathbb{P}$ passage
- Ep p+ confiné -> $Ep=-\frac{e^2}{4\pi\epsilon_0d}$ >0 => ionisat°
- ==Puits pot inf 1D== -> V(x)=$+\infty$ (sauf $II$ $[0,a]$ V=0) => $\Psi=0$ sinon div : en $II$ où $\Phi(x)=Acos(k_{II}x)+Bsin(k_{II}x)$ car Ec=E>0 or $\Phi(0)=A=0$ et $\Phi(a)=0=Bsin(k_{II}a)$ => $\Phi(x)=Bsin(\frac{n\pi}{a}x)$ or normalisat° => $\int^{a}_{0}\Phi^2=B^2/2[x-\frac{a}{2n\pi}sin(2\frac{n\pi x}{a})]^a_0=B^2a/2=1$ donc $B=\pm \sqrt{2/a}$ donc$\Psi(x,t)=\pm \sqrt{2/a} e^{-itE/\bar{h}} sin(\frac{n\pi}{a}x)$
- Modes propres puits inf -> $k_n=\frac{n\pi}{a}$ et $E_n=\frac{\bar{h}^2\pi^2}{2ma^2}n^2$ fondamentale n=1 sinon excité, quantificat° E avec E1 min, En ++ si a --
- Confinement quant -> 
##### LASER
- Abs/emission $\gamma$ spont -> $E_{\gamma}=E2-E1$, $\gamma$ émis ==direct°, phase, polarisat° aléa==
- ==Abs/em stimulée== -> $\gamma$ tq $\nu=(E2-E1)/h$ induit désexcitat° et ém $\gamma$ ==identique==
- Pop nvx E -> n(Ei)=nb at/mol ds état Ei
- $\mathbb{P}$ transit° \ temps -> pr at excité $dP_{em,s}=P_{em,s}dt$ et idem em induit, pr état fond absorbe $dP_{abs}=P_{abs}dt$
- ==Coefs Einstein== -> $P_{em,s}=A_{21}$ , $P_{em,i}=B_{21}u_{\nu}$ et $P_{abs}=B_{12}u_{\nu}$ 
- ==Densité spectrale en E==-> $E_{lum}=\int^{+\infty}_0u_{\nu}d\nu$ 
- Evol pop -> sys={N at à E1 ou E2}, en dt : $dn_{E1}=n_{E1}(t+dt)-dn_{E1}(t)$ $=n_{E2}(P_{em,s}+P_{em,i})dt-n_{E1}P_{abs}dt$ donc $\dot{n_{E1}}=n_{E2}P_{em,s+i}-n_{E1}P_{abs}=-\dot{n_{E2}}$ car $n_{E1}+n_{E2}=N$ 
- ==Emission sans== $\gamma$ -> $n_{E2}(t=0)=N$ donc $P_{em,s}n_{E2} =A_{21} n_{E2}=-\dot{n_{E2}}$ => $n_{E2}(t)=Ne^{-A_{21}t}=N-n_{E1}(t)$ donc 1/$A_{21}$ est $\tau_c$ durée vie état excité
- Laser -> ém,i doit dominer => milieu amplificateur
- ==Invers° pop== -> n(E2)>n(E1) sinon faisceau sortie + faible celle d'entrée
- ==Pompage optique== -> gaz entre 2 miroirs reçoit énergie de pompage, permet inv pop donc faisceau quasi monochr parallèle = source cohérente
- ==Faisceau gaussien== -> faisceau qui s'elargi $s(r,z,t)=s_0\frac{w_0}{w(z)} e^{-(r/w(z))^2} \times e^{i(wt-kx)} \times e^{i(\frac{kr^2}{2R(z)}-\Phi(z))}$ ds l'ordre terme amp x prop x phase : $w_0$ waist faisceau, $w(z)=w_0\sqrt{1+(r/z_R)^2}$ la largeur typique du faisceau, $\Phi(z)=arctan(z/z_R)$, $z_R=\pi w_0^2/\lambda$ 
- Éclairement -> $\epsilon(M)=KI(M)$$=K<s^2(M,t)>$ $=\frac{K}{2}|s|^2$ 
- ==Évol w(z)== -> $w_0$ qd $z\rightarrow 0$ et $\approx w_0(z/z_r)$ en $+\infty$ 
- Angle ouverture -> cas $z>>z_R$, $w(z)/z=tan(\theta)\approx \theta$ donc $\theta \approx  w_0/z_R$ 

##### Chimie quantique
- Nbx Quant -> $n\in \mathbb{N}$, $l \in [\![0;n-1]\!]$, $m_l\in [\![-l;l]\!]$, $m_s\in [\![-s;s]\!]$ (pas de 1 même si s pas entier)
- Terme spectroscopique -> Sober Physicists Don't Find Giraffes Hidden In the Kitchen