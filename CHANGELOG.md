#Change Log

##[1.2] - 2016-10-29

##Added
- [README.md] line 79-80: `p-value is estimated as probability: _P_(`x`) = _P_(_v_ >= `x`).`  
  `The estimation is based on resampled data with size (`sampleSize`) for n-time (`simulation`) simulations.`
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
