---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-bromine-complexing-agents/","dg-note-properties":{"aliases":["MEP","MEM"]}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## ZBRB bromine complexing agents

Classically in ZBRBs systems, quaternary ammonium bromides (QBr), such as N-ethyl-N-methyl-morpholinium bromide (MEM) and N-ethyl-N-methyl-pyrrolidinium bromide (MEP), are added the positive and negative half cell electrolytes.

```smiles
CC[N+]1(C)CCOCC1.[Br-]
```
	*Fig. 1 : MEM*

```smiles
CC[N+]1(C)CCCC1.[Br-]
```
	*Fig. 2 : MEP*

Experimentally, it has been shown that 0.75-0.8 M of total QBr can effectively eliminate bromine vapour at a temperature of 11°C, with all of the bromine effectively bound as an orange oily layer that settles to the bottom of the sample bottles. The orange oily layer seems to form only in the presence of both $\text{Br}_2$ and complexing agents. 

Additionally, cyclic voltammetry (CV), linear sweep voltammetry and electrochemical impedance spectroscopy (EIS) studies also confirm that the addition of MEM/MEP effectively reduce $\text{Br}_2$ vapours. 

However, the addition of QBrs does result in a roughly 10% loss of cell efficiency.

---
### Why is MEP predominantly used ?

Bromide ions reduced to bromine gas are stabilised in solution via a complexing agent, 1-ethyl-1-methylpyrrolidinium ([[AIBN Zinc-Bromine Batteries/AIBN - Bromine complexing agents\|MEP]]). As opposed to MEM, another complexing agent, dissolved MEP⁺ cations undergo a **homogeneous** chemical reaction with generated bromine. Thus, the storage as complex MEP-Br$_n$ is faster than with the heterogeneous electrochemical reaction of MEM-Br$_n$.

---
### Loss of cell efficency due to MEP-polybromide species

The complexation of poly-bromides by MEP⁺ forms either oil or solid phases, giving rise to new challenges. These phases tend to adhere to the membrane surface, blocking ion transport, and increasing the ohmic polarisation in the battery. Additionally, accumulated oil or solid phase acts as an insulation layer, reducing the number of active sites on the cathode and significantly damaging the battery performance. 

To overcome these challenges, surfactants (e.g., polysorbate 20) can be added to the MEP-contained catholyte to disperse the bulk oil phase into small droplets, thereby easing phase separation at the electrolyte bottom. However, in general, the surfactant molecules are very large, reducing ion conduction, and are often unstable in an acidic mediums long term. 

Source : 10.1002/adfm.202514730

---
### Spectroscopic analysis

MEP-Br salt is colourless to pale, with no strong intrinsic visible absorption band. 

However, molecular Br₂ has a visible absorption centered around 390 nm, while Br₃⁻ has a strong UV band around 267-279 nm. Therefore UV-vis spectrometry could be use to evaluate bromine concentration. 

The **first limitation** is speciation. In water, bromine, bromide, and tribromide are in equilibrium:
$$\mathrm{Br_2 + Br^- \rightleftharpoons Br_3^-}$$
This reaction reaches a theoretical constant equilibrium up to pH 6 : therefore $\dfrac{[Br_2]}{[Br_3⁻]}$ should be constant in our electrolyte, at around 0.4 according to the solubility graph. 

According to Beer Lambert's law : $A=\epsilon l_c [M^{Z\pm}]$. By preparing different electrolyte solutions with different $\text{ZnBr}_2$ concentrations and an excess of MEP, the absorption at the two maximums can be measured. The ration should remain constant. Total bromine content can be estimated afterwards with one single measurement. 

The **second limitation** is the separation of aqueous and oily MEP-polybromide phases. UV-vis spectroscopy requires a homogeneous solution with no suspension, therefore surfactants cannot be used. In a recent 2025 nature energy article, researchers propose Br–SANa complexes as a substitute to MEP. 

```smiles
NS(=O)(=O)O[Na]
```

Pictured above, this complexing agent allows for a homogeneous solution, better suited to spectroscopic analysis. 

![AIBN_Br_SANa_comparison.png](/img/user/AIBN_Br_SANa_comparison.png)

However this limitation does not apply when studying the bromine shuttling across the separator, as the trace polybromide that diffuses to the anolyte side is not sufficient to precipitate into an oily phase.

---
### Electrochemical analysis

**Protocol:** for this analysis a three electrode cell was set up (see below). 20 mL of test electrolyte was poured in the glass cell. A magnetic stirrer was used in the linear sweep voltammetry experiments for measurement of Br−/Br3− kinetics in the simulated positive half-cell samples. The simulated positive and negative electrolytes were prepared by adding different amounts of MEM and MEP to V(III) or V(IV) halide solutions that had been prepared by dissolving V2O3, or equimolar quantities of V2O3 and V2O5 powders respectively in 7.6 M HBr + 1.46 M HCl solutions. The amount of MEM and MEP added varied from 0 to 5 mL. Liquid bromine was added to simulate the charged positive half-cell electrolyte of the cell.

![AIBN_Three_Electrode_setup.png](/img/user/Excalidraw/AIBN_Three_Electrode_setup.png)

Source : 
- Evaluation of N-ethyl-N-methyl-morpholinium bromide and N-ethyl-N-methyl-pyrrolidinium bromide as bromine complexing agents in vanadium bromide redox flow batteries http://dx.doi.org/10.1016/j.electacta.2013.06.084