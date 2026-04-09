---
{"dg-publish":true,"permalink":"/aibn/aibn-separator/","dg-note-properties":{"aliases":["Daramic","Self Discharge"]}}
---

---
# [[Weirsite/Home Page\| Home]] | [[Weirsite/Projects\|Projects]] | [[CPGE\|CPGE]] | [[Weirsite/My carbon footprint\|My carbon footprint]]
---
## ZBRB Separator
t is necessary to keep both compartments of the half cell separate with regards to zinc metal and bromine gas, in order to avoid self discharge (see figure below), whilst still allowing for ion transport.

![ZBRB_self_discharge.png](/img/user/AIBN/ZBRB_self_discharge.png)

Hence, a cost-effective ion-exchange membrane preventing positive and negative electrolytes from cross-mixing while transporting Zn²⁺ and Br⁻ is a key requirement of ZBFBs.
## Daramic Polyethylene Separator
The Daramic is a microporous polyethylene separator. It is highly inert and has a sub micro meter median pore size, rendering it an ideal membrane matrix. Upon heating and application of solvent, the pores can be filled with cross-linked cation exchange material, such as PVA, with the daramic matrix providing the main source of structural support

It is used in lead acid batteries, and costs only a few dollars per square meter. The Daramic company also donates sheets to research institutions free of cost. 

![Daramic_matrix_seperator.png](/img/user/AIBN/Daramic_matrix_seperator.png)


### Characteristics
For the **microporous polyethylene/silica Daramic separators commonly cited in flow-battery research**, the typical reported value is about **0.15 µm median pore size** (with porosity around **57%**). That is the number you’ll often see when Daramic is used as the porous support/separator in redox-flow battery papers.

For industrial battery separator families from Daramic/DARAK, the manufacturer describes them more generally as sub-micron microporous materials rather than giving one universal value. One DARAK industrial datasheet says the **average pore diameter is below 1 µm**, with **90% of pores between 0.3 and 0.8 µm**, and another DARAK 9000 sheet lists **0.6 µm average pore size**. ([Daramic](https://www.daramic.com/storage/wysiwyg/DARAK%20for%20Flooded%20Batteries.pdf "DARAK Separator for Flooded Industrial Batteries"))

### Membrane modification
#### Activated carbon coating
Activated carbon can be applied to the Daramic membrane in order to decrease the internal resistance of the cell, as can be seen from the Nyquist plots.

Protocol : A piece of Daramic microporous membrane with a thickness of 200 mm was used as the substrate for carbon coating. The activated carbon layer was prepared by spraying carbon ink onto the surface of microporous membrane with loading of 5 mg cm⁻². The carbon ink was made by dispersing activated carbon and 0.05 wt% naﬁon solution based on the desired ratios in ethanol under a strong ultrasonication. At last the CCM was dried at 70°C for 4 h.

![Carbon_Coated_Membrane.png](/img/user/Carbon_Coated_Membrane.png)

_Source : 10.1016/j.jpowsour.2012.11.033_

#### Carbon Nanotube (CNT) filling
In order to limite the bromine diffusion, CNTs are added in the fill of the pores of the Daramic membrane to inhibit the crossover of bromine species, with [[AIBN/AIBN - Nafion\|nafion]] ionomer as the pore filling agent.

---
## Sulfonated poly (ether ether ketone) (SPEEK) membrane

Speek is a hydrocarbon-based membrane that is widely used in fuel cells and vanadium redox flow batteries as an ion-exchange membrane with excellent chemical, thermal stability, and low cost. The sulfonate anions of SPEEK are fixed on the polymer backbone, with only the counter-cations being mobile. 

![AIBN_SPEEK_membrane.png](/img/user/AIBN_SPEEK_membrane.png)

Immersion of the SPEEK membrane in an electrolytic solution containing ZnCl2 results in replacement of the H⁺ ions with Zn²⁺ ions through the ion-exchange process. However, in ZBFBs, due to its harsh nature, bromine permeates through the SPEEK membrane and attacks the sulfonate group, leading to low membrane durability. 

---

Further reading : 
- https://asianbatteryconference.com/wp-content/uploads/sites/28/2023/05/Wednesday-Jorg-Deiters.pdf 
- https://chemisting.com/2023/06/03/an-improved-diy-cation-exchange-membrane-with-less-degradation-using-a-daramic-pe-microporous-separator-as-base/

Sources : 
- Synthesis and characterization of highly durable hydrocarbon-based composite membrane for zinc-bromine redox flow battery https://doi.org/10.1016/j.jpowsour.2023.232821