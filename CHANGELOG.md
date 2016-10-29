#Change Log

##[1.2] - 2016-10-29

##Added
- [README.md] line 115-118: `1. _P_(the upper 25% of given data):` `{"p":0.035,"x":1.7000000000000002,"sampleSize":100,"simulation":10}`  
  `2. _P_(0):` `{"p":0.554,"x":0,"sampleSize":100,"simulation":10}`  
  `3. _P_(-1.96):` `{"p":0.966,"x":-1.96,"sampleSize":100,"simulation":10}`  
  `4. _P_(1.96):` `{"p":0.028,"x":1.96,"sampleSize":100,"simulation":10}`
- [README.md] line 111-113: `###_p_-value estimation`  
  `The sampled size by "draw2Sample.js":` `<Sample size:2527>`  
  `_p_-value was estimated as probability on v-axis: _P_(`x`) = _P_(_v_ >= `x`).`

1. _P_(the upper 25% of given data): `{"p":0.035,"x":1.7000000000000002,"sampleSize":100,"simulation":10}`
2. _P_(0): `{"p":0.554,"x":0,"sampleSize":100,"simulation":10}`
3. _P_(-1.96): `{"p":0.966,"x":-1.96,"sampleSize":100,"simulation":10}`
4. _P_(1.96): `{"p":0.028,"x":1.96,"sampleSize":100,"simulation":10}`

##Changed
- [README.md] line 79: `_p_-value is estimated as probability on v-axis: _P_(`x`) = _P_(_v_ >= `x`).`
- [README.md] line 67: `##\[v1.2+\] Estimating _p_-value`
- [README.md] line 33: `* \(Optional \[v1.2+\]\) call "_pValue()" of "pValue.js", in order to estimate _p_-value; (see [__Estimating _p_-value__](#v12-estimating-p-value) for details of prameters).`
- [README.md] line 29: `3. __\(Optional \[v1.2+\]\) Estimating _p_-value;__ _p_-value is estimated with "pValue.js" via _Sp_.`

##Added
- [README.md] line 82-86: `####Examples`  
  Script 1: `_pValue('1,2');` the result: `{"p":0.504,"x":1.75,"sampleSize":100,"simulation":10}`  
  Script 2: `_pValue('1,2,3');` the result: `{"p":0.323,"x":2.5,"sampleSize":100,"simulation":10}`  
  Script 3: `_pValue('1,2,3',1.1);` the result: `{"p":0.676,"x":1.1,"sampleSize":100,"simulation":10}`  
  Script 4: `_pValue('1,2,3',2,10,1);` the result: `{"p":0.6,"x":2,"sampleSize":10,"simulation":1}`
- [README.md] line 79-80: `p-value is estimated as probability: _P_(`x`) = _P_(_v_ >= `x`).`  
  The estimation is based on resampled data with size (`sampleSize`) for n-time (`simulation`) simulations.
- [README.md] line 70-78: `_pValue(data,x,sampleSize,simulation)`  
  `/*`  
  `*===<parameter>===`  
  `* data: numerical data as csv formatted text e.g., '1,2,3,...'`  
  `*===<optional parameters>===`  
  `* x: numerical value; the upper 25% of a given values as default`  
  `* sampleSize: numerical positive integer; 100 as default`  
  `* simulation: numerical positive integer; 10 as default`  
  `*/`
- [README.md] line 68-69: `####__"pValue.js"__`  
  `* Probability estimator with given numerical data and bootstrap Method (Efron,1979) on Firefox.`

##Changed
- [README.md] line 33: `* \(Optional \[v1.2+\]\) call "_pValue()" of "pValue.js", in order to estimate p-value; (see [__Estimating p-value__](#v12-estimating-p-value) for details of prameters).`

##Added
- [README.md] line 66-67: `______`  
  `##\[v1.2+\] Estimating p-value`
- [README.md] line 33: `* \(Optional \[v1.2+\]\) call "_pValue()" of "pValue.js", in order to estimate p-value; (see [__Estimating p-value__]() for details of prameters).`
- [README.md] line 29: `3. __\(Optional \[v1.2+\]\) Estimating p-value;__ p-value is estimated with "pValue.js" via _Sp_.`
- [README.md] line 24: `* \[v1.2+\] pValue.js`

##[1.2] - 2016-10-28

##Changed
- [pValue.js] line 21: `  if(+x!=0){x=(!x||!/^[+-]?[0-9]+(?:\.[0-9]+)?$/.test(+x))?'up25(d)':x;}else{x=0;}`

##[1.2] - 2016-10-27

##Changed
- [pValue.js] line 48-50: `  W.addEventListener('message',function(e){`  
  `    R.p=e.data[0],R.x=e.data[1],R.sampleSize=sampleSize,R.simulation=simulation;`  
  `    slf.document.getElementsByTagName('body')[0].innerHTML+='<textarea>'+slf.JSON.stringify(R)+'</textarea>',R=null;`  
  `  },true);`
- [pValue.js] line 19: `  var slf=window,size=0,b,U,W,spt='',R={p:0,x:0,sampleSize:0,simulation:0};`
- [pValue.js] line 18: `  function _pValue(data,x,sampleSize,simulation){`

##[1.1beta] - 2016-10-26

##Added
- [pValue.js] line 9: `//probability estimator with given numerical data and bootstrap Method (Efron,1979) on Firefox.`

##[1.1beta] - 2016-10-25

##Changed
- [pValue.js] line 29-34: added script using modified version of bootstrapEst-2.1/bootstrapMdl.js;

##Added
- added files: pValue.js

##[1.1beta] - 2016-10-24

##Removed
- [bootstrapEst-2.1/bootstrapMdl.js] line 6-13: removed

##Changed
- [bootstrapEst-2.1/bootstrapMdl.js] line 14: `'var bts=function(A,n){var r=[],rdInt=0;for(var i=0;i<n;i+=1){rdInt=Math.floor(A.length*Math.random());r.push(A[rdInt]);}return r;},'`
- [bootstrapEst-2.1/bootstrapMdl.js] line 1-10: `/*bootstrapEst-2.1/bootstrapMdl.js (Yuji SODE,2016)`  
  `* This software is released under the MIT License. See http://opensource.org/licenses/mit-license.php`  
  `* the simple interface for estimation of a value of statistic, with bootstrap Method (Efron,1979).`  
  `* reference: Efron, B. 1979. Bootstrap Methods: Another Look at the Jackknife. Ann. Statist. vol. 7, no. 1, p. 1-26.`  
  `*/`
