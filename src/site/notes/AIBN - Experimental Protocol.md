---
{"dg-publish":true,"permalink":"/aibn-experimental-protocol/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## Protocol : H-cell diffusion experiment

![AIBN_Bromine_Crossover_Quantification.png](/img/user/Excalidraw/AIBN_Bromine_Crossover_Quantification.png)

Firstly, it is necessary to create a spectroscopy calibration spectrum for complexed bromine first using different concentrations in solution. For this a three electrode setup is required to generate the MEP- $\text{Br}_3⁻$ complex in small quantities. The total reference oxidised bromine concentration can be calculated via the Faraday law. Via UV-vis spectrometry we can identify $\lambda_{max}$ and A for both $\text{Br}_3⁻$ and $\text{Br}_2$. The ration of absorbances should be constant, as these two species are in constant equilibrium up to pH 6. 
$$[Br⁻]_{shuttled}=\dfrac{Q}{FV}=\dfrac{1}{FV} \int^t_0 I(t)dt$$
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

