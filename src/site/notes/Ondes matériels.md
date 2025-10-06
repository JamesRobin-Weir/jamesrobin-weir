---
{"dg-publish":true,"permalink":"/ondes-materiels/"}
---


[[Mnemo Physique\|Mnemo Physique]]
##### ONDES MEC DS SOLIDES
- Chaine ressorts -> variable réduite $\xi_n=x_n-x_{n,eq}$ avec $x_{n,eq}-x_{n-1,eq}=a$ avec PFD, approx milieux continues => $\xi(x,t)$, donne $c=\sqrt{\frac{ka^2}{m}}$ 
- Cas général solide cristalin -> $c=\sqrt{\frac{E}{\mu_l}}$ 
- Loi de Hooke -> j'ai rompu avec ma copine, il me manque DL = Elle et Fes/sES $\Delta L=\frac{LF}{ES}$
- Corde -> eq d'al $c=\sqrt{\frac{T_0}{\mu_l}}$ avec projections corde inextensible et $tan(\alpha)$ 
- ==Corde de Melde== -> $\lambda_n=\frac{2L}{n}$ et $\nu_n=\frac{nc_0}{2L}$ 
##### ONDES ACOUSTIQUES
- ==Déform milieu mat== -> $P(M,t)=P_0+p_1$ supress° = pression acoustique, $u_1(M,t)$ vitesse, $\rho(M,t)=\rho_0+\rho_1(M,t)$ masse vol
- Domaines sonores -> infrasons < 20Hz, audibles 20 Hz - kHz, ultrasons > 20 kHz
- ==Approx acoustique== -> $|p_1|<<P_0$, $|\rho_1|<<\rho_0$ et $|v_1|<<c_{son}$
- ==Tuyau sonore== (M1) -> $dm=\rho_0Sdx$, au passage onde masse bouge en $[x+\xi(x),x+dx+\xi(x+dx)]$, alors $dm=(\rho_0+\rho_1(x,t))S(\frac{\delta \xi}{\delta x}+1)dx$ => nég $\rho_1 \dot{\xi}$ terme ordre sup $\mu_0 \frac{\delta \xi}{\delta x} = - \mu_1(x,t)$ ==eq1== or $\sum \vec{F}_{lat}=\vec{0}$, PFD $dm \frac{\delta
{ #2}
 \xi}{\delta x^2} \vec{u}_x=\vec{F}_p(x+dx)+\vec{F}_p(x)$ $=(-P(x+dx)+P(x,t))S\vec{u}_x=-S\frac{\delta P}{\delta x}dx\vec{u}_x$ donc $\rho_0 \frac{\delta
{ #2}
 \xi}{\delta x^2} =- \frac{\delta p_1}{\delta x}$ ==eq2==
- ==EE acoustique== (M2) -> OG $\frac{v^2/L^*} {v/\tau^*}=\frac{v}{c}$<<1 donc néglige terme convectif, 1ier ordre $\rho_0 \frac{\partial v_1}{\partial t}=-\frac{\partial p_1}{\partial x}$ ==eq2==, eq cons masse $\frac{\partial \rho_1}{\partial t} +\rho_0 \frac{\partial v_1}{\partial x}=0$ ==eq1== 
- Masse vol GP -> $\rho=nM/V=PM/RT$
- ==Masse vol gén== -> $\rho(P)=\rho(P°+p_1)$= $\rho_0+p_1\frac{\delta \rho}{\delta P}(P°)$ donc $\rho_1=p_1 \frac{\delta \rho}{\delta P}(P°)=p_1 \rho_0 \chi_0$ ==eq3==
- Compressibilité fluide -> ki dériverait mu/mu0 pour un pet en p0 : $\chi_0=\frac{1}{\rho_0} \frac{\partial \rho}{\partial P}(P°)$avec $\chi_S$ ds cas évolut° isoS, en $Pa^{-1}$
- Eq d'Al acoust -> $\Delta p_1 = \frac{1}{c^2} \frac{\delta^2 p_1}{\delta t^2}$ et idem $v_1$ et $\rho_1$ avec $c=\frac{1}{\sqrt{\rho_0 \chi_0}}$
- ==Célerité GP== -> c'est carré = Gamora t'est ou, mmm $c^2=\frac{\gamma RT°}{M}$ 
- ==Impédance acoust== -> $Za=\frac{p_1}{v_1}=c\rho_0=\sqrt{\frac{\rho_0}{\chi_S}}$ démo avec OPP pr $p_1$, $v_1$ (-$Za$ si sens inverse), (imPeDANCE p/v)
- Densité vol $e_c$ -> $e_c(M,t)=\frac{1}{2}\rho_0 v_1^2(M,t)$
- Densité vol $e_p$ -> $E=\int \int \int e d\tau$ avec $e_p(M,t)=\frac{1}{2}\chi_S p_1^2(M,t)$ 
- Densité vol e -> $e=e_c+e_p$ 
- Propagation e -> $\Delta e = \frac{1}{c^2} \frac{\partial
{ #2}
 e}{\delta t^2}$
- ==Vect densité courant== -> $\vec{\Pi}=P(M,t)\vec{v_1(M,t)}$ 
- Puissance traversant surface -> $\mathcal{P}=\int \int \vec{\Pi}\vec{dS}$ 
- Bilan E -> $\frac{\partial E}{\delta t}=\int \int \int \frac{\partial e}{\delta t} d\tau=-\int \int _{Sfermé} \vec{\Pi}\vec{dS}$ 
- Eq cons e -> $\frac{\partial e}{\delta t}+div(\vec{\Pi})=0$ 
- ==Intensité sonore== -> $I(M)=<\vec{\Pi}.\vec{n}>$ et $I_{db}=10log(\frac{I}{I_0})$ 
- Effet doppler -> $f_{recu}=f_0 \div (1+\frac{v}{c})$ 
- 3D -> $\vec{rot}(\vec{rot}(\vec{v}))=\vec{0}$ car eq Eul $\vec{rot}(\rho_0\frac{d\vec{v}}{dt})=\vec{rot}(\vec{grad}(p_1))=\vec{0}$ d'après prop 1 et Swartz => permuter dérivée et rotationnel

|  | Electromag | Acoust |
| --- | --- | --- |
| Vit | $c=\frac{1}{\sqrt{\epsilon_0 \mu_0}}$ | $c=\frac{1}{\sqrt{\chi_S \rho_0}}$ |
| Imp | $Z=E/H=\sqrt{\frac{\mu_0}{\epsilon_0}}$ | $Z_a=p_1/v=\sqrt{\frac{\rho_0}{\chi_S}}$ |
| nrj | $e=\frac12 \epsilon_0 E^2+ \frac12 \mu_0 H^2$ | $e= \frac{1}{2}\rho_0 v_1^2 + \frac{1}{2}\chi_S p_1^2$ |
| Poy | $\vec{\Pi}=\vec{E} \wedge \vec{H}$   | $\vec{\Pi}=p_1\vec{v_1}$ |
- $\vec{B}=\mu_0 \vec{H}$ 

##### INTERFACES ENTRE MILIEUX
- Situat° -> onde incidente/transverse/réfléchie 
- $\mathcal{C}$ à l'interf -> $(p_i+p_r)(0,t)=p_t(0,t)$ ==eq1== et $(v_i+v_r)(0,t)=v_t(0,t)$ <=> $(\frac{p_i}{z1}+\frac{p_r}{z1})(0,t)=\frac{p_t}{z2}(0,t)$ ==eq2==
- ==Coef reflect° amp== -> $r_p=(p_r/p_i)(0,t)$ or eq1 + $Z_{1}$ eq2 => $r_p=\frac{Z2-Z1}{Z1+Z2}$
- ==Coef trans amp== -> $t_p=(p_t/p_i)(0,t)$ or eq1 + $Z_2$ eq2 => $t_p=\frac{2Z2}{Z1+Z2}$ 
- ==Coef reflect° vit== -> $r_u=(u_r/u_i)(0,t)$=$\frac{Z1-Z2}{Z1+Z2}=-r_p$
- ==Coef trans vit== -> $t_u=(u_t/u_i)(0,t)=\frac{Z1}{Z2}t_p$ 
- Transmission E -> $\vec{\Pi_i}=p_i\vec{u}_i=p_i^2/Z_{1} \vec{u}_x=-(\frac{pr}{pi})^2\vec{\Pi}_r$ et $\vec{\Pi_t}=p_t\vec{u}_t=p_t^2/Z_{2} \vec{u}_x$
- Transmiss° $\mathbb{C}$ -> $<\vec{\Pi}_i>=\frac{1}{2} Re(\frac{\vec{E}_i \wedge \vec{B}_i^*}{\mu_0})$ 
- $R=\frac{<||\vec{\Pi}_r||>}{<||\vec{\Pi}_i||>}(x=0)=-r_pr_u=r_p^2$ et $T=\frac{<||\vec{\Pi}_t||>}{<||\vec{\Pi}_i||>}(x=0)=t_pt_u=t_p^2\frac{Z1}{Z2}$  tels que T+R=1
- Adaptation d'interf -> ajout milieu d'imp $Z_{int}$ compris entre $Z_1$ et $Z_2$ 
- MLHI -> eq caract lin + prop milieu indep post° et dir prop
- Indice $\mathbb{C}$ -> $n=\frac{k(\omega)}{k_0}=k(w)\frac{c}{\omega}$ et $n=n'+in''$ indice d'absorpt° et de refract°
- Milieu diélectrique -> charges liées, force de rappel $e^-$ restent près noyau
- Milieu polarisable (GP) -> $e^-$ élastiquement liées $\vec{F}_k$ 
- On admet continuité champs EM à l'interface pour incidence normale
- Interface EM -> Idem E, B : admet $\vec{B}_i=\frac{\vec{k}_i \wedge \vec{E}_i}{\omega}=\frac{n_i}{c}\vec{u}_i \wedge \vec{E}_i$