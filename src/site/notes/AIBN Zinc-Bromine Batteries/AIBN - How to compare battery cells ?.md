---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-how-to-compare-battery-cells/","dg-note-properties":{}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

# How to Compare Different Battery cells?

There are many standards and metrics used to compare different batteries. The following is an overview of some of the most common:

---
### Energy Capacity

- The **watt-hour** (Wh) is a unit of energy equivalent to one watt of power consumed over one hour. When charging, the capacity is denoted by Λ in Ah/kg.
- **Energy density** is the amount of energy contained in a battery relative to its size, generally measured in watt-hours per liter.
- **Specific energy** is the amount of energy contained in a battery relative to its weight, in watt-hours per kilogram.

---
### Charge/Discharge Characterisation
- Charge and discharge performance (battery power) describe the rate at which an electric current can flow through a battery, measured in **C-rate**.
- 1C represents the current required to charge or discharge a fully charged battery in one hour (current (A) = capacity (Ah)). For a 5 Ah battery: 0.5 C discharge = 2.5 A discharge current. A battery with a capacity of 6 C could charge or discharge in approximately 10 minutes.

High-rate charge and discharge capabilities are essential for fast charging and meeting high energy demands, but they generally reduce the actual available capacity and affect lifespan.

- The **cycle life** of a battery refers to the number of complete charge and discharge cycles a battery can undergo before its capacity level drops below 80%.

Over the course of a charge discharge cycling test at a certain c-rate, the following parameters are usually recorded :

- **Couloumbic efficiency (CE)** : the ratio of the charge released during discharge (Ah) to the charge introduced during charging (Ah). High coulombic efficiency usually indicates a long battery cycle life : $CE=\dfrac{Q_{discharge}}{Q_{charge}}$ and $Q_n=Q_0CE^n$ so $n=\dfrac{ln(Q_n/Q_0)}{ln(CE)}$ 
- **Voltaic efficiency (VE)** : measures the effects of cell polarisation or cell voltage losses, calculated via the following equation $\eta_v=\dfrac{\frac{1}{t_{discharge}}\int V_{discharge}\mathrm{d}t}{\frac{1}{t_{charge}}\int V_{charge}\mathrm{d}t}×100$ 
- **Energetic efficiency (EE)** : ratio of energy output to energy input during charging and discharging cycles, with lithium-ion batteries typically achieving efficiencies over 95% : $EE=\dfrac{I_{discharge}V_{discharge}}{I_{charge}V_{charge}}$ 


---
### Physical Characteristics of the Battery
- The **calendar life** refers to the degradation that occurs over the years when the battery is inactive, while it retains its energy capacity. This degradation is considered separate from that caused by usage cycles (for example, a 10% decrease in capacity due to calendar life + 10% due to cycle life = 80% remaining capacity).
- The **swelling rate** of a lithium-ion battery corresponds to the amount of anode material contained in the battery that expands during charging.
- **Impedance** refers to the resistance of a cell when stimulated by an electric current.
- **Storage performance** describes how, after a period of storage, the battery’s performance may change due to certain factors, leading to battery self-discharge, electrolyte leakage, battery short-circuiting, etc.

Sources: Vedran Bobanac, Hrvoje Basic, Hrvoje Pandzic, [Determining Lithium-ion Battery One-way Energy Efficiencies: Influence of C-rate and Coulombic Losses](https://animation.fer.hr/images/50036152/EUROCON%202021_Determining_Lithium-ion_Battery_One-way_Energy_Efficiencies_Influence_of_C-rate_and_Coulombic_Losses.pdf), IEEE EUROCON-2021
