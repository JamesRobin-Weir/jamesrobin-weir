---
{"dg-publish":true,"permalink":"/espci-triboelectricite/espci-s1/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## Compte rendu de stage : premier semestre 

Ce document vise à rendre compte des expériences et donc des montages réalisés, ainsi que des données recueillis, lors du premier semestre du stage portant sur la triboélectricité liquide. 
## Glissement sur un wafer de silice silanisée (12 décembre)
 Afin de rendre compte pour la première fois du phénomène triboélectrique liquide, nous avons effectué le montage classique suivant :

![Plaque_silice_schema.png\|Schema extrait de Nature Physics doi 10.1038](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Plaque_silice_schema.png)

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data

## Text Elements
Surface hydrophobe 
Fil de tungsten 
+ 
+ 
+ 
- 
- 
- 
Amplification 


</div></div>

La seule différence était que les deux électrodes, des fils de tungsten, étaient disposés sur la surface de la plaque perpendiculairement à la direction du glissement. L'angle $\alpha$ était choisi à 67° grâce à un support rotatoire.

L'intensité résultant de la décharge de la goutte passant sur l’électrode inférieur était à la fois amplifié et converti en tension par un amplificateur à transimpédance FEMTO DLPCA-200, avec un facteur de proportionnalité $R_f$ tq $V_{out}=-I_{in}R_f$. 

Dans notre cas $R_f=10^6$ V/A avec le réglage "low", avec une sortie en full bandwidth (FBW) sans filtre en courant continu et sans bias. 

Afin de réduire au plus le bruit électromagnétique ambiant, l'ensemble du montage à été isolé dans une cage de Faraday, et les composantes conductrices non porteurs du courant dans le circuit principal ont étés mises à la terre.

Les gouttes ont étés déposés à la main grace à une seringue au bout d'un tube plastique flexible avec un débit tournant autour de 5 gouttes par seconde en moyenne.
### Résultats
Sur le logiciel DAQ Express nous avons enregistré les mesures de tensions suivantes :

![Tension_plaque.png\|Evolution temporelle de la tension mesurée](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Tension_plaque.png)
La valeur moyenne du bruit sur les 4 premières secondes est de $B=-0.001$ volts. Cela est non négligeable, on voit que le signal n'est pas centré en 0 donc on ajoute $|B|$ à chaque mesure.

Ensuite il faut diviser par le facteur $R_f$ pour obtenir les intensités correspondantes mesurées à l'amplificateur à transimpédance. On supprime aussi le signal en dessous d'un seuil de 0,007 μA, ce qui donne le graphe suivant :

![Intensité_plaque.png\|Evolution temporelle de l'intensité mesurée](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Intensit%C3%A9_plaque.png)
On peut alors calculer l'aire de chaque pic pour obtenir la charge sachant que : $$Q=\int_{t_{i}}^{t_{f}} I(t) \, dt=-\dfrac{1}{R_{f}}\int_{t_{i}}^{t_{f}} V(t) \, dt$$Cela donne le graphique suivant qui montre une décroissance exponentielle de la charge déposée avec le nombre de gouttes déposées.

![Charges_plaque.png\|Saturation de la plaque](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Charges_plaque.png)
On voit donc que la plaque devient saturée en charges à partir de la quarantième goutte, ou la variation de la charge est uniquement du au bruit (comparer la largeur type) : un régime permanent est donc atteint. 

Au niveau d'une seule goutte (par exemple la première) on peu analyser la forme du signal.

![Pic1_plaque.png\|Forme du premier pic](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Pic1_plaque.png)
On voit qu'il y a une décharge rapide initiale avec l'arrivée de la tête de la goutte sur l'électrode, puis une décharge plus lente lors du passage du milieu et de la queue de la goutte.
## Glissement dans un capillaire plastique (27 novembre)
Dans le cadre de ce stage on souhaite plus particulièrement s'intéresser au cas du passage des gouttes dans des fins capillaires. 

Pour cela j'ai réalisé un montage similaire en remplaçant la plaque par une pipette plastique coupée aux deux extrémités, sans traitement hydrophobe en surface.


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data

## Text Elements
Amplification 
Continuous flow 
Taylor slugs 
+ 
+ 
+ 
+ 
+ 
+ 
- 
- 
- 
- 
- 
- 
+ 
+ 
+ 
+ 
+ 
+ 
- 
- 
- 
- 
- 
- 


</div></div>



![[Montage.jpg\|Montage glissement dans un capillaire]]
Le montage étant disposé à la verticale avec la goutte occupant tout une section du capillaire, j'ai élargi la cage de Faraday précédente pour l’accueillir. Sinon la manipulation est restée inchangée par rapport à la première expérience. 
### Résultats
![Tension_capillaire.png\|Evolution temporelle de la tension pour le capillaire](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Tension_capillaire.png)
La valeur moyenne du bruit sur les 10 premières secondes est de $B=-0.0004$ volts. La précision en gain de l'amplificateur à transimpédance est de ±1 % de 10⁶ :$$\frac{u(V)}{V} =\sqrt{\left(\frac{u(R_{f})}{R_{f}}\right)^2}$$Donc $u(V)=0.01 V \approx 10^{-3} \gg B$, on voit que cette valeur de bruit est négligeable en vue de cette incertitude sur $R_f$ 

On divise alors directement par $R_f$, puis on coupe le signal en dessous du seuil de 0,11 μA, ce qui donne le graphe suivant :

![Intensite_capillaire.png\|Accumulation de charges pour le capillaire](/img/user/ESPCI%20Tribo%C3%A9lectricit%C3%A9/Intensite_capillaire.png)
On remarque que chaque pic après dé-bruitage est triangulaire, caractérisée par une seule valeur d'intensité non nulle, de la façon suivante (premier pic) :

[](Pic1.png)

On ne peut donc pas voir l'évolution de l'intensité lors du passage de la goutte sur l’électrode inférieur comme pour le premier montage. Il faudrait pour cela augmenter la fréquence d’échantillonnage. Cela pourrait être du à la vitesse plus importante de la goutte glissant à la vertical.


## Frog spawn


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data

## Text Elements
Amplification 
charging 


</div></div>
