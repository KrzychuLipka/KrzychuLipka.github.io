"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[3078],{3078:(e,t,r)=>{r.d(t,{isAnimatedGIF:()=>I,parseGif:()=>U});var n,i=r(91417),a={},o={},d={};function s(){if(n)return d;n=1,Object.defineProperty(d,"__esModule",{value:!0}),d.loop=d.conditional=d.parse=void 0;d.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n};d.conditional=function(e,t){return function(r,n,i,a){t(r,n,i)&&a(r,e,n,i)}};return d.loop=function(e,t){return function(r,n,i,a){for(var o=[],d=r.pos;t(r,n,i);){var s={};if(a(r,e,n,s),r.pos===d)break;d=r.pos,o.push(s)}return o}},d}var u,c,f={};function l(){if(u)return f;u=1,Object.defineProperty(f,"__esModule",{value:!0}),f.readBits=f.readArray=f.readUnsigned=f.readString=f.peekBytes=f.readBytes=f.peekByte=f.readByte=f.buildStream=void 0;f.buildStream=function(e){return{data:e,pos:0}};var e=function(){return function(e){return e.data[e.pos++]}};f.readByte=e;f.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var t=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};f.readBytes=t;f.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};f.readString=function(e){return function(r){return Array.from(t(e)(r)).map((function(e){return String.fromCharCode(e)})).join("")}};f.readUnsigned=function(e){return function(r){var n=t(2)(r);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};f.readArray=function(e,r){return function(n,i,a){for(var o="function"==typeof r?r(n,i,a):r,d=t(e),s=new Array(o),u=0;u<o;u++)s[u]=d(n);return s}};return f.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},f}function p(){return c||(c=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=s(),r=l(),n={blocks:function(e){for(var t=[],n=e.data.length,i=0,a=(0,r.readByte)()(e);0!==a&&a;a=(0,r.readByte)()(e)){if(e.pos+a>=n){var o=n-e.pos;t.push((0,r.readBytes)(o)(e)),i+=o;break}t.push((0,r.readBytes)(a)(e)),i+=a}for(var d=new Uint8Array(i),s=0,u=0;u<t.length;u++)d.set(t[u],s),s+=t[u].length;return d}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),a=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),o=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),d=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),c=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([i,d,u,a,o],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=c}(o)),o}var g,y={};function h(){if(g)return y;g=1,Object.defineProperty(y,"__esModule",{value:!0}),y.deinterlace=void 0;return y.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var a=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(a))},a=[0,4,2,1],o=[8,8,4,2],d=0,s=0;s<4;s++)for(var u=a[s];u<n;u+=o[s])i(u,d),d++;return r},y}var m,v,w={};function B(){if(m)return w;m=1,Object.defineProperty(w,"__esModule",{value:!0}),w.lzw=void 0;return w.lzw=function(e,t,r){var n,i,a,o,d,s,u,c,f,l,p,g,y,h,m,v,w=4096,B=r,b=new Array(r),x=new Array(w),k=new Array(w),A=new Array(w+1);for(d=1+(i=1<<(l=e)),n=i+2,u=-1,a=(1<<(o=l+1))-1,c=0;c<i;c++)x[c]=0,k[c]=c;for(p=g=y=h=m=v=0,f=0;f<B;){if(0===h){if(g<o){p+=t[v]<<g,g+=8,v++;continue}if(c=p&a,p>>=o,g-=o,c>n||c==d)break;if(c==i){a=(1<<(o=l+1))-1,n=i+2,u=-1;continue}if(-1==u){A[h++]=k[c],u=c,y=c;continue}for(s=c,c==n&&(A[h++]=y,c=u);c>i;)A[h++]=k[c],c=x[c];y=255&k[c],A[h++]=y,n<w&&(x[n]=u,k[n]=y,!(++n&a)&&n<w&&(o++,a+=n)),u=s}h--,b[m++]=A[h],f++}for(f=m;f<B;f++)b[f]=0;return b},w}var b=function(){if(v)return a;v=1,Object.defineProperty(a,"__esModule",{value:!0}),a.decompressFrames=a.decompressFrame=a.parseGIF=void 0;var e=function(e){return e&&e.__esModule?e:{default:e}}(p()),t=s(),r=l(),n=h(),i=B();a.parseGIF=function(n){var i=new Uint8Array(n);return(0,t.parse)((0,r.buildStream)(i),e.default)};var o=function(e,t,r){if(e.image){var a=e.image,o=a.descriptor.width*a.descriptor.height,d=(0,i.lzw)(a.data.minCodeSize,a.data.blocks,o);a.descriptor.lct.interlaced&&(d=(0,n.deinterlace)(d,a.descriptor.width));var s={pixels:d,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return a.descriptor.lct&&a.descriptor.lct.exists?s.colorTable=a.lct:s.colorTable=t,e.gce&&(s.delay=10*(e.gce.delay||10),s.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(s.transparentIndex=e.gce.transparentColorIndex)),r&&(s.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,a=e.pixels[n],o=e.colorTable[a]||[0,0,0];r[i]=o[0],r[i+1]=o[1],r[i+2]=o[2],r[i+3]=a!==e.transparentIndex?255:0}return r}(s)),s}console.warn("gif frame does not have associated image.")};return a.decompressFrame=o,a.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return o(r,e.gct,t)}))},a}();let x,k,A;async function U(e,t){const r=b.parseGIF(e),n=b.decompressFrames(r,!0),{width:a,height:o}=r.lsd,d=function(e,t){return x??=document.createElement("canvas"),x.width=e,x.height=t,x.getContext("2d",{willReadFrequently:!0})}(a,o),s=[],u=[];let c=0;for(const l of n){const e=(0,i.l5)(l.delay||100);u.push(e),c+=e;const t=(f=new ImageData(l.patch,l.dims.width,l.dims.height),k??=document.createElement("canvas"),A??=k.getContext("2d",{willReadFrequently:!0}),k.width=f.width,k.height=f.height,A.putImageData(f,0,0),k),r=3===l.disposalType?d.getImageData(l.dims.left,l.dims.top,l.dims.width,l.dims.height):void 0;d.drawImage(t,l.dims.left,l.dims.top);const n=d.getImageData(0,0,a,o);s.push(n),1===l.disposalType||(2===l.disposalType?d.clearRect(l.dims.left,l.dims.top,l.dims.width,l.dims.height):3===l.disposalType&&d.putImageData(r,l.dims.left,l.dims.top))}var f;return{frameCount:n.length,duration:c,frameDurations:u,getFrame:e=>s[e],width:a,height:o}}const _=[71,73,70];function I(e){if(!function(e){const t=new Uint8Array(e);return!_.some(((e,r)=>e!==t[r]))}(e))return!1;const t=new DataView(e),r=t.getUint8(10);let n=13+(128&r?3*2**(1+(7&r)):0),i=0,a=!1;for(;!a;){switch(t.getUint8(n++)){case 33:if(!o())return!1;break;case 44:d();break;case 59:a=!0;break;default:return!1}if(i>1)return!0}function o(){switch(t.getUint8(n++)){case 249:n++,n+=4,s();break;case 1:i++,n++,n+=12,s();break;case 254:s();break;case 255:n++,n+=8,n+=3,s();break;default:return!1}return!0}function d(){i++,n+=8;const e=t.getUint8(n++);n+=128&e?3*2**(1+(7&e)):0,n++,s()}function s(){let e;for(;e=t.getUint8(n++);)n+=e}return!1}}}]);
//# sourceMappingURL=3078.6317d1f9.chunk.js.map