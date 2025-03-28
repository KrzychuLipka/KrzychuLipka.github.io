"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[6801],{5845:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(35143),o=r(69098),i=r(42553),s=r(46053),a=(r(81806),r(76460),r(47249),r(6409)),l=r(85842),f=r(9392);let c=class extends(o.A.ClonableMixin(i.A)){constructor(e){super(e),this.type="local",this.origin=(0,f.vt)()}};(0,n._)([(0,a.e)({local:"local"},{readOnly:!0})],c.prototype,"type",void 0),(0,n._)([(0,s.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],c.prototype,"origin",void 0),c=(0,n._)([(0,l.$)("esri.geometry.support.MeshLocalVertexSpace")],c);const d=c},12016:(e,t,r)=>{r.d(t,{B:()=>l});var n=r(18690),o=r(54901),i=r(76460),s=r(50346),a=r(16783);class l{constructor(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,a.ho)(e,{...o,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>i.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),(0,o.hA)((()=>{r.removed=!0,(0,n.TF)(this._listeners,r),this._thread&&null!=r.threadHandle&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const n=this._transferLists[e],o=n?n(t):[];return this._thread.invoke(e,t,{transferList:o,signal:r})}return this._promise?this._promise.then((()=>((0,s.Te)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},14894:(e,t,r)=>{r.d(t,{A:()=>d});var n,o=r(35143),i=r(69098),s=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(6409)),f=r(85842);let c=n=class extends(i.A.ClonableMixin(s.A)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};c.absolute=new n,(0,o._)([(0,l.e)({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],c.prototype,"origin",void 0),c=n=(0,o._)([(0,f.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const d=c},16801:(e,t,r)=>{r.r(t),r.d(t,{destroyContext:()=>x,dracoDecompressPointCloudData:()=>A,filterObbsForModifications:()=>B,filterObbsForModificationsSync:()=>C,initialize:()=>j,interpretObbModificationResults:()=>k,process:()=>S,project:()=>N,setLegacySchema:()=>L,setModifications:()=>E,setModificationsSync:()=>U,test:()=>H,transformNormals:()=>P});var n,o,i=r(15941),s=r(13312),a=r(14894),l=r(5845),f=r(45136);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(n||(n={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}));var c=r(28899);function d(e){return(0,c.s)(`esri/libs/i3s/${e}`)}let u;r(76460);var h=r(30015),y=r(9392),m=r(12016);r(9624),r(14487);class p{constructor(e,t,r,n,o,i){this.layout=e,this.interleavedVertexData=t,this.indices=r,this.hasColors=n,this.hasModifications=o,this.positionData=i}}class g{constructor(e,t,r,n,o,i,s){this.componentOffsets=e,this.featureIds=t,this.anchorIds=r,this.anchors=n,this.transformedGeometry=o,this.globalTrafo=i,this.obb=s}}m.B;new h.A({deallocator:null}),(0,y.vt)();var b,_,w,v,M;r(55855),r(78315),r(11736);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(b||(b={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(_||(_={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(w||(w={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(v||(v={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(M||(M={}));async function S(e){R=await D();const t=[e.geometryBuffer];return{result:T(R,e,t),transferList:t}}async function A(e){R=await D();const t=[e.geometryBuffer],{geometryBuffer:r}=e,n=r.byteLength,o=R._malloc(n),i=new Uint8Array(R.HEAPU8.buffer,o,n);i.set(new Uint8Array(r));const s=R.dracoDecompressPointCloudData(o,i.byteLength);if(R._free(o),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const a=s.featureIds?.length>0?s.featureIds.slice():null,l=s.positions.slice();return a&&t.push(a.buffer),t.push(l.buffer),{result:{positions:l,featureIds:a},transferList:t}}async function B(e){await D(),C(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function E(e){await D(),U(e)}async function L(e){R=await D(),R.setLegacySchema(e.context,e.jsonSchema)}async function N(e){const{localMatrix:t,origin:n,positions:o,vertexSpace:i}=e,f=s.A.fromJSON(e.inSpatialReference),c=s.A.fromJSON(e.outSpatialReference);let d;const[{projectBuffer:u},{initializeProjection:h}]=await Promise.all([Promise.resolve().then(r.bind(r,45308)),Promise.resolve().then(r.bind(r,9624))]);await h(f,c);const y=[0,0,0];if(!u(n,f,0,y,c,0))throw new Error("Failed to project");if("georeferenced"===i.type&&null==i.origin){if(d=new Float64Array(o.length),!u(o,f,0,d,c,0,d.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===i.type?a.A.fromJSON(i):l.A.fromJSON(i),{projectMeshVertexPositions:n}=await Promise.all([r.e(8105),r.e(2956)]).then(r.bind(r,22956)),s=n({vertexAttributes:{position:o},transform:t?{localMatrix:t}:void 0,vertexSpace:e,spatialReference:f},c);if(!s)throw new Error("Failed to project");d=s}const m=d.length,[p,g,b]=y;for(let r=0;r<m;r+=3)d[r]-=p,d[r+1]-=g,d[r+2]-=b;return{result:{projected:d,original:o,projectedOrigin:y},transferList:[d.buffer,o.buffer]}}async function P(e){let{normalMatrix:t,normals:r}=e;const n=new Float32Array(r.length);return(0,f.b)(n,r,t),(0,i.or)(t)&&(0,f.n)(n,n),{result:{transformed:n,original:r},transferList:[n.buffer,r.buffer]}}function x(e){I(e)}let F,R;function U(e){if(!R)return;const t=e.modifications,r=R._malloc(8*t.length),n=new Float64Array(R.HEAPU8.buffer,r,t.length);for(let o=0;o<t.length;++o)n[o]=t[o];R.setModifications(e.context,r,t.length,e.isGeodetic),R._free(r)}function T(e,t,r){const{context:o,globalTrafo:i,mbs:s,obbData:a,elevationOffset:l,geometryBuffer:f,geometryDescriptor:c,indexToVertexProjector:d,vertexToRenderProjector:u}=t,h=e._malloc(f.byteLength),y=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),m=new Uint8Array(e.HEAPU8.buffer,h,f.byteLength);m.set(new Uint8Array(f));const b=new Float64Array(e.HEAPU8.buffer,y,33);O(b,[NaN,NaN,NaN]);let _=b.byteOffset+3*b.BYTES_PER_ELEMENT,w=new Float64Array(b.buffer,_);O(w,i),_+=16*b.BYTES_PER_ELEMENT,w=new Float64Array(b.buffer,_),O(w,s),_+=4*b.BYTES_PER_ELEMENT,a&&(w=new Float64Array(b.buffer,_),O(w,a));const v=c,M={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:v.featureIndex},S=e.process(o,!!t.obbData,h,m.byteLength,v,M,y,l,d,u,t.normalReferenceFrame);if(e._free(y),e._free(h),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const A=S.componentOffsets.length>0?S.componentOffsets.slice():null,B=S.featureIds.length>0?S.featureIds.slice():null,E=S.anchorIds.length>0?Array.from(S.anchorIds):null,L=S.anchors.length>0?Array.from(S.anchors):null,N=S.interleavedVertedData.slice().buffer,P=S.indicesType===n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),x=S.positions.slice(),{buffer:F,byteOffset:R,byteLength:U}=S.positionIndices,T=S.positionIndicesType===n.Int16?new Uint16Array(F,R,U/2).slice():new Uint32Array(F,R,U/4).slice(),k=new p(t.layouts[0],N,P,S.hasColors,S.hasModifications,{data:x,indices:T});return B&&r.push(B.buffer),A&&r.push(A.buffer),r.push(N),r.push(P.buffer),r.push(x.buffer),r.push(T.buffer),new g(A,B,E,L,k,i,S.obb)}function k(e){return 0===e?_.Unmodified:1===e?_.PotentiallyModified:2===e?_.Culled:_.Unknown}function C(e){if(!R)return;const{context:t,buffer:r}=e,n=R._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(R.HEAPU8.buffer,n,o),s=new Float64Array(r);i.set(s),R.filterOBBs(t,n,o),s.set(i),R._free(n)}function I(e){R&&0===R.destroy(e)&&(R=null)}function O(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function j(){R||await D()}async function D(){return R||(R=await(F??=(u||(u=new Promise((e=>r.e(7258).then(r.bind(r,77258)).then((e=>e.i)).then((t=>{let{default:r}=t;const n=r({locateFile:d,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),u))),R}const H={transform:(e,t)=>R&&T(R,e,t),destroy:I}},45136:(e,t,r)=>{r.d(t,{a:()=>d,b:()=>a,c:()=>s,d:()=>o,e:()=>u,f:()=>c,l:()=>f,n:()=>h,t:()=>i});var n=r(99746);r(81806),r(76460);function o(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/o))return e;const i=e.length/n,s=r[0],a=r[1],l=r[2],f=r[4],c=r[5],d=r[6],u=r[8],h=r[9],y=r[10],m=r[12],p=r[13],g=r[14];let b=0,_=0;for(let w=0;w<i;w++){const r=t[b],i=t[b+1],w=t[b+2];e[_]=s*r+f*i+u*w+m,e[_+1]=a*r+c*i+h*w+p,e[_+2]=l*r+d*i+y*w+g,b+=o,_+=n}return e}function s(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/o))return;const i=e.length/n,s=r[0],a=r[1],l=r[2],f=r[3],c=r[4],d=r[5],u=r[6],h=r[7],y=r[8];let m=0,p=0;for(let g=0;g<i;g++){const r=t[m],i=t[m+1],g=t[m+2];e[p]=s*r+f*i+u*g,e[p+1]=a*r+c*i+h*g,e[p+2]=l*r+d*i+y*g,m+=o,p+=n}}function l(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const i=Math.min(e.length/n,t.length/o);let s=0,a=0;for(let l=0;l<i;l++)e[a]=r*t[s],e[a+1]=r*t[s+1],e[a+2]=r*t[s+2],s+=o,a+=n;return e}function f(e,t,r,n){c(e.typedBuffer,t.typedBuffer,r,n,e.typedBufferStride,t.typedBufferStride)}function c(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:i;const a=Math.min(e.length/i,t.length/s);let l=0,f=0;const c=1/n.Tf;for(let n=0;n<a;n++)e[f]=o*(r*t[l])**c,e[f+1]=o*(r*t[l+1])**c,e[f+2]=o*(r*t[l+2])**c,l+=s,f+=i}function d(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const i=e.length/n;if(i!==Math.ceil(t.length/o))return e;let s=0,a=0;for(let l=0;l<i;l++)e[a]=t[s]+r[0],e[a+1]=t[s+1]+r[1],e[a+2]=t[s+2]+r[2],s+=o,a+=n;return e}function u(e,t){h(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const o=Math.min(e.length/r,t.length/n);let i=0,s=0;for(let a=0;a<o;a++){const o=t[i],a=t[i+1],l=t[i+2],f=o*o+a*a+l*l;if(f>0){const t=1/Math.sqrt(f);e[s]=t*o,e[s+1]=t*a,e[s+2]=t*l}i+=n,s+=r}}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:c,linearToSRGBView:f,normalize:h,normalizeView:u,scale:l,scaleView:function(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)},shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,i=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;let l=0,f=0;for(let c=0;c<n;c++)o[f]=s[l]>>r,o[f+1]=s[l+1]>>r,o[f+2]=s[l+2]>>r,l+=a,f+=i},transformMat3:a,transformMat3View:s,transformMat4:i,transformMat4View:o,translate:d},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=6801.cb1218ea.chunk.js.map