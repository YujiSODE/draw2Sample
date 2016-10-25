#Change Log

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