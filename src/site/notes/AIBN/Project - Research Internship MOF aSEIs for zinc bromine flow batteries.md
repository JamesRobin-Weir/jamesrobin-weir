---
{"dg-publish":true,"permalink":"/aibn/project-research-internship-mof-a-se-is-for-zinc-bromine-flow-batteries/","dg-note-properties":{}}
---

---
# [[Weirsite/Home Page\| Home]] | [[Weirsite/Projects\|Projects]] | [[Weirsite/CPGE\|CPGE]] | [[Weirsite/My carbon footprint\|My carbon footprint]]
---

## MOF aSEIs for ZBRBs to avoid bromine diffusion and zinc dendrite growth

This project builds on a previous research project, [[Weirsite/Project - Enhancing aqueous ZIBs\| Enhancing aqueous ZIBs]] by use of an artificial [[Weirsite/SEI\|SEI]] of deposited ZIF-8 metal organic framework (MOF), but applied to Zinc Bromine Rechargeable Batteries (ZBRBs). It is currently underway under the supervision of Prof. Bin Luo of the Australian Institute for Bioengineering and Nanotechnology (AIBN) at the University of Queensland, and [[AIBN/AIBN - Xingchen Yang\|Xingchen Yang]] a third year doctorate student from the Beijing University of Chemical Technology (BUCT). 


For an introduction to the ongoing research in the field of zinc bromine flow batteries, refer to [[AIBN/AIBN - Zinc–Bromine Rechargeable Batteries - Nano-Micro Letters\|AIBN - Zinc–Bromine Rechargeable Batteries - Nano-Micro Letters]], a synthesis of a 2023 review. 

The battery system studied uses a [[AIBN/AIBN - Separator\| Daramic seperator]], often sprayed with a [[AIBN/AIBN - Nafion\| Nafion polymer]] solubilised in ethanol, sandwiched in between two functionalised porous carbon felt pads in which flows the anolyte (negative [[Weirsite/ZIB - Electrolyte\|electrolyte]]) and catholyte (positive electrolyte) on their respective sides. Whilst zinc metal is oxidised to $Zn^{2+}$ on the anode side, bromide ions are reduced to bromine gas remains in solution via a complexing agent, 1-ethyl-1-methylpyrrolidinium. 

![AIBN_ZBRBs.png](/img/user/Excalidraw/AIBN_ZBRBs.png)

In the context of this system explained here above, thin films of MOF species can be applied in potentially multiple locations via multiple deposition methods. More classically, they can be applied locally on the surface of the zinc anode via spin coating, doctor blade or simply a spray bottle (viscosity allowing). However, dendrite growth often occurs within the graphite felt matrix on the side closest to the separator. A MOF coating could therefore be applied to the zinc side of the separator. This could potentially also reduce bromine diffusion between the half cells, which should ideally be isolated from one another. 

In order to use MOF in the $ZrBr_2$ anolyte/catolyte half cells, the latter notably containing agressive bromide ions, chemical and electrochemical stability test will be carried out. The electrolyte mainly consists of 1-2M ZnBr2 with KCl and ZnCl2 as supporting salts, and the pH is typically in the range of 2-5.

The PVDF + NMP mixture used in the previous project for the ESPCI may dissolve the membrane : therefore new MOF plus binder combinations, must be explored. Potential alternatives are listed below :

1) Usage of a slurry to avoid excessive membrane dissolution
2) Changing the solvent to avoid membrane dissolution (usage of alternative water soluble binders)
3) MOF + nafion combination, as this polymer is a proven choice for daramic coatings

In addition, it will be worth investigating the film application from the following methods: 
1) simple doctored blade application (or slot-die coating)
2) usage of a spray bottle
3) spin coating

In order to quantify their effects, film homogeneity will be evaluated via optical microscopy and thickness via a micrometer caliper. If possible, SEM imaging would help confirm suspicions established via these macro methods. 

Once completed, the stable binder + MOF combinations can be evaluated on their effect on bromine diffusion across the separator

---
## Protocol : H-cell diffusion experiment

Necessary to create a calibration spectrum for complexed bromine first using different concentrations of $\text{ZnBr}_2$. Identify $\lambda_{max}$ . Verify the effects of poly-bromine species on absorption spectra, make a matching reference spectrum if possible. 

Using a two-compartment diffusion cell with membrane area known accurately, compare bromine cross over for :
- bare Daramic
- Nafion/ethanol benchmark coating
- binder-only coating on top of Daramic
- MOF+binder thin film on top of Daramic

#### Donor side
Charged-state catholyte simulant containing:
- ZnBr$_2$
- bromine complexing agent
- known bromine/polybromide concentration
#### Receiver side
Matching ZnBr$_2$ anolyte **without free bromine/polybromide**
### Procedure

![AIBN_Bromine_Crossover_Quantification.png](/img/user/Excalidraw/AIBN_Bromine_Crossover_Quantification.png)

1. Install membrane with attention to coating orientation
2. Sample receiver side after 0, $\dfrac12$ , 1, 2, 4, 8 and 24 hours
3. Replace sampled volume with fresh receiver electrolyte if necessary depending on total electrolyte volume in cell

### Analysis
Quantify bromine crossover by **UV-vis** of tribromide/polybromide or of complexed bromine, using reference spectrum.

Calculate:
- cumulative crossover
- steady-state flux
- apparent permeability
- permeability normalised by film thickness

---
## Protocol : dendrite suppression testing

Zinc dendrites are a core failure mode, often growing towards the membrane. Therefore constant-current experiments shall be used as a rapid morphology screen before closer inspection, in order to eliminate low performance MOF + binder combinations. 

### A. Quick-screen chronopotentiometry

Prepare a coated Zn or coated separator in a Zn deposition cell, then :

1. Apply constant cathodic current for 15–30 min
2. Stop immediately on abrupt voltage excursion (chose a maximum value)
3. Rinse and inspect by optical microscopy

### B. Extended plating morphology test

1. Plate Zn at fixed current density to a defined areal capacity.
2. Remove sample.
3. Inspect via optical microscopy :
   - top surface
   - separator-facing side
   - cross-section if possible
### C. Separator-blocking configuration

Assemble a battery stack : Zn | anolyte | coated separator | catholyte simulant or matched electrolyte, then run repeated plating/stripping to see whether the coating suppresses:

- protrusions at the separator surface
- zinc penetration into separator pores
- localised metallic bridges

Because the site notes that dendrites often develop in the graphite felt region nearest the separator, this can be repeated after instead coating that region with MOF.

---

