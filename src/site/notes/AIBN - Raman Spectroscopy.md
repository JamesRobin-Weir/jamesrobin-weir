---
{"dg-publish":true,"permalink":"/aibn-raman-spectroscopy/","dg-note-properties":{"aliases":["Raman"]}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

# Raman Spectroscopy
## Introduction

For large particles, the efficiency of light scattering is proportional to $\dfrac{1}{\lambda^4}$, so shorter wavelength light scatters more. This is **Rayleigh-scattering**, which is **elastic**, and light is **emitted in all directions**. The sky is blue, but red near the horizon at sunset, due to atmospheric Rayleigh-scattering.

Of all scattered photons, one in 100 million loses some energy : this is **Stokes-Raman scattering**, which is **inelastic** as the molecule stays in an excited vibration state after emission. This weak signal means Raman spectroscopy is usually slower than related techniques. 

![Spring_and_balls.png](/img/user/Excalidraw/Spring_and_balls.png)

To isolate the in-elastically scattered photons before detection, an optical filter removes photons of the initial (unchanged) wavelength. Then a spectrograph changes photon direction based on $\lambda$ (in the manner of an optical prism), allowing them to land on different sections of a CCD detector (like that in a camera). 

Wave-number is used as a stand in for frequency, with $WN=\dfrac{f}{c}$ for light, as it is directly proportional to photon energy. By convention, incident photons are set to $0$ cm⁻¹.

## Differences with IR spectroscopy

IR spectroscopy uses a large incident band of light. Photons of energy $E=\Delta E$  equal to the energy difference between two states are absorbed, inducing elastic vibrations via excitation of electrons.

Raman spectroscopy probes the same two states through inelastic scattering, where the incident photon of energy $E$ is released at energy $E-\Delta E$. Since we take the difference of the two, analysis is independent of the source laser's wavelength.

Raman spectroscopy is often used on polymers, catalysts and various carbon compounds. 

## Limitations : fluorescence

The main limitation of Raman spectroscopy is fluorescence, which leads to wider and more intense peaks, as many slow inelastic de-excitations via non-radiative transitions take place. This large peak background noise can sometimes be removed in post, as long as it didn't saturate the detector. 

![Raman_vs_Fluoresence.png](/img/user/Excalidraw/Raman_vs_Fluoresence.png)

Additionally, the laser wavelength can be changed to a zone where there is no fluorescence in the first place. Generally, red lasers are less energetic and therefore cause less parasitic electronic excitations. If the sample is coloured, a laser of the same colour is also less likely to result in fluorescence. 

## Laser selection in practice

UV or blue light lasers are rarely used, due to the resulting fluorescence explained above. 

The CCD detector is limited to below 900 nm, beyond which a generally less sensitive IR detector (e.g. InGaAs) must be used, which affects measurement speed. And, since the scattering is inelastic, the heat generated may darken or burn samples, more so at longer wavelengths. 

Therefore commercial devices are generally in the 450 to 800 nm range. The two typical lasers used are 532 nm (green) (for CNTs with no fluorescence) and 785 nm (red) (for coloured or organic samples)

## Sensitivity and combination with optical microscopes

![Setup_Raman_Spectroscopy.png](/img/user/Setup_Raman_Spectroscopy.png)
	By <a href="//commons.wikimedia.org/w/index.php?title=User:Toommm&amp;action=edit&amp;redlink=1" class="new" title="User:Toommm (page does not exist)">Toommm</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by/4.0" title="Creative Commons Attribution 4.0">CC BY 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=80885633">Link</a>

If we focus the laser via microscope lenses, the Raman measurement becomes highly localised ( limited by diffraction around $d=\dfrac{\lambda}{2n\sin(\alpha)}\approx \dfrac{\lambda}{2}$ ). This allows for the collection of geometrical information. 

Usually, only back-scattered photons are collected, by collecting them through the same lens. The numerical aperture of the latter describes the range of angles of light it can collect : $\text{NA}=n\sin(\theta)=1 \implies 2\theta=180°$  

