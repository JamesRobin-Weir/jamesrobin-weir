---
{"dg-publish":true,"permalink":"/mnemo-physique/"}
---

# Chapitres
## [[OSCILLATEURS\|Oscillateurs]]
## [[Quantique\|Quantique]]
## [[Ondes Electromagnetiques\|Ondes Electromagnetiques]]
## [[Diffusion\|Diffusion]]
## [[Thermodynamique\|Thermodynamique]]
## [[Ondes matériels\|Ondes matériels]]
## [[Mécanique des fluides\|Mécanique des fluides]]
## [[Optique\|Optique]]
## [[Electricité\|Electricité]]

# Annexe
#### CONVENTIONS
- $p^+$ -> particule ou proton
#### FORMULAIRE
- Mon Vieux Tu M'as Jeté Sur Une Nouvelle Planète
- 1eV = énergie électron porté potentiel 1 V
- $\vec{A}∧(\vec{B}∧\vec{C})=(\vec{A}⋅\vec{C})\vec{B}−(\vec{A}⋅\vec{B})\vec{C}$
- $\int^{+\infty}_{-\infty}|EB|^2dx=\int^{+\infty}_{-\infty}|A|^2dx +\int^{+\infty}_{-\infty}|B|^2dx$ + $2Re(\int^{+\infty}_{-\infty}EB^*dx)$ 
- Approx lin -> $f(x) \approx f(x_0)+f'(x_0)(x-x_0)$
- rot(rot())-> Rôtir un rôti sent graduellement divin si t'as pas laplace 
- relation vect meca flu -> $(\vec{v}.\vec{grad})\vec{v}=\vec{grad}(\frac{\vec{v}^2}{2}) + \vec{rot}(\vec{v}) \wedge \vec{v}$ et $div(f\vec{g})=fdiv{\vec{g}}+(\vec{g}.\vec{grad})f$ 
- ==Ostro== -> octopus/divergent pleins d'int et div $\iiint_V div(\vec{\mathbf{F}})dV=\iint_{S_{fermée}}\vec{\mathbf{F}}\vec{dS}$
- ==Stokes== -> simple, je rôte $\int_{\Gamma s} \vec{F}\vec{dl}  = \int \int_{S} \vec{rot}(\vec{F}) \vec{dS}$ 
- Relations k,w/-> $\omega=2π/T=2\pi \nu$, $k=2\pi/\lambda$ 
- Géométrie -> $S_{sphere}=4\pi r^2$, $V_{sphere}=\frac{4}{3}\pi r^3$, $S_{disque}=\pi r^2$, $P_{disque}=2\pi r$ 
- div gén -> $div(\vec{A})=\frac{1}{\mu_1\mu_2\mu_3}(\frac{d(\mu_2\mu_3 A_1)}{ds_1} + \frac{d(\mu_1\mu_3 A_2)}{ds_2} + \frac{d(\mu_1\mu_2 A_3)}{ds_3})$ 
- rot gén -> $\vec{rot}(\vec{A})=\frac{1}{\mu_1\mu_2\mu_3} \begin{vmatrix} \mu_{1}\vec{u}_1 & \mu_{2}\vec{u}_2 & \mu_{3}\vec{u}_3\\ \frac{\partial}{\partial s_1} & \frac{\partial}{\partial s_2} & \frac{\partial}{\partial s_3}\\ \mu_{1}A_1 & \mu_{2}A_2 & \mu_{3}A_3 \end{vmatrix}$
- grad gén -> $\vec{grad}(A)=\frac{1}{\mu_1}\frac{\partial A_1}{\partial s_1} \vec{u}_1+ \frac{1}{\mu_2} \frac{\partial A_2}{\partial s_2} \vec{u}_2 + \frac{1}{\mu_3}\frac{\partial A_3}{\partial s_3}\vec{u}_3$ 
- laplacien gén -> $\Delta B=div(\vec{grad}(B))$ 
- Laplacien sph A(r) -> $\Delta A(r) = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2\frac{\partial A}{\partial r})=\frac{1}{r}\frac{\partial^2 (rA)}{\partial r^2}$ 
- $\vec{rot}(\vec{A})=\vec{0}$<=> $\exists \phi$ tq $\vec{A}=-\vec{grad}(\phi)$ donc rot(grad)=0 ==prop 1==

|  | $\vec{u_1}$ | $\vec{u_2}$ | $\vec{u_3}$ | $s_1$ | $s_2$ | $s_3$ | $\mu_1$ | $\mu_2$ | $\mu_3$ |
| ----| ---| ---|---| --- | --- | --- | --- | --- | --- |
| Cart | $\vec{u_x}$ | $\vec{u_y}$ | $\vec{u_z}$ | x | y | z | 1 | 1 | 1 |
| Cyl | $\vec{u_r}$ | $\vec{u_{\theta}}$ | $\vec{u_z}$ | r | $\theta$ | z | 1 | r | 1|
| Sph | $\vec{u_r}$ | $\vec{u_{\theta}}$ | $\vec{u_{\phi}}$ | r | $\theta$ | $\phi$ | 1 | r | $rsin(\theta)$|
##### OPPM COMPLEXE
- $div(\underline{\vec{A}})=-i\vec{k}.\underline{\vec{A}}$ 
- $\vec{rot}(\underline{\vec{A}})=-i\vec{k} \wedge \underline{\vec{A}}$ 
- $\frac{d\underline{\vec{A}}}{dt}=i\omega \underline{\vec{A}}$ 
- $<\underline{\vec{A}}>_{temp}=\frac{1}{2} \underline{\vec{A}}.\underline{\vec{A}}^*$ 
- $<\underline{\vec{A}} \underline{\vec{B}}>=\frac{1}{2} Re(\underline{\vec{A}} \underline{\vec{B}}^*)$ 
- $f_1(t)=f_2(x)$ <=> $f_1=f_2=cste$
##### FORMES D'ONDES
- OP -> $F(\vec{OM}\vec{u}-c t)$ avec u sens de propagation
- OPPlane -> $F(kx-\omega t)$ ou $F(x-ct)$
- OPPH -> S'écrit sous forme somme fonctions sinusoïdales
- OPPM -> $cos(kx-wt+\Phi)$
- $k=\frac{2\pi}{\lambda}$ 
- $T = \frac{2\pi}{\omega}=\frac1f$
- $c=\lambda f$ 