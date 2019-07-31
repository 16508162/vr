// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: skin_user01.ggsk
// Generated 周一 7月 29 16:12:32 2019

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['var_ht'] = false;
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._container_base=document.createElement('div');
		this._container_base.ggId="Container base";
		this._container_base.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_base.ggVisible=true;
		this._container_base.className='ggskin ggskin_container ';
		this._container_base.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 94px;';
		hs+='left : 87px;';
		hs+='position : absolute;';
		hs+='top : 75.21%;';
		hs+='visibility : inherit;';
		hs+='width : 391px;';
		hs+='pointer-events:none;';
		this._container_base.setAttribute('style',hs);
		this._container_base.style[domTransform + 'Origin']='50% 50%';
		me._container_base.ggIsActive=function() {
			return false;
		}
		me._container_base.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_base.ggUpdatePosition=function (useTransition) {
		}
		this._image_4=document.createElement('div');
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.ggId="Image 4";
		this._image_4.ggTop=-56;
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image ';
		this._image_4.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 74.93%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_4.setAttribute('style',hs);
		this._image_4.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_4.onclick=function (e) {
			me.player.enterFullscreen();
			me._image_5.style[domTransition]='none';
			me._image_5.style.visibility=(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity)?'inherit':'hidden';
			me._image_5.ggVisible=true;
			me._image_4.style[domTransition]='none';
			me._image_4.style.visibility='hidden';
			me._image_4.ggVisible=false;
		}
		this._image_4.onmouseover=function (e) {
			me._image_4.style[domTransition]='none';
			me._image_4.ggParameter.sx=1.1;me._image_4.ggParameter.sy=1.1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		this._image_4.onmouseout=function (e) {
			me._image_4.style[domTransition]='none';
			me._image_4.ggParameter.sx=1;me._image_4.ggParameter.sy=1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		this._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_4);
		this._image_5=document.createElement('div');
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.ggId="Image 5";
		this._image_5.ggTop=-56;
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_image ';
		this._image_5.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 74.93%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_5.setAttribute('style',hs);
		this._image_5.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_5.onclick=function (e) {
			me.player.exitFullscreen();
			me._image_4.style[domTransition]='none';
			me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
			me._image_4.ggVisible=true;
			me._image_5.style[domTransition]='none';
			me._image_5.style.visibility='hidden';
			me._image_5.ggVisible=false;
		}
		this._image_5.onmouseover=function (e) {
			me._image_5.style[domTransition]='none';
			me._image_5.ggParameter.sx=1.1;me._image_5.ggParameter.sy=1.1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
		}
		this._image_5.onmouseout=function (e) {
			me._image_5.style[domTransition]='none';
			me._image_5.ggParameter.sx=1;me._image_5.ggParameter.sy=1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
		}
		this._image_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_5);
		this._image_131=document.createElement('div');
		this._image_131__img=document.createElement('img');
		this._image_131__img.className='ggskin ggskin_image';
		this._image_131__img.setAttribute('src',basePath + 'images/image_131.png');
		this._image_131__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_131__img.className='ggskin ggskin_image';
		this._image_131__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_131__img);
		this._image_131.appendChild(this._image_131__img);
		this._image_131.ggId="Image 13";
		this._image_131.ggTop=-56;
		this._image_131.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_131.ggVisible=true;
		this._image_131.className='ggskin ggskin_image ';
		this._image_131.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 87.72%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_131.setAttribute('style',hs);
		this._image_131.style[domTransform + 'Origin']='50% 50%';
		me._image_131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_131.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_131.onclick=function (e) {
			me.player.startAutorotate("0.05");
			me._image_14.style[domTransition]='none';
			me._image_14.style.visibility=(Number(me._image_14.style.opacity)>0||!me._image_14.style.opacity)?'inherit':'hidden';
			me._image_14.ggVisible=true;
			me._image_131.style[domTransition]='none';
			me._image_131.style.visibility='hidden';
			me._image_131.ggVisible=false;
		}
		this._image_131.onmouseover=function (e) {
			me._image_131.style[domTransition]='none';
			me._image_131.ggParameter.sx=1.1;me._image_131.ggParameter.sy=1.1;
			me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
		}
		this._image_131.onmouseout=function (e) {
			me._image_131.style[domTransition]='none';
			me._image_131.ggParameter.sx=1;me._image_131.ggParameter.sy=1;
			me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
		}
		this._image_131.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_131);
		this._image_14=document.createElement('div');
		this._image_14__img=document.createElement('img');
		this._image_14__img.className='ggskin ggskin_image';
		this._image_14__img.setAttribute('src',basePath + 'images/image_14.png');
		this._image_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_14__img.className='ggskin ggskin_image';
		this._image_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_14__img);
		this._image_14.appendChild(this._image_14__img);
		this._image_14.ggId="Image 14";
		this._image_14.ggTop=-56;
		this._image_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_14.ggVisible=true;
		this._image_14.className='ggskin ggskin_image ';
		this._image_14.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 87.47%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_14.setAttribute('style',hs);
		this._image_14.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_14.onclick=function (e) {
			me.player.stopAutorotate();
			me._image_131.style[domTransition]='none';
			me._image_131.style.visibility=(Number(me._image_131.style.opacity)>0||!me._image_131.style.opacity)?'inherit':'hidden';
			me._image_131.ggVisible=true;
			me._image_14.style[domTransition]='none';
			me._image_14.style.visibility='hidden';
			me._image_14.ggVisible=false;
		}
		this._image_14.onmouseover=function (e) {
			me._image_14.style[domTransition]='none';
			me._image_14.ggParameter.sx=1.1;me._image_14.ggParameter.sy=1.1;
			me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
		}
		this._image_14.onmouseout=function (e) {
			me._image_14.style[domTransition]='none';
			me._image_14.ggParameter.sx=1;me._image_14.ggParameter.sy=1;
			me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
		}
		this._image_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_14);
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggTop=-30;
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.onmouseover=function (e) {
			me._image_2.style[domTransition]='none';
			me._image_2.ggParameter.sx=1.1;me._image_2.ggParameter.sy=1.1;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
		}
		this._image_2.onmouseout=function (e) {
			me._image_2.style[domTransition]='none';
			me._image_2.ggParameter.sx=1;me._image_2.ggParameter.sy=1;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
			me.elementMouseDown['image_2']=false;
		}
		this._image_2.onmousedown=function (e) {
			me.elementMouseDown['image_2']=true;
		}
		this._image_2.onmouseup=function (e) {
			me.elementMouseDown['image_2']=false;
		}
		this._image_2.ontouchend=function (e) {
			me.elementMouseDown['image_2']=false;
		}
		this._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_2);
		this._image_9=document.createElement('div');
		this._image_9__img=document.createElement('img');
		this._image_9__img.className='ggskin ggskin_image';
		this._image_9__img.setAttribute('src',basePath + 'images/image_9.png');
		this._image_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_9__img.className='ggskin ggskin_image';
		this._image_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_9__img);
		this._image_9.appendChild(this._image_9__img);
		this._image_9.ggId="Image 9";
		this._image_9.ggTop=-56;
		this._image_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_9.ggVisible=true;
		this._image_9.className='ggskin ggskin_image ';
		this._image_9.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 11.47%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_9.setAttribute('style',hs);
		this._image_9.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_9.onmouseover=function (e) {
			me._image_9.style[domTransition]='none';
			me._image_9.ggParameter.sx=1.1;me._image_9.ggParameter.sy=1.1;
			me._image_9.style[domTransform]=parameterToTransform(me._image_9.ggParameter);
		}
		this._image_9.onmouseout=function (e) {
			me._image_9.style[domTransition]='none';
			me._image_9.ggParameter.sx=1;me._image_9.ggParameter.sy=1;
			me._image_9.style[domTransform]=parameterToTransform(me._image_9.ggParameter);
			me.elementMouseDown['image_9']=false;
		}
		this._image_9.onmousedown=function (e) {
			me.elementMouseDown['image_9']=true;
		}
		this._image_9.onmouseup=function (e) {
			me.elementMouseDown['image_9']=false;
		}
		this._image_9.ontouchend=function (e) {
			me.elementMouseDown['image_9']=false;
		}
		this._image_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_9);
		this._image_12=document.createElement('div');
		this._image_12__img=document.createElement('img');
		this._image_12__img.className='ggskin ggskin_image';
		this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
		this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_12__img.className='ggskin ggskin_image';
		this._image_12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_12__img);
		this._image_12.appendChild(this._image_12__img);
		this._image_12.ggId="Image 12";
		this._image_12.ggTop=-56;
		this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_12.ggVisible=true;
		this._image_12.className='ggskin ggskin_image ';
		this._image_12.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 35.04%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_12.setAttribute('style',hs);
		this._image_12.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_12.onmouseover=function (e) {
			me._image_12.style[domTransition]='none';
			me._image_12.ggParameter.sx=1.1;me._image_12.ggParameter.sy=1.1;
			me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
		}
		this._image_12.onmouseout=function (e) {
			me._image_12.style[domTransition]='none';
			me._image_12.ggParameter.sx=1;me._image_12.ggParameter.sy=1;
			me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
			me.elementMouseDown['image_12']=false;
		}
		this._image_12.onmousedown=function (e) {
			me.elementMouseDown['image_12']=true;
		}
		this._image_12.onmouseup=function (e) {
			me.elementMouseDown['image_12']=false;
		}
		this._image_12.ontouchend=function (e) {
			me.elementMouseDown['image_12']=false;
		}
		this._image_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_12);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggTop=-56;
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 49.1%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_1.onmouseover=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.sx=1.1;me._image_1.ggParameter.sy=1.1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		this._image_1.onmouseout=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			me.elementMouseDown['image_1']=false;
		}
		this._image_1.onmousedown=function (e) {
			me.elementMouseDown['image_1']=true;
		}
		this._image_1.onmouseup=function (e) {
			me.elementMouseDown['image_1']=false;
		}
		this._image_1.ontouchend=function (e) {
			me.elementMouseDown['image_1']=false;
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_1);
		this._image_15=document.createElement('div');
		this._image_15__img=document.createElement('img');
		this._image_15__img.className='ggskin ggskin_image';
		this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
		this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_15__img.className='ggskin ggskin_image';
		this._image_15__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_15__img);
		this._image_15.appendChild(this._image_15__img);
		this._image_15.ggId="Image 15";
		this._image_15.ggTop=-56;
		this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_15.ggVisible=true;
		this._image_15.className='ggskin ggskin_image ';
		this._image_15.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 62.15%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_15.setAttribute('style',hs);
		this._image_15.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_15.onmouseover=function (e) {
			me._image_15.style[domTransition]='none';
			me._image_15.ggParameter.sx=1.1;me._image_15.ggParameter.sy=1.1;
			me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
		}
		this._image_15.onmouseout=function (e) {
			me._image_15.style[domTransition]='none';
			me._image_15.ggParameter.sx=1;me._image_15.ggParameter.sy=1;
			me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
			me.elementMouseDown['image_15']=false;
		}
		this._image_15.onmousedown=function (e) {
			me.elementMouseDown['image_15']=true;
		}
		this._image_15.onmouseup=function (e) {
			me.elementMouseDown['image_15']=false;
		}
		this._image_15.ontouchend=function (e) {
			me.elementMouseDown['image_15']=false;
		}
		this._image_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_15);
		this._image_10=document.createElement('div');
		this._image_10__img=document.createElement('img');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
		this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_10__img);
		this._image_10.appendChild(this._image_10__img);
		this._image_10.ggId="Image 10";
		this._image_10.ggTop=-56;
		this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_10.ggVisible=true;
		this._image_10.className='ggskin ggskin_image ';
		this._image_10.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 100.26%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_10.setAttribute('style',hs);
		this._image_10.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_10.onclick=function (e) {
			me.player.pauseSound("Element01");
			me._image_11.style[domTransition]='none';
			me._image_11.style.visibility=(Number(me._image_11.style.opacity)>0||!me._image_11.style.opacity)?'inherit':'hidden';
			me._image_11.ggVisible=true;
			me._image_10.style[domTransition]='none';
			me._image_10.style.visibility='hidden';
			me._image_10.ggVisible=false;
		}
		this._image_10.onmouseover=function (e) {
			me._image_10.style[domTransition]='none';
			me._image_10.ggParameter.sx=1.1;me._image_10.ggParameter.sy=1.1;
			me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
		}
		this._image_10.onmouseout=function (e) {
			me._image_10.style[domTransition]='none';
			me._image_10.ggParameter.sx=1;me._image_10.ggParameter.sy=1;
			me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
		}
		this._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_10);
		this._image_11=document.createElement('div');
		this._image_11__img=document.createElement('img');
		this._image_11__img.className='ggskin ggskin_image';
		this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
		this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_11__img.className='ggskin ggskin_image';
		this._image_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_11__img);
		this._image_11.appendChild(this._image_11__img);
		this._image_11.ggId="Image 11";
		this._image_11.ggTop=-56;
		this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_11.ggVisible=true;
		this._image_11.className='ggskin ggskin_image ';
		this._image_11.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 100.25%;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_11.setAttribute('style',hs);
		this._image_11.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_11.onclick=function (e) {
			me.player.playSound("Element01","1");
			me._image_10.style[domTransition]='none';
			me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
			me._image_10.ggVisible=true;
			me._image_11.style[domTransition]='none';
			me._image_11.style.visibility='hidden';
			me._image_11.ggVisible=false;
		}
		this._image_11.onmouseover=function (e) {
			me._image_11.style[domTransition]='none';
			me._image_11.ggParameter.sx=1.1;me._image_11.ggParameter.sy=1.1;
			me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
		}
		this._image_11.onmouseout=function (e) {
			me._image_11.style[domTransition]='none';
			me._image_11.ggParameter.sx=1;me._image_11.ggParameter.sy=1;
			me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
		}
		this._image_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_11);
		this._image_16=document.createElement('div');
		this._image_16__img=document.createElement('img');
		this._image_16__img.className='ggskin ggskin_image';
		this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
		this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_16__img.className='ggskin ggskin_image';
		this._image_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_16__img);
		this._image_16.appendChild(this._image_16__img);
		this._image_16.ggId="Image 16";
		this._image_16.ggTop=-84;
		this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_16.ggVisible=true;
		this._image_16.className='ggskin ggskin_image ';
		this._image_16.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='top : -84px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_16.setAttribute('style',hs);
		this._image_16.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_16.onmouseover=function (e) {
			me._image_16.style[domTransition]='none';
			me._image_16.ggParameter.sx=1.1;me._image_16.ggParameter.sy=1.1;
			me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
		}
		this._image_16.onmouseout=function (e) {
			me._image_16.style[domTransition]='none';
			me._image_16.ggParameter.sx=1;me._image_16.ggParameter.sy=1;
			me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			me.elementMouseDown['image_16']=false;
		}
		this._image_16.onmousedown=function (e) {
			me.elementMouseDown['image_16']=true;
		}
		this._image_16.onmouseup=function (e) {
			me.elementMouseDown['image_16']=false;
		}
		this._image_16.ontouchend=function (e) {
			me.elementMouseDown['image_16']=false;
		}
		this._image_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._container_base.appendChild(this._image_16);
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image ';
		this._image_3.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 440px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function (e) {
			me.player.openUrl("ycbwg_vr01#"+me.ggUserdata.customnodeid+".html","_self");
		}
		this._image_3.ggUpdatePosition=function (useTransition) {
		}
		this._container_base.appendChild(this._image_3);
		this.divSkin.appendChild(this._container_base);
		this._timer_1=document.createElement('div');
		this._timer_1.ggTimestamp=this.ggCurrentTime;
		this._timer_1.ggLastIsActive=true;
		this._timer_1.ggTimeout=750;
		this._timer_1.ggId="Timer 1";
		this._timer_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._timer_1.ggVisible=false;
		this._timer_1.className='ggskin ggskin_timer ';
		this._timer_1.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._timer_1.setAttribute('style',hs);
		this._timer_1.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		me._timer_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._timer_1.ggActivate=function () {
			ggSkinVars['var_ht'] = true;
		}
		this._timer_1.ggDeactivate=function () {
			ggSkinVars['var_ht'] = false;
		}
		this._timer_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._timer_1);
		this._container_dtht=document.createElement('div');
		this._container_dtht.ggId="Container dtht";
		this._container_dtht.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_dtht.ggVisible=true;
		this._container_dtht.className='ggskin ggskin_container ';
		this._container_dtht.ggType='container';
		hs ='';
		hs+='height : 429px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 540px;';
		hs+='pointer-events:none;';
		this._container_dtht.setAttribute('style',hs);
		this._container_dtht.style[domTransform + 'Origin']='50% 50%';
		me._container_dtht.ggIsActive=function() {
			return false;
		}
		me._container_dtht.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_dtht.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._container_dtht);
		this._container_ad=document.createElement('div');
		this._container_ad.ggId="Container ad";
		this._container_ad.ggLeft=-373;
		this._container_ad.ggTop=-340;
		this._container_ad.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_ad.ggVisible=true;
		this._container_ad.className='ggskin ggskin_container ';
		this._container_ad.ggType='container';
		hs ='';
		hs+='height : 151px;';
		hs+='left : -373px;';
		hs+='position : absolute;';
		hs+='top : -340px;';
		hs+='visibility : inherit;';
		hs+='width : 247px;';
		hs+='pointer-events:none;';
		this._container_ad.setAttribute('style',hs);
		this._container_ad.style[domTransform + 'Origin']='100% 100%';
		me._container_ad.ggIsActive=function() {
			return false;
		}
		me._container_ad.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_ad.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._image_8=document.createElement('div');
		this._image_8__img=document.createElement('img');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
		this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_8__img);
		this._image_8.appendChild(this._image_8__img);
		this._image_8.ggId="Image 8";
		this._image_8.ggLeft=-315;
		this._image_8.ggTop=-147;
		this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_8.ggVisible=true;
		this._image_8.className='ggskin ggskin_image ';
		this._image_8.ggType='image';
		hs ='';
		hs+='height : 321px;';
		hs+='left : -315px;';
		hs+='position : absolute;';
		hs+='top : -147px;';
		hs+='visibility : inherit;';
		hs+='width : 409px;';
		hs+='pointer-events:auto;';
		this._image_8.setAttribute('style',hs);
		this._image_8.style[domTransform + 'Origin']='100% 100%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_10=document.createElement('div');
		this._marker_10.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._marker_10);
		this._marker_10.ggId="Marker 1";
		this._marker_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_10.ggVisible=true;
		this._marker_10.className='ggskin ggskin_mark ';
		this._marker_10.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 88px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_10.setAttribute('style',hs);
		this._marker_10.style[domTransform + 'Origin']='50% 50%';
		me._marker_10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_10.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_10.onclick=function (e) {
			me.player.openNext('{node2}');
		}
		this._marker_10.ggActivate=function () {
			me._image_130.style[domTransition]='none';
			me._image_130.style.visibility=(Number(me._image_130.style.opacity)>0||!me._image_130.style.opacity)?'inherit':'hidden';
			me._image_130.ggVisible=true;
		}
		this._marker_10.ggDeactivate=function () {
			me._image_130.style[domTransition]='none';
			me._image_130.style.visibility='hidden';
			me._image_130.ggVisible=false;
		}
		this._marker_10.ggUpdateConditionNodeChange=function () {
				me._marker_10__normal.ggNodeChangeMain();
				me._marker_10__active.ggNodeChangeMain();
		}
		this._marker_10.ggUpdatePosition=function (useTransition) {
		}
		this._marker_10.ggNodeChange=function () {
			me._marker_10.ggUpdateConditionNodeChange();
		}
		this._image_130=document.createElement('div');
		this._image_130__img=document.createElement('img');
		this._image_130__img.className='ggskin ggskin_image';
		this._image_130__img.setAttribute('src',basePath + 'images/image_130.png');
		this._image_130__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_130__img.className='ggskin ggskin_image';
		this._image_130__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_130__img);
		this._image_130.appendChild(this._image_130__img);
		this._image_130.ggId="Image 13";
		this._image_130.ggLeft=-39;
		this._image_130.ggTop=-52;
		this._image_130.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_130.ggVisible=false;
		this._image_130.className='ggskin ggskin_image ';
		this._image_130.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -39px;';
		hs+='position : absolute;';
		hs+='top : -52px;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		this._image_130.setAttribute('style',hs);
		this._image_130.style[domTransform + 'Origin']='50% 100%';
		me._image_130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_130.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_130.ggDeactivate=function () {
			me._image_130.style[domTransition]='none';
			me._image_130.style.visibility='hidden';
			me._image_130.ggVisible=false;
		}
		this._image_130.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_10.appendChild(this._image_130);
		this._image_8.appendChild(this._marker_10);
		this._marker_1=document.createElement('div');
		this._marker_1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_1);
		this._marker_1.ggId="Marker 1";
		this._marker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1.ggVisible=true;
		this._marker_1.className='ggskin ggskin_mark ';
		this._marker_1.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_1.setAttribute('style',hs);
		this._marker_1.style[domTransform + 'Origin']='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_1.onclick=function (e) {
			me.player.openNext('{node1}');
		}
		this._marker_1.ggActivate=function () {
			me._image_13.style[domTransition]='none';
			me._image_13.style.visibility=(Number(me._image_13.style.opacity)>0||!me._image_13.style.opacity)?'inherit':'hidden';
			me._image_13.ggVisible=true;
		}
		this._marker_1.ggDeactivate=function () {
			me._image_13.style[domTransition]='none';
			me._image_13.style.visibility='hidden';
			me._image_13.ggVisible=false;
		}
		this._marker_1.ggUpdateConditionNodeChange=function () {
				me._marker_1__normal.ggNodeChangeMain();
				me._marker_1__active.ggNodeChangeMain();
		}
		this._marker_1.ggUpdatePosition=function (useTransition) {
		}
		this._marker_1.ggNodeChange=function () {
			me._marker_1.ggUpdateConditionNodeChange();
		}
		this._image_13=document.createElement('div');
		this._image_13__img=document.createElement('img');
		this._image_13__img.className='ggskin ggskin_image';
		this._image_13__img.setAttribute('src',basePath + 'images/image_13.png');
		this._image_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_13__img.className='ggskin ggskin_image';
		this._image_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_13__img);
		this._image_13.appendChild(this._image_13__img);
		this._image_13.ggId="Image 13";
		this._image_13.ggLeft=-39;
		this._image_13.ggTop=-52;
		this._image_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_13.ggVisible=false;
		this._image_13.className='ggskin ggskin_image ';
		this._image_13.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -39px;';
		hs+='position : absolute;';
		hs+='top : -52px;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		this._image_13.setAttribute('style',hs);
		this._image_13.style[domTransform + 'Origin']='50% 100%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_13.ggDeactivate=function () {
			me._image_13.style[domTransition]='none';
			me._image_13.style.visibility='hidden';
			me._image_13.ggVisible=false;
		}
		this._image_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_1.appendChild(this._image_13);
		this._image_8.appendChild(this._marker_1);
		this._container_ad.appendChild(this._image_8);
		this.divSkin.appendChild(this._container_ad);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_pic_inf_bg=document.createElement('div');
		this._rectangle_pic_inf_bg.ggId="Rectangle_pic_inf_bg";
		this._rectangle_pic_inf_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_pic_inf_bg.ggVisible=false;
		this._rectangle_pic_inf_bg.className='ggskin ggskin_rectangle ';
		this._rectangle_pic_inf_bg.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._rectangle_pic_inf_bg.setAttribute('style',hs);
		this._rectangle_pic_inf_bg.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_pic_inf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_pic_inf_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_pic_inf_bg.onclick=function (e) {
			me._rectangle_pic_inf_bg.style[domTransition]='none';
			me._rectangle_pic_inf_bg.style.visibility='hidden';
			me._rectangle_pic_inf_bg.ggVisible=false;
			me._external_picture_inf.style[domTransition]='none';
			me._external_picture_inf.style.visibility='hidden';
			me._external_picture_inf.ggVisible=false;
		}
		this._rectangle_pic_inf_bg.ggUpdatePosition=function (useTransition) {
		}
		this._container_1.appendChild(this._rectangle_pic_inf_bg);
		this._external_picture_inf=document.createElement('div');
		this._external_picture_inf__img=document.createElement('img');
		this._external_picture_inf__img.className='ggskin ggskin_external';
		this._external_picture_inf__img.onload=function() {me._external_picture_inf.ggUpdatePosition();}
		this._external_picture_inf__img.setAttribute('src',basePath + '');
		this._external_picture_inf__img['ondragstart']=function() { return false; };
		hs ='';
		this._external_picture_inf.appendChild(this._external_picture_inf__img);
		this._external_picture_inf.ggId="External picture_inf";
		this._external_picture_inf.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._external_picture_inf.ggVisible=false;
		this._external_picture_inf.className='ggskin ggskin_external ';
		this._external_picture_inf.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._external_picture_inf.setAttribute('style',hs);
		this._external_picture_inf.style[domTransform + 'Origin']='50% 50%';
		me._external_picture_inf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._external_picture_inf.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._external_picture_inf.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_picture_inf.clientWidth;
			var parentHeight = me._external_picture_inf.clientHeight;
			var aspectRatioDiv = me._external_picture_inf.clientWidth / me._external_picture_inf.clientHeight;
			var aspectRatioImg = me._external_picture_inf__img.naturalWidth / me._external_picture_inf__img.naturalHeight;
			if (me._external_picture_inf__img.naturalWidth < parentWidth) parentWidth = me._external_picture_inf__img.naturalWidth;
			if (me._external_picture_inf__img.naturalHeight < parentHeight) parentHeight = me._external_picture_inf__img.naturalHeight;
			var currentWidth = me._external_picture_inf__img.naturalWidth;
			var currentHeight = me._external_picture_inf__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._external_picture_inf__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._external_picture_inf__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._container_1.appendChild(this._external_picture_inf);
		this.divSkin.appendChild(this._container_1);
		me._image_4.style[domTransition]='none';
		me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
		me._image_4.ggVisible=true;
		me._image_5.style[domTransition]='none';
		me._image_5.style.visibility='hidden';
		me._image_5.ggVisible=false;
		me._image_131.style[domTransition]='none';
		me._image_131.style.visibility=(Number(me._image_131.style.opacity)>0||!me._image_131.style.opacity)?'inherit':'hidden';
		me._image_131.ggVisible=true;
		me._image_14.style[domTransition]='none';
		me._image_14.style.visibility='hidden';
		me._image_14.ggVisible=false;
		me._image_10.style[domTransition]='none';
		me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
		me._image_10.ggVisible=true;
		me._image_11.style[domTransition]='none';
		me._image_11.style.visibility='hidden';
		me._image_11.ggVisible=false;
		this._marker_10__normal=new SkinElement_image_ad_1_Class(this,this._marker_10);
		this._marker_10__normal.style.visibility='inherit';
		this._marker_10__normal.style.left='0px';
		this._marker_10__normal.style.top='0px';
		this._marker_10.ggMarkerNormal=this._marker_10__normal;
		this._marker_10__active=new SkinElement_image_ad_2_Class(this,this._marker_10);
		this._marker_10__active.style.visibility='hidden';
		this._marker_10__active.style.left='0px';
		this._marker_10__active.style.top='0px';
		this._marker_10.ggMarkerActive=this._marker_10__active;
		if (this._marker_10.firstChild) {
			this._marker_10.insertBefore(this._marker_10__active,this._marker_10.firstChild);
		} else {
			this._marker_10.appendChild(this._marker_10__active);
		}
		if (this._marker_10.firstChild) {
			this._marker_10.insertBefore(this._marker_10__normal,this._marker_10.firstChild);
		} else {
			this._marker_10.appendChild(this._marker_10__normal);
		}
		this._marker_1__normal=new SkinElement_image_ad_1_Class(this,this._marker_1);
		this._marker_1__normal.style.visibility='inherit';
		this._marker_1__normal.style.left='0px';
		this._marker_1__normal.style.top='0px';
		this._marker_1.ggMarkerNormal=this._marker_1__normal;
		this._marker_1__active=new SkinElement_image_ad_2_Class(this,this._marker_1);
		this._marker_1__active.style.visibility='hidden';
		this._marker_1__active.style.left='0px';
		this._marker_1__active.style.top='0px';
		this._marker_1.ggMarkerActive=this._marker_1__active;
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__active,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__active);
		}
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__normal,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._marker_10.ggNodeChange();
		me._marker_1.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['image_2']) {
			me.player.changeTiltLog(-0.04,true);
		}
		if (me.elementMouseDown['image_9']) {
			me.player.changePanLog(0.04,true);
		}
		if (me.elementMouseDown['image_12']) {
			me.player.changePanLog(-0.04,true);
		}
		if (me.elementMouseDown['image_1']) {
			me.player.changeFovLog(-0.08,true);
		}
		if (me.elementMouseDown['image_15']) {
			me.player.changeFovLog(0.08,true);
		}
		if (me.elementMouseDown['image_16']) {
			me.player.changeTiltLog(0.04,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				ggSkinVars['var_ht'] = true;
			} else {
				ggSkinVars['var_ht'] = false;
			}
		}
		var hs='';
		if (me._image_130.ggParameter) {
			hs+=parameterToTransform(me._image_130.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_130.style[domTransform]=hs;
		var hs='';
		if (me._image_13.ggParameter) {
			hs+=parameterToTransform(me._image_13.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_13.style[domTransform]=hs;
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Hotspot 53') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 53";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 158px;';
			hs+='position : absolute;';
			hs+='top : 346px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_12_1=document.createElement('div');
			this._image_12_1__img=document.createElement('img');
			this._image_12_1__img.className='ggskin ggskin_image';
			this._image_12_1__img.setAttribute('src',basePath + 'images/image_12_1.png');
			this._image_12_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_12_1__img.className='ggskin ggskin_image';
			this._image_12_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_12_1__img);
			this._image_12_1.appendChild(this._image_12_1__img);
			this._image_12_1.ggId="Image 12_1";
			this._image_12_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_12_1.ggVisible=true;
			this._image_12_1.className='ggskin ggskin_image ';
			this._image_12_1.ggType='image';
			hs ='';
			hs+='height : 40px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -21px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._image_12_1.setAttribute('style',hs);
			this._image_12_1.style[domTransform + 'Origin']='0% 0%';
			me._image_12_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_12_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._image_12_1.ggCurrentLogicStateScaling = -1;
			this._image_12_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._image_12_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._image_12_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._image_12_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_12_1.ggCurrentLogicStateScaling == 0) {
						me._image_12_1.ggParameter.sx = 0.9;
						me._image_12_1.ggParameter.sy = 0.9;
						me._image_12_1.style[domTransform]=parameterToTransform(me._image_12_1.ggParameter);
					}
					else {
						me._image_12_1.ggParameter.sx = 1;
						me._image_12_1.ggParameter.sy = 1;
						me._image_12_1.style[domTransform]=parameterToTransform(me._image_12_1.ggParameter);
					}
				}
			}
			this._image_12_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_12_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._image_12_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hotspot 44') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 44";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 159px;';
			hs+='position : absolute;';
			hs+='top : 256px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_9_1=document.createElement('div');
			this._image_9_1__img=document.createElement('img');
			this._image_9_1__img.className='ggskin ggskin_image';
			this._image_9_1__img.setAttribute('src',basePath + 'images/image_9_1.png');
			this._image_9_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_9_1__img.className='ggskin ggskin_image';
			this._image_9_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_9_1__img);
			this._image_9_1.appendChild(this._image_9_1__img);
			this._image_9_1.ggId="Image 9_1";
			this._image_9_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_9_1.ggVisible=true;
			this._image_9_1.className='ggskin ggskin_image ';
			this._image_9_1.ggType='image';
			hs ='';
			hs+='height : 46px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -24px;';
			hs+='visibility : inherit;';
			hs+='width : 46px;';
			hs+='pointer-events:auto;';
			this._image_9_1.setAttribute('style',hs);
			this._image_9_1.style[domTransform + 'Origin']='50% 50%';
			me._image_9_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_9_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._image_9_1.ggCurrentLogicStateScaling = -1;
			this._image_9_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._image_9_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._image_9_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._image_9_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_9_1.ggCurrentLogicStateScaling == 0) {
						me._image_9_1.ggParameter.sx = 0.8;
						me._image_9_1.ggParameter.sy = 0.8;
						me._image_9_1.style[domTransform]=parameterToTransform(me._image_9_1.ggParameter);
					}
					else {
						me._image_9_1.ggParameter.sx = 1;
						me._image_9_1.ggParameter.sy = 1;
						me._image_9_1.style[domTransform]=parameterToTransform(me._image_9_1.ggParameter);
					}
				}
			}
			this._image_9_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_9_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._image_9_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hotspot 43') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 43";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 41px;';
			hs+='position : absolute;';
			hs+='top : 255px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_8_1=document.createElement('div');
			this._image_8_1__img=document.createElement('img');
			this._image_8_1__img.className='ggskin ggskin_image';
			this._image_8_1__img.setAttribute('src',basePath + 'images/image_8_1.png');
			this._image_8_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_8_1__img.className='ggskin ggskin_image';
			this._image_8_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_8_1__img);
			this._image_8_1.appendChild(this._image_8_1__img);
			this._image_8_1.ggId="Image 8_1";
			this._image_8_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_8_1.ggVisible=true;
			this._image_8_1.className='ggskin ggskin_image ';
			this._image_8_1.ggType='image';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 46px;';
			hs+='pointer-events:auto;';
			this._image_8_1.setAttribute('style',hs);
			this._image_8_1.style[domTransform + 'Origin']='50% 50%';
			me._image_8_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_8_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._image_8_1.ggCurrentLogicStateScaling = -1;
			this._image_8_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._image_8_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._image_8_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._image_8_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_8_1.ggCurrentLogicStateScaling == 0) {
						me._image_8_1.ggParameter.sx = 0.8;
						me._image_8_1.ggParameter.sy = 0.8;
						me._image_8_1.style[domTransform]=parameterToTransform(me._image_8_1.ggParameter);
					}
					else {
						me._image_8_1.ggParameter.sx = 1;
						me._image_8_1.ggParameter.sy = 1;
						me._image_8_1.style[domTransform]=parameterToTransform(me._image_8_1.ggParameter);
					}
				}
			}
			this._image_8_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_8_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._image_8_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hotspot 12') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 166px;';
			hs+='position : absolute;';
			hs+='top : 31px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._rectangle_20=document.createElement('div');
			this._rectangle_20.ggId="Rectangle 2";
			this._rectangle_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_20.ggVisible=true;
			this._rectangle_20.className='ggskin ggskin_rectangle ';
			this._rectangle_20.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 99px;';
			hs+='border-radius : 99px;';
			hs+='background : rgba(255,255,255,0.627451);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			hs+='pointer-events:auto;';
			this._rectangle_20.setAttribute('style',hs);
			this._rectangle_20.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_20.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_20.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_20.ggCurrentLogicStateScaling = -1;
			this._rectangle_20.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
						me._rectangle_20.ggParameter.sx = 0.75;
						me._rectangle_20.ggParameter.sy = 0.75;
						me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
					}
					else {
						me._rectangle_20.ggParameter.sx = 1;
						me._rectangle_20.ggParameter.sy = 1;
						me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
					}
				}
			}
			this._rectangle_20.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._rectangle_20);
			this._rectangle_10=document.createElement('div');
			this._rectangle_10.ggId="Rectangle 1";
			this._rectangle_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_10.ggVisible=true;
			this._rectangle_10.className='ggskin ggskin_rectangle ';
			this._rectangle_10.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 99px;';
			hs+='border-radius : 99px;';
			hs+='background : #ffffff;';
			hs+='border : 0px solid #ffffff;';
			hs+='cursor : default;';
			hs+='height : 26px;';
			hs+='left : -12px;';
			hs+='position : absolute;';
			hs+='top : -13px;';
			hs+='visibility : inherit;';
			hs+='width : 26px;';
			hs+='pointer-events:auto;';
			this._rectangle_10.setAttribute('style',hs);
			this._rectangle_10.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_10.ggCurrentLogicStateScaling = -1;
			this._rectangle_10.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
						me._rectangle_10.ggParameter.sx = 1.25;
						me._rectangle_10.ggParameter.sy = 1.25;
						me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
					}
					else {
						me._rectangle_10.ggParameter.sx = 1;
						me._rectangle_10.ggParameter.sy = 1;
						me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
					}
				}
			}
			this._rectangle_10.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._rectangle_10);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._rectangle_20.ggUpdateConditionTimer();
				me._rectangle_10.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hotspot 11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot 11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 55px;';
			hs+='position : absolute;';
			hs+='top : 30px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._rectangle_3=document.createElement('div');
			this._rectangle_3.ggId="Rectangle 3";
			this._rectangle_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_3.ggVisible=true;
			this._rectangle_3.className='ggskin ggskin_rectangle ';
			this._rectangle_3.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 99px;';
			hs+='border-radius : 99px;';
			hs+='background : #ffffff;';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 9px;';
			hs+='left : -4px;';
			hs+='position : absolute;';
			hs+='top : -4px;';
			hs+='visibility : inherit;';
			hs+='width : 9px;';
			hs+='pointer-events:auto;';
			this._rectangle_3.setAttribute('style',hs);
			this._rectangle_3.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._rectangle_3.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._rectangle_3);
			this._rectangle_2=document.createElement('div');
			this._rectangle_2.ggId="Rectangle 2";
			this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_2.ggVisible=true;
			this._rectangle_2.className='ggskin ggskin_rectangle ';
			this._rectangle_2.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 99px;';
			hs+='border-radius : 99px;';
			hs+='border : 2px solid #ffffff;';
			hs+='cursor : default;';
			hs+='height : 27px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 27px;';
			hs+='pointer-events:auto;';
			this._rectangle_2.setAttribute('style',hs);
			this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_2.ggCurrentLogicStateScaling = -1;
			this._rectangle_2.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
						me._rectangle_2.ggParameter.sx = 1.5;
						me._rectangle_2.ggParameter.sy = 1.5;
						me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
					}
					else {
						me._rectangle_2.ggParameter.sx = 1;
						me._rectangle_2.ggParameter.sy = 1;
						me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
					}
				}
			}
			this._rectangle_2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._rectangle_2);
			this._rectangle_1=document.createElement('div');
			this._rectangle_1.ggId="Rectangle 1";
			this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_1.ggVisible=true;
			this._rectangle_1.className='ggskin ggskin_rectangle ';
			this._rectangle_1.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 99px;';
			hs+='border-radius : 99px;';
			hs+='border : 3px solid #ffffff;';
			hs+='cursor : default;';
			hs+='height : 57px;';
			hs+='left : -31px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 57px;';
			hs+='pointer-events:auto;';
			this._rectangle_1.setAttribute('style',hs);
			this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_1.ggCurrentLogicStateScaling = -1;
			this._rectangle_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
						me._rectangle_1.ggParameter.sx = 0.75;
						me._rectangle_1.ggParameter.sy = 0.75;
						me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
					}
					else {
						me._rectangle_1.ggParameter.sx = 1;
						me._rectangle_1.ggParameter.sy = 1;
						me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
					}
				}
			}
			this._rectangle_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._rectangle_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._rectangle_2.ggUpdateConditionTimer();
				me._rectangle_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 48px;';
			hs+='position : absolute;';
			hs+='top : 347px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_11_1=document.createElement('div');
			this._image_11_1__img=document.createElement('img');
			this._image_11_1__img.className='ggskin ggskin_image';
			this._image_11_1__img.setAttribute('src',basePath + 'images/image_11_1.png');
			this._image_11_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_11_1__img.className='ggskin ggskin_image';
			this._image_11_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_11_1__img);
			this._image_11_1.appendChild(this._image_11_1__img);
			this._image_11_1.ggId="Image 11_1";
			this._image_11_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_11_1.ggVisible=true;
			this._image_11_1.className='ggskin ggskin_image ';
			this._image_11_1.ggType='image';
			hs ='';
			hs+='height : 34px;';
			hs+='left : -14px;';
			hs+='position : absolute;';
			hs+='top : -13px;';
			hs+='visibility : inherit;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._image_11_1.setAttribute('style',hs);
			this._image_11_1.style[domTransform + 'Origin']='0% 0%';
			me._image_11_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_11_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._image_11_1.ggCurrentLogicStateScaling = -1;
			this._image_11_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._image_11_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._image_11_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._image_11_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_11_1.ggCurrentLogicStateScaling == 0) {
						me._image_11_1.ggParameter.sx = 0.9;
						me._image_11_1.ggParameter.sy = 0.9;
						me._image_11_1.style[domTransform]=parameterToTransform(me._image_11_1.ggParameter);
					}
					else {
						me._image_11_1.ggParameter.sx = 1;
						me._image_11_1.ggParameter.sy = 1;
						me._image_11_1.style[domTransform]=parameterToTransform(me._image_11_1.ggParameter);
					}
				}
			}
			this._image_11_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_11_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._image_11_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 42px;';
			hs+='position : absolute;';
			hs+='top : 122px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_1_1=document.createElement('div');
			this._image_1_1__img=document.createElement('img');
			this._image_1_1__img.className='ggskin ggskin_image';
			this._image_1_1__img.setAttribute('src',basePath + 'images/image_1_1.png');
			this._image_1_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1_1__img.className='ggskin ggskin_image';
			this._image_1_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1_1__img);
			this._image_1_1.appendChild(this._image_1_1__img);
			this._image_1_1.ggId="Image 1_1";
			this._image_1_1.ggLeft=-28;
			this._image_1_1.ggTop=-15;
			this._image_1_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_1_1.ggVisible=true;
			this._image_1_1.className='ggskin ggskin_image ';
			this._image_1_1.ggType='image';
			hs ='';
			hs+='height : 28px;';
			hs+='left : -28px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 54px;';
			hs+='pointer-events:auto;';
			this._image_1_1.setAttribute('style',hs);
			this._image_1_1.style[domTransform + 'Origin']='50% 50%';
			me._image_1_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._image_1_1.ggCurrentLogicStatePosition = -1;
			me._image_1_1.ggCurrentLogicStateScaling = -1;
			this._image_1_1.ggUpdateConditionResize=function () {
				var newLogicStateScaling;
				if (
					(me.player.getViewerSize().width == 0)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._image_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._image_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._image_1_1.style[domTransition]='left 750ms ease 0ms, top 750ms ease 0ms, ' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_1_1.ggCurrentLogicStateScaling == 0) {
						me._image_1_1.ggParameter.sx = 0.8;
						me._image_1_1.ggParameter.sy = 0.8;
						me._image_1_1.style[domTransform]=parameterToTransform(me._image_1_1.ggParameter);
					}
					else {
						me._image_1_1.ggParameter.sx = 1;
						me._image_1_1.ggParameter.sy = 1;
						me._image_1_1.style[domTransform]=parameterToTransform(me._image_1_1.ggParameter);
					}
				}
			}
			this._image_1_1.ggUpdateConditionTimer=function () {
				var newLogicStatePosition;
				if (
					(ggSkinVars['var_ht'] == true)
				)
				{
					newLogicStatePosition = 0;
				}
				else {
					newLogicStatePosition = -1;
				}
				if (me._image_1_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
					me._image_1_1.ggCurrentLogicStatePosition = newLogicStatePosition;
					me._image_1_1.style[domTransition]='left 750ms ease 0ms, top 750ms ease 0ms, ' + cssPrefix + 'transform 750ms ease 0ms';
					if (me._image_1_1.ggCurrentLogicStatePosition == 0) {
						me._image_1_1.ggLeft=-28;
						me._image_1_1.ggTop=-25;
						me._image_1_1.ggUpdatePosition(true);
					}
					else {
						me._image_1_1.ggLeft=-28;
						me._image_1_1.ggTop=-15;
						me._image_1_1.ggUpdatePosition(true);
					}
				}
			}
			this._image_1_1.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				me._image_1_1.ggUpdateConditionResize();
			}
			this.__div.appendChild(this._image_1_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._image_1_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot_Picture";
			this.__div.ggLeft=-1;
			this.__div.ggTop=2;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -1px;';
			hs+='position : absolute;';
			hs+='top : 2px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._external_picture_inf.style[domTransition]='none';
				me.skin._external_picture_inf.style.visibility=(Number(me.skin._external_picture_inf.style.opacity)>0||!me.skin._external_picture_inf.style.opacity)?'inherit':'hidden';
				me.skin._external_picture_inf.ggVisible=true;
				me.skin._external_picture_inf.ggText=me.hotspot.url;
				me.skin._external_picture_inf__img.src=me.skin._external_picture_inf.ggText;
				me.skin._rectangle_pic_inf_bg.style[domTransition]='none';
				me.skin._rectangle_pic_inf_bg.style.visibility=(Number(me.skin._rectangle_pic_inf_bg.style.opacity)>0||!me.skin._rectangle_pic_inf_bg.style.opacity)?'inherit':'hidden';
				me.skin._rectangle_pic_inf_bg.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._image_6=document.createElement('div');
			this._image_6__img=document.createElement('img');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
			this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_6__img);
			this._image_6.appendChild(this._image_6__img);
			this._image_6.ggId="Image 6";
			this._image_6.ggLeft=-21;
			this._image_6.ggTop=-24;
			this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_6.ggVisible=true;
			this._image_6.className='ggskin ggskin_image ';
			this._image_6.ggType='image';
			hs ='';
			hs+='height : 40px;';
			hs+='left : -21px;';
			hs+='position : absolute;';
			hs+='top : -24px;';
			hs+='visibility : inherit;';
			hs+='width : 40px;';
			hs+='pointer-events:auto;';
			this._image_6.setAttribute('style',hs);
			this._image_6.style[domTransform + 'Origin']='50% 50%';
			me._image_6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_6.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._image_6);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_image_ad_1_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._image_ad_1=document.createElement('div');
		this._image_ad_1__img=document.createElement('img');
		this._image_ad_1__img.className='ggskin ggskin_image';
		this._image_ad_1__img.setAttribute('src',basePath + 'images/image_ad_1.png');
		this._image_ad_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_ad_1__img.className='ggskin ggskin_image';
		this._image_ad_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_ad_1__img);
		this._image_ad_1.appendChild(this._image_ad_1__img);
		this._image_ad_1.ggId="Image ad_1";
		this._image_ad_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_ad_1.ggVisible=false;
		this._image_ad_1.className='ggskin ggskin_image ';
		this._image_ad_1.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -215px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._image_ad_1.setAttribute('style',hs);
		this._image_ad_1.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_ad_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_ad_1.ggUpdatePosition=function (useTransition) {
		}
		this._image_ad_1.ggNodeChangeMain=function() {
		}
		return this._image_ad_1;
	};
	function SkinElement_image_ad_2_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._image_ad_2=document.createElement('div');
		this._image_ad_2__img=document.createElement('img');
		this._image_ad_2__img.className='ggskin ggskin_image';
		this._image_ad_2__img.setAttribute('src',basePath + 'images/image_ad_2.png');
		this._image_ad_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_ad_2__img.className='ggskin ggskin_image';
		this._image_ad_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_ad_2__img);
		this._image_ad_2.appendChild(this._image_ad_2__img);
		this._image_ad_2.ggId="Image ad_2";
		this._image_ad_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_ad_2.ggVisible=false;
		this._image_ad_2.className='ggskin ggskin_image ';
		this._image_ad_2.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -61px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._image_ad_2.setAttribute('style',hs);
		this._image_ad_2.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_ad_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_ad_2.ggUpdatePosition=function (useTransition) {
		}
		this._image_ad_2.ggNodeChangeMain=function() {
		}
		return this._image_ad_2;
	};
	this.addSkin();
};