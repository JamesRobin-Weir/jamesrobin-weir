---
{"dg-publish":true,"permalink":"/spectroscopie-d-impedance-electrochimique-sie/"}
---

# Spectroscopie d'impédance électrochimique (SIE)
La spectroscopie d’impédance électrochimique (SIE) est une technique de caractérisation d'un système électrochimique (batterie, électrolyseur, pile à combustible) qui consiste à appliquer un signal alternatif de faible amplitude au système électrochimique et à en mesurer la réponse à différentes fréquences.

![SIE_white.png](/img/user/Excalidraw/SIE_white.png) 
	_Fig. : Réponse imaginaire et réel à l'excitation de la SIE (wikipedia)_

---
## Informations préliminaires

**Principe de la méthode**
On impose un potentiel $E_0cos(\omega t)$ et on mesure i(t) en sortie (ou inversement), puis on prends la transformée de Fourier pour passer du domaine temporel au domain spectral.

- **SIE potentiostatique** : On impose V(t) afin de mesurer i(t)
- **SIE galvanostatique** : On impose i(t) afin de mesurer V(t)

On calcul l'impédance $Z=\dfrac{E(\omega)}{i(\omega)}$ qui est complexe à priori.

- **Diagramme de Bode** -> 2 graphes, l'amplitude et puis l'angle de phase en fonction de la fréquence

En coordonnées polaires on graphe $Ze^{i\theta}$ directement, ou sinon on peut projeter $Z$ selon x et y (tel que $Z_x=Z_{réel}=Z*\cos(\theta)$ et idem pour $Z_y$, tel que $Z=\sqrt{Z_x^2+Z_y^2}$ ), qui donne le graphe suivant :

![Impedance_cartesien.png](/img/user/Impedance_cartesien.png)
- **Diagramme de Nyquist** -> norme de l'impédance $Z$ et l'angle de phase $\theta$  en fonction de la fréquence imposée
![Nyquist_Bode.png](/img/user/Nyquist_Bode.png)
- Cela permet de faire un modèle électrique (circuit), puis de faire du fitting pour déterminer les valeurs des composantes (voir ce [site de fitting](https://app.circuitfitting.net/tools/fitting))
### Ordres de grandeur
- Temps de chargement de la double couche électronique -> microseconde
- Temps caractéristique de diffusion -> centaine de milliseconde
- Basse fréquence  <=> processus haute impédance, comme la diffusion
- Sur le spectre, la réaction anodique doit correspondre aux fréquences basses, car la HER ($2H2O \rightarrow O_2 + 4e^- +4H^+$) est la réaction cinétiquement limitante (lente)

---
### Impedance de Warburg

![Warburg.png](/img/user/Warburg.png)
Associée à la diffusion, ce régime est caractérisé par une ligne à 45° dans le diagramme de Nyquist, ce qui signifie que les porteurs de charge se déplacent à une vitesse constante. Cela peut être rationalisé de la manière suivante :

- **Impédance réelle** = distance de diffusion dans la couche d'oxyde, 
- **Impédance imaginaire** = délai nécessaire à la diffusion de l'ion (à travers la couche d'oxyde)

Alors si le rapport $\dfrac{Z_i}{Z_r}$ est linéaire avec la fréquence, alors les deux vitesses sont linéairement corrélés. Si la pente est de 45° alors elles sont égales.

---
Sources : https://pineresearch.com/support-article/eis-basics/