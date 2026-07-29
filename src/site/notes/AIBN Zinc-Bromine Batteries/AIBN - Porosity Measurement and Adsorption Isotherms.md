---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-porosity-measurement-and-adsorption-isotherms/","dg-note-properties":{}}
---


***
# {{Home Page| Home}} | {{Projects}} | {{CPGE|Classes Préparatoires (CPGE)}} | [CV](https://github.com/JamesRobin-Weir/jamesrobin-weir/blob/main/src/site/CV_James_Robin-Weir.pdf)
***

Forewarning : experimental pore size measurements often serve more as a fingerprint of a material rather than quantifying a physical reality, and must be treated with appropriate scepticism.

## Pore size measurement

Pores are first and foremost defined by their size, as shown below.

![AIBN_Pore_sizes.png\|400](/img/user/Excalidraw/AIBN_Pore_sizes.png)

However they are also defined by accessibility : at the surface through pores allow liquid/gas to traverse the sample and blind pores only allow them to permeate the interior, whilst within the sample closed pores are fully contained.

![AIBN_pore_accessibility.png\|300](/img/user/Excalidraw/AIBN_pore_accessibility.png)

- Closed porosity -> total closed pore volume, estimated via true/theoretical density comparison (with no information on size distribution)
- Surface accessible pores -> estimated via gas (N2, Ar) adsorption after surface cleaning. The gas is held at its condensing temperature (77 K, 87K), and at equilibrium the extra sample mass from gas deposition is evaluated over a range of pressures. Classic methods give pore size distribution : BJH for mesopores, HK for micropores, or else DFT/Monte Carlo. This is useful for zeolites, clays, activated carbons, MOFs, catalysts...

MOFs tend to have micropores which can be measured via gas porosity/adsorption.

---

## Adsorption isotherms

### Definitions

- **Adsorbate**: compound adsorbed onto the surface of the adsorbent
- **Adsorbent**: solid compound involved in the adsorption process. It acts as a heterogeneous catalyst, e.g. activated carbon, zeolites
- The IUPAC classifies adsorbents according to pore size: diameter greater than 50 nm = **macropores**, between 2 and 50 nm = **mesopores**, less than 2 nm = **micropores**

The IUPAC classifies the most common adsorption isotherms into 6 types : I, II, and IV are associated with microporous, non-porous, and mesoporous materials respectively. Furthermore, just as materials can contain both mesopores and micropores, some combinations of these classes are possible, such as a type I + IV.

![IUPAC_isotherms_classification.png](/img/user/Excalidraw/IUPAC_isotherms_classification.png)

---

### Type I : Langmuir isotherm for microporous solids

This kinetic isotherm model provides a simple description of the formation of a monolayer of adsorbate A on an adsorbent surface at a given temperature, yielding a proportion of occupied sites at equilibrium of $\Theta_A = \frac{K_\text{eq} \, P_A }{1+K_\text{eq} \, P_A}$, where ${\displaystyle K_{\text{eq}}}$ is a constant characterising the interaction between A and the surface.

#### Assumptions

- Monolayer adsorption (only one layer)
- Homogeneous, uniform and immobile surface : equivalence between adsorption sites
- Constant heat of adsorption
- Equal rates of adsorption and desorption
- Ideal gas
- No adsorbate-adsorbate interactions

![Adsorption_desorption_eng.png](/img/user/Excalidraw/Adsorption_desorption_eng.png)

#### Properties

- Behaviour at high and low pressures can be deduced by series expansion
- Widely used in the study of catalysts
- Cannot be applied where there are several types of sites, or several adsorbates (which may be non-ideal)...

Type I isotherms, with true chemisorption in micropores, occurs in materials such as zeolites and active carbon.

#### Sub-model : BET analysis

Many catalyst or porous material labs will have a BET (Brunauer, Emmett, Teller) type pore size analyser, which after sample preparation (degassing in a vacuum oven, ideally under inert atmosphere) gives specific surface area (m²/g) and pore size (nm). This distribution method is a multi-layer extension of the Langmuir model.

Assumptions:

- No lateral interactions between molecules
- Uppermost layer is in equilibrium with vapour phase
- First and Higher layer: Heat adsorption
- All surface sites have same adsorption energy for adsorbate
- Adsorption on the adsorbent occurs in infinite layers
- The theory can be applied to each layer

Limitations:

- Nonlinearity of BET plots at p/p0 <0.05 due to inhomogeneities and lateral interactions
- Failure of the BET equation at p/p0 >0.3 due to polarisation forces increasing heat of adsorption as layer number increases
- Difficult to separate mono-multilayer adsorption from pore filling

---

### Type II : Unrestricted mono-multilayer adsorption

A Type II isotherm posses a saturation point (M in red) for the first monolayer, and then proceeds to form additional adsorbate layers. It is generally associated with non-porous or macroporous materials. This process is called mono-multilayer adsorption.

#### Sub-model : Freundlich isotherm

The Freundlich isotherm is an empirical adsorption model, not an IUPAC Type I-VI classification. It has no saturation point, but can be used to model part of a type II isotherm with lower numerical complexity.

![Isotherme_Freundlich.png](/img/user/Excalidraw/Isotherme_Freundlich.png)

- $\dfrac{m_a}{m}=K_f \times p^{\frac1n}$ where $m_a$ is the adsorbed mass and $m$ the total mass of adsorbent A, and $K_f$ is a constant dependant on T°C, the adsorbate, and surface area
- Unlike the Langmuir isotherm, the Freundlich isotherm applies to multi-layer adsorption on heterogeneous surfaces
- A ${\displaystyle \Delta _{\mathrm {r} }H}$ that varies with site occupancy indicates an in-homogeneous surface and therefore the use of the Freundlich isotherm

---

### Type III and V: rare convex isotherms

Type III isotherms usually occur in systems with weak adsorbent-adsorbate interactions and strong adsorbate-adsorbate interactions, often accompanied with a heterogeneous deposition morphology. Materials include polyethylene.

Type V isotherms resemble type III but with an additional hysteresis loop associated with a pore filling mechanism, and are associated with weak adsorbate-adsorbate interactions in porous adsorbents.

---

### Type IV isotherm : complete pore fillling

Type IV isotherms have a similar initial regime to type I isotherms, but tend to level out at higher pressures, with an additional hysteresis loop, of which the lower branch corresponds to mono-multilayer adsorption, the upper to desorption.

![AIBN_CAPILLARY_CONDENSATION.png](/img/user/Excalidraw/AIBN_CAPILLARY_CONDENSATION.png)

This is due to capillary condensation in the mesopores, a process where vapour condenses into liquid below the saturation vapour pressure thanks to increased number of van der Waals interactions between vapour phase molecules inside the confined space. This is an issue notably in atomic force microscopy (AFM).

---

### Type VI isotherm

Type VI isotherms are rare, and usually represent successive multi-layer adsorption on uniform non-porous surfaces, where step height is proportional to capacity for each layer. Example materials include graphitised carbon.

---

### Gurvich rule for micro and mesopores

For micro and mesopores, the Gurvich rule states that, when present, a horizontal plateau of an isotherm corresponds to a pore filling process, and that an uptake near P/P° signifies pore saturation. Most gas adsorption instruments report uptake as gas volume at STP ($V_{ads, STP}$). Assuming that fluid adsorbed in the pores has the same density as the bulk liquid at the same temperature and pressure, and knowing the molar volume of the ideal gas at standard temperature and pressure, then at saturation:
$$V^{tot}_{pore} = \dfrac{m^{sat}_{ads}}{\rho_{liq}}= V_{ads, \text{STP}}(P/P°) \dfrac{M}{\rho_{liq}V_{m, \text{STP}}}$$When using nitrogen, the second term can be calculated for $N_2$ as $1.547 × 10^{-3}$. Among multiple limitations, the rule notably cannot be applied to composite Type IV + Type II isotherms where the plateau in no longer quasi-horizontal.

---

### Kelvin equation for mesoporosity

The Kelvin equation provides a correlation between pore diameter and pore condensation pressure, assuming cylindrical mesopores with no fluid-wall interactions :
$$\ln \dfrac{P}{P°} = \dfrac{-2\gamma V_l}{r_p R T}$$
Where $\gamma$ is the surface tension of liquid nitrogen, $V_l$ the liquid molar volume, $r_p$ the pore radius, $r_k$ the critical radius, $R$ the universal gas constant and $t$ the statistical thickness of the absorbed film on pore walls.

---

### Hysteresis loop

Thin vertical hysteresis loops are associated with regular cylindrical pore channels, while thicker loops are often more disorderly pores. Low pressure hysteresis => no accurate pore size analysis is possible due to excess swelling!

---

## Synthesis Table

| **Type**                                                              | **Characteristics:**                                                                                                                                                             | **Adsorbent**                                                    | **Interaction**                                          | **Example**                                                        |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| Type I: Monolayer Adsorption in Micropores                            | Adsorbate mass increases sharply at low pressures, then reaches a saturation plateau                                                                                             | Microporous solids                                               | Strong adsorbent-adsorbate interactions                  | Adsorption of gas in microporous materials (e.g. activated carbon) |
| Type II: Multilayer Adsorption on Macroporous Solids                  | Same as II followed by a clear inflection point upon completion of the first monolayer                                                                                           | Macroporous solids                                               | Strong adsorbate-adsorbent interactions                  | Multilayer adsorption on non-porous or macroporous solids          |
| Type III: Weak Adsorbate-Adsorbent Interactions on Macroporous Solids | A continuous, monotonic increase in adsorption without an inflection point                                                                                                       | Macroporous solids                                               | Weak adsorbent-adsorbate interactions                    | Adsorption on solids with irregular  adherence                     |
| Type IV: Capillary Condensation in Mesopores                          | Similar to Type II, but with a hysteresis loop, indicating that the desorption path differs from the adsorption path due to capillary condensation and evaporation in mesopores. | Mesoporous solids                                                | Strong adsorbate-adsorbent interactions                  | --                                                                 |
| Type V: Capillary Condensation with Hysteresis                        | Similar to Type III, with a hysteresis loop indicating capillary condensation.                                                                                                   | Mesoporous solids                                                | Weak adsorbate-adsorbent interactions                    | --                                                                 |
| Type VI: Stepwise Adsorption on a Uniform Surface                     | Adsorption occurs in a series of discrete steps.                                                                                                                                 | Non-porous solids with uniform chemical and physical properties. | Adsorption of non-polar adsorbates on a uniform surface. | Adsorption of nitrogen on graphitised carbon                       |

Sources and futher reading :

- https://www.microtrac.com/files/99153/what-is-the-information-obtained-from-adsorption-isotherm.pdf
- In depth slides on BET analysis : https://web.archive.org/web/20210507004322/https://www.iitk.ac.in/che/pdf/resources/BET-TPX-Chemi-reading-material.pdf
- Standard protocole published by IUPAC : https://www.researchgate.net/publication/282624978_Physisorption_of_gases_with_special_reference_to_the_evaluation_of_surface_area_and_pore_size_distribution_IUPAC_Technical_Report#fullTextFileContent
- Textbook pages : https://link.springer.com/content/pdf/10.1007/978-94-009-5562-2_3

---

## GCMC Pore adsorption simulation

RASPA 3 can be used for pore size simulation from .cif files for crystaline species.

Framework LJ: UFF or DREIDING
N2 model: TraPPE N2
Ar model: single-site Lennard-Jones Ar
Mixing rule: Lorentz–Berthelot
Framework: rigid
Temperature: 77 K for N2, 87 K for Ar
Pressure range: same points as experiment, preferably log-spaced at low P/P0

Install Use: Ubuntu-24-amd64-avx512
