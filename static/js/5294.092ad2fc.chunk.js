"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[5294],{5294:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var s,n=r(76797),o=r(19247),i=r(64681),l=r(66486),a=r(37267),f=r(52494),c=r(81633),p=r(59844),m=r(86866),u=r(99846),y=r(26855),h=r(35143),d=(r(76460),r(81806),r(47249),r(50076),r(6409)),x=r(85842),v=r(75116);let S=s=class extends v.A{constructor(){super(...arguments),this.type="identity"}clone(){return new s}};(0,h._)([(0,d.e)({IdentityXform:"identity"})],S.prototype,"type",void 0),S=s=(0,h._)([(0,x.$)("esri.layers.support.rasterTransforms.IdentityTransform")],S);const w=S;var C=r(29754);const O={GCSShiftXform:y.A,IdentityXform:w,PolynomialXform:C.A};function g(e){const t=e?.type;if(!t)return null;const r=O[e?.type];if(r){const t=new r;return t.read(e),t}return null}var A=r(20118),J=r(46533);class N{convertVectorFieldData(e){const t=l.A.fromJSON(e.pixelBlock),r=(0,u.FI)(t,e.type);return Promise.resolve(null!=r?r.toJSON():null)}computeStatisticsHistograms(e){const t=l.A.fromJSON(e.pixelBlock),r=(0,m.eH)(t);return Promise.resolve(r)}async decode(e){const t=await(0,a.D)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=l.A.fromJSON(e.pixelBlock),e.extent=e.extent?n.A.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(e){this.symbolizer=A.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,c.vt)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:n.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?l.A.fromJSON(e):null)),primaryPixelSizes:e.primaryPixelSizes?.map((e=>null!=e?o.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=t?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(l.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(e){const t=(0,m.f4)(l.A.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,f.lD)(l.A.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,!1===e.useBilinear);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}clipTile(e){const t=l.A.fromJSON(e.pixelBlock),r=(0,f.J$)({...e,pixelBlock:t});return Promise.resolve(r?.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new l.A(e):null)),r=(0,f.z7)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let s,n=r;return e.coefs&&(n=(0,f.$i)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=(0,f.QF)(e.destDimension,e.gcsGrid),n=(0,u.Y2)(n,e.isUV?"vector-uv":"vector-magdir",s)),{pixelBlock:n?.toJSON(),localNorthDirections:s}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:n}=await(0,J.CW)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:n.buffer},transferList:[s.buffer,n.buffer]}}async getProjectionOffsetGrid(e){const t=n.A.fromJSON(e.projectedExtent),r=n.A.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new i.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,p.xh)(t.spatialReference,r.spatialReference,s))&&await(0,p.Hh)();const o=e.rasterTransform?g(e.rasterTransform):null;return(0,p.l0)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:o})}}},26855:(e,t,r)=>{r.d(t,{A:()=>c});var s,n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(6409)),l=r(85842),a=r(75116);let f=s=class extends a.A{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}clone(){return new s({tolerance:this.tolerance})}};(0,n._)([(0,i.e)({GCSShiftXform:"gcs-shift"})],f.prototype,"type",void 0),(0,n._)([(0,o.MZ)()],f.prototype,"tolerance",void 0),f=s=(0,n._)([(0,l.$)("esri.layers.support.rasterTransforms.GCSShiftTransform")],f);const c=f},29754:(e,t,r)=>{r.d(t,{A:()=>d});var s,n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(6409)),l=r(28379),a=r(85842),f=r(17707),c=r(76797),p=r(19247),m=r(75116);function u(e,t,r){const{x:s,y:n}=t;if(r<2)return{x:e[0]+s*e[2]+n*e[4],y:e[1]+s*e[3]+n*e[5]};if(2===r){const t=s*s,r=n*n,o=s*n;return{x:e[0]+s*e[2]+n*e[4]+t*e[6]+o*e[8]+r*e[10],y:e[1]+s*e[3]+n*e[5]+t*e[7]+o*e[9]+r*e[11]}}const o=s*s,i=n*n,l=s*n,a=o*s,f=o*n,c=s*i,p=n*i;return{x:e[0]+s*e[2]+n*e[4]+o*e[6]+l*e[8]+i*e[10]+a*e[12]+f*e[14]+c*e[16]+p*e[18],y:e[1]+s*e[3]+n*e[5]+o*e[7]+l*e[9]+i*e[11]+a*e[13]+f*e[15]+c*e[17]+p*e[19]}}function y(e,t,r){const{xmin:s,ymin:n,xmax:o,ymax:i,spatialReference:l}=t;let a=[];if(r<2)a.push({x:s,y:i}),a.push({x:o,y:i}),a.push({x:s,y:n}),a.push({x:o,y:n});else{let e=10;for(let t=0;t<e;t++)a.push({x:s,y:n+(i-n)*t/(e-1)}),a.push({x:o,y:n+(i-n)*t/(e-1)});e=8;for(let t=1;t<=e;t++)a.push({x:s+(o-s)*t/e,y:n}),a.push({x:s+(o-s)*t/e,y:i})}a=a.map((t=>u(e,t,r)));const f=a.map((e=>e.x)),p=a.map((e=>e.y));return new c.A({xmin:Math.min.apply(null,f),xmax:Math.max.apply(null,f),ymin:Math.min.apply(null,p),ymax:Math.max.apply(null,p),spatialReference:l})}let h=s=class extends m.A{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:r,coeffY:s}=t;if(!r?.length||!s?.length||r.length!==s.length)return null;const n=[];for(let o=0;o<r.length;o++)n.push(r[o]),n.push(s[o]);return n}writeForwardCoefficients(e,t,r){const s=[],n=[];for(let o=0;o<e?.length;o++)o%2==0?s.push(e[o]):n.push(e[o]);t.coeffX=s,t.coeffY=n}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,r,s,n,o,i]=e,l=s*i-o*n,a=o*n-s*i;return[(o*r-t*i)/l,(s*r-t*n)/a,i/l,n/a,-o/l,-s/a]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:r,inverseCoeffY:s}=t;if(!r?.length||!s?.length||r.length!==s.length)return null;const n=[];for(let o=0;o<r.length;o++)n.push(r[o]),n.push(s[o]);return n}writeInverseCoefficients(e,t,r){const s=[],n=[];for(let o=0;o<e?.length;o++)o%2==0?s.push(e[o]):n.push(e[o]);t.inverseCoeffX=s,t.inverseCoeffY=n}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=u(this.forwardCoefficients,e,this.polynomialOrder);return new p.A({x:t.x,y:t.y,spatialReference:e.spatialReference})}return y(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=u(this.inverseCoefficients,e,this.polynomialOrder);return new p.A({x:t.x,y:t.y,spatialReference:e.spatialReference})}return y(this.inverseCoefficients,e,this.polynomialOrder)}clone(){return new s({polynomialOrder:this.polynomialOrder,forwardCoefficients:this.forwardCoefficients?[...this.forwardCoefficients]:null,inverseCoefficients:this.inverseCoefficients?[...this.inverseCoefficients]:null})}};(0,n._)([(0,o.MZ)({json:{write:!0}})],h.prototype,"polynomialOrder",void 0),(0,n._)([(0,o.MZ)()],h.prototype,"forwardCoefficients",void 0),(0,n._)([(0,l.w)("forwardCoefficients",["coeffX","coeffY"])],h.prototype,"readForwardCoefficients",null),(0,n._)([(0,f.K)("forwardCoefficients")],h.prototype,"writeForwardCoefficients",null),(0,n._)([(0,o.MZ)({json:{write:!0}})],h.prototype,"inverseCoefficients",null),(0,n._)([(0,l.w)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],h.prototype,"readInverseCoefficients",null),(0,n._)([(0,f.K)("inverseCoefficients")],h.prototype,"writeInverseCoefficients",null),(0,n._)([(0,o.MZ)()],h.prototype,"affectsPixelSize",null),(0,n._)([(0,i.e)({PolynomialXform:"polynomial"})],h.prototype,"type",void 0),h=s=(0,n._)([(0,a.$)("esri.layers.support.rasterTransforms.PolynomialTransform")],h);const d=h},75116:(e,t,r)=>{r.d(t,{A:()=>a});var s=r(35143),n=r(42553),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842));let l=class extends n.A{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,s._)([(0,o.MZ)()],l.prototype,"affectsPixelSize",null),(0,s._)([(0,o.MZ)({json:{write:!0}})],l.prototype,"spatialReference",void 0),l=(0,s._)([(0,i.$)("esri.layers.support.rasterTransforms.BaseRasterTransform")],l);const a=l}}]);
//# sourceMappingURL=5294.092ad2fc.chunk.js.map