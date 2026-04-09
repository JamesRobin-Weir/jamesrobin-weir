---
{"dg-publish":true,"permalink":"/aibn/aibn-zinc-bromine-rechargeable-batteries-nano-micro-letters/","dg-note-properties":{"aliases":["ZBRB","ZBRBs"]}}
---

---
# [[Weirsite/Home Page\| Home]] | [[Weirsite/Projects\|Projects]] | [[Weirsite/CPGE\|CPGE]] | [[Weirsite/My carbon footprint\|My carbon footprint]]
---

[[AIBN/Project - Research Internship MOF aSEIs for zinc bromine flow batteries\|Project - Research Internship MOF aSEIs for zinc bromine flow batteries]]

## Zinc-Bromine Rechargeable Batteries - Nano-Micro Letters (2023)

### Glossary, safety and general information
- GF = Graphite Felt
- Anolyte : gives up $e⁻$
- Catholyte : accepts $e⁻$
- Membrane : lets $p⁺$ through
- An aqueous solution of dissolved $\text{ZnBr}_2$ 1-4 M) is used as the electrolyte in most ZBRBs
- Bromine smells like bleach, and $Br_3⁻$ or polyhalide ions are highly oxidising
- Bromine shuttle eﬀect : diffusion of polybromide ions (resulting from $\text{Br}_2$ binding with $\text{Br}⁻$) from cathode to anode, leading to battery degradation (self discharge, capacity fade)

---

Zinc bromine rechargeable batteries (ZBRBs) are hybrid batteries : some of the energy is stored at the negative electrode (anode) via metallic zinc plated during the charging phase, while the remaining energy is stored in a liquid phase at the catholyte. They come in two configurations : static (cheaper, no pumping and lesser maintenance) and flow (higher efficiency). This study concentrates on flow ZBRBs. 

### Supporting Reactions
#### Anode side
- $\text{Zn}^{2+}$ + 2e⁻ → $\text{Zn}^{0}$ (Charging)
- $\text{Zn}^{0}$ → $\text{Zn}^{2+}$ + 2e⁻ (Discharging) 
- E°= −0.763 vs SHE at 25°C
#### Cathode side
- 2$\text{Br}⁻$ → $\text{Br}_2$ + 2e⁻ (Charging)
- $\text{Br}_2$ + 2e⁻ → 2$\text{Br}⁻$ (Discharging)
- E°=+1.065 V vs SHE at 25°C

### Limitations of the technology
1) Zinc dendrite growth resulting from repeated electroplating and stripping of zinc that can pierce the membrane and eventually forms a conductive bridge between the electrodes (shorting)
2) hydrogen gas generation as the electrochemical potential of charge/discharge process of the system which is higher than that required for water hydrolysis which competes with the reduction reaction of Zn2+ ions and decreases the overall efficiency of the ZBRBs, 
3) corrosive elemental bromine liquid, Br 2 (l), production at the positive electrode during charge, which can be diffused through the membrane to the zinc half-cell reacting with the Zn plated at the negative electrode (crossover), causing self-discharge and/or degradation
4) the low miscibility (~ 2.8 vol%) and stratification behaviour of Br2(l) in aqueous solutions that can lead to non-uniform concentration distribution

---
### Static ZBRBs
- Held back by high self-discharge rate and low energy density (microbatteries suffer)
- glass fibre separators work well (instead of porous carbon)
- Gelion Endure™ company makes gel ZBRBs, but sensitive to temperatures over 50 °C
- Carbon foam electrode : highly porous flexible carbon foam

---
### Redox Flow Battery (RFB) 
- rapid response times, measured in milliseconds => these systems are well suited for ==levelling intermittent renewable power output==
- VFRB (vanadium) are well-developed and commercialised
- ZBFB has substantial advantages over other flow batteries, such as high energy density, high cell voltage and the low cost of the materials

![ZBRB_schema.png](/img/user/AIBN/ZBRB_schema.png)

- Negative electrode (zinc), positive electrode (bromine), separated by a membrane to prevent cross-contamination. 
- Two tanks of aqueous electrolyte solutions (anolyte and catholyte) contain electrochemically active species, including zinc (Zn2+) and bromide (Br-)
- Elemental bromine exists in equilibrium with bromide ions forming polybromide ions, $Br_{n}⁻$, where n = 3, 5 and 7
- two pumps to circulate the electrolyte solutions over both electrode surfaces, ==controlling generated heat, feeding and homogenising reactants, removing bromine complexes from the stack and ensuring uniform zinc deposits==
- Single pump systems exist

---
### Kinetics
-  Behaviour and kinetics of zinc cations are strongly affected by other supporting electrolytes in aqueous solutions containing bromide
---
### Dendritic growth (page 8)

![ZBRB_parasitic.png](/img/user/AIBN/ZBRB_parasitic.png)

- It is important to strip the zinc in ZBRBs for extended periods to ensure a smooth electrode surface for next zinc deposition.
- Residual zinc left on the anode after discharge results in the loss of 3–5% of the amp-hour capacity
- However, ==the remaining zinc could potentially be used as a useful energy source if additional zinc is plated over it in the subsequent cycles.==
	- @ What? Nucleation sites? Of course it can be stripped after, that doesn't make it additional energy
- Effect of operating temperature on zinc deposits : zinc deposits (grey in appearance) turned black at temperatures higher than 40 °C
- Smooth and bright zinc deposits were obtained when increasing the electrolyte’s zinc concentration
- In the initial stage, zinc deposition begins with nucleation and continues with growth, meaning ==the formation of dendrites is a cumulative result of battery cycling, not a single cycle.==
- Zinc ions will deposit on a zinc nucleus rather than nucleating at a new site since zinc nucleation has a higher overpotential than zinc growth
- Formation of zinc dendrites can damage the membrane


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">




==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data

## Text Elements
Ion exchange membrane / Daramic 
Graphite felt (porous to catholyte) 
Brome catholyte 
Zinc anolyte 
Graphite felt (porous to anolyte) 
Anode (zinc) 
e⁻ 
ZINC BROMINE FLOW BATTERY SCHEMATIC 
PUMPS 


</div></div>

- Dendrites ==form on the membrane side== dominantly

### Dendrite Mitigation Strategies
- Thermal treatment of GF => higher defect concentration => better zinc diffusion
- Aqueous electrolyte additives => reduced surface reactions
- Another proposed strategy involves creating an artificial interfacial layer between the zinc and the electrolyte that performs the same function as an SEI
- Metal organic framework (MOF) material with unique channel structure can be used as coating layers to modify Zn anode through tuning specific chemical composition and porous structure. The ZIF-7 channel can prevent large solvated Zn ion complexes and create a supersaturated inner layer electrolyte to drive uniform metal deposition

![MOF_water_rejection.png](/img/user/AIBN/MOF_water_rejection.png)

- Organic additives (e.g. SDS) change surface morphology and surface orientation
-  LiCl–ZnCl2 (water-in-salt) mixture-concentrated electrolyte on the hydrogen bonding interruption of water molecules and found that Zn2+ ions can coordinate with Cl− rather than H2O, leading to strong O–H covalent bonds while decreasing the solvation activity of H2O in the electrolyte

---
### Bromine half-cell

In a Zn–Br flow battery, the fundamental positive-electrode electron-transfer reaction is usually written as :

- 2$\text{Br}⁻$ → $\text{Br}_2$ + 2e⁻ (Charging)
- $\text{Br}_2$ + 2e⁻ → 2$\text{Br}⁻$ (Discharging)

However, $Br_3^- / Br^-$ appears in the literature because once $\mathrm{Br_2}$ is formed in a bromide-rich aqueous electrolyte, it rapidly undergoes the equilibrium $\mathrm{Br_2} + \mathrm{Br^-} \rightleftharpoons \mathrm{Br_3^-}$

So the same cathode chemistry is often written in the overall form:

- $3\,\mathrm{Br^-} \rightarrow \mathrm{Br_3^-} + 2e^-$ (Charging)
- $\mathrm{Br_3^-} + 2e^- \rightarrow 3\,\mathrm{Br^-}$ (Discharging)

Conceptually, at the electrode bromide is oxidized to bromine. Then, in the electrolyte, bromine is redistributed into dissolved/complexed bromine species, especially $\mathrm{Br_3^-}$, and at higher bromine loading also higher polybromides such as $\mathrm{Br_5^-}$ and $\mathrm{Br_7^-}$.

In practical batteries much of the bromine inventory is stored in these complexed forms rather than as “free” $\mathrm{Br_2}$.

---
### Electrolyte

On top of $\text{ZnBr}_2$, supporting secondary salts (e.g. $\text{ZnCl}_2$ and KCl) are normally used to promote ionic conductivity and lower internal resistance due to the low conductivity of zinc–bromide solution, thereby increasing the battery’s energy efficiency

---
### Membrane
- Must minimise the diffusion of $\text{Br}_2$ to the electroplated zinc, which causes self-discharge and lower CE for the system
- In terms of morphology, membranes can be generally classified into porous and ion-exchange membranes (e.g. Nafion®), which are both appropriate and capable of separating the anode and cathode electrolytes in ZBFBs.
	- Porous membranes are defined as macroporous (> 50 nm), mesoporous (2–50 nm) or microporous (0.2–2 nm) depending on their average pore diameter, while non-porous membranes transport ions via solution–diffusion mechanisms

---

### Characterisation (page 22)
- operando measurement = taken while a battery is operating (cycling)
- in situ measurement (meaning on site) = measuring a variable against a parameter relevant to the system, such as time, temperature, pressure or other variables, to minimise its degradation

![Overview_ZBRBs.png](/img/user/AIBN/Overview_ZBRBs.png)