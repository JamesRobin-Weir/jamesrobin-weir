---
{"dg-publish":true,"permalink":"/mecanique-des-fluides/"}
---


[[Mnemo Physique\|Mnemo Physique]]
##### MECA FLU CINÉMATIQUE
- Eulérienne VS Lagrangienne -> champs vect + pot vitesses VS suivre particules sur leur trajectoire
- Dérivée parti -> $\frac{D\vec{v}}{Dt}=\dot{\vec{v}}+(\vec{v}\vec{grad})\vec{v}$ 
- ==Écoulement parfait== -> phénomènes diffusifs négligeables (thermique, viscosité...) => $\nu \rightarrow 0$=> couche limite $\delta \rightarrow 0$ et fluide évolue façon rév or diff $\theta^{ique}$ nég => adia donc ==isentropique== (invariance prop phys en f° de la direction)
- ==Écoul irrotationnel== -> DEPENDS DU REF, $\vec{rot}(\vec{v})=\vec{0}$ donc $(\vec{v}\vec{grad})v=\vec{grad}(v^2/2)$, sinon $\vec{\Omega}=1/2 \vec{rot}(\vec{v})$ tourdemiron (vecteur tourbillon)
- ==Debit m== -> $m=D_m dt$, $D_m=\int\int \vec{j}_m\vec{dS}$ avec $\vec{j}_m=\mu\vec{v}$
- ==Ecoul stat== -> $div{\vec{j}_m}=0$ donc flux cons donc  $D_m$ conservé (loi des mailles $D_{me}=D_{ms1}+D_{ms2}$)
- ==Débit vol== -> $D_V(t)=\int\int\vec{v}\vec{dS}$ 
- ==Écoul incomp== -> V particule fluide cste lors écoul $div(\vec{v})=0$ (flux conservatif) => $D_V$ cons donc $v_1S_1=v_2S_2$ ds conduite
- Tube champ -> surface fictive $\vec{v}$ tangent surface tt pt
- ==Potentiel vitesses pr écoul irot== -> $\vec{v}=-\vec{grad}(\Phi)$, $\Phi(M,t)$ définie à f(t) près, $\vec{v}$ orthog aux surfaces isopot
##### MÉCA FLU FORCES
- Forces volumiques -> $\vec{f_{p}}=\mu(M,t) \vec{g}$ , $\vec{f_{ie}}=-\mu \vec{a_{e}}$ , $\vec{f_{ic}}=-\mu \vec{a_{c}}$
- Pression -> $\vec{f_p}=-\vec{grad}(P(M,t))$ et force pression localement = P(M,t) $\vec{dS}/dS$
- ==Viscosité de cisaillement== -> vit dirigée axe mais dépends autre variable : $\vec{F}_{tan}=\eta \frac{dv_x}{dy} \vec{u_x}$ dans le cas $\vec{v}=v_x(y)\vec{u_x}$, localement sur particule de fluide $\vec{f}_{visc}=\eta \Delta \vec{v}(M,t)$ (dérivée seconde)
- Viscosité dynamique -> $\eta$ en Poiseuille (Pa.s)
- Nombre de Reynolds -> $Re=\frac{UL\rho}{\mu}=\frac{UL}{\nu}$ avec $\nu=\frac{\mu}{\rho}$ :  ($ren=ulu$ "Kylo Ren at Uluru") 
- Re permet de comparer -> NS le terme visqueux $\eta \Delta \vec{v}$ et convectif $\mu(\vec{v}.\vec{grad})\vec{v}$ car $\frac{||\mu(\vec{v}.\vec{grad})\vec{v}||}{||\eta \Delta \vec{v}||} \approx\frac{\mu U^2/L}{\eta U/L^2}=\frac{\mu UL}{\eta}=Re$ 
- $Re<<1$ peu => visqueux (domine), $Re>>1$ significatif => convectif (domine)
- Sphere solide ds un fluide -> $Re<1$ : ==Loi de Stokes== $\vec{F}_{trainee}=-6\pi\eta R \vec{v}$ ; $Re \in [10^3; 2*10^5]$ $\vec{F}_{trainee}=-\mu \frac{1}{2} C_x\pi R^2 ||\vec{v}|| \vec{v}$ 
- ==Ftrainee== -> prop v bas Re, $v^2$ haut Re : forme générale $-1/2C_x(Re)\mu \pi (D/2)^2||\vec{v}||\vec{v}$ (deux cas $C_x=4/Re=4\eta/(||\vec{v}||D\mu)$ ou $C_x=cste$)
- Coefficient de traînée -> $C_x=\frac{F_x}{(1/2)\rho v^2 S}$ 
##### MÉCA FLU DYNAMIQUE
- ==Eq de Navier Stokes== -> $\mu (\frac{d\vec{v}}{dt}+(\vec{v}.\vec{grad})\vec{v})$=$-\vec{grad}(P)+\eta\Delta \vec{v}+\vec{f_{vol}}$ 
- Statique fluide -> NS fluide repos
- Eq d'Euler -> néglige la viscosité ds NS
- ==Épaisseur couche limite== -> zone ou effets visquex dominent, $\delta=\frac{L}{\sqrt{Re}}=\sqrt{\frac{\mu}{f}}$ avec f freq caract, $\exists$ deux cas couche limite infinie ou négligeable
- Plaque en translat° -> L=v.t, $Re=v^2t\mu/\eta$, $\delta=\sqrt{\frac{\eta t}{\mu}}$ augement avec temps
- ==Condit° lim paroi== -> $\vec{v}(P,t)\vec{n}_p=\vec{v}_{paroi}(t)\vec{n}_p$ paroi imperméable, $\vec{v}(P,t)\vec{t}_p=\vec{v}_{paroi}\vec{t}_p$ couche lim (si paroi statique CL v=0 )
- Interface flu flu -> Continuité vit, P, contraintes tangentielles (des forces tan de chaque côté de l'interface eg $\eta \Delta v$)
- Bernoulli pr fluide SPH soumis $f_{vol}=\mu_0 g$ -> $\frac{v(A)^2}{2}+\frac{P(A)}{\mu_0}+gz_A$ = $\frac{v(B)^2}{2}+\frac{P(B)}{\mu_0}+gz_B$ 
- Bernoulli SIPH -> (Stat irrot parfait homogène) (un SIPHon font font les petites marionnettes)
- ==Loi Poiseuille== -> debit vol prop à $\Delta P$ : $D_V=\int^R_{r=0}\int^{2\pi}_{\theta=0}v(r)rd\theta dr$ = $\frac{\pi R^4}{8\eta L}(P_e-P_S)$ 
##### SITUATIONS MÉCA FLU
- ==Fluide rot== -> ref tournant (R) vit $\omega$, $d\tau_M(\vec{f}_g+ \vec{f}_p+\vec{f}_{ie}+\vec{f}_{ic})=\vec{0}$ or $\vec{grad}(P)=\frac{dP}{dr}\vec{u}_r+\frac{1}{r}\frac{dP}{d\theta}+\frac{dP}{dz}$ en cyl, coriolis nulle, alors proj $\frac{dP}{dr}=\mu\omega^2r$ et $-\frac{1}{r} \frac{dP}{d\theta}=0$ => $P(r,z)= \mu \frac{(\omega r)^2}{2}+g(z)$ (P dépends r,z) donc $P(M)=-\mu g z + h(r)$ et $P(M)= \mu \frac{(\omega r)^2}{2} -\mu g z + cste$ et à la surface continuité P => $z=\frac{w^2}{2g}r^2 +cste'$ (courbé)
- ==Ecoule Poiseuille== -> RS, $\vec{v}(M)=v(r)\vec{u}_z$ par sym, donc $(\vec{v}.\vec{grad})\vec{v}=v\frac{\delta}{\delta z} v \vec{u}_z=\vec{0}$ alors NS $\vec{grad}(P)=\eta \Delta \vec{v}$, CL $\dot{\vec{v(r)}} \rightarrow 0$ => $v(r)=\frac{P_S-P_e}{4\eta L}r^2 -\frac{R^2(P_S-P_e)}{4\nu L}$ 
- ==Écoule Couette== (2 plaques $\infty$ séparés h) -> RP $\vec{v}(M)=v(y)\vec{u}_x$ => terme convectif nulle, garde $\eta\Delta \vec{v}=\frac{d^2v}{dy^2}\vec{u}_x$, poids, pression => NS proj + CL $P=-\mu gy+cste$, $v(y)=ay+b=\frac{v_0}{h}y$ et $\vec{F}_{flu \rightarrow paroi}=-\eta v_0/h \vec{u}_x$ 
- ==Bernoulli== -> SIPH, $\exists !$ poids, $\vec{grad}(\mu v^2/2)=-\vec{grad}(P+\mu gz)$ donc $\frac{v^2}{2}+\frac{P}{\mu}+gz=cste$ (si c'est tourb alors FAUT appliquer entre 2 pts)
- ==Effet Venturi== -> Tuyau se resserre, incomp => cons $D_V=S_Av_A=S_Bv_B$ => FB $P(A)>P(B)$ en fonction sens resserrement
- ==Formule Toricelli== -> Cyclindre avec trou en B, ecoul incomp et admis P°=$P_{A \in surface}=P_{trou}$, FB $g(z_a-z_b)=(1/2)(v^2(A)-v^2(B))$ puis cons $D_V$ $v(B)=v(A)\frac{S_A}{S_B}>>v(A)$ nég v(A) avec venturi, $v_{trou}=\sqrt{2g(z_{surf}-z_{trou})}$ 
- ==Tube Pitot== -> Capteur vitesse 2 entrées, $v_0$ à l'inf, petite ouverture => neg $\Delta z$, 2xFB ds les 2 trous entré, $v_{haut}=\sqrt{\frac{2}{\mu}(P(A)-P(S))}$ ~ $v_0$ donc et h entre surfaces fluides prop P(A)-P(S)
- Courbure LdC/portance -> $v(M,t)=v(r)\vec{u}_{\theta}$, fvol nég, Eq d'Euler $\vec{grad}(P)=\mu\frac{v^2}{r}\vec{u}_r$ pression augm centre courbure vers périphérie
- ==Bilan énergie RP en dt== -> ds tube $dE_m=D_mdt(\frac{1}{2}v_1^2+ \frac{1}{2} v_2^2 +g(z_2-z_1) )$=$dW_p+Pdt=-P_2\frac{dm}{\mu} + -P_1\frac{dm}{\mu}+Pdt$ 
##### BILANS MACRO SUR $\sum$ OUVERT
- Cons masse bilan-> $\frac{\delta \mu}{\delta t}$=-$\frac{\delta \mu v}{\delta x}$ s'établit avec $\sum (t)$ et $\sum (t+dt)$ (change de longeur, etablir diag ven zones) avec $V_{sys}(t)=[x_A-x_B]S$ et vit $v_{sys}(x,t)$ et $\mu (x,t)$ en supposant m cste, avec $x_B-x_A=dx$ et $x_A'-x_A$~0 à l'ordre le plus bas
- Qtité mvmt bilan-> $d\vec{p}_{\sum}= \vec{p}(t+dt)-\vec{p}(t)$=$\sum \vec{F}_{ext} dt$, 3 zones a,m,b alors $d\vec{p}=m_b\vec{v}_b-m_a\vec{v}_a$=$D_mdt\Delta \vec{v}$ car stat, $\exists \vec{F}_{paroi->flu}$ et $\vec{F}_g$=$P_aS_a\vec{u}_x$, $\vec{F}_d$=-$P_bS_b\vec{u}_x$ puis PFD et $D_m=\mu v_aS_a=\mu v_b S_b$ 
- Poiseuille bilan -> cylindre sect° S en RS, force cisaille $\vec{dF}_{cis}=\eta\frac{dv}{dr}2\pi r_0dx\vec{u}_x$ et de pression $\vec{F}_G=p_1\pi r_0^2 \vec{u}_x$ et $\vec{F}_D=-p_2\pi r_0^2 \vec{u}_x$, 3 zones, retrouve loi avec $dp_{\sum}=0$ 
- ==Écoule parfait incomp== -> $W_{forces \ int}=0$ admis
- Bilan Ec -> $dE_c=\delta W_F=P_Fdt=-dE_p+\delta W_{Fnc}$
- ==Bilan pompe== -> RP, écoule parfait incomp, 3 zones, zone commune Ec=cste, bilan $W_F$ entrée sortie press et puis $W_{poids}=g(m_az_a-m_bz_b)$, donc exp dEc vitesses puis puiss donne $P_{pompe}=[\frac{P_b-P_a}{\mu}+1/2(v_b^2-v_a^2)$+$g(z_b-z_a)]D_m$ presque formule Bernoulli