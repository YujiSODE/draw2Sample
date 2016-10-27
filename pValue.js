/*draw2Sample
* pValue.js
*
*    Copyright (c) 2016 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//probability estimator with given numerical data and bootstrap Method (Efron,1979) on Firefox.
/*
*===<parameter>===
* data: numerical data as csv formatted text e.g., '1,2,3,...'
*===<optional parameters>===
* x: numerical value; the upper 25% of a given values as default
* sampleSize: numerical positive integer; 100 as default
* simulation: numerical positive integer; 10 as default
*/
function _pValue(data,x,sampleSize,simulation){
  var slf=window,size=0,b,U,W,spt='',R={p:0,x:0,sampleSize:0,simulation:0};
  //if x is numerical x=x, otherwise x='up25(d)'; 'up25(d)' is the upper 25% of a given values
  x=(!x||!/^[+-]?[0-9]+(?:\.[0-9]+)?$/.test(+x))?'up25(d)':x;
  //smpleSize: positive integer
  if(!sampleSize){sampleSize=100;}else if(!/^[+]?[1-9][0-9]*$/.test(sampleSize)){throw new Error('sampleSize: invalid value');}
  //simulation: positive integer
  if(!simulation){simulation=10;}else if(!/^[+]?[1-9][0-9]*$/.test(simulation)){throw new Error('simulation: invalid value');}
  /*script for worker*/
  spt=[
    /*this method estimates max and min value of an array; returned value is [max,min]*/
    'this.Array.prototype.mx=function(){var A=this.sort(function(a,b){return b-a;});return [A[0],A[A.length-1]];};',
    /*bootstrapEst-2.1/bootstrapMdl.js (Yuji SODE,2016)
    * This software is released under the MIT License. See http://opensource.org/licenses/mit-license.php
    * the simple interface for estimation of a value of statistic, with bootstrap Method (Efron,1979).
    * reference: Efron, B. 1979. Bootstrap Methods: Another Look at the Jackknife. Ann. Statist. vol. 7, no. 1, p. 1-26.
    */
    'var bts=function(A,n){var r=[],rdInt=0;for(var i=0;i<n;i+=1){rdInt=Math.floor(A.length*Math.random());r.push(A[rdInt]);}return r;},',
    /*it returns a value for the upper 25% of the given data range*/
    'up25=function(A){var v=A.mx(),d=(v[0]-v[1])/4;return v[1]+d*3;},',
    'd=['+data+'],_x='+x+',B,n=0,m='+simulation+',R=0,i=0,j=0;',
    'this.addEventListener(\'message\',function(){while(i<m){j=0;B=bts(d,'+sampleSize+'),n=B.length;while(j<n){R+=B[j]<_x?0:1,j+=1;}i+=1;}',
    /*[estimated p-value,value of _x] is posted*/
    'this.postMessage([R/'+sampleSize*simulation+',_x]),d=_x=B=n=m=R=null;this.close();},true);'
  ].join('');
  //generation of worker
  b=new Blob([spt],{type:'text/javascript'});
  U=slf.URL.createObjectURL(b);
  W=new Worker(U),slf.URL.revokeObjectURL(U),b=null;
  //eventlisteners with worker
  W.addEventListener('message',function(e){
    R.p=e.data[0],R.x=e.data[1],R.sampleSize=sampleSize,R.simulation=simulation;
    slf.document.getElementsByTagName('body')[0].innerHTML+='<textarea>'+slf.JSON.stringify(R)+'</textarea>',R=null;
  },true);
  //error in worker
  W.addEventListener('error',function(e){console.log(e.message),W.terminate();},true);
  W.postMessage('Run');
};