---
{"dg-publish":true,"permalink":"/aibn-zinc-bromine-batteries/aibn-electrochemical-impedance-spectroscopy-eis/","dg-note-properties":{"aliases":["EIS"]}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## Electrochemical impedance spectroscopy (EIS)

Electrochemical impedance spectroscopy (EIS) is a characterization technique for an electrochemical system (battery, electrolyzer, fuel cell) that consists of applying a low-amplitude alternating signal to the electrochemical system and measuring its response at different frequencies. 

This marks a swap from the time domain (cyclic voltametry etc) to the frequency domain, where slow processes can be probed at low frequencies, and fast processes can be probed at high frequencies. The practical frequency range used with most of the commercially available electrochemical analysers can be from 1 μHz to 1 MHz.

![ZIB_SIE_white.png](/img/user/Excalidraw/ZIB_SIE_white.png)
	_Fig. 1 : Imaginary and real response to EIS excitation (Wikipedia)_

System response to a certain perturbation is governed by three processes each with their different characteristic time constant (given in orders of magnitude):
- charging/discharging of the electric double layer at the electrode/electrolyte interface : 0.01 ms (1 kHz)
- kinetics of the redox reaction : 1 ms (500 Hz)
- diffusion of the redox species from the bulk solution to the electrode surface : 1 s (1 Hz)

![EIS_overview.png](/img/user/EIS_overview.png)

---
## Preliminary information

**Principle of the method**
A potential $E_0cos(\omega t)$ is imposed and i(t) is measured at the output (or vice versa), then the Fourier transform is taken to move from the time domain to the spectral domain. The perturbation perturbation must be small to ensure a linear signal-response relationship (which is an approximation). 

- **Potentiostatic EIS**: V(t) is imposed in order to measure i(t)
- **Galvanostatic EIS**: i(t) is imposed in order to measure V(t)

The impedance $Z=\dfrac{E(\omega)}{i(\omega)}$ is calculated, which is a priori complex.

- **Bode plot** -> 2 graphs, the amplitude and then the phase angle as a function of frequency

In polar coordinates, $Ze^{i\theta}$ is plotted directly, or else $Z$ can be projected onto x and y (such that $Z_x=Z_{real}=Z*\cos(\theta)$ and similarly for $Z_y$, such that $Z=\sqrt{Z_x^2+Z_y^2}$ ), which gives the following graph:

![Impedance_cartesien.png](/img/user/Impedance_cartesien.png)
	_Fig.: Impedance plot in Cartesian coordinates_

- **Nyquist plot** -> impedance magnitude $Z$ and phase angle $\theta$ as a function of the imposed frequency
![Nyquist_Bode.png](/img/user/AIBN%20Zinc-Bromine%20Batteries/Nyquist_Bode.png)
This makes it possible to build an electrical model (circuit), then perform fitting to determine the values of the components (see this [fitting site](https://app.circuitfitting.net/tools/fitting))

---
### A few principles and orders of magnitude
- **Double-layer charging time**: microsecond
- **Characteristic ionic diffusion time**: hundreds of milliseconds
- At low frequency, higher-impedance processes are generally observed, such as ionic diffusion
- In the spectrum, the anodic reaction should correspond to low frequencies, because the HER: $2H_2O \rightarrow O_2 + 4e^- +4H^+$ is the kinetically limiting (slow) reaction

---
### Warburg impedance

![ZIB_Warburg.png](/img/user/ESPCI%20Zinc%20Ion%20Batteries/ZIB_Warburg.png)
Associated with diffusion, this regime is characterized by a 45° line in the Nyquist plot, which means that the charge carriers move at a constant speed. This can be rationalized as follows:

- **Real impedance** = diffusion distance in the oxide layer, 
- **Imaginary impedance** = delay required for ion diffusion (through the oxide layer)

So if the ratio $\dfrac{Z_i}{Z_r}$ is linear with frequency, then the two speeds are linearly correlated. If the slope is 45° then they are equal.

---
Sources: 
- https://pineresearch.com/support-article/eis-basics/
- https://doi.org/10.1021/acsmeasuresciau.2c00070