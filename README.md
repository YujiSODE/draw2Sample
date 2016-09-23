# draw2Sample
the interface for graphical sampling in order to generate values following an empirical distribution, with img/canvas tag on Firefox.  
https://github.com/YujiSODE/draw2Sample

>Copyright (c) 2016 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

##Concept
![the concept of graphical sampling: draw2Sample_Fig.png](./draw2Sample_Fig.png)  
__Figure 1. the concept of graphical sampling.__ _f_ (_x_) is a graph drawn on graphical data (_W_ x _H_ px). 


The sample (_Sp_) as a result of graphical sampling can be expressed with graphical data (_W_ x _H_ px) as follows:  
let graphical heights of _f_ (_x1_) and _f_ (_x2_) as _a1_ px and _a2_ px,  
and  
_Sp_ = _x0_, ..., _x1_, ..., _x1_, _x2_, ..., _x2_, ..., _xn_  
_Sp_ = _x0_ \* _a0_, _x1_ \* _a1_, _x2_ \* _a2_, ..., _xn_ \* _an_

##Script
* draw2Sample.js

##How to generating values following a given distribution
1. __"Sample (_Sp_)":__ ["Rnd"](#output-data) in the result output of "draw2Sample.js"  
2. __Generating target values;__ the target values are obtained with bootstrap Method (Efron,1979) via _Sp_.

##How to use
* call "draw2Sample()" in a html file with img/canvas tag.

1. __Selecting some target images__  
   __Target tag;__ here target images can be selected.  

2. __Draw graph__  
   __Drawing;__ a graph can be drawn on the newly created canvas tag freehand or with script (see [__"Example with the standard normal distribution"__](#example-with-the-standard-normal-distribution)).  
   "canvas id": the id of canvas tag to draw graph.  
   "Size": size of the selecting canvas tag, expressed with Width (W) and Height (H).

3. __Sampling__  
   The sampling from the given graph (2.) is run with __"Run sampling" button__, and the result output is shown in __"Result"__.  

   ####_Inputs and buttons_  
   * __"Target width":__ the target sampling area, expressed with left side x coordinate (x0) and width (w), shown in red.
   * __"Sampling interval";__ it sets how many times the given graph (2.) is sampled in a given target area, starting with x0.
   * __"Range of values":__ the true x-coordinate values in the target sampling area, expressed with left side (v0) and right side (v).
   * __"Clear image" button;__ it clears the selected image (1.), which is shown under the drawing layer.
   * __"Show sampling line" button;__ it shows "Sampling interval" as vertical lines.
   * __"Clear sampling line" button;__ it clears "Sampling interval" shown by __"Show sampling line" button__.
   * __"Clear drawing" button;__ it clears drawn graph (2.).
   * __"Run sampling" button;__ it runs sampling and outputs results into __"Result"__.
   * __"Close" button;__ it closes this interface.
   * __"Result";__ where results are output, and additional comments are also available here.
   * __"Clear result" button;__ it clears output results in __"Result"__.
   * __"Email address":__ email address used outputting __"Result"__ as email format.
   * __"Output as email" button;__ it saves the __"Result"__ as email to given address.

   ####_Output data_  
   * dataLog: csv formatted values expressed as _n_@_y_ for a _n_-th sampling result: _y_ with top left corner as origin.
   * x@f(x): csv formatted values expressed as _x_@_f_ (_x_) for a value of _f_ (_x_) at _x_ with bottom left as origin.
   * __Rnd:__ csv formatted values estimated as results of a sampling.

______
##Example with the standard normal distribution
###Script used for drawing graph
* stdNormDist100pt.js

______
##Reference
* Efron, B. 1979. Bootstrap Methods: Another Look at the Jackknife. Ann. Statist. vol. 7, no. 1, p. 1-26.
