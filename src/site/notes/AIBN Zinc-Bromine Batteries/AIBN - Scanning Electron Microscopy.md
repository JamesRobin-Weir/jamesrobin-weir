---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-scanning-electron-microscopy/","dg-note-properties":{"aliases":["SEM"]}}
---

# Scanning Electron Microscopy (SEM)
## SEM Image Optimisation

At a neutral point of charge $I_B=I_{SE}+I_{BSE}$, however in a general case surface charging will add an additional term. This build up of negative charge via absorbed $e⁻$ or positive charge via ionisation of surface species leads to deviation of scattered electrons by electrostatic forces, deforming the image. This is perceived as a shifting of the image over time as charge builds up. 

Each of these currents is a function of the accelerating voltage, as shown schematically below. There exist two equilibrium (one stable and one unstable) points of nul charging: $E_{unstable}$ at lower kV, and $E_{stable}$ at higher kV.
 
![White_box_charging_theory.png](/img/user/Excalidraw/White_box_charging_theory.png) 
The sign of the surface charge influences electron deviation, but also the amount of scattered electrons reaching the detector. Thus, the following protocol is has been proposed by Dr. Ron Rasch:
- Zoom to high magnification into a small rectangular zone and wait for maximal charging (counting to 10 in ones head)
- Zoom out and check the colour of the previously zoomed area
- If it is darker, increase kV, and if it is lighter decrease it.

![AIBN_SEM_Optimisation_white_box.png](/img/user/Excalidraw/AIBN_SEM_Optimisation_white_box.png)

For polymer species, this $E_2$ equilibrium point is situated around 1.5 kV of accelerating voltage, or 1.5 keV of electron energy. For Daramic coated with polyethylene glycol (PEG) the experimental optimum kV I found was 1.9 kV. 

***

## SEM protocol for pristine and PEG-coated Daramic membranes

## Sample preparation

**Surface samples**
* Cut approximately 5 × 5 mm pieces
* Dry the pristine and coated membranes fully at 70°C under vacuum
* Mount flat on aluminium SEM stubs with conductive carbon tape

**Cross-sections**
* Immerse membrane strips in liquid nitrogen
* Fracture them while cold
* Mount the fractured edge facing the beam

## Conductive coating

Pt (for morphology imaging) thickness: ${15~\mathrm{nm}}$ 
- Pt gives a fine-grained conductive coating and is suitable for high-resolution polymer imaging.
- Use carbon coating for EDS, (as Pt introduces strong Pt peaks)

## JEOL JSM-IT810 parameters

| Parameter            | Setting                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accelerating voltage | **1.9 kV** (optimised kV-charging point)                                                                                                                                          |
| Working distance     | **7.8 mm**                                                                                                                                                                        |
| Detector             | **SE** (scattered electrons)                                                                                                                                                      |
| Vacuum               | **9.6x10⁻⁵ Pa**                                                                                                                                                                   |
| Probe current        | **7** (on a scale from 1 to 14)                                                                                                                                                   |
| Scan                 | Use quick for focussing, stigmatisation and the wobbler at 7000x mag, the use fine. Adjust with averaging at a higher scan speed over 20 samples if surface charging is an issue. |

**Surface orders of magnitude**
* 200-500×: general morphology
* 2,000-5,000×: pore structure
* 10,000-30,000×: main comparison
* 50,000× or higher: fine pore/coating morphology

Compare density of surface layers between membranes.

---
