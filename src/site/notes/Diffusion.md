---
{"dg-publish":true,"permalink":"/diffusion/"}
---


### Diffusion
##### DIFFUSION THERMIQUE
| diff therm                                                    | diff part                         | électrocin             |
| ------------------------------------------------------------- | --------------------------------- | ---------------------- |
| $D=\dfrac{c_P\lambda}{\mu}$ tq $\lambda$ en $W.m^{-1}.K^{-1}$ | D en $m^2/s$                      | $\gamma$ en $S.m^{-1}$ |
| $\vec{j}_{th}$ en $W.m^{-2}$                                  | $\vec{j}_{D}$ en $p^+/m^{-2}$     | $\vec{j}_{el}$         |
| temp T                                                        | densité part n                    | pot V                  |
| $\Theta$ flux therm en W                                      | flux part                         | I courant              |
| $R_{th}=\frac{T_A-T_B}{\Theta}$ en $K.W^{-1}$                 |                                   | $R=\frac{V_A-V_B}{I}$  |
| $\vec{j_{th}}=-\lambda \vec{grad}(T)$                         | $\vec{j_D}=-D\vec{grad}(n)$       |                        |
| $\dot{T}=\dfrac{c_P\lambda}{\mu}\nabla
{ #2}
 T$                  | $\frac{dn}{dt} =D\Delta n+p(M,t)$ |                        |
- On voit que $[1/R_{th}]$ homo à l'eq du Siemen par comp avex $\gamma$ 
- Modes diffusion -> conduction (conduire la chaleur => micro), convection (mvmt, meso), rayonnement
- Vecteur densité courant/flux $p^+$ -> $\vec{jth}$ en $W.m^{-2}$ ou $\vec{j_D}$ en $s^{-1}m^{-2}$
- Flux $\theta^{ique}$ -> $d\Phi=\frac{\delta Q}{\delta t}=j_{th}dS$ 
- Loi Fourier/Fick -> $\vec{j_{th}}=-\lambda \vec{grad}(T)$, $\lambda$ ==conductivité thermique== $W.m^{-1}K^{-1}$ (fourier like its flame), $\vec{j_D}=-D\vec{grad}(n)$, D ==diffusivité== en $m^2s^{-1}$ (fick like candle wick)
- Eq therm 1D -> $1^{ier}$ Pr $dU=U(t+dt)-U(t)$=$CdT=C(T(x,t+dt)-T(x,t))$ avec $C=c_P\mu Sdx or $dU=\delta W + \delta Q=\delta Q(x+dx)+\delta Q(x)$ donc $c\mu Sdx\frac{\delta T}{\delta t}dt=-Sdxdt\frac{\delta j}{\delta x}$ => $\dot{T}=\dfrac{c_P\lambda}{\mu}\nabla
{ #2}
 T$
- ==Eq diffusion therm== -> blablatter d'un POV lambda sur 1 direction endetté (hot topic so heat) $\Delta T + \frac{P_V}{\lambda} = \frac{1}{D}\frac{dT}{dt}$ ou sans sources $\frac{dT}{dt}=D\Delta T = \frac{\lambda}{\mu c_P} \Delta T$
- ==Eq diff== $p^+$ -> $\frac{dn}{dt} =D\Delta n+p(M,t)$, source/puits $p^+$ tq $dN_{prod}=p(M,t)d\tau_Mdt$, Damp Dmt (so sad, wet particles)
- ==Diffusivité== -> 1 Direction = rhoCoit 1 mouton (lamb)da $\frac{1}{D}=\frac{\mu c_P}{\lambda}$ (because they were endetté), $c_P$ cap therm massique, $\lambda$ la conductivité therm en $W.m^{-1}K^{-1}$ 
- Diff. j -> Des fluro ô déesse $d\Phi_{\vec{j}}=\vec{j}\vec{dS}$
- $d^2N=d\Phi_{\vec{j}} \ dt$ et regarde l'homogénéité, marche pour tt: ($d^2Q$ en thermo)
- ==Loi Newt interface== -> $d\Phi=h(T-T_{flu})dSp$ (Un défi) acheter une déesse)(Newton pimps outs Vénus) (forme intégrée si T unif)
- ==Res therm== -> $R_{th}=\frac{T_{1}-T_{2}}{\Phi_{1->2}}=\frac{L}{\lambda e^2}$ en régime perm 1D (K.W-1)
- Mêmes relations résistance therm/elec $R_{eq}$
- Interface fluide liquide $R=\dfrac{1}{hS}$
- Temps caractéristique: $\tau=\frac{L^2}{D}$
##### RAYONNEMENT
- Loi de Stefan -> $\Phi=\sigma T^4$ flux surfacique donc $P_{rayonné}=S\sigma T^4$ 
- Loi Wien max emission -> $\lambda_{max}=b/T$
- Surface efficace d'une sphère est $\pi r^2$
- ==Modèle terre sans atm== -> $\Phi_S=\sigma T_S^4$ donc $P_S=4\pi R_S^2\Phi_S$ et la terre reçoit $P=\frac{\pi R_T^2}{4\pi d^2}P_S$ (rapport sphere rayon $d$ = distance Terre-soleil et surface efficace terre)
- Albédo -> Terre n'absorbe pas tt $P_{abs}=(1-A)P$, et terre rayonne $P_T=4\pi R_T^2\sigma T_T^4$ : à l'eq therm $P_{abs}=P_T$ donc $T_T=T_S((1-A)\frac{R_S^2}{4d^2})^{1/4}$ ~ -18°C bon OG
- Modèle terre atm -> $P_{abs}=P_A$ rayonné par l'atm (vers l'espace ET la terre) à temp $T_A$=-18°C car dans l'eq $(1-A)P =\sigma T_T^44\pi(R_T+e)^2$ e l'épaisseur de l'atm est nég, et $P_{abs}+P_A=P_T$ emise pas terre à temp $T_T$ donc $(1-A)P+\sigma T_A^4R_T^24\pi =\sigma T_T^44\pi(R_T)^2$ donc $T_T=(\frac{(1-A)P}{\sigma^4 \pi R_T^2}+T_A^4)^{1/4}$ ~30°C mieux
