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
![AIBN_ZrATM_DRX.png](/img/user/AIBN%20Zinc-Bromine%20Batteries/AIBN_ZrATM_DRX.png)

### BET Analysis
- type II isotherm, typical of mesoporous materials. The material exhibits a predominant micropore size of averaging 2.3 nm and a specific surface area  of 80.02 m²/g
### LSV
- The LSV curves in 3 M KCl solution (Fig. 2b) show that the potential of hydrogen evolution reaction (HER) shifts to a more negative value with a higher ZrATMP loading, suggesting a suppressed HER at high catalyst loadings
### SEM at different SOC
![AIBN_carbon_felt_treatment.png](/img/user/AIBN%20Zinc-Bromine%20Batteries/AIBN_carbon_felt_treatment.png)

### Simulation
- They also calculated Fe2+ concentration distribution by the finite element simulation for PCF and Zr@CF3
- The Gibbs' free energy of the water dissociation ($\Delta G_{H_2O}$) is 2.59 eV on ZrATMP, which is 0.32 eV larger than that on PCF. This elevated energy barrier suppresses interfacial hydrogen adsorption and HER kinetics.
### XPS
- as the minimized d-p band center gap in ZrATMP (Fig. 4c) reduces bonding-antibonding orbital separation, thereby enhancing redox reaction kinetics

Long-term cycling reveals that the all‐iron flow cell with Zr@CF3 electrodes sustains 200-cycle operation with an average CE of 97 % and an EE of 70 %.

Source : https://doi.org/10.1016/j.cej.2025.167948



## AIBN
- ZIF glass-polymer composite membrane Jie Yang and Prof Jingwei Hou
- proton transport comparable to Nafion in our tests, and it would be useful to see how it performs and how stable it is under your Zn-Br conditions
- zinc coordination polymer glass
- https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iOMB0tMAAAAJ&cstart=20&pagesize=80&citation_for_view=iOMB0tMAAAAJ:Ehil0879vHcC

----

## Best candidates for a Daramic-MOF anti-shuttle separator

Your target species are **polybromides**, especially $\mathrm{Br_3^-}$ and likely $\mathrm{Br_5^-}$. Because $\mathrm{Br_3^-}$ has an effective radius of only about **0.21 nm**, a separator cannot rely on pore-size exclusion alone. A practical MOF-modified Daramic layer should combine **small/tortuous transport paths**, **bromine/polybromide affinity**, **aqueous/oxidative stability**, and **low added resistance**.

### 1. **Amidated/sulfonated UiO-66: strongest direct recommendation**

This is the best starting point because there is a directly relevant zinc-bromine battery paper using **functionalised UiO-66 composite membranes**. The authors report that amidated/sulfonated UiO-66 balances $\mathrm{Zn^{2+}}$/$\mathrm{Br^-}$ transport while the UiO-66 cages and amine groups capture $\mathrm{Br_2/Br_n^-}$; their zinc/bromine flowless cells reached long cycling with high coulombic efficiency. ([RSC Publishing][1])

**Why it fits your case**

UiO-66 is a Zr-carboxylate MOF, and Zr-based MOFs are among the more robust MOF families in moisture and acidic conditions, though strong base can degrade them. ([MDPI][2]) The sulfonated component should help maintain hydrated ion-conducting domains, while the amide/amine functionality provides bromine/polybromide affinity. This is important because unmodified Daramic is porous and tends to allow bromine crossover, lowering coulombic efficiency. ([Springer][3])

**Equipment fit**

This is feasible with your equipment if you synthesise the MOF separately, then coat or infiltrate the Daramic at low temperature. UiO-66 can be made by greener/mechanochemical or ball-milling-assisted routes, and ball-milled UiO-66 has been reported with retained crystal structure and thermal stability. ([RSC Publishing][4])

**Practical form**

Use a **thin cathode-facing coating** or partial pore-infiltration layer:

* UiO-66-NH₂ or UiO-66-NH₂/SO₃H powder
* binder such as PAN, PVDF, Nafion ionomer, or another bromine-compatible binder
* sonication dispersion
* blade/dip coating on Daramic
* vacuum oven drying at about 40-80 °C

Do **not** put Daramic in a muffle or tube furnace. The furnace can be used for MOF powder activation or MOF-derived carbons only before contact with the membrane.

---

### 2. **UiO-66-NH₂ or mixed-linker UiO-66-NH₂/UiO-66-SO₃H: simpler first experiment**

If the exact amidated/sulfonated UiO-66 chemistry is too involved, start with **UiO-66-NH₂** or a mixed-linker UiO-66 containing amino and sulfonated linkers.

**Why it is promising**

The amino groups should improve bromine/polybromide affinity, while the Zr-MOF framework gives better aqueous/acidic stability than many Cu, Zn, or Co MOFs. UiO-66/UiO-67-type composite membranes have also been discussed as ion-selective membranes for halogen batteries, with UiO-66 and UiO-67 windows in the sub-nanometre range. ([Springer][5])

**Main caveat**

UiO-66 is not a perfect size-exclusion solution for $\mathrm{Br_3^-}). Your $\mathrm{Br_3^-}) radius corresponds to a diameter of about **0.42 nm**, so defects, hydrated-shell changes, interparticle voids, and binder cracks will dominate real crossover. The value of UiO-66 is therefore **capture plus tortuosity**, not just molecular sieving.

**Equipment fit**

Good. UiO-66-family powders can be made by solvothermal, room-temperature, or mechanochemical routes, then activated in a vacuum oven. Ball milling is particularly attractive because it can reduce solvent use and reaction time. ([MDPI][6])

---

### 3. **ZIF-8: small-aperture size-sieving layer**

ZIF-8 is worth testing because it has a reported pore aperture of about **3.4 Å**, smaller than the approximate $\mathrm{Br_3^-}) diameter implied by your radius. ([Nature][7])

**Why it is promising**

A continuous ZIF-8-rich layer could retard solvated $\mathrm{Br_3^-}) and larger $\mathrm{Br_5^-}) species by size and desolvation penalties. ZIF-8 can also be made by green mechanochemical routes from ZnO and 2-methylimidazole, which fits your ball-milling equipment. ([Open Research Repository][8])

**Main caveat**

I would not rank ZIF-8 above UiO-66 for a zinc-bromine electrolyte unless you verify stability. ZIF water stability depends strongly on conditions, and bromine/polybromide electrolyte is chemically aggressive. ([Open Research Repository][8])

**Best use**

Use ZIF-8 as a **thin topcoat** or **secondary sieving layer**, not as the only active component. A useful test structure would be:

[
\text{Daramic} ;|; \text{UiO-66-NH}_2\text{/binder} ;|; \text{thin ZIF-8 top layer}
]

with the MOF-rich side facing the bromine-positive electrolyte.

---

### 4. **ZIF-90: ZIF-8-like aperture with functionalisation handle**

ZIF-90 is similar in concept to ZIF-8 but has aldehyde-bearing linkers, giving a chemical handle for post-functionalisation. Its small aperture makes it attractive for sieving, while aldehyde chemistry could allow attachment of amines, imines, or other bromine-affinity groups.

**Why it is promising**

The functional handle is the main advantage over ZIF-8. A ZIF-90-derived layer could potentially combine **small-aperture transport restriction** with **polybromide-binding functionality**.

**Main caveat**

As with ZIF-8, stability in charged zinc-bromine electrolyte must be experimentally verified. I would treat it as a second-round option after UiO-66-NH₂ and ZIF-8.

---

### 5. **Nickel polyphthalocyanine 2D MOF, NiPPc: good for cathode-facing capture, risky inside separator**

NiPPc is a conductive 2D conjugated MOF reported as a bromine host for zinc-bromine batteries. It uses atomically dispersed Ni-N₄ sites and a conjugated framework to immobilise polybromides and improve bromine redox kinetics. ([Springer][5])

**Why it is promising**

This is not just a passive size-sieving material. It is a **bromine/polybromide adsorption-catalysis host**, which directly targets shuttle chemistry. Reported zinc-bromine cells using NiPPc showed high capacity and long cycling stability. ([RSC Publishing][9])

**Main caveat**

NiPPc is electrically conductive. Do **not** make a continuous conductive bridge through the Daramic separator, because that can cause electronic leakage or shorting. It is better used as:

* a cathode coating,
* a cathode-facing separator skin,
* or a discontinuous MOF-polymer composite layer with verified electronic insulation.

This is a strong functional option, but less straightforward than UiO-66 for separator modification.

---

### 6. **UiO-67 / PCN-605-H / PCN-606-OMe / PCN-700: bromine sorbent layer, not primary sieve**

Several Zr-based MOFs have reported high bromine uptake. A 2025 review lists bromine uptake values including UiO-67, PCN-700, PCN-605-H, and PCN-606-OMe, with PCN-605-H and PCN-606-OMe showing especially high uptake in organic media. ([RSC Publishing][10])

**Why they are promising**

These may work as **bromine reservoirs/scavenger layers**, especially on the cathode side. Zr chemistry is also more plausible in harsh electrolyte than many less stable MOF families.

**Main caveat**

Many of these frameworks have larger pores than UiO-66/ZIF-8. Once saturated, they could potentially become bromine-containing transport pathways rather than barriers. I would use them as a **thin cathode-facing bromine capture layer**, not as a through-separator filler.

---

## Recommended ranking for your first experiments

| Rank | MOF species                       | Best role                                 | Why                                                                                                       |
| ---: | --------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    1 | **Amidated/sulfonated UiO-66**    | Primary Daramic coating                   | Direct zinc-bromine membrane evidence; balances ion transport and polybromide capture.                    |
|    2 | **UiO-66-NH₂ or UiO-66-NH₂/SO₃H** | Practical first synthesis                 | Stable Zr-MOF family; amine/sulfonate functionality; feasible with ball milling/sonication/vacuum drying. |
|    3 | **ZIF-8**                         | Small-aperture topcoat                    | 3.4 Å aperture; easy mechanochemical synthesis; possible size/desolvation barrier.                        |
|    4 | **ZIF-90**                        | Functional small-aperture topcoat         | Similar sieving concept, with aldehyde post-functionalisation chemistry.                                  |
|    5 | **NiPPc 2D MOF**                  | Cathode-facing adsorption/catalysis layer | Strong bromine/polybromide immobilisation concept, but conductive.                                        |
|    6 | **UiO-67 / PCN Zr-MOFs**          | Bromine scavenger layer                   | High bromine uptake, but larger pores make them less ideal as primary separators.                         |

---

## Materials I would avoid initially

**HKUST-1/Cu-BTC** is easy to make by ball milling, but I would avoid it in zinc-bromine electrolyte because Cu nodes are a redox/leaching concern under bromine-rich aqueous conditions.

**MOF-74-type open-metal-site MOFs** may bind halogens, but many are less robust in water and chemically aggressive electrolytes.

**MOF-derived carbons** from ZIF-8/ZIF-67 are interesting because your tube furnace enables pyrolysis, but they are conductive. Use them only as a cathode additive or cathode-facing layer, not as a continuous separator filler.

---

## Suggested first test membrane

Start with:

**Daramic | UiO-66-NH₂/SO₃H-polymer composite layer**

Use a low MOF loading first, for example **0.1-1 mg cm⁻²**, and a thin coating, roughly **2-10 µm**. Put the MOF-rich side toward the bromine catholyte.

Minimum validation:

1. **H-cell crossover test** using charged zinc-bromine electrolyte on one side and blank electrolyte on the other.
2. **UV-vis or Raman tracking** of polybromide appearance in the receiving side.
3. **EIS/area-specific resistance** before and after coating.
4. **OCV self-discharge comparison** against bare Daramic.
5. **Post-soak PXRD/FTIR/SEM/ICP** to check MOF degradation, delamination, or metal leaching.

The most rational first route is therefore **functionalised UiO-66 on Daramic**, then compare against **ZIF-8 topcoated UiO-66** if crossover remains too high.

[1]: https://pubs.rsc.org/en/content/articlehtml/2024/ta/d4ta01005a "
        
    Functionalized metal-organic framework modified membranes with ultralong cyclability and superior capacity for zinc/bromine flowless batteries - Journal of Materials Chemistry A (RSC Publishing)

    "
[2]: https://www.mdpi.com/2079-4991/14/1/110 "Stability of Zr-Based UiO-66 Metal-Organic Frameworks in Basic Solutions | MDPI"
[3]: https://link.springer.com/article/10.1007/s40820-023-01174-7 "Zinc-Bromine Rechargeable Batteries: From Device Configuration, Electrochemistry, Material to Performance Evaluation | Nano-Micro Letters | Springer Nature Link"
[4]: https://pubs.rsc.org/en/content/articlelanding/2024/dt/d4dt01671h "
        
    Room-temperature synthesis of a Zr-UiO-66 metal-organic framework via mechanochemical pretreatment for the rapid removal of EDTA-chelated copper from water - Dalton Transactions (RSC Publishing)

    "
[5]: https://link.springer.com/article/10.1007/s40820-026-02068-0 "Metal-Organic Frameworks: Multifunctional Materials for High-Performance Zn-Halogen Batteries | Nano-Micro Letters | Springer Nature Link"
[6]: https://www.mdpi.com/2073-4352/11/1/15?type=check_update&version=1 "Synthesis of Metal Organic Frameworks by Ball-Milling | MDPI"
[7]: https://www.nature.com/articles/s42004-021-00613-z "Understanding the ZIF-L to ZIF-8 transformation from fundamentals to fully costed kilogram-scale production | Communications Chemistry"
[8]: https://openresearch-repository.anu.edu.au/items/bc0d6591-5db3-408f-9c73-e2eabdb7984c "Green Synthesis of Zeolitic Imidazolate Frameworks (ZIFs) for Sustainable Development"
[9]: https://pubs.rsc.org/en/content/articlelanding/2023/ee/d3ee01639k "Boosting aqueous non-flow zinc-bromine batteries with a ..."
[10]: https://pubs.rsc.org/en/content/articlehtml/2025/cc/d5cc03718b "Bromine sequestration by advanced functional porous materials  - Chemical Communications (RSC Publishing) DOI:10.1039/D5CC03718B"
