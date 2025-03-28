"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[8995],{8995:(t,e,i)=>{i.d(e,{f:()=>V});var s=i(30726),r=i(19073),n=i(61551),a=i(70864),o=i(32151),l=i(75344);let u=0;function d(t,e){return new a.c((0,l.U)(u++),t,e)}const h={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class c{constructor(){this.instances={fill:d(o.YS.fill,{uniforms:h,optionalAttributes:{zoomRange:!0}}),marker:d(o.YS.marker,{uniforms:h,optionalAttributes:{zoomRange:!0}}),line:d(o.YS.line,{uniforms:h,optionalAttributes:{zoomRange:!0}}),text:d(o.YS.text,{uniforms:h,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:d(o.YS.complexFill,{uniforms:h,optionalAttributes:{zoomRange:!0}}),gradientFill:d(o.YS.gradientFill,{uniforms:h,optionalAttributes:{zoomRange:!0}}),texturedLine:d(o.YS.texturedLine,{uniforms:h,optionalAttributes:{zoomRange:!0}}),gradientStroke:d(o.YS.gradientStroke,{uniforms:h,optionalAttributes:{zoomRange:!0}}),animatedMarker:d(o.YS.animatedMarker,{uniforms:h,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce(((t,e)=>(t.set(e.instanceId,e),t)),new Map)}getInstance(t){return this._instancesById.get(t)}}var _=i(63919),p=i(85827),g=i(59422),f=i(83755),x=i(1438),b=i(8794),y=i(86340),m=i(76718),v=i(93345),A=i(36911);const w=Math.PI/180;class S extends b.q{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,p.vt)(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.WD)(this._program)}doRender(t){const{context:e}=t,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,i),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(v.dn.ONE,v.dn.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const s=this._program;e.bindVAO(this._vao),e.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(v.WR.LINES,8*i.length,v.pe.UNSIGNED_INT,0),e.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,p.vt)()}}_createShaderProgram(t){if(this._program)return;this._program=t.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",T().attributes)}_updateMatricesAndLocalOrigin(t){const{state:e}=t,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:a,viewpoint:o}=e,l=w*a,{x:u,y:d}=o.targetGeometry,h=(0,x.mT)(u,e.spatialReference);this._localOrigin.x=h,this._localOrigin.y=d;const c=n*s[0],p=n*s[1],b=r*c,y=r*p,m=(0,_.D_)(this._dvsMat3);(0,_.lw)(m,m,i),(0,_.Tl)(m,m,(0,g.fA)(c/2,p/2)),(0,_.hs)(m,m,(0,f.fA)(s[0]/b,-p/y,1)),(0,_.e$)(m,m,-l)}_updateBufferData(t,e){const{x:i,y:s}=this._localOrigin,r=8*e.length,n=new Float32Array(r),a=new Uint32Array(8*e.length);let o=0,l=0;for(const u of e)u&&(n[2*o]=u[0]-i,n[2*o+1]=u[1]-s,n[2*o+2]=u[0]-i,n[2*o+3]=u[3]-s,n[2*o+4]=u[2]-i,n[2*o+5]=u[3]-s,n[2*o+6]=u[2]-i,n[2*o+7]=u[1]-s,a[l]=o+0,a[l+1]=o+3,a[l+2]=o+3,a[l+3]=o+2,a[l+4]=o+2,a[l+5]=o+1,a[l+6]=o+1,a[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=m.g.createVertex(t,v._U.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=m.g.createIndex(t,v._U.DYNAMIC_DRAW,a),!this._vao){const e=T();this._vao=new A.Z(t,e.attributes,e.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const T=()=>(0,y.ES)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:v.pe.FLOAT}]});class V extends r.j{constructor(t){super(t),this._instanceStore=new c,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.pR)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(t){this._boundsRenderer=new S(t),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(t,e){t.onMessage(e),this.contains(t)||this.addChild(t),this.requestRender()}_renderChildren(t,e){t.selection=e;for(const i of this.children){if(!i.visible)continue;const e=i.getDisplayList(this._instanceStore,n.ch.STRICT_ORDER);e?.render(t)}}}},19073:(t,e,i)=>{i.d(e,{j:()=>f});var s=i(50076),r=i(81806),n=i(76460),a=i(5095),o=i(23758),l=i(86340),u=i(93345),d=i(12331),h=i(80895),c=i(96673);class _{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=t,a=(0,l.Qz)(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const t in this._fbos){const e=this._fbos[t];e&&("0"===t&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){const t=new c.R;return t.wrapMode=u.pF.CLAMP_TO_EDGE,t.samplingMode=u.Cj.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=(0,o.Q4)(t),r=this.data,n=s*this.texelSize+e;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(null==this.data)return null;const i=(0,o.Q4)(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this._fbos[e]){const i=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new d.H(t,i)}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{const i=this.dirtyStart,a=this.dirtyEnd;if(!this.hasDirty)return;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:a,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const o=this.data.buffer,u=this.getTexture(t),d=4,h=(i-i%this.size)/this.size,c=(a-a%this.size)/this.size,_=h,p=this.size,g=c,f=h*this.size*d,x=(p+g*this.size)*d-f,b=(0,l.Qz)(this.pixelType),y=new b(o,f*b.BYTES_PER_ELEMENT,x),m=this.size,v=g-_+1;if(v>this.size)return void n.A.getLogger("esri.views.2d.engine.webgl.AttributeStoreView").error(new s.A("mapview-webgl","Out-of-bounds index when updating AttributeData"));u.updateData(0,0,_,m,v,y)}catch(i){}}update(t){const{data:e,start:i,end:s}=t;if(null!=e&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const n=1<<i%this.texelSize;t.layout&n&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=(0,l.Qz)(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new h.g(t,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),o=(0,l.AV)(r),u=new((0,l.Qz)(r))(new ArrayBuffer(i*s*o*this.texelSize)),d=t.getBoundFramebufferObject(),{x:h,y:c,width:_,height:p}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,u),e.updateData(0,0,0,2*i,s/2,u),t.setViewport(h,c,_,p),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class p{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}get locked(){return this._locked}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,(0,r.A)("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),null==this._data)this._data=e.map(((t,e)=>null!=t?new _(t,this.size,e):null));else for(let i=0;i<this._data.length;i++){const t=this._data[i],s=e[i];null!=s&&(null==t?this._data[i]=new _(s,this.size,i):t.resize(s,this.size))}}destroy(){for(const t of this._data??[])t?.destroy();this._defaultTexture?.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(t){return null==this._data?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,a.dV.FilterFlags,1,e)}setLocalTimeOrigin(t,e){this.setData(t,a.dV.LocalTimeOrigin,0,e)}getLabelMinZoom(t){return this.getData(t,a.dV.FilterFlags,1,255)}getFilterFlags(t){return this.getData(t,a.dV.FilterFlags,0,0)}getVisualVariableData(t,e){return this.getData(t,a.dV.VV,e,0)}getData(t,e,i,s){if(!this._data)return 0;const r=this._data[e];if(null==r)return 0;const n=r.getData(t,i);return null!=n?n:s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const e of t){const{blockData:t,initArgs:i,sendUpdateEpoch:s,version:n}=e;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${s}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=s,null!=i&&this._initialize(i);const a=this._data;for(let e=0;e<t.length;e++){const i=t[e],s=a[e];null!=s&&null!=i&&((0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${e}] AttributeStoreView.update`,{block:i}),s.update(i))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,a.dV.FilterFlags),unit:a.uM},animation:{texture:this._getTexture(t,a.dV.Animation),unit:a.z2},gpgpu:{texture:this._getTexture(t,a.dV.GPGPU),unit:a.Sr},localTimeOrigin:{texture:this._getTexture(t,a.dV.LocalTimeOrigin),unit:a.zt},visualVariableData:{texture:this._getTexture(t,a.dV.VV),unit:a.nM},dataDriven0:{texture:this._getTexture(t,a.dV.DD0),unit:a.lL},dataDriven1:{texture:this._getTexture(t,a.dV.DD1),unit:a.sn},dataDriven2:{texture:this._getTexture(t,a.dV.DD2),unit:a.n9},size:this.size}}_getTexture(t,e){const i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(null==this._defaultTexture){const e=new c.R;e.wrapMode=u.pF.CLAMP_TO_EDGE,e.samplingMode=u.Cj.NEAREST,e.width=1,e.height=1,this._defaultTexture=new h.g(t,e,new Uint8Array(4))}return this._defaultTexture}}var g=i(46550);class f extends g.A{constructor(t){super(t),this._statisticsByLevel=new Map,this._entityIndex=new Map,this.attributeView=new p}destroy(){this.children.forEach((t=>t.destroy())),this.removeAllChildren(),this.attributeView.destroy()}doRender(t){t.context.capabilities.enable("textureFloatLinear"),super.doRender(t)}get hasAnimations(){for(const t of this.children)if(t.hasAnimations)return!0;return!1}_reindexAndUpdateFeaturesIfNeeded(){if(this.hasAnimations&&(this._reindexFeatures(),0!==this.attributeView.size))for(const t of this._entityIndex.values())t.dirty&&(this.attributeView.setData(t.displayId,a.dV.LocalTimeOrigin,0,t.firstIndexed),t.dirty=!1)}restartAnimation(t){const e=this._entityIndex.get(t);if(!e)return;const i=performance.now()/1e3;e.firstIndexed=i,e.dirty=!0}restartAllAnimations(){const t=performance.now()/1e3;for(const[e,i]of this._entityIndex)i.firstIndexed=t,i.dirty=!0}_reindexFeatures(){const t=performance.now()/1e3;for(const e of this.children)for(const i of e.entityIds){const{objectId:e}=i;let s=this._entityIndex.get(e);s||(s={objectId:e,displayId:0,firstIndexed:t,lastIndexed:0,dirty:!0},this._entityIndex.set(e,s)),s.lastIndexed=t,s.displayId=i.displayId}for(const[e,i]of this._entityIndex)t-i.lastIndexed>60&&this._entityIndex.delete(e)}_updateAttributeView(){this.attributeView.update(),this._reindexAndUpdateFeaturesIfNeeded()}createRenderParams(t){const e=super.createRenderParams(t);return e.attributeView=this.attributeView,e.instanceStore=this._instanceStore,e.statisticsByLevel=this._statisticsByLevel,e}}},46550:(t,e,i)=>{i.d(e,{A:()=>u});var s=i(81806),r=i(61551),n=i(36201),a=i(90548),o=i(44595);const l=(t,e)=>t.key.level-e.key.level!=0?t.key.level-e.key.level:t.key.row-e.key.row!=0?t.key.row-e.key.row:t.key.col-e.key.col;class u extends n.A{constructor(t){super(),this.tileInfoView=t,this.sortFunction=l}renderChildren(t){this.setStencilReference(t),super.renderChildren(t)}createRenderParams(t){const{state:e}=t,i=super.createRenderParams(t);return i.requiredLevel=this.tileInfoView.getClosestInfoForScale(e.scale).level,i.displayLevel=this.tileInfoView.tileInfo.scaleToZoom(e.scale),i}prepareRenderPasses(t){const e=super.prepareRenderPasses(t);return e.push(t.registerRenderPass({name:"stencil",brushes:[a.A],drawPhase:r.S5.DEBUG|r.S5.MAP|r.S5.HIGHLIGHT|r.S5.LABEL,target:()=>this.getStencilTarget()})),(0,s.A)("esri-tiles-debug")&&e.push(t.registerRenderPass({name:"tileInfo",brushes:[o.A],drawPhase:r.S5.DEBUG,target:()=>this.children})),e}getStencilTarget(){return this.children}setStencilReference(t){let e=1;for(const i of this.children)i.stencilRef=e++}}},70864:(t,e,i)=>{i.d(e,{c:()=>r});var s=i(75344);class r{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return(0,s.P)(this._instanceId)}createMeshInfo(t){return{id:(0,s.P)(this._instanceId),techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}}},75344:(t,e,i)=>{function s(t){return t}function r(t){return t}i.d(e,{P:()=>s,U:()=>r})}}]);
//# sourceMappingURL=8995.ad17a6da.chunk.js.map