"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[1382],{1382:(e,t,s)=>{s.r(t),s.d(t,{OperatorGeodesicBuffer:()=>G});var n=s(68707),i=s(97799),r=s(21557),o=s(82103),m=s(35143),a=s(79186),h=s(91523),c=s(16364),u=s(26871),l=s(88689),_=s(21066),f=s(20265);class d{constructor(e){this.m_sr=null,this.m_gcs=null,this.m_transform=null,this.m_a=0,this.m_eSquared=0,this.m_rpu=0,this.m_radTolerance=0,this.m_q90=0,this.m_gcs90=0,this.m_gcs180=0,this.m_gcs360=0,this.m_gcs60=0,this.m_ellipticToGeodesicMaxRatio=0,this.m_curveType=0,this.m_bShapePreserving=!1,this.m_distance=0,this.m_absDistance=0,this.m_convergenceOffset=0,this.m_cornerStep=0,this.m_segmentStep=0,this.m_progressTracker=e}bufferPolygon(e){const t=new a.a,s=new I(this,e,t);return this.processGnomonicBufferPiecesCursor(!0,s)}bufferPolyline(e){const t=new I(this,e,null);return this.processGnomonicBufferPiecesCursor(!0,t)}bufferMultiPoint(e){const t=new E(this,e);return this.processGnomonicBufferPiecesCursor(!1,t)}bufferPoint(e){const t=e.getXY();t.scale(this.m_rpu);let s=new a.a;if(this.bufferPoint2D(t,!1,s)){const e=(0,h.b)(null,s,!0);s=(0,o.y)(s,e,!0,!0,-1,this.m_progressTracker,0,!1)}return s=(new o.v).foldInto360RangeGeodetic(s,this.m_gcs,2),s}processGnomonicBufferPiecesCursor(e,t){const s=t;let n=s.getGnomonic();const i=(0,o.z)((0,o.A)());let m=new o.L,a=(new o.h).executeMany(m,i,this.m_progressTracker,2);const l=(0,u.d)(6,!1),_=(0,u.m)(r.J,6);this.initializeGrid(l,_);const f=[null,null,null,null,null,null],d=[null,null,null,null,null,null],g=[null,null,null,null,null,null];let P,p,b;for(;null!==(P=s.next());){if(p=s.getGnomonic(),p!==n){if(null!==n){let t=a.next();if(m=null,a=null,null!=t){const s=(0,h.b)(i,t,!0),r=(0,h.d)(s);t=n.unproject(t,r,this.m_progressTracker),this.putInGridCursors(e,t,i,!0,l,_,f,d,g)}}null!==p&&(m=new o.L,a=(new o.h).executeMany(m,i,this.m_progressTracker,2)),n=p}if(s.isRunningInGnomonic()){if(p.project(P),s.needsSimplify()){const e=(0,h.b)(null,P,!0);P=(0,o.y)(P,e,!0,!0,-1,this.m_progressTracker,0,!1)}m.tick(v(P)),a.tock()}else this.putInGridCursors(e,P,i,!0,l,_,f,d,g)}let x=!1;for(let r=0;r<6;r++)if(null!=g[r]){x=!0;break}if(x){let t=!1;const r=[null,null,null,null,null,null];if(e){const n=s.m_densified;if(s.m_densified=null,null!==n){const s=new c.T;s.scale(1/this.m_rpu,1/this.m_rpu),n.applyTransformation(s),this.m_distance>0?this.putInGridCursors(e,n,i,!1,l,_,f,d,g):(this.processInGrid(e,n,!1,l,_,f,r),t=!0)}}const u=new o.L,P=(new o.h).executeMany(u,this.m_gcs,this.m_progressTracker,2);if(null!==a){let t=a.next();m=null,a=null;const s=(0,h.b)(i,t,!0),r=(0,h.d)(s);t=n.unproject(t,r,this.m_progressTracker),this.putInGridCursors(e,t,i,!0,l,_,f,d,g)}for(let e=0;e<6;e++)if(null!=g[e]){let s=g[e].next();g[e]=null,d[e]=null,t&&null!==r[e]&&(s=(new o.e).execute(r[e],s,i,this.m_progressTracker));const n=(0,h.b)(i,s,!0),m=(0,h.d)(n);s=f[e].unproject(s,m,this.m_progressTracker),s=(new o.g).execute(s,this.m_gcs,!0,this.m_progressTracker),u.tick(v(s)),P.tock()}b=P.next()}else{let t,r=!1;if(e){let e=s.m_densified;if(s.m_densified=null,null!==e){const s=new c.T;s.scale(1/this.m_rpu,1/this.m_rpu),e.applyTransformation(s),p.project(e);const n=(0,h.b)(null,e,!0);e=(0,o.y)(e,n,!1,!0,-1,this.m_progressTracker,0,!1),this.m_distance>0?(m.tick(v(e)),a.tock()):(t=e,r=!0)}}let u=a.next();m=null,a=null,r&&(u=(new o.e).execute(t,u,i,this.m_progressTracker));const l=(0,h.b)(i,u,!0),_=(0,h.d)(l);b=n.unproject(u,_,this.m_progressTracker),b=(new o.g).execute(b,this.m_gcs,!0,this.m_progressTracker)}return b=(new o.v).foldInto360RangeGeodetic(b,this.m_gcs,2),b}putInGridCursors(e,t,s,n,i,r,m,a,h){const c=[null,null,null,null,null,null];this.processInGrid(e,t,n,i,r,m,c);for(let u=0;u<6;u++)null!==c[u]&&(null===a[u]&&(a[u]=new o.L,h[u]=(new o.h).executeMany(a[u],s,this.m_progressTracker,2)),a[u].tick(v(c[u])),h[u].tock())}processInGrid(e,t,s,n,i,r,m){const a=.01,c=this.insertGeodeticPointsAlongGrid(t,i,a);for(let _=0;_<6;_++){if(n[_])continue;const e=i[_].clone();e.inflateCoords(a,a);const f=(0,h.e)(t,e),d=(0,h.a)(null,f,!1).total();let g=(0,l.c)(c,e,d,Number.NaN,this.m_progressTracker);if(null!==g&&!g.isEmpty()){if(g===c&&(g=g.clone()),null===r[_]){const e=new u.P;_<3?e.setCoords(0,1):e.setCoords(0,-1);const t=new u.P;t.setAdd(i[_].getCenter(),e),r[_]=S(this.m_gcs,t)}r[_].project(g);const e=(0,h.b)(null,g,!0);g=(0,o.y)(g,e,s,!0,-1,this.m_progressTracker,0,!1),m[_]=g}}}insertGeodeticPointsAlongGrid(e,t,s){const n=r.J.construct(t[3].xmin,t[3].ymin,t[2].xmax,t[2].ymax),i=(0,o.B)(this.m_gcs,n,e,!0,this.m_progressTracker),m=new a.E,h=m.addGeometry(i);return(0,o.D)(m,h,this.m_gcs,0,2,!0,t[0].xmax+s),(0,o.D)(m,h,this.m_gcs,0,2,!0,t[1].xmax+s),(0,o.D)(m,h,this.m_gcs,0,2,!1,t[1].ymin+s),0!==s&&((0,o.D)(m,h,this.m_gcs,0,2,!0,t[0].xmax-s),(0,o.D)(m,h,this.m_gcs,0,2,!0,t[1].xmax-s),(0,o.D)(m,h,this.m_gcs,0,2,!1,t[1].ymin-s)),m.getGeometry(h)}initializeGrid(e,t){for(let s=0;s<6;s++)e[s]=!1;t[0].setCoords({xmin:-this.m_gcs180,ymin:0,xmax:-this.m_gcs60,ymax:this.m_gcs90}),t[1].setCoords({xmin:-this.m_gcs60,ymin:0,xmax:this.m_gcs60,ymax:this.m_gcs90}),t[2].setCoords({xmin:this.m_gcs60,ymin:0,xmax:this.m_gcs180,ymax:this.m_gcs90}),t[3].setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:-this.m_gcs60,ymax:0}),t[4].setCoords({xmin:-this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs60,ymax:0}),t[5].setCoords({xmin:this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:0})}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,t,s,n,i,r){const m=e[0],a=e.at(-1),h=m.y<a.y?m.y:a.y,c=m.y>a.y?m.y:a.y,l=o.t.q(this.m_a,this.m_eSquared,h),_=o.t.q(this.m_a,this.m_eSquared,c);if(this.m_q90-(l+t+this.m_absDistance)>.001&&this.m_q90+(_-t-this.m_absDistance)>.001)return!1;const f=s-u.l,d=n+u.l,g=f-Math.PI,x=f+Math.PI,y=d+Math.PI,w=[Number.NaN],C=[Number.NaN],S=[Number.NaN],v=[Number.NaN];let D=!1;if(b(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,m,f,g,a,d,w,C),b(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,a,y,d,m,g,S,v),(d<w[0]&&w[0]<y||d<C[0]&&C[0]<y)&&(D=!0),D||(g<S[0]&&S[0]<f||g<v[0]&&v[0]<f)&&(D=!0),!D&&i)return!1;const I=[];for(let o=e.length-1;o>=0;o--)I.push(e[o]);r.setEmpty(),r.addPathPoint2D(null,0,!0);let E=0;E=P(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,e,f,d,i,E,r),E=p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,a,d,y,this.m_cornerStep,i,E,r,w[0],C[0]),E=P(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,I,y,x,i,E,r),E=p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,m,g,f,this.m_cornerStep,i,E,r,S[0],v[0]);let G=!1;return i||(G=this.checkAndPrepForPole(r)),D||G}bufferPoint2D(e,t,s){s.setEmpty(),s.addPathPoint2D(null,0,!0);p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,e,-this.m_cornerStep,2*Math.PI,this.m_cornerStep,t,0,s);let n=!1;return t||(n=this.checkAndPrepForPole(s)),n}checkAndPrepForPole(e){const t=this.checkAndPrepForPoleTouch(e),s=this.checkAndPrepForPoleWrap(e);return t||s}checkAndPrepForPoleTouch(e){const t=new r.J;return e.queryEnvelope(t),!(!(0,o.P)(t.ymax,this.m_gcs90)&&!(0,o.P)(t.ymin,-this.m_gcs90))&&(this.prepPoleTouch(e),!0)}checkAndPrepForPoleWrap(e){const t=e.getXY(0),s=e.getXY(e.getPointCount()-1);return Math.abs(t.x-s.x)>this.m_gcs180?(this.prepSinglePoleWrap(e),!0):this.checkAndPrepForDoublePoleWrap(e)}checkAndPrepForDoublePoleWrap(e){return e.calculateArea2D()<0&&(this.prepDoublePoleWrap(e),!0)}prepPoleTouch(e){const t=new a.a;t.insertPath2D(-1,null,0,0,!0);const s=e.getPathStart(0),n=e.getPathEnd(0),i=n-s;let r=-1;for(r=s;r<n;r++){const t=e.getXY(r),s=(0,o.P)(t.y,this.m_gcs90),n=(0,o.P)(t.y,-this.m_gcs90);if(!s&&!n)break}let m=r,h=!1,c=Number.NaN;do{const n=e.getXY(m),r=(0,o.P)(n.y,this.m_gcs90),a=(0,o.P)(n.y,-this.m_gcs90),l=s+(m+1-s)%i;if(r||a){let s=u.P.construct(c,n.y);t.insertPoint2D(0,-1,s);const i=e.getXY(l),r=(0,o.P)(i.y,this.m_gcs90),m=(0,o.P)(i.y,-this.m_gcs90);r||m||(s=u.P.construct(i.x,n.y),h?t.setXY(t.getPointCount()-1,s):t.insertPoint2D(0,-1,s)),h=!0}else t.insertPoint2D(0,-1,n),c=n.x,h=!1;m=l}while(m!==r);e.setEmpty(),e.add(t,!1)}prepSinglePoleWrap(e){const t=new a.a,s=new a.a,n=new c.T,i=e.getXY(e.getPathStart(0)),m=e.getXY(e.getPathEnd(0)-1),_=this.m_gcs360,f=this.m_gcs180,d=new r.J;d.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const g=new r.J;e.queryEnvelope(g);const P=Math.ceil(g.width()/_);let p,b;i.x>m.x?(p=-_,b=this.m_gcs90):(p=_,b=-this.m_gcs90),n.setShiftCoords(p,0),t.addPath(e,0,!0),s.add(t,!1);const x=new h.P;for(let r=0;r<P;r++)s.applyTransformation(n),s.getPointByVal(0,x),t.lineToPoint(x),t.addSegmentsFromPath(s,0,0,s.getSegmentCount()-1,!1);const y=t.getXY(0),w=t.getXY(t.getPointCount()-1);y.y=b,w.y=b,t.lineTo(w);const C=new u.P;for(C.setCoordsPoint2D(w),C.x-=.5*p;Math.abs(C.x-y.x)>f;)t.lineTo(C),C.x-=.5*p;t.lineTo(y);const S=d.getCenterX(),v=new r.J;t.queryEnvelope(v);let D=0;const I=v.getCenter().x;I-S>f?D=-Math.ceil((I-S-f)/_):S-I>f&&(D=Math.ceil((S-I-f)/_)),0!==D&&(n.setShiftCoords(D*_,0),t.applyTransformation(n));const E=new a.E,G=E.addGeometry(t);(0,o.D)(E,G,this.m_gcs,0,2,!0,d.xmin),(0,o.D)(E,G,this.m_gcs,0,2,!0,d.xmax);const k=E.getGeometry(G),T=(0,h.e)(k,d);T.inflateCoords(0,1);const M=(0,h.a)(null,T,!0).total(),N=(0,l.c)(k,d,M,Number.NaN,this.m_progressTracker);e.setEmpty(),e.add(N,!1)}prepDoublePoleWrap(e){const t=this.m_gcs360,s=this.m_gcs180,n=new r.J;n.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const i=n.getCenter().x,m=new r.J;e.queryPathEnvelope(0,m);let _,f=0,d=m.getCenter().x;if(d-i>s?f=-Math.ceil((d-i-s)/t):i-d>s&&(f=Math.ceil((i-d-s)/t)),0!==f){const s=new c.T;s.setShiftCoords(f*t,0),e.getImpl().applyTransformationToPath(s,0),e.queryPathEnvelope(0,m),d=m.getCenter().x}const g=new r.J;n.containsExclusiveEnvelope(m)?(_=!1,g.setCoords({env2D:n})):(_=!0,g.setCoords({env2D:n}),g.xmin-=t,g.xmax+=t);let P=e.createInstance();P.addPathPoint2D(null,0,!0);const p=new u.P;if(p.setCoords(g.xmin,g.ymin),P.insertPoint2D(0,-1,p),p.setCoords(g.xmin,g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(.5*(g.xmin+g.xmax),g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(g.xmax,g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(g.xmax,g.ymin),P.insertPoint2D(0,-1,p),p.setCoords(.5*(g.xmin+g.xmax),g.ymin),P.insertPoint2D(0,-1,p),_){P.addPath(e,0,!0);const s=new c.T;d<i?s.setShiftCoords(t,0):s.setShiftCoords(-t,0),e.getImpl().applyTransformationToPath(s,0),P.addPath(e,0,!0);const r=new a.E,m=r.addGeometry(P);(0,o.D)(r,m,this.m_gcs,0,2,!0,n.xmin),(0,o.D)(r,m,this.m_gcs,0,2,!0,n.xmax),P=r.getGeometry(m);const u=(0,h.e)(P,n);u.inflateCoords(0,1);const _=(0,h.a)(null,u,!0).total();P=(0,l.c)(P,n,_,Number.NaN,this.m_progressTracker)}else P.addPath(e,0,!0);e.setEmpty(),e.add(P,!1)}setMinCornerStep(){const e={stack:[],error:void 0,hasError:!1};try{let s=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);s=Math.min(s,.125*this.m_a*Math.PI);const n=new u.P;n.setCoords(0,10*this.m_rpu);const i=0;let r=45*this.m_rpu;const a=(0,m.b)(e,new u.S(new o.E,new o.E),!1),h=(0,m.b)(e,new u.S(new o.E,new o.E),!1),c=(0,m.b)(e,new u.S(new o.E,new o.E),!1),l=(0,m.b)(e,new u.S(new o.E,new o.E),!1),_=new u.P,f=new u.P,d=new u.P,g=new u.P;for(o.F.geodesicCoordinate(this.m_a,this.m_eSquared,n.x,n.y,s,i,a.at(0),a.at(1)),_.setCoords(a.at(0).val,a.at(1).val),o.F.geodesicCoordinate(this.m_a,this.m_eSquared,n.x,n.y,s,r,h.at(0),h.at(1)),f.setCoords(h.at(0).val,h.at(1).val);;){const e={stack:[],error:void 0,hasError:!1};try{const t=.5*(i+r);o.F.geodesicCoordinate(this.m_a,this.m_eSquared,n.x,n.y,s,t,c.at(0),c.at(1)),d.setCoords(c.at(0).val,c.at(1).val);const a=(0,m.b)(e,new o.E,!1),u=(0,m.b)(e,new o.E,!1);o.F.geodeticDistance(this.m_a,this.m_eSquared,_.x,_.y,f.x,f.y,a,u,null,2),o.F.geodeticCoordinate(this.m_a,this.m_eSquared,_.x,_.y,.5*a.val,u.val,l.at(0),l.at(1),2),g.setCoords(l.at(0).val,l.at(1).val);const P=(0,m.b)(e,new o.E,!1);if(o.F.geodeticDistance(this.m_a,this.m_eSquared,d.x,d.y,g.x,g.y,P,null,null,2),P.val<=this.m_convergenceOffset)break;r*=.9,o.F.geodesicCoordinate(this.m_a,this.m_eSquared,n.x,n.y,s,r,h.at(0),h.at(1)),f.setCoords(h.at(0).val,h.at(1).val)}catch(t){e.error=t,e.hasError=!0}finally{(0,m.c)(e)}}const P=r-i,p=2*Math.PI/Math.ceil(2*Math.PI/P);this.m_cornerStep=p}catch(s){e.error=s,e.hasError=!0}finally{(0,m.c)(e)}}setMinSegmentStep(){const e={stack:[],error:void 0,hasError:!1};try{let n=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);n=Math.min(n,.125*this.m_a*Math.PI);const i=new u.P,r=new u.P;i.setCoords(0,10*this.m_rpu),r.setCoords(10*this.m_rpu,10*this.m_rpu);const a=(0,m.b)(e,new o.E,!1),h=(0,m.b)(e,new o.E,!1),c=(0,m.b)(e,new o.E,!1);o.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,r.x,r.y,c,a,h,this.m_curveType);const l=(0,m.b)(e,new u.S(new o.E,new o.E),!1),_=(0,m.b)(e,new u.S(new o.E,new o.E),!1),f=new u.P,d=(0,m.b)(e,new o.E,!1),g=(0,m.b)(e,new u.S(new o.E,new o.E),!1),P=(0,m.b)(e,new u.S(new o.E,new o.E),!1),p=(0,m.b)(e,new u.S(new o.E,new o.E),!1),b=(0,m.b)(e,new u.S(new o.E,new o.E),!1),x=new u.P,y=new u.P,w=new u.P,C=new u.P,S=0;let v=1;const D=a.val,I=h.val,E=D-.5*Math.PI,G=I+.5*Math.PI,k=c.val;for(o.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,n,E,g.at(0),g.at(1)),x.setCoords(g.at(0).val,g.at(1).val),o.F.geodesicCoordinate(this.m_a,this.m_eSquared,r.x,r.y,n,G,P.at(0),P.at(1)),y.setCoords(P.at(0).val,P.at(1).val);;){const e={stack:[],error:void 0,hasError:!1};try{const s=.5*(S+v);o.F.geodeticCoordinate(this.m_a,this.m_eSquared,i.x,i.y,s*k,D,l.at(0),l.at(1),this.m_curveType),f.setCoords(l.at(0).val,l.at(1).val),o.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,f.x,f.y,null,null,d,this.m_curveType);const a=d.val+.5*Math.PI;o.F.geodesicCoordinate(this.m_a,this.m_eSquared,f.x,f.y,n,a,p.at(0),p.at(1)),w.setCoords(p.at(0).val,p.at(1).val);const h=(0,m.b)(e,new o.E,!1),c=(0,m.b)(e,new o.E,!1);o.F.geodeticDistance(this.m_a,this.m_eSquared,x.x,x.y,y.x,y.y,h,c,null,2),o.F.geodeticCoordinate(this.m_a,this.m_eSquared,x.x,x.y,.5*h.val,c.val,b.at(0),b.at(1),2),C.setCoords(b.at(0).val,b.at(1).val);const u=(0,m.b)(e,new o.E,!1);if(o.F.geodeticDistance(this.m_a,this.m_eSquared,w.x,w.y,C.x,C.y,u,null,null,2),u.val<=this.m_convergenceOffset)break;{const e={stack:[],error:void 0,hasError:!1};try{v*=.9,o.F.geodeticCoordinate(this.m_a,this.m_eSquared,i.x,i.y,v*k,D,_.at(0),_.at(1),this.m_curveType),r.setCoords(_.at(0).val,_.at(1).val);const t=(0,m.b)(e,new o.E,!1);o.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,r.x,r.y,null,null,t,this.m_curveType);const s=t.val+.5*Math.PI;o.F.geodesicCoordinate(this.m_a,this.m_eSquared,r.x,r.y,n,s,P.at(0),P.at(1)),y.setCoords(P.at(0).val,P.at(1).val)}catch(t){e.error=t,e.hasError=!0}finally{(0,m.c)(e)}}}catch(s){e.error=s,e.hasError=!0}finally{(0,m.c)(e)}}let T=v*k;T>1e5&&(T=1e5),this.m_segmentStep=T}catch(n){e.error=n,e.hasError=!0}finally{(0,m.c)(e)}}setConvergenceOffset(){let e;e=this.m_absDistance>5e4?100:this.m_absDistance>1e4?10:1,this.m_absDistance/e<500&&(e=this.m_absDistance/500),e<.01&&(e=.01),this.m_convergenceOffset=e}}function g(e,t,s,n,m,c,l){if(e.isEmpty())return new a.a({vd:e.getDescription()});let _=e;if((0,i.j)(_)){const e=10*t.getTolerance(0);_=(new f.O).execute(_,0,e,0,l,12e3)}const g=new d(l);g.m_sr=t,g.m_gcs=t.getGCS(),g.m_transform=(0,o.p)(t,g.m_gcs,null);const P=(0,o.G)();g.m_gcs.querySpheroidData(P);const p=new r.J;_.queryEnvelope(p),g.m_a=P.majorSemiAxis,g.m_eSquared=P.e2,g.m_rpu=g.m_gcs.getUnit().getUnitToBaseFactor(),g.m_gcs90=.5*Math.PI/g.m_rpu,g.m_gcs180=Math.PI/g.m_rpu,g.m_gcs360=2*Math.PI/g.m_rpu,g.m_gcs60=g.m_gcs360/6,g.m_q90=o.t.q90(g.m_a,g.m_eSquared),g.m_ellipticToGeodesicMaxRatio=.5*g.m_a*Math.PI/g.m_q90;const b=g.m_gcs.getTolerance(0);g.m_radTolerance=b*g.m_rpu,4===s?(g.m_curveType=2,g.m_bShapePreserving=!0):(g.m_curveType=s,g.m_bShapePreserving=!1),g.m_distance=n,g.m_absDistance=Math.abs(n),Number.isNaN(m)||m<=0?g.setConvergenceOffset():g.m_convergenceOffset=Math.max(m,.001),g.m_convergenceOffset/=c;let x,y=_.getGeometryType();if((0,i.f)(y)){const e=new a.P({vd:_.getDescription()});e.addSegment(_,!0),x=e,y=i.G.enumPolyline}else if(y===i.G.enumEnvelope){const e=_,t=new r.J;e.queryEnvelope(t);const s=(0,h.d)((0,h.a)(g.m_sr,p,!0));if(t.minDimension()<=s)if(0===t.maxDimension()){const t=new h.P({vd:_.getDescription()});e.getCenter(t),x=t,y=i.G.enumPoint}else{const t=new a.P({vd:_.getDescription()});t.addEnvelope(e,!1),x=t,y=i.G.enumPolyline}else{const t=new a.a({vd:_.getDescription()});t.addEnvelope(e,!1),x=t,y=i.G.enumPolygon}}else x=_;if(g.setMinCornerStep(),(0,i.e)(y)||g.setMinSegmentStep(),g.m_absDistance<=.5*g.m_convergenceOffset)return y!==i.G.enumPolygon?new a.a({vd:x.getDescription()}):g.m_bShapePreserving?x:(0,o.u)(x,g.m_sr,g.m_curveType,g.m_segmentStep,-1,l);if(g.m_distance<0&&y!==i.G.enumPolygon)return new a.a({vd:x.getDescription()});if(g.m_bShapePreserving&&(0,i.h)(y)){const e=(0,o.u)(x,t,4,Number.NaN,g.m_convergenceOffset,l);x=(new o.v).execute(e,g.m_transform,l)}else x=(new o.v).execute(x,g.m_transform,l);if(x=(0,o.w)(x,g.m_gcs),x.isEmpty())return new a.a({vd:x.getDescription()});!g.m_bShapePreserving&&(0,i.h)(y)&&(x=(0,o.x)(g.m_rpu,x)),x=function(e,t){const s=e.getGeometryType();let n;if(n=(0,i.h)(s)?e.getPathCount():s===i.G.enumMultiPoint?e.getPointCount():1,1===n)return e;const o=[],m=[];for(let h=0;h<n;h++){o.push(h);const n=new u.P;if((0,i.h)(s)){const t=new r.J;e.queryPathEnvelope(h,t),n.assign(t.getCenter())}else n.assign(e.getXY(h));const a=t.toGeohash(n);m.push(a)}o.sort(((e,t)=>m[e]<m[t]?-1:m[e]>m[t]?1:0));const a=e.createInstance();for(let r=0;r<n;r++){const t=o[r];(0,i.h)(s)?a.addPath(e,t,!0):a.addPoints(e,t,t+1)}return a}(x,g.m_gcs);let w=new a.a;switch(y){case i.G.enumPolygon:w=g.bufferPolygon(x);break;case i.G.enumPolyline:w=g.bufferPolyline(x);break;case i.G.enumMultiPoint:w=g.bufferMultiPoint(x);break;case i.G.enumPoint:w=g.bufferPoint(x);break;default:(0,i.k)("")}const C=(new o.v).execute(w,g.m_transform.getInverse(),l);return C.mergeVertexDescription(x.getDescription()),C}function P(e,t,s,n,i,r,a,h,c,l,_){const f={stack:[],error:void 0,hasError:!1};try{const d=new u.P;d.setNAN(),c||_.getPointCount()>0&&(d.setCoordsPoint2D(_.getXY(_.getPointCount()-1)),d.scale(s));const g=(0,m.b)(f,new o.E,!1),P=(0,m.b)(f,new u.S(new o.E,new o.E),!1),p=new u.P,b=new u.P,y=r.at(-1),w=1/s;for(let s=0;s<r.length;s++){const m=r[s];let u;0===s?u=a:s===r.length-1?u=h:(o.F.geodeticDistance(e,t,y.x,y.y,m.x,m.y,null,null,g,i),u=g.val-.5*Math.PI),o.F.geodesicCoordinate(e,t,m.x,m.y,n,u,P.at(0),P.at(1)),c?b.setCoords(P.at(0).val,P.at(1).val):(p.setCoords(P.at(0).val,P.at(1).val),l=x(m.x,p.x,d.x,l),b.setCoords(l+p.x,p.y),d.setCoordsPoint2D(b)),b.scale(w),_.insertPoint2D(0,-1,b)}return l}catch(d){f.error=d,f.hasError=!0}finally{(0,m.c)(f)}}function p(e,t,s,n,i,r,a,h,c,l,_){let f=arguments.length>11&&void 0!==arguments[11]?arguments[11]:Number.NaN,d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:Number.NaN;const g={stack:[],error:void 0,hasError:!1};try{if(a-r<h)return l;const P=(0,m.b)(g,new u.S(new o.E,new o.E),!1),p=new u.P,b=new u.P,y=new u.P;b.setNAN(),c||_.getPointCount()>0&&(b.setCoordsPoint2D(_.getXY(_.getPointCount()-1)),b.scale(s));let w=Math.ceil(r/h),C=w++*h;C===r&&(C=w++*h);let S=r;const v=1/s;for(;C<a+h&&(S<f&&f<C?(C=f,w--):S<d&&d<C&&(C=d,w--),!(C>=a));)o.F.geodesicCoordinate(e,t,i.x,i.y,n,C,P.at(0),P.at(1)),c?y.setCoords(P.at(0).val,P.at(1).val):(p.setCoords(P.at(0).val,P.at(1).val),l=x(i.x,p.x,b.x,l),y.setCoords(l+p.x,p.y),b.setCoordsPoint2D(y)),y.scale(v),_.insertPoint2D(0,-1,y),S=C,C=w++*h;return l}catch(P){g.error=P,g.hasError=!0}finally{(0,m.c)(g)}}function b(e,t,s,n,i,r,a,h,c,l,_){const f={stack:[],error:void 0,hasError:!1};try{const s=new u.P,d=new u.P,g=(0,m.b)(f,new u.S(new o.E,new o.E),!1);o.F.geodesicCoordinate(e,t,i.x,i.y,n,r,g.at(0),g.at(1)),s.setCoords(g.at(0).val,g.at(1).val),o.F.geodesicCoordinate(e,t,i.x,i.y,n,a,g.at(0),g.at(1)),d.setCoords(g.at(0).val,g.at(1).val);const P=(0,m.b)(f,new o.E,!1);for(o.F.geodeticDistance(e,t,h.x,h.y,s.x,s.y,null,P,null,0),l[0]=P.val,o.F.geodeticDistance(e,t,h.x,h.y,d.x,d.y,null,P,null,0),_[0]=P.val;l[0]<=_[0];)l[0]+=u.k;for(;l[0]>_[0];)l[0]-=u.k;for(;l[0]>=c;)l[0]-=u.k,_[0]-=u.k;for(;l[0]<c;)l[0]+=u.k,_[0]+=u.k}catch(d){f.error=d,f.hasError=!0}finally{(0,m.c)(f)}}function x(e,t,s,n){if(Number.isNaN(s)){for(;n+t-e>Math.PI;)n-=u.k;for(;e-(n+t)>Math.PI;)n+=u.k;return n}return n+t-s>Math.PI?n-=u.k:s-(n+t)>Math.PI&&(n+=u.k),n}function y(e,t,s,n,i,r){const a={stack:[],error:void 0,hasError:!1};try{if(n>=r)return!1;const h=s[0],c=s.at(-1),u=(0,m.b)(a,new o.E,!1),l=(0,m.b)(a,new o.E,!1),_=(0,m.b)(a,new o.E,!1);o.F.greatEllipticDistance(e,t,i.x,i.y,h.x,h.y,u,null,null),o.F.greatEllipticDistance(e,t,i.x,i.y,c.x,c.y,l,null,null),o.F.greatEllipticDistance(e,t,h.x,h.y,c.x,c.y,_,null,null);let f=Math.min(u.val,l.val)+_.val,d=f+n;if(d<r)return!0;const g=(0,m.b)(a,new o.E,!1);f=Math.max(u.val,l.val);for(let n=1;n<s.length-1;n++){const r=s[n];o.F.greatEllipticDistance(e,t,i.x,i.y,r.x,r.y,g,null,null),g.val>f&&(f=g.val)}return d=f+n,d<r}catch(h){a.error=h,a.hasError=!0}finally{(0,m.c)(a)}}function w(e,t,s,n,i,r,m,a){let h;if(n.length%2==0){const e=n.length>>1,t=n[e],s=n[e-1];h=u.P.lerp(t,s,.5)}else h=n[n.length-1>>1].clone();const c=h.clone(),l=(0,o.I)(e,t,c,75/180*Math.PI);return!!y(e,t,n,i,c,l)&&(null!==r&&(r.setCoordsPoint2D(h),r.scale(1/s)),null!==m&&m.setCoordsPoint2D(c),null!==a&&(a[0]=l),!0)}function C(e,t,s,n,i,r){const a={stack:[],error:void 0,hasError:!1};try{if(n>=r)return!1;const h=(0,m.b)(a,new o.E,!1);return o.F.greatEllipticDistance(e,t,i.x,i.y,s.x,s.y,h,null,null),h.val+n<r}catch(h){a.error=h,a.hasError=!0}finally{(0,m.c)(a)}}function S(e,t){return new o.H(e,t)}function v(e){return(0,h.f)(e,0)||(0,h.s)(e,0),e}class D{constructor(e){this.m_bRunningInGnomonic=!1,this.m_bNeedsSimplify=!1,this.m_gnomonic=null,this.m_gnomonicCenterRad=new u.P,this.m_minGnomonicRadius=Number.NaN,this.m_progressTracker=e}isRunningInGnomonic(){return this.m_bRunningInGnomonic}needsSimplify(){return this.m_bNeedsSimplify}getGnomonic(){return this.m_gnomonic}}class I extends D{constructor(e,t,s){super(e.m_progressTracker),this.m_segIter=null,this.m_bNextSegmentCannotJoin=!1,this.m_currentDensifiedDelta=[0],this.m_currentBufferedDelta=0,this.m_lastAzimuth=0,this.m_startAzimuth=[0],this.m_endAzimuth=[0],this.m_numWinds=0,this.m_debugCounter=0,this.m_bufferHelper=new a.a,this.m_densifiedPoints=[],this.m_bufferer=e,this.m_multiPath=t,this.m_densified=s,this.m_bNeedsSimplify=!0;const n=new r.J;this.m_multiPath.queryEnvelope(n);const i=n.getCenter(),m=i.clone();m.scale(this.m_bufferer.m_rpu),this.m_gnomonic=S(this.m_bufferer.m_gcs,i),this.m_gnomonicCenterRad=m.clone(),this.m_minGnomonicRadius=(0,o.I)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,m,75/180*Math.PI)}next(){let e;if(this.m_bNextSegmentCannotJoin)return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),e=this.m_bufferHelper.clone(),e;if(null===this.m_segIter){if(this.m_segIter=this.m_multiPath.getImpl().querySegmentIterator(),!this.m_segIter.nextPath())return null;null!==this.m_densified&&this.m_densified.addPathPoint2D(null,0,!0)}if(!this.m_segIter.hasNextSegment()){if(!this.m_segIter.nextPath())return null;null!=this.m_densified&&this.m_densified.addPathPoint2D(null,0,!0)}let t=null;this.m_currentBufferedDelta=0,this.m_currentDensifiedDelta=[0],this.m_numWinds=0,this.m_lastAzimuth=Number.NaN,this.m_bNextSegmentCannotJoin=!1,this.m_densifiedPoints.length=0;let s=0;const n=new u.P,i=new u.P;for(;this.m_segIter.hasNextSegment()&&this.m_numWinds<16;){const e=this.m_segIter.nextSegment();if(n.setCoordsPoint2D(e.getStartXY()),i.setCoordsPoint2D(e.getEndXY()),n.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),(0,o.J)(n,i))n.x=i.x;else if((0,o.K)(n,i))i.x=n.x;else{let e=-1,t=-1;const s=this.m_segIter.getPathIndex(),r=this.m_multiPath.getPathStart(s),m=this.m_multiPath.getPathEnd(s);if(e=this.m_segIter.getStartPointIndex()-1,t=this.m_segIter.getEndPointIndex()+1,e<r&&(e=this.m_multiPath.isClosedPath(s)?m-1:-1),t>m-1&&(t=this.m_multiPath.isClosedPath(s)?r:-1),-1!==e){const t=this.m_multiPath.getXY(e);t.scale(this.m_bufferer.m_rpu),(0,o.K)(t,n)&&(n.x=t.x)}if(-1!==t){const e=this.m_multiPath.getXY(t);e.scale(this.m_bufferer.m_rpu),(0,o.J)(i,e)&&(i.x=e.x)}}this.m_densifiedPoints.length=0;const r=(0,o.M)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,n,i,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta);if(0===s)this.m_bRunningInGnomonic=this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(this.m_densifiedPoints));else if(this.m_bRunningInGnomonic){if(!this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}}else if(w(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_densifiedPoints,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,null,null,null)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}if(0===r||(0,o.N)(n,i)?(this.m_bufferHelper.setEmpty(),this.m_bufferer.bufferPoint2D(n,this.m_bRunningInGnomonic,this.m_bufferHelper),this.m_bNextSegmentCannotJoin=!0):(this.m_bufferHelper.setEmpty(),this.m_bNextSegmentCannotJoin=this.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(r,this.m_bufferHelper)),this.m_bNextSegmentCannotJoin){this.m_segIter.previousSegment(),this.m_segIter.hasPreviousSegment()?(this.m_segIter.previousSegment(),this.m_segIter.nextSegment()):this.m_segIter.resetToFirstSegment(),null!=this.m_densified&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0);break}null!=this.m_densified&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0),null===t&&(t=new a.a,t.addPathPoint2D(null,0,!0)),this.addJoinAndBufferLeftSide(t),s++}if(this.m_currentDensifiedDelta=[0],s>0){const e=this.m_segIter.getStartPointIndex(),r=this.m_segIter.getPathIndex();for(;s>0;){if(this.m_segIter.previousSegment(),n.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),i.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getEndPointIndex())),n.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic)if((0,o.J)(n,i))n.x=i.x;else if((0,o.K)(n,i))i.x=n.x;else{let e=-1,t=-1;const s=this.m_segIter.getPathIndex(),r=this.m_multiPath.getPathStart(s),m=this.m_multiPath.getPathEnd(s);if(e=this.m_segIter.getStartPointIndex()-1,t=this.m_segIter.getEndPointIndex()+1,e<r&&(e=this.m_multiPath.isClosedPath(s)?m-1:-1),t>m-1&&(t=this.m_multiPath.isClosedPath(s)?r:-1),-1!==e){const t=this.m_multiPath.getXY(e);t.scale(this.m_bufferer.m_rpu),(0,o.K)(t,n)&&(n.x=t.x)}if(-1!==t){const e=this.m_multiPath.getXY(t);e.scale(this.m_bufferer.m_rpu),(0,o.J)(i,e)&&(i.x=e.x)}}this.m_densifiedPoints.length=0,(0,o.M)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,i,n,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta),this.addJoinAndBufferLeftSide(t),s--}return n.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),n.scale(this.m_bufferer.m_rpu),this.m_currentBufferedDelta=p(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,n,this.m_lastAzimuth+.5*Math.PI,this.m_lastAzimuth+1.5*Math.PI,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,t),this.m_segIter.resetToVertex(e,r),this.m_segIter.nextSegment(),t}return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),e=this.m_bufferHelper.clone(),e}isSegmentBufferInCurrentGnomonic(e){return null!==this.m_gnomonic&&y(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){const t=new u.P,s=new u.P,n=[0];return w(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,t,s,n)?(this.m_gnomonicCenterRad.setCoordsPoint2D(s),this.m_minGnomonicRadius=n[0],this.m_gnomonic=S(this.m_bufferer.m_gcs,t),!0):(this.m_gnomonic=null,!1)}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,t){return this.m_bufferer.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(this.m_densifiedPoints,e,this.m_startAzimuth[0],this.m_endAzimuth[0],this.m_bRunningInGnomonic,t)}addJoinAndBufferLeftSide(e){const t=this.m_densifiedPoints[0];let s=Number.NaN,n=this.m_startAzimuth[0]-u.l;const i=this.m_endAzimuth[0]+u.l;let r=!1;if(!Number.isNaN(this.m_lastAzimuth)){this.m_lastAzimuth>=this.m_startAzimuth[0]?(s=this.m_lastAzimuth+u.l,n=s+Math.PI-(this.m_lastAzimuth-this.m_startAzimuth[0])):(s=this.m_lastAzimuth+u.l,n=s+Math.PI-(u.k-(this.m_startAzimuth[0]-this.m_lastAzimuth))),r=!(this.m_lastAzimuth>=this.m_startAzimuth[0]&&this.m_lastAzimuth-this.m_startAzimuth[0]<=Math.PI)&&!(this.m_lastAzimuth<this.m_startAzimuth[0]&&this.m_startAzimuth[0]-this.m_lastAzimuth>=Math.PI);let i=!1;if(Math.abs(n-s)<=.5*this.m_bufferer.m_cornerStep&&(r||(i=!0)),i){if(e.removePointFromPath(0,e.getPointCount()-1),!this.m_bRunningInGnomonic){const t=new u.P;t.setCoordsPoint2D(e.getXY(e.getPointCount()-1)),t.scale(this.m_bufferer.m_rpu),t.x-this.m_currentBufferedDelta<-Math.PI?this.m_currentBufferedDelta-=u.k:t.x-this.m_currentBufferedDelta>Math.PI&&(this.m_currentBufferedDelta+=u.k)}n=.5*(n+s)}else if(r){const s=new u.P;s.setCoordsPoint2D(t),s.scale(1/this.m_bufferer.m_rpu),e.insertPoint2D(0,-1,s)}else p(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_densifiedPoints[0],s,n,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e)}this.m_startAzimuth[0]!==this.m_lastAzimuth&&this.m_numWinds++,P(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_bufferer.m_curveType,this.m_densifiedPoints,n,i,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e),this.m_lastAzimuth=this.m_endAzimuth[0]}}class E extends D{constructor(e,t){super(e.m_progressTracker),this.m_pointIndex=-1,this.m_bufferer=e,this.m_multiPoint=t,this.m_bNeedsSimplify=!1;const s=new r.J;this.m_multiPoint.queryEnvelope(s);const n=s.getCenter(),i=n.clone();i.scale(this.m_bufferer.m_rpu),this.m_gnomonic=S(this.m_bufferer.m_gcs,n),this.m_gnomonicCenterRad=i.clone(),this.m_minGnomonicRadius=(0,o.I)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,i,75/180*Math.PI)}next(){if(this.m_bNeedsSimplify=!1,++this.m_pointIndex===this.m_multiPoint.getPointCount())return null;const e=this.m_multiPoint.getXY(this.m_pointIndex);e.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic=this.isPointBufferInCurrentGnomonic(e),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(e));const t=new a.a,s=this.m_bufferer.bufferPoint2D(e,this.m_bRunningInGnomonic,t);return this.m_bNeedsSimplify=s,t}isPointBufferInCurrentGnomonic(e){return null!==this.m_gnomonic&&C(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){const t=new u.P,s=new u.P,n=[0];return function(e,t,s,n,i,r,m,a){const h=(0,o.I)(e,t,n,75/180*Math.PI);return!!C(e,t,n,i,n,h)&&(null!==r&&(r.setCoordsPoint2D(n),r.scale(1/s)),null!==m&&m.setCoordsPoint2D(n),null!==a&&(a[0]=h),!0)}(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,t,s,n)?(this.m_gnomonicCenterRad.setCoordsPoint2D(s),this.m_minGnomonicRadius=n[0],this.m_gnomonic=S(this.m_bufferer.m_gcs,t),!0):(this.m_gnomonic=null,!1)}}class G{getOperatorType(){return 10110}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,n,i,r,m,a){if(m){const m=new k(e,t,s,n,i,!1,r,a);return(new o.h).executeMany(m,t,a)}return new k(e,t,s,n,i,!1,r,a)}execute(e,t,s,r,o,m,a){const h=new n.S([e]),c=[r],u=this.executeMany(h,t,s,c,o,!1,m,a).next();return u||(0,i.c)("geodesic buffer null output"),u}}class k extends n.G{constructor(e,t,s,n,o,m,a,h){super(),this.m_currentUnionEnvelope2D=new r.J,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=h,m&&(0,i.b)(""),t||(0,i.t)(""),0===t.getCoordinateSystemType()&&(0,i.t)(""),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_curveType=s,this.m_distances=n,this.m_convergenceOffset=o,this.m_bOutlineOnly=m,this.m_bUnion=a}next(){let e;for(;e=this.m_inputGeoms.next();)return(0,i.d)(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.geodesicBuffer(e,this.m_distances[this.m_dindex]);return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodesicBuffer(e,t){return function(e,t,s,n,r,o){n<Number.MAX_VALUE&&n>-Number.MAX_VALUE||(0,i.t)("Geodesic_bufferer.buffer - bad distance"),(0,i.d)(e);const m=(0,_.c)(e),a=m.getGeometryType();if((0,i.i)(a)){const e=m.getPointCount(),h=8e6;if(Math.abs(n)>h&&(e>50||a!==i.G.enumMultiPoint&&4===s&&e>2)){let e=m;const i=n>0?1:-1,a=7e6;let c=n,u=1;do{u++,c=(Math.abs(c)-a)*i}while(Math.abs(c)>h);c=n;for(let n=0;n<u-1;n++)e=g(e,t,s,a*i,r,u,o),c=(Math.abs(c)-a)*i;return e=g(e,t,s,c,r,u,o),e}}return g(m,t,s,n,r,1,o)}(e,this.m_spatialReference,this.m_curveType,t,this.m_convergenceOffset,this.m_progressTracker)}}},21066:(e,t,s)=>{s.d(t,{c:()=>i});var n=s(97799);function i(e,t){const s=e.getGeometryType();return s===n.G.enumPoint?e:(0,n.h)(s)?r(e):s===n.G.enumMultiPoint||s===n.G.enumEnvelope?e:s===n.G.enumMultipatch?((0,n.b)("not implemented for multipatch"),e):e}function r(e){if(function(e){for(let t=0,s=e.getPathCount();t<s;t++){const s=e.getPathSize(t);if(0===s)return!1;if(1===s){if(0===e.getSegmentCountPath(t))return!1;if(e.getSegmentType(e.getPathStart(t))===n.G.enumLine)return!1;if(!e.isClosedPath(t))return!1}}return!0}(e))return e;const t=e.createInstance();for(let s=0,i=e.getPathCount();s<i;s++){const i=e.getPathSize(s);if(0!==i){if(1===i){if(0===e.getSegmentCountPath(s))continue;if(e.getSegmentType(e.getPathStart(s))===n.G.enumLine)continue;if(!e.isClosedPath(s))continue}t.addPath(e,s,!0)}}return t}}}]);
//# sourceMappingURL=1382.02ced90d.chunk.js.map