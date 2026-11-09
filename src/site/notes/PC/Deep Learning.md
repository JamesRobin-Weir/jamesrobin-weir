---
{"dg-publish":true,"permalink":"/pc/deep-learning/","dg-note-properties":{}}
---


# Corrigé du devoir de Deep Learning

## Exercice 1 – Convolution 2D, ReLU et MaxPooling

### Données de l'énoncé

| Paramètre | Valeur | Signification |
|-----------|--------|---------------|
| $B$ | $500$ | Nombre d'images |
| $C$ | $2$ | Canaux d'entrée |
| $H, W$ | $194, 194$ | Dimensions des images |
| $K$ | $5$ | Nombre de classes |
| $F$ | $8$ | Canaux de sortie |
| $D$ | $6$ | Taille du filtre pour la question 3 |

---

### Question 1 – Dimensions du tenseur de sortie

La convolution possède les paramètres suivants :

- **Filtre :** $3 \times 3$
- **Stride :** $S = 1$
- **Padding :** $P = 1$
- **Canaux de sortie :** $F = 8$

La formule de calcul d'une dimension spatiale est :

$$
H_{\text{out}} = \left\lfloor \frac{H + 2P - K_f}{S} \right\rfloor + 1
$$

**Application :**

$$
H_{\text{out}} = \frac{194 + 2(1) - 3}{1} + 1 = 194
$$

Même calcul pour la largeur :

$$
W_{\text{out}} = 194
$$

**Réponse :**

$$
\boxed{(500,\ 8,\ 194,\ 194)}
$$

La convolution conserve les dimensions spatiales et transforme les $2$ canaux d'entrée en $8$ canaux de sortie.

---

### Question 2 – Nombre de paramètres du filtre

Pour une convolution 2D :

$$
N = (K_h \times K_w \times C + 1) \times F
$$

Le $+1$ correspond au biais de chaque canal de sortie.

**Application :**

$$
N = (3 \times 3 \times 2 + 1) \times 8
$$

$$
N = (18 + 1) \times 8
$$

$$
N = 152
$$

**Réponse :**

$$
\boxed{152\text{ paramètres}}
$$

Soit **144 poids et 8 biais**.

Sans biais, le nombre de paramètres est de $144$.

---

### Question 3 – Padding pour un filtre $(D,D)$

Pour conserver les dimensions spatiales avec un stride de $1$ :

$$
P = \frac{D - 1}{2}
$$

Avec $D = 6$ :

$$
P = \frac{6 - 1}{2} = 2{,}5
$$

Le padding doit donc être **asymétrique**, car on ne peut pas ajouter $2{,}5$ pixels.

**Réponse :**

Utiliser un padding de **2 pixels d'un côté et 3 pixels de l'autre**, pour chaque dimension.

On peut également utiliser `padding="same"` dans PyTorch avec un stride de $1$.

---

### Question 4 – Intérêt de ReLU par rapport à la sigmoïde

La fonction **ReLU** est définie par :

$$
\operatorname{ReLU}(x) = \max(0,x)
$$

La fonction **sigmoïde** est :

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

**Réponse :**

ReLU limite le problème de **disparition du gradient** (*vanishing gradient*) pour les valeurs positives, contrairement à la sigmoïde qui sature aux valeurs extrêmes.

ReLU est également plus rapide à calculer et favorise un apprentissage plus efficace des réseaux profonds.

---

### Question 5 – Application du MaxPooling2D

**Matrice d'entrée :**

$$
X =
\begin{pmatrix}
-26 & 1 & -22 & -21 & -12 & 39 \\
50 & 29 & -37 & 17 & -37 & 19 \\
13 & 21 & -10 & -4 & 36 & 48 \\
-35 & -1 & -19 & -37 & 30 & 34 \\
12 & -20 & 21 & 2 & -3 & 16 \\
-39 & -6 & -49 & -10 & 4 & 7
\end{pmatrix}
$$

**Paramètres :**

- **Fenêtre :** $5 \times 5$
- **Stride :** $S = 2$
- **Padding :** $P = 1$

#### Étape 1 – Calculer la dimension de sortie

$$
H_{\text{out}} = \left\lfloor \frac{6 + 2(1) - 5}{2} \right\rfloor + 1
$$

$$
H_{\text{out}} = \lfloor 1{,}5 \rfloor + 1 = 2
$$

Même calcul pour la largeur :

$$
W_{\text{out}} = 2
$$

On obtient donc une matrice de dimension :

$$
\boxed{2 \times 2}
$$

#### Étape 2 – Trouver le maximum de chaque fenêtre

Pour chaque fenêtre de taille $5 \times 5$, on conserve la valeur maximale.

| Position | Maximum |
|----------|---------|
| Haut gauche | $50$ |
| Haut droite | $48$ |
| Bas gauche | $50$ |
| Bas droite | $48$ |

Le MaxPooling conserve uniquement la plus grande valeur de chaque fenêtre.

**Réponse :**

$$
\boxed{
\begin{pmatrix}
50 & 48 \\
50 & 48
\end{pmatrix}
}
$$

---

### Question 6 – MaxPooling $(4,4)$ pour diviser les dimensions par 2

On cherche à obtenir :

$$
H_{\text{out}} = \frac{H}{2}
$$

La formule générale est :

$$
H_{\text{out}} =
\left\lfloor
\frac{H + 2P - 4}{S}
\right\rfloor + 1
$$

On choisit :

- **Stride :** $S = 2$
- **Padding :** $P = 1$

**Application :**

$$
H_{\text{out}} = \frac{H + 2 - 4}{2} + 1
$$

$$
H_{\text{out}} = \frac{H - 2}{2} + 1
$$

$$
H_{\text{out}} = \frac{H}{2}
$$

**Réponse :**

$$
\boxed{S = 2,\quad P = 1}
$$

Ces paramètres divisent la hauteur et la largeur par $2$ lorsque les dimensions d'entrée sont paires.

**Exemple en PyTorch :**

```python
nn.MaxPool2d(kernel_size=4, stride=2, padding=1)
```

---

