---
{"dg-publish":true,"permalink":"/caracterisation-de-batteries/"}
---


Sommaire hiérarchisé des principales méthodes de caractérisation des batteries Li-ion / Li métal / Na-ion utilisées en recherche (voir [[Comment comparer differentes batteries\|Comment comparer differentes batteries]] pour les grandeurs fréquemment utilisés) :

---
## **1. Méthodes électrochimiques fondamentales**

### 1.1. Cyclage galvanostatique (charge-décharge)

- Permet d’évaluer la capacité spécifique, la rétention de la capacité (effet de vieillissement), à l'efficacité coulombienne, et à la stabilité cyclique
- Mesure directe des performances de la cellule en conditions d'utilisation

### 1.2. Voltamétrie cyclique 

- Analyse des processus redox
- Permet de déterminer le coefficient la diffusion ionique et de caractériser les mécanismes de réaction (intercalation, conversion, etc.)

### 1.3. [[Spectroscopie d'impedance electrochimique (SIE)\|Spectroscopie d'impedance electrochimique (SIE)]]

- Méthode clef pour étudier la résistance interne souvent selon un modèle de circuit électrique, la cinétique de transfert de charge, la diffusion ionique (Warburg) et l’évolution de la SEI (Solid Electrolyte Interphase)
- L'étude utilise souvent un modèle de circuit électrique équivalent, comme en thermodynamique (diffusion de chaleur) 
- Méthode la plus puissante pour corréler performance et vieillissement.

---

## **2. Méthodes complémentaires électrochimiques**

### 2.1. Potentiostatic Intermittent Titration Technique (PITT)

- Application de petites marches de potentiel, puis évaluation de la réponse du système
- Donne le coefficient de diffusion ionique et les cinétiques d’insertion/extraction
- Il existe également la version galvanostatique

### 2.2. Chronoampérométrie / Chronopotentiométrie

- Étude de la réponse temporelle à un potentiel ou courant fixe.
- Utile pour caractériser la nucleation du lithium et la formation de la [[Weirsite/SEI\|SEI]] en milieux orga

---

## **3. Méthodes de caractérisation physique et chimique in situ / ex situ**

### 3.1. Diffraction des rayons X (DRX)

- Peut permettre la détermination des phases cristallines et de leurs transformations lors du cyclage
- Permet également d'étudier les mécanismes d’intercalation ou de conversion

### 3.3. Microscopies électroniques (MEB/MET)

- Observation des morphologies à la surface de l'électrode, et des dégradations
- MET operando (durant la réaction) permet de visualiser la migration d’ions en temps réel en utilisant une micro-chambre de réaction

### 3.4. **Spectroscopies de surface (XPS, ToF-SIMS, AES)**

- Analyse chimique fine des couches superficielles : **SEI**, **oxydes**, **polluants**, etc.
- Indispensable pour corréler la chimie de surface et la stabilité électrochimique.

### 3.5. **Raman / FTIR (in situ ou ex situ)**

- Étude des **groupes fonctionnels**, **liaisons chimiques**, **solvants** et **SEI**.
- Donne des informations sur la **composition de l’électrolyte** et la **dégradation organique**.

---

## **4. Méthodes thermiques et mécaniques**

### 4.1. **Calorimétrie (DSC, ARC)**

- Mesure la **stabilité thermique**, les **réactions exothermiques** et le **risque thermique**.
    
- Cruciale pour les études de **sécurité**.
    

### 4.2. **Analyse thermogravimétrique (TGA)**

- Étudie la **décomposition thermique** des matériaux actifs et électrolytes.
    

### 4.3. **Analyse mécanique (nanoindentation, AFM, dilatométrie)**

- Évalue la **déformation mécanique** et la **stabilité structurelle** pendant le cyclage.
    

---

## **5. Méthodes avancées / spécialisées**

### 5.1. **NMR (RMN solide ou liquide, in situ ou ex situ)**

- Donne la **diffusion du Li**, la **distribution chimique**, et la **formation de phases amorphes**.
    
- Technique de référence pour les études fondamentales de transport ionique.
    

### 5.2. **Neutron diffraction / imaging**

- Très utile pour localiser le **lithium** (faiblement visible en rayons X).
    
- Permet de suivre la **distribution de Li** dans les électrodes épaisses.
    

### 5.3. **Synchrotron operando tomography / X-ray nanoCT**

- Imagerie 3D de l’**évolution interne** de la batterie (fissuration, gradients de concentration).
    

---

## **Classement synthétique (ordre d’importance générale)**

|Rang|Méthode|Rôle principal|
|---|---|---|
|1|Cyclage galvanostatique|Performance globale|
|2|EIS|Résistances et cinétique|
|3|Voltamétrie cyclique|Mécanismes redox|
|4|GITT / PITT|Diffusion ionique|
|5|XRD|Évolution structurale|
|6|XPS / SEM|Surface et morphologie|
|7|Raman / FTIR|Chimie des interfaces|
|8|TEM / XAS|Structure locale|
|9|NMR|Transport et distribution du Li|
|10|Calorimétrie / TGA|Sécurité thermique|

---

Souhaitez-vous que je t’en fasse une **version graphique (schéma ou carte hiérarchique)** des méthodes selon le **type d’information obtenue** (électrochimique, structurale, chimique, thermique) ?  
Cela rendrait la vision d’ensemble beaucoup plus claire pour un rapport ou une présentation.