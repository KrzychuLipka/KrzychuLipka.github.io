"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[3944],{14509:(t,e,i)=>{i.d(e,{l:()=>a});var s=i(61551),n=i(36201),r=i(86758);class a extends n.A{constructor(){super(...arguments),this._hasCrossfade=!1,this._bitmapTechnique=null}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(t){super.beforeRender(t),this._manageFade()}onAttach(){super.onAttach(),this._bitmapTechnique=new r.C}onDetach(){super.onDetach(),this._bitmapTechnique?.shutdown(),this._bitmapTechnique=null}renderChildren(t){super.renderChildren(t),this.visible&&t.drawPhase===s.S5.MAP&&null!=this._bitmapTechnique&&this._bitmapTechnique.render(t,{bitmaps:this.children})}_manageFade(){this.children.reduce(((t,e)=>t+(e.inFadeTransition?1:0)),0)>=2?(this.children.forEach((t=>t.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((t=>t.blendFunction="standard")),this._hasCrossfade=!1)}}},14816:(t,e,i)=>{i.d(e,{_:()=>n});var s=i(30726);class n{constructor(){this._result=!1}dispose(){this._program=(0,s.WD)(this._program)}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}},16060:(t,e,i)=>{i.d(e,{LG:()=>d,mb:()=>_,yr:()=>p});var s=i(50346),n=i(63919),r=i(85827),a=i(59422),o=i(8794),l=i(96145),h=i(93345),u=i(80895),c=i(96673);function d(t){return t&&"render"in t}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}class _ extends o.q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._texture=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get texture(){return this._texture}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,s.Tw)();return(0,s.NY)(e,(()=>i.abort())),(0,s.NY)(i,(t=>n.reject(t))),this._uploadStatus={controller:i,resolver:n},this.source=t,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(t,e){t>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(t,e)}setTransform(t){const e=(0,n.D_)(this.transforms.displayViewScreenMat3),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,l=r*this.height,h=Math.PI*this.rotation/180;(0,n.Tl)(e,e,(0,a.fA)(i,s)),(0,n.Tl)(e,e,(0,a.fA)(o/2,l/2)),(0,n.e$)(e,e,-h),(0,n.Tl)(e,e,(0,a.fA)(-o/2,-l/2)),(0,n.Oe)(e,e,(0,a.fA)(o,l)),(0,n.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture(t){let{context:e,painter:i}=t;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=function(t){return d(t)?t instanceof l.A?t.getRenderedRasterPixels()?.renderedRasterPixels:p(t):t}(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:e}=this._uploadStatus,s={signal:t.signal},{width:r,height:a}=this,o=this._texture,l=i.textureUploadManager;await l.enqueueTextureUpdate({data:n,texture:o,width:r,height:a},s),e.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(r){(0,s.jH)(r)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,r.vt)()}}_createTexture(t){const e=this.immutable,i=new c.R;return i.internalFormat=e?h.H0.RGBA8:h.Ab.RGBA,i.wrapMode=h.pF.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.g(t,i)}}},27534:(t,e,i)=>{i.d(e,{Ph:()=>r,Z0:()=>o,hU:()=>n});var s=i(88685);function n(t){const e=t.map((t=>{let{name:e,count:i,type:s}=t;return`${e}.${i}.${s}`})).join(",");return(0,s.Wm)(e)}function r(t,e,i,s,n,a,o){if(t.primitiveName===e){let e=s?.readWithDefault(n,a,t[i]&&o);return"text"===t.type&&(e=e.toString()),void(t[i]=e)}if("type"in t&&null!=t.type){if(t.effects)for(const l of t.effects)r(l,e,i,s,n,a,o);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const l of t.symbolLayers)r(l,e,i,s,n,a,o);break;case"CIMTextSymbol":t.symbol&&r(t.symbol,e,i,s,n,a,o);break;case"CIMHatchFill":t.lineSymbol&&r(t.lineSymbol,e,i,s,n,a,o);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&r(t.markerPlacement,e,i,s,n,a,o),"CIMVectorMarker"===t.type&&t.markerGraphics)for(const l of t.markerGraphics)r(l,e,i,s,n,a,o),r(l.symbol,e,i,s,n,a,o)}}}const a=400;function o(t){const e=t.width;return null!=t.effects?a:Math.max(1.25*e,8)}},28163:(t,e,i)=>{i.d(e,{_R:()=>r});class s{constructor(t,e,i,s,n,r,a,o,l){this.createQuery=t,this.deleteQuery=e,this.resultAvailable=i,this.getResult=s,this.disjoint=n,this.beginTimeElapsed=r,this.endTimeElapsed=a,this.createTimestamp=o,this.timestampBits=l}}let n=!1;function r(t,e){if(e.disjointTimerQuery)return null;let i=t.getExtension("EXT_disjoint_timer_query_webgl2");return i?new s((()=>t.createQuery()),(e=>{t.deleteQuery(e),n=!1}),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(i.GPU_DISJOINT_EXT)),(e=>{n||(n=!0,t.beginQuery(i.TIME_ELAPSED_EXT,e))}),(()=>{t.endQuery(i.TIME_ELAPSED_EXT),n=!1}),(t=>i.queryCounterEXT(t,i.TIMESTAMP_EXT)),(()=>t.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):(i=t.getExtension("EXT_disjoint_timer_query"),i?new s((()=>i.createQueryEXT()),(t=>{i.deleteQueryEXT(t),n=!1}),(t=>i.getQueryObjectEXT(t,i.QUERY_RESULT_AVAILABLE_EXT)),(t=>i.getQueryObjectEXT(t,i.QUERY_RESULT_EXT)),(()=>t.getParameter(i.GPU_DISJOINT_EXT)),(t=>{n||(n=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,t))}),(()=>{i.endQueryEXT(i.TIME_ELAPSED_EXT),n=!1}),(t=>i.queryCounterEXT(t,i.TIMESTAMP_EXT)),(()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):null)}},33721:(t,e,i)=>{i.d(e,{H:()=>c});var s=i(89241),n=i(76718),r=i(93345),a=i(12331),o=i(80895),l=i(96673),h=i(36911),u=i(14816);class c extends u._{constructor(t){super(),this._rctx=t;this._program=t.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(t){const e=this._rctx;if(!e.gl)return t.dispose(),!0;const i=new l.R(1);i.wrapMode=r.pF.CLAMP_TO_EDGE,i.samplingMode=r.Cj.NEAREST;const u=new a.H(e,i),c=n.g.createVertex(e,r._U.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),p=new h.Z(e,new Map([["a_pos",0]]),s.VS,new Map([["geometry",c]])),_=new l.R;_.samplingMode=r.Cj.LINEAR,_.wrapMode=r.pF.CLAMP_TO_EDGE;const f=new o.g(e,_,d);e.useProgram(t),e.bindTexture(f,0),t.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:g,y:y,width:x,height:w}=e.getViewport();e.bindFramebuffer(u),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(r.NV.COLOR),e.bindVAO(p),e.drawArrays(r.WR.TRIANGLE_STRIP,0,4);const b=new Uint8Array(4);return u.readPixels(0,0,1,1,r.Ab.RGBA,r.ld.UNSIGNED_BYTE,b),p.dispose(),u.dispose(),f.dispose(),e.setViewport(g,y,x,w),e.bindFramebuffer(m),255!==b[0]}}const d=new Image;d.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",d.width=5,d.height=5,d.decode()},57162:(t,e,i)=>{i.d(e,{Ey:()=>T,Ky:()=>h,Ms:()=>H,Os:()=>l,Uy:()=>p,Xt:()=>d,gh:()=>o,hG:()=>c,kn:()=>_,p3:()=>a});var s=i(83490),n=i(93345);function r(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.Tb.ADD,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function a(t,e,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.Tb.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.Tb.ADD,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:r,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const o=r(n.dn.ZERO,n.dn.ONE_MINUS_SRC_ALPHA),l=(r(n.dn.ONE,n.dn.ZERO),r(n.dn.ONE,n.dn.ONE),r(n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA)),h=a(n.dn.SRC_ALPHA,n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA,n.dn.ONE_MINUS_SRC_ALPHA),u={face:n.Y7.BACK,mode:n.Ac.CCW},c={face:n.Y7.FRONT,mode:n.Ac.CCW},d=t=>t===s.s2.Back?u:t===s.s2.Front?c:null,p={zNear:0,zFar:1},_={r:!0,g:!0,b:!0,a:!0};function f(t){return E.intern(t)}function m(t){return M.intern(t)}function g(t){return P.intern(t)}function y(t){return V.intern(t)}function x(t){return D.intern(t)}function w(t){return L.intern(t)}function b(t){return N.intern(t)}function v(t){return W.intern(t)}function S(t){return j.intern(t)}function T(t){return z.intern(t)}class A{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function I(t){return"["+t.join(",")+"]"}const E=new A(C,(t=>({__tag:"Blending",...t})));function C(t){return t?I([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const M=new A(R,(t=>({__tag:"Culling",...t})));function R(t){return t?I([t.face,t.mode]):null}const P=new A(O,(t=>({__tag:"PolygonOffset",...t})));function O(t){return t?I([t.factor,t.units]):null}const V=new A(k,(t=>({__tag:"DepthTest",...t})));function k(t){return t?I([t.func]):null}const D=new A(B,(t=>({__tag:"StencilTest",...t})));function B(t){return t?I([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const L=new A(U,(t=>({__tag:"DepthWrite",...t})));function U(t){return t?I([t.zNear,t.zFar]):null}const N=new A(F,(t=>({__tag:"ColorWrite",...t})));function F(t){return t?I([t.r,t.g,t.b,t.a]):null}const W=new A(G,(t=>({__tag:"StencilWrite",...t})));function G(t){return t?I([t.mask]):null}const j=new A(q,(t=>({__tag:"DrawBuffers",...t})));function q(t){return t?I(t.buffers):null}const z=new A((function(t){return t?I([C(t.blending),R(t.culling),O(t.polygonOffset),k(t.depthTest),B(t.stencilTest),U(t.depthWrite),F(t.colorWrite),G(t.stencilWrite),q(t.drawBuffers)]):null}),(t=>({blending:f(t.blending),culling:m(t.culling),polygonOffset:g(t.polygonOffset),depthTest:y(t.depthTest),stencilTest:x(t.stencilTest),depthWrite:w(t.depthWrite),colorWrite:b(t.colorWrite),stencilWrite:v(t.stencilWrite),drawBuffers:S(t.drawBuffers)})));class H{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,e,i,s){return(i||t!==e)&&(s(t),this._pipelineInvalid=!0),t}}},69834:(t,e,i)=>{i.d(e,{Jy:()=>g,Ox:()=>m,Qm:()=>w,Sp:()=>x,_4:()=>f});var s=i(86560),n=i(55171),r=i(16868),a=i(3825),o=i(53084),l=i(90534),h=i(13312),u=i(42294),c=i(65391),d=i(86616),p=i(77725);const _={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function f(t){const e=t.folders||[],i=e.slice(),s=new Map,n=new Map,r=new Map,a=new Map,l=new Map,h={esriGeometryPoint:n,esriGeometryPolyline:r,esriGeometryPolygon:a};(t.featureCollection?.layers||[]).forEach((t=>{const e=(0,o.o8)(t);e.featureSet.features=[];const i=t.featureSet.geometryType;s.set(i,e);const l=t.layerDefinition.objectIdField;"esriGeometryPoint"===i?y(n,l,t.featureSet.features):"esriGeometryPolyline"===i?y(r,l,t.featureSet.features):"esriGeometryPolygon"===i&&y(a,l,t.featureSet.features)})),t.groundOverlays&&t.groundOverlays.forEach((t=>{l.set(t.id,t)})),e.forEach((e=>{e.networkLinkIds.forEach((s=>{const n=function(t,e,i){const s=function(t,e){let i;return e.some((e=>e.id===t&&(i=e,!0))),i}(t,i);return s&&(s.parentFolderId=e,s.networkLink=s),s}(s,e.id,t.networkLinks);n&&i.push(n)}))})),i.forEach((t=>{if(t.featureInfos){t.points=(0,o.o8)(s.get("esriGeometryPoint")),t.polylines=(0,o.o8)(s.get("esriGeometryPolyline")),t.polygons=(0,o.o8)(s.get("esriGeometryPolygon")),t.mapImages=[];for(const e of t.featureInfos)switch(e.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=h[e.type].get(e.id);i&&t[_[e.type]]?.featureSet.features.push(i);break}case"GroundOverlay":{const i=l.get(e.id);i&&t.mapImages.push(i);break}}t.fullExtent=w([t])}}));const u=w(i);return{folders:e,sublayers:i,extent:u}}function m(t,e,i,r){const o=n.id?.findCredential(t);t=(0,l.a6)(t,{token:o?.token});const h=s.A.kmlServiceUrl;return(0,a.A)(h,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(e)},responseType:"json",signal:r})}function g(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const n=[],r={},a=e.sublayers,o=new Set(e.folders.map((t=>t.id)));return a.forEach((e=>{const a=new t;if(i?a.read(e,i):a.read(e),s.length&&o.has(a.id)&&(a.visible=s.includes(a.id)),r[e.id]=a,null!=e.parentFolderId&&-1!==e.parentFolderId){const t=r[e.parentFolderId];t.sublayers||(t.sublayers=[]),t.sublayers?.unshift(a)}else n.unshift(a)})),n}function y(t,e,i){i.forEach((i=>{t.set(i.attributes[e],i)}))}async function x(t){const e=p.A.fromJSON(t.featureSet).features,i=t.layerDefinition,s=(0,d.r)(i.drawingInfo.renderer),n=r.A.fromJSON(t.popupInfo),a=[];for(const r of e){const t=await s.getSymbolAsync(r);r.symbol=t,r.popupTemplate=n,r.visible=!0,a.push(r)}return a}function w(t){const e=(0,u.vt)(u.qv),i=(0,u.vt)(u.qv);for(const s of t){if(s.polygons?.featureSet?.features)for(const t of s.polygons.featureSet.features)(0,c.LJ)(e,t.geometry),(0,u.RF)(i,e);if(s.polylines?.featureSet?.features)for(const t of s.polylines.featureSet.features)(0,c.LJ)(e,t.geometry),(0,u.RF)(i,e);if(s.points?.featureSet?.features)for(const t of s.points.featureSet.features)(0,c.LJ)(e,t.geometry),(0,u.RF)(i,e);if(s.mapImages)for(const t of s.mapImages)(0,c.LJ)(e,t.extent),(0,u.RF)(i,e)}return(0,u.aI)(i,u.qv)?void 0:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:h.A.WGS84}}},71853:(t,e,i)=>{i.d(e,{EO:()=>m,OI:()=>_,Pp:()=>c,Qg:()=>d,VC:()=>p,b4:()=>o,hB:()=>g,hE:()=>h,kc:()=>l,xV:()=>u,z:()=>f});var s=i(72745),n=i(93345),r=i(80895),a=i(96673);function o(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest";const s=!(arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&"u8"===e.pixelType),o=s?n.ld.FLOAT:n.ld.UNSIGNED_BYTE,l=null==e.pixels||0===e.pixels.length?null:s?e.getAsRGBAFloat():e.getAsRGBA(),h=t.capabilities.textureFloatLinear,u=new a.R;return u.width=e.width,u.height=e.height,u.internalFormat=s?n.H0.RGBA32F:n.Ab.RGBA,u.samplingMode=!h||"bilinear"!==i&&"cubic"!==i?n.Cj.NEAREST:n.Cj.LINEAR,u.dataType=o,u.wrapMode=n.pF.CLAMP_TO_EDGE,new r.g(t,u,l)}function l(t,e){const{spacing:i,offsets:s,coefficients:o,size:[l,h]}=e,u=i[0]>1,c=new a.R;c.width=u?4*l:l,c.height=h,c.internalFormat=n.H0.RGBA32F,c.dataType=n.ld.FLOAT,c.samplingMode=n.Cj.NEAREST,c.wrapMode=n.pF.CLAMP_TO_EDGE;const d=new Float32Array(u?l*h*16:2*s.length);if(u&&null!=o)for(let n=0,r=0;n<o.length;n++)d[r++]=o[n],n%3==2&&(d[r++]=1);else for(let n=0;n<h;n++)for(let t=0;t<l;t++){const e=4*(n*l+t),i=2*(t*h+n);d[e]=s[i],d[e+1]=s[i+1],d[e+3]=-1===s[i]?0:1}return new r.g(t,c,d)}function h(t,e){const i=new a.R;return i.internalFormat=n.Ab.RGBA,i.width=e.length/4,i.height=1,i.samplingMode=n.Cj.NEAREST,i.wrapMode=n.pF.CLAMP_TO_EDGE,new r.g(t,i,e)}function u(t,e,i){return{u_flipY:!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u_applyTransform:!!t,u_opacity:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u_transformSpacing:t?t.spacing:s.uY,u_transformGridSize:t?t.size:s.uY,u_targetImageSize:e,u_srcImageSize:i}}function c(t,e){return{u_colormapOffset:e||0,u_colormapMaxIndex:t?t.length/4-1:0}}function d(t,e){return{u_scale:t,u_offset:e}}function p(t){return{u_bandCount:t.bandCount,u_minOutput:t.minOutput,u_maxOutput:t.maxOutput,u_minCutOff:t.minCutOff,u_maxCutOff:t.maxCutOff,u_factor:t.factor,u_useGamma:t.useGamma,u_gamma:t.gamma,u_gammaCorrection:t.gammaCorrection}}function _(t){return{u_hillshadeType:t.hillshadeType,u_sinZcosAs:t.sinZcosAs,u_sinZsinAs:t.sinZsinAs,u_cosZs:t.cosZs,u_weights:t.weights,u_factor:t.factor,u_minValue:t.minValue,u_maxValue:t.maxValue}}function f(t,e){const i=t.gl,s=e.glName,n=new Map;if(null==s)return n;const r=i.getProgramParameter(s,i.ACTIVE_UNIFORMS);let a;for(let o=0;o<r;o++)a=i.getActiveUniform(s,o),a&&n.set(a.name,{location:i.getUniformLocation(s,a.name),info:a});return n}function m(t,e,i){Object.keys(i).forEach((s=>{const r=e.get(s)||e.get(s+"[0]");r&&function(t,e,i,s){if(null===s||null==i)return!1;const{info:r}=s;switch(r.type){case n.xV.FLOAT:r.size>1?t.setUniform1fv(e,i):t.setUniform1f(e,i);break;case n.xV.FLOAT_VEC2:t.setUniform2fv(e,i);break;case n.xV.FLOAT_VEC3:t.setUniform3fv(e,i);break;case n.xV.FLOAT_VEC4:t.setUniform4fv(e,i);break;case n.xV.FLOAT_MAT3:t.setUniformMatrix3fv(e,i);break;case n.xV.FLOAT_MAT4:t.setUniformMatrix4fv(e,i);break;case n.xV.INT:r.size>1?t.setUniform1iv(e,i):t.setUniform1i(e,i);break;case n.xV.BOOL:t.setUniform1i(e,i?1:0);break;case n.xV.INT_VEC2:case n.xV.BOOL_VEC2:t.setUniform2iv(e,i);break;case n.xV.INT_VEC3:case n.xV.BOOL_VEC3:t.setUniform3iv(e,i);break;case n.xV.INT_VEC4:case n.xV.BOOL_VEC4:t.setUniform4iv(e,i);break;default:return!1}}(t,s,i[s],r)}))}function g(t,e,i,s){i.length===s.length&&(s.some((t=>null==t))||i.some((t=>null==t))||i.forEach(((i,n)=>{e.setUniform1i(i,n),t.bindTexture(s[n],n)})))}},83380:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var s=i(35143),n=i(55171),r=i(94643),a=i(30726),o=i(68134),l=i(90534),h=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),c=i(76797),d=i(9624),p=i(13312),_=i(42553);let f=class extends _.A{constructor(){super(...arguments),this.id=0,this.rotation=0,this.href="",this.extent=new c.A}};(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],f.prototype,"id",void 0),(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],f.prototype,"rotation",void 0),(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],f.prototype,"href",void 0),(0,s._)([(0,h.MZ)({type:c.A,nonNullable:!0,json:{write:!0}})],f.prototype,"extent",void 0),f=(0,s._)([(0,u.$)("esri.layers.support.KMLMapImage")],f);var m=i(69834),g=i(54994),y=i(64519),x=i(16060),w=i(14509),b=i(23246),v=i(31394),S=i(69679),T=i(91196),A=i(3825),I=i(19247),E=i(59844),C=i(463),M=i(61142),R=i(93345),P=i(12331),O=i(71853),V=i(17016),k=i(80895),D=i(96673);class B{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(B._instance)return B._instanceRefCount++,B._instance;B._instanceRefCount=1,B._instance=this,this._ownsRctx=!0;const t=document.createElement("canvas").getContext("webgl2");t.getExtension("OES_texture_float"),this._rctx=new V.e(t,{})}const e=(0,M.p)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(e.shaders.vertexShader,e.shaders.fragmentShader,e.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new C.A(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=(0,d.project)(t.extent,e),n=new I.A({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:r,y:a}=(0,E.Wo)(n,e,t.extent);let o=(r+a)/2;const l=Math.round((s.xmax-s.xmin)/o),h=Math.round((s.ymax-s.ymin)/o);o=(s.width/l+s.height/h)/2;const u=new I.A({x:o,y:o,spatialReference:s.spatialReference}),c=(0,E.l0)({projectedExtent:s,srcBufferExtent:t.extent,pixelSize:u,hasWrapAround:!0,spacing:[16,16]}),p=(0,O.kc)(this._rctx,c),_=new D.R(l,h);_.wrapMode=R.pF.CLAMP_TO_EDGE;const f=new P.H(this._rctx,_);this._rctx.bindFramebuffer(f),this._rctx.setViewport(0,0,l,h),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(p,1),this._quad.bind();const{width:m=0,height:g=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",m,g),this._program.setUniform2fv("u_transformSpacing",c.spacing),this._program.setUniform2fv("u_transformGridSize",c.size),this._program.setUniform2f("u_targetImageSize",l,h),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),p.dispose(),i){const{width:t,height:e}=f,i=new ImageData(t??0,e??0);f.readPixels(0,0,t??0,e??0,R.Ab.RGBA,R.ld.UNSIGNED_BYTE,i.data);const n=f.detachColorTexture(R.Nm.COLOR_ATTACHMENT0);return f.dispose(),{texture:n,extent:s,imageData:i}}const y=f.detachColorTexture(R.Nm.COLOR_ATTACHMENT0);return f.dispose(),{texture:y,extent:s}}reprojectBitmapData(t,e){const i=(0,x.LG)(t.bitmapData)?(0,x.yr)(t.bitmapData):t.bitmapData,s=new D.R;s.wrapMode=R.pF.CLAMP_TO_EDGE,s.width=t.bitmapData.width,s.height=t.bitmapData.height;const n=new k.g(this._rctx,s,i),r=this.reprojectTexture({texture:n,extent:t.extent},e,!0);r.texture.dispose();const a=document.createElement("canvas"),o=r.imageData;return a.width=o.width,a.height=o.height,a.getContext("2d").putImageData(o,0,0),{bitmapData:a,extent:r.extent}}async loadAndReprojectBitmapData(t,e,i){const s=(await(0,A.A)(t,{responseType:"image"})).data,n=document.createElement("canvas");n.width=s.width,n.height=s.height;const r=n.getContext("2d");r.drawImage(s,0,0);const a=r.getImageData(0,0,n.width,n.height);if(e.spatialReference.equals(i))return{bitmapData:a,extent:e};const o=this.reprojectBitmapData({bitmapData:a,extent:e},i);return{bitmapData:o.bitmapData,extent:o.extent}}destroy(){this._ownsRctx?(B._instanceRefCount--,0===B._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),B._instance=null)):(this._quad.dispose(),this._program.dispose())}}B._instanceRefCount=0;class L{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let U=class extends((0,b.e)(T.A)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new w.l,this._kmlVisualData=new L,this._fetchController=null,this.allVisiblePoints=new y.Y,this.allVisiblePolylines=new y.Y,this.allVisiblePolygons=new y.Y,this.allVisibleMapImages=new r.A}async hitTest(t,e){const i=this.layer;return[this._pointsView?.hitTest(t),this._polylinesView?.hitTest(t),this._polygonsView?.hitTest(t)].flat().filter(Boolean).map((e=>(e.layer=i,e.sourceLayer=i,{type:"graphic",graphic:e,layer:i,mapPoint:t})))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new S.A({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new S.A({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new S.A({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(t=>{t.added.forEach((t=>this._addMapImage(t))),t.removed.forEach((t=>this._removeMapImage(t)))})),(0,o.wB)((()=>this.layer.visibleSublayers),(t=>{for(const e of this._kmlVisualData.allSublayers.values())e.visibility=0;for(const e of t){const t=this._kmlVisualData.allSublayers.get(e.id);t&&(t.visibility=1)}this._refreshCollections()}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new B}detach(){this._fetchController=(0,a.DC)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,a.pR)(this._polygonsView),this._polylinesView=(0,a.pR)(this._polylinesView),this._pointsView=(0,a.pR)(this._pointsView),this._imageReprojector=(0,a.pR)(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(t.href,t.extent,this.view.spatialReference).then((e=>{const i=new x.mb(e.bitmapData);i.x=e.extent.xmin,i.y=e.extent.ymax,i.resolution=e.extent.width/e.bitmapData.width,i.rotation=t.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(t,i)}))}async _getViewDependentUrl(t,e){const{viewFormat:i,viewBoundScale:s,httpQuery:r}=t;if(null!=i){if(null==e)throw new Error("Loading this network link requires a view state.");let a;if(await(0,d.load)(),null!=s&&1!==s){const t=new c.A(e.extent);t.expand(s),a=t}else a=e.extent;a=(0,d.project)(a,p.A.WGS84);const o=(0,d.project)(a,p.A.WebMercator),h=a.xmin,u=a.xmax,_=a.ymin,f=a.ymax,m=e.size[0]*e.pixelRatio,y=e.size[1]*e.pixelRatio,x=Math.max(o.width,o.height),w={"[bboxWest]":h.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":f.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":m.toString(),"[vertPixels]":y.toString(),"[terrainEnabled]":"0","[clientVersion]":n.rE,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},b=t=>{for(const e in t){let i;for(i in w)t[e]=t[e].replace(i,w[i])}},v=(0,l.zf)(i);b(v);let S={};null!=r&&(S=(0,l.zf)(r),b(S));const T=(0,g.Dl)(t.href);return T.query={...T.query,...v,...S},`${T.path}?${(0,l.x0)(v)}`}return t.href}async _fetchService(t){const e=new L;await this._loadVisualData(this.layer.url,e,t),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e})))}_isSublayerVisible(t){const e=this._kmlVisualData.allSublayers.get(t);return!!e?.visibility&&(-1===e.parentFolderId||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(t,e,i){return this._fetchParsedKML(t,i).then((async t=>{for(const s of t.sublayers){e.allSublayers.set(s.id,s);const t=s.points?await(0,m.Sp)(s.points):[],n=s.polylines?await(0,m.Sp)(s.polylines):[],r=s.polygons?await(0,m.Sp)(s.polygons):[],a=s.mapImages?.map((t=>f.fromJSON(t)))??[];if(e.allPoints.push(...t.map((t=>({item:t,sublayerId:s.id})))),e.allPolylines.push(...n.map((t=>({item:t,sublayerId:s.id})))),e.allPolygons.push(...r.map((t=>({item:t,sublayerId:s.id})))),e.allMapImages.push(...a.map((t=>({item:t,sublayerId:s.id})))),s.networkLink){const t=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(t,e,i)}}}))}_fetchParsedKML(t,e){return(0,m.Ox)(t,this.layer.spatialReference,this.layer.refreshInterval,e).then((t=>(0,m._4)(t.data)))}_removeMapImage(t){const e=this._bitmapIndex.get(t);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(t))}};(0,s._)([(0,h.MZ)()],U.prototype,"_pointsView",void 0),(0,s._)([(0,h.MZ)()],U.prototype,"_polylinesView",void 0),(0,s._)([(0,h.MZ)()],U.prototype,"_polygonsView",void 0),(0,s._)([(0,h.MZ)()],U.prototype,"updating",void 0),U=(0,s._)([(0,u.$)("esri.views.2d.layers.KMLLayerView2D")],U);const N=U},83490:(t,e,i)=>{var s,n,r,a,o,l,h,u;i.d(e,{Am:()=>a,C7:()=>r,JS:()=>u,Mg:()=>l,dd:()=>o,it:()=>n,s2:()=>s,sf:()=>h}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(s||(s={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(n||(n={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(r||(r={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(a||(a={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(o||(o={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee"}(l||(l={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(h||(h={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(u||(u={}))},86758:(t,e,i)=>{i.d(e,{C:()=>g});var s=i(5095),n=i(70479),r=i(32743),a=i(35143),o=i(6951),l=i(60984);function h(t){const e=function(t){const e=new l.nt(1/6),i=t.multiply(t),s=i.multiply(t),n=e.multiply(s.multiply(-1).add(new l.nt(3).multiply(i)).subtract(new l.nt(3).multiply(t)).add(1)),r=e.multiply(s.multiply(3).subtract(i.multiply(6)).add(4)),a=e.multiply(s.multiply(-3).add(i.multiply(3)).add(t.multiply(3)).add(1)),o=e.multiply(s);return new l.Zb(n,r,a,o)}(t),i=e.x.add(e.y),s=e.z.add(e.w),n=new l.nt(1).subtract(e.y.divide(i)).add(t),r=new l.nt(1).add(e.w.divide(s)).subtract(t);return new l.Zb(n,r,i,s)}class u extends o.ZA{}(0,a._)([(0,o.C5)(0,l.ZY)],u.prototype,"position",void 0);class c extends o.HS{}class d extends o.k2{}(0,a._)([(0,o.Pi)(l.z7)],d.prototype,"texture",void 0),(0,a._)([(0,o.Pi)(l.U)],d.prototype,"dvsMat3",void 0),(0,a._)([(0,o.Pi)(l.ZY)],d.prototype,"coordScale",void 0),(0,a._)([(0,o.Pi)(l.nt)],d.prototype,"opacity",void 0);class p extends o.A{constructor(){super(...arguments),this.type="BitmapShader"}vertex(t){const e=this.config.dvsMat3.multiply(new l.eB(t.position.multiply(this.config.coordScale),1));return{glPosition:new l.Zb(e,1),texcoord:t.position}}fragment(t){const e=new o.mm;let i;return i=this.bicubic?function(t,e,i){const s=new l.ZY(new l.nt(1).divide(i.x),0),n=new l.ZY(0,new l.nt(1).divide(i.y)),r=e.multiply(i).subtract(.5),a=h((0,l.jc)(r).x).xyz,o=h((0,l.jc)(r).y).xyz;let u=e.add(a.x.multiply(s)),c=e.subtract(a.y.multiply(s));const d=u.add(o.x.multiply(n)),p=c.add(o.x.multiply(n));u=u.subtract(o.y.multiply(n)),c=c.subtract(o.y.multiply(n));let _=(0,l.US)(t,c),f=(0,l.US)(t,u);const m=(0,l.US)(t,p),g=(0,l.US)(t,d);return _=(0,l.jh)(_,m,o.z),f=(0,l.jh)(f,g,o.z),_=(0,l.jh)(_,f,a.z),_}(this.config.texture,t.texcoord,this.config.coordScale):(0,l.US)(this.config.texture,t.texcoord),e.fragColor=new l.Zb(i.rgb.multiply(this.config.opacity),i.a.multiply(this.config.opacity)),e}}(0,a._)([(0,o.Pi)(d)],p.prototype,"config",void 0),(0,a._)([o.E8],p.prototype,"bicubic",void 0),(0,a._)([(0,a.a)(0,(0,o.hF)(u))],p.prototype,"vertex",null),(0,a._)([(0,a.a)(0,(0,o.hF)(c))],p.prototype,"fragment",null);var _=i(93345);const f={nearest:{samplingMode:_.Cj.NEAREST,mips:!1},bilinear:{samplingMode:_.Cj.LINEAR,mips:!1},bicubic:{samplingMode:_.Cj.LINEAR,mips:!1},trilinear:{samplingMode:_.Cj.LINEAR_MIPMAP_LINEAR,mips:!0}},m=(t,e,i)=>{if("dynamic"===i.samplingMode){const{state:i}=t,s=e.resolution/e.pixelRatio/i.resolution,n=Math.round(t.pixelRatio)!==t.pixelRatio,r=s>1.05||s<.95;return i.rotation||r||n||e.isSourceScaled||e.rotation?f.bilinear:f.nearest}return f[i.samplingMode]};class g extends n.j{constructor(){super(...arguments),this.name="BrushBitmap",this.type=r.N.Bitmap,this.shaders={bitmap:new p}}render(t,e){const{context:i,renderingOptions:n,painter:r}=t;for(const a of e.bitmaps){const e=a.texture;if(!a.source||!a.isReady||null==e)continue;const o=m(t,a,n);t.timeline.begin(this.name),r.setPipelineState({depth:!1,stencil:{test:{mask:255,ref:a.stencilRef,compare:_.MT.EQUAL,op:{fail:_.eA.KEEP,zFail:_.eA.KEEP,zPass:_.eA.KEEP}},write:!1},color:{write:[!0,!0,!0,!0],blendMode:"additive"===a.blendFunction?"additive":"composite"}}),a.setSamplingProfile(o);const{coordScale:l,computedOpacity:h,transforms:u}=a,c={texture:{texture:e,unit:s.YS},dvsMat3:u.displayViewScreenMat3,coordScale:l,opacity:h};r.submitDrawMesh(i,{shader:this.shaders.bitmap,uniforms:{config:c},defines:{bicubic:o===f.bicubic},optionalAttributes:null,useComputeBuffer:!1},r.quadMesh),t.timeline.end(this.name)}}}},86955:(t,e,i)=>{function s(t){let e="";for(let i=0;i<(arguments.length<=1?0:arguments.length-1);i++)e+=t[i]+(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]);return e+=t[t.length-1],e}function n(t,e){return t?e:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}i.d(e,{H:()=>s,If:()=>n}),function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(s)},96145:(t,e,i)=>{i.d(e,{A:()=>s});class s{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(null==e)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),n=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(s),t.putImageData(n,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}}}]);
//# sourceMappingURL=3944.b174eab7.chunk.js.map