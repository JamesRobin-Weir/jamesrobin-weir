---
{"dg-publish":true,"permalink":"/weirsite/projet-independent-en-groupe-batteries-zinc-ion-aqueuses/"}
---

# **Enhancing aqueous Zinc-ion batteries**

![Dendrites_MVC.png](/img/user/Dendrites_MVC.png)
	_Fig. 1 : Dendrites dans une batterie zinc de Prof. Rong Kou, MVC 13 Awards Gallery_

Auteurs : Samir BERRADA, Mia BOURGEOIS, João Pedro CINTO DENARDI, Patricia DE OLIVEIRA MORAIS NAKAJIMA, Pierre HAÏOUN, James ROBIN-WEIR

Cliente : Vanessa PIMENTA (IMAP, ESPCI)

# I) Introduction 

La technologie Lithium Fer Phosphate (LFP) domine aujourd’hui le marché des batteries, présent dans 40% des ventes de voitures électriques et 80% des nouveaux centres de stockage électriques (selon l’IEA, 2023). Cela est dû à leur haute densité énergétique, et leur résistance importante aux cycles charge-décharge. Cependant, la rareté et l’impact à l’extraction du lithium, ainsi que le risque associé au degré d’inflammabilité élevé des électrolytes organiques, limitent ses applications. Cela est encore plus marqué lorsqu’il s’agit d’alimenter une transition énergétique électrique totale, dans le cadre de la lutte contre le réchauffement climatique et la sortie des énergies fossiles.  

Alors, des technologies alternatives performantes et écologiques d'[[Weirsite/Accumulateur\|accumulateur]] doivent être mises au point. Parmi elles, les batteries Zinc Ion (ZIBs) ont plusieurs avantages conséquents. Le coût du zinc, élément relativement abondant, est de $2/kg (US) par rapport à $19/kg pour le lithium<sup><a href="https://www.zotero.org/google-docs/?IeZqMB">1</a></sup>. De plus, le zinc a un impact écologique nettement moindre durant l’intégralité de son cycle de vie<sup><a href="https://www.zotero.org/google-docs/?rPvKvm">1</a></sup>, est multivalent et possède un rayon atomique faible donc une capacité volumique encore plus importante<sup><a href="https://www.zotero.org/google-docs/?J8jUyB">2</a></sup>. Enfin, son potentiel redox à -0,76 V/EHS permet aux ZIBs de se passer des électrolytes organiques et d’utiliser un électrolyte aqueux. 

Néanmoins, comme il en est aussi pour les batteries Li-ion, il reste diverses limitations chimiques plus ou moins résolues, comme la formation de dendrites. Ces croissances métalliques à l’anode provoquent des court-circuits dans la batterie (Fig. 2. f.), et nuisent à sa durée de vie. Elles se forment en deux stades: initialement les ions Zn²⁺ se réduisent de façon hétérogène sur la surface de l'électrode de zinc. Ceci engendre la création d’agglomérats (Fig. 2. d.), qui vont grandir en pointe selon différentes géométries (Fig. 2 e.) en direction de la cathode. Ces croissances favorisent aussi des réactions parasites comme la réduction de l’eau (Hydrogen Evolution Reaction : HER, Fig. 2 b.), et si les dendrites viennent à casser entraînent une perte du zinc et donc une diminution de la capacité totale de la batterie. 

![ZIB_Dendrite_types.png](/img/user/ZIB_Dendrite_types.png)

*Fig. 2 : Illustration schématique de la déposition d’ions zinc sur l'électrode²

Plusieurs techniques existent afin de limiter ces croissances. Pour les piles Li-ion, l'électrolyte organique va former une phase intermédiaire protectrice ([[Weirsite/SEI\|SEI]]) à la surface de l’anode, permettant le passage des ions tout en dé-favorisant la formation de dendrites. En milieu aqueux, nous pouvons avoir recours à des additifs dans l'électrolyte, ou bien des traitements de surface par des matériaux poreux qui permettent le passage des ions zinc mais empêchent la croissance du zinc métallique.


# II) Compte-rendu des discussions avec la cliente et la tutrice 

**Entrevue avec Prof. Domitille Giaume :**

Tout d’abord, nous avons rappelé les enjeux du PIG, de la problématique du sujet et du fonctionnement général des piles. Ensuite, nous avons eu une discussion sur les informations récoltées à propos des batteries zinc-ion aqueuses (aZIBs), comprenant les mécanismes de formations des dendrites par diffusion selon différentes géométries, et comment minimiser leur formation. Prof. Giaume nous a recommandé de s’informer sur la formation de dendrites dans différentes technologies de batteries, car le phénomène de formation reste similaire. De plus, on peut trouver différentes techniques empêchant la formation de dendrites, telles que les modifications de l’électrolyte, les différents alliages Zn-Métal de l’anode, et les matériaux poreux ou revêtement à l’anode.

**Entrevue avec Vanessa Pimenta : **

Suite à la réunion avec notre tutrice, nous avons organisé une réunion avec notre cliente au laboratoire IMAP à l’ESPCI. Elle nous a rappelé les attentes du projet, “proposer et tester une nouvelle méthode pour réduire la formation de dendrites”. Ensuite, nous avons discuté des recherches bibliographiques que nous avions effectuées, sur des revêtements de l’anode, des alliages et de modifications de l'électrolyte. Mme Pimenta nous a partagé quant à elle les axes possibles de recherche pour ce projet compris dans son champ de recherche, qui est principalement l’étude des MOFs (Metal-Organic-Frameworks). Elle a aussi proposé d’étudier des zéolithes ou encore les silices mésoporeuses. Elle nous a confié qu’elle est plus intéressée par les MOFs et qu’il y a également un bon nombre de réactifs et instruments pour les produire au sein de l’IMAP, que nous avons découverts par la suite dans une visite. Suite à cela, nous nous sommes mis d’accord pour continuer nos recherches et d’explorer davantage sur les matériaux poreux cités précédemment, jusqu’à la prochaine réunion que nous avons fixés le 6 novembre.


# III) Etat de l’art 

1. Modification de l’électrolyte ou ajout d’additifs
Le choix et la modulation de l’électrolyte est un outil essentiel afin de réduire la formation de dendrites. 
Dans les piles Li-ion avec des électrolytes organiques, elle va donner lieu à un film de passivation interphase solide ([[Weirsite/SEI\|SEI]]), qui a pour rôle non seulement d'empêcher les réactions parasites (entre l'électrolyte et l'électrode Li), mais aussi d'influencer le comportement de Li lors des charges-décharges.

![Ideal_SEI.png](/img/user/Ideal_SEI.png)
	_Fig. 3 : Comparaison des caractéristiques entre une couche SEI idéale et une couche SEI typique³_


Une couche [[Weirsite/SEI\|SEI]] non uniforme (*Fig. 3 gauche*) entraîne la formation de points de faible résistance que les ions lithium ont tendance à traverser de manière préférentielle. Dans ce cas, le flux d'ions lithium le long de l'électrode est irrégulier et il se produit une accumulation d'ions à certains endroits de l'électrode. Cela peut entraîner la formation de dendrites et affecter la sécurité et la durée de vie de la batterie.

Pour pouvoir bénéficier de ce phénomène en solvant aqueux, on utilise des additifs : divers sels de zinc sont utilisés, notamment ZnSO₄, ZnCl₂, Zn(CH₃COO)₂, Zn(ClO₄)₂ et Zn(CF₃SO₃)₂, entre autres. Cependant, les solutions diluées présentent une plus grande propension à la formation de dendrites de zinc. De plus, la HER a lieu comme l’eau est en contact avec l'électrode en absence de [[Weirsite/SEI\|SEI]] efficace. Il y a aussi corrosion passive, ce qui compromet la stabilité cyclique et l’efficacité coulombique des batteries⁴.

Parmi les stratégies proposées pour surmonter ces limitations figurent les électrolytes “Water-in-Salt” (WISE), des électrolytes hautement concentrés dans lesquels le rapport sel/eau est inversé. Cette inversion modifie la structure de coordination dominante, les ions Zn²⁺ étant désormais principalement coordonnés aux anions du sel plutôt qu’aux molécules d’eau. Ce changement favorise une déposition uniforme et réversible du zinc, stabilise l’anode et élargit la fenêtre de stabilité électrochimique, en réduisant la formation de dihydrogène et en inhibant la précipitation de Zn(OH)₂ et ZnO. 

Par exemple, des électrolytes de composition 30M ZnCl⁵, 21 M LiTFSI + 3 M Zn(TfO)₂  ou encore CZSAE (4,2 M ZnSO₄ + 0,1 M MnSO₄) ont permis un dépôt homogène et stable du zinc, avec une nette amélioration de la rétention de capacité même après un très grand nombre de cycles.

Une autre approche visant à limiter la formation de dendrites consiste à ajouter des additifs fonctionnels à l’électrolyte de base, appelés EAs (Electrolyte Additives). Ces composés ont pour fonction de modifier les propriétés interfaciales et la morphologie de déposition du zinc. Parmi les additifs ioniques les plus étudiés figurent CuSO₄, PbSO₄, NiSO₄, MgSO₄, MnSO₄, La(NO₃)₃ et LiCl, capables d’accroître la conductivité ionique et de former des couches électrostatiques protectrices à la surface de l’anode⁴.

Des études menées par Zhai et al. (2022) ont notamment mis en évidence l’effet de l’addition de Mg²⁺ (0,1 M MgSO₄), qui réduit l’énergie d’adsorption à la surface du zinc, favorisant ainsi une déposition uniforme et une meilleure efficacité coulombique. Un autre additif examiné dans la même étude, le Na₂SO₄ (0,5 M), agit par effet de blindage électrostatique, ce qui lisse le processus de déposition et prévient la croissance dendritique.


2. Utilisation d’alliages pour l’anode 

Au niveau de la composition de l’anode, certains alliages métalliques de zinc peuvent limiter la formation de dendrites. Des alliages binaires type Zn-Al⁶, Zn-Ag⁷et Zn-Ni⁸ ainsi que des alliages ternaires Zn-Ni-In⁹ et Zn-Li-Mg¹⁰ ont déjà été explorés, représentant différentes stratégies pour la de-favorisation des dendrites.


Cao et al. ont utilisé un revêtement de formule  Ni<sub>5</sub>Zn<sub>21 </sub>sur une feuille de zinc  pour réduire et homogénéiser la barrière d’énergie de nucléation, ce qui permet de faciliter la formation de noyaux de zinc. Celui-ci possède par ailleurs une plus grande affinité avec le nickel qu’avec lui-même : les noyaux de zinc vont alors se former de préférence à la surface ZnNi plutôt  que de continuer à croître sur les noyaux de zinc déjà formés, évitant la croissance de dendrites⁸. La même stratégie s’applique à l’utilisation d’un alliage AgZn3 formé *in situ*, puisque le zinc a une plus grande affinité pour l’alliage que pour lui-même⁷.

 
Qi et al. ont quant à eux utilisé un alliage avec l’aluminium pour former une couche protectrice à la surface de l’anode, ici Al<sub>2</sub>O<sub>3</sub> qui est formé par oxydation et est chimiquement inactif. Ce dernier forme des “réservoirs” à la surface de l’anode où le zinc se dépose préférentiellement, et limite la surface de contact entre le zinc et l’électrolyte⁶.

 
Enfin, Zhang et al. ont utilisé des métaux avec des potentiels standards plus faibles que celui du zinc : le lithium et le manganèse. Leur oxydation permet de former des cations (Li<sup>+</sup> et Mn<sup>4+</sup>) qui agissent comme bouclier électrostatique à la surface de l’anode pour éviter la croissance des dendrites, en éloignant les ions Zn<sup>2+</sup> des sites de nucléation lors de leur diffusion¹⁰.



3. Contrôle de la diffusion au sein de la batterie

Le contrôle de la diffusion constitue un paramètre déterminant pour assurer la stabilité et l’efficacité des batteries métalliques. En effet, la formation de dendrites résulte directement d’un déséquilibre entre le taux de dépôt électrochimique et le transport de masse des espèces ioniques. Lorsque la vitesse de réaction à l’électrode dépasse la capacité du système à renouveler les ions par diffusion, il se crée, à proximité de la surface électrodique, des gradients de concentration prononcés conduisant à des instabilités morphologiques et à une croissance dendritique anisotrope.

Afin de limiter ces effets, plusieurs stratégies de contrôle diffusif ont été proposées dans la littérature. Parmi elles, l’ajustement de la viscosité de l’électrolyte permet de réguler la mobilité ionique et d’atténuer les gradients locaux, tandis que le design du séparateur joue un rôle clé dans la répartition homogène du flux d’ions entre les électrodes. Par ailleurs, la modification chimique de l’interface électrode-électrolyte, notamment par l’introduction d’additifs organiques ou de liquides ioniques, contribue à stabiliser la couche interfaciale et à promouvoir une déposition métallique uniforme$^{5,11}$.

En somme, le contrôle de la diffusion au sein de la batterie repose sur un équilibre précis entre la cinétique des réactions électrochimiques et le transport de masse, équilibre sans lequel la durabilité et la sécurité du système ne peuvent être garanties. Cette approche intégrée de la gestion du transport ionique constitue aujourd’hui l’un des piliers de la recherche en conception d’électrolytes avancés pour batteries de nouvelle génération.



4. Revêtement de l’anode avec un matériau poreux 

Une des stratégies pour contrer la formation de dendrites est de créer une couche fine d’un matériau poreux à la surface de l’anode, afin de guider et d’homogénéiser le dépôt du zinc. De nombreux candidats existent tels que la mousse de graphène poreuse, l’oxyde de zinc (ZrO<sub>2</sub>), le poly butyral vinylique ou PVB, les zéolithes, et la silice mésoporeuse¹².


	A) Zéolithes

Les zéolithes sont des cristaux microporeux d’aluminosilicate, de formule générale M*<sub>x/n</sub>* [(AlO2)*<sub>x</sub>*(SiO2)*<sub>y</sub>*]·*w*H<sub>2</sub>O (M étant un cation tel que Ca<sup>2+</sup>, Mg<sup>2+</sup> ou K<sup>+</sup>). Ils sont caractérisés par des structures versatiles avec des nanopores uniformes de taille moléculaire.  Leur réseau tridimensionnel de tunnels permet d’homogénéiser le flux des ions Zn<sup>2+</sup> en favorisant un mécanisme de diffusion 3D, plutôt que le mécanisme de diffusion 2D qui conduit à la formation de dendrites¹³. Par ailleurs, l’utilisation de zéolithes augmente la cinétique de la diffusion vers l’anode. En effet, l’ion Zn<sup>2+</sup> se coordonne de manière très favorable avec l’oxygène de la structure, ce qui permet d’accélérer sa désolvatation¹⁴. La surface interne des zéolithes est hautement polaire, ce qui lui confère une forte capacité d’adsorption qui est également très sélective. 

A ce jour, plusieurs types de zéolithes ont déjà été utilisés. Zhao et al.¹³ ont choisi la zéolithe linde de type A, de formule |Na<sub>12</sub> (H<sub>2</sub>O)<sub>27</sub> |<sub>8</sub> [Al<sub>12</sub>Si<sub>12</sub>O<sub>48</sub>]<sub>8</sub>, en échangeant les ions sodium par des ions de zinc, afin d’éviter tout dépôt parasite en cas de migration des ions Na<sup>+</sup> de la structure vers l’anode. Li et al.<sup><a href="https://www.zotero.org/google-docs/?eepgoe">14</a></sup> ont quant à eux choisi le beryllophosphate-H,  de formule |K<sub>7</sub>Na<sub>7</sub> (H<sub>2</sub>O)<sub>20</sub> | [Be<sub>14</sub>P<sub>14</sub>O<sub>56</sub>]. Ces deux types de zéolithes ont donné d’excellents résultats, avec une disparition quasi-totale des dendrites, une durée de cycle fortement prolongée et une bonne rétention de la capacité. 


	B) Metal-Organic Frameworks

Les MOFs (Metal-Organic Frameworks) sont une famille de composés cristallins hybrides constituées de réseaux de polymères/ligands organiques couplés à des complexes de coordinations métalliques (*Fig. 3*). De par leur capacité à avoir une porosité modulable, ils sont d’un grand intérêt dans le domaine de l’électrochimie pour la conversion et stockage d’énergie. Pour les aZIBs, les MOFs pourraient jouer un rôle important de contrôle de la formation de dendrites.

Grâce à leur porosité modulable, ils forment de bonnes couches interface anode-électrolyte : Jenfeng et al.¹⁵ utilisent un aMOF (MOF amorphe) appelé AZ (ATMP-Zr) à base de zirconium +IV et d’un ligand phosphoné ATMP (acide aminotri(méthylènephosphonique)). Ce MOF répandu sur la surface de l’anode va former une SEI artificielle (aSEI)<sup><a href="https://www.zotero.org/google-docs/?x6SzLO">3</a></sup> dans les batteries, se rapprochant d’un [[Weirsite/SEI\|SEI]] idéal (*Fig. 3. droite*)


![MOFS.png](/img/user/MOFS.png)
	*Fig. 4 : Structure de MOFs selon les ligands de coordinations.*

Dans cet article, AZ est constitué de pores où le ligand phosphoré possède des sites de transferts ioniques pour le Zn<sup>2+</sup> entre l’électrolyte et l’électrode (*Fig. 4. a*), ils permettent également de casser les complexes [Zn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> à la surface du MOF en agissant comme un tamis moléculaire (*Fig. 4. e*).

*Fig 5 : a) chemin des transferts ionique du Zn<sup>2+</sup> dans le aMOF AZ d’un site à l’autre, IS : Initial state et FS : Final state. d) schéma de l’interface électrode Zn (sans couche). e) schéma de l’interface de l’électrode Zn recouvert du aMOF AZ¹⁵.

Avec ce MOF, les auteurs ont pu faire des mesures en cellule complète et les principaux résultats sont : 


* Haute conductivité ionique : 3,4×10<sup>-4</sup> S/cm.
* Faible énergie d’activation pour la désolvatation (élimination de l’eau : 24 kj/mol).
* Aucune croissance de dendrites est observée même à 10 mA/cm².
* Durée de cycle prolongée : 1800 h à 1mA/cm² (très faible polarisation, 31 mV) et 950 h à 10 mA/cm².
* Capacité stable de 130 mAh/g après 2000 cycles et possède une excellente résistance à la corrosion et à l’autodécharge.

	C) Silice Mésoporeuse

La silice mésoporeuse constitue une famille de matériaux inorganiques à structure hautement ordonnée et à porosité intermédiaire (comprise entre 2 et 50 nm). En raison de sa grande surface spécifique et de la présence de groupes silanols (Si–OH) à la surface, elle présente une forte affinité pour les cations métalliques tels que Zn²⁺, permettant ainsi des interactions chimiques directes avec l’anode. 

En tant que couche intermédiaire entre l’électrolyte et l’anode, sa fonction principale est de réguler le flux ionique et de minimiser les réactions parasites, telles que la corrosion et l’évolution d’hydrogène. Les canaux générés par la porosité assurent une diffusion homogène des ions Zn²⁺ à travers l’interface, ce qui évite la formation de gradients de concentration et, par conséquent, la croissance de dendrites de zinc. De plus, les groupes silanols agissent comme des sites de nucléation zincophiles, capables de former des liaisons Si–O–Zn qui orientent le dépôt métallique de manière contrôlée et isotrope, réduisant ainsi les hétérogénéités du champ électrique et favorisant une morphologie plus dense et uniforme.

*Yuan et al.¹⁵ ont rapporté l’utilisation d’une couche de silice modifiée déposée à la surface du zinc métallique, démontrant son effet synergique sur la désolvatation favorable des ions Zn²⁺ et sur la suppression complète des dendrites, même à des densités de courant élevées. Le revêtement de SiO₂ a permis une distribution homogène du champ électrique et une réduction de l’énergie d’activation associée à la désolvatation, aboutissant à une déposition de zinc plus réversible et compacte.

Malgré ses avantages, la faible conductivité électronique de la silice limite son utilisation isolée, ce qui a motivé le développement de composites hybrides SiO₂/C ou SiO₂/polymères conducteurs. Néanmoins, la silice mésoporeuse demeure un matériau prometteur en raison de sa stabilité en milieu aqueux, de sa simplicité de synthèse et de son efficacité dans le contrôle de la croissance des dendrites, se positionnant ainsi comme l’une des meilleures alternatives inorganiques pour l’amélioration des interfaces dans les batteries zinc-ion.


# IV) Conclusion

Les différentes stratégies étudiées : modifications d’électrolyte, alliages, contrôle diffusif et revêtements poreux, convergent vers un même objectif de stabiliser l’interface Zn/électrolyte et supprimer la croissance dendritique. Les matériaux poreux, se distinguent par leur capacité à homogénéiser le flux ionique et le champ électrique, assurant une déposition uniforme et réversible du zinc.

Les principaux défis concernent la durabilité mécanique des couches poreuses, leur adhérence à long terme à l’anode et la faible conductivité électronique de certains matériaux comme la silice, pouvant limiter leur efficacité isolée.


# V) Références Bibliographiques


(1)	AlShareef, H. Webinar : Electrode & Electrolyte Engineering in Aqueous Zinc-Ion Batteries, 2022.

(2)	Hu, L.; Xiao, P.; Xue, L.; Li, H.; Zhai, T. The Rising Zinc Anodes for High-Energy Aqueous Batteries. EnergyChem 2021, 3 (2), 100052. https://doi.org/10.1016/j.enchem.2021.100052.

(3)	Hajian Foroushani, M.; Maroufi, S.; Khayyam Nekouei, R.; Sahajwalla, V. Artificial Solid Electrolyte Interphase: The Holy Grail for Li-S Batteries. Renew. Sustain. Energy Rev. 2025, 212, 115453. https://doi.org/10.1016/j.rser.2025.115453.

(4)	Zhai, C.; Zhao, D.; He, Y.; Huang, H.; Chen, B.; Wang, X.; Guo, Z. Electrolyte Additive Strategies for Suppression of Zinc Dendrites in Aqueous Zinc-Ion Batteries. Batteries 2022, 8 (10), 153. https://doi.org/10.3390/batteries8100153.

(5)	Wang, K.; Pei, P.; Ma, Z.; Chen, H.; Xu, H.; Chen, D.; Wang, X. Dendrite Growth in the Recharging Process of Zinc–Air Batteries. J. Mater. Chem. A 2015, 3 (45), 22648–22655. https://doi.org/10.1039/C5TA06366C.

(6)	Qi, Z.; Xiong, T.; Yu, Z. G.; Meng, F.; Chen, B.; Xiao, H.; Xue, J. Suppressing Zinc Dendrite Growth in Aqueous Battery via Zn–Al Alloying with Spatially Confined Zinc Reservoirs. J. Power Sources 2023, 558, 232628. https://doi.org/10.1016/j.jpowsour.2023.232628.

(7)	Wang, Y.; Chen, Y.; Liu, W.; Ni, X.; Qing, P.; Zhao, Q.; Wei, W.; Ji, X.; Ma, J.; Chen, L. Uniform and Dendrite-Free Zinc Deposition Enabled by in Situ Formed AgZn3 for the Zinc Metal Anode. J. Mater. Chem. A 2021, 9 (13), 8452–8461. https://doi.org/10.1039/D0TA12177K.

(8)	Cao, P.; Tang, J.; Wei, A.; Bai, Q.; Meng, Q.; Fan, S.; Ye, H.; Zhou, Y.; Zhou, X.; Yang, J. Manipulating Uniform Nucleation to Achieve Dendrite-Free Zn Anodes for Aqueous Zn-Ion Batteries. ACS Appl. Mater. Interfaces 2021, 13 (41), 48855–48864. https://doi.org/10.1021/acsami.1c14947.

(9)	Lee, C. W.; Sathiyanarayanan, K.; Eom, S. W.; Yun, M. S. Novel Alloys to Improve the Electrochemical Behavior of Zinc Anodes for Zinc/Air Battery. J. Power Sources 2006, 160 (2), 1436–1441. https://doi.org/10.1016/j.jpowsour.2006.02.019.

(10)	Zhang, Y.; Yang, X.; Hu, Y.; Hu, K.; Lin, X.; Liu, X.; Reddy, K. M.; Xie, G.; Qiu, H. Highly Strengthened and Toughened Zn–Li–Mn Alloys as Long‐Cycling Life and Dendrite‐Free Zn Anode for Aqueous Zinc‐Ion Batteries. Small 2022, 18 (17), 2200787. https://doi.org/10.1002/smll.202200787.

(11)	Khurana, S.; LaBarbera, M.; Fedkin, M. V.; Lvov, S. N.; Abernathy, H.; Gerdes, K. Performance Evaluation of a Liquid Tin Anode Solid Oxide Fuel Cell Operating under Hydrogen, Argon and Coal. J. Power Sources 2015, 274, 1049–1054. https://doi.org/10.1016/j.jpowsour.2014.10.138.

(12)	Wang, Y.; Liu, Y.; Wang, H.; Dou, S.; Gan, W.; Ci, L.; Huang, Y.; Yuan, Q. MOF-Based Ionic Sieve Interphase for Regulated Zn2+ Flux toward Dendrite-Free Aqueous Zinc-Ion Batteries. J. Mater. Chem. A 2022, 10 (8), 4366–4375. https://doi.org/10.1039/D1TA10245A.

(13)	Zhao, R.; Yang, J.; Han, X.; Wang, Y.; Ni, Q.; Hu, Z.; Wu, C.; Bai, Y. Stabilizing Zn Metal Anodes via Cation/Anion Regulation toward High Energy Density Zn‐Ion Batteries. Adv. Energy Mater. 2023, 13 (8), 2203542. https://doi.org/10.1002/aenm.202203542.

(14)	Li, S.; Li, M.; Chi, X.; Yin, X.; Luo, Z.; Yu, J. High-Stable Aqueous Zinc Metal Anodes Enabled by an Oriented ZnQ Zeolite Protective Layer with Facile Ion Migration Kinetics. Acta Phys.-Chim. Sin. 2025, 41 (1), 100003. https://doi.org/10.3866/PKU.WHXB202309003.

(15)	Yuan, W.; Jin, K.; Zou, S.; Jin, Y.; He, Y.; Yuan, X.; Han, P.; Fu, L.; Wu, Y. Favorable Desolvation and Uniform Zn Deposition of Silica Modified Zn Anode for High Performance Aqueous Zn‐Ion Batteries. Adv. Sci. 2025, 12 (22), 2417121. https://doi.org/10.1002/advs.202417121.
