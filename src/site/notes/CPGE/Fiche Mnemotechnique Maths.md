---
{"dg-publish":true,"permalink":"/cpge/fiche-mnemotechnique-maths/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## **Mathématiques Complètes PCSI/PC**

### Général
##### Primitives
- $\frac{1}{sin(x)}$ $\Rightarrow$  ln|tan(x/2)| sur $]kπ;(k+1)π[$
- $\frac{1}{cos(x)}$ $\Rightarrow$  ln|tan(x/2+π/4)| sur $]-π/2;π/2[ +kπ$ 
- $\frac{1}{((x+b)^2+a^2)}$ $\Rightarrow$  $\frac1a Arctan(\frac{(x+b)}{a})$ 
- $\dfrac{u'(x)}{\cosh^2(u(x))}=\bigl(\tanh(u(x))\bigr)'$
- $\displaystyle \int u'(x)\ln(u(x))\,dx=u(x)\bigl(\ln(u(x))-1\bigr)+C$
- $n^3=n(n-1)(n-2)+3n^2-2n$ 
- $[\![1;n]\!]$
- $\smash{{}^a_b}$
##### Polynômes
- $x^2+Ax+B=(x-\alpha _1)(x-\alpha _2)$ donne que $B=\alpha_1 \alpha_2$ et $A=-(\alpha_1+\alpha_2)$ utile lorque tu connais une racine
- R racine mult paire sur J $\rightarrow$  $R=(X-\lambda)^m S(X)$ avec $S(\lambda) \ne 0$ alors S $\mathcal{C}^0$ change pas signe vois $\lambda$ et autres terme pos $\Rightarrow$  R signe cste J
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
- Cauchy Swartz (CS) : $(\int_a^bfg)^2<=(\int_a^bf)^2(\int_a^bg)^2$
- CDV $\displaystyle u=\tan\left(\frac t2\right),\quad \cos t=\frac{1-u^2}{1+u^2},\quad \sin t=\frac{2u}{1+u^2},\quad \tan t=\frac{2u}{1-u^2}$
- Sommes triangle infini $\rightarrow$  si conv $\sum_{n=0}^{\infty} \sum_{k=0}^{n} a_{n,k} = \sum_{k=0}^{\infty} \sum_{n=k}^{\infty} a_{n,k}$
- $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$
- $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{k=1}^{n} k^3 = \left( \frac{n(n+1)}{2} \right)^2$
- $\sum_{k=1}^{n} k^4 = \frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}$
- gof surj $\rightarrow$  g surj car surjecte de l'extérieur
- gof inj $\rightarrow$  f inj car injecte de l'intérieur
- ITL (Inégalité Taylor Lagrange) $\rightarrow$  f $\mathcal{C}^{n+1}(I)$ tq $|f^{(n+1)}| \le M$, $\forall (a,b)\in I^2$ : $|f(b) - f(a) - \sum_{k=1}^{n} \frac{(b-a)^k}{k!} f^{(k)}(a)| \leq M \frac{|b-a|^{n+1}}{(n+1)!}$
- Pascal $\rightarrow$  p parmi n = p-1 parmi n-1 + p parmi n-1 mitose ++
- ==Operations licites inégalités== $\rightarrow$  +/-, mult nb pos ou neg en inversant, mult tàt par termes pos, composer f° stricte croiss ou decroiss en inversant (si pas strict inégalités larges)
- Min/max eq $x^2$ $\rightarrow$  derivée =0 $\Rightarrow$  $x=-\frac{b}{2a}$ 
##### DÉVELOPPEMENTS
- $e^x \approx \sum_{k=0}^{n} \frac{x^k}{k!}$
- $\sin(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$
- $\cos(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k}}{(2k)!}$
- $\tan(x) \approx \sum_{k=1}^{n} \frac{B_{2k}(2k)!}{(2k)!} \frac{x^{2k-1}}{(2k-1)!}$, où $B_{2k}$ est le $2k$-ième nombre de Bernoulli
- $\arctan(x) \approx \sum_{k=0}^{n} (-1)^k \frac{x^{2k+1}}{2k+1}$
- $\frac{1}{1+x} \approx \sum_{k=0}^{n} (-1)^k x^k$
- $\frac{1}{1-x} \approx \sum_{k=0}^{n} x^k$, R=1 sur $\mathbb{C}$  
- $\ln(1+x) \approx \sum_{k=1}^{n} (-1)^{k-1} \frac{x^k}{k}$
- $\ln(1-x) \approx - \sum_{k=1}^{n} \frac{x^k}{k}$
- $(1+x)^a \approx \sum_{k=0}^{n} \binom{a}{k} x^k$ avec a un entier
- $(1+x)^\alpha =1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\dots+\frac{\alpha(\alpha-1)\cdots (\alpha-n+1)}{n!}x^n+o(x^n)$ avec $\alpha$ non entier
- $\cosh(x) \approx \sum_{k=0}^{n} \frac{x^{2k}}{(2k)!}$ 
- $\sinh(x) \approx \sum_{k=0}^{n} \frac{x^{2k+1}}{(2k+1)!}$
- $\frac{1}{\sqrt{1-x}}$=$\sum^{+\infty}_{n=0} \frac{1}{2^{2n}} \binom{2n}{n} x^n$ (merci Nollan)
##### Trigonométrie
- cos ra*cis*me $\Rightarrow$  il dérive négativement (donc sin positif)
- $\sin t+\cos t=\sqrt{2}\cos\left(t-\frac{\pi}{4}\right)$
-  $Tan(ab)$é, **t** 'est **plus ou moins** **t**om **(b)** é dessus, **hein**? Au **moins** tu ne sera **plus** $t(AB)$assé: $tan(a \pm b)=\frac{tan(a) \pm tan(b)}{1 \mp tan(a)tan(b)}$
- Valeurs cercle trigo : 0,1,2,3,4 diviser par 4, passer à la racine $\rightarrow$  0, $\dfrac12$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$, 1

### Sommes
##### Series:
- Prod Cauchy $\rightarrow$  $\sum u_n$ et $\sum v_n$ CVA $\rightarrow$  $\sum w_n$, $w_n=\sum u_k v_{n-k}$ CVA vers prod sommes $u_n$, $v_n$ 
- ==Somme geo== $\rightarrow$  $\sum^n_{k=p}q^k=q^p \frac{1-q^{n+1-p}}{1-q}$ 
##### Series entières :
- Lemme d'Abel $\rightarrow$  $\exists z_0 \in \mathbb{C}^*$ tq $(a_nz_0^n)$ est bornée $\Rightarrow$  $\forall z$ tq $|z|<|z_0|$ , $|a_nz^n|=O(|\frac{z}{z_0}|^n)$ donc $\sum a_nz^n$ CVA
- RC $\rightarrow$  sup{r pos tq $a_nr^n$ bornée} donc si $a_n$ bornée mais tends pas vers 0 alors R=1
- SE $\mathcal{C}^{+\infty}$ sur int ouvert conv $]-R;R[$
- $\sum a_nz^n$ RC=R $\rightarrow$  RC pr $z^{2n}$ est $\sqrt{R}$ 
- $a_n$~$b_n$ $\rightarrow$  R égaux (et comp o/O donne min)
- Série entière dérivée/prim $\rightarrow$  à même RC
- ==Produit Cauchy SE== $\rightarrow$  $\sum b_kx^k$, $\sum b_kx^k$ CN abs $\Rightarrow$  $\sum c_nx^n$ conv vers $(\sum^{+\infty}_{n_0} a_k) (\sum^{+\infty}_{n_0}b_k)$ where $c_n=\sum^n_{n_0} a_kb_{n-k}$ et $R \ge min(R_1,R_2)$ ou pr z complexe $|z|\ge min(R_1,R_2)$
- Int SE et int $\rightarrow$  sur seg sans pb
- $\sum (a_k+b_k)x^k$ a $R = min(R_1,R_2)$ si $R_1 \ne R_2$, else $R \ge R_1=R_2$ 
- f DSE $\rightarrow$  $f^{(k)}(x)$ $=\sum_{n=0}^{+\infty}\frac{(n+k)!}{n!}a_{n+k}x^n$
- Serie Taylor f° $\rightarrow$  $a_n=\frac{f^{(n)}(0)}{n!}$ par dérivat°/unicité DSE
- f im/pair $\rightarrow$  $a_{2n}=0$ / $a_{2n+1}=0$ 
- $R_n(x) \smash{{}^=_{x \rightarrow 0}} o(x^n)$ par def 
- ==TYRI== $\rightarrow$  $R_n(x)=\frac{1}{n!} \int_{0}^x (x-t)^nf^{n+1}(t)dt$ et si il existe r>0 tq $\forall x \in ]-r;r[$, $R_n(x) \rightarrow_{n \rightarrow + \infty} 0$ $\Leftrightarrow$  f est DSE (sinon utilise ITL maj va)
- ==Binôme généralisé== $\rightarrow$  $(1+x)^{\alpha} \approx \sum_{n=0}^{+\infty} \frac{\prod^n_{k=1}(\alpha-k+1)}{n!} x^n$ pour $\alpha$ entier ça conv sur $\mathbb{R}$ sinon sur $]-1;1[$ 

### Fonctions
##### Général
- f $\mathcal{D}^2$ concave/vexe $\rightarrow$  $\Leftrightarrow$  $|f''| >0$ stricte
- Courbe > tangete $\rightarrow$  $\Leftrightarrow$  termes ordre supérieur DL positifs
- TVI $\rightarrow$  f C, f(a)f(b)<0 $\Rightarrow$  $\exists$sol f(x)=0 (!sol f mono str)
- TBA $\rightarrow$  f C sur $[a,b]$ (ou tt espace fermé bornée) est bornée
- THM bij $\rightarrow$  f C mono str I $\Rightarrow$  f et f-1 bij C I
- Rolle $\rightarrow$  f C + d', f(a)=f(b) $\Rightarrow$  $\exists$c<$[a,b]$ tq f'(c)=0
- EAF $\rightarrow$  f C d' $[a,b]$ $\Rightarrow$  $\exists$c tq f(b)-f(a)=(b-a)f'(c)
- IAF $\rightarrow$  f lipsch $\Rightarrow$  |f(x)-f(y)|<=M(x-y), M peut être un majorant de la dérivée indep de x,y
- Leibniz $\rightarrow$  $(fg)^{(n)}=\sum_{n=0}^n\binom n k f^{(k)}g^{(n-k)}$ 
- ITY $\rightarrow$  $\displaystyle \left|f(x)-\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k\right|\leq M\frac{|x-a|^{n+1}}{(n+1)!}$
- ==TYRI== $\rightarrow$  $f(x)-\sum _{k=0}^n \frac{f^{(k)}(y)}{k!} (x-y)^k$= $\int_y^x \frac{f^{(n+1)}(t)}{n!} (x-t)^n\ dt$  entre y et x deux variables
- ==TYRI n,n+1== $\rightarrow$  $f(n+1)=\sum _{k=0}^N\frac{f^{(k)}(n)}{k!}+$ $\int_n^{n+1} \frac{f^{(N+1)}(t)}{N!} (n+1-t)^N dt$ 
- Carac sec lim: a,l ds R+-8, f$\rightarrow$ l en a ssi Vun $\rightarrow$ a, f(un)$\rightarrow$ l
- f C I ssi en tt pt a de I, f(x)$\rightarrow$ f(a)
- D $\Rightarrow$  C et D(n) $\Rightarrow$  C(n-1)
- Arcsin 1-, arccos 2- (c'est un peu + moche)
- C(k) ssi k fois derivable et f(k)(x) C
- C(k) difféomorphisme: reciproque f° C(k), bij sur I tq f'!=0 est C(k) sur f(I)
- f=Oa(g) ssi f/g bornée a, o ssi f/g$\rightarrow$ 0 en a
- DL0 continue, DL1 derivable
- Prop : Intégrer un DL donne un DL

##### Suites def. par fonction
- uno ds I, I stable f $\Rightarrow$  un(n>=no) ds I et définie 
- x ds I, f(x)>=x $\Rightarrow$  un croiss (vis versa)
- f croiss $\Rightarrow$  $u_n$ mono à partir $n_o$
- f décroiss $\Rightarrow$  $u_{2n}$, $u_{2n+1}$ mono sens inverse
- Si $u_{n+1}=f(u_n)$, où f:D→R est continue et $u_0\in I$
1) Etudier f sur $\mathcal{D}_f$ (mono, croissance,…)
2) Résoudre eq aux limites $f(a)=a$, que doit satisfaire éventuelle limite de $u_n$
3) Dét int $I$ stable par f sur lequel f est mono, et tel que $u_0\in I$. On sait alors que $u_n\in I$pour tout $n\ge 0$. Svnt le tableau de variations de f donne la réponse. ($\exists$ des cas où on ne peut pas y arriver pour $u_0$, mais pr $u_1$, ou $u_2$)
4) a) f est croissante sur $I$ $\Rightarrow$  (un) est mono sur $I$, le sens de monotonie est donné par le signe de $u_1−u_0$. Si (un) est bornée (parce que $I$ l'est par exemple) $\Rightarrow$  THM lim mono donc $u_n \rightarrow l$, sinon si (un) croiss, et $u_0>l$ sol de f(l)=l alors $u_n$ div vers $+\infty$
5) b) f est décroiss sur $I$ $\Rightarrow$  poser $g=f∘f$ croissante sur $I$ et $v_n=u_{2n}$ et $w_n=u_{2n+1}$ alors (vn) et (wn) tq $v_{n+1}=g(v_n)$ et $w_{n+1}=g(w_n)$ avec g croiss sur $I$. Étudier (vn) et (wn) comme ds le cas précédent. Rappelons que la suite (un) converge si et seulement si (vn) et (wn) convergent vers la même limite.

##### SUITES DE FONCTION
- CVS $\rightarrow$  $\forall x \in J, \forall \epsilon >0,\exists N,n>N, |fn-f|< \epsilon$ 
- CVU $\rightarrow$  $\forall \epsilon >0,\exists N,\forall x \in J,n>N, |fn-f|< \epsilon$ $\Leftrightarrow$  $sup|f_n-f|\le \alpha_n \rightarrow 0$ avec $\alpha_n$ bornée sur J
- CVU ts $\rightarrow$  $\Rightarrow$  CVS
- ==Thm inversion lim $\int$ int J== $\rightarrow$  fn CVU f, fn $\mathcal{C}^0$ $\Rightarrow$  inverti lim et $\int$ sur J
- ==Dérivat° $\mathscr{C}^p$ suite de f°== $\rightarrow$  $f_n \mathscr{C}^p$, $k \in [[0,p-1\|0,p-1]]$, $f_n^{(k)}$ CVS, $f_n^{(p)}$ CVU $\Rightarrow$ $f \ \mathscr{C}^p$ et $f_n^{(k)}$ CVS $f^{(k)}$ et cas p non
- HP: THM inv lim $\rightarrow$  $f_n$ CVU f et $f_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} b_n$ $\Rightarrow$  $\sum b_n$ conv et ${}^{lim}_{x\rightarrow a}f(x)={}^{lim}_{n\rightarrow +\infty} \ {}^{lim}_{x\rightarrow a} f_n(x)$= ${}^{lim}_{n\rightarrow +\infty} b_n$ 
##### SÉRIES DE FONCTIONS
- $\sum u_n$ ==CVU (ts) J== $\rightarrow$  $\sum u_n$ CVS et $(R_n)_{n \ge n_0}$CVU (ts) vers 0 (outil : CSSA |Rn|<|Un+1| puis passage sup)
- $\sum u_n$ ==CVN== $\rightarrow$  $\Leftrightarrow$  $\forall u_n$ borné et $\sum ||u_n||_{+\infty}$ conv
- ==CVN Serie TG Un== $\rightarrow$  $\exists \sum A_n$ convergent tq $A_n$ positif et $(An)\ge |u_n(x)|$ $\Rightarrow$  $\sum u_n$ conv tq Un bornée et $\sum ||u_n||_{inf}$ conv
- ==THM d' C0 Somme== $\rightarrow$  $\sum u_n$ CVU et $u_n \ \mathscr{C}$ $\Rightarrow$  $\sum u_n \ \mathscr{C}$
- CVU et lim $a \in I$ $\rightarrow$  intervertir lim $\sum$ en a
- ==Inv lim/$\sum$ pr a $\in I \cup\bar{I}$== $\rightarrow$  $\sum u_n$ CVU et $\forall n$, $u_n(x) \smash{{}^{\ \ =}_{x\rightarrow a}} l_n$ $\Rightarrow$  conv/égal $\sum l_n = \smash{{}^{\ lim}_{x\rightarrow a}}(\sum u_n(x))$
- ==Intégration tàt sur seg== $\rightarrow$  $\underset{n \ge n_0}{\sum} u_n$ CVU $[a,b]$ et $u_n$ $\mathscr{C}([a,b])$ $\Rightarrow$  $\sum_{n= n_0}^{+\infty} \int_a^b u_n$ $\mathcal{C}^0$ et interv $\int$ et $\sum$ (fonctionne aussi a,b infinis)
- ==THM d' C1== $\rightarrow$  $u_n$ $\mathcal{C}^1$, $\sum u_n$ CVS, $\sum u_n'(x)$ CVU (ts) $\Rightarrow$  $\sum u_n$ $\mathcal{C}^1$ et $(\sum u_n)'=\sum u_n'$ 
- ==THM d' $\mathscr{C}^p$== $\rightarrow$  $u_n \in \mathscr{C}^p$ et $\sum u_n^{(p)}$ CVU (ts) I, $k \in [[0,p-1\|0,p-1]] , \ \sum u_n^{(k)}$ CVS $\Rightarrow$  $\sum u_n$ $\mathscr{C}^p$ et o?interv d' et $\sum$ 
- Comp Serie-Int $\rightarrow$  f C, mono, positive alors serie TG f conv ssi int gen f conv
- Inégalité sur f C, mono, decrois $\rightarrow$  $\int_k^{k+1}f \le f(k) \le \int_{k-1}^kf$ 
- Critère de Leibniz = CSSA
- $\underset{1 \leq j \leq n}{\max}$ 

##### INTÉGRALES À PARAMÈTRES
- Transfo Laplace $\rightarrow$  $L(f)(p)=\int ^{+\infty}_0 f(t)e^{-pt}dt$ 
- Transfo Fourier $\rightarrow$  $f(\omega)=\int^{+\infty}_{\infty}f(t)e^{-i\omega t}dt$ 
- ==Conv Dom interv J== $\rightarrow$  $f_n$ Cpm et CVS f Cpm, $\exists \varphi(t)$ L1 tq $|f_n(t)| \le \varphi(t)$ $\Rightarrow$  $f_n$ et $f$ L1, $\int_J f=\int_J lim(f_n)=lim(\int_J f_n)$
- ==Int tàt généralisé== $\rightarrow$  $\sum f_n$ Cpm CVS $f$ Cpm tq $f_n$ L1 et $\sum \int |f|$ conv $\Rightarrow$  $f$ L1 et $\int f=\int \sum f_n =\sum \int f_n$ 
- ==Conv Dom para== $\rightarrow$  $f(x,t) \rightarrow_{x \rightarrow a} l(t)$, $t \rightarrow f(t,x)$ et l(t) Cpm et $f$ dom $\Rightarrow$  $l(t)$, $t \rightarrow f(x,t)$ L1 et interversion limite $x \rightarrow a$ intégrale
- ==Thm $\mathcal{C}$  sous $\int$== $\rightarrow$  $t \rightarrow f(x,t)$ Cpm (pr intégrer), x$\rightarrow$ f(x,t) $\mathcal{C}^0$ (hyp nat) et dom f (aussi sr tt seg) $\Rightarrow$  $x \rightarrow\int f(x,t)dt$ def, $\mathcal{C}$ 
- ==Thm d' $\mathcal{C}^1$== $\rightarrow$  $t \rightarrow f(x,t)$ L1, $x \rightarrow f(x,t)$ $\mathcal{C}^1$, $t \rightarrow \frac{\partial f}{\partial x}(x,t)$ Cpm et dominé $\Rightarrow$  $g :x \rightarrow \int f(x,t)dt$ def $\mathcal{C}^1$ et $g' : x \rightarrow \int \frac{\partial f}{\partial x}(x,t) dt$ 
- ==Thm d' Cp== $\rightarrow$  $x \rightarrow f(x,t)$ $\mathcal{C}^p$, $k \in [0,p-1], t \rightarrow \frac{d^kf}{dx^k} \ \mathcal{L}^1$, et $t \rightarrow \frac{d^pf}{dx^p}$ $\mathcal{Cpm}$ et dom ce dernier $\Rightarrow$  $g: t \rightarrow \int{f} \ est \ \mathcal{C}^p$ $et \ g^{(i)}: x \rightarrow \int{\frac{d^if}{dx^i}(x)dt}$ 
### Probabilités
##### Événements
- $P$ est une probabilité$\Leftrightarrow$ 
- A,B indep $\rightarrow$  $P(A \cap B)=P(A)P(B)$
- Tribu $\mathbb{A}$ sur $\Omega$ $\rightarrow$  $\Omega \in \mathbb{A}$, et $\forall A \in \mathbb{A}$, $\bar{A} \in\mathbb{A}$. De plus $\forall$ réunions et intersections finies/ dénombrables de chaque famille $(Ai)_{i \in I}$ est dedans
- Plus petite tribu $\rightarrow$  $\{\varnothing, A, \bar{A}, \Omega\}$
- Sigma additivité (dénombrable) $\rightarrow$  Soit $(A_n)$ une suite d'eve 2 à 2 incompatibles $P(\bigcup_{n \in \mathbb{N}}\{A_n\})=\sum_{n=0}^{+\infty} P(A_n)$ 
- ==Sous additivité/inégalité boole== $\rightarrow$  $P(\bigcup_{n \in \mathbb{N}}\{A_n\}) \le \sum_{n=0}^{+\infty} P(A_n)$ pour n'importe quels événements
- $P(A \cap B) = P(A) \cdot P(B|A)= P(A) \cdot P(B)$ pour des événements indépendants
- ==Proba conditionelles== $P(A|B) = \frac{P(A \cap B)}{P(B)}$ si $P(B) > 0$
- ==Bayes== $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$ si $P(A) > 0$ et $P(B) > 0$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- $P(A \cap B \cap C) = P(A) \cdot P(B|A) \cdot P(C|A \cap B)$ 
- ==Loi conjointe== $P_{(X,Y)}(x_i,y_j)=P(X=x_i, Y=y_j)$ et alors lois X,Y sont loi marginales
- $P(X=x_i)=\sum^q_{j=1}P(X=x_i, Y=y_j)$ on retouve LM avec LC
- Si X,Y indep, loi conjointe = prod lois marginales
- ==Loi des grands nombres== : la moyenne d'un grand nombre d'événements aléatoires tend à se rapprocher de l'espérance théorique
- ==Loi des probabilités totales== : Si $A_1,A_2,...,A_n$ sont des événements mutuellement exclusifs et exhaustifs (c'est-à-dire que $Ai∩Aj=∅$ pour $i≠j$ et $∪_{i=1}^nA_i=Ω$ $\Leftrightarrow$  $\bigsqcup _{i=1}^n A_i= \Omega$) donc est un SCE : $\forall$ B , P(B)=$\sum P_{Ai}(B)P(Ai)$ 
- Union evénements disjoints $\rightarrow$  Proba union est somme probas
- Intersection événements indep $\rightarrow$  Proba intersect° est prod probas
- Thm $\mathcal{C}$ (dé)croiss $\rightarrow$  $(A_n)$ (dé)croissant pr l'inclusion $A_k \subseteq A_{k+1}$ (ou inverse) alors $P\left(\bigcup_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} P(A_n)$ (sinon intersection)
- Complementaire union $\rightarrow$  $\overline{\bigcup A_n}=\bigcap \overline{A_n}$ 
- $\bar{A_n}$ mut indep $\rightarrow$  $A_n$ mut indep
##### Variables aléatoires
- X va $\rightarrow$  Im(X) au plus dénombrable (par réunion ens denomb), et X=k s'exprime en fonction d'événements
- Thm Fubini $\rightarrow$  $\forall$ fam sommable $(u_{i,j})$ on peut invertir $\sum$ sur i et sur j
- $\sum a_ib_j$ sommables $\rightarrow$  $=\sum a_i \sum b_j$ (Cauchy)
- Conv séries doubles $\rightarrow$  $\forall (a_{i,j})$ tq $\forall i\in\mathbb{N}$, $\sum_{j\in\mathbb{N}}a_{i,j}$ CVA et $\sum_{i\in\mathbb{N} }\sum_{j=0}^{+\infty}|a_{i,j}|$ conv alors (a_{i,j}) sommable et peut inverser sommes
- VA ==discrète== $\rightarrow$  $X(\Omega)$ au plus dénombrable
- $E(X) = \sum_{x_i} x_i  P(X = x_i)$ est linéaire $E(aX + b) = a \cdot E(X) + b$
- ==Formule transfert== $\rightarrow$  f def X($\Omega$) $E(f(X))= \sum f(x) P(X=x)$ idem pr couple $P(X=x,Y=y)$ et n-uplet
- ==Cauchy-Swartz proba== $\rightarrow$  $E(XY)^2 \le E(X^2)E(Y^2)$ avec égalité si X,Y proportionels et $|cov(X,Y)| \le \sigma(X)\sigma(Y)$ avec égalité X=aY+b
- $V(X) = E((X-E(X)^2)$ $= \sum_{x_i} (x_i - E(X))^2 \cdot P(X = x_i)$ pas linéaire $V(aX + b) = a^2 \cdot V(X)$, et $V(X)=\sigma(X)^2$ 
- V.A. centrée réduite $\rightarrow$  V(X)=1 et E(X)=0
- Centrer et réduire une VA $\rightarrow$  $\frac{X-E(X)}{\sigma(X)}$ 
- ==König-Huygens== $\rightarrow$  X espérance alors $V(X) = E(X^2) - [E(X)]^2\ge 0$
- X admet moment ordre p $\rightarrow$  $E(X^p)=MOp$ finie (X admet MOp $\Rightarrow$  MOq pr q $\le$ p)
- X, Y VADR MO2 $\rightarrow$  XY admet MO1
- ==Covariance== $\rightarrow$  $Cov(X,Y) = E(XY) - E(X)E(Y)=$ $E((X-E(X))(Y-E(Y)))$ et cov est forme bilinéaire sym positive (pas prod sca car pas définie positive)
- $\mathbb{V}(X + Y) = \mathbb{V}(X) + \mathbb{V}(Y) + 2 \mathrm{Cov}(X,Y)$ et cov nulle si X,Y indep $\Rightarrow$  $V(X)=Cov(X,X)$
- Corrélation $\rightarrow$   $Corr(X,Y) = \frac{Cov(X,Y)}{\sqrt{V(X) \cdot V(Y)}}$
- ==Lemme coalitions== $(X_i)$ VA mut indep $\rightarrow$  $\forall f_i$ def sur $Im(X_i)$, VA $(f_i(X_i))$ sont indep
- ==Inégalité Markov== $\rightarrow$  $\forall a >0, \mathbb P(Z\geqslant a)\leqslant\frac{\mathbb{E}(Z)}{a}$
- Bienaymé-Tchebychev $\rightarrow$  $\mathbb{P}\left(\left|X-\mathbb{E}[X]\right| \geq \epsilon \right) \leq (\frac{\sigma}{\epsilon})^2$
- Tout VADR a val finies admet espérance finie
- VA mutuellement indep $\Leftrightarrow$  proba n'importe quel intersection est le produit des probas
##### Fonctions génératrices
- f° gén RC $\rightarrow$  $\ge 1$ , et CVN sur $\bar{D}(0,1)$ disque fermée, $G_X(t)=E(t^X)$, $\mathcal{C}[0,1]$ et $\mathcal{C}^{+\infty}]0,1[$ 
- loi X f° gén $\rightarrow$  $P(X=n)=\frac{G_X^{(n)}(0)}{n!}$ comme TY
- E f° gén $\rightarrow$  MO1 $\Rightarrow$  $G_X'(1)=E(X)$, MO2 $\Rightarrow$  $G_X''(1)=E(X(X-1))=E(X^2)-E(X)$ 
- V f° gén $\rightarrow$  MO2, $V(X)=G_X''(1)+G_X'(1)-(G'_X(1))^2$
- f° gen X+Y pr X,Y indep $\rightarrow$  $G_{X+Y}=G_XG_Y$ 
##### Lois Usuelles
- ==Loi uniforme== $\rightarrow$  $P(X=x) = \frac{1}{n}$ , $E(X) = \frac{n+1}{2}$, $V(X) = \frac{(n^2-1)}{12}$,  $G_X(t) = \frac tn \frac{1-t^n}{1-t}$ ou 1 si t=1
- ==Bernoulli== $\rightarrow$  $P(X=x) = \begin{cases} p & \text{si } x = 1 \\ 1-p & \text{si } x = 0 \end{cases}$, $E(X) = p$, $V(X) = p(1-p)$, $G_X(s) = 1 - p + ps$
- ==Loi binomiale== $\rightarrow$  $P(X=k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$, $E(X) = np$, $V(X) = np(1-p)$, $G_X(s) = (1-p + ps)^n$
- ==Loi de Poisson== $\rightarrow$  $P(X=k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!}$, $E(X) = \lambda$, $V(X) = \lambda$, $G_X(s) = e^{\lambda(s-1)}$ avec $\lambda > 0$ 
- Poisson approxime binomiale $\rightarrow$  si n grand, p petit, $np \approx \lambda$ car si p ~ $\frac{\lambda}{n}$ alors proba bin tends vers proba poisson
- ==Loi géométrique== $\rightarrow$  $P(X=k) = q^{k-1}p$, $E(X) =\frac{1}{p}$, $V(X)=\frac{q}{p^2}$, $G_X(t)=\frac{pt}{1-qt}$ 
- $X \rightarrow \mathcal{G}(p)$ $\Leftrightarrow$  $P(X>X)=(1-p)^k$ 
- Loi géo sans mémoire $\rightarrow$  sachant (X>k), X-k suit même loi X $\Leftrightarrow$  $X \rightarrow \mathcal{G}(p)$ 
- Loi de Rademacher $\rightarrow$  $P(X=1)=1/2=P(X=-1)$, $E(X)=0$, $V(X)=1$ 
- Additivité loi de poisson pr $X,Y\rightarrow \mathcal{P}(\lambda), \mathcal{P}(\mu)$ $\rightarrow$  $X+Y \rightarrow \mathcal{P}(\lambda + \mu)$ 
- Formule antirépartition $X$ VARD finie tq $X(\Omega) \subset [\![0;N ]\!]$ $\rightarrow$  $\mathbb{E}(X)=\sum_{k=0}^{N-1}\mathbb{P}(X>k)$ 
- Loi normale $\mathcal{N}(\mu, \sigma^2)$, $\rightarrow$  distrib $\mathbb{P}$ $\mathcal{C}$ définie par $\mu$ (moy) et $\sigma^2$ (var) : $\displaystyle f(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$

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
- vp $A^2$ si A sym reel $\rightarrow$  $A=PDP^T=A^T$ donc $A^2=PD^2P^T$ donc vp $A^2$ sont vp A au carré
- dev. poly caract $\rightarrow$  $\lambda \mu =\frac{(\lambda+\mu)^2-\lambda^2-\mu^2}{2}$ sert quand dev $\chi_A=X^{n-2}(X-\lambda)(X-\mu)$=$X^n-(\lambda+\mu)X^{n-1}+\lambda\mu X^{n-2}$ 
- ==Invariants similitude== $\rightarrow$  tr, det, $\chi$, rg, sp
- Mat sym $\rightarrow$  fonction associé est endomorphisme
- det(AB) $\rightarrow$  = det(A)det(B)
- ==Trace Proj== $\rightarrow$  Tr(P)=rg(P) car $sp(B)\in \{0,1\}$ 
- $B^2=B$ et B sym $\rightarrow$  b canon associé B proj $\perp$ 
##### Mat orthog (= isométrie EE)
- $M \in O_n(\mathbb{R})$ $\rightarrow$  $M^TM=I_n$ 
- $det(M)={\pm 1}$ $\rightarrow$  $det(MM^T)=det(M)det(M^{-1})$=$det(M)^2= det(I_n)$ 
- $sp(A)\subset \{-1,1\}$ $\rightarrow$  symétrie
##### Réduction
- Poly caract $\rightarrow$  $\chi_M = X^n-tr(M)X^{n-1}+$...$+(-1)^n det(M)$ 
- Prop Sep $\rightarrow$  $E_{\lambda}=Ker(u-\lambda id)$ et $\oplus_{\lambda \in Sp} E_{\lambda}$ et $1 \le dim(E_{\lambda}) \le m(\lambda)$ 
- ==Diag Sep== $\rightarrow$  $\oplus_{\lambda \in Sp} E_{\lambda}=E$ $\Leftrightarrow$  dim(E)=$\sum dim(E_{\lambda})$ $\Leftrightarrow$  mat diagonalisable
- ==Diag $\chi_M$== $\rightarrow$  CS scindé racines simples, CNS scindé et $\forall \lambda_i$,  $dim(E_{\lambda_i})=m(\lambda_i)$ 
- ==Diag poly annulateu==r $\rightarrow$  CS scindé racines simples
- THM spectrale u autoadj
- ==M (def) pos== $\rightarrow$  vp de M (strict) supérieurs à 0 alors $M\in S_n^+$, inverse pour def neg, 
- rg(u)=1 alors diag ssi trace non nulle
- Si range pas maximale alors 0 valeur propre: démo photo valentine, dim(KerA)=n-1 alors 0 vp de dim au moins n-1 
- Si dim(KerA)=n-1 alors $(X-0)^{n-1}$ divise le polynôme caractéristique donc il n'y a aucun terme de dimension $<n-1$ donc $X(A)=X^{n-1}(X+\alpha)$ or en développant $\alpha =-tr(A)$ 
- Hamilton-Cayley $\rightarrow$  $\chi_A$ est poly annul A
- ==Trigonalisable== $\rightarrow$  poly caract scindé
## Algèbre générale
##### Algèbre PCSI
- Il y a $n^p$ aplications de $[[1,p\|1,p]] \ ds \ [[1,n\|1,n]]$ 
- Injecte toi un max d'alcool, surjette un minimum d'eau
- Inj $\Leftrightarrow$  Ker={0}, surj $\Leftrightarrow$  Im=F 
- Inversible $\rightarrow$  0 pas vp
- Somme dir = FnG={0} = decomp unique
- ==proj ortho g== sur F sev E $\rightarrow$  $x=x'+x''$ avec $x'\in F$, $x''\in F^{\perp}$ alors $p(x)=x'$ et $x' \perp x''$ $\Leftrightarrow$  $||p(x)|| \le ||x||$ ==caractérisat==°
- ==Relat° s,p== $\rightarrow$  $u \in E$, $F \subset E$ alors $p_F(u)=\frac{1}{2}(s_F(u)+u)$ lie projeté sur F et la réflexion (symétrie) par rapport à F
![CPGE_relation_s_p.png](/img/user/Excalidraw/CPGE_relation_s_p.png)
- prod sca canon $\rightarrow$  $(x|y)=\sum_{i=1}^n x_iy_i$ ds $\mathbb{R}^n$ et $\sum_{i=1}^n \overline{x}_iy_i$ ds $\mathbb{C}^n$
- Soit $F=\{x \in E| \sum^n_{i=1} x_i=0\}$ $\rightarrow$  $F=Vect(e_1-e_2, e_1-e_3, ... , e_1-e_{n})$ car fam libre card n-1 gen et $x=e_1\sum^n_{i=1}\alpha_i- \sum^n_{i=1}\alpha_i e_i$ donc $\sum x_i=0$ 
- ==endo u bij $\Leftrightarrow$  surj $\Leftrightarrow$  inj== $\rightarrow$  $dim(ker(u))=0$, THM rg $dim(E)=dim(Im(u))$ or $Im(u) \subset E$ $\Rightarrow$  Im(u)=E $\Rightarrow$  f est surjective $\Rightarrow$  f bij
- Bases $\rightarrow$  normée VS orthogonal << orthonormée (les deux)
##### Géométrie
- s sym / F // G $\rightarrow$  $\forall x = f+g$, $s(x)=f-g$ $\Leftrightarrow$  $s(s(x))=x$ 
- p proj sur F // G $\rightarrow$  $\forall x = f+g$, $p(x)=f$ $\Leftrightarrow$  $p(p(x))=p(x)$ 
- sym dim finie n $\rightarrow$  symétrie orthog / à un hyperplan F = réflexion, si dim(F)=n-2 = renversement
- p proj 
- $\det(\vec{u}\vec{v})=0$ ssi $\vec{u},\vec{v}$ colineaires
- det que pour mat $\in M_n(K)$
- $\vec{u}.\vec{v}=0$ ssi $\vec{u}, \vec{v}$ orthog
- pour determiner l'orthog d'une droite $\Delta$prendre un vecteur dir resultant de la difference des coord de 2 pts de $\Delta$
- $M \in Cercle$ de diametre AB ssi $\vec{AM}.\vec{BM}=0$
- $\alpha a+\beta b+\gamma c=l$ est un plan ssi $(\alpha,\beta, \gamma) \ne (0,0,0)$ et alors ce vecteur est orthog (demo: prendre u ds plan, prod sca avec $(\alpha,\beta, \gamma)$ doit faire $l$ )
- $\vec u\times\vec v=u.v \sin(\theta)$ et prod sca avec cos
- Plan F=Vect(a,b) de $\mathbb{R}^3$ $\rightarrow$  $u\in F$ $\Leftrightarrow$  det(u,a,b)=0 donne eq cart du plan
- Cart ax+by+cz=0 $\rightarrow$  e=(a,b,c) est vect normale au plan car $u\in F$ $\Leftrightarrow$  $(u|e)=0$ 
- Soit p proj sur F plan $\mathbb{R}^3$, h proj sur $F^{\perp}$ $\rightarrow$  $\forall x \in \mathbb{R}^3$, $h(x)+p(x)=x$ permet de remonter à la proj à partir du vect orthog d'un plan cartésien (puis la sym avec la relat° fond)

##### EE 1 : prop
- espace eucl $\rightarrow$  EV reel dim finie muni <.> 
- espace prehilb $\rightarrow$  ee dim infinie, $\mathbb{R}$ ou $\mathbb{C}$, pas nécessairement complet
- espace complet $\rightarrow$  espace metrique (admet distance) ou suites Cauchy conv
- norme-sca $\rightarrow$  $||x||^2=(x|x)$ 
- ==Prod sca== $\rightarrow$  sym bilin ($<u+\lambda v,w>=<u,w>$+$\lambda<v,w>$ ) def pos ($<x,x> \ge 0$ et $<x,x>=0$\Rightarrow$ x=0$ ) (to scale society, il faut que tu "semble blanc de peau")
- Prod sca canon $\rightarrow$  $(X|Y)=Y^TX$ 
- Pythagore $\rightarrow$  pr fam orthog $||\sum x_i||=\sum ||x_i||$ 
- ==Orthogonal partie F== $\rightarrow$  sev de E tq $F^{\perp}=\{y\in E|\forall x \in F, (x|y)=0\}$=$(Vec(F))^{\perp}$ et F et $F^{\perp}$ en somme directe (mais pas nécessairement supplémentaires ds E en dimension infinie)
- dim orthog partie $\rightarrow$  dimE=dimF+dim$F^{\perp}$ 
- Base EE orthon $\rightarrow$  tt ee $\ne \{O_E\}$ admet une base orthon (eg poly lagrange), et tt fam orthon peut être complétée en une base orthon
- Décomp x bon $\rightarrow$  $x=\sum^n_{i=1} (x|e_i)e_i$
- ==Gram-Schmidt== $\rightarrow$  $v_1=e_1/||e_1||$, $u_{k+1}=e_{k+1}-\sum_{i=1}^k(e_{k+1}|v_i).v_i$ puis $v_k+1=u_{k+1}/||u_{k+1}||$ est la famille
- ==Proj orthog sur F== = Vect($e_1,...e_q$) fam orthog $\rightarrow$  $p_F(x)=\sum^q_{i=1}\frac{(x|e_i)}{||e_i||^2}e_i$ ou sans ||.|| si orthon
- Inégalité Bessel $\rightarrow$  $||p_F(x)||^2 \le ||x||^2$ 
- Distance sev d(x,F)=$inf_{f\in F}||x-f||$ et $f=p_F(x)$ si proj orthog $\Rightarrow$  $d(x,F)^2=||x||^2-||p_F(x)||^2$ 
##### EE 2 : endomorphismes
- ==iso-métries vect = même mesure (norme)== $\rightarrow$  $u \in O(E) \in GL(E)$ tq $||u(x)||=||x||$ $\Leftrightarrow$  $(u(x)|u(y))=(x|y)$ $\Leftrightarrow$  u(bon) est bon (directe si det(u)=1) $\Leftrightarrow$  $\exists$ ou $\forall$ bon mat M de u orthog ($MM^T = I_n$)
- inverse iso $\rightarrow$  u inv (det $\ne0$ ) et -u et $u^{-1}$ aussi iso vect
- ==caract sp det iso== $\rightarrow$  sp $\in$ {-1,1} car $||u(x)||=||x||=||\lambda|.||x||$ $\Rightarrow$  det $\in$ {-1,1}
- ==iso = bij (automorph)== $\rightarrow$  $x\in Ker(u)$ $\Rightarrow$  $||x||=0_E$ $\Rightarrow$  $Ker(u)=0_E$ or dim finie et endo $\Rightarrow$  bij
- F stable iso u $\Rightarrow$  $F^{\perp}$ stable u $\rightarrow$  $x\in F^{\perp}$, u bij, $u(F) \subset F$, dim finie $\Rightarrow$  u(F)=F $\Rightarrow$  $u^{-1}$ iso laisse stable F, donc $y\in F$, $(u(x)|y)=(x|u^{-1}(y))=0$ donc $u(x)\in F^{\perp}$
- Group $\perp$ O(E) $\rightarrow$  ensemble des iso $\subset GL_n(E)$, ens stable par composit°
- Grp Special $\perp$ $\rightarrow$  SO(n) = $O^+(n)$, ==iso vect det(M)=1== ($\ne O^-(n)$ det=-1)
- SO(2) $\rightarrow$  rotations 
$$  
R_\theta=  
\begin{pmatrix}  
\cos\theta & -\sin\theta\\  
\sin\theta & \cos\theta  
\end{pmatrix}.  
$$
- ==Demo O(2)== $\rightarrow$  A=mat(a,b,c,d) $\in$ O(2) $\Rightarrow$  $a^2+b^2=1$, $c^2+d^2=1$, $ac+bd=0$ donc va $\le$ 1 $\Rightarrow$  paramétrisation $a=cos(\theta)$ donc $b=sin(\theta)$ idem c,d avec $\phi$, or (3)$\Rightarrow$  $sin(\theta+\phi)=0$ donc $\phi=-\theta[\pi]$ donc deux cas $\phi=-\theta[2\pi]$ (SO(2)) et $\phi=\pi-\theta[2\pi]$ ($O^-(n)$) 
- Prop $R_\theta$ $\rightarrow$  $R_\theta=R_\phi$ $\Rightarrow$  $\theta \equiv \phi \pmod{2\pi}$, $R_\theta R_\phi=R_{\theta+\phi}$, $R_\theta^{-1}=R_{-\theta}$, $R_{\theta}^k=R_{\theta k}$ 
- $O^-(2)$ $\rightarrow$  symétries (donc $S_{\theta}$ sym)$$ S_\theta=\begin{pmatrix}
cos(\theta) & sin(\theta) \\
sin(\theta) & -cos(\theta) \\
\end{pmatrix}$$
- Sym/autoadj $\rightarrow$  u(E) tq $(x|u(y))=(u(x)|y)$ $\Leftrightarrow$  M tq $\exists$ bon ou M sym
(( u<S alors sep orthog))
- Proj et sym sont orthog si < S(E)
- Thm spectrale $\rightarrow$  u autoadj $\Rightarrow$  u diag ds bon vecteurs propres, et P $\in$ O(E),  $P^{-1}MP=P^{\mathsf T}MP=D$ 
- ==THM sp== $\rightarrow$  M symétrique à coefficients $\mathbb{R}$ est diagonalisable, si u un endo sym d'un eve E $\Rightarrow$  $\exists$ bon de E constituée de vect propres
- Forme linéaire $\rightarrow$  $f:E \rightarrow \mathbb{R}$ linéaire, de rang 1 sauf si identiquement nulle
- THM de représentation de Riesz $\rightarrow$  H espace de Hilbert, f forme linéaire $\mathcal{C}$, def sur H $\Rightarrow$  $\exists ! y \in H$ tq $\forall x \in H$, f(x)=⟨x,y⟩
- ==THM determinat° app par base== $\rightarrow$  $(e_i)_{i\in I}$ base de E, $(f_i)_{i\in I}$ fam de F : $\exists !u\in\mathcal L(E,F)$ tq $u(e_i)=f_i$ pour tout $i\in I$, et u inj $\Leftrightarrow$  $(f_i){i\in I}$ libre ds F; u surj $\Leftrightarrow$  $(f_i)_{i\in I}$ gen de F; u bij $\Leftrightarrow$  $(f_i)_{i\in I}$ base de F.
##### Normes:
- ==norme sur ev E== $\rightarrow$  positive, séparable ( $||x||=0$ $\Rightarrow$  x=$0_E$), homogène ($||\lambda x||=|\lambda|.||x||$), respecte IT alors (E,$||.||$) est EVN 
- Norme 1 E $\rightarrow$  $||x||_1=\sum^n_{k=1} |x_k|$
- Norme 1 $\mathcal{C}$ $\rightarrow$  $||f||_1=\sqrt{\int_a^bf^2}$ 
- Norme 2 E $\rightarrow$  $||x||_2=\sqrt{\sum^n_{k=1} |x_k|^2}$
- Norme inf $\rightarrow$  $||x||_{+\infty}=max_{1 \le k \le n}(|x_k|)$ 
- Norme CVU $\rightarrow$  ev applicat°s bornées de X ds $\mathbb{K}$ admet $||f||_{\infty}=sup_{x \in X}|f(x)|$
- ==Norme== $\rightarrow$  Je trouve ça pas NORMALE qu'il soit POSITIVE de SÉPARER ($||x||=0 \Rightarrow$ x=0) les HOMOsexuels ($||\lambda x||=|\lambda|||x||$) afin de réduire les INÉGALITÉS (triangulaire)
- CS $\rightarrow$  $|<x,y>| \le ||x||.||y||$ 
- Minowski (triang) $\rightarrow$  $||x+y|| \le ||x||+||y||$ 
- CS canon $\rightarrow$  $|\sum a_ib_i| \le \sqrt{\sum a_i^2} \sqrt{\sum b_i^2}$ 
- Minowski canon $\rightarrow$  $\sqrt{\sum (a_k+y_k)^2} \le \sqrt{\sum a_k^2} + \sqrt{\sum b_k^2}$ 
- f $\mathcal{C}^0$ $\rightarrow$  Minowski  (eg CS aussi) $\sqrt{\int^b_a|f+g|^2} \le \sqrt{\int^b_a|f|^2} \sqrt{\int^b_a|g|^2}$ 
- Montrer fermé $\rightarrow$  1) existe tjrs boule centré tt point 2) image par f° continue d'un fermé

##### Normes de Matrice:
- Si E a une structure d'algèbre (e.g. E est l'algèbre des matrices carrées d'ordre n sur $\mathbb{R}$) une norme matricielle (ou norme d'algèbre) N sur E est une norme qui respecte la structure de ce produit donc tq $N(AB)\le N(A)N(B)$ 

## Topologie

##### général
- f paire et $\mathcal{C}^2$ $\rightarrow$  f'(0)=0
- Ouvert $\rightarrow$  au vois $\forall$ pts (existe boule incluse rayon $\ne 0$ : $\forall a \in A$, $\exists r>0$, $B(a,r) \subset A$ ) : caract image réciproque par fonction continue d'un evn
- B fermé $\rightarrow$  image réciproque par fonction continue d'un fermé d'un evn; $\Rightarrow$  $\mathbb{R}^2/B$ ouvert
- ==Voisinage== $\rightarrow$  $V \in \mathbb{R}^2$ est vois $a \in \mathbb{R}^2$ $\Leftrightarrow$  $\exists r \in \mathbb{R}^*_+$, $B(a,r) \subset V$ 
- f $\mathcal{C}$ pt de $\mathbb{R}^2$ $\rightarrow$  $a\in A$ un ouvert, $\forall \epsilon >0$,$\exists \delta>0$, $\forall x \in A$, $||x-a|| \le \delta $\Rightarrow$  |f(x)-f(a)| \le \epsilon$ $\Leftrightarrow$  $x \in \bar{B}(a,\delta)$ $\Rightarrow$  $f(x) \in \bar{B}(f(a),\epsilon)$ 
##### Calcul diff plusieurs var :
- (cof)'(x)=f'(x)c'(f(x)) cofi fi cif ((covfi fi siph)
- f $\mathcal{C}$ A ouvert $\rightarrow$  f $\mathcal{C}$ tt pt $\Leftrightarrow$  app partielles (1 var non fixée) $\mathcal{C}$ en tt pt
- ==d' partielle en $x_0$ existe== $\rightarrow$  $lim _{t\rightarrow x_0} \frac{f\binom{t}{y_o}-f\binom{x_o}{y_o}}{t-x_o}$  $=\frac{\partial f}{\partial x}\binom{x_o}{y_o}=\partial_1f$ existe ($\Leftrightarrow$  $h=t-x_o$)
- f $\mathcal{C}^1$ sur ouvert $\rightarrow$  admet 2 d' part. $\mathcal{C}$ 
- Dev Taylor = ==DL1== f $\mathcal{C}^1$ en $a=\binom{x_o}{y_o}$ $\rightarrow$  $f(X)=f(a)+\partial_1f(a)(x-x_o)$$+\partial_2f(a)(y-y_o)+o(||X-a||)$ ou idem avec $a'=(x_o+h,y_0+k)$ avec un $o(||(h,k)||)$ 
- IAF $\rightarrow$  
- ==Plan tangent== $\rightarrow$  DL1(a) $\Rightarrow$  plan tangent $z=$ $f(a)+(x-x_0)\frac{\partial f}{\partial x}(x_0,y_0)+(y-y_0)\frac{\partial f}{\partial y}(x_0,y_0)$
- ==Gradient== f $\mathcal{C}^2$ $\rightarrow$  $\nabla f=\binom{\partial_1f}{\partial_2f}$, orienté pente max et =0 en pt crit ; dans Taylor $f(a')=f(a)+<\nabla f(a)|(h,k)>$$+o(||(h,k)||)$ 
- f d' selo' vecteur u $\rightarrow$  $\frac{f(a+tu)-f(a)}{t}$ admet lim finie $t\rightarrow 0$ noté $f'(a)=\partial_uf(a)=<\nabla f(a),u>$ 
- ==Jacobienne== $\rightarrow$  mat $J_f(a) \in M_n$ des $\frac{\delta f_i}{\delta x_j}(a)$ 
- Jacob composée f,g $\mathcal{C}^1$ $\rightarrow$  donne RDlC $J_{g\circ f}(a)=J_g(f(a))J_f(a)$ 
- RdLC f: $\mathbb{R} \rightarrow \mathbb{R}^n$ et g inverse $\rightarrow$  $\frac{d g \circ f}{dt}(t)=\sum^n_{j=1}\frac{\delta g}{\delta x_j}(f(t)) \frac{dx_j}{dt}(t)$ = $(\nabla g(f(t))|f'(t))$
- ==RdLC 1 var== $\rightarrow$  $(u \circ v)'=v'.u' \circ v$ donc $\frac{d}{dt}f\circ x(t)=\frac{d f}{dt}(x(t)) x'(t)$   
- ==RdlC 2 var== $\rightarrow$  $X(t)=\binom{x(t)}{y(t)}$ alors $\frac{d}{dt}(f \circ X(t))=\frac{\partial f}{\partial x}(X(t)).x'(t)+\frac{\partial f}{\partial y}(X(t)).y'(t)$ 
- ==Hessiene== $\rightarrow$  mat $M_f(a) \in M_n$ des $\frac{\delta^2 f}{\delta x_j \delta x_j}(a)$
- Extremum local (ext. loc.) f $\mathcal{C}^0(U)$ $\rightarrow$  $\exists B(a,r)$ ouverte tq $\forall x\in U \cap B$, $f(x) \ge 0$ min (ou $\le 0$ max)
- CS a min (max) $\rightarrow$  $\nabla f(a)=0$ et $H_f(a)\in S_n^{++}$ ($S_n^{--}$ pr max)
- CN a ext $\rightarrow$  $H_f(a)\in S_n^{+}\cup S_n^{-}$ 
- Hessienne f $\mathcal{C}^2$ 2 var $\rightarrow$  a pt crit, $H_f(a)=Mat(r,s,s,t)$ (Swartz) 
- ==Cas a ext. loc. pr f° $\mathcal{C}^2$ 2 var== $\rightarrow$  $det(H_f(a)) \ge 0$ et min si $tr(H_f(a)) \ge 0$ (max $\le 0$) 
- ==Cas $det(H_f(a)) > 0$ pr f° $\mathcal{C}^2$ 2 var== $\rightarrow$  a ext. loc. et $tr(H)>0$ $\Rightarrow$  min loc. (<0 $\Rightarrow$  max loc.) 
- C'est toujours l'inverse signe pour max min pr trace et def pos neg

---





