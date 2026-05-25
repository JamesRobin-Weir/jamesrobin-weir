---
{"dg-publish":true,"permalink":"/espci-zinc-ion-batteries/comment-comparer-differentes-batteries/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

# Comment comparer différentes batteries?
Il existe de nombreux standards et grandeurs permettant de caractériser différentes batteries entre eux. Ce qui suit est une survol de quelques-uns souvent rencontrés :

---
### Capacité énergétique

- Le **wattheure** (Wh) est une unité d'énergie équivalente à un watt de puissance consommé pendant une heure. En charge, on note Λ la capacité en Ah/kg.
- La **densité énergétique** est la quantité d'énergie contenue dans une batterie par rapport à sa taille, généralement mesurée en wattheures par litre.
- L'**énergie spécifique** est la quantité d'énergie contenue dans une batterie par rapport à son poids, en wattheures par kilogramme.
---
### Caractérisation de la charge/décharge

- Les performances de charge et de décharge (puissance de la batterie) décrivent la vitesse à laquelle un courant électrique peut circuler à travers une batterie, mesurée en **C-rate**.
- 1C représente le courant nécessaire pour (dé)charger une batterie complètement chargée en une heure (courant (A) = capacité (Ah)). Pour une batterie de 5 Ah : décharge de 0,5 C = courant de décharge de 2,5 A. Une batterie d'une capacité de 6 C pourrait (dé)charger en environ 10 minutes.

Les capacités de charge et de décharge à haut débit sont essentielles pour obtenir une charge rapide et répondre à des besoins élevés en énergie, mais elles réduisent généralement la capacité disponible réelle et affectent la durée de vie.

- La **durée de vie cyclique** d'une batterie correspond au nombre de cycles de charge et de décharge complets qu'une batterie peut effectuer avant que son niveau de capacité ne tombe en dessous de 80 %.

Au cours d'un essai de cycles de charge-décharge à un certain taux de charge, les paramètres suivants sont généralement enregistrés :

- Rendement coulombique (CE) : rapport entre la charge libérée lors de la décharge (Ah) et la charge introduite lors de la charge (Ah). Un rendement coulombique élevé indique généralement une longue durée de vie de la batterie : $CE=\dfrac{Q_{décharge}}{Q_{charge}}$ et $Q_n=Q_0CE^n$, donc $n=\dfrac{ln(Q_n/Q_0)}{ln(CE)}$
- Rendement voltaïque (VE) : mesure les effets de la polarisation de la cellule ou des pertes de tension de la cellule, calculé à l'aide de l'équation suivante $\eta_v=\dfrac{\frac{1}{t_{décharge}}\int V_{décharge}\mathrm{d}t}{\frac{1}{t_{charge}}\int V_{charge}\mathrm{d}t}×100$
- Rendement énergétique (EE) : rapport entre l'énergie produite et l'énergie consommée pendant les cycles de charge et de décharge ; les batteries lithium-ion atteignent généralement des rendements supérieurs à 95 % : $EE=\dfrac{I_{discharge}V_{discharge}}{I_{charge}V_{charge}}$

---
### Caractéristiques physiques de la batterie

- La **durée de vie calendaire** correspond à la dégradation qui se produit au fil des années lorsque la batterie est inactive, tout en conservant sa capacité énergétique. La dégradation liée est considérée indépendante à celle due aux cycles d’utilisation (par exemple, une baisse de 10 % de la capacité due à la durée de vie calendaire + 10 % due à la durée de vie cyclique = 80 % de capacité restante).
- Le **taux de gonflement** d'une batterie lithium-ion correspond à la quantité de matière de l'anode contenue dans la batterie qui se dilate lors de la charge.
- L'**impédance** correspond à la résistance d'une cellule lorsqu'elle est stimulée par un courant électrique.
- Les **performances de stockage** décrivent la manière dont, après une période de stockage, les performances de la batterie peuvent changer en raison de certains facteurs, entraînant une auto-décharge de la batterie, une fuite d'électrolyte, un court-circuit de la batterie, etc.