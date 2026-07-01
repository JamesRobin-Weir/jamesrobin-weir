---
{"dg-publish":true,"permalink":"/cpge/fiche-mnemotechnique-maths/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## **Mathématiques Complètes PCSI/PC**

### Général
##### Primitives
- $\frac{1}{sin(x)}$ $\Rightarrow$ $\ln|\tan(x/2)|+C$ sur $]k\pi;(k+1)\pi[$, $k\in\mathbb Z$
- $\frac{1}{cos(x)}$ $\Rightarrow$ $\ln|\tan(x/2+\pi/4)|+C$ sur $]-\pi/2+k\pi;\pi/2+k\pi[$, $k\in\mathbb Z$
- $\frac{1}{((x+b)^2+a^2)}$ $\Rightarrow$ $\frac1a Arctan(\frac{x+b}{a})+C$ pour $a\ne0$
- $\dfrac{u'(x)}{\cosh^2(u(x))}=\bigl(\tanh(u(x))\bigr)'$
- $\displaystyle \int u'(x)\ln(u(x))\,dx=u(x)\bigl(\ln(u(x))-1\bigr)+C$ sur un intervalle où $u(x)>0$
- $n^3=n(n-1)(n-2)+3n^2-2n$ 
##### Polynômes
- $x^2+Ax+B=(x-\alpha _1)(x-\alpha _2)$ donne que $B=\alpha_1 \alpha_2$ et $A=-(\alpha_1+\alpha_2)$ utile lorsque tu connais une racine
- Ds l'intervalle J, $\lambda$ racine de multiplicité paire de $R$ $\Rightarrow$ $R=(X-\lambda)^mS(X)$ avec $m$ pair et $S(\lambda)\ne0$ : si $S$ ne s'annule pas au voisinage de $\lambda$ $\Rightarrow$ $R$ garde un signe constant sur $J$
- $P(J)=0$ $\rightarrow$  infinité racines $\Rightarrow$  P=0
##### Astuces
- Une intervalle peut être infini, un segment non
- $\lfloor x \rfloor \le x< \lfloor x \rfloor +1$ 
- $x-1<\lfloor x \rfloor \le x$ 
- $||x|-|y|| \le |x+y| \le |x|+|y$ 
- IPP (intégration par parties) u,v C¹$[a,b]$
- CDV (changement de variable) seg: $\varphi$ C¹(I,R), f continue sur $\varphi$(I), a et b dans I: $\displaystyle \int_{\varphi(a)}^{\varphi(b)}f(x)\,dx=\int_a^b f(\varphi(t))\varphi'(t)\,dt$
- Si $\varphi$ bij alors peut remplacer a,b par $\varphi^{-1}(a)$, $\varphi^{-1}(b)$
- CDV int: phi C1(I,R), bij $]a,b[, \rightarrow  ]a',b'[$
- Ordre de priorité ALPES : Arctan/sin/cos, Log, Polynômes, Exponentielle, Sin/cos/tan/sh/ch (+d'$\rightarrow$ -d')
- Cauchy-Schwarz (CS) : $\left(\int_a^b f(t)g(t)\,dt\right)^2\leq\left(\int_a^b f(t)^2\,dt\right)\left(\int_a^b g(t)^2\,dt\right)$
- CDV $\displaystyle u=\tan\left(\frac t2\right),\quad \cos t=\frac{1-u^2}{1+u^2},\quad \sin t=\frac{2u}{1+u^2},\quad \tan t=\frac{2u}{1-u^2}$
- Sommes triangle infini $\rightarrow$ si $a_{n,k}\geq0$ ou si la famille est sommable : $\sum_{n=0}^{\infty} \sum_{k=0}^{n} a_{n,k} = \sum_{k=0}^{\infty} \sum_{n=k}^{\infty} a_{n,k}$
- $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$
- $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{k=1}^{n} k^3 = \left( \frac{n(n+1)}{2} \right)^2$
- $\sum_{k=1}^{n} k^4 = \frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}$
- gof surj $\rightarrow$  g surj car surjecte de l'extérieur
- gof inj $\rightarrow$  f inj car injecte de l'intérieur
- ITL (Inégalité Taylor Lagrange) $\rightarrow$  f $\mathcal{C}^{n+1}(I)$ tq $|f^{(n+1)}| \le M$, $\forall (a,b)\in I^2$ : $|f(b) - f(a) - \sum_{k=1}^{n} \frac{(b-a)^k}{k!} f^{(k)}(a)| \leq M \frac{|b-a|^{n+1}}{(n+1)!}$
- Pascal $\rightarrow$  p parmi n = p-1 parmi n-1 + p parmi n-1 mitose ++
- ==Operations licites inégalités== $\rightarrow$  +/-, mult nb pos ou neg en inversant, mult tàt par termes pos, composer f° stricte croiss ou decroiss en inversant (si pas strict inégalités larges)
- Min/max d'un trinôme $ax^2+bx+c$ avec $a\ne0$ $\rightarrow$ dérivée nulle en $x=-\frac{b}{2a}$
##### DÉVELOPPEMENTS
- $e^x \approx \sum_{k=0}^{n} \frac{x^k}{k!}$
- $\sin(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$
- $\cos(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k}}{(2k)!}$
- $\tan(x) \approx \sum_{k=1}^{n} \frac{(-1)^{k-1}2^{2k}(2^{2k}-1)B_{2k}}{(2k)!}x^{2k-1}$, où $B_{2k}$ est le $2k$-ième nombre de Bernoulli
- $\arctan(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{2k+1}$
- $\frac{1}{1+x} \approx \sum_{k=0}^{n} (-1)^k x^k$
- $\frac{1}{1-x} \approx \sum_{k=0}^{n} x^k$, R=1 sur $\mathbb{C}$  
- $\ln(1+x) \approx \sum_{k=1}^{n} (-1)^{k-1} \frac{x^k}{k}$
- $\ln(1-x) \approx - \sum_{k=1}^{n} \frac{x^k}{k}$
- Pour $a\in\mathbb{N}$, $(1+x)^a = \sum_{k=0}^{a} \binom{a}{k}x^k$
- $(1+x)^\alpha =1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\dots+\frac{\alpha(\alpha-1)\cdots (\alpha-n+1)}{n!}x^n+o(x^n)$ avec $\alpha$ non entier
- $\cosh(x) \approx \sum_{k=0}^{n} \frac{x^{2k}}{(2k)!}$ 
- $\sinh(x) \approx \sum_{k=0}^{n} \frac{x^{2k+1}}{(2k+1)!}$
- $\frac{1}{\sqrt{1-x}}$=$\sum^{+\infty}_{n=0} \frac{1}{2^{2n}} \binom{2n}{n} x^n$ pour $|x|<1$ (merci Nollan)
##### Trigonométrie
- cos ra*cis*me $\Rightarrow$  il dérive négativement (donc sin positif)
- $\sin t+\cos t=\sqrt{2}\cos\left(t-\frac{\pi}{4}\right)$
-  $Tan(ab)$é, **t** 'est **plus ou moins** **t**om **(b)** é dessus, **hein**? Au **moins** tu ne sera **plus** $t(AB)$assé: $tan(a \pm b)=\frac{tan(a) \pm tan(b)}{1 \mp tan(a)tan(b)}$
- Valeurs cercle trigo : 0,1,2,3,4 diviser par 4, passer à la racine $\rightarrow$  0, $\dfrac12$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$, 1

### Sommes
##### Series:
- Prod Cauchy $\rightarrow$  $\sum u_n$ et $\sum v_n$ CVA $\rightarrow$  $\sum w_n$ avec $w_n=\sum u_k v_{n-k}$ CVA vers le produit des sommes de $u_n$ et $v_n$ 
- Somme géo $\rightarrow$ pour $q\ne1$, $\sum^n_{k=p}q^k=q^p \frac{1-q^{n+1-p}}{1-q}$ ; pour $q=1$, la somme vaut $n-p+1$
##### Series entières :
- Lemme d'Abel $\rightarrow$  $\exists z_0 \in \mathbb{C}^*$ tq $(a_nz_0^n)$ est bornée $\Rightarrow$  $\forall z$ tq $|z|<|z_0|$ , $|a_nz^n|=O(|\frac{z}{z_0}|^n)$ donc $\sum a_nz^n$ CVA
- Rayon Convergence (RC) $\rightarrow$  sup{r pos tq $a_nr^n$ bornée} donc si $a_n$ bornée mais tends pas vers 0 alors R=1
- SE $\mathcal{C}^{+\infty}$ sur int ouvert conv $]-R;R[$
- $\sum a_nz^n$ RC=R $\rightarrow$  RC pr $z^{2n}$ est $\sqrt{R}$ 
- $a_n\sim b_n$ $\rightarrow$ rayons de convergence égaux. Si $a_n=O(b_n)$ ou $a_n=o(b_n)$, alors $R_a\geq R_b$.
- Série entière dérivée/prim $\rightarrow$  à même RC
- ==Produit Cauchy SE== $\rightarrow$ Le produit de $\sum_{n=0}^{+\infty}a_nx^n$, $\sum_{n=0}^{+\infty}b_nx^n$ de rayons $R_1$, $R_2$ pr $|x|<\min(R_1,R_2)$ vaut $\sum_{n=0}^{+\infty}c_nx^n$, où $c_n=\sum_{k=0}^{n}a_kb_{n-k}$, et le rayon du produit vérifie $R\geq\min(R_1,R_2)$ (en norme pr un complexe)
- Intégration et dérivation d'une série entière $\rightarrow$ terme à terme sur tout segment inclus dans l'intervalle ouvert de convergence
- $\sum (a_k+b_k)x^k$ a $R = min(R_1,R_2)$ si $R_1 \ne R_2$, else $R \ge R_1=R_2$ 
- f DSE $\rightarrow$  $f^{(k)}(x)$ $=\sum_{n=0}^{+\infty}\frac{(n+k)!}{n!}a_{n+k}x^n$
- Serie Taylor f° $\rightarrow$  $a_n=\frac{f^{(n)}(0)}{n!}$ par dérivat°/unicité DSE
- f im/pair $\rightarrow$  $a_{2n}=0$ / $a_{2n+1}=0$ 
- $R_n(x) \smash{{}^=_{x \rightarrow 0}} o(x^n)$ par def 
- ==TYRI== $\rightarrow$ $R_n(x)=\frac{1}{n!} \int_{0}^x (x-t)^nf^{(n+1)}(t)dt$. Si $f\in\mathcal{C}^{+\infty}(]-r,r[)$, alors $f$ est DSE sur $]-r,r[$ $\Leftrightarrow$ $\forall x\in]-r,r[$, $R_n(x)\rightarrow_{n\rightarrow+\infty}0$ (sinon utiliser ITL maj en v.a.)
- ==Binôme généralisé== $\rightarrow$ $(1+x)^{\alpha}=\sum_{n=0}^{+\infty} \frac{\prod^n_{k=1}(\alpha-k+1)}{n!}x^n$ pour $|x|<1$. Si $\alpha\in\mathbb{N}$, la somme est finie et l'identité vaut sur $\mathbb{R}$.

### Fonctions
##### Général
- Si $f\in\mathcal{C}^2(I)$ : $f$ convexe $\Leftrightarrow f''\geq0$ sur $I$, et $f$ concave $\Leftrightarrow f''\leq0$ sur $I$. Les conditions $f''>0$ et $f''<0$ sont suffisantes pour la stricte convexité et la stricte concavité.
- La position par rapport à la tangente est déterminée par le premier terme non nul d’ordre supérieur à 1 du DL
- TVI $\rightarrow$ si $f$ $\mathrm{C}[a,b]$ et $f(a)f(b)<0$, alors $\exists c\in]a,b[$ tel que $f(c)=0$ ; solution unique si $f$ est strictement monotone
- TBA $\rightarrow$ une fonction continue sur un compact est bornée et atteint ses bornes ; dans $\mathbb{R}^n$, tout fermé borné est compact
- THM bij $\rightarrow$ si $f$ est continue et strictement monotone sur un intervalle $I$, alors $f:I\to f(I)$ est bijective et $f^{-1}$ est continue et strictement monotone
- Rolle $\rightarrow$ si $f$ $\mathrm{C}[a,b]$, dérivable sur $]a,b[$ et $f(a)=f(b)$ $\Rightarrow$ $\exists c\in]a,b[$ tel que $f'(c)=0$
- EAF $\rightarrow$ si $f$ $\mathrm{C}[a,b]$ et dérivable sur $]a,b[$, alors $\exists c\in]a,b[$ tel que $f(b)-f(a)=(b-a)f'(c)$
- IAF $\rightarrow$ si $|f'|\leq M$ sur un intervalle ($M$-lipschitzienne), alors $|f(x)-f(y)|\leq M|x-y|$
- Leibniz $\rightarrow$ $(fg)^{(n)}=\sum_{k=0}^n\binom n k f^{(k)}g^{(n-k)}$
- ITY $\rightarrow$ si $|f^{(n+1)}|\leq M$ entre $a$ et $x$, alors $\displaystyle \left|f(x)-\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k\right|\leq M\frac{|x-a|^{n+1}}{(n+1)!}$
- ==TYRI== $\rightarrow$  $f(x)-\sum _{k=0}^n \frac{f^{(k)}(y)}{k!} (x-y)^k$= $\int_y^x \frac{f^{(n+1)}(t)}{n!} (x-t)^n\ dt$  entre y et x deux variables
- ==TYRI n,n+1== $\rightarrow$  $f(n+1)=\sum _{k=0}^N\frac{f^{(k)}(n)}{k!}+$ $\int_n^{n+1} \frac{f^{(N+1)}(t)}{N!} (n+1-t)^N dt$ 
- Carac séquentielle de la limite : $f(x)\rightarrow l$ quand $x\rightarrow a$ $\Leftrightarrow$ $\forall (u_n)$ du domaine telle que $u_n\rightarrow a$ et $u_n\ne a$, on a $f(u_n)\rightarrow l$
- f $\mathrm{C}(I)$ $\Leftrightarrow$ en tt pt a $\in$ I, f(x)$\rightarrow$ f(a)
- D $\Rightarrow$  C et D(n) $\Rightarrow$  C(n-1)
- Arcsin 1-, arccos 2- (un peu + moche): $(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}$, $(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}$
- C(k) $\Leftrightarrow$ k fois derivable et f(k)(x) C
- Difféomorphisme $\mathcal{C}^k$ : si $f\in\mathcal{C}^k(I)$ est bijective de $I$ sur $f(I)$ et si $f'$ ne s'annule pas, alors $f^{-1}\in\mathcal{C}^k(f(I))$.
- $f=O_a(g)$ si $f/g$ est bornée au voisinage de $a$, et $f=o_a(g)$ si $f/g\rightarrow0$ en $a$, en supposant $g\ne0$ au voisinage considéré.
- DL0 $\Rightarrow$ continue, DL1 $\Rightarrow$ derivable
- Prop : Intégrer un DL donne un DL

##### Suites def. par fonction
- $u(n_0) \in I$, I stable f $\Rightarrow$  $u_n$ pr $n \ge n_0$ ds I est définie 
- Si $u_{n+1}=f(u_n)$, $I$ est stable par $f$ et $f(x)\geq x$ pour tout $x\in I$, alors $(u_n)$ est croissante.
- Si $u_{n+1}=f(u_n)$ et $f$ est croissante sur un intervalle stable $I$, alors $(u_n)$ est monotone : croissante si $u_1\geq u_0$, décroissante si $u_1\leq u_0$.
- Si $u_{n+1}=f(u_n)$ et $f$ est décroissante sur un intervalle stable $I$, alors $(u_{2n})$ et $(u_{2n+1})$ sont monotones en sens opposés.
- Si $u_{n+1}=f(u_n)$, où f:D→R est continue et $u_0\in I$
1) Etudier f sur $\mathcal{D}_f$ (mono, croissance,…)
2) Résoudre eq aux limites $f(a)=a$, que doit satisfaire éventuelle limite de $u_n$
3) Dét int $I$ stable par f sur lequel f est mono, et tel que $u_0\in I$. On sait alors que $u_n\in I$pour tout $n\ge 0$. Svnt le tableau de variations de f donne la réponse. ($\exists$ des cas où on ne peut pas y arriver pour $u_0$, mais pr $u_1$, ou $u_2$)
4) a) Si $f$ est croissante sur $I$, alors $(u_n)$ est monotone ; le sens est donné par le signe de $u_1-u_0$. Si $(u_n)$ est bornée, elle converge vers une limite $l$ vérifiant $f(l)=l$. Si elle est croissante et non bornée, alors $u_n\rightarrow+\infty$.
5) b) f est décroiss sur $I$ $\Rightarrow$  poser $g=f∘f$ croissante sur $I$ et $v_n=u_{2n}$ et $w_n=u_{2n+1}$ alors (vn) et (wn) tq $v_{n+1}=g(v_n)$ et $w_{n+1}=g(w_n)$ avec g croiss sur $I$. Étudier (vn) et (wn) comme ds le cas précédent. Rappelons que la suite (un) converge $\Leftrightarrow$ (vn) et (wn) convergent vers la même limite.

##### SUITES DE FONCTION
- CVS $\rightarrow$ $\forall x\in J,\ \forall\epsilon>0,\ \exists N,\ \forall n\geq N,\ |f_n(x)-f(x)|<\epsilon$
- CVU $\rightarrow$ $\forall\epsilon>0,\ \exists N,\ \forall n\geq N,\ \forall x\in J,\ |f_n(x)-f(x)|<\epsilon$ $\Leftrightarrow$ $\sup_{x\in J}|f_n(x)-f(x)|\rightarrow0$, avec $\alpha_n$ bornée sur J
- CVU ts (= tout segment) $\Rightarrow$ CVS
- ==Thm inversion lim $\int$ sur un segment== $\rightarrow$ si $f_n\rightarrow f$ uniformément sur $[a,b]$ et si les $f_n$ sont continues, alors $f$ est continue et $\int_a^b f_n\rightarrow\int_a^b f$.
- ==Dérivat° $\mathrm{C}^p$ suite de f°== $\rightarrow$ $f_n \mathrm{C}^p$, $k \in [[0,p-1\|0,p-1]]$, $f_n^{(k)}$ CVS, $f_n^{(p)}$ CVU $\Rightarrow$ $f \ \mathrm{C}^p$ et $f_n^{(k)}$ CVS $f^{(k)}$ et cas p non
- HP: THM inv lim $\rightarrow$  $f_n$ CVU f et $f_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} b_n$ $\Rightarrow$  $\sum b_n$ conv et ${}^{lim}_{x\rightarrow a}f(x)={}^{lim}_{n\rightarrow +\infty} \ {}^{lim}_{x\rightarrow a} f_n(x)$= ${}^{lim}_{n\rightarrow +\infty} b_n$ 
##### SÉRIES DE FONCTIONS
- $\sum u_n$ ==CVU (ts) J== $\rightarrow$  $\sum u_n$ CVS et $(R_n)_{n \ge n_0}$CVU (ts) vers 0 (outil : CSSA $|R_n|\leq|u_{n+1}|$. puis passage borne sup)
- $\sum u_n$ ==CVN== $\rightarrow$  $\Leftrightarrow$  $\forall u_n$ borné et $\sum ||u_n||_{+\infty}$ conv
- ==CVN Serie TG Un== $\rightarrow$  $\exists \sum A_n$ convergent tq $A_n$ positif et $(An)\ge |u_n(x)|$ $\Rightarrow$  $\sum u_n$ conv tq Un bornée et $\sum ||u_n||_{inf}$ conv
- ==THM d' C0 Somme== $\rightarrow$  $\sum u_n$ CVU et $u_n \ \mathscr{C}$ $\Rightarrow$  $\sum u_n \ \mathscr{C}$
- $\sum u_n$ CVU et $\forall u_n$ lim $a \in I$ $\Rightarrow$  intervertir lim et $\sum$ en a
- ==Inv lim/$\sum$ pr a $\in I \cup\bar{I}$== $\rightarrow$  $\sum u_n$ CVU et $\forall n$, $u_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} l_n$ $\Rightarrow$  conv/égal $\sum l_n = \smash{{}^{\ lim}_{x\rightarrow a}}(\sum u_n(x))$
- ==Intégration terme à terme (tàt) sur segment== $\rightarrow$ $\underset{n \ge n_0}{\sum} u_n$ CVU $[a,b]$ et $u_n$ $\mathrm{C}([a,b])$ $\Rightarrow$  $\sum_{n= n_0}^{+\infty} \int_a^b u_n$ $\mathrm{C}^0$ et interv $\int$ et $\sum$ (fonctionne aussi a,b infinis)
- ==THM d' $\mathrm{C}^1$ sur un segment $I$== $\rightarrow$ $u_n$ $\mathcal{C}^1$, $\sum u_n$ CVS, $\sum u_n'(x)$ CVU (ts) $\Rightarrow$  $\sum u_n$ $\mathcal{C}^1$ et $(\sum u_n)'=\sum u_n'$ 
- ==THM d' $\mathrm{C}^p$ sur un segment $I$== $\rightarrow$ $u_n \in \mathscr{C}^p$ et $\sum u_n^{(p)}$ CVU (ts) I, $k \in [[0,p-1\|0,p-1]] , \ \sum u_n^{(k)}$ CVS $\Rightarrow$  $\sum u_n$ $\mathscr{C}^p$ et on peut intervir d' et $\sum$ 
- Comp Série-Int $\rightarrow$ f $\mathrm{C}$, mono, positive sur $[N,+\infty[$ $\Rightarrow$ $\sum f$ conv $\Leftrightarrow$ $\int_N^{+\infty}f(t)dt$ conv
- Inégalité sur f C, mono, decrois $\rightarrow$  $\int_k^{k+1}f \le f(k) \le \int_{k-1}^kf$ 
- Critère de Leibniz = CSSA

##### INTÉGRALES À PARAMÈTRES
- Transfo Laplace $\rightarrow$  $L(f)(p)=\int ^{+\infty}_0 f(t)e^{-pt}dt$ 
- Transfo Fourier $\rightarrow$ $\widehat f(\omega)=\int_{-\infty}^{+\infty}f(t)e^{-i\omega t}dt$
- ==Conv Dom interv J== $\rightarrow$  $f_n$ Cpm et CVS f Cpm, $\exists \varphi(t)$ L1 tq $|f_n(t)| \le \varphi(t)$ $\Rightarrow$  $f_n$ et $f$ L1, $\int_J f=\int_J lim(f_n)=lim(\int_J f_n)$
- ==Int tàt généralisé== $\rightarrow$   $\sum f_n$ Cpm CVS vers $f$ Cpm tq $f_n$ L1 et $\sum \int |f|$ conv $\Rightarrow$  $f$ L1 et $\int f=\int \sum f_n =\sum \int f_n$ 
- ==Conv Dom para== $\rightarrow$ si $f(x,t)\rightarrow_{x\rightarrow a}l(t)$ pour tout $t$ et s'il existe $\varphi\in\mathcal{L}^1$ telle que $|f(x,t)|\leq\varphi(t)$ au voisinage de $a$, alors $l\in\mathcal{L}^1$ et $\lim_{x\rightarrow a}\int f(x,t)dt=\int l(t)dt$.
- ==Thm $\mathcal{C}$ sous $\int$== $\rightarrow$ si, pour tout $t$, $x\mapsto f(x,t)$ est continue et si $f$ est localement dominée en $t$ par une fonction intégrable, alors $g(x)=\int f(x,t)dt$ est continue.
- ==Thm d' $\mathcal{C}^1$== $\rightarrow$ si $t\mapsto f(x,t)$ est intégrable, si $x\mapsto f(x,t)$ est $\mathcal{C}^1$ et si $\partial f/\partial x$ est localement dominée par une fonction intégrable, alors $g(x)=\int f(x,t)dt$ est $\mathcal{C}^1$ et $g'(x)=\int \frac{\partial f}{\partial x}(x,t)dt$.
- ==Thm d' $\mathrm{C}^p$== $\rightarrow$  $x \rightarrow f(x,t)$ $\mathcal{C}^p$, $k \in [0,p-1], t \rightarrow \frac{d^kf}{dx^k} \ \mathcal{L}^1$, et $t \rightarrow \frac{d^pf}{dx^p}$ $\mathcal{Cpm}$ et dom ce dernier $\Rightarrow$  $g: t \rightarrow \int{f} \ est \ \mathcal{C}^p$ $et \ g^{(i)}: x \rightarrow \int{\frac{d^if}{dx^i}(x)dt}$ 
### Probabilités
##### Événements
- $P$ est une probabilité $\Leftrightarrow$ $P(A)\geq0$ pour tout événement $A$, $P(\Omega)=1$, et $P\left(\bigsqcup_{n=0}^{+\infty}A_n\right)=\sum_{n=0}^{+\infty}P(A_n)$ pour toute suite d'événements deux à deux disjoints.
- A,B indep $\rightarrow$  $P(A \cap B)=P(A)P(B)$
- Tribu $\mathbb{A}$ sur $\Omega$ $\rightarrow$ $\Omega\in\mathbb{A}$, $A\in\mathbb{A}\Rightarrow\bar A\in\mathbb{A}$, et toute réunion dénombrable d'éléments de $\mathbb{A}$ appartient à $\mathbb{A}$ ; les intersections dénombrables y appartiennent aussi.
- Plus petite tribu contenant un événement $A$ $\rightarrow$ $\sigma(A)=\{\varnothing,A,\bar A,\Omega\}$ ; la plus petite tribu sur $\Omega$ est $\{\varnothing,\Omega\}$.
- Sigma additivité (dénombrable) $\rightarrow$ si $(A_n)$ est une suite d'événements deux à deux incompatibles, $P(\bigcup_{n\in\mathbb{N}}A_n)=\sum_{n=0}^{+\infty}P(A_n)$
- ==Sous additivité/inégalité de Boole== $\rightarrow$ $P(\bigcup_{n\in\mathbb{N}}A_n)\leq\sum_{n=0}^{+\infty}P(A_n)$ pour n'importe quels événements
- Si $P(A)>0$, $P(A\cap B)=P(A)P(B|A)$ ; si, en plus, $A$ et $B$ sont indépendants, alors $P(A\cap B)=P(A)P(B)$ et $P(B|A)=P(B)$.
- ==Proba conditionelles== $P(A|B) = \frac{P(A \cap B)}{P(B)}$ si $P(B) > 0$
- ==Bayes== $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$ si $P(A) > 0$ et $P(B) > 0$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- Si $P(A)>0$ et $P(A\cap B)>0$, $P(A\cap B\cap C)=P(A)P(B|A)P(C|A\cap B)$.
- ==Loi conjointe== $P_{(X,Y)}(x_i,y_j)=P(X=x_i, Y=y_j)$ et alors lois X,Y sont loi marginales
- $P(X=x_i)=\sum^q_{j=1}P(X=x_i, Y=y_j)$ on retouve LM avec LC
- Si X,Y indep, loi conjointe = prod lois marginales
- ==Loi faible des grands nombres== : pour des variables aléatoires i.i.d. d'espérance finie, la moyenne empirique converge en probabilité vers l'espérance commune.
- ==Loi des probabilités totales== : Si $A_1,A_2,...,A_n$ sont des événements mutuellement exclusifs et exhaustifs (c'est-à-dire que $Ai∩Aj=∅$ pour $i≠j$ et $∪_{i=1}^nA_i=Ω$ $\Leftrightarrow$  $\bigsqcup _{i=1}^n A_i= \Omega$) donc est un SCE : $\forall$ B , P(B)=$\sum P_{Ai}(B)P(Ai)$ 
- Union événements disjoints $\rightarrow$  Proba union est somme probas
- Intersection événements indep $\rightarrow$  Proba intersect° est prod probas
- Thm $\mathcal{C}$ (dé)croiss $\rightarrow$  $(A_n)$ (dé)croissant pr l'inclusion $A_k \subseteq A_{k+1}$ (ou inverse) alors $P\left(\bigcup_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} P(A_n)$ (sinon intersection)
- Complémentaire union $\rightarrow$  $\overline{\bigcup A_n}=\bigcap \overline{A_n}$ 
- $\bar{A_n}$ mut indep $\rightarrow$  $A_n$ mut indep
##### Variables aléatoires
- X va $\rightarrow$  Im(X) au plus dénombrable (par réunion d'ensembles denombrables), et X=k s'exprime en fonction d'événements
- Thm Fubini $\rightarrow$  $\forall$ fam sommable $(u_{i,j})$ on peut invertir $\sum$ sur i et sur j
- Si $(a_i)$ et $(b_j)$ sont sommables, alors $\sum_{i,j}a_ib_j=(\sum_i a_i)(\sum_j b_j)$
- Conv séries doubles $\rightarrow$  $\forall (a_{i,j})$ tq $\forall i\in\mathbb{N}$, $\sum_{j\in\mathbb{N}}a_{i,j}$ CVA et $\sum_{i\in\mathbb{N} }\sum_{j=0}^{+\infty}|a_{i,j}|$ conv alors $(a_{i,j})$ sommable et on peut inverser sommes
- VA ==discrète== $\rightarrow$  $X(\Omega)$ au plus dénombrable
- X vad intégrable $\Rightarrow$ $E(X) = \sum_{x_i} x_i  P(X = x_i)$ est linéaire $E(aX + b) = a \cdot E(X) + b$
- ==Formule de transfert== $\rightarrow$ si $X$ est discrète et $f(X)$ intégrable, $E(f(X))=\sum_{x\in X(\Omega)}f(x)P(X=x)$ ; de même pour un couple ou un $n$-uplet discret.
- ==Cauchy-Schwarz proba== $\rightarrow$ si $X,Y\in L^2$, $E(XY)^2\leq E(X^2)E(Y^2)$, avec égalité si $X$ et $Y$ sont proportionnelles presque sûrement ; $|Cov(X,Y)|\leq\sigma(X)\sigma(Y)$, avec égalité si $X=aY+b$ quasi surement
- Si $X$ est discrète et admet un moment d'ordre 2, $V(X)=E((X-E(X))^2)=\sum_{x_i}(x_i-E(X))^2P(X=x_i)$ ; $V(aX+b)=a^2V(X)$ et $V(X)=\sigma(X)^2$.
- V.A. centrée réduite $\rightarrow$  V(X)=1 et E(X)=0
- Centrer et réduire une VA tq $\mathbb{V}(X) \ne 0$ $\rightarrow$ $\frac{X-E(X)}{\sigma(X)}$
- ==König-Huygens== $\rightarrow$ si $X$ admet un moment d'ordre 2, $V(X)=E(X^2)-[E(X)]^2\geq0$
- $X$ admet un moment d'ordre $p$ si $E(|X|^p)<+\infty$, et cela implique l'existence des moments d'ordre $q$ pour $0\leq q\leq p$
- X, Y VADR MO2 $\rightarrow$  XY admet MO1
- ==Covariance== $\rightarrow$ $Cov(X,Y)=E(XY)-E(X)E(Y)=E((X-E(X))(Y-E(Y)))$ ; la covariance est une forme bilinéaire symétrique positive semi-définie, mais pas un produit scalaire sur toutes les variables aléatoires.
- $V(X+Y)=V(X)+V(Y)+2Cov(X,Y)$
- $V(X)=Cov(X,X)$ nulle si X,Y indep
- Corrélation $\rightarrow$ $Corr(X,Y)=\frac{Cov(X,Y)}{\sqrt{V(X)V(Y)}}$ lorsque $V(X)>0$ et $V(Y)>0$.
- ==Lemme coalitions== $(X_i)$ VA mut indep $\rightarrow$  $\forall f_i$ def sur $Im(X_i)$, VA $(f_i(X_i))$ sont indep
- ==Inégalité de Markov== $\rightarrow$ si $Z\geq0$ presque sûrement, alors $\forall a>0,\ \mathbb P(Z\geq a)\leq\frac{\mathbb E(Z)}{a}$.
- Bienaymé-Tchebychev $\rightarrow$ si $\mathbb{V}(X)$ finie, $\mathbb P(|X-\mathbb E[X]|\geq\epsilon)\leq\frac{V(X)}{\epsilon^2}=\left(\frac{\sigma(X)}{\epsilon}\right)^2$
- Tout VADR a valeurs finies admet une espérance finie
- Des variables aléatoires $(X_i)_{i\in I}$ sont mutuellement indépendantes si, pour toute sous-famille finie $i_1,\ldots,i_m$ et tous boréliens $B_1,\ldots,B_m$, $P(\bigcap_{j=1}^{m}\{X_{i_j}\in B_j\})=\prod_{j=1}^{m}P(X_{i_j}\in B_j)$.
##### Fonctions génératrices
- Pr une VA $X$ à valeurs ds $\mathbb{N}$, la f° génératrice $G_X(t)=E(t^X)$ a un RC $\geq1$, CVN sur $\bar D(0,1)$, est $\mathrm{C}[0,1]$ et $\mathcal{C}^{+\infty}]0,1[$
- loi X f° gén $\rightarrow$  $P(X=n)=\frac{G_X^{(n)}(0)}{n!}$ comme TY
- E f° gén $\rightarrow$  MO1 $\Rightarrow$  $G_X'(1)=E(X)$, MO2 $\Rightarrow$  $G_X''(1)=E(X(X-1))=E(X^2)-E(X)$ 
- V f° gén $\rightarrow$  MO2, $V(X)=G_X''(1)+G_X'(1)-(G'_X(1))^2$
- f° gen X+Y pr X,Y indep $\rightarrow$  $G_{X+Y}=G_XG_Y$ 
##### Lois Usuelles
- ==Loi uniforme sur $\{1,\ldots,n\}$== $\rightarrow$ $P(X=k)=\frac1n$, $E(X)=\frac{n+1}{2}$, $V(X)=\frac{n^2-1}{12}$, $G_X(t)=\frac tn\frac{1-t^n}{1-t}$ pour $t\ne1$, et $G_X(1)=1$.
- ==Bernoulli== $\rightarrow$  $P(X=x) = \begin{cases} p & \text{si } x = 1 \\ 1-p & \text{si } x = 0 \end{cases}$, $E(X) = p$, $V(X) = p(1-p)$, $G_X(s) = 1 - p + ps$
- ==Loi binomiale== $\rightarrow$  $P(X=k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$, $E(X) = np$, $V(X) = np(1-p)$, $G_X(s) = (1-p + ps)^n$
- ==Loi de Poisson== $\rightarrow$  $P(X=k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!}$, $E(X) = \lambda$, $V(X) = \lambda$, $G_X(s) = e^{\lambda(s-1)}$ avec $\lambda > 0$ 
- Poisson approxime binomiale $\rightarrow$ si $X_n\sim\mathcal B(n,p_n)$, $p_n\rightarrow0$ et $np_n\rightarrow\lambda$, alors $X_n$ converge en loi vers $\mathcal P(\lambda)$.
- ==Loi géométrique sur $\mathbb N^*$== $\rightarrow$ avec $q=1-p$, $P(X=k)=q^{k-1}p$, $E(X)=\frac1p$, $V(X)=\frac q{p^2}$, $G_X(t)=\frac{pt}{1-qt}$.
- $X\sim\mathcal{G}(p)$ $\Leftrightarrow$ $P(X>k)=(1-p)^k$ pour $k\in\mathbb N$.
- Loi géométrique sans mémoire $\rightarrow$ $\forall k,n\in\mathbb N$, $P(X>k+n\mid X>k)=P(X>n)$ ; de façon équivalente, conditionnellement à $X>k$, $X-k$ suit la même loi que $X$.
- Loi de Rademacher $\rightarrow$  $P(X=1)=1/2=P(X=-1)$, $E(X)=0$, $V(X)=1$ 
- Additivité loi de Poisson $\rightarrow$ si $X\sim\mathcal P(\lambda)$ et $Y\sim\mathcal P(\mu)$ sont indépendantes $\Rightarrow$ $X+Y\sim\mathcal P(\lambda+\mu)$.
- Formule antirépartition $X$ VARD finie tq $X(\Omega) \subset [\![0;N ]\!]$ $\rightarrow$  $\mathbb{E}(X)=\sum_{k=0}^{N-1}\mathbb{P}(X>k)$ 
- Loi normale $\mathcal{N}(\mu,\sigma^2)$ avec $\sigma>0$ $\rightarrow$ densité $\displaystyle f(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$

## Matrices
##### Général
- Matrice compagnon $\rightarrow$  $\chi_M=X^p+\sum_{k=0}^{p-1} a_kX^k$ démo $(XI_p-M)$ ~ $L_1=L_1+\sum$ donne P(x)
$$ M=
\begin{pmatrix}
0 & \cdots & 0 & -a_0 \\
1 & \ddots & \vdots & \vdots \\
 & \ddots & 0 & -a_{p-2}\\
(0) &  & 1 & -a_{p-1} \\
\end{pmatrix}
$$
- $M^2=I_n$ $\rightarrow$  M est un sym car f° s associé car $s \circ s=id_E$ caract sym
- vp de $A^2$ si $A$ sym réelle $\rightarrow$ $A=PDP^T$ avec $P$ orthogonale, donc $A^2=PD^2P^T$ et les valeurs propres de $A^2$ sont les carrés des valeurs propres de $A$.
- dev. poly caract $\rightarrow$  $\lambda \mu =\frac{(\lambda+\mu)^2-\lambda^2-\mu^2}{2}$ sert quand dev $\chi_A=X^{n-2}(X-\lambda)(X-\mu)$=$X^n-(\lambda+\mu)X^{n-1}+\lambda\mu X^{n-2}$ 
- ==Invariants similitude== $\rightarrow$  tr, det, $\chi$, rg, sp
- Une matrice symétrique réelle représente, dans une base orthonormée, un endomorphisme autoadjoint.
- det(AB) $\rightarrow$  = det(A)det(B)
- ==Trace Proj== $\rightarrow$ $Tr(P)=rg(P)$ car $sp(P)\subset\{0,1\}$
- $B^2=B$ et B sym $\rightarrow$  b canon associé B proj $\perp$ 
##### Mat orthog (= isométrie EE)
- $M \in O_n(\mathbb{R})$ $\rightarrow$  $M^TM=I_n$ 
- Si $M\in O_n(\mathbb R)$, alors $1=det(MM^T)=det(M)det(M^T)=det(M)^2$, donc $det(M)\in\{-1,1\}$.
- $A$ diagonalisable et $sp(A)\subset\{-1,1\}$ $\Rightarrow$ $A^2=I$ et $A$ = symétrie. Cela vaut pour une matrice orthogonale dont le spectre $\subset \{-1,1\}$
##### Réduction
- Poly caract $\rightarrow$  $\chi_M = X^n-tr(M)X^{n-1}+$...$+(-1)^n det(M)$ 
- Prop Sep $\rightarrow$ $E_{\lambda}=Ker(u-\lambda id)$, $\bigoplus_{\lambda\in Sp(u)}E_{\lambda}\subseteq E$ et $1\leq dim(E_{\lambda})\leq m(\lambda)$.
- ==Diag Sep== $\rightarrow$  $\oplus_{\lambda \in Sp} E_{\lambda}=E$ $\Leftrightarrow$  dim(E)=$\sum dim(E_{\lambda})$ $\Leftrightarrow$  mat diagonalisable
- ==Diag $\chi_M$== $\rightarrow$  CS scindé racines simples, CNS scindé et $\forall \lambda_i$,  $dim(E_{\lambda_i})=m(\lambda_i)$ 
- Endomorph = diagonalisable $\Leftrightarrow$ $\exists$ polynôme annulateur scindé à racines simples
- u autoadjoint  $\Leftrightarrow$  u est diagonalisable dans une base orthonormée
- ==M (definie) pos== $\rightarrow$  vp de M $\ge 0$ ($>0$) $\Leftrightarrow$ $M\in S_n^+$ ($S_n^{++})$, inverse pour def neg, 
- rg(u)=1 alors diag $\Leftrightarrow$ trace non nulle
- Si $rg(A)<n$, alors $0$ est une valeur propre de $A$. Plus précisément, $dim(Ker A)=n-rg(A)$ ; on a $dim(Ker A)=n-1$ seulement lorsque $rg(A)=1$.
- Si $dim(Ker A)=n-1$, alors $0$ a une multiplicité algébrique au moins $n-1$ et $\chi_A(X)=X^{n-1}(X-tr(A))$.
- Hamilton-Cayley $\rightarrow$  $\chi_A$ est poly annul A
- ==Trigonalisable== $\rightarrow$  poly caract scindé
## Algèbre générale
##### Algèbre PCSI
- Il y a $n^p$ aplications de $[[1,p\|1,p]] \ ds \ [[1,n\|1,n]]$ 
- Injecte toi un max d'alcool, surjette un minimum d'eau
- Inj $\Leftrightarrow$  Ker={0}, surj $\Leftrightarrow$  Im=F 
- Inversible $\rightarrow$  0 pas vp
- $E=F\oplus G$ $\Leftrightarrow$ $F\cap G=\{0\}$ et $F+G=E$ $\Leftrightarrow$ tout vecteur de $E$ admet une décomposition unique $x=f+g$.
- ==proj ortho== sur $F$ $\rightarrow$ $x=p_F(x)+(x-p_F(x))$ avec $p_F(x)\in F$ et $x-p_F(x)\in F^\perp$. Pour un projecteur $p$ sur $F$, $p$ est orthogonal $\Leftrightarrow$ $||p(x)||\leq||x||$ pour tout $x$.
- ==Relat° s,p== $\rightarrow$  $u \in E$, $F \subset E$ alors $p_F(u)=\frac{1}{2}(s_F(u)+u)$ lie projeté sur F et la réflexion (symétrie) par rapport à F
![CPGE_relation_s_p.png](/img/user/Excalidraw/CPGE_relation_s_p.png)
- prod sca canon $\rightarrow$  $(x|y)=\sum_{i=1}^n x_iy_i$ ds $\mathbb{R}^n$ et $\sum_{i=1}^n \overline{x}_iy_i$ ds $\mathbb{C}^n$
- Soit $F=\{x\in\mathbb R^n\mid\sum_{i=1}^n x_i=0\}$ $\rightarrow$ $F=Vect(e_1-e_2,\ldots,e_1-e_n)$ ; en effet, pour $x\in F$, $x=-\sum_{i=2}^n x_i(e_1-e_i)$.
- ==endo u bij $\Leftrightarrow$  surj $\Leftrightarrow$  inj== $\rightarrow$  $dim(ker(u))=0$, THM rg $dim(E)=dim(Im(u))$ or $Im(u) \subset E$ $\Rightarrow$  Im(u)=E $\Rightarrow$  f est surjective $\Rightarrow$  f bij
- Bases $\rightarrow$  normée VS orthogonal << orthonormée (les deux)
##### Géométrie
- s sym / F // G $\rightarrow$  $\forall x = f+g$, $s(x)=f-g$ $\Leftrightarrow$  $s(s(x))=x$ 
- p proj sur F // G $\rightarrow$  $\forall x = f+g$, $p(x)=f$ $\Leftrightarrow$  $p(p(x))=p(x)$ 
- sym dim finie n $\rightarrow$  symétrie orthog / à un hyperplan F = réflexion, si dim(F)=n-2 = renversement
- p proj 
- Dans $\mathbb R^2$, $\det(\vec u,\vec v)=0$ $\Leftrightarrow$ $\vec u$ et $\vec v$ sont colinéaires.
- det que pour mat $\in M_n(K)$
- $\vec{u}.\vec{v}=0$ $\Leftrightarrow$ $\vec{u}, \vec{v}$ orthog
- pour determiner l'orthog d'une droite $\Delta$prendre un vecteur dir resultant de la difference des coord de 2 pts de $\Delta$
- $M \in Cercle$ de diametre AB $\Leftrightarrow$ $\vec{AM}.\vec{BM}=0$
- $\alpha x+\beta y+\gamma z=l$ est l'équation d'un plan si $(\alpha,\beta,\gamma)\ne(0,0,0)$ ; le vecteur $(\alpha,\beta,\gamma)$ est normal au plan, donc son produit scalaire avec tout vecteur directeur du plan est nul.
- $||\vec u\times\vec v||=||\vec u||\,||\vec v||\sin(\theta)$ et $\vec u\cdot\vec v=||\vec u||\,||\vec v||\cos(\theta)$.
- Si $a$ et $b$ sont linéairement indépendants et $F=Vect(a,b)\subset\mathbb R^3$, alors $u\in F\Leftrightarrow det(u,a,b)=0$, ce qui donne une équation cartésienne du plan.
- Cart ax+by+cz=0 $\rightarrow$  e=(a,b,c) est vect normale au plan car $u\in F$ $\Leftrightarrow$  $(u|e)=0$ 
- Soit p proj sur F plan $\mathbb{R}^3$, h proj sur $F^{\perp}$ $\rightarrow$  $\forall x \in \mathbb{R}^3$, $h(x)+p(x)=x$ permet de remonter à la proj à partir du vect orthog d'un plan cartésien (puis la sym avec la relat° fond)

##### EE 1 : prop
- espace eucl $\rightarrow$  EV reel dim finie muni <.> 
- espace préhilbertien $\rightarrow$ espace vectoriel réel ou complexe muni d'un produit scalaire, de dimension finie ou infinie, pas nécessairement complet
- espace métrique complet $\rightarrow$ toute suite de Cauchy converge dans cet espace
- norme-sca $\rightarrow$  $||x||^2=(x|x)$ 
- ==Prod sca== $\rightarrow$ sur un espace réel : forme bilinéaire symétrique définie positive ; sur un espace complexe : forme sesquilinéaire hermitienne définie positive.
- Prod sca canon $\rightarrow$  $(X|Y)=Y^TX$ 
- Pythagore $\rightarrow$ pour une famille orthogonale, $||\sum x_i||^2=\sum||x_i||^2$
- ==Orthogonal partie F== $\rightarrow$  sev de E tq $F^{\perp}=\{y\in E|\forall x \in F, (x|y)=0\}$=$(Vec(F))^{\perp}$ et F et $F^{\perp}$ en somme directe (mais pas nécessairement supplémentaires ds E en dimension infinie)
- En dimension finie, $dim(E)=dim(F)+dim(F^\perp)$.
- Base EE orthon $\rightarrow$  tt ee $\ne \{O_E\}$ admet une base orthon (eg poly lagrange), et tt fam orthon peut être complétée en une base orthon
- Décomp x bon $\rightarrow$  $x=\sum^n_{i=1} (x|e_i)e_i$
- ==Gram-Schmidt== $\rightarrow$ $v_1=e_1/||e_1||$, $u_{k+1}=e_{k+1}-\sum_{i=1}^k(e_{k+1}|v_i)v_i$ puis $v_{k+1}=u_{k+1}/||u_{k+1}||$.
- ==Proj orthog sur F== = Vect($e_1,...e_q$) fam orthog $\rightarrow$  $p_F(x)=\sum^q_{i=1}\frac{(x|e_i)}{||e_i||^2}e_i$ ou sans ||.|| si orthon
- Inégalité Bessel $\rightarrow$  $||p_F(x)||^2 \le ||x||^2$ 
- Distance sev d(x,F)=$inf_{f\in F}||x-f||$ et $f=p_F(x)$ si proj orthog $\Rightarrow$  $d(x,F)^2=||x||^2-||p_F(x)||^2$ 
##### EE 2 : endomorphismes
- ==isométries vectorielles== $\rightarrow$ $u\in O(E)\subset GL(E)$ et $||u(x)||=||x||$ $\Leftrightarrow$ $(u(x)|u(y))=(x|y)$ $\Leftrightarrow$ l'image d'une base orthonormée est orthonormée $\Leftrightarrow$ la matrice $M$ de $u$ dans une base orthonormée est orthogonale ($M^TM=I_n$).
- inverse iso $\rightarrow$  u inv (det $\ne0$ ) et -u et $u^{-1}$ aussi iso vect
- ==caract sp det iso== $\rightarrow$ toute valeur propre complexe $\lambda$ d'une isométrie vérifie $|\lambda|=1$ ; les valeurs propres réelles sont donc $\pm1$, et $det(u)\in\{-1,1\}$.
- ==iso = bij (automorph)== $\rightarrow$  $x\in Ker(u)$ $\Rightarrow$  $||x||=0_E$ $\Rightarrow$  $Ker(u)=0_E$ or dim finie et endo $\Rightarrow$  bij
- F stable iso u $\Rightarrow$  $F^{\perp}$ stable u $\rightarrow$  $x\in F^{\perp}$, u bij, $u(F) \subset F$, dim finie $\Rightarrow$  u(F)=F $\Rightarrow$  $u^{-1}$ iso laisse stable F, donc $y\in F$, $(u(x)|y)=(x|u^{-1}(y))=0$ donc $u(x)\in F^{\perp}$
- Groupe orthogonal $O(E)$ $\rightarrow$ ensemble des isométries vectorielles de $E$, sous-groupe de $GL(E)$ stable par composition et passage à l'inverse.
- Grp Special $\perp$ $\rightarrow$  SO(n) = $O^+(n)$, ==iso vect det(M)=1== ($\ne O^-(n)$ det=-1)
- SO(2) $\rightarrow$  rotations 
$$  
R_\theta=  
\begin{pmatrix}  
\cos\theta & -\sin\theta\\  
\sin\theta & \cos\theta  
\end{pmatrix}.  
$$
- - ==Demo O(2)== $\rightarrow$ A=MAT(a,b,c,d) $\in$ O(2) $\Rightarrow$  $a^2+b^2=1$, $c^2+d^2=1$, $ac+bd=0$ donc va $\le$ 1 $\Rightarrow$  paramétrisation $a=cos(\theta)$ $\Rightarrow$ $b=sin(\theta)$ idem c,d avec $\phi$, or (3)$\Rightarrow$  $sin(\theta+\phi)=0$ donc $\phi=-\theta[\pi]$ donc deux cas $\phi=-\theta[2\pi]$ (SO(2)) et $\phi=\pi-\theta[2\pi]$ ($O^-(n)$)
- Prop $R_\theta$ $\rightarrow$ $R_\theta=R_\phi$ $\Leftrightarrow$ $\theta\equiv\phi\pmod{2\pi}$, $R_\theta R_\phi=R_{\theta+\phi}$, $R_\theta^{-1}=R_{-\theta}$, $R_\theta^k=R_{k\theta}$ $\forall k\in\mathbb Z$.
- $O^-(2)$ $\rightarrow$  symétries (donc $S_{\theta}$ sym)$$ S_\theta=\begin{pmatrix}
cos(\theta) & sin(\theta) \\
sin(\theta) & -cos(\theta) \\
\end{pmatrix}$$
- Sym/autoadj $\rightarrow$ $u$ est autoadjoint si $(u(x)|y)=(x|u(y))$ pour tous $x,y$ ; dans une base orthonormée, cela équivaut à ce que sa matrice soit symétrique.
- Si $u$ est autoadjoint, les sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux.
- Un projecteur ou une symétrie est orthogonal si et seulement s'il est autoadjoint.
- Thm spectrale $\rightarrow$ si $u$ est autoadjoint, il existe une base orthonormée de vecteurs propres et une matrice $P\in O_n(\mathbb R)$ telle que $P^{-1}MP=P^{\mathsf T}MP=D$, avec $D$ diagonale.
- ==THM sp== $\rightarrow$  M symétrique à coefficients $\mathbb{R}$ est diagonalisable, si u un endo sym d'un eve E $\Rightarrow$  $\exists$ bon de E constituée de vect propres
- Forme linéaire $\rightarrow$  $f:E \rightarrow \mathbb{R}$ linéaire, de rang 1 sauf si identiquement nulle
- THM de représentation de Riesz $\rightarrow$ si $H$ est un espace de Hilbert réel et $f$ une forme linéaire continue sur $H$, alors $\exists!y\in H$ tel que $\forall x\in H$, $f(x)=\langle x,y\rangle$.
- ==THM determinat° app par base== $\rightarrow$  $(e_i)_{i\in I}$ base de E, $(f_i)_{i\in I}$ fam de F : $\exists !u\in\mathcal L(E,F)$ tq $u(e_i)=f_i$ pour tout $i\in I$, et u inj $\Leftrightarrow$  $(f_i){i\in I}$ libre ds F; u surj $\Leftrightarrow$  $(f_i)_{i\in I}$ gen de F; u bij $\Leftrightarrow$  $(f_i)_{i\in I}$ base de F.
##### Normes:
- ==norme sur ev E== $\rightarrow$  positive, séparable ( $||x||=0$ $\Rightarrow$  x=$0_E$), homogène ($||\lambda x||=|\lambda|.||x||$), respecte IT alors (E,$||.||$) est EVN 
- Norme 1 E $\rightarrow$  $||x||_1=\sum^n_{k=1} |x_k|$
- Norme 2 sur $\mathcal{C}([a,b])$ $\rightarrow$ $||f||_2=\sqrt{\int_a^b|f(t)|^2dt}$
- Norme 2 E $\rightarrow$  $||x||_2=\sqrt{\sum^n_{k=1} |x_k|^2}$
- Norme inf $\rightarrow$  $||x||_{+\infty}=max_{1 \le k \le n}(|x_k|)$ 
- Norme CVU $\rightarrow$  ev applicat°s bornées de X ds $\mathbb{K}$ admet $||f||_{\infty}=sup_{x \in X}|f(x)|$
- ==Norme== $\rightarrow$  Je trouve ça pas NORMALE qu'il soit POSITIVE de SÉPARER ($||x||=0 \Rightarrow$ x=0) les HOMOsexuels ($||\lambda x||=|\lambda|||x||$) afin de réduire les INÉGALITÉS (triangulaire)
- CS $\rightarrow$  $|<x,y>| \le ||x||.||y||$ 
- Minowski (triang) $\rightarrow$  $||x+y|| \le ||x||+||y||$ 
- CS canon $\rightarrow$  $|\sum a_ib_i| \le \sqrt{\sum a_i^2} \sqrt{\sum b_i^2}$ 
- Minkowski canon $\rightarrow$ $\sqrt{\sum (a_k+b_k)^2}\leq\sqrt{\sum a_k^2}+\sqrt{\sum b_k^2}$
- Minkowski dans $L^2$ $\rightarrow$ $\sqrt{\int_a^b|f+g|^2}\leq\sqrt{\int_a^b|f|^2}+\sqrt{\int_a^b|g|^2}$
- Montrer qu'un ensemble est fermé $\rightarrow$ montrer que son complémentaire est ouvert, ou l'écrire comme image réciproque d'un fermé par une fonction continue.

##### Normes de Matrice:
- Si E a une structure d'algèbre (e.g. E est l'algèbre des matrices carrées d'ordre n sur $\mathbb{R}$) une norme matricielle (ou norme d'algèbre) N sur E est une norme qui respecte la structure de ce produit donc tq $N(AB)\le N(A)N(B)$ 

## Topologie

##### général
- f paire et $\mathcal{C}^2$ $\rightarrow$  f'(0)=0
- Ouvert $\rightarrow$ $A$ est ouvert si $\forall a\in A$, $\exists r>0$ tel que $B(a,r)\subset A$. L'image réciproque d'un ouvert par une fonction continue est ouverte.
- Si $B$ est fermé, alors son complémentaire $\mathbb R^2\setminus B$ est ouvert. L'image réciproque d'un fermé par une fonction continue est fermée.
- ==Voisinage== $\rightarrow$ $V\subset\mathbb R^2$ est un voisinage de $a\in\mathbb R^2$ $\Leftrightarrow$ $\exists r>0$ tel que $B(a,r)\subset V$.
- $f$ $\mathrm{C}(a\in A)$ $\Leftrightarrow$ $\forall\epsilon>0$, $\exists\delta>0$, $\forall x\in A$, $||x-a||<\delta\Rightarrow|f(x)-f(a)|<\epsilon$ $\Leftrightarrow$  $x \in \bar{B}(a,\delta)$ $\Rightarrow$  $f(x) \in \bar{B}(f(a),\epsilon)$ 
##### Calcul diff plusieurs var :
- (cof)'(x)=f'(x)c'(f(x)) cofi fi cif ((covfi fi siph)
- Si $f$ est continue, alors elle est continue séparément par rapport à chaque variable. La réciproque est fausse en général ; des dérivées partielles continues impliquent que $f$ est de classe $\mathcal C^1$.
- ==d' partielle en $x_0$ existe== $\rightarrow$  $lim _{t\rightarrow x_0} \frac{f\binom{t}{y_o}-f\binom{x_o}{y_o}}{t-x_o}$  $=\frac{\partial f}{\partial x}\binom{x_o}{y_o}=\partial_1f$ existe ($\Leftrightarrow$  $h=t-x_o$)
- f $\mathcal{C}^1$ sur ouvert $\rightarrow$  admet 2 d' part. $\mathcal{C}$ 
- Dev Taylor = ==DL1== f $\mathcal{C}^1$ en $a=\binom{x_o}{y_o}$ $\rightarrow$  $f(X)=f(a)+\partial_1f(a)(x-x_o)$$+\partial_2f(a)(y-y_o)+o(||X-a||)$ ou idem avec $a'=(x_o+h,y_0+k)$ avec un $o(||(h,k)||)$ 
- IAF $\rightarrow$  
- ==Plan tangent== $\rightarrow$  DL1(a) $\Rightarrow$  plan tangent $z=$ $f(a)+(x-x_0)\frac{\partial f}{\partial x}(x_0,y_0)+(y-y_0)\frac{\partial f}{\partial y}(x_0,y_0)$
- ==Gradient== si $f\in\mathcal{C}^1$, $\nabla f=\binom{\partial_1f}{\partial_2f}$ ; il donne la direction de plus forte croissance lorsque $\nabla f\ne0$, et $\nabla f(a)=0$ en un point critique. Dans Taylor, $f(a+h)=f(a)+\langle\nabla f(a),h\rangle+o(||h||)$.
- Si $f$ est différentiable en $a$ $\Leftrightarrow$ dérivée directionnelle selon $u$ est définie : $D_uf(a)=\lim_{t\rightarrow0}\frac{f(a+tu)-f(a)}{t}=\langle\nabla f(a),u\rangle$
- ==Jacobienne== $\rightarrow$ pour $f:\mathbb R^n\to\mathbb R^m$, $J_f(a)=\left(\frac{\partial f_i}{\partial x_j}(a)\right)\in M_{m,n}(\mathbb R)$.
- Jacob composée f,g $\mathcal{C}^1$ $\rightarrow$  donne RDlC $J_{g\circ f}(a)=J_g(f(a))J_f(a)$ 
- RdLC $\rightarrow$ si $f:\mathbb R\to\mathbb R^n$ et $g:\mathbb R^n\to\mathbb R$, alors $\frac d{dt}(g\circ f)(t)=\sum_{j=1}^n\frac{\partial g}{\partial x_j}(f(t))f_j'(t)=\langle\nabla g(f(t)),f'(t)\rangle$.
- ==RdLC 1 var== $\rightarrow$ $(u\circ v)'(t)=u'(v(t))v'(t)$ ; donc $\frac d{dt}f(x(t))=f'(x(t))x'(t)$.
- ==RdlC 2 var== $\rightarrow$  $X(t)=\binom{x(t)}{y(t)}$ alors $\frac{d}{dt}(f \circ X(t))=\frac{\partial f}{\partial x}(X(t)).x'(t)+\frac{\partial f}{\partial y}(X(t)).y'(t)$ 
- ==Hessienne== $\rightarrow$ $H_f(a)=\left(\frac{\partial^2f}{\partial x_i\partial x_j}(a)\right)_{1\leq i,j\leq n}$.
- Extremum local $\rightarrow$ $a$ est un minimum local si $\exists r>0$ tel que $\forall x\in U\cap B(a,r)$, $f(x)\geq f(a)$ ; pour un maximum local, $f(x)\leq f(a)$.
- CS pour un extremum strict $\rightarrow$ si $f\in\mathcal C^2$, $\nabla f(a)=0$ et $H_f(a)\in S_n^{++}$, alors $a$ est un minimum local strict ; si $H_f(a)\in S_n^{--}$, alors $a$ est un maximum local strict.
- CN à un extremum local intérieur $\rightarrow$ si $f\in\mathcal C^2$, alors $\nabla f(a)=0$ et $H_f(a)$ est positive semi-définie pour un minimum, négative semi-définie pour un maximum ($H_f(a)\in S_n^{+}\cup S_n^{-}$ )
- Hessienne d'une fonction $\mathcal C^2$ de deux variables $\rightarrow$ $H_f(a)=Mat(r,s,s,t)$ en tout point, par le théorème de Schwarz.
- En deux variables, à un minimum local intérieur d'une fonction $\mathcal C^2$, $det(H_f(a))\geq0$ et $tr(H_f(a))\geq0$ ; pour un maximum, $det(H_f(a))\geq0$ et $tr(H_f(a))\leq0$.
- Si $\nabla f(a)=0$ et $det(H_f(a))>0$, alors $tr(H_f(a))>0$ implique un minimum local strict, et $tr(H_f(a))<0$ implique un maximum local strict.
- C'est toujours l'inverse signe pour max min pr trace et def pos neg

---




