---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-mo-fs-for-flow-batteries/","dg-note-properties":{"aliases":["agMOF","(ag)MOF","agMOFs","(ag)MOFs"]}}
---

## Metallic Organic Framework (MOF) applications for ZBRBs 

MOF UiO-66/-67 was used in a composite membrane, and its 6-8 Å windows effectively block $\text{I}_3⁻$ (which has a large hydrated radius), successfully preventing its crossover. 

For ZnBr₂ flowless batteries, amidated and sulfonated UiO-66 supported on Nafion (NF/U-AS) was developed. Bromine crossover was suppressed via chemical binding of Br₂/$\text{Br}_n^−$ to amine and physical confinement in MOF cages, while sulfonate groups facilitated balanced ion transport by forming abundant water channels.

**Source** : 10.1007/s40820-026-02068-0

---
## **Zinc coordination polymer glass MOF**

Amorphous glass ($a_g$) MOFs have short-range ordered and long-range disordered structure, and exhibit good processing ability and gas-accessible micropores, making them a promising material for gas separation.

The usual way they are prepared is:

1. Make a Zn-based coordination polymer precursor whose framework can survive heating long enough to melt or soften.
2. Ensure its melting temperature is below its decomposition temperature.
3. Heat above $T_m$ to form a viscous liquid or soft molten phase.
4. Quench, cast, or hot-press that melt to trap the disordered structure as a glass.

This is the classic melt-quench route used across Coordination Polymer (CP)/MOF glasses. Researchers then verify glass formation with DSC/TGA for $T_g, T_m, T_d$, PXRD for loss of Bragg peaks, and techniques like XAFS/PDF for retained local coordination.

---

## MOF suppression of HER in iron flow batteries

## Iron flow batteries
- Parasitic hydrogen evolution (HER) elevates interfacial pH, triggering irreversible $Fe(OH)_2$ precipitation that depletes $FeCl_2$ electrolyte and induces flow channel occlusion (obstruction)
- HER : $2 H⁺ +2e⁻ \rightarrow H_2$ so pH increases
- Tip effect promotes preferential vertical Fe growth over planar deposition
- Areal Fe loading capacity : the amount of iron that can be deposed per surface area
### Solutions
- Deep eutectic solvents modify solvatation structure and prevent hydrolysis
- $Fe^{2+}$-citric acid complexes improve deposition morphology
- DMSO cosolvent reorganises the $Fe^{2+}$ solvation sheath, leading to enhanced deposition control and reduced HER
![Deep_eutectic_solvent.png](/img/user/Deep_eutectic_solvent.png)
### Overarching issue
- Poor electrochemical activity and low hydrogen evolution energy barrier of traditional carbon electrodes (e.g., carbon felt, carbon cloth, carbon paper) => competitive disadvantage between Fe deposition and hydrogen evolution => electrode catalysts are used
- Early transition metals (Ti, Zr, W, and Sc) exhibit weak hydrogen atom binding abilities, thereby limiting HER activity (WO3 nano-particle modified graphite electrodes demonstrate > 95 % coulombic efficiency). Their incorporation in MOFs could allow for high surface accessibility, abundant unsaturated coordination sites, and optimised charge transport pathways.
- ATMP -> aminotris(methylenephosphonic acid) is a colourless phosphonic acid solid with chemical formula $N(CH_2PO_3H_2)_3$. Its conjugate bases, such as $[N(CH_2PO_3H)_3]^{3-}$, have chelating properties. 
```smiles
O=P(O)(O)CN(CP(=O)(O)O)CP(=O)(O)O
```
### Protocol
- Materials : Zirconium chloride, Polytetrafluoroethylene (PTFE), Nitrilotrimethylene Triphosphoric Acid solution (ATMP, 50 % in water), Ndimethylformamide solution (DMF) and N-Methyl pyrrolidone solution (NMP), Ferrous chloride and Potassium chloride, Carbon felt (4.0 mm thickness) and graphite sheet
- Synthesis : 2 g of ZrCl4 was dissolved in 200 mL of DMF, then dropwise addition of 5.56 mL of ATMP. Magnetic stirring at 80°C for 12 h. Centrifuge the resulting precipitate, and wash three times with deionised water, then dry
- PCF = Porous carbon foam
- Zr@CF = zirconium on carbon felt
- Zr@GS = zirconium on graphite sheet
- The Barrett-Emmett-Teller (BET) surface area was determined from nitrogen adsorption/desorption isotherms using a Quanta chrome volumetric analyser

### Characterisation
- Material : SEM, TEM, XPS for surface chemical state (binding energy) (quantitative composition analysis), four probe resistivity measurement, AFM
- Electrochemical : LSV, CV, EIS, CA (CF is working electrode, along with an iron sheet CE and SCE reference)
- H2 evolution : LSV test from 0 to 1.8 V (vs. SCE) in 3 M KCl solution at a scanning rate of 10 mV/s
- Fe/Fe2+ redox R° : CV at scan rate of 20 mV/s from 0 to 1.5 V (vs. SCE)
- EIS : voltage of 1.0 V (vs. SCE) at the frequency range from  10⁵ to 10⁻¹ Hz with an amplitude of 5 mV
- CA : potential conducted by potentiation current transients from 1 to 1.15 V (vs SCE) to analyze current transients

### DRX
- broad diffraction peak centered, accompanied by a substantial diminishing of the Bragg diffraction peaks of the precursor confirm that ZrATMP loses the long-range crystalline ordering, exhibiting an amorphous-like nature
![AIBN_ZrATM_DRX.png](/img/user/AIBN_ZrATM_DRX.png)

### BET Analysis
- type II isotherm, typical of mesoporous materials. The material exhibits a predominant micropore size of averaging 2.3 nm and a specific surface area  of 80.02 m²/g
### LSV
- The LSV curves in 3 M KCl solution (Fig. 2b) show that the potential of hydrogen evolution reaction (HER) shifts to a more negative value with a higher ZrATMP loading, suggesting a suppressed HER at high catalyst loadings
### SEM at different SOC
![Pasted image 20260526144400.png](/img/user/Pasted%20image%2020260526144400.png)

### Simulation
- They also calculated Fe2+ concentration distribution by the finite element simulation for PCF and Zr@CF3
- The Gibbs' free energy of the water dissociation ($\Delta G_{H_2O}$) is 2.59 eV on ZrATMP, which is 0.32 eV larger than that on PCF. This elevated energy barrier suppresses interfacial hydrogen adsorption and HER kinetics.
### XPS
- as the minimized d-p band center gap in ZrATMP (Fig. 4c) reduces bonding-antibonding orbital separation, thereby enhancing redox reaction kinetics

Long-term cycling reveals that the all‐iron flow cell with Zr@CF3 electrodes sustains 200-cycle operation with an average CE of 97 % and an EE of 70 %.

Source : https://doi.org/10.1016/j.cej.2025.167948



## AIBN
- ZIF glass–polymer composite membrane Jie Yang and Prof Jingwei Hou
- proton transport comparable to Nafion in our tests, and it would be useful to see how it performs and how stable it is under your Zn–Br conditions
- zinc coordination polymer glass
- https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iOMB0tMAAAAJ&cstart=20&pagesize=80&citation_for_view=iOMB0tMAAAAJ:Ehil0879vHcC