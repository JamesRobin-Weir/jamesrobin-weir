---
{"dg-publish":true,"permalink":"/mnemo-maths/"}
---

## Mathématiques Complètes PCSI/PC :

### Général
##### Primitives
- $\frac{1}{sin(x)}$ => ln|tan(x/2)| sur $]kπ;(k+1)π[$
- $\frac{1}{cos(x)}$ => ln|tan(x/2+π/4)| sur $]-π/2;π/2[ +kπ$ 
- $\frac{1}{((x+b)^2+a^2)}$ => $\frac1a Arctan(\frac{(x+b)}{a})$ 
- u'(x)/ch2(u(x)) => th(u(x))
- u'(x)ln(u(x)) => u(x)(ln(u(x)-1)
- $n^3=n(n-1)(n-2)+3n^2-2n$ 
- $[\![1;n]\!]$
- $\smash{{}^a_b}$
##### Polynômes
- $x^2+Ax+B=(x-\alpha _1)(x-\alpha _2)$ donne que $B=\alpha_1 \alpha_2$ et $A=-(\alpha_1+\alpha_2)$ utile lorque tu connais une racine
- R racine mult paire sur J -> $R=(X-\lambda)^m S(X)$ avec $S(\lambda) \ne 0$ alors S $\mathcal{C}^0$ change pas signe vois $\lambda$ et autres terme pos => R signe cste J
- $P(J)=0$ -> infinité racines => P=0
##### Astuces
- Intervalle peut être infini, segment non
- $\lfloor x \rfloor \le x< \lfloor x \rfloor +1$ 
- $x-1<\lfloor x \rfloor \le x$ 
- $||x|-|y|| \le |x+y| \le |x|+|y$ 
- IPP u,v C1$[a,b]$
- CDV seg: ¶ C1(I,R), f continue sur ¶(I), a,b ds I: int(¶(a)->¶(b))f(x)dx=int(a->b)f(¶(t))¶'(t)dt
- Si ¶ bij alors peut remplacer a,b par ¶-1(a), ¶-1(b)
- CDV int: phi C1(I,R), bij $]a,b[, -> ]a',b'[$
- ALPES Arctan/sin/cos, Log, Polynômes, Exponentielle, Sin/cos/tan/sh/ch (+d'->-d')
- CS $(\int_a^bfg)^2<=(\int_a^bf)^2(\int_a^bg)^2$
- CDV u=tan(t/2), cos(t)=(1-u^2)/(1+u^2), sin(t)=2u/(1+u^2), tan(t)=2u/(1-u^2)
- Sommes triangle infini -> si conv $\sum_{n=0}^{\infty} \sum_{k=0}^{n} a_{n,k} = \sum_{k=0}^{\infty} \sum_{n=k}^{\infty} a_{n,k}$
- $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$
- $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{k=1}^{n} k^3 = \left( \frac{n(n+1)}{2} \right)^2$
- $\sum_{k=1}^{n} k^4 = \frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}$
- gof surj -> g surj car surjecte de l'extérieur
- gof inj -> f inj car injecte de l'intérieur
- ITL -> f $\mathcal{C}^{n+1}(I)$ tq $|f^{(n+1)}| \le M$, $\forall (a,b)\in I^2$ : $|f(b) - f(a) - \sum_{k=1}^{n} \frac{(b-a)^k}{k!} f^{(k)}(a)| \leq M \frac{|b-a|^{n+1}}{(n+1)!}$
- Pascal -> p parmi n = p-1 parmi n-1 + p parmi n-1 mitose ++
- ==Operat°s licites inégalités== -> +/-, mult nb pos ou neg en inversant, mult tàt par termes pos, composer f° stricte croiss ou decroiss en inversant (si pas strict inégalités larges)
- Min/max eq $x^2$ -> derivée =0 => $x=-\frac{b}{2a}$ 
##### DÉVELOPPEMENTS
- $e^x \approx \sum_{k=0}^{n} \frac{x^k}{k!}$
- $\sin(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$
- $\cos(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k}}{(2k)!}$
- $\tan(x) \approx \sum_{k=1}^{n} \frac{B_{2k}(2k)!}{(2k)!} \frac{x^{2k-1}}{(2k-1)!}$, où $B_{2k}$ est le $2k$-ième nombre de Bernoulli.
- $\arctan(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{2k+1}$
- $\frac{1}{1+x} \approx \sum_{k=0}^{n} (-1)^k x^k$
- $\frac{1}{1-x} \approx \sum_{k=0}^{n} x^k$, R=1 sur $\mathbb{C}$  
- $\ln(1+x) \approx \sum_{k=1}^{n} (-1)^{k-1} \frac{x^k}{k}$
- $\ln(1-x) \approx - \sum_{k=1}^{n} \frac{x^k}{k}$
- $(1+x)^a \approx \sum_{k=0}^{n} \binom{a}{k} x^k$
- $\cosh(x) \approx \sum_{k=0}^{n} \frac{x^{2k}}{(2k)!}$
- $\sinh(x) \approx \sum_{k=0}^{n} \frac{x^{2k+1}}{(2k+1)!}$
- $\frac{1}{\sqrt{1-x}}$=$\sum^{+\infty}_{n=0} \frac{1}{2^{2n}} \binom{2n}{n} x^n$ de Nollan
##### Trigonométrie
- cos racisme + que -
- sin together ++
- sint+cost=sqrt(2)cos(π/2-t)
- Tin Tin T'1 TinTin: $tan(a \pm b)=\frac{tan(a) \pm tan(b)}{1 \mp tan(a)tan(b)}$ 
- 0,1,2,3,4 divide 4, sqrt -> gives values from center of trig circle

### Sommes
##### Series:
- Prod Cauchy -> $\sum u_n$ et $\sum v_n$ CVA -> $\sum w_n$, $w_n=\sum u_k v_{n-k}$ CVA vers prod sommes $u_n$, $v_n$ 
- ==Somme geo== -> $\sum^n_{k=p}q^k=q^p \frac{1-q^{n+1-p}}{1-q}$ 
##### Series entières :
- Lemme d'Abel -> $\exists z_0 \in \mathbb{C}^*$ tq $(a_nz_0^n)$ est bornée => $\forall z$ tq $|z|<|z_0|$ , $|a_nz^n|=O(|\frac{z}{z_0}|^n)$ donc $\sum a_nz^n$ CVA
- RC -> sup{r pos tq $a_nr^n$ bornée} donc si $a_n$ bornée mais tends pas vers 0 alors R=1
- SE $\mathcal{C}^{+\infty}$ sur int ouvert conv $]-R;R[$
- $\sum a_nz^n$ RC=R -> RC pr $z^{2n}$ est $\sqrt{R}$ 
- $a_n$~$b_n$ -> R égaux (et comp o/O donne min)
- Série entière dérivée/prim -> à même RC
- ==Produit Cauchy SE== -> $\sum b_kx^k$, $\sum b_kx^k$ CN abs => $\sum c_nx^n$ conv vers $(\sum^{\inf}_{n_0} a_k) (\sum^{\inf}_{n_0}b_k)$ where $c_n=\sum^n_{n_0} a_kb_{n-k}$ et $R \ge min(R_1,R_2)$ ou pr z complexe $|z|\ge min(R_1,R_2)$
- Int SE et int -> sur seg sans pb
- $\sum (a_k+b_k)x^k$ a $R = min(R_1,R_2)$ si $R_1 \ne R_2$, else $R \ge R_1=R_2$ 
- f DSE -> $f^{(k)}(x)$ $=\sum_{n=0}^{+\infty}\frac{(n+k)!}{n!}a_{n+k}x^n$
- Serie Taylor f° -> $a_n=\frac{f^{(n)}(0)}{n!}$ par dérivat°/unicité DSE
- f im/pair -> $a_{2n}=0$ / $a_{2n+1}=0$ 
- $R_n(x)=_{x \rightarrow 0}o(x^n)$ par def
- ==TYRI== -> $R_n(x)=\frac{1}{n!} \int_{0}^x (x-t)^nf^{n+1}(t)dt$ et si il existe r>0 tq $\forall x \in ]-r;r[$, $R_n(x) \rightarrow_{n \rightarrow + \infty} 0$ <=> f est DSE (sinon utilise ITL maj va)
- ==Binôme généralisé== -> $(1+x)^{\alpha} \approx \sum_{n=0}^{+\infty} \frac{\prod^n_{k=0}(\alpha-k+1)}{n!} x^n$ pour $\alpha$ entier ça conv sur $\mathbb{R}$ sinon sur $]-1;1[$ 

### Fonctions
##### Général
- f $\mathcal{D}^2$ concave/vexe -> <=> $|f''| >0$ stricte
- Courbe > tangete -> <=> termes ordre supérieur DL positifs
- TVI -> f C, f(a)f(b)<0 => £sol f(x)=0 (!sol f mono str)
- TBA -> f C sur $[a,b]$ (ou tt espace fermé bornée) est bornée
- THM bij -> f C mono str I => f et f-1 bij C I
- Rolle -> f C + d', f(a)=f(b) => £c<$[a,b]$ tq f'(c)=0
- EAF -> f C d' $[a,b]$ => £c tq f(b)-f(a)=(b-a)f'(c)
- IAF -> f lipsch => |f(x)-f(y)|<=M(x-y), M peut être un majorant de la dérivée indep de x,y
- Leibniz -> $(fg)^{(n)}=\sum_{n=0}^n\binom n k f^{(k)}g^{(n-k)}$ 
- ITY -> |f(x)-S(0->n)(x-a)^k.f(k)(a)/k!|<=M.(|x-a|^n+1)/(n+1)!
- ==TYRI== -> $f(x)-\sum _{k=0}^n \frac{f^{(k)}(y)}{k!} (x-y)^k$= $\int_y^x \frac{f^{(n+1)}(t)}{n!} (x-t)^n\ dt$  entre y et x deux variables
- ==TYRI n,n+1== -> $f(n+1)=\sum _{k=0}^N\frac{f^{(k)}(n)}{k!}+$ $\int_n^{n+1} \frac{f^{(N+1)}(t)}{N!} (n+1-t)^N dt$ 
- Carac sec lim: a,l ds R+-8, f->l en a ssi Vun ->a, f(un)->l
- f C I ssi en tt pt a de I, f(x)->f(a)
- D => C et D(n) => C(n-1)
- Arcsin 1-, arccos 2- (c'est un peu + moche)
- C(k) ssi k fois derivable et f(k)(x) C
- C(k) difféomorphisme: reciproque f° C(k), bij sur I tq f'!=0 est C(k) sur f(I)
- f=Oa(g) ssi f/g bornée a, o ssi f/g->0 en a
- DL0 continue, DL1 derivable
- Prop : Intégrer un DL donne un DL

##### Suites def. par fonction
- uno ds I, I stable f => un(n>=no) ds I et définie 
- x ds I, f(x)>=x => un croiss (vis versa)
- f croiss => $u_n$ mono à partir $n_o$
- f décroiss => $u_{2n}$, $u_{2n+1}$ mono sens inverse
- Si $u_{n+1}=f(u_n)$, où f:D→R est continue et $u_0\in I$
1) Etudier f sur $\mathcal{D}_f$ (mono, croissance,…)
2) Résoudre eq aux limites $f(a)=a$, que doit satisfaire éventuelle limite de $u_n$
3) Dét int $I$ stable par f sur lequel f est mono, et tel que $u_0\in I$. On sait alors que $u_n\in I$pour tout $n\ge 0$. Svnt le tableau de variations de f donne la réponse. ($\exists$ des cas où on ne peut pas y arriver pour $u_0$, mais pr $u_1$, ou $u_2$)
4) a) f est croissante sur $I$ => (un) est mono sur $I$, le sens de monotonie est donné par le signe de $u_1−u_0$. Si (un) est bornée (parce que $I$ l'est par exemple) => THM lim mono donc $u_n \rightarrow l$, sinon si (un) croiss, et $u_0>l$ sol de f(l)=l alors $u_n$ div vers $+\infty$
4) b) f est décroiss sur $I$ => poser $g=f∘f$ croissante sur $I$ et $v_n=u_{2n}$ et $w_n=u_{2n+1}$ alors (vn) et (wn) tq $v_{n+1}=g(v_n)$ et $w_{n+1}=g(w_n)$ avec g croiss sur $I$. Étudier (vn) et (wn) comme ds le cas précédent. Rappelons que la suite (un) converge si et seulement si (vn) et (wn) convergent vers la même limite.

##### SUITES DE FONCTION
- CVS -> $\forall x \in J, \forall \epsilon >0,\exists N,n>N, |fn-f|< \epsilon$ 
- CVU -> $\forall \epsilon >0,\exists N,\forall x \in J,n>N, |fn-f|< \epsilon$ <=> $sup|f_n-f|\le \alpha_n \rightarrow 0$ avec $\alpha_n$ bornée sur J
- CVU ts -> => CVS
- ==Thm inversion lim $\int$ int J== -> fn CVU f, fn $\mathcal{C}^0$ => inverti lim et $\int$ sur J
- ==Dérivat° $\mathscr{C}^p$ suite de f°== -> $f_n \mathscr{C}^p$, $k \in [[0,p-1\|0,p-1]]$, $f_n^{(k)}$ CVS, $f_n^{(p)}$ CVU =>$f \ \mathscr{C}^p$ et $f_n^{(k)}$ CVS $f^{(k)}$ et cas p non
- HP: THM inv lim -> $f_n$ CVU f et $f_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} b_n$ => $\sum b_n$ conv et ${}^{lim}_{x\rightarrow a}f(x)={}^{lim}_{n\rightarrow +\infty} \ {}^{lim}_{x\rightarrow a} f_n(x)$= ${}^{lim}_{n\rightarrow +\infty} b_n$ 
##### SÉRIES DE FONCTIONS
- $\sum u_n$ ==CVU (ts) J== -> $\sum u_n$ CVS et $(R_n)_{n \ge n_0}$CVU (ts) vers 0 (outil : CSSA |Rn|<|Un+1| puis passage sup)
- $\sum u_n$ ==CVN== -> <=> $\forall u_n$ borné et $\sum ||u_n||_{+\infty}$ conv
- ==CVN Serie TG Un== -> $\exists \sum A_n$ convergent tq $A_n$ positif et $(An)\ge |u_n(x)|$ => $\sum u_n$ conv tq Un bornée et $\sum ||u_n||_{inf}$ conv
- ==THM d' C0 Somme== -> $\sum u_n$ CVU et $u_n \ \mathscr{C}$ => $\sum u_n \ \mathscr{C}$
- CVU et lim $a \in I$ -> intervertir lim $\sum$ en a
- ==Inv lim/$\sum$ pr a $\in I \cup\bar{I}$== -> $\sum u_n$ CVU et $\forall n$, $u_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} l_n$ => conv/égal $\sum l_n = \smash{{}^{\ lim}_{x\rightarrow a}}(\sum u_n(x))$
- ==Intégration tàt sur seg== -> $\underset{n \ge n_0}{\sum} u_n$ CVU $[a,b]$ et $u_n$ $\mathscr{C}([a,b])$ => $\sum_{n= n_0}^{+\infty} \int_a^b u_n$ $\mathcal{C}^0$ et interv $\int$ et $\sum$ (fonctionne aussi a,b infinis)
- ==THM d' C1== -> $u_n$ $\mathcal{C}^1$, $\sum u_n$ CVS, $\sum u_n'(x)$ CVU (ts) => $\sum u_n$ $\mathcal{C}^1$ et $(\sum u_n)'=\sum u_n'$ 
- ==THM d' $\mathscr{C}^p$== -> $u_n \in \mathscr{C}^p$ et $\sum u_n^{(p)}$ CVU (ts) I, $k \in [[0,p-1\|0,p-1]] , \ \sum u_n^{(k)}$ CVS => $\sum u_n$ $\mathscr{C}^p$ et o?interv d' et $\sum$ 
- Comp Serie-Int -> f C, mono, positive alors serie TG f conv ssi int gen f conv
- Inégalité sur f C, mono, decrois -> $\int_k^{k+1}f \le f(k) \le \int_{k-1}^k)f$ 
- Critère de Leibniz = CSSA
- $\underset{1 \leq j \leq n}{\max}$ 

##### INTÉGRALES À PARAMÈTRES
- Transfo Laplace -> $L(f)(p)=\int ^{+\infty}_0 f(t)e^{-pt}dt$ 
- Transfo Fourier -> $f(\omega)=\int^{+\infty}_{\infty}f(t)e^{-i\omega t}dt$ 
- ==Conv Dom interv J== -> $f_n$ Cpm et CVS f Cpm, $\exists \varphi(t)$ L1 tq $|f_n(t)| \le \varphi(t)$ => $f_n$ et $f$ L1, $\int_J f=\int_J lim(f_n)=lim(\int_J f_n)$
- ==Int tàt généralisé== -> $\sum f_n$ Cpm CVS $f$ Cpm tq $f_n$ L1 et $\sum \int |f|$ conv => $f$ L1 et $\int f=\int \sum f_n =\sum \int f_n$ 
- ==Conv Dom para== -> $f(x,t) \rightarrow_{x \rightarrow a} l(t)$, $t \rightarrow f(t,x)$ et l(t) Cpm et $f$ dom => $l(t)$, $t \rightarrow f(x,t)$ L1 et interversion limite $x \rightarrow a$ intégrale
- ==Thm $\mathcal{C}$  sous $\int$== -> $t \rightarrow f(x,t)$ Cpm (pr intégrer), x->f(x,t) $\mathcal{C}^0$ (hyp nat) et dom f (aussi sr tt seg) => $x \rightarrow\int f(x,t)dt$ def, $\mathcal{C}$ 
- ==Thm d' $\mathcal{C}^1$== -> $t \rightarrow f(x,t)$ L1, $x \rightarrow f(x,t)$ $\mathcal{C}^1$, $t \rightarrow \frac{\partial f}{\partial x}(x,t)$ Cpm et dominé => $g :x \rightarrow \int f(x,t)dt$ def $\mathcal{C}^1$ et $g' : x \rightarrow \int \frac{\partial f}{\partial x}(x,t) dt$ 
- ==Thm d' Cp== -> $x \rightarrow f(x,t)$ $\mathcal{C}^p$, $k \in [0,p-1], t \rightarrow \frac{d^kf}{dx^k} \ \mathcal{L}^1$, et $t \rightarrow \frac{d^pf}{dx^p}$ $\mathcal{Cpm}$ et dom ce dernier => $g: t \rightarrow \int{f} \ est \ \mathcal{C}^p$ $et \ g^{(i)}: x \rightarrow \int{\frac{d^if}{dx^i}(x)dt}$ 
### Probabilités
##### Événements
- $P$ est une probabilité<=>
- A,B indep -> $P(A \cap B)=P(A)P(B)$
- Tribu $\mathbb{A}$ sur $\Omega$ -> $\Omega \in \mathbb{A}$, et $\forall A \in \mathbb{A}$, $\bar{A} \in\mathbb{A}$. De plus $\forall$ réunions et intersections finies/ dénombrables de chaque famille $(Ai)_{i \in I}$ est dedans
- Plus petite tribu -> $\{\varnothing, A, \bar{A}, \Omega\}$
- Sigma additivité (dénombrable) -> Soit $(A_n)$ une suite d'eve 2 à 2 incompatibles $P(\bigcup_{n \in \mathbb{N}}\{A_n\})=\sum_{n=0}^{+\infty} P(A_n)$ 
- ==Sous additivité/inégalité boole== -> $P(\bigcup_{n \in \mathbb{N}}\{A_n\}) \le \sum_{n=0}^{+\infty} P(A_n)$ pour n'importe quels événements
- $P(A \cap B) = P(A) \cdot P(B|A)= P(A) \cdot P(B)$ pour des événements indépendants
- ==Proba conditionelles== $P(A|B) = \frac{P(A \cap B)}{P(B)}$ si $P(B) > 0$
- ==Bayes== $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$ si $P(A) > 0$ et $P(B) > 0$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- $P(A \cap B \cap C) = P(A) \cdot P(B|A) \cdot P(C|A \cap B)$ 
- ==Loi conjointe== $P_{(X,Y)}(x_i,y_j)=P(X=x_i, Y=y_j)$ et alors lois X,Y sont loi marginales
- $P(X=x_i)=\sum^q_{j=1}P(X=x_i, Y=y_j)$ on retouve LM avec LC
- Si X,Y indep, loi conjointe = prod lois marginales
- ==Loi des grands nombres== : la moyenne d'un grand nombre d'événements aléatoires tend à se rapprocher de l'espérance théorique
- ==Loi des probabilités totales== : Si $A_1,A_2,...,A_n$ sont des événements mutuellement exclusifs et exhaustifs (c'est-à-dire que $Ai∩Aj=∅$ pour $i≠j$ et $∪_{i=1}^nA_i=Ω$ <=> $\bigsqcup _{i=1}^n A_i= \Omega$) donc est un SCE : $\forall$ B , P(B)=$\sum P_{Ai}(B)P(Ai)$ 
- Union evénements disjoints -> Proba union est somme probas
- Intersection événements indep -> Proba intersect° est prod probas
- Thm $\mathcal{C}$ (dé)croiss -> $(A_n)$ (dé)croissant pr l'inclusion $A_k \subseteq A_{k+1}$ (ou inverse) alors $P\left(\bigcup_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} P(A_n)$ (sinon intersection)
- Complementaire union -> $\overline{\bigcup A_n}=\bigcap \overline{A_n}$ 
- $\bar{A_n}$ mut indep -> $A_n$ mut indep
##### Variables aléatoires
- X va -> Im(X) au plus dénombrable (par réunion ens denomb), et X=k s'exprime en fonction d'événements
- Thm Fubini -> $\forall$ fam sommable $(u_{i,j})$ on peut invertir $\sum$ sur i et sur j
- $\sum a_ib_j$ sommables -> $=\sum a_i \sum b_j$ (Cauchy)
- Conv séries doubles -> $\forall (a_{i,j})$ tq $\forall i\in\mathbb{N}$, $\sum_{j\in\mathbb{N}}a_{i,j}$ CVA et $\sum_{i\in\mathbb{N} }\sum_{j=0}^{+\infty}|a_{i,j}|$ conv alors (a_{i,j}) sommable et peut inverser sommes
- VA ==discrète== -> $X(\Omega)$ au plus dénombrable
- $E(X) = \sum_{x_i} x_i  P(X = x_i)$ est linéaire $E(aX + b) = a \cdot E(X) + b$
- ==Formule transfert== -> f def X($\Omega$) $E(f(X))= \sum f(x) P(X=x)$ idem pr couple $P(X=x,Y=y)$ et n-uplet
- ==Cauchy-Swartz proba== -> $E(XY)^2 \le E(X^2)E(Y^2)$ avec égalité si X,Y proportionels et $|cov(X,Y)| \le \sigma(X)\sigma(Y)$ avec égalité X=aY+b
- $V(X) = E((X-E(X)^2)$ $= \sum_{x_i} (x_i - E(X))^2 \cdot P(X = x_i)$ pas linéaire $V(aX + b) = a^2 \cdot V(X)$, et $V(X)=\sigma(X)^2$ 
- V.A. centrée réduite -> V(X)=1 et E(X)=0
- Centrer et réduire une VA -> $\frac{X-E(X)}{\sigma(X)}$ 
- ==König-Huygens== -> X espérance alors $V(X) = E(X^2) - [E(X)]^2\ge 0$
- X admet moment ordre p -> $E(X^p)=MOp$ finie (X admet MOp => MOq pr q $\le$ p)
- X, Y VADR MO2 -> XY admet MO1
- ==Covariance== -> $Cov(X,Y) = E(XY) - E(X)E(Y)=$ $E((X-E(X))(Y-E(Y)))$ et cov est forme bilinéaire sym positive (pas prod sca car pas définie positive)
- $\mathbb{V}(X + Y) = \mathbb{V}(X) + \mathbb{V}(Y) + 2 \mathrm{Cov}(X,Y)$ et cov nulle si X,Y indep => $V(X)=Cov(X,X)$
- Corrélation ->  $Corr(X,Y) = \frac{Cov(X,Y)}{\sqrt{V(X) \cdot V(Y)}}$
- ==Lemme coalitions== $(X_i)$ VA mut indep -> $\forall f_i$ def sur $Im(X_i)$, VA $(f_i(X_i))$ sont indep
- ==Inégalité Markov== -> $\forall a >0, \mathbb P(Z\geqslant a)\leqslant\frac{\mathbb{E}(Z)}{a}$
- Bienaymé-Tchebychev -> $\mathbb{P}\left(\left|X-\mathbb{E}[X]\right| \geq \epsilon \right) \leq (\frac{\sigma}{\epsilon})^2$
- Tout VADR a val finies admet espérance finie
- VA mutuellement indep <=> proba n'importe quel intersection est le produit des probas
##### Fonctions génératrices
- f° gén RC -> $\ge 1$ , et CVN sur $\bar{D}(0,1)$ disque fermée, $G_X(t)=E(t^X)$, $\mathcal{C}[0,1]$ et $\mathcal{C}^{+\infty}]0,1[$ 
- loi X f° gén -> $P(X=n)=\frac{G_X^{(n)}(0)}{n!}$ comme TY
- E f° gén -> MO1 => $G_X'(1)=E(X)$, MO2 => $G_X''(1)=E(X(X-1))=E(X^2)-E(X)$ 
- V f° gén -> MO2, $V(X)=G_X''(1)+G_X'(1)-(G'_X(1))^2$
- f° gen X+Y pr X,Y indep -> $G_{X+Y}=G_XG_Y$ 
##### Lois Usuelles
- ==Loi uniforme== -> $P(X=x) = \frac{1}{n}$ , $E(X) = \frac{n+1}{2}$, $V(X) = \frac{(n^2-1)}{12}$,  $G_X(t) = \frac tn \frac{1-t^n}{1-t}$ ou 1 si t=1
- ==Bernoulli== -> $P(X=x) = \begin{cases} p & \text{si } x = 1 \\ 1-p & \text{si } x = 0 \end{cases}$, $E(X) = p$, $V(X) = p(1-p)$, $G_X(s) = 1 - p + ps$
- ==Loi binomiale== -> $P(X=k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$, $E(X) = np$, $V(X) = np(1-p)$, $G_X(s) = (1-p + ps)^n$
- ==Loi de Poisson== -> $P(X=k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!}$, $E(X) = \lambda$, $V(X) = \lambda$, $G_X(s) = e^{\lambda(s-1)}$ avec $\lambda > 0$ 
- Poisson approxime binomiale -> si n grand, p petit, $np \approx \lambda$ car si p ~ $\frac{\lambda}{n}$ alors proba bin tends vers proba poisson
- ==Loi géométrique== -> $P(X=k) = q^{k-1}p$, $E(X) =\frac{1}{p}$, $V(X)=\frac{q}{p^2}$, $G_X(t)=\frac{pt}{1-qt}$ 
- $X \rightarrow \mathcal{G}(p)$ <=> $P(X>X)=(1-p)^k$ 
- Loi géo sans mémoire -> sachant (X>k), X-k suit même loi X <=> $X \rightarrow \mathcal{G}(p)$ 
- Loi de Rademacher -> $P(X=1)=1/2=P(X=-1)$, $E(X)=0$, $V(X)=1$ 
- Additivité loi de poisson pr $X,Y\rightarrow \mathcal{P}(\lambda), \mathcal{P}(\mu)$ -> $X+Y \rightarrow \mathcal{P}(\lambda + \mu)$ 
- Formule antirépartition $X$ VARD finie tq $X(\Omega) \subset [\![0;N ]\!]$ -> $\mathbb{E}(X)=\sum_{k=0}^{N-1}\mathbb{P}(X>k)$ 
- Loi normale $\mathcal{N}(\mu, \sigma^2)$, -> distrib $\mathbb{P}$ $\mathcal{C}$ définie par $\mu$ (moy) et $\sigma^2$ (var) : $f(x)=\frac{1}{\sigma \sqrt{2\pi}} e^{−\frac{(x−μ)^2​}{2\sigma^2}}$

## Matrices
##### Général
- Matrice compagnon -> $\chi_M=X^p+\sum_{k=0}^{p-1} a_kX^k$ démo $(XI_p-M)$ ~ $L_1=L_1+\sum$ donne P(x)
$$ M=
\begin{pmatrix}
0 & \cdots & 0 & -a_0 \\
1 & \ddots & \vdots & \vdots \\
 & \ddots & 0 & -a_{p-2}\\
(0) &  & 1 & -a_{p-1} \\
\end{pmatrix}
$$
- $M^2=I_n$ -> M est un sym car f° s associé car $s \circ s=id_E$ caract sym
- vp $A^2$ si A sym reel -> $A=PDP^T=A^T$ donc $A^2=PD^2P^T$ donc vp $A^2$ sont vp A au carré
- dev. poly caract -> $\lambda \mu =\frac{(\lambda+\mu)^2-\lambda^2-\mu^2}{2}$ sert quand dev $\chi_A=X^{n-2}(X-\lambda)(X-\mu)$=$X^n-(\lambda+\mu)X^{n-1}+\lambda\mu X^{n-2}$ 
- ==Invariants similitude== -> tr, det, $\chi$, rg, sp
- Mat sym -> fonction associé est endomorphisme
- det(AB) -> = det(A)det(B)
- ==Trace Proj== -> Tr(P)=rg(P) car $sp(B)\in \{0,1\}$ 
- $B^2=B$ et B sym -> b canon associé B proj $\perp$ 
##### Mat orthog (= isométrie EE)
- $M \in O_n(\mathbb{R})$ -> $M^TM=I_n$ 
- $det(M)={\pm 1}$ -> $det(MM^T)=det(M)det(M^{-1})$=$det(M)^2= det(I_n)$ 
- $sp(A)\subset \{-1,1\}$ -> symétrie
##### Réduction
- Poly caract -> $\chi_M = X^n-tr(M)X^{n-1}+$...$+(-1)^n det(M)$ 
- Prop Sep -> $E_{\lambda}=Ker(u-\lambda id)$ et $\oplus_{\lambda \in Sp} E_{\lambda}$ et $1 \le dim(E_{\lambda}) \le m(\lambda)$ 
- ==Diag Sep== -> $\oplus_{\lambda \in Sp} E_{\lambda}=E$ <=> dim(E)=$\sum dim(E_{\lambda})$ <=> mat diagonalisable
- ==Diag $\chi_M$== -> CS scindé racines simples, CNS scindé et $\forall \lambda_i$,  $dim(E_{\lambda_i})=m(\lambda_i)$ 
- ==Diag poly annulateu==r -> CS scindé racines simples
- THM spectrale u autoadj
- ==M (def) pos== -> vp de M (strict) supérieurs à 0 alors $M\in S_n^+$, inverse pour def neg, 
- rg(u)=1 alors diag ssi trace non nulle
- Si range pas maximale alors 0 valeur propre: démo photo valentine, dim(KerA)=n-1 alors 0 vp de dim au moins n-1 
- Si dim(KerA)=n-1 alors $(X-0)^{n-1}$ divise le polynôme caractéristique donc il n'y a aucun terme de dimension $<n-1$ donc $X(A)=X^{n-1}(X+\alpha)$ or en développant $\alpha =-tr(A)$ 
- Hamilton-Cayley -> $\chi_A$ est poly annul A
- ==Trigonalisable== -> poly caract scindé
## Algèbre générale
##### Algèbre PCSI
- Il y a $n^p$ aplications de $[[1,p\|1,p]] \ ds \ [[1,n\|1,n]]$ 
- Injecte toi un max d'alcool, surjette un minimum d'eau
- Inj <=> Ker={0}, surj <=> Im=F 
- Inversible -> 0 pas vp
- Somme dir = FnG={0} = decomp unique
- ==proj ortho g== sur F sev E -> $x=x'+x''$ avec $x'\in F$, $x''\in F^{\perp}$ alors $p(x)=x'$ et $x' \perp x''$ <=> $||p(x)|| \le ||x||$ ==caractérisat==°
- ==Relat° s,p== -> $u \in E$, $F \subset E$ alors $p_F(u)=\frac{1}{2}(s_F(u)+u)$ lie projeté sur F et la réflexion (symétrie) par rapport à F
![markup_1000023084.jpg](/img/user/markup_1000023084.jpg)
- prod sca canon -> $(x|y)=\sum_{i=1}^n x_iy_i$ ds $\mathbb{R}^n$ et $\sum_{i=1}^n \overline{x}_iy_i$ ds $\mathbb{C}^n$
- Soit $F=\{x \in E| \sum
{ #n_}
{i=1}x_i=0\}$ -> $F=Vect(e_1-e_2, e_1-e_3, ... , e_1-e_{n})$ car fam libre card n-1 gen et $x=e_1\sum
{ #n_}
{i=1}\alpha_i- \sum
{ #n_}
{i=1}\alpha_i e_i$ donc $\sum x_i=0$ 
- ==endo u bij <=> surj <=> inj== -> $dim(ker(u))=0$, THM rg $dim(E)=dim(Im(u))$ or $Im(u) \subset E$ => Im(u)=E => f est surjective => f bij
- Bases -> normée VS orthogonal << orthonormée (les deux)
##### Géométrie
- s sym / F // G -> $\forall x = f+g$, $s(x)=f-g$ <=> $s(s(x))=x$ 
- p proj sur F // G -> $\forall x = f+g$, $p(x)=f$ <=> $p(p(x))=p(x)$ 
- sym dim finie n -> symétrie orthog / à un hyperplan F = réflexion, si dim(F)=n-2 = renversement
- p proj 
- $\det(\vec{u}\vec{v})=0$ ssi $\vec{u},\vec{v}$ colineaires
- det que pour mat $\in M_n(K)$
- $\vec{u}.\vec{v}=0$ ssi $\vec{u}, \vec{v}$ orthog
- pour determiner l'orthog d'une droite $\Delta$prendre un vecteur dir resultant de la difference des coord de 2 pts de $\Delta$
- $M \in Cercle$ de diametre AB ssi $\vec{AM}.\vec{BM}=0$
- $\alpha a+\beta b+\gamma c=l$ est un plan ssi $(\alpha,\beta, \gamma) \ne (0,0,0)$ et alors ce vecteur est orthog (demo: prendre u ds plan, prod sca avec $(\alpha,\beta, \gamma)$ doit faire $l$ )
- $\vec{u}$^$\vec{v}$=$u.v \sin(\theta)$ et prod sca avec cos
- Plan F=Vect(a,b) de $\mathbb{R}^3$ -> $u\in F$ <=> det(u,a,b)=0 donne eq cart du plan
- Cart ax+by+cz=0 -> e=(a,b,c) est vect normale au plan car $u\in F$ <=> $(u|e)=0$ 
- Soit p proj sur F plan $\mathbb{R}^3$, h proj sur $F^{\perp}$ -> $\forall x \in \mathbb{R}^3$, $h(x)+p(x)=x$ permet de remonter à la proj à partir du vect orthog d'un plan cartésien (puis la sym avec la relat° fond)

##### EE 1 : prop
- espace eucl -> EV reel dim finie muni <.> 
- espace prehilb -> ee dim infinie, $\mathbb{R}$ ou $\mathbb{C}$, pas nécessairement complet
- espace complet -> espace metrique (admet distance) ou suites Cauchy conv
- norme-sca -> $||x||^2=(x|x)$ 
- ==Prod sca== -> sym bilin ($<u+\lambda v,w>=<u,w>$+$\lambda<v,w>$ ) def pos ($<x,x> \ge 0$ et $<x,x>=0=>x=0$ ) (to scale society, il faut que tu "semble blanc de peau")
- Prod sca canon -> $(X|Y)=Y^TX$ 
- Pythagore -> pr fam orthog $||\sum x_i||=\sum ||x_i||$ 
- ==Orthogonal partie F== -> sev de E tq $F^{\perp}=\{y\in E|\forall x \in F, (x|y)=0\}$=$(Vec(F))^{\perp}$ et F et $F^{\perp}$ en somme directe (mais pas nécessairement supplémentaires ds E en dimension infinie)
- dim orthog partie -> dimE=dimF+dim$F^{\perp}$ 
- Base EE orthon -> tt ee $\ne \{O_E\}$ admet une base orthon (eg poly lagrange), et tt fam orthon peut être complétée en une base orthon
- Décomp x bon -> $x=\sum^n_{i=1} (x|e_i)e_i$
- ==Gram-Schmidt== -> $v_1=e_1/||e_1||$, $u_{k+1}=e_{k+1}-\sum_{i=1}^k(e_{k+1}|v_i).v_i$ puis $v_k+1=u_{k+1}/||u_{k+1}||$ est la famille
- ==Proj orthog sur F== = Vect($e_1,...e_q$) fam orthog -> $p_F(x)=\sum^q_{i=1}\frac{(x|e_i)}{||e_i||^2}e_i$ ou sans ||.|| si orthon
- Inégalité Bessel -> |$|p_F(x)||^2 \le ||x||^2$ 
- Distance sev d(x,F)=$inf_{f\in F}||x-f||$ et $f=p_F(x)$ si proj orthog => $d(x,F)^2=||x||^2-||p_F(x)||^2$ 
##### EE 2 : endomorphismes
- ==iso-métries vect = même mesure (norme)== -> $u \in O(E) \in GL(E)$ tq $||u(x)||=||x||$ <=> $(u(x)|u(y))=(x|y)$ <=> u(bon) est bon (directe si det(u)=1) <=> $\exists$ ou $\forall$ bon mat M de u orthog ($MM^T = I_n$)
- inverse iso -> u inv (det $\ne0$ ) et -u et $u^{-1}$ aussi iso vect
- ==caract sp det iso== -> sp $\in$ {-1,1} car $||u(x)||=||x||=||\lambda|.||x||$ => det $\in$ {-1,1}
- ==iso = bij (automorph)== -> $x\in Ker(u)$ => $||x||=0_E$ => $Ker(u)=0_E$ or dim finie et endo => bij
- F stable iso u => $F^{\perp}$ stable u -> $x\in F^{\perp}$, u bij, $u(F) \subset F$, dim finie => u(F)=F => $u^{-1}$ iso laisse stable F, donc $y\in F$, $(u(x)|y)=(x|u^{-1}(y))=0$ donc $u(x)\in F^{\perp}$
- Group $\perp$ O(E) -> ensemble des iso $\subset GL_n(E)$, ens stable par composit°
- Grp Special $\perp$ -> SO(n) = $O^+(n)$, ==iso vect det(M)=1== ($\ne O^-(n)$ det=-1)
- SO(2) -> rotations $$ R_\theta=\begin{pmatrix}
cos(\theta) & -sin(\theta) \\
sin(\theta) & cos(\theta) \\
\end{pmatrix}$$
- ==Demo O(2)== -> A=mat(a,b,c,d) $\in$ O(2) => $a^2+b^2=1$, $c^2+d^2=1$, $ac+bd=0$ donc va $\le$ 1 => paramétrisation $a=cos(\theta)$ donc $b=sin(\theta)$ idem c,d avec $\phi$, or (3)=> $sin(\theta+\phi)=0$ donc $\phi=-\theta[\pi]$ donc deux cas $\phi=-\theta[2\pi]$ (SO(2)) et $\phi=\pi-\theta[2\pi]$ ($O^-(n)$) 
- Prop $R_\theta$ -> $R_\theta=R_\phi$ => $\theta=\phi [2\pi]$, $R_\theta R_\phi=R_{\theta+\phi}$, $R_\theta^{-1}=R_{-\theta}$, $R_\theta
{ #k}
=R_{\theta k}$ 
- $O^-(2)$ -> symétries (donc $S_{\theta}$ sym)$$ S_\theta=\begin{pmatrix}
cos(\theta) & sin(\theta) \\
sin(\theta) & -cos(\theta) \\
\end{pmatrix}$$
- Sym/autoadj -> u(E) tq $(x|u(y))=(u(x)|y)$ <=> M tq $\exists$ bon ou M sym
(( u<S alors sep orthog))
- Proj et sym sont orthog si < S(E)
- Thm spectrale -> u autoadj => u diag ds bon vecteurs propres, et P<O(E), P-1MP=tPMP=D
- ==THM sp== -> M symétrique à coeffients $\mathbb{R}$ est diagonalisable, si u un endo sym d'un eve E => $\exists$ bon de E constituée de vect propres
- Forme linéaire -> $f:E \rightarrow \mathbb{R}$ linéaire, de rang 1 sauf si identiquement nulle
- THM de représentation de Riesz -> H espace de Hilbert, f forme linéaire $\mathcal{C}$, def sur H => $\exists ! y \in H$ tq $\forall x \in H$, f(x)=⟨x,y⟩
- ==THM determinat° app par base== -> $(e_i)_{i\in I}$ base de E, $(f_i)_{i\in I}$ fam de F : $\exists !u\in\mathcal L(E,F)$ tq $u(e_i)=f_i$ pour tout $i\in I$, et u inj <=> $(f_i){i\in I}$ libre ds F; u surj <=> $(f_i)_{i\in I}$ gen de F; u bij <=> $(f_i)_{i\in I}$ base de F.
##### Normes:
- ==norme sur ev E== -> positive, séparable ( $||x||=0$ => x=$0_E$), homogène ($||\lambda x||=|\lambda|.||x||$), respecte IT alors (E,$||.||$) est EVN 
- Norme 1 E -> $||x||_1=\sum^n_{k=1} |x_k|$
- Norme 1 $\mathcal{C}$ -> $||f||_1=\sqrt{\int_a^bf^2}$ 
- Norme 2 E -> $||x||_2=\sqrt{\sum^n_{k=1} |x_k|^2}$
- Norme inf -> $||x||_{+\infty}=max_{1 \le k \le n}(|x_k|)$ 
- Norme CVU -> ev applicat°s bornées de X ds $\mathbb{K}$ admet $||f||_{\infty}=sup_{x \in X}|f(x)|$
- ==Norme== -> Je trouve ça pas NORMALE qu'il soit POSITIVE de SÉPARER ($||x||=0=>x=0$) les HOMOsexuels ($||\lambda x||=|\lambda|||x||$) afin de réduire les INÉGALITÉS (triangulaire)
- CS -> $|<x,y>| \le ||x||.||y||$ 
- Minowski (triang) -> $||x+y|| \le ||x||+||y||$ 
- CS canon -> $|\sum a_ib_i| \le \sqrt{\sum a_i^2} \sqrt{\sum b_i^2}$ 
- Minowski canon -> $\sqrt{\sum (a_k+y_k)^2} \le \sqrt{\sum a_k^2} + \sqrt{\sum b_k^2}$ 
- f $\mathcal{C}^0$ -> Minowski  (eg CS aussi) $\sqrt{\int^b_a|f+g|^2} \le \sqrt{\int^b_a|f|^2} \sqrt{\int^b_a|g|^2}$ 
- Montrer fermé -> 1) existe tjrs boule centré tt point 2) image par f° continue d'un fermé

##### Normes de Matrice:
- Si E a une structure d'algèbre (e.g. E est l'algèbre des matrices carrées d'ordre n sur $\mathbb{R}$) une norme matricielle (ou norme d'algèbre) N sur E est une norme qui respecte la structure de ce produit donc tq $N(AB)\le N(A)N(B)$ 

## Topologie

##### général
- f paire et $\mathcal{C}^2$ $-> f'(0)=0
- Ouvert -> au vois $\forall$ pts (existe boule incluse rayon $\ne 0$ : $\forall a \in A$, $\exists r>0$, $B(a,r) \subset A$ ) : caract image réciproque par fonction continue d'un evn
- B fermé -> image réciproque par fonction continue d'un fermé d'un evn; => $\mathbb{R}^2/B$ ouvert
- ==Voisinage== -> $V \in \mathbb{R}^2$ est vois $a \in \mathbb{R}^2$ <=> $\exists r \in \mathbb{R}^*_+$, $B(a,r) \subset V$ 
- f $\mathcal{C}$ pt de $\mathbb{R}^2$ -> $a\in A$ un ouvert, $\forall \epsilon >0$,$\exists \delta>0$, $\forall x \in A$, $||x-a|| \le \delta => |f(x)-f(a)| \le \epsilon$ <=> $x \in \bar{B}(a,\delta)$ => $f(x) \in \bar{B}(f(a),\epsilon)$ 
##### Calcul diff plusieurs var :
- (cof)'(x)=f'(x)c'(f(x)) cofi fi cif ((covfi fi siph)
- f $\mathcal{C}$ A ouvert -> f $\mathcal{C}$ tt pt <=> app partielles (1 var non fixée) $\mathcal{C}$ en tt pt
- ==d' partielle en $x_0$ existe== -> $lim _{t\rightarrow x_0} \frac{f\binom{t}{y_o}-f\binom{x_o}{y_o}}{t-x_o}$  $=\frac{\partial f}{\partial x}\binom{x_o}{y_o}=\partial_1f$ existe (<=> $h=t-x_o$)
- f $\mathcal{C}^1$ sur ouvert -> admet 2 d' part. $\mathcal{C}$ 
- Dev Taylor = ==DL1== f $\mathcal{C}^1$ en $a=\binom{x_o}{y_o}$ -> $f(X)=f(a)+\partial_1f(a)(x-x_o)$$+\partial_2f(a)(y-y_o)+o(||X-a||)$ ou idem avec $a'=(x_o+h,y_0+k)$ avec un $o(||(h,k)||)$ 
- IAF -> 
- ==Plan tangent== -> DL1(a) => plan tangent $z=$ $f(a)+(x-x_0)\frac{\partial f}{\partial x}(x_0,y_0)+(y-y_0)\frac{\partial f}{\partial y}(x_0,y_0)$
- ==Gradient== f $\mathcal{C}^2$ -> $\nabla f=\binom{\partial_1f}{\partial_2f}$, orienté pente max et =0 en pt crit ; dans Taylor $f(a')=f(a)+<\nabla f(a)|(h,k)>$$+o(||(h,k)||)$ 
- f d' selo' vecteur u -> $\frac{f(a+tu)-f(a)}{t}$ admet lim finie $t\rightarrow 0$ noté $f'(a)=\partial_uf(a)=<\nabla f(a),u>$ 
- ==Jacobienne== -> mat $J_f(a) \in M_n$ des $\frac{\delta f_i}{\delta x_j}(a)$ 
- Jacob composée f,g $\mathcal{C}^1$ -> donne RDlC $J_{g\circ f}(a)=J_g(f(a))J_f(a)$ 
- RdLC f: $\mathbb{R} \rightarrow \mathbb{R}^n$ et g inverse -> $\frac{d g \circ f}{dt}(t)=\sum^n_{j=1}\frac{\delta g}{\delta x_j}(f(t)) \frac{dx_j}{dt}(t)$ = $(\nabla g(f(t))|f'(t))$
- ==RdLC 1 var== -> $(u \circ v)'=v'.u' \circ v$ donc $\frac{d}{dt}f\circ x(t)=\frac{d f}{dt}(x(t)) x'(t)$   
- ==RdlC 2 var== -> $X(t)=\binom{x(t)}{y(t)}$ alors $\frac{d}{dt}(f \circ X(t))=\frac{\partial f}{\partial x}(X(t)).x'(t)+\frac{\partial f}{\partial y}(X(t)).y'(t)$ 
- ==Hessiene== -> mat $M_f(a) \in M_n$ des $\frac{\delta^2 f}{\delta x_j \delta x_j}(a)$
- Extremum local (ext. loc.) f $\mathcal{C}^0(U)$ -> $\exists B(a,r)$ ouverte tq $\forall x\in U \cap B$, $f(x) \ge 0$ min (ou $\le 0$ max)
- CS a min (max) -> $\nabla f(a)=0$ et $H_f(a)\in S_n^{++}$ ($S_n^{--}$ pr max)
- CN a ext -> $H_f(a)\in S_n^{+}\cup S_n^{-}$ 
- Hessienne f $\mathcal{C}^2$ 2 var -> a pt crit, $H_f(a)=Mat(r,s,s,t)$ (Swartz) 
- ==Cas a ext. loc. pr f° $\mathcal{C}^2$ 2 var== -> $det(H_f(a)) \ge 0$ et min si $tr(H_f(a)) \ge 0$ (max $\le 0$) 
- ==Cas $det(H_f(a)) > 0$ pr f° $\mathcal{C}^2$ 2 var== -> a ext. loc. et $tr(H)>0$ => min loc. (<0 => max loc.) 
- C'est toujours l'inverse signe pour max min pr trace et def pos neg





