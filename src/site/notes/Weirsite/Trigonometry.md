---
{"dg-publish":true,"permalink":"/weirsite/trigonometry/","dg-note-properties":{}}
---


***
# {{Home Page| Home}} | {{Projects}} | {{CPGE|Classes Préparatoires (CPGE)}} | [CV](https://github.com/JamesRobin-Weir/jamesrobin-weir/blob/main/src/site/CV_James_Robin-Weir.pdf)
***

## Comment retrouver toutes les formules de trigonométrie

#### Euler
- EULER ($L_1$) -> $e^{ix}=\cos x + i\sin x$
- EULER ($L_2$) -> $e^{-ix}=\cos x - i\sin x$
- $\dfrac{L_1+L_2}{2}$ -> $\cos x = \dfrac{e^{ix}+e^{-ix}}{2}$
- $\dfrac{L_1-L_2}{2}$ -> $\sin x = \dfrac{e^{ix}-e^{-ix}}{2}$ 
#### Moivre
- MOIVRE -> $(e^{ix})^n = e^{inx}$
- $(\cos x + i\sin x)^n = \cos nx + i\sin nx$ 
#### Addition
- $e^{i(a+b)}=e^{ia}e^{ib}$ 
- $\cos (a+b) + i\sin (a+b)= (\cos a + i\sin a)(\cos b + i\sin b)$  $=\cos a\cos b - \sin a \sin b + i(\cos a \sin b + \cos b \sin a)$
- Partie $\mathbb{R}$ -> $\cos (a+b)=\cos a\cos b - \sin a \sin b$ $(L_3)$ 
	- $\cos (a-b)=\cos a\cos b + \sin a \sin b$ $(L_4)$
- Partie $\mathbb{C}$ -> $\sin (a+b)=\cos a \sin b + \cos b \sin a$ $(L_5)$ 
	- $\sin (a-b)= -\cos a \sin b + \cos b \sin a$ $(L_6)$
- Tangente $(L_3)$ et $(L_5)$ -> $\tan (a+b) = \dfrac{\tan b + \tan a}{1-\tan a \tan b}$ 
#### Duplication (découle addition)
- $\cos 2a = \cos^2 a - \sin^2 a$ 
- $\sin 2a = 2 \cos a \sin a$
- $\tan 2a = \dfrac{2\tan a}{1-\tan ^2 a}$
#### Linéarisation
- $\frac12(L_4+L_3)=(L_7)$ -> $\cos a \cos b=\frac12 (\cos (a-b) +\cos (a+b))$ 
- $\frac12(L_4-L_3)=(L_7)$ -> $\cos a \cos b=\frac12 (\cos (a-b) -\cos (a+b))$ 
- $\frac12 (L_5+L_6)= (L_9)$ -> $\sin a \cos b=\frac12 (\sin (a+b) +\cos (a-b))$
#### Factorisation
- Soient $p=a - b$ et $q=a+b$ alors $a=\frac{p+q}{2}$ et $b=\frac{q-p}{2}$ 
- $L_7$ -> $\cos p + \cos q = 2 \cos (\frac{p+q}{2}) \cos (\frac{q-p}{2})$
- $L_8$ -> $\cos p - \cos q = 2 \cos (\frac{p+q}{2}) \sin (\frac{q-p}{2})$ 
- $L_9$ -> $\sin p + \sin q = 2 \sin (\frac{p+q}{2}) \cos (\frac{q-p}{2})$
- $-\sin q = \sin{(-q)}$ -> $\sin p - \sin q = 2 \sin (\frac{p-q}{2}) \cos (\frac{p+q}{2})$
##### p=0
- $1+\cos q = 2 \cos^2 (\frac q2)$
- $1-\cos q = 2 \sin^2 (\frac q2)$
#### Angle moitié
- $t=\tan \frac x2$ 
- $(L_{10})$ -> $\tan x = \dfrac{2 \tan \frac x2}{1-\tan^2 (\frac x2)}=\dfrac{2t}{1-t^2}$ 
- $(L_3)$ puis $(L_{12})$-> $\dfrac{\cos ^2 ( \frac x2) - \sin ^2 (\frac x2)}{\cos ^2 ( \frac x2) + \sin ^2 ( \frac x2)}=\dfrac{1 - \tan ^2 ( \frac x2)}{1+\tan ^2 (\frac x2)}=\dfrac{1-t^2}{1+t^2}$ 
- $(L_{11} \times L_{12})$ -> $\sin x = \dfrac{2t}{1+t^2}$ 