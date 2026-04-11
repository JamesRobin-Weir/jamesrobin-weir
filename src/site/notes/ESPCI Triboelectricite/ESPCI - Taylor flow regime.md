---
{"dg-publish":true,"permalink":"/espci-triboelectricite/espci-taylor-flow-regime/","dg-note-properties":{"Link":"[[ESPCI S2]]"}}
---

---
# {{Home Page| Home}} | {{Projects}} | {{CPGE}} | {{My carbon footprint}}
---

## Taylor slug gas flow

 The Taylor flow is a special case of slug flow where the bullet-shaped bubbles (Taylor bubbles) are separated by free-gas-entrained liquid slugs.

The key non-dimensional number is the **capillary number** $Ca=μU/γ$ (µ = water viscosity, U = average water velocity, γ = surface tension).

For well-defined Taylor slugs Ca should be **< 0.01** 
Source : [https://doi.org/10.3390/pr9050870](https://doi.org/10.3390/pr9050870)

| Name           | Symbol                      | Definition                                                                                         | Description                                                                      |
| :------------- | :-------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| Archimedes     | Ar                          | $\frac{\rho_l\left(\rho_l-\rho_g\right) g d^3}{\mu_l{ }^2}$                                        | The ratio of the gravitational to the viscous effects                            |
| Bond or Eötvös | Bo Eo                       | $\frac{\mathrm{gd}^2\left(\rho_l-\rho_g\right)}{4 \sigma}$                                         | The ratio of the gravitational (buoyancy) and the capillary force scales         |
| Cahn           | Cn                          | $\dfrac{\xi}{d}$                                                                                   | The ratio of the interface width and the tube diameter or any other length scale |
| Capillary      | Ca                          | $\mu \mathrm{U} / \sigma$                                                                          | The ratio of the viscous forces and the capillary forces                         |
| Ca/Re          | $\mathrm{Ca} / \mathrm{Re}$ | $\mu^2 /(\rho \mathrm{d} \sigma)$                                                                  | (N/A)                                                                            |
| Froude         | Fr                          | $\mathrm{U} / \sqrt{\mathrm{gd}}$                                                                  | The ratio between the flow inertia and the external field                        |
| Laplace        | La                          | $\left[\frac{\sigma}{g d^2\left(\rho_l-\rho_g\right)}\right]^{0.5}$                                | The ratio of the capillary and the gravitational (buoyancy) effects              |
| Ohnesorge      | Oh                          | $\frac{\sqrt{W e}}{\operatorname{Re}}=\frac{\mu}{\sqrt{\sigma \rho d}}$                            | The ratio of the viscous force to the inertia and the surface tension forces     |
| Reynolds       | Re                          | $\rho \mathrm{Ud} / \mu$                                                                           | The ratio between the inertia and the viscous forces                             |
| Suratman       | Su                          | $\frac{\mathrm{Re}^2}{\mathrm{We}^2}=\frac{1}{\mathrm{Oh}^2}=\frac{\mathrm{\sigma \rho d}}{\mu^2}$ | The ratio of the surface tension to the viscous forces                           |
| Weber          | We                          | $\mathrm{CaRe}=\frac{{ }\rho \mathrm{U}^2 \mathrm{~d}}{\sigma}$                                    | The ratio of the inertial forces to the interfacial forces                       |

_TABLEAU : Nombres adimensionnels pour un flux multiphasé_

![Microfluidic_flow_regimes.png](/img/user/ESPCI%20Triboelectricite/Microfluidic_flow_regimes.png)
### Slug regime

In the slug regime, interfacial tension is greater than inertial forces, and the Weber numbers are $7.61 × 10^{−6} < We_{ws} < 4.87 × 10^{−2}$ and $5.94 × 10^{−6} < We_{ks} < 5.94 × 10^{−4}$ 

Map of regime as a function of the two flows :

![Internat_Journal_multiphase_flow.png](/img/user/ESPCI%20Triboelectricite/Internat_Journal_multiphase_flow.png)

_Source : Chung, P.M.-Y., Kawaji, M., 2004. The effect of channel diameter on adiabatic two-phases flow characteristics in microchannels. International Journal of Multiphase Flow 30, 735–761

Attention pour des pressions importantes il faut utiliser un Luer Lock :

![Luer-Lock-Luer-Slip-Tips-857796342.png](/img/user/ESPCI%20Triboelectricite/Luer-Lock-Luer-Slip-Tips-857796342.png)

At Ca ≲ 0.01 and Reynolds number Re < 100 the interface sees mostly surface-tension forces. The T-junction pinches off the incoming air whenever the growing plug spans the channel, giving highly monodisperse “unit cells” of gas and liquid—a regime first mapped by Thorsen et al. and subsequently parameterised in many studies of T-junction droplet generators.

---

### Longeur des train d'onde de gouttes

The scaling law that predicts the final droplet length, $L_d$, at the point of detachment is
$$
L_d=w_c+w_n \frac{Q_d}{Q_c}
$$
where $Q_c$ and $Q_d$ are the flow rates of the continuous and dispersed phases respectively and $w_c$ and $w_n$ are the widths of the neck and of the main channel, equal for two identical capillaries. In non-dimensional form, this can be expressed as
$$
L_d / w_c=1+\alpha Q_d / Q_c
$$
where $\alpha=w_n / w_c$ is a positive constant that depends on the geometry of the T-junction (Garstecki et al., 2006). According to Xu et al. (2008), the blocking length is not necessarily equal to $w_c$ but can be generalised as $\varepsilon w_c$ as it depends on the geometry of the channel. Therefore, the scaling relation (5) can be modified as
$$
L_d / w_c=\varepsilon+\alpha Q_d / Q_c
$$
where $\varepsilon$ is a fitting parameter related to the geometry of the microchannel. This scaling law suggests that the droplet length depends only on the variation of the flow rate ratio of the two immiscible fluids. However, we also observed the variations in droplet length with capillary number in our simulations, analogous to those obtained by Christopher et al. (2008).

_SOURCE : Investigation of pressure profile evolution during confined micro-droplet formation using a two-phase level set method_


![Microfluidic_pumping.png](/img/user/Excalidraw/Microfluidic_pumping.png)

---

Further reading : Von Karman vortex streets

![Variation-of-the-Von-Karman-vortex-streets-as-a-function-of-the-Reynolds.png](/img/user/ESPCI%20Triboelectricite/Variation-of-the-Von-Karman-vortex-streets-as-a-function-of-the-Reynolds.png)