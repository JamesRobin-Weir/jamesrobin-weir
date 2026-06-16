---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-porosity-measurement/","dg-note-properties":{"aliases":null}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## Pore size measurement

Pores are first and foremost defined by their size, as shown below. 

![AIBN_Pore_sizes.png](/img/user/Excalidraw/AIBN_Pore_sizes.png)

However they are also defined by accessibility : at the surface through pores allow liquid/gas to traverse the sample and blind pores only allow them to permeate the interior, whilst within the sample closed pores are fully contained.

![AIBN_pore_accessibility.png](/img/user/Excalidraw/AIBN_pore_accessibility.png)

- Closed porosity -> total closed pore volume, estimated via true/theoretical density comparison (with no information on size distribution)
- Surface accessible pores -> estimated via gas (N2, Ar) adsorption after surface cleaning. The gas is held at its condensing temperature (77 K, 87K), and at equilibrium the extra sample mass from gas deposition is evaluated over a range of pressures. Classic methods give pore size distribution : BJH for mesopores, HK for micropores, or else DFT/Monte Carlo. This is useful for zeolites, clays, activated carbons, MOFs, catalysts...

MOFs tend to have micropores which can be measured via gas porosity/adsorption.  

---
## Porometry isotherms

The most common isotherms are I, II, and IV, associated with microporous, non-porous, and mesoporous materials, respectively. Furthermore, just as materials can contain both mesopores and micropores, some combinations of these classes are possible, such as a type I + IV.

![AIBN_Isotherm_types.png](/img/user/AIBN%20Zinc-Bromine%20Batteries/AIBN_Isotherm_types.png)

 Gurvich rule : assumes that the horizontal plateau of an isotherm represents the region where pore filling is complete and that fluid adsorbed in the pores has the same density as the bulk liquid at the same temperature and pressure.$$V_{tot} = \dfrac{m^{sat}_{ads}}{\rho_{liq}}= \dfrac{𝑉_{𝑆TP}𝑀 𝑝}{\rho R T} = 𝑉_{𝑆TP} × 1.547 × 10^{−3}$$When using nitrogen, $V_{tot}$ is total pore volume, M molar mass of $N_2$, p is pressure at STP

Sources: https://www.microtrac.com/files/99153/what-is-the-information-obtained-from-adsorption-isotherm.pdf

---

## GCMC Simulation

RASPA 3 can be used for pore size simulation from .cif files for crystaline species.
### Raspa3
Framework LJ: UFF or DREIDING
N2 model: TraPPE N2
Ar model: single-site Lennard-Jones Ar
Mixing rule: Lorentz–Berthelot
Framework: rigid
Temperature: 77 K for N2, 87 K for Ar
Pressure range: same points as experiment, preferably log-spaced at low P/P0

Install Use: Ubuntu-24-amd64-avx512