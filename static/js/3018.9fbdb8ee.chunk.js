"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[3018],{23717:(e,t,i)=>{i.d(t,{A:()=>O});var r=i(53494),s=i(63919),o=i(85827),n=i(59422),a=i(83755),l=i(1438),h=i(80963),p=i(28632),d=i(61551),c=i(36201),y=i(30726),m=i(64780),u=i(90356),f=i(70479),_=i(32743),v=i(35143),g=i(6951),w=i(60984);class x extends g.ZA{}(0,v._)([(0,g.C5)(0,w.ZY)],x.prototype,"pos",void 0),(0,v._)([(0,g.C5)(1,w.ZY)],x.prototype,"uv",void 0);class A extends g.HS{}class C extends g.k2{}(0,v._)([(0,g.Pi)(w.U)],C.prototype,"dvs",void 0);class b extends g.k2{}(0,v._)([(0,g.Pi)(w.ZY)],b.prototype,"perspective",void 0),(0,v._)([(0,g.Pi)(w.ZY)],b.prototype,"texSize",void 0),(0,v._)([(0,g.Pi)(w.nt)],b.prototype,"wrapAroundShift",void 0),(0,v._)([(0,g.Pi)(w.nt)],b.prototype,"opacity",void 0),(0,v._)([(0,g.Pi)(w.z7)],b.prototype,"texture",void 0);class M extends g.A{constructor(){super(...arguments),this.type="OverlayShader"}vertex(e){const t=e.uv.divide(this.config.texSize),i=new w.nt(1).add((0,w.Om)(t,this.config.perspective)),r=new w.eB(e.pos.add(new w.ZY(this.config.wrapAroundShift,0)),1),s=this.transform.dvs.multiply(r);return{uv:t,glPosition:new w.Zb(s.xy.multiply(i),0,i)}}fragment(e){const t=(0,w.US)(this.config.texture,e.uv).multiply(this.config.opacity),i=new g.mm;return i.fragColor=t,i}}(0,v._)([(0,g.Pi)(C)],M.prototype,"transform",void 0),(0,v._)([(0,g.Pi)(b)],M.prototype,"config",void 0),(0,v._)([(0,v.a)(0,(0,g.hF)(x))],M.prototype,"vertex",null),(0,v._)([(0,v.a)(0,(0,g.hF)(A))],M.prototype,"fragment",null);var T=i(93345),P=i(21812);class S extends f.j{constructor(){super(...arguments),this.type=_.N.Overlay,this._mesh=null,this.shaders={overlay:new M}}render(e,t){const{context:i,painter:r}=e,s=this._getMesh(e,t);r.setPipelineState(u.i);const{isWrapAround:o,wrapAroundShift:n}=t.config,a={...t.config,wrapAroundShift:0},l={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:a},defines:null,optionalAttributes:null,useComputeBuffer:!1};r.setPipelineState({...u.i,stencil:{write:!1,test:{compare:T.MT.EQUAL,op:{fail:T.eA.KEEP,zFail:T.eA.KEEP,zPass:T.eA.REPLACE},ref:0,mask:255}}}),r.submitDrawMeshUntyped(i,l,s),o&&(a.wrapAroundShift=n,r.submitDrawMeshUntyped(i,l,s))}shutdown(){(0,y.pR)(this._mesh)}_getMesh(e,t){const{context:i}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.buffer.setData(t.position)}else{const e=null!=t.index?t.index.length:t.position.length/2;this._mesh=new m.e(i,{vertex:{positions:{data:t.position,attributes:[new P._("pos",2,T.pe.FLOAT,0,8)]},uvs:{data:t.tex,attributes:[new P._("uv",2,T.pe.UNSIGNED_SHORT,0,4)]}},index:null!=t.index?{index:{data:t.index}}:void 0,groups:[{index:null!=t.index?"index":void 0,primitive:T.WR.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]})}return this._mesh}}class O extends c.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,o.vt)(),this._overlayTechnique=new S}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==d.S5.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const i of this.children)i.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:i,size:o,pixelRatio:h,resolution:p,rotation:d,viewpoint:c,displayMat3:y}=t;if(this._viewStateId===i)return;const m=(0,r.DF)(d),u=h*o[0],f=h*o[1];this._localOrigin=c.targetGeometry.clone();const{x:_,y:v}=this._localOrigin,g=(0,l.mT)(_,t.spatialReference);this._localOrigin.x=g,this._localOrigin.y=v;const w=p*u,x=p*f,A=(0,s.D_)(this._dvsMat3);(0,s.lw)(A,A,y),(0,s.Tl)(A,A,(0,n.fA)(u/2,f/2)),(0,s.hs)(A,A,(0,a.fA)(u/w,-f/x,1)),(0,s.e$)(A,A,-m),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:o,worldScreenWidth:n,size:a,viewpoint:l}=i,d=this._localOrigin;let c,y=0;const m=(0,h.Vp)(o);if(m&&o.isWrappable){const e=a[0],t=a[1],h=(0,r.DF)(s),d=Math.abs(Math.cos(h)),u=Math.abs(Math.sin(h)),f=Math.round(e*d+t*u),[_,v]=m.valid,g=(0,p.FT)(o),{x:w,y:x}=l.targetGeometry,A=[w,x],C=[0,0];i.toScreen(C,A);const b=[0,0];let M;M=f>n?.5*n:.5*f;const T=Math.floor((w+.5*g)/g),P=_+T*g,S=v+T*g,O=[C[0]+M,0];i.toMap(b,O),b[0]>S&&(y=g),O[0]=C[0]-M,i.toMap(b,O),b[0]<P&&(y=-g),c={worldWidth:g,xBounds:[_,v]}}for(const r of t)r.updateDrawCoords(d,y,o,c)}}},31394:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(61551),s=i(8995),o=i(13692);class n extends s.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,o.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}},43018:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var r=i(35143),s=i(69539),o=i(39356),n=i(30726),a=i(68134),l=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),p=i(63733),d=i(90360),c=i(86875),y=i(7246),m=i(76940),u=i(23717),f=i(79053),_=i(88321),v=i(76931),g=i(72745),w=i(19247),x=i(65215),A=i(9624),C=i(8794),b=i(47266),M=i(93345),T=i(80895),P=i(96673);class S extends C.q{constructor(e){super(),this.element=e,this._handles=new _.A,this.isWrapAround=!1,this.perspectiveTransform=(0,g.vt)(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add((0,a.z7)((()=>this.element),(()=>{const e=this.element;this.ready(),e&&this._handles.add((0,f.on)(e,"play",(()=>this.requestRender())))}),a.Vh))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,n.WD)(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(null==t)return;const{context:i}=e,{videoWidth:r,videoHeight:s}=t;if(0!==r&&0!==s){if(this.texture)t.paused||this.texture.setData(t);else{const e=new P.R;e.wrapMode=M.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,this.texture=new T.g(i,e,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,r){const s=this.element,o=this._getFrameInfo();if(!s||!o)return;this._initializeData(e,o,i);const{controlPoints:n,horizon:a}=o,l=Math.sqrt(n.length),h=l,{x:p,y:d}=e,c=this._vertices,y=n[0],m=n[l-1],u=n[(h-1)*l],f=n[(h-1)*l+l-1],_=(0,A.project)(a?a[0].mapPoint:y.mapPoint,i),v=(0,A.project)(a?a[1].mapPoint:m.mapPoint,i),g=(0,A.project)(u.mapPoint,i),w=(0,A.project)(f.mapPoint,i);this.clipGeometry=a?new b.A({geometry:x.A.fromJSON({rings:[[[g.x,g.y],[w.x,w.y],[v.x,v.y],[_.x,_.y],[g.x,g.y]]],spatialReference:i})}):null;for(let x=0;x<n.length;x++){const e=n[x],{sourcePoint:t,mapPoint:r}=e;if(null==t||null==r)continue;const s=(0,A.project)(r,i);c[2*x+0]=s.x-p,c[2*x+1]=s.y-d}let C=t;if(r){const e=Math.min(_.x,v.x,g.x,w.x),t=Math.max(_.x,v.x,g.x,w.x),{worldWidth:i,xBounds:s}=r,[o,n]=s;e<o&&t>o?C=i:t>n&&e<n&&(C=-i)}this.wrapAroundShift=C,this.isWrapAround=0!==C}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,i){if(null!=this._vertices&&null!=this._indices)return;const{controlPoints:r}=t,s=Math.sqrt(r.length),o=s,n=new Float32Array(2*r.length),a=new Uint16Array(2*r.length);for(let p=0;p<r.length;p++){const t=r[p],{sourcePoint:s,mapPoint:o}=t;if(null==s||null==o)continue;const l=(0,A.project)(o,i);n[2*p+0]=l.x-e.x,n[2*p+1]=l.y-e.y,a[2*p+0]=s.x,a[2*p+1]=s.y}const l=new Uint16Array(o*s+(o-2)*(s+2));let h=0;for(let p=0;p<o;p++){for(let e=0;e<s;e++)l[h++]=p*s+e,l[h++]=(p+1)*s+e;p<o-2&&(l[h++]=(p+1)*s+(s-1),l[h++]=(p+1)*s)}this._vertices=n,this._texCoords=a,this._indices=l}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const e=t.startX,r=t.startY,s=t.endX,o=t.endY;i=[{sourcePoint:(0,v.tc)(e,r),mapPoint:new w.A(t.startLongitude,t.startLatitude)},{sourcePoint:(0,v.tc)(s,o),mapPoint:new w.A(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e?.length;if(!t)return[];const i=new Array(t),r=Math.max(...e.map((e=>{let{x:t}=e;return t}))),s=this.element.videoWidth/r;for(let o=0;o<t;o++){const{x:t,y:r,lat:n,lon:a}=e[o];i[o]={sourcePoint:(0,v.tc)(t*s,-r*s),mapPoint:new w.A(a,n)}}return i}}var O=i(23246),G=i(31394),D=i(69679),E=i(91196);const L=new s.A([255,127,0]);let R=class extends((0,O.e)(E.A)){constructor(){super(...arguments),this._graphicsLayer=new p.A,this._frameOutlineGraphic=new o.A({symbol:new c.A({outline:{type:"simple-line",color:L}})}),this._sensorTrailGraphic=new o.A({symbol:new y.A({color:L})}),this._lineOfSightGraphic=new o.A({symbol:new y.A({color:L})}),this._sensorLocationGraphic=new o.A({symbol:new m.A({color:L})}),this._frameCenterGraphic=new o.A({symbol:new m.A({color:L,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=L,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,n.pR)(this._graphicsLayer)}initialize(){this.addHandles((0,a.wB)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),a.Vh)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new d.A({frame:this.layer.telemetryDisplay?.frame??!1,frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new u.A,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new D.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new G.A(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,a.wB)((()=>[this.layer.telemetryDisplay?.frame,this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),a.Vh),(0,a.wB)((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),a.Vh)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=(0,n.pR)(this.graphicsView)}supportsSpatialReference(e){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const e=new S(this.layer.videoElement);this.addAttachHandles([(0,a.wB)((()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints]),(()=>{const{visibleTelemetryElements:t}=this;t?.frame?(e.frameHorizonPoints=this.layer.frameHorizonPoints,e.groundControlPoints=this.layer.groundControlPoints,e.opacity=1):e.opacity=0}),a.Vh)]),this._overlayContainer.addChild(e),this.view.stage.requestRender()}};(0,r._)([(0,l.MZ)()],R.prototype,"graphicsView",void 0),(0,r._)([(0,l.MZ)()],R.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],R.prototype,"symbolColor",void 0),(0,r._)([(0,l.MZ)({type:d.A})],R.prototype,"visibleTelemetryElements",void 0),R=(0,r._)([(0,h.$)("esri.views.2d.layers.VideoLayerView2D")],R);const Z=R},63733:(e,t,i)=>{i.d(t,{A:()=>y});var r=i(35143),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),n=i(5364),a=i(25515),l=i(65624),h=i(5682),p=i(64519),d=i(731);let c=class extends((0,l.dM)((0,h.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,r._)([(0,s.MZ)({type:d.A})],c.prototype,"elevationInfo",void 0),(0,r._)([(0,s.MZ)((0,n.C)(p.Y,"graphics"))],c.prototype,"graphics",void 0),(0,r._)([(0,s.MZ)({type:["show","hide"]})],c.prototype,"listMode",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"internal",void 0),c=(0,r._)([(0,o.$)("esri.layers.GraphicsLayer")],c);const y=c},90356:(e,t,i)=>{i.d(t,{i:()=>r});const r={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:!1}},90360:(e,t,i)=>{i.d(t,{A:()=>h});var r=i(35143),s=i(69098),o=i(42553),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));let l=class extends(s.A.ClonableMixin(o.A)){constructor(e){super(e),this.frame=null,this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frame",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frameCenter",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frameOutline",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"lineOfSight",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"sensorLocation",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"sensorTrail",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.TelemetryDisplay")],l);const h=l}}]);
//# sourceMappingURL=3018.9fbdb8ee.chunk.js.map