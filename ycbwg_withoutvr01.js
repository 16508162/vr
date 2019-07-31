// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: skin_user01.ggsk
// Generated 2019-07-31T21:50:35

function pano2vrSkin(player,base) {
	player.addVariable('var_ht', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
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
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
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
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
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
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=750;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('var_ht', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('var_ht', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._container_dtht=document.createElement('div');
		el.ggId="Container dtht";
		el.ggDx=-13;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 429px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 540px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_dtht.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_dtht.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._container_dtht);
		el=me._container_ad=document.createElement('div');
		el.ggId="Container ad";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 189px;';
		hs+='height : 151px;';
		hs+='position : absolute;';
		hs+='right : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 247px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._container_ad.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_ad.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_ad.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_ad.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_ad.style[domTransition]='';
				if (me._container_ad.ggCurrentLogicStateVisible == 0) {
					me._container_ad.style.visibility="hidden";
					me._container_ad.ggVisible=false;
				}
				else {
					me._container_ad.style.visibility=(Number(me._container_ad.style.opacity)>0||!me._container_ad.style.opacity)?'inherit':'hidden';
					me._container_ad.ggVisible=true;
				}
			}
		}
		me._container_ad.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs=basePath + 'images/image_8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -183px;';
		hs+='height : 185.43%;';
		hs+='position : absolute;';
		hs+='right : -119px;';
		hs+='visibility : inherit;';
		hs+='width : 134.008%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_10=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_10.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_10.ggActivate=function () {
			me._image_133.style[domTransition]='none';
			me._image_133.style.visibility=(Number(me._image_133.style.opacity)>0||!me._image_133.style.opacity)?'inherit':'hidden';
			me._image_133.ggVisible=true;
		}
		me._marker_10.ggDeactivate=function () {
			me._image_133.style[domTransition]='none';
			me._image_133.style.visibility='hidden';
			me._image_133.ggVisible=false;
		}
		me._marker_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_133=document.createElement('div');
		els=me._image_133__img=document.createElement('img');
		els.className='ggskin ggskin_image_133';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABFCAYAAADDw1E2AAAFfklEQVR4nO3c2Y8UVRTH8c80M8MuICIiihEEFVyiosEYjYk8+uCb/gn+U74oGoxG4xKVKCi4vhjiFnEDkW1kERAYNmF8OFXQzcwwvVRVV/X0LyFddHd13fneU+eee+rcO/DSmlUqpgGMTXBcKdW63YAJVN+muXXHS5LPZuJ2LMAgluJm0QkzcANm1Z03lGdj29VgtxtQp5twRkBbiRHcmby/D7cJ2IexCHPwD/7DQlzCweR1cfLZbgH+cvL+SPJ9uny3DBTsaur/2KUCznqcxXIB9yjWCFDncGPy/VEBGy5gODlOoaaWfVrcFUPJ7x4VHTon+Y09yXsj4o46k/wrVEVa/FxhbesF8CcEiKXCklOwy0TnDLgK2jXHw3XHNY3uaV7d8WzhluCi6Ix7RO'+
			'fsxXnRATOwP2lXIZ1QBPi7hOU9lbw+IKz0WmD1YAdyaEe9r5+HdaKDjyfXWyUM41ccEe4tN+UBflhY1/3Cyh8UfnuBq66mLGPLgKuubK7onOWiA3aJu+A34doyVdYAVgjIG5LXW8UfUX+dPKw5C6Xua55o4+PiDj2MncnrwawulhX4FaLBG4W1L83hGkWp3jBm4w4Ryl7At2Js2KfDiKgTKLMF5I3CjdzbSUNKrtliDHoSd+MQvhPR0bl2frBd8IvEoLlC+PJeV3oXDOMWEXnNF6HpAY3zg6bUKvj5ovefEwPRkhbP7wWlzFaKidoKfC3ugsuadEGtgF8pBssNGmPl6aphYXiLRZriZ+H/DzRz8lTg0/DvUawVt9is654x/VQTk7RlAvpPohNOXe+k64GviQHlITxjfFjYV6MGRQSU5pR24oRIZ4xzP5OBnJH8yDo8'+
			'MsV3+2pUTczOZ+IHMQm7dO2XJoI5iIdF2FS5ZH0JNCCCkPViVrxLuJ+GHNC14IfwtMgOTseIJWulkc9CMfk6ln5QD34Iz2K1xoRVX51pPu4T7vsTMem8An4IzwvXUtZcSlVVE+HmY8L6P8OhQRGPviBui77y04CY7Y9hWw0v6kMvUqsxWsO/Wswz9NWRtuNkDW/J+WlLX1e0FZ8Sjv+0cPh7utig6aCt+Dz9T01k1PZiswj0+8peDdBpfNh8Ht+I9GZf2WkcdMZXku3D6/hef8DNQhNCZ+ISvhOSID/HBk0HTQqdyWsnj2MLftG3/HZ0XehMDn5MpDPfxh8ZN6rXNSV0pq4WPoevZFhP0uNqCjrNlWnvxSYx4F7uoFG9rqah03x9/Ci+1B9wJ1NL0GltYcLfeE9Msi62cpEeV8vQaX1FyAg+xF+tXqhH1RZ02luKM4'+
			'od+vDbhk574NPczib82O6FK66OoNPZ4rMLonRtpJMGVFAdQ6fzVX8H8IaoH5kOA24m0MlmueUxbNP7lp8ZdLJb53oSH+N3vTnJyhQ62YG/LKKcN8XirV5S5tDJfmX3Ob014OYCnXyW1O/FqyK3M65Ys0LKDTr57WVwCl+oruXnCp18N5E4gg9EkX6VHqbkDp18wY+JOP99/JnjdbJUIdApZtuUUeF2mlob1EUVBp1iwI8Ji39ZeXM7hUKn2I2CzovHiGUbcAuHTvE7NB0UtZplye10BTrd2RrrsEgvdNvndw063duT7LRIrO3Wne2pugqd7oFPczubRZxfpLoOne7vwpc+TCmqeqEU0Ok+eIorlC0NdMoBniiU3SG/ULNU0CkPeOJJ1kdiJXSWll866JQLfFoo+46IdrJQKaFTLvCpzopywU4LZUsLnXKCJx6mvCIG'+
			'3Hbi/FJDp7zgCctvJ9QsPXTKDZ6A/q7IajaT26kEdMoPnggxt5h6EXRloFMN8MQmO9tN/iSrUtCpDvi0UPY14x+mVA461QGf6oLGRdCVhE41N3jbLyrW1qoodPgfe5JTZP9aG3QAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._image_133.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_133.ggDeactivate=function () {
			me._image_133.style[domTransition]='none';
			me._image_133.style.visibility='hidden';
			me._image_133.ggVisible=false;
		}
		me._image_133.ggUpdatePosition=function (useTransition) {
		}
		me._image_133.ggNodeChange=function () {
			if (me._image_133.ggLastIsActive!=me._image_133.ggIsActive()) {
				me._image_133.ggLastIsActive=me._image_133.ggIsActive();
				if (me._image_133.ggIsActive()) {
					if (me._image_133.ggActivate) me._image_133.ggActivate();
				} else {
					if (me._image_133.ggDeactivate) me._image_133.ggDeactivate();
				}
			}
		}
		me._marker_10.appendChild(me._image_133);
		me._image_8.appendChild(me._marker_10);
		el=me._marker_1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._marker_1.ggActivate=function () {
			me._image_132.style[domTransition]='none';
			me._image_132.style.visibility=(Number(me._image_132.style.opacity)>0||!me._image_132.style.opacity)?'inherit':'hidden';
			me._image_132.ggVisible=true;
		}
		me._marker_1.ggDeactivate=function () {
			me._image_132.style[domTransition]='none';
			me._image_132.style.visibility='hidden';
			me._image_132.ggVisible=false;
		}
		me._marker_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_132=document.createElement('div');
		els=me._image_132__img=document.createElement('img');
		els.className='ggskin ggskin_image_132';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABFCAYAAADDw1E2AAAFfklEQVR4nO3c2Y8UVRTH8c80M8MuICIiihEEFVyiosEYjYk8+uCb/gn+U74oGoxG4xKVKCi4vhjiFnEDkW1kERAYNmF8OFXQzcwwvVRVV/X0LyFddHd13fneU+eee+rcO/DSmlUqpgGMTXBcKdW63YAJVN+muXXHS5LPZuJ2LMAgluJm0QkzcANm1Z03lGdj29VgtxtQp5twRkBbiRHcmby/D7cJ2IexCHPwD/7DQlzCweR1cfLZbgH+cvL+SPJ9uny3DBTsaur/2KUCznqcxXIB9yjWCFDncGPy/VEBGy5gODlOoaaWfVrcFUPJ7x4VHTon+Y09yXsj4o46k/wrVEVa/FxhbesF8CcEiKXCklOwy0TnDLgK2jXHw3XHNY3uaV7d8WzhluCi6Ix7RO'+
			'fsxXnRATOwP2lXIZ1QBPi7hOU9lbw+IKz0WmD1YAdyaEe9r5+HdaKDjyfXWyUM41ccEe4tN+UBflhY1/3Cyh8UfnuBq66mLGPLgKuubK7onOWiA3aJu+A34doyVdYAVgjIG5LXW8UfUX+dPKw5C6Xua55o4+PiDj2MncnrwawulhX4FaLBG4W1L83hGkWp3jBm4w4Ryl7At2Js2KfDiKgTKLMF5I3CjdzbSUNKrtliDHoSd+MQvhPR0bl2frBd8IvEoLlC+PJeV3oXDOMWEXnNF6HpAY3zg6bUKvj5ovefEwPRkhbP7wWlzFaKidoKfC3ugsuadEGtgF8pBssNGmPl6aphYXiLRZriZ+H/DzRz8lTg0/DvUawVt9is654x/VQTk7RlAvpPohNOXe+k64GviQHlITxjfFjYV6MGRQSU5pR24oRIZ4xzP5OBnJH8yDo8'+
			'MsV3+2pUTczOZ+IHMQm7dO2XJoI5iIdF2FS5ZH0JNCCCkPViVrxLuJ+GHNC14IfwtMgOTseIJWulkc9CMfk6ln5QD34Iz2K1xoRVX51pPu4T7vsTMem8An4IzwvXUtZcSlVVE+HmY8L6P8OhQRGPviBui77y04CY7Y9hWw0v6kMvUqsxWsO/Wswz9NWRtuNkDW/J+WlLX1e0FZ8Sjv+0cPh7utig6aCt+Dz9T01k1PZiswj0+8peDdBpfNh8Ht+I9GZf2WkcdMZXku3D6/hef8DNQhNCZ+ISvhOSID/HBk0HTQqdyWsnj2MLftG3/HZ0XehMDn5MpDPfxh8ZN6rXNSV0pq4WPoevZFhP0uNqCjrNlWnvxSYx4F7uoFG9rqah03x9/Ci+1B9wJ1NL0GltYcLfeE9Msi62cpEeV8vQaX1FyAg+xF+tXqhH1RZ02luKM4'+
			'od+vDbhk574NPczib82O6FK66OoNPZ4rMLonRtpJMGVFAdQ6fzVX8H8IaoH5kOA24m0MlmueUxbNP7lp8ZdLJb53oSH+N3vTnJyhQ62YG/LKKcN8XirV5S5tDJfmX3Ob014OYCnXyW1O/FqyK3M65Ys0LKDTr57WVwCl+oruXnCp18N5E4gg9EkX6VHqbkDp18wY+JOP99/JnjdbJUIdApZtuUUeF2mlob1EUVBp1iwI8Ji39ZeXM7hUKn2I2CzovHiGUbcAuHTvE7NB0UtZplye10BTrd2RrrsEgvdNvndw063duT7LRIrO3Wne2pugqd7oFPczubRZxfpLoOne7vwpc+TCmqeqEU0Ok+eIorlC0NdMoBniiU3SG/ULNU0CkPeOJJ1kdiJXSWll866JQLfFoo+46IdrJQKaFTLvCpzopywU4LZUsLnXKCJx6mvCIG'+
			'3Hbi/FJDp7zgCctvJ9QsPXTKDZ6A/q7IajaT26kEdMoPnggxt5h6EXRloFMN8MQmO9tN/iSrUtCpDvi0UPY14x+mVA461QGf6oLGRdCVhE41N3jbLyrW1qoodPgfe5JTZP9aG3QAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 4px;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -42px;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._image_132.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_132.ggDeactivate=function () {
			me._image_132.style[domTransition]='none';
			me._image_132.style.visibility='hidden';
			me._image_132.ggVisible=false;
		}
		me._image_132.ggUpdatePosition=function (useTransition) {
		}
		me._image_132.ggNodeChange=function () {
			if (me._image_132.ggLastIsActive!=me._image_132.ggIsActive()) {
				me._image_132.ggLastIsActive=me._image_132.ggIsActive();
				if (me._image_132.ggIsActive()) {
					if (me._image_132.ggActivate) me._image_132.ggActivate();
				} else {
					if (me._image_132.ggDeactivate) me._image_132.ggDeactivate();
				}
			}
		}
		me._marker_1.appendChild(me._image_132);
		me._image_8.appendChild(me._marker_1);
		me._container_ad.appendChild(me._image_8);
		me.divSkin.appendChild(me._container_ad);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_1.style[domTransition]='';
				if (me._container_1.ggCurrentLogicStateVisible == 0) {
					me._container_1.style.visibility="hidden";
					me._container_1.ggVisible=false;
				}
				else {
					me._container_1.style.visibility=(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity)?'inherit':'hidden';
					me._container_1.ggVisible=true;
				}
			}
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_pic_inf_bg=document.createElement('div');
		el.ggId="Rectangle_pic_inf_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_pic_inf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_pic_inf_bg.onclick=function (e) {
			me._rectangle_pic_inf_bg.style[domTransition]='none';
			me._rectangle_pic_inf_bg.style.visibility='hidden';
			me._rectangle_pic_inf_bg.ggVisible=false;
			me._external_picture_inf.ggSubElement.src='';
			me._external_picture_inf.style[domTransition]='none';
			me._external_picture_inf.style.visibility='hidden';
			me._external_picture_inf.ggVisible=false;
		}
		me._rectangle_pic_inf_bg.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_pic_inf_bg);
		el=me._external_picture_inf=document.createElement('div');
		me._external_picture_inf__img=document.createElement('img');
		me._external_picture_inf__img.className='ggskin ggskin_external';
		me._external_picture_inf__img.onload=function() {me._external_picture_inf.ggUpdatePosition();}
		me._external_picture_inf.ggText=basePath + '';
		me._external_picture_inf__img.setAttribute('src', me._external_picture_inf.ggText);
		me._external_picture_inf__img['ondragstart']=function() { return false; };
		hs ='';
		me._external_picture_inf.appendChild(me._external_picture_inf__img);
		me._external_picture_inf.ggSubElement = me._external_picture_inf__img;
		el.ggId="External picture_inf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_picture_inf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_picture_inf.ggUpdatePosition=function (useTransition) {
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
			me._external_picture_inf__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._external_picture_inf__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._container_1.appendChild(me._external_picture_inf);
		me.divSkin.appendChild(me._container_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_2.style[domTransition]='';
				if (me._container_2.ggCurrentLogicStateVisible == 0) {
					me._container_2.style.visibility="hidden";
					me._container_2.ggVisible=false;
				}
				else {
					me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
					me._container_2.ggVisible=true;
				}
			}
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #262626;';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.onclick=function (e) {
			me._rectangle_4.style[domTransition]='none';
			me._rectangle_4.style.visibility='hidden';
			me._rectangle_4.ggVisible=false;
			me._external_1.ggSubElement.src='';
			me._external_1.style[domTransition]='none';
			me._external_1.style.visibility='hidden';
			me._external_1.ggVisible=false;
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='hidden';
			me._text_1.ggVisible=false;
			me._text_2.style[domTransition]='none';
			me._text_2.style.visibility='hidden';
			me._text_2.ggVisible=false;
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._rectangle_4);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60%;';
		hs+='left : 6.72%;';
		hs+='position : absolute;';
		hs+='top : 22.71%;';
		hs+='visibility : hidden;';
		hs+='width : 21.0938%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(223,96,46,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="  \u8fd9\u662f\u4e00\u5e45\u5927\u578b\u78e8\u6f06\u58c1\u753b\u300a\u795e\u5dde\u4e07\u91cc\u884c\u300b\uff0c\u5c55\u73b0\u4e86\u7956\u56fd\u5404\u5730\u7684\u540d\u80dc\u53e4\u8ff9\u548c\u58ee\u4e3d\u6cb3\u5c71\u3002\u5185\u5bb9\u4e3b\u8981\u53d6\u7528\u4e2d\u56fd\u5404\u7701\u5e02\u533a\u98ce\u666f\u540d\u80dc\u827a\u672f\u8868\u73b0\u5f62\u5f0f\u4e3a\u78e8\u6f06\u88c5\u9970\u753b\uff0c\u957f28\u7c73\uff0c\u9ad82.8\u7c73\u3002\u78e8\u6f06\u58c1\u753b\u662f\u6211\u56fd\u4e00\u79cd\u4f20\u7edf\u7684\u88c5\u9970\u5de5\u827a\u753b\uff0c\u5b83\u91c7\u7528\u86cb\u58f3\u3001\u8d1d\u58f3\u3001\u91d1\u7b94\u7b49\u591a\u79cd\u6750\u6599\uff0c\u901a\u8fc730\u591a\u9053\u6f06\u3001\u78e8\u5de5\u827a\u5236\u4f5c\u800c\u6210\uff0c\u6709\u51f9\u51f8\u7684\u7acb\u4f53\u7f8e\u611f\uff0c\u800c\u4e14\u4e0d\u4f1a\u892a\u8272\u3002\u8fd9\u662f\u672c\u9986\u827a\u672f\u73cd\u85cf\u548c\u9648\u5217\u5c55\u793a\u7684\u4e00\u4e2a\u4eae\u70b9\u3002";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._text_2);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 6.72%;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : hidden;';
		hs+='width : 111px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 111px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(244,163,0,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u56fe\u7247\u70ed\u70b9";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._text_1);
		el=me._external_1=document.createElement('div');
		me._external_1__img=document.createElement('img');
		me._external_1__img.className='ggskin ggskin_external';
		me._external_1__img.onload=function() {me._external_1.ggUpdatePosition();}
		me._external_1.ggText='file:///F:/Krpano/project/3、publish-yanan/data/content/zooms/bg/61.jpg';
		me._external_1__img.setAttribute('src', me._external_1.ggText);
		me._external_1__img['ondragstart']=function() { return false; };
		player.checkLoaded.push(me._external_1__img);
		hs ='';
		me._external_1.appendChild(me._external_1__img);
		me._external_1.ggSubElement = me._external_1__img;
		el.ggId="External 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30%;';
		hs+='left : 30%;';
		hs+='position : absolute;';
		hs+='top : 35%;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = me._external_1__img.naturalWidth / me._external_1__img.naturalHeight;
			if (me._external_1__img.naturalWidth < parentWidth) parentWidth = me._external_1__img.naturalWidth;
			if (me._external_1__img.naturalHeight < parentHeight) parentHeight = me._external_1__img.naturalHeight;
			var currentWidth = me._external_1__img.naturalWidth;
			var currentHeight = me._external_1__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._external_1__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._external_1__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._container_2.appendChild(me._external_1);
		me.divSkin.appendChild(me._container_2);
		el=me._container_base=document.createElement('div');
		el.ggId="Container base";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 94px;';
		hs+='left : 77px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 391px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_base.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_base.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_base.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_base.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_base.style[domTransition]='';
				if (me._container_base.ggCurrentLogicStateVisible == 0) {
					me._container_base.style.visibility="hidden";
					me._container_base.ggVisible=false;
				}
				else {
					me._container_base.style.visibility=(Number(me._container_base.style.opacity)>0||!me._container_base.style.opacity)?'inherit':'hidden';
					me._container_base.ggVisible=true;
				}
			}
		}
		me._container_base.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 11.25%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.enterFullscreen();
			me._image_5.style[domTransition]='none';
			me._image_5.style.visibility=(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity)?'inherit':'hidden';
			me._image_5.ggVisible=true;
			me._image_4.style[domTransition]='none';
			me._image_4.style.visibility='hidden';
			me._image_4.ggVisible=false;
		}
		me._image_4.onmouseover=function (e) {
			me._image_4.style[domTransition]='none';
			me._image_4.ggParameter.sx=1.1;me._image_4.ggParameter.sy=1.1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		me._image_4.onmouseout=function (e) {
			me._image_4.style[domTransition]='none';
			me._image_4.ggParameter.sx=1;me._image_4.ggParameter.sy=1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 11.25%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.exitFullscreen();
			me._image_4.style[domTransition]='none';
			me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
			me._image_4.ggVisible=true;
			me._image_5.style[domTransition]='none';
			me._image_5.style.visibility='hidden';
			me._image_5.ggVisible=false;
		}
		me._image_5.onmouseover=function (e) {
			me._image_5.style[domTransition]='none';
			me._image_5.ggParameter.sx=1.1;me._image_5.ggParameter.sy=1.1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
		}
		me._image_5.onmouseout=function (e) {
			me._image_5.style[domTransition]='none';
			me._image_5.ggParameter.sx=1;me._image_5.ggParameter.sy=1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_5);
		el=me._image_131=document.createElement('div');
		els=me._image_131__img=document.createElement('img');
		els.className='ggskin ggskin_image_131';
		hs=basePath + 'images/image_131.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 24.04%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_131.onclick=function (e) {
			player.startAutorotate("0.05");
			me._image_14.style[domTransition]='none';
			me._image_14.style.visibility=(Number(me._image_14.style.opacity)>0||!me._image_14.style.opacity)?'inherit':'hidden';
			me._image_14.ggVisible=true;
			me._image_131.style[domTransition]='none';
			me._image_131.style.visibility='hidden';
			me._image_131.ggVisible=false;
		}
		me._image_131.onmouseover=function (e) {
			me._image_131.style[domTransition]='none';
			me._image_131.ggParameter.sx=1.1;me._image_131.ggParameter.sy=1.1;
			me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
		}
		me._image_131.onmouseout=function (e) {
			me._image_131.style[domTransition]='none';
			me._image_131.ggParameter.sx=1;me._image_131.ggParameter.sy=1;
			me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
		}
		me._image_131.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_131);
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs=basePath + 'images/image_14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 23.53%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14.onclick=function (e) {
			player.stopAutorotate();
			me._image_131.style[domTransition]='none';
			me._image_131.style.visibility=(Number(me._image_131.style.opacity)>0||!me._image_131.style.opacity)?'inherit':'hidden';
			me._image_131.ggVisible=true;
			me._image_14.style[domTransition]='none';
			me._image_14.style.visibility='hidden';
			me._image_14.ggVisible=false;
		}
		me._image_14.onmouseover=function (e) {
			me._image_14.style[domTransition]='none';
			me._image_14.ggParameter.sx=1.1;me._image_14.ggParameter.sy=1.1;
			me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
		}
		me._image_14.onmouseout=function (e) {
			me._image_14.style[domTransition]='none';
			me._image_14.ggParameter.sx=1;me._image_14.ggParameter.sy=1;
			me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_14);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -14.28%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.onmouseover=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.sx=1.1;me._image_1.ggParameter.sy=1.1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		me._image_1.onmouseout=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			me.elementMouseDown['image_1']=false;
		}
		me._image_1.onmousedown=function (e) {
			me.elementMouseDown['image_1']=true;
		}
		me._image_1.onmouseup=function (e) {
			me.elementMouseDown['image_1']=false;
		}
		me._image_1.ontouchend=function (e) {
			me.elementMouseDown['image_1']=false;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_1);
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs=basePath + 'images/image_15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -1.72%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.onmouseover=function (e) {
			me._image_15.style[domTransition]='none';
			me._image_15.ggParameter.sx=1.1;me._image_15.ggParameter.sy=1.1;
			me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
		}
		me._image_15.onmouseout=function (e) {
			me._image_15.style[domTransition]='none';
			me._image_15.ggParameter.sx=1;me._image_15.ggParameter.sy=1;
			me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
			me.elementMouseDown['image_15']=false;
		}
		me._image_15.onmousedown=function (e) {
			me.elementMouseDown['image_15']=true;
		}
		me._image_15.onmouseup=function (e) {
			me.elementMouseDown['image_15']=false;
		}
		me._image_15.ontouchend=function (e) {
			me.elementMouseDown['image_15']=false;
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_15);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 36.83%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.onclick=function (e) {
			player.pauseSound("Element01");
			me._image_11.style[domTransition]='none';
			me._image_11.style.visibility=(Number(me._image_11.style.opacity)>0||!me._image_11.style.opacity)?'inherit':'hidden';
			me._image_11.ggVisible=true;
			me._image_10.style[domTransition]='none';
			me._image_10.style.visibility='hidden';
			me._image_10.ggVisible=false;
		}
		me._image_10.onmouseover=function (e) {
			me._image_10.style[domTransition]='none';
			me._image_10.ggParameter.sx=1.1;me._image_10.ggParameter.sy=1.1;
			me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
		}
		me._image_10.onmouseout=function (e) {
			me._image_10.style[domTransition]='none';
			me._image_10.ggParameter.sx=1;me._image_10.ggParameter.sy=1;
			me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_10);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 36.57%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.onclick=function (e) {
			player.playSound("Element01","1");
			me._image_10.style[domTransition]='none';
			me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
			me._image_10.ggVisible=true;
			me._image_11.style[domTransition]='none';
			me._image_11.style.visibility='hidden';
			me._image_11.ggVisible=false;
		}
		me._image_11.onmouseover=function (e) {
			me._image_11.style[domTransition]='none';
			me._image_11.ggParameter.sx=1.1;me._image_11.ggParameter.sy=1.1;
			me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
		}
		me._image_11.onmouseout=function (e) {
			me._image_11.style[domTransition]='none';
			me._image_11.ggParameter.sx=1;me._image_11.ggParameter.sy=1;
			me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_11);
		el=me._image_3_exitvr=document.createElement('div');
		els=me._image_3_exitvr__img=document.createElement('img');
		els.className='ggskin ggskin_image_3_exitvr';
		hs=basePath + 'images/image_3_exitvr.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3_exitvr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 58.91%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3_exitvr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3_exitvr.onclick=function (e) {
			player.openUrl("ycbwg_withoutvr01.html","_self");
		}
		me._image_3_exitvr.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_3_exitvr);
		el=me._image_3_vr=document.createElement('div');
		els=me._image_3_vr__img=document.createElement('img');
		els.className='ggskin ggskin_image_3_vr';
		hs=basePath + 'images/image_3_vr.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 30px;';
		hs+='left : 48.34%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3_vr.onclick=function (e) {
			player.openUrl("ycbwg_vr01.html","_self");
			me._image_3_vr.style[domTransition]='none';
			me._image_3_vr.style.visibility='hidden';
			me._image_3_vr.ggVisible=false;
		}
		me._image_3_vr.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_3_vr);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.onmouseover=function (e) {
			me._image_2.style[domTransition]='none';
			me._image_2.ggParameter.sx=1.1;me._image_2.ggParameter.sy=1.1;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
		}
		me._image_2.onmouseout=function (e) {
			me._image_2.style[domTransition]='none';
			me._image_2.ggParameter.sx=1;me._image_2.ggParameter.sy=1;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
			me.elementMouseDown['image_2']=false;
		}
		me._image_2.onmousedown=function (e) {
			me.elementMouseDown['image_2']=true;
		}
		me._image_2.onmouseup=function (e) {
			me.elementMouseDown['image_2']=false;
		}
		me._image_2.ontouchend=function (e) {
			me.elementMouseDown['image_2']=false;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_2);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 11.47%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.onmouseover=function (e) {
			me._image_9.style[domTransition]='none';
			me._image_9.ggParameter.sx=1.1;me._image_9.ggParameter.sy=1.1;
			me._image_9.style[domTransform]=parameterToTransform(me._image_9.ggParameter);
		}
		me._image_9.onmouseout=function (e) {
			me._image_9.style[domTransition]='none';
			me._image_9.ggParameter.sx=1;me._image_9.ggParameter.sy=1;
			me._image_9.style[domTransform]=parameterToTransform(me._image_9.ggParameter);
			me.elementMouseDown['image_9']=false;
		}
		me._image_9.onmousedown=function (e) {
			me.elementMouseDown['image_9']=true;
		}
		me._image_9.onmouseup=function (e) {
			me.elementMouseDown['image_9']=false;
		}
		me._image_9.ontouchend=function (e) {
			me.elementMouseDown['image_9']=false;
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_9);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 35.04%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.onmouseover=function (e) {
			me._image_12.style[domTransition]='none';
			me._image_12.ggParameter.sx=1.1;me._image_12.ggParameter.sy=1.1;
			me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
		}
		me._image_12.onmouseout=function (e) {
			me._image_12.style[domTransition]='none';
			me._image_12.ggParameter.sx=1;me._image_12.ggParameter.sy=1;
			me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
			me.elementMouseDown['image_12']=false;
		}
		me._image_12.onmousedown=function (e) {
			me.elementMouseDown['image_12']=true;
		}
		me._image_12.onmouseup=function (e) {
			me.elementMouseDown['image_12']=false;
		}
		me._image_12.ontouchend=function (e) {
			me.elementMouseDown['image_12']=false;
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_12);
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 44px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.onmouseover=function (e) {
			me._image_16.style[domTransition]='none';
			me._image_16.ggParameter.sx=1.1;me._image_16.ggParameter.sy=1.1;
			me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
		}
		me._image_16.onmouseout=function (e) {
			me._image_16.style[domTransition]='none';
			me._image_16.ggParameter.sx=1;me._image_16.ggParameter.sy=1;
			me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			me.elementMouseDown['image_16']=false;
		}
		me._image_16.onmousedown=function (e) {
			me.elementMouseDown['image_16']=true;
		}
		me._image_16.onmouseup=function (e) {
			me.elementMouseDown['image_16']=false;
		}
		me._image_16.ontouchend=function (e) {
			me.elementMouseDown['image_16']=false;
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._container_base.appendChild(me._image_16);
		me.divSkin.appendChild(me._container_base);
		el=me._container_ad_mobile=document.createElement('div');
		el.ggId="Container ad_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 187px;';
		hs+='height : 151px;';
		hs+='position : absolute;';
		hs+='right : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 247px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._container_ad_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_ad_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_ad_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_ad_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_ad_mobile.style[domTransition]='';
				if (me._container_ad_mobile.ggCurrentLogicStateVisible == 0) {
					me._container_ad_mobile.style.visibility=(Number(me._container_ad_mobile.style.opacity)>0||!me._container_ad_mobile.style.opacity)?'inherit':'hidden';
					me._container_ad_mobile.ggVisible=true;
				}
				else {
					me._container_ad_mobile.style.visibility=(Number(me._container_ad_mobile.style.opacity)>0||!me._container_ad_mobile.style.opacity)?'inherit':'hidden';
					me._container_ad_mobile.ggVisible=true;
				}
			}
		}
		me._container_ad_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8_mobile=document.createElement('div');
		els=me._image_8_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_image_8_mobile';
		hs=basePath + 'images/image_8_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -186px;';
		hs+='height : 102.649%;';
		hs+='position : absolute;';
		hs+='right : -123px;';
		hs+='visibility : hidden;';
		hs+='width : 70.4453%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._image_8_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_8_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_8_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_8_mobile.style[domTransition]='';
				if (me._image_8_mobile.ggCurrentLogicStateVisible == 0) {
					me._image_8_mobile.style.visibility=(Number(me._image_8_mobile.style.opacity)>0||!me._image_8_mobile.style.opacity)?'inherit':'hidden';
					me._image_8_mobile.ggVisible=true;
				}
				else {
					me._image_8_mobile.style.visibility="hidden";
					me._image_8_mobile.ggVisible=false;
				}
			}
		}
		me._image_8_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_1_mobile0=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_1_mobile0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_1_mobile0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_1_mobile0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_1_mobile0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_1_mobile0.style[domTransition]='';
				if (me._marker_1_mobile0.ggCurrentLogicStateVisible == 0) {
					me._marker_1_mobile0.style.visibility=(Number(me._marker_1_mobile0.style.opacity)>0||!me._marker_1_mobile0.style.opacity)?'inherit':'hidden';
					me._marker_1_mobile0.ggVisible=true;
				}
				else {
					me._marker_1_mobile0.style.visibility="hidden";
					me._marker_1_mobile0.ggVisible=false;
				}
			}
		}
		me._marker_1_mobile0.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_1_mobile0.ggActivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility=(Number(me._image_13_mob.style.opacity)>0||!me._image_13_mob.style.opacity)?'inherit':'hidden';
			me._image_13_mob.ggVisible=true;
		}
		me._marker_1_mobile0.ggDeactivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility='hidden';
			me._image_13_mob.ggVisible=false;
		}
		me._marker_1_mobile0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABFCAYAAADDw1E2AAAFfklEQVR4nO3c2Y8UVRTH8c80M8MuICIiihEEFVyiosEYjYk8+uCb/gn+U74oGoxG4xKVKCi4vhjiFnEDkW1kERAYNmF8OFXQzcwwvVRVV/X0LyFddHd13fneU+eee+rcO/DSmlUqpgGMTXBcKdW63YAJVN+muXXHS5LPZuJ2LMAgluJm0QkzcANm1Z03lGdj29VgtxtQp5twRkBbiRHcmby/D7cJ2IexCHPwD/7DQlzCweR1cfLZbgH+cvL+SPJ9uny3DBTsaur/2KUCznqcxXIB9yjWCFDncGPy/VEBGy5gODlOoaaWfVrcFUPJ7x4VHTon+Y09yXsj4o46k/wrVEVa/FxhbesF8CcEiKXCklOwy0TnDLgK2jXHw3XHNY3uaV7d8WzhluCi6Ix7RO'+
			'fsxXnRATOwP2lXIZ1QBPi7hOU9lbw+IKz0WmD1YAdyaEe9r5+HdaKDjyfXWyUM41ccEe4tN+UBflhY1/3Cyh8UfnuBq66mLGPLgKuubK7onOWiA3aJu+A34doyVdYAVgjIG5LXW8UfUX+dPKw5C6Xua55o4+PiDj2MncnrwawulhX4FaLBG4W1L83hGkWp3jBm4w4Ryl7At2Js2KfDiKgTKLMF5I3CjdzbSUNKrtliDHoSd+MQvhPR0bl2frBd8IvEoLlC+PJeV3oXDOMWEXnNF6HpAY3zg6bUKvj5ovefEwPRkhbP7wWlzFaKidoKfC3ugsuadEGtgF8pBssNGmPl6aphYXiLRZriZ+H/DzRz8lTg0/DvUawVt9is654x/VQTk7RlAvpPohNOXe+k64GviQHlITxjfFjYV6MGRQSU5pR24oRIZ4xzP5OBnJH8yDo8'+
			'MsV3+2pUTczOZ+IHMQm7dO2XJoI5iIdF2FS5ZH0JNCCCkPViVrxLuJ+GHNC14IfwtMgOTseIJWulkc9CMfk6ln5QD34Iz2K1xoRVX51pPu4T7vsTMem8An4IzwvXUtZcSlVVE+HmY8L6P8OhQRGPviBui77y04CY7Y9hWw0v6kMvUqsxWsO/Wswz9NWRtuNkDW/J+WlLX1e0FZ8Sjv+0cPh7utig6aCt+Dz9T01k1PZiswj0+8peDdBpfNh8Ht+I9GZf2WkcdMZXku3D6/hef8DNQhNCZ+ISvhOSID/HBk0HTQqdyWsnj2MLftG3/HZ0XehMDn5MpDPfxh8ZN6rXNSV0pq4WPoevZFhP0uNqCjrNlWnvxSYx4F7uoFG9rqah03x9/Ci+1B9wJ1NL0GltYcLfeE9Msi62cpEeV8vQaX1FyAg+xF+tXqhH1RZ02luKM4'+
			'od+vDbhk574NPczib82O6FK66OoNPZ4rMLonRtpJMGVFAdQ6fzVX8H8IaoH5kOA24m0MlmueUxbNP7lp8ZdLJb53oSH+N3vTnJyhQ62YG/LKKcN8XirV5S5tDJfmX3Ob014OYCnXyW1O/FqyK3M65Ys0LKDTr57WVwCl+oruXnCp18N5E4gg9EkX6VHqbkDp18wY+JOP99/JnjdbJUIdApZtuUUeF2mlob1EUVBp1iwI8Ji39ZeXM7hUKn2I2CzovHiGUbcAuHTvE7NB0UtZplye10BTrd2RrrsEgvdNvndw063duT7LRIrO3Wne2pugqd7oFPczubRZxfpLoOne7vwpc+TCmqeqEU0Ok+eIorlC0NdMoBniiU3SG/ULNU0CkPeOJJ1kdiJXSWll866JQLfFoo+46IdrJQKaFTLvCpzopywU4LZUsLnXKCJx6mvCIG'+
			'3Hbi/FJDp7zgCctvJ9QsPXTKDZ6A/q7IajaT26kEdMoPnggxt5h6EXRloFMN8MQmO9tN/iSrUtCpDvi0UPY14x+mVA461QGf6oLGRdCVhE41N3jbLyrW1qoodPgfe5JTZP9aG3QAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -6px;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._image_130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_130.ggDeactivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility='hidden';
			me._image_13_mob.ggVisible=false;
		}
		me._image_130.ggUpdatePosition=function (useTransition) {
		}
		me._image_130.ggNodeChange=function () {
			if (me._image_130.ggLastIsActive!=me._image_130.ggIsActive()) {
				me._image_130.ggLastIsActive=me._image_130.ggIsActive();
				if (me._image_130.ggIsActive()) {
					if (me._image_130.ggActivate) me._image_130.ggActivate();
				} else {
					if (me._image_130.ggDeactivate) me._image_130.ggDeactivate();
				}
			}
		}
		me._marker_1_mobile0.appendChild(me._image_130);
		me._image_8_mobile.appendChild(me._marker_1_mobile0);
		el=me._marker_1_mobile=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 69px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_1_mobile.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_1_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_1_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_1_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_1_mobile.style[domTransition]='';
				if (me._marker_1_mobile.ggCurrentLogicStateVisible == 0) {
					me._marker_1_mobile.style.visibility=(Number(me._marker_1_mobile.style.opacity)>0||!me._marker_1_mobile.style.opacity)?'inherit':'hidden';
					me._marker_1_mobile.ggVisible=true;
				}
				else {
					me._marker_1_mobile.style.visibility="hidden";
					me._marker_1_mobile.ggVisible=false;
				}
			}
		}
		me._marker_1_mobile.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._marker_1_mobile.ggActivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility=(Number(me._image_13_mob.style.opacity)>0||!me._image_13_mob.style.opacity)?'inherit':'hidden';
			me._image_13_mob.ggVisible=true;
		}
		me._marker_1_mobile.ggDeactivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility='hidden';
			me._image_13_mob.ggVisible=false;
		}
		me._marker_1_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABFCAYAAADDw1E2AAAFfklEQVR4nO3c2Y8UVRTH8c80M8MuICIiihEEFVyiosEYjYk8+uCb/gn+U74oGoxG4xKVKCi4vhjiFnEDkW1kERAYNmF8OFXQzcwwvVRVV/X0LyFddHd13fneU+eee+rcO/DSmlUqpgGMTXBcKdW63YAJVN+muXXHS5LPZuJ2LMAgluJm0QkzcANm1Z03lGdj29VgtxtQp5twRkBbiRHcmby/D7cJ2IexCHPwD/7DQlzCweR1cfLZbgH+cvL+SPJ9uny3DBTsaur/2KUCznqcxXIB9yjWCFDncGPy/VEBGy5gODlOoaaWfVrcFUPJ7x4VHTon+Y09yXsj4o46k/wrVEVa/FxhbesF8CcEiKXCklOwy0TnDLgK2jXHw3XHNY3uaV7d8WzhluCi6Ix7RO'+
			'fsxXnRATOwP2lXIZ1QBPi7hOU9lbw+IKz0WmD1YAdyaEe9r5+HdaKDjyfXWyUM41ccEe4tN+UBflhY1/3Cyh8UfnuBq66mLGPLgKuubK7onOWiA3aJu+A34doyVdYAVgjIG5LXW8UfUX+dPKw5C6Xua55o4+PiDj2MncnrwawulhX4FaLBG4W1L83hGkWp3jBm4w4Ryl7At2Js2KfDiKgTKLMF5I3CjdzbSUNKrtliDHoSd+MQvhPR0bl2frBd8IvEoLlC+PJeV3oXDOMWEXnNF6HpAY3zg6bUKvj5ovefEwPRkhbP7wWlzFaKidoKfC3ugsuadEGtgF8pBssNGmPl6aphYXiLRZriZ+H/DzRz8lTg0/DvUawVt9is654x/VQTk7RlAvpPohNOXe+k64GviQHlITxjfFjYV6MGRQSU5pR24oRIZ4xzP5OBnJH8yDo8'+
			'MsV3+2pUTczOZ+IHMQm7dO2XJoI5iIdF2FS5ZH0JNCCCkPViVrxLuJ+GHNC14IfwtMgOTseIJWulkc9CMfk6ln5QD34Iz2K1xoRVX51pPu4T7vsTMem8An4IzwvXUtZcSlVVE+HmY8L6P8OhQRGPviBui77y04CY7Y9hWw0v6kMvUqsxWsO/Wswz9NWRtuNkDW/J+WlLX1e0FZ8Sjv+0cPh7utig6aCt+Dz9T01k1PZiswj0+8peDdBpfNh8Ht+I9GZf2WkcdMZXku3D6/hef8DNQhNCZ+ISvhOSID/HBk0HTQqdyWsnj2MLftG3/HZ0XehMDn5MpDPfxh8ZN6rXNSV0pq4WPoevZFhP0uNqCjrNlWnvxSYx4F7uoFG9rqah03x9/Ci+1B9wJ1NL0GltYcLfeE9Msi62cpEeV8vQaX1FyAg+xF+tXqhH1RZ02luKM4'+
			'od+vDbhk574NPczib82O6FK66OoNPZ4rMLonRtpJMGVFAdQ6fzVX8H8IaoH5kOA24m0MlmueUxbNP7lp8ZdLJb53oSH+N3vTnJyhQ62YG/LKKcN8XirV5S5tDJfmX3Ob014OYCnXyW1O/FqyK3M65Ys0LKDTr57WVwCl+oruXnCp18N5E4gg9EkX6VHqbkDp18wY+JOP99/JnjdbJUIdApZtuUUeF2mlob1EUVBp1iwI8Ji39ZeXM7hUKn2I2CzovHiGUbcAuHTvE7NB0UtZplye10BTrd2RrrsEgvdNvndw063duT7LRIrO3Wne2pugqd7oFPczubRZxfpLoOne7vwpc+TCmqeqEU0Ok+eIorlC0NdMoBniiU3SG/ULNU0CkPeOJJ1kdiJXSWll866JQLfFoo+46IdrJQKaFTLvCpzopywU4LZUsLnXKCJx6mvCIG'+
			'3Hbi/FJDp7zgCctvJ9QsPXTKDZ6A/q7IajaT26kEdMoPnggxt5h6EXRloFMN8MQmO9tN/iSrUtCpDvi0UPY14x+mVA461QGf6oLGRdCVhE41N3jbLyrW1qoodPgfe5JTZP9aG3QAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -7px;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -21px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.ggDeactivate=function () {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility='hidden';
			me._image_13_mob.ggVisible=false;
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._image_13.ggNodeChange=function () {
			if (me._image_13.ggLastIsActive!=me._image_13.ggIsActive()) {
				me._image_13.ggLastIsActive=me._image_13.ggIsActive();
				if (me._image_13.ggIsActive()) {
					if (me._image_13.ggActivate) me._image_13.ggActivate();
				} else {
					if (me._image_13.ggDeactivate) me._image_13.ggDeactivate();
				}
			}
		}
		me._marker_1_mobile.appendChild(me._image_13);
		me._image_8_mobile.appendChild(me._marker_1_mobile);
		me._container_ad_mobile.appendChild(me._image_8_mobile);
		el=me._image_ad_2_mobile=document.createElement('div');
		els=me._image_ad_2_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_image_ad_2_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAADdElEQVRYhbWYT0gUURzHPzu7WYHV5k7QwcqipfUQkpXZoYMRQomVUOfCQC+VHjYCPQdBczE7lFIXT7FBUq2WQV6CWiVNPGhMStmCB8e19GCpqx3e7LY7+2b/5PqFvfzem+/7zNv35/cbx8JDspbXr1YA54AK4BDgAXYAv4BZ4AswAPTomjGQjWdh4xqOTBBev7oVqAeaAG/2yHwF2oDHumYspoNQMgBcAMaBBzkCABwE2oFxr1+9mK6jdCa8fnUzcB9oyHHgdOoAbuqa8ScxKJ0Jr1/dDvRmC+BMO5dJagB6Tf8kJc2E168WmACn7QasKo1SfXiOI/tgj0fEoqvwYxaGv0Pf6E76x5xEV21h3gFndc1YAjETLkuHdjuAc2Ur3Kr5SXGRHK5kl/jVHZ'+
			'sjHIF7QTc9I1Z7MP3bgcaUmTAXz3PrE1s2wZ1LBueP2r6ZrV58gtZnKr+Xpc11umZ0x7eouQ3Hgb2JvbZugicNBsf25w4Q0+AkXOtUWUwFmQJ80wszi7FlVW8FALhzeX0AAMcPCB+J9gLXgPjuaLL2qClbobZ8fQAx1ZYLP4luAjh2F6ongI+JLU4F3t422OPJDwRAOAJn7qqyXVOpANXWaFVpNK8AAMVFwleiagWoTIkenssvQXrfkwpQao2Wl2wIg52vT0Fcx0mSHUj5kI2vqgBJZ3mBK6f7ICc5FeFv0TYFmE+MLK2Q7txfl6Krwt+iBQWRESUpHNkYCBtfQwHGrNGhbxsDMSz3HVewHFQgruON0Bu57wcF6LNG+8ecef9LwhHhK1GfomtGCNATo9FV0ILuvEJoQbdswevTCzOh2GZss7YGR1y8HMoPwKvPwk+i'+
			'+/DvFn2CuN+T1BpQGZxcH8DAJLQ8VWVNU8DjOIRZF6Rc54vLcOWRSiDk+C+AQMjB1UfShAagKVaPxM9GXTO6gU5rz+UotAQ8NHe5s16s4Qg0d7lpCXhYll6cdJrjAaQkutcBH3DK+lRwxMXrUTWebZeXiLsglm2HI+J8ySLbfg/cSAykFD9mXdANVNm/6z+5nLAif1uZ+oGLumbErwpp8WN2OIuomDIqB4AORL0xb21IWxCbZUAbkiQ4B00BzbpmpJQTkEVBbC4eHyIhnchx8AnzOZ8dQEwZPw0kSvJ9QkXkI/OAgfg+MYgoJUO6Zqxl8ixsXOMvx78vkqjgiaQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image ad_2_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -61px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_2_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_ad_2_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._container_ad_mobile.appendChild(me._image_ad_2_mobile);
		el=me._image_ad_1_mobile=document.createElement('div');
		els=me._image_ad_1_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_image_ad_1_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAADY0lEQVRYhbWYz0sUYRjHPzuMK4Zbh3bBhdoVIqpbUOmadCjWJAPdNCsKClLslv0HHgRvQomXpC5B9sNMjTRMqYulq1nHigrc6TCHqUMOtLgOTIfZlfV1pp11dx+Yy/O8+zyf5d1nn+8zHtM0cWtBX6AGaAJqgAPAbmAX8Af4DXwFFoEpVdcW3eb15III+gIVwHWgG9jvmhi+A3eA+6quJbcNEfQFWoABIJRHcdEUoFvVtfG8IIK+QHm6eFcBxUUbAm6quraWEyLoC+wExoGTbjLLsoxhGG5B3gIxVddWHSGCvoAXeAWccioYbWygqfksR2qOEqoOb0AoKwmWFz8w9WKS2emZ/4G9Ac6oupba8JimufFUVfrvVlX6Tbun62qHmVhJmG4ssZIwu6522O'+
			'ZJP3ez62YDxOw+UB3YY44+HnFVXLTRxyNmdWCPE0gsU9tjmmamDb8gdEHFjgoejT2l9njE7Z1vsYV381xuvUjy75YuVYCDqq4lpbTjuggA0D94uyAAgEh9Hf2Dt+1CIaADIAPRLZ5oaYtxrr21IICMnWtvpaUtZhe6CeCpqvTXAgvZEVmWmfu0QLg6XBQIACWhUH+41q5rIhJwWvRGGxuKCgAQCoeINjbYhU5LwJZLb2o+W1SAHHnrJOCQ6D1Se6wkEA55D0pY43iThcKFzCtnc8jrl4Cd2R5vuRdZlksCIcsy3nKv6PZJwKZhklpL5TOQ8jLDMEitpUS3LmEpok2mJJSSQDjk/SUBn0XvcnypJBAfFz/Yub9ICH9UAFMvJksCMTnx0s49LwGvRe/s9EzRr0RJKMxOz9iFXkuqrsWBb9lewzDo6+ktKkRfT6/dD/6b'+
			'qmvxzAC7I0YnRscZG3leFIDxZ2NMjNrq3AEgt54Yfv6ESH3dtgHm595zpe1Sbj2R3gu2jPPk3yQXms8z/ODhtgCGHzzkYku7HQBYa4AVEDTmkJMuvHGtMy+NeeNa5/805lB2XTu1PQucsEPPVttHIzXsDe3dUNs/lZ8sx5eYnHiZS23PAdHs/aPgvaOsrIz19XU3R8Fh75DEU+kDZ7A2ppyWB8AQ1r6xKgZy7aIxrPYtdBe9peramNMBt1t5J1b37Muj+A+sL3CvoK3cBkh8P+HH0iOrwC+s9xNLWKtkXNU1V8n/AfYZNuVvVGuPAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image ad_1_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -215px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_1_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_ad_1_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._container_ad_mobile.appendChild(me._image_ad_1_mobile);
		me.divSkin.appendChild(me._container_ad_mobile);
		el=me._container_base_mob=document.createElement('div');
		el.ggId="Container base_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -9px;';
		hs+='cursor : pointer;';
		hs+='height : 94px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 391px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_base_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_base_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_base_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_base_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_base_mob.style[domTransition]='';
				if (me._container_base_mob.ggCurrentLogicStateVisible == 0) {
					me._container_base_mob.style.visibility=(Number(me._container_base_mob.style.opacity)>0||!me._container_base_mob.style.opacity)?'inherit':'hidden';
					me._container_base_mob.ggVisible=true;
				}
				else {
					me._container_base_mob.style.visibility="hidden";
					me._container_base_mob.ggVisible=false;
				}
			}
		}
		me._container_base_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4_mob=document.createElement('div');
		els=me._image_4_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_4_mob';
		hs=basePath + 'images/image_4_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 1%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_4_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_4_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_4_mob.style[domTransition]='';
				if (me._image_4_mob.ggCurrentLogicStateVisible == 0) {
					me._image_4_mob.style.visibility=(Number(me._image_4_mob.style.opacity)>0||!me._image_4_mob.style.opacity)?'inherit':'hidden';
					me._image_4_mob.ggVisible=true;
				}
				else {
					me._image_4_mob.style.visibility="hidden";
					me._image_4_mob.ggVisible=false;
				}
			}
		}
		me._image_4_mob.onclick=function (e) {
			player.enterFullscreen();
			me._image_5_mob.style[domTransition]='none';
			me._image_5_mob.style.visibility=(Number(me._image_5_mob.style.opacity)>0||!me._image_5_mob.style.opacity)?'inherit':'hidden';
			me._image_5_mob.ggVisible=true;
			me._image_4_mob.style[domTransition]='none';
			me._image_4_mob.style.visibility='hidden';
			me._image_4_mob.ggVisible=false;
		}
		me._image_4_mob.onmouseover=function (e) {
			me._image_4_mob.style[domTransition]='none';
			me._image_4_mob.ggParameter.sx=1.1;me._image_4_mob.ggParameter.sy=1.1;
			me._image_4_mob.style[domTransform]=parameterToTransform(me._image_4_mob.ggParameter);
		}
		me._image_4_mob.onmouseout=function (e) {
			me._image_4_mob.style[domTransition]='none';
			me._image_4_mob.ggParameter.sx=1;me._image_4_mob.ggParameter.sy=1;
			me._image_4_mob.style[domTransform]=parameterToTransform(me._image_4_mob.ggParameter);
		}
		me._image_4_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_4_mob);
		el=me._image_5_mob=document.createElement('div');
		els=me._image_5_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_5_mob';
		hs=basePath + 'images/image_5_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 1%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_5_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_5_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_5_mob.style[domTransition]='';
				if (me._image_5_mob.ggCurrentLogicStateVisible == 0) {
					me._image_5_mob.style.visibility=(Number(me._image_5_mob.style.opacity)>0||!me._image_5_mob.style.opacity)?'inherit':'hidden';
					me._image_5_mob.ggVisible=true;
				}
				else {
					me._image_5_mob.style.visibility="hidden";
					me._image_5_mob.ggVisible=false;
				}
			}
		}
		me._image_5_mob.onclick=function (e) {
			player.exitFullscreen();
			me._image_4_mob.style[domTransition]='none';
			me._image_4_mob.style.visibility=(Number(me._image_4_mob.style.opacity)>0||!me._image_4_mob.style.opacity)?'inherit':'hidden';
			me._image_4_mob.ggVisible=true;
			me._image_5_mob.style[domTransition]='none';
			me._image_5_mob.style.visibility='hidden';
			me._image_5_mob.ggVisible=false;
		}
		me._image_5_mob.onmouseover=function (e) {
			me._image_5_mob.style[domTransition]='none';
			me._image_5_mob.ggParameter.sx=1.1;me._image_5_mob.ggParameter.sy=1.1;
			me._image_5_mob.style[domTransform]=parameterToTransform(me._image_5_mob.ggParameter);
		}
		me._image_5_mob.onmouseout=function (e) {
			me._image_5_mob.style[domTransition]='none';
			me._image_5_mob.ggParameter.sx=1;me._image_5_mob.ggParameter.sy=1;
			me._image_5_mob.style[domTransform]=parameterToTransform(me._image_5_mob.ggParameter);
		}
		me._image_5_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_5_mob);
		el=me._image_13_mob=document.createElement('div');
		els=me._image_13_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_13_mob';
		hs=basePath + 'images/image_13_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 9%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_13_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_13_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_13_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_13_mob.style[domTransition]='';
				if (me._image_13_mob.ggCurrentLogicStateVisible == 0) {
					me._image_13_mob.style.visibility=(Number(me._image_13_mob.style.opacity)>0||!me._image_13_mob.style.opacity)?'inherit':'hidden';
					me._image_13_mob.ggVisible=true;
				}
				else {
					me._image_13_mob.style.visibility="hidden";
					me._image_13_mob.ggVisible=false;
				}
			}
		}
		me._image_13_mob.onclick=function (e) {
			player.startAutorotate("0.05");
			me._image_14_mob.style[domTransition]='none';
			me._image_14_mob.style.visibility=(Number(me._image_14_mob.style.opacity)>0||!me._image_14_mob.style.opacity)?'inherit':'hidden';
			me._image_14_mob.ggVisible=true;
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility='hidden';
			me._image_13_mob.ggVisible=false;
		}
		me._image_13_mob.onmouseover=function (e) {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.ggParameter.sx=1.1;me._image_13_mob.ggParameter.sy=1.1;
			me._image_13_mob.style[domTransform]=parameterToTransform(me._image_13_mob.ggParameter);
		}
		me._image_13_mob.onmouseout=function (e) {
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.ggParameter.sx=1;me._image_13_mob.ggParameter.sy=1;
			me._image_13_mob.style[domTransform]=parameterToTransform(me._image_13_mob.ggParameter);
		}
		me._image_13_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_13_mob);
		el=me._image_14_mob=document.createElement('div');
		els=me._image_14_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_14_mob';
		hs=basePath + 'images/image_14_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 9%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_14_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_14_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_14_mob.style[domTransition]='';
				if (me._image_14_mob.ggCurrentLogicStateVisible == 0) {
					me._image_14_mob.style.visibility=(Number(me._image_14_mob.style.opacity)>0||!me._image_14_mob.style.opacity)?'inherit':'hidden';
					me._image_14_mob.ggVisible=true;
				}
				else {
					me._image_14_mob.style.visibility="hidden";
					me._image_14_mob.ggVisible=false;
				}
			}
		}
		me._image_14_mob.onclick=function (e) {
			player.stopAutorotate();
			me._image_13_mob.style[domTransition]='none';
			me._image_13_mob.style.visibility=(Number(me._image_13_mob.style.opacity)>0||!me._image_13_mob.style.opacity)?'inherit':'hidden';
			me._image_13_mob.ggVisible=true;
			me._image_14_mob.style[domTransition]='none';
			me._image_14_mob.style.visibility='hidden';
			me._image_14_mob.ggVisible=false;
		}
		me._image_14_mob.onmouseover=function (e) {
			me._image_14_mob.style[domTransition]='none';
			me._image_14_mob.ggParameter.sx=1.1;me._image_14_mob.ggParameter.sy=1.1;
			me._image_14_mob.style[domTransform]=parameterToTransform(me._image_14_mob.ggParameter);
		}
		me._image_14_mob.onmouseout=function (e) {
			me._image_14_mob.style[domTransition]='none';
			me._image_14_mob.ggParameter.sx=1;me._image_14_mob.ggParameter.sy=1;
			me._image_14_mob.style[domTransform]=parameterToTransform(me._image_14_mob.ggParameter);
		}
		me._image_14_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_14_mob);
		el=me._image_1_mob=document.createElement('div');
		els=me._image_1_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_mob';
		hs=basePath + 'images/image_1_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -15%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_1_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_1_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_1_mob.style[domTransition]='';
				if (me._image_1_mob.ggCurrentLogicStateVisible == 0) {
					me._image_1_mob.style.visibility=(Number(me._image_1_mob.style.opacity)>0||!me._image_1_mob.style.opacity)?'inherit':'hidden';
					me._image_1_mob.ggVisible=true;
				}
				else {
					me._image_1_mob.style.visibility="hidden";
					me._image_1_mob.ggVisible=false;
				}
			}
		}
		me._image_1_mob.onmouseover=function (e) {
			me._image_1_mob.style[domTransition]='none';
			me._image_1_mob.ggParameter.sx=1.1;me._image_1_mob.ggParameter.sy=1.1;
			me._image_1_mob.style[domTransform]=parameterToTransform(me._image_1_mob.ggParameter);
		}
		me._image_1_mob.onmouseout=function (e) {
			me._image_1_mob.style[domTransition]='none';
			me._image_1_mob.ggParameter.sx=1;me._image_1_mob.ggParameter.sy=1;
			me._image_1_mob.style[domTransform]=parameterToTransform(me._image_1_mob.ggParameter);
			me.elementMouseDown['image_1_mob']=false;
		}
		me._image_1_mob.onmousedown=function (e) {
			me.elementMouseDown['image_1_mob']=true;
		}
		me._image_1_mob.onmouseup=function (e) {
			me.elementMouseDown['image_1_mob']=false;
		}
		me._image_1_mob.ontouchend=function (e) {
			me.elementMouseDown['image_1_mob']=false;
		}
		me._image_1_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_1_mob);
		el=me._image_15_mob=document.createElement('div');
		els=me._image_15_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_15_mob';
		hs=basePath + 'images/image_15_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -7%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_15_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_15_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_15_mob.style[domTransition]='';
				if (me._image_15_mob.ggCurrentLogicStateVisible == 0) {
					me._image_15_mob.style.visibility=(Number(me._image_15_mob.style.opacity)>0||!me._image_15_mob.style.opacity)?'inherit':'hidden';
					me._image_15_mob.ggVisible=true;
				}
				else {
					me._image_15_mob.style.visibility="hidden";
					me._image_15_mob.ggVisible=false;
				}
			}
		}
		me._image_15_mob.onmouseover=function (e) {
			me._image_15_mob.style[domTransition]='none';
			me._image_15_mob.ggParameter.sx=1.1;me._image_15_mob.ggParameter.sy=1.1;
			me._image_15_mob.style[domTransform]=parameterToTransform(me._image_15_mob.ggParameter);
		}
		me._image_15_mob.onmouseout=function (e) {
			me._image_15_mob.style[domTransition]='none';
			me._image_15_mob.ggParameter.sx=1;me._image_15_mob.ggParameter.sy=1;
			me._image_15_mob.style[domTransform]=parameterToTransform(me._image_15_mob.ggParameter);
			me.elementMouseDown['image_15_mob']=false;
		}
		me._image_15_mob.onmousedown=function (e) {
			me.elementMouseDown['image_15_mob']=true;
		}
		me._image_15_mob.onmouseup=function (e) {
			me.elementMouseDown['image_15_mob']=false;
		}
		me._image_15_mob.ontouchend=function (e) {
			me.elementMouseDown['image_15_mob']=false;
		}
		me._image_15_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_15_mob);
		el=me._image_10_mob=document.createElement('div');
		els=me._image_10_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_10_mob';
		hs=basePath + 'images/image_10_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 17%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10_mob.style[domTransition]='';
				if (me._image_10_mob.ggCurrentLogicStateVisible == 0) {
					me._image_10_mob.style.visibility=(Number(me._image_10_mob.style.opacity)>0||!me._image_10_mob.style.opacity)?'inherit':'hidden';
					me._image_10_mob.ggVisible=true;
				}
				else {
					me._image_10_mob.style.visibility="hidden";
					me._image_10_mob.ggVisible=false;
				}
			}
		}
		me._image_10_mob.onclick=function (e) {
			player.pauseSound("Element01");
			me._image_11_mob.style[domTransition]='none';
			me._image_11_mob.style.visibility=(Number(me._image_11_mob.style.opacity)>0||!me._image_11_mob.style.opacity)?'inherit':'hidden';
			me._image_11_mob.ggVisible=true;
			me._image_10_mob.style[domTransition]='none';
			me._image_10_mob.style.visibility='hidden';
			me._image_10_mob.ggVisible=false;
		}
		me._image_10_mob.onmouseover=function (e) {
			me._image_10_mob.style[domTransition]='none';
			me._image_10_mob.ggParameter.sx=1.1;me._image_10_mob.ggParameter.sy=1.1;
			me._image_10_mob.style[domTransform]=parameterToTransform(me._image_10_mob.ggParameter);
		}
		me._image_10_mob.onmouseout=function (e) {
			me._image_10_mob.style[domTransition]='none';
			me._image_10_mob.ggParameter.sx=1;me._image_10_mob.ggParameter.sy=1;
			me._image_10_mob.style[domTransform]=parameterToTransform(me._image_10_mob.ggParameter);
		}
		me._image_10_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_10_mob);
		el=me._image_11_mob=document.createElement('div');
		els=me._image_11_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_11_mob';
		hs=basePath + 'images/image_11_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 17%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_11_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_11_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_11_mob.style[domTransition]='';
				if (me._image_11_mob.ggCurrentLogicStateVisible == 0) {
					me._image_11_mob.style.visibility=(Number(me._image_11_mob.style.opacity)>0||!me._image_11_mob.style.opacity)?'inherit':'hidden';
					me._image_11_mob.ggVisible=true;
				}
				else {
					me._image_11_mob.style.visibility="hidden";
					me._image_11_mob.ggVisible=false;
				}
			}
		}
		me._image_11_mob.onclick=function (e) {
			player.playSound("Element01","1");
			me._image_10_mob.style[domTransition]='none';
			me._image_10_mob.style.visibility=(Number(me._image_10_mob.style.opacity)>0||!me._image_10_mob.style.opacity)?'inherit':'hidden';
			me._image_10_mob.ggVisible=true;
			me._image_11_mob.style[domTransition]='none';
			me._image_11_mob.style.visibility='hidden';
			me._image_11_mob.ggVisible=false;
		}
		me._image_11_mob.onmouseover=function (e) {
			me._image_11_mob.style[domTransition]='none';
			me._image_11_mob.ggParameter.sx=1.1;me._image_11_mob.ggParameter.sy=1.1;
			me._image_11_mob.style[domTransform]=parameterToTransform(me._image_11_mob.ggParameter);
		}
		me._image_11_mob.onmouseout=function (e) {
			me._image_11_mob.style[domTransition]='none';
			me._image_11_mob.ggParameter.sx=1;me._image_11_mob.ggParameter.sy=1;
			me._image_11_mob.style[domTransform]=parameterToTransform(me._image_11_mob.ggParameter);
		}
		me._image_11_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_11_mob);
		el=me._image_3_exitvr_mob=document.createElement('div');
		els=me._image_3_exitvr_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_3_exitvr_mob';
		hs=basePath + 'images/image_3_exitvr_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3_exitvr_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 33%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3_exitvr_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3_exitvr_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_3_exitvr_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3_exitvr_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3_exitvr_mob.style[domTransition]='';
				if (me._image_3_exitvr_mob.ggCurrentLogicStateVisible == 0) {
					me._image_3_exitvr_mob.style.visibility=(Number(me._image_3_exitvr_mob.style.opacity)>0||!me._image_3_exitvr_mob.style.opacity)?'inherit':'hidden';
					me._image_3_exitvr_mob.ggVisible=true;
				}
				else {
					me._image_3_exitvr_mob.style.visibility="hidden";
					me._image_3_exitvr_mob.ggVisible=false;
				}
			}
		}
		me._image_3_exitvr_mob.onclick=function (e) {
			player.openUrl("ycbwg_withoutvr01.html","_self");
		}
		me._image_3_exitvr_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_3_exitvr_mob);
		el=me._image_3_vr_mob=document.createElement('div');
		els=me._image_3_vr_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_3_vr_mob';
		hs=basePath + 'images/image_3_vr_mob.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3_vr_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 30px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3_vr_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3_vr_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_3_vr_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3_vr_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3_vr_mob.style[domTransition]='';
				if (me._image_3_vr_mob.ggCurrentLogicStateVisible == 0) {
					me._image_3_vr_mob.style.visibility=(Number(me._image_3_vr_mob.style.opacity)>0||!me._image_3_vr_mob.style.opacity)?'inherit':'hidden';
					me._image_3_vr_mob.ggVisible=true;
				}
				else {
					me._image_3_vr_mob.style.visibility="hidden";
					me._image_3_vr_mob.ggVisible=false;
				}
			}
		}
		me._image_3_vr_mob.onclick=function (e) {
			player.openUrl("ycbwg_vr01.html","_self");
			me._image_3_vr_mob.style[domTransition]='none';
			me._image_3_vr_mob.style.visibility='hidden';
			me._image_3_vr_mob.ggVisible=false;
		}
		me._image_3_vr_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_3_vr_mob);
		el=me._image_2_mob=document.createElement('div');
		els=me._image_2_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_mob';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2_mob.onmouseover=function (e) {
			me._image_2_mob.style[domTransition]='none';
			me._image_2_mob.ggParameter.sx=1.1;me._image_2_mob.ggParameter.sy=1.1;
			me._image_2_mob.style[domTransform]=parameterToTransform(me._image_2_mob.ggParameter);
		}
		me._image_2_mob.onmouseout=function (e) {
			me._image_2_mob.style[domTransition]='none';
			me._image_2_mob.ggParameter.sx=1;me._image_2_mob.ggParameter.sy=1;
			me._image_2_mob.style[domTransform]=parameterToTransform(me._image_2_mob.ggParameter);
			me.elementMouseDown['image_2_mob']=false;
		}
		me._image_2_mob.onmousedown=function (e) {
			me.elementMouseDown['image_2_mob']=true;
		}
		me._image_2_mob.onmouseup=function (e) {
			me.elementMouseDown['image_2_mob']=false;
		}
		me._image_2_mob.ontouchend=function (e) {
			me.elementMouseDown['image_2_mob']=false;
		}
		me._image_2_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_2_mob);
		el=me._image_9_mob=document.createElement('div');
		els=me._image_9_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_9_mob';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 11.47%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9_mob.onmouseover=function (e) {
			me._image_9_mob.style[domTransition]='none';
			me._image_9_mob.ggParameter.sx=1.1;me._image_9_mob.ggParameter.sy=1.1;
			me._image_9_mob.style[domTransform]=parameterToTransform(me._image_9_mob.ggParameter);
		}
		me._image_9_mob.onmouseout=function (e) {
			me._image_9_mob.style[domTransition]='none';
			me._image_9_mob.ggParameter.sx=1;me._image_9_mob.ggParameter.sy=1;
			me._image_9_mob.style[domTransform]=parameterToTransform(me._image_9_mob.ggParameter);
			me.elementMouseDown['image_9_mob']=false;
		}
		me._image_9_mob.onmousedown=function (e) {
			me.elementMouseDown['image_9_mob']=true;
		}
		me._image_9_mob.onmouseup=function (e) {
			me.elementMouseDown['image_9_mob']=false;
		}
		me._image_9_mob.ontouchend=function (e) {
			me.elementMouseDown['image_9_mob']=false;
		}
		me._image_9_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_9_mob);
		el=me._image_12_mob=document.createElement('div');
		els=me._image_12_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_12_mob';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 35.04%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12_mob.onmouseover=function (e) {
			me._image_12_mob.style[domTransition]='none';
			me._image_12_mob.ggParameter.sx=1.1;me._image_12_mob.ggParameter.sy=1.1;
			me._image_12_mob.style[domTransform]=parameterToTransform(me._image_12_mob.ggParameter);
		}
		me._image_12_mob.onmouseout=function (e) {
			me._image_12_mob.style[domTransition]='none';
			me._image_12_mob.ggParameter.sx=1;me._image_12_mob.ggParameter.sy=1;
			me._image_12_mob.style[domTransform]=parameterToTransform(me._image_12_mob.ggParameter);
			me.elementMouseDown['image_12_mob']=false;
		}
		me._image_12_mob.onmousedown=function (e) {
			me.elementMouseDown['image_12_mob']=true;
		}
		me._image_12_mob.onmouseup=function (e) {
			me.elementMouseDown['image_12_mob']=false;
		}
		me._image_12_mob.ontouchend=function (e) {
			me.elementMouseDown['image_12_mob']=false;
		}
		me._image_12_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_12_mob);
		el=me._image_16_mob=document.createElement('div');
		els=me._image_16_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_16_mob';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 44px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22.76%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16_mob.onmouseover=function (e) {
			me._image_16_mob.style[domTransition]='none';
			me._image_16_mob.ggParameter.sx=1.1;me._image_16_mob.ggParameter.sy=1.1;
			me._image_16_mob.style[domTransform]=parameterToTransform(me._image_16_mob.ggParameter);
		}
		me._image_16_mob.onmouseout=function (e) {
			me._image_16_mob.style[domTransition]='none';
			me._image_16_mob.ggParameter.sx=1;me._image_16_mob.ggParameter.sy=1;
			me._image_16_mob.style[domTransform]=parameterToTransform(me._image_16_mob.ggParameter);
			me.elementMouseDown['image_16_mob']=false;
		}
		me._image_16_mob.onmousedown=function (e) {
			me.elementMouseDown['image_16_mob']=true;
		}
		me._image_16_mob.onmouseup=function (e) {
			me.elementMouseDown['image_16_mob']=false;
		}
		me._image_16_mob.ontouchend=function (e) {
			me.elementMouseDown['image_16_mob']=false;
		}
		me._image_16_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_base_mob.appendChild(me._image_16_mob);
		me.divSkin.appendChild(me._container_base_mob);
		el=me._container_2_mob=document.createElement('div');
		el.ggId="Container 2_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_2_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_2_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_2_mob.style[domTransition]='';
				if (me._container_2_mob.ggCurrentLogicStateVisible == 0) {
					me._container_2_mob.style.visibility=(Number(me._container_2_mob.style.opacity)>0||!me._container_2_mob.style.opacity)?'inherit':'hidden';
					me._container_2_mob.ggVisible=true;
				}
				else {
					me._container_2_mob.style.visibility="hidden";
					me._container_2_mob.ggVisible=false;
				}
			}
		}
		me._container_2_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_mob=document.createElement('div');
		el.ggId="Rectangle 4_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #262626;';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_4_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_4_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_4_mob.style[domTransition]='';
				if (me._rectangle_4_mob.ggCurrentLogicStateVisible == 0) {
					me._rectangle_4_mob.style.visibility="hidden";
					me._rectangle_4_mob.ggVisible=false;
				}
				else {
					me._rectangle_4_mob.style.visibility="hidden";
					me._rectangle_4_mob.ggVisible=false;
				}
			}
		}
		me._rectangle_4_mob.onclick=function (e) {
			me._rectangle_4_mob.style[domTransition]='none';
			me._rectangle_4_mob.style.visibility='hidden';
			me._rectangle_4_mob.ggVisible=false;
			me._external_1_mob.ggSubElement.src='';
			me._external_1_mob.style[domTransition]='none';
			me._external_1_mob.style.visibility='hidden';
			me._external_1_mob.ggVisible=false;
			me._text_1_mob.style[domTransition]='none';
			me._text_1_mob.style.visibility='hidden';
			me._text_1_mob.ggVisible=false;
			me._text_2_mob.style[domTransition]='none';
			me._text_2_mob.style.visibility=(Number(me._text_2_mob.style.opacity)>0||!me._text_2_mob.style.opacity)?'inherit':'hidden';
			me._text_2_mob.ggVisible=true;
		}
		me._rectangle_4_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_2_mob.appendChild(me._rectangle_4_mob);
		el=me._text_2_mob=document.createElement('div');
		els=me._text_2_mob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60.1563%;';
		hs+='left : 2.75%;';
		hs+='position : absolute;';
		hs+='top : 22.66%;';
		hs+='visibility : hidden;';
		hs+='width : 26.75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(223,96,46,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="  \u8fd9\u662f\u4e00\u5e45\u5927\u578b\u78e8\u6f06\u58c1\u753b\u300a\u795e\u5dde\u4e07\u91cc\u884c\u300b\uff0c\u5c55\u73b0\u4e86\u7956\u56fd\u5404\u5730\u7684\u540d\u80dc\u53e4\u8ff9\u548c\u58ee\u4e3d\u6cb3\u5c71\u3002\u5185\u5bb9\u4e3b\u8981\u53d6\u7528\u4e2d\u56fd\u5404\u7701\u5e02\u533a\u98ce\u666f\u540d\u80dc\u827a\u672f\u8868\u73b0\u5f62\u5f0f\u4e3a\u78e8\u6f06\u88c5\u9970\u753b\uff0c\u957f28\u7c73\uff0c\u9ad82.8\u7c73\u3002\u78e8\u6f06\u58c1\u753b\u662f\u6211\u56fd\u4e00\u79cd\u4f20\u7edf\u7684\u88c5\u9970\u5de5\u827a\u753b\uff0c\u5b83\u91c7\u7528\u86cb\u58f3\u3001\u8d1d\u58f3\u3001\u91d1\u7b94\u7b49\u591a\u79cd\u6750\u6599\uff0c\u901a\u8fc730\u591a\u9053\u6f06\u3001\u78e8\u5de5\u827a\u5236\u4f5c\u800c\u6210\uff0c\u6709\u51f9\u51f8\u7684\u7acb\u4f53\u7f8e\u611f\uff0c\u800c\u4e14\u4e0d\u4f1a\u892a\u8272\u3002\u8fd9\u662f\u672c\u9986\u827a\u672f\u73cd\u85cf\u548c\u9648\u5217\u5c55\u793a\u7684\u4e00\u4e2a\u4eae\u70b9\u3002";
		el.appendChild(els);
		me._text_2_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_2_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_2_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_2_mob.style[domTransition]='';
				if (me._text_2_mob.ggCurrentLogicStateVisible == 0) {
					me._text_2_mob.style.visibility="hidden";
					me._text_2_mob.ggVisible=false;
				}
				else {
					me._text_2_mob.style.visibility="hidden";
					me._text_2_mob.ggVisible=false;
				}
			}
		}
		me._text_2_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_2_mob.appendChild(me._text_2_mob);
		el=me._text_1_mob=document.createElement('div');
		els=me._text_1_mob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 3.22%;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : hidden;';
		hs+='width : 111px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 111px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(244,163,0,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u56fe\u7247\u70ed\u70b9";
		el.appendChild(els);
		me._text_1_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_mob.style[domTransition]='';
				if (me._text_1_mob.ggCurrentLogicStateVisible == 0) {
					me._text_1_mob.style.visibility="hidden";
					me._text_1_mob.ggVisible=false;
				}
				else {
					me._text_1_mob.style.visibility="hidden";
					me._text_1_mob.ggVisible=false;
				}
			}
		}
		me._text_1_mob.ggUpdatePosition=function (useTransition) {
		}
		me._container_2_mob.appendChild(me._text_1_mob);
		el=me._external_1_mob=document.createElement('div');
		me._external_1_mob__img=document.createElement('img');
		me._external_1_mob__img.className='ggskin ggskin_external';
		me._external_1_mob__img.onload=function() {me._external_1_mob.ggUpdatePosition();}
		me._external_1_mob.ggText='file:///F:/Krpano/project/3、publish-yanan/data/content/zooms/bg/61.jpg';
		me._external_1_mob__img.setAttribute('src', me._external_1_mob.ggText);
		me._external_1_mob__img['ondragstart']=function() { return false; };
		player.checkLoaded.push(me._external_1_mob__img);
		hs ='';
		me._external_1_mob.appendChild(me._external_1_mob__img);
		me._external_1_mob.ggSubElement = me._external_1_mob__img;
		el.ggId="External 1_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30.1563%;';
		hs+='left : 30%;';
		hs+='position : absolute;';
		hs+='top : 35%;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._external_1_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._external_1_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._external_1_mob.style[domTransition]='';
				if (me._external_1_mob.ggCurrentLogicStateVisible == 0) {
					me._external_1_mob.style.visibility="hidden";
					me._external_1_mob__img.src = '';
					me._external_1_mob.ggVisible=false;
				}
				else {
					me._external_1_mob.style.visibility="hidden";
					me._external_1_mob__img.src = '';
					me._external_1_mob.ggVisible=false;
				}
			}
		}
		me._external_1_mob.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1_mob.clientWidth;
			var parentHeight = me._external_1_mob.clientHeight;
			var aspectRatioDiv = me._external_1_mob.clientWidth / me._external_1_mob.clientHeight;
			var aspectRatioImg = me._external_1_mob__img.naturalWidth / me._external_1_mob__img.naturalHeight;
			if (me._external_1_mob__img.naturalWidth < parentWidth) parentWidth = me._external_1_mob__img.naturalWidth;
			if (me._external_1_mob__img.naturalHeight < parentHeight) parentHeight = me._external_1_mob__img.naturalHeight;
			var currentWidth = me._external_1_mob__img.naturalWidth;
			var currentHeight = me._external_1_mob__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._external_1_mob__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._external_1_mob__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._container_2_mob.appendChild(me._external_1_mob);
		me.divSkin.appendChild(me._container_2_mob);
		var clonedNormalElement = new SkinElement_image_ad_1_Class(this,me._marker_10);
		me._marker_10__normal = clonedNormalElement._image_ad_1;
		me._marker_10__normal.style.visibility='inherit';
		me._marker_10__normal.style.left='0px';
		me._marker_10__normal.style.top='0px';
		me._marker_10.ggMarkerNormal=me._marker_10__normal;
		me._marker_10.ggMarkerInstances.push(me._marker_10__normal);
		var clonedActiveElement = new SkinElement_image_ad_2_Class(this,me._marker_10);
		me._marker_10__active= clonedActiveElement._image_ad_2;
		me._marker_10__active.style.visibility='hidden';
		me._marker_10__active.style.left='0px';
		me._marker_10__active.style.top='0px';
		me._marker_10.ggMarkerActive=me._marker_10__active;
		me._marker_10.ggMarkerInstances.push(me._marker_10__active);
		if (me._marker_10.firstChild) {
			me._marker_10.insertBefore(me._marker_10__active,me._marker_10.firstChild);
		} else {
			me._marker_10.appendChild(me._marker_10__active);
		}
		if (me._marker_10.firstChild) {
			me._marker_10.insertBefore(me._marker_10__normal,me._marker_10.firstChild);
		} else {
			me._marker_10.appendChild(me._marker_10__normal);
		}
		for (var i = 0; i < me._marker_10.childNodes.length; i++) {
			me._marker_10.ggMarkerInstances.push(me._marker_10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_ad_1_Class(this,me._marker_1);
		me._marker_1__normal = clonedNormalElement._image_ad_1;
		me._marker_1__normal.style.visibility='inherit';
		me._marker_1__normal.style.left='0px';
		me._marker_1__normal.style.top='0px';
		me._marker_1.ggMarkerNormal=me._marker_1__normal;
		me._marker_1.ggMarkerInstances.push(me._marker_1__normal);
		var clonedActiveElement = new SkinElement_image_ad_2_Class(this,me._marker_1);
		me._marker_1__active= clonedActiveElement._image_ad_2;
		me._marker_1__active.style.visibility='hidden';
		me._marker_1__active.style.left='0px';
		me._marker_1__active.style.top='0px';
		me._marker_1.ggMarkerActive=me._marker_1__active;
		me._marker_1.ggMarkerInstances.push(me._marker_1__active);
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__active,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__active);
		}
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__normal,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__normal);
		}
		for (var i = 0; i < me._marker_1.childNodes.length; i++) {
			me._marker_1.ggMarkerInstances.push(me._marker_1.childNodes[i]);
		}
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
		var clonedNormalElement = new SkinElement_image_ad_1_Class(this,me._marker_1_mobile0);
		me._marker_1_mobile0__normal = clonedNormalElement._image_ad_1;
		me._marker_1_mobile0__normal.style.visibility='inherit';
		me._marker_1_mobile0__normal.style.left='0px';
		me._marker_1_mobile0__normal.style.top='0px';
		me._marker_1_mobile0.ggMarkerNormal=me._marker_1_mobile0__normal;
		me._marker_1_mobile0.ggMarkerInstances.push(me._marker_1_mobile0__normal);
		var clonedActiveElement = new SkinElement_image_ad_2_Class(this,me._marker_1_mobile0);
		me._marker_1_mobile0__active= clonedActiveElement._image_ad_2;
		me._marker_1_mobile0__active.style.visibility='hidden';
		me._marker_1_mobile0__active.style.left='0px';
		me._marker_1_mobile0__active.style.top='0px';
		me._marker_1_mobile0.ggMarkerActive=me._marker_1_mobile0__active;
		me._marker_1_mobile0.ggMarkerInstances.push(me._marker_1_mobile0__active);
		if (me._marker_1_mobile0.firstChild) {
			me._marker_1_mobile0.insertBefore(me._marker_1_mobile0__active,me._marker_1_mobile0.firstChild);
		} else {
			me._marker_1_mobile0.appendChild(me._marker_1_mobile0__active);
		}
		if (me._marker_1_mobile0.firstChild) {
			me._marker_1_mobile0.insertBefore(me._marker_1_mobile0__normal,me._marker_1_mobile0.firstChild);
		} else {
			me._marker_1_mobile0.appendChild(me._marker_1_mobile0__normal);
		}
		for (var i = 0; i < me._marker_1_mobile0.childNodes.length; i++) {
			me._marker_1_mobile0.ggMarkerInstances.push(me._marker_1_mobile0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_ad_1_Class(this,me._marker_1_mobile);
		me._marker_1_mobile__normal = clonedNormalElement._image_ad_1;
		me._marker_1_mobile__normal.style.visibility='inherit';
		me._marker_1_mobile__normal.style.left='0px';
		me._marker_1_mobile__normal.style.top='0px';
		me._marker_1_mobile.ggMarkerNormal=me._marker_1_mobile__normal;
		me._marker_1_mobile.ggMarkerInstances.push(me._marker_1_mobile__normal);
		var clonedActiveElement = new SkinElement_image_ad_2_Class(this,me._marker_1_mobile);
		me._marker_1_mobile__active= clonedActiveElement._image_ad_2;
		me._marker_1_mobile__active.style.visibility='hidden';
		me._marker_1_mobile__active.style.left='0px';
		me._marker_1_mobile__active.style.top='0px';
		me._marker_1_mobile.ggMarkerActive=me._marker_1_mobile__active;
		me._marker_1_mobile.ggMarkerInstances.push(me._marker_1_mobile__active);
		if (me._marker_1_mobile.firstChild) {
			me._marker_1_mobile.insertBefore(me._marker_1_mobile__active,me._marker_1_mobile.firstChild);
		} else {
			me._marker_1_mobile.appendChild(me._marker_1_mobile__active);
		}
		if (me._marker_1_mobile.firstChild) {
			me._marker_1_mobile.insertBefore(me._marker_1_mobile__normal,me._marker_1_mobile.firstChild);
		} else {
			me._marker_1_mobile.appendChild(me._marker_1_mobile__normal);
		}
		for (var i = 0; i < me._marker_1_mobile.childNodes.length; i++) {
			me._marker_1_mobile.ggMarkerInstances.push(me._marker_1_mobile.childNodes[i]);
		}
		me._image_4_mob.style[domTransition]='none';
		me._image_4_mob.style.visibility=(Number(me._image_4_mob.style.opacity)>0||!me._image_4_mob.style.opacity)?'inherit':'hidden';
		me._image_4_mob.ggVisible=true;
		me._image_5_mob.style[domTransition]='none';
		me._image_5_mob.style.visibility='hidden';
		me._image_5_mob.ggVisible=false;
		me._image_13_mob.style[domTransition]='none';
		me._image_13_mob.style.visibility=(Number(me._image_13_mob.style.opacity)>0||!me._image_13_mob.style.opacity)?'inherit':'hidden';
		me._image_13_mob.ggVisible=true;
		me._image_14_mob.style[domTransition]='none';
		me._image_14_mob.style.visibility='hidden';
		me._image_14_mob.ggVisible=false;
		me._image_10_mob.style[domTransition]='none';
		me._image_10_mob.style.visibility=(Number(me._image_10_mob.style.opacity)>0||!me._image_10_mob.style.opacity)?'inherit':'hidden';
		me._image_10_mob.ggVisible=true;
		me._image_11_mob.style[domTransition]='none';
		me._image_11_mob.style.visibility='hidden';
		me._image_11_mob.ggVisible=false;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_hotspot_53_changenode = function(){
		if(hotspotTemplates['Hotspot 53']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 53'].length; i++) {
				if (hotspotTemplates['Hotspot 53'][i]._image_12_1 && hotspotTemplates['Hotspot 53'][i]._image_12_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 53'][i]._image_12_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_53_varchanged_var_ht = function(){
		if(hotspotTemplates['Hotspot 53']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 53'].length; i++) {
				if (hotspotTemplates['Hotspot 53'][i]._image_12_1 && hotspotTemplates['Hotspot 53'][i]._image_12_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 53'][i]._image_12_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_44_changenode = function(){
		if(hotspotTemplates['Hotspot 44']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 44'].length; i++) {
				if (hotspotTemplates['Hotspot 44'][i]._image_9_1 && hotspotTemplates['Hotspot 44'][i]._image_9_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 44'][i]._image_9_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_44_varchanged_var_ht = function(){
		if(hotspotTemplates['Hotspot 44']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 44'].length; i++) {
				if (hotspotTemplates['Hotspot 44'][i]._image_9_1 && hotspotTemplates['Hotspot 44'][i]._image_9_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 44'][i]._image_9_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_43_changenode = function(){
		if(hotspotTemplates['Hotspot 43']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 43'].length; i++) {
				if (hotspotTemplates['Hotspot 43'][i]._image_8_1 && hotspotTemplates['Hotspot 43'][i]._image_8_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 43'][i]._image_8_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_43_varchanged_var_ht = function(){
		if(hotspotTemplates['Hotspot 43']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 43'].length; i++) {
				if (hotspotTemplates['Hotspot 43'][i]._image_8_1 && hotspotTemplates['Hotspot 43'][i]._image_8_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 43'][i]._image_8_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_12_changenode = function(){
		if(hotspotTemplates['Hotspot 12']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 12'].length; i++) {
				if (hotspotTemplates['Hotspot 12'][i]._rectangle_20 && hotspotTemplates['Hotspot 12'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Hotspot 12'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 12'][i]._rectangle_10 && hotspotTemplates['Hotspot 12'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Hotspot 12'][i]._rectangle_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_12_varchanged_var_ht = function(){
		if(hotspotTemplates['Hotspot 12']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 12'].length; i++) {
				if (hotspotTemplates['Hotspot 12'][i]._rectangle_20 && hotspotTemplates['Hotspot 12'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Hotspot 12'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 12'][i]._rectangle_10 && hotspotTemplates['Hotspot 12'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Hotspot 12'][i]._rectangle_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_11_changenode = function(){
		if(hotspotTemplates['Hotspot 11']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 11'].length; i++) {
				if (hotspotTemplates['Hotspot 11'][i]._rectangle_2 && hotspotTemplates['Hotspot 11'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Hotspot 11'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 11'][i]._rectangle_1 && hotspotTemplates['Hotspot 11'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 11'][i]._rectangle_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_11_varchanged_var_ht = function(){
		if(hotspotTemplates['Hotspot 11']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 11'].length; i++) {
				if (hotspotTemplates['Hotspot 11'][i]._rectangle_2 && hotspotTemplates['Hotspot 11'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Hotspot 11'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 11'][i]._rectangle_1 && hotspotTemplates['Hotspot 11'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 11'][i]._rectangle_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._image_11_1 && hotspotTemplates['ht_image'][i]._image_11_1.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._image_11_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_var_ht = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._image_11_1 && hotspotTemplates['ht_image'][i]._image_11_1.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._image_11_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._image_1_1 && hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._image_1_1 && hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_var_ht = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._image_1_1 && hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._image_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pic_mob_configloaded = function(){
		if(hotspotTemplates['ht_pic_mob']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pic_mob'].length; i++) {
				if (hotspotTemplates['ht_pic_mob'][i]._ht_pic_mob.logicBlock_visible) {
					hotspotTemplates['ht_pic_mob'][i]._ht_pic_mob.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
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
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('var_ht', true);
			} else {
				player.setVariableValue('var_ht', false);
			}
		}
		var hs='';
		if (me._image_133.ggParameter) {
			hs+=parameterToTransform(me._image_133.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_133.style[domTransform]=hs;
		var hs='';
		if (me._image_132.ggParameter) {
			hs+=parameterToTransform(me._image_132.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_132.style[domTransform]=hs;
		if (me.elementMouseDown['image_1']) {
			player.changeFovLog(-0.08,true);
		}
		if (me.elementMouseDown['image_15']) {
			player.changeFovLog(0.08,true);
		}
		if (me.elementMouseDown['image_2']) {
			player.changeTiltLog(-0.04,true);
		}
		if (me.elementMouseDown['image_9']) {
			player.changePanLog(0.04,true);
		}
		if (me.elementMouseDown['image_12']) {
			player.changePanLog(-0.04,true);
		}
		if (me.elementMouseDown['image_16']) {
			player.changeTiltLog(0.04,true);
		}
		var hs='';
		if (me._image_130.ggParameter) {
			hs+=parameterToTransform(me._image_130.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_130.style[domTransform]=hs;
		var hs='';
		if (me._image_13.ggParameter) {
			hs+=parameterToTransform(me._image_13.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		me._image_13.style[domTransform]=hs;
		if (me.elementMouseDown['image_1_mob']) {
			player.changeFovLog(-0.08,true);
		}
		if (me.elementMouseDown['image_15_mob']) {
			player.changeFovLog(0.08,true);
		}
		if (me.elementMouseDown['image_2_mob']) {
			player.changeTiltLog(-0.04,true);
		}
		if (me.elementMouseDown['image_9_mob']) {
			player.changePanLog(0.04,true);
		}
		if (me.elementMouseDown['image_12_mob']) {
			player.changePanLog(-0.04,true);
		}
		if (me.elementMouseDown['image_16_mob']) {
			player.changeTiltLog(0.04,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_53(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_53=document.createElement('div');
		el.ggId="Hotspot 53";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 158px;';
		hs+='position : absolute;';
		hs+='top : 346px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_53.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_53.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_53.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_53.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_53.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_53.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_12_1=document.createElement('div');
		els=me._image_12_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_12_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABRCAYAAACNIcveAAAFYElEQVR4nO2bT0wjVRzHvzPDSG1Gm2VZCB4sTThubAwVL0SwTThpNMaDXmT16sm7FxOO7kkPJgSsB2I8bFAPRmLYlZICIZpF0WjcKoVka0BDgtZqO7w+D53BcZjSzsz7TYe0n4T83vu1zO/3Ht95f+YNEudcAqAC0LvVSkYndDWyYdVutj0loKeEnhJMekoArRIeBXDDKH8JIEcUxz+cc4lz/oBgmz49Pf2T/59vOOdXieL5slRKWMR/KrCSBfAaQTxfkIwJjLEXnYIVCoXpWCx2PZPJRCjierVUSqg7ORlj5UgkclOW5eLk5ORHq6ur/xDEdg3V7OCIoigaANTr9dHNzc0niWK7tmYn6IJtU+LxeMzmEh3btQ1UCQAwMzNzBQAYY6NEscOvBAe6Tw'+
			'nj4+MjAMA5HySI68kGroRYLNYPAJxzjSCuJxu4EjRNe9Dm6rgaAlfC2NjYkFkeGhp6hCB2+MeEJnTXmJBIJAbNcrVaHSCKH+4xwVw1AoCu61eJ4odbCQAwMTHxsM3VXUoAgGQyOQCEZ9UYhhUjRfzwKyGdTo8C4Vk1dlQJYVk1dkQJIyMjV8xyGJ4ydUQJw8PDZ7PD7u5ux9cKYVkxUuTQtg30GaMJY6yczWY3UqlUPJlMHhruYwDvALhDkM+FmJ2goiEPUfbCTmhBDsAbAO4S5OVoO6KENsgByKJximWiApgHcODz2ucQoYTrAJ4FkAYwbVzXbyc4whgrK4ryHBq3jDA1+FXCDTROm0zMgZakE4CzjpgC8BAABQAzrPexxMcZXpqfRzJ+SHE45+S1Wu0+5/xV7qEtfpSwA+AxqyMSiTzDOb9WrVbf9/xX8c/HAF5w'+
			'8wte1wmPw9YBAMAYe6Jer4+6SYCA592uQr2uGCftkUul0qHd1ynW19dfj0ajU5lMRjFcJLvIp+2BK5XK3z7yFgrnXNN1fTqfz6cNF4kSzPV+qOGcXzOKJEp4Slim9JDtIi8TZLvIy0RwSkgkEoMO7x6EgZZt6jMKbtfb51AURcvlci9vbGz8KLIFAiDbO5DtDUSgqupbACDLcrFarX7Q6vu9MaE3OzRsTwk9JTSsVyWE92Xt85Ap4bbAJKkhU8K6wCSpIVPCHV3XSwITFQZjrGxz0c0Oqqq+6StbIvb29n63uciUoALIOvR6x1lbW/vJ5iJTgg4AiqK85CdhChYXF783y5Ik/QZiJQDAZwjRdFkoFIrb29t/mHVZlv8CtRIMXgnDbcEYK8/Ozi5bfZqm3TOKJM8YrRc5UBTlbc/ZC2J5eflrmwqKR0dH5gx2YXu8nk'+
			'XaGWCMFa3vKAZJqVQ6jMfj71l90Wj01snJyXdoo00ilAAAx51Uw9zc3OfWuizLRaMDgADGBKsq3nWXuhjy+fy38/PzRbMuSVI5Fot9YfkK+exg3VofowMzxdLS0l1rva+v7yvLWAAEqATTf6vt7AXAGCtbVSDLcrFSqazZcgpMCab/Exdt8M3W1tYv1rrtNmi7TaKV8GuQG6tcLrdvliVJKltuA1ftEa0EXVXVD9tvhj8WFhZ+NsuyLP/glE87VrQSVAT0Cl6pVDrc398/Mev9/f0HTfJpaYUrAY39BDn2Q55UKlWwVDuuBKDxygwp2Wz2vlmWZblo+edzt20RPjuY9tPWzfCOruullZUVc3MERVGK1o/dWq9nkU6dYv38NoyFU6FQsL6QKYSdnZ19a93YLbptw5n1ehbZakN15o9Go1O6rk97iNEWkiSVa7XaTT/X'+
			'oBoTzjrGsqcnwZganXJo25IrAWiowUOMttA07Z5tr+AaUc8Tmn3e7Psi8TwWIKgxQVSiTawQJM65qGtdWv4F1GKPFomuDQsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._image_12_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_12_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._image_12_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_53.appendChild(me._image_12_1);
		me.__div = me._hotspot_53;
	};
	function SkinHotspotClass_hotspot_44(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_44=document.createElement('div');
		el.ggId="Hotspot 44";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 159px;';
		hs+='position : absolute;';
		hs+='top : 256px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_44.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_44.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_44.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_44.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_44.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_44.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9_1=document.createElement('div');
		els=me._image_9_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_9_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_9_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._image_9_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_44.appendChild(me._image_9_1);
		me.__div = me._hotspot_44;
	};
	function SkinHotspotClass_hotspot_43(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_43=document.createElement('div');
		el.ggId="Hotspot 43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 255px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_43.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_43.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_43.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_43.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_43.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_43.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8_1=document.createElement('div');
		els=me._image_8_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_8_1';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_8_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._image_8_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_43.appendChild(me._image_8_1);
		me.__div = me._hotspot_43;
	};
	function SkinHotspotClass_hotspot_12(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_12=document.createElement('div');
		el.ggId="Hotspot 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_12.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_12.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_12.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_12.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_12.appendChild(me._rectangle_20);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_12.appendChild(me._rectangle_10);
		me.__div = me._hotspot_12;
	};
	function SkinHotspotClass_hotspot_11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_11=document.createElement('div');
		el.ggId="Hotspot 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_11.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_11.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_11.appendChild(me._rectangle_3);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_11.appendChild(me._rectangle_2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_11.appendChild(me._rectangle_1);
		me.__div = me._hotspot_11;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 48px;';
		hs+='position : absolute;';
		hs+='top : 347px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_image.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11_1=document.createElement('div');
		els=me._image_11_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_11_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._image_11_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('var_ht') == true)
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
		me._image_11_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._image_11_1);
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : 122px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_1";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('var_ht') == true)
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
					this.ggDx = 1;
					this.ggDy = -9;
					me._image_1_1.ggUpdatePosition(true);
				}
				else {
					me._image_1_1.ggDx=-1;
					me._image_1_1.ggDy=-1;
					me._image_1_1.ggUpdatePosition(true);
				}
			}
		}
		me._image_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width == 0)
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
		me._image_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._image_1_1);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_hotspot_picture(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_picture=document.createElement('div');
		el.ggId="Hotspot_Picture";
		el.ggDx=-0.16;
		el.ggDy=0.42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_picture.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_picture.onclick=function (e) {
			skin._external_picture_inf.style[domTransition]='none';
			skin._external_picture_inf.style.visibility=(Number(skin._external_picture_inf.style.opacity)>0||!skin._external_picture_inf.style.opacity)?'inherit':'hidden';
			skin._external_picture_inf.ggVisible=true;
			skin._external_picture_inf.ggSubElement.src=skin._external_picture_inf.ggText;
			skin._external_picture_inf.ggText=basePath + me.hotspot.url;
			skin._external_picture_inf.ggSubElement.style.width = '0px';
			skin._external_picture_inf.ggSubElement.style.height = '0px';
			skin._external_picture_inf.ggSubElement.src='';
			skin._external_picture_inf.ggSubElement.src=skin._external_picture_inf.ggText;
			skin._rectangle_pic_inf_bg.style[domTransition]='none';
			skin._rectangle_pic_inf_bg.style.visibility=(Number(skin._rectangle_pic_inf_bg.style.opacity)>0||!skin._rectangle_pic_inf_bg.style.opacity)?'inherit':'hidden';
			skin._rectangle_pic_inf_bg.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_picture.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_picture.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_picture.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_picture.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=-1;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_picture.appendChild(me._image_6);
		me.__div = me._hotspot_picture;
	};
	function SkinHotspotClass_ht_pic(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pic=document.createElement('div');
		el.ggId="ht_pic";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_pic.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_pic.onclick=function (e) {
			skin._external_1.style[domTransition]='none';
			skin._external_1.style.visibility=(Number(skin._external_1.style.opacity)>0||!skin._external_1.style.opacity)?'inherit':'hidden';
			skin._external_1.ggVisible=true;
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin._text_1.style[domTransition]='none';
			skin._text_1.style.visibility=(Number(skin._text_1.style.opacity)>0||!skin._text_1.style.opacity)?'inherit':'hidden';
			skin._text_1.ggVisible=true;
			skin._external_1.ggText=basePath + me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin._text_2.style[domTransition]='none';
			skin._text_2.style.visibility=(Number(skin._text_2.style.opacity)>0||!skin._text_2.style.opacity)?'inherit':'hidden';
			skin._text_2.ggVisible=true;
			skin._rectangle_4.style[domTransition]='none';
			skin._rectangle_4.style.visibility=(Number(skin._rectangle_4.style.opacity)>0||!skin._rectangle_4.style.opacity)?'inherit':'hidden';
			skin._rectangle_4.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_pic.appendChild(me._image_7);
		me.__div = me._ht_pic;
	};
	function SkinHotspotClass_ht_pic_mob(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pic_mob=document.createElement('div');
		el.ggId="ht_pic_mob";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_pic_mob.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_pic_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pic_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pic_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pic_mob.style[domTransition]='';
				if (me._ht_pic_mob.ggCurrentLogicStateVisible == 0) {
					me._ht_pic_mob.style.visibility=(Number(me._ht_pic_mob.style.opacity)>0||!me._ht_pic_mob.style.opacity)?'inherit':'hidden';
					me._ht_pic_mob.ggVisible=true;
				}
				else {
					me._ht_pic_mob.style.visibility="hidden";
					me._ht_pic_mob.ggVisible=false;
				}
			}
		}
		me._ht_pic_mob.onclick=function (e) {
			skin._external_1_mob.style[domTransition]='none';
			skin._external_1_mob.style.visibility=(Number(skin._external_1_mob.style.opacity)>0||!skin._external_1_mob.style.opacity)?'inherit':'hidden';
			skin._external_1_mob.ggVisible=true;
			skin._external_1_mob.ggSubElement.src=skin._external_1_mob.ggText;
			skin._text_1_mob.style[domTransition]='none';
			skin._text_1_mob.style.visibility=(Number(skin._text_1_mob.style.opacity)>0||!skin._text_1_mob.style.opacity)?'inherit':'hidden';
			skin._text_1_mob.ggVisible=true;
			skin._external_1_mob.ggText=basePath + me.hotspot.url;
			skin._external_1_mob.ggSubElement.style.width = '0px';
			skin._external_1_mob.ggSubElement.style.height = '0px';
			skin._external_1_mob.ggSubElement.src='';
			skin._external_1_mob.ggSubElement.src=skin._external_1_mob.ggText;
			skin._text_2_mob.style[domTransition]='none';
			skin._text_2_mob.style.visibility=(Number(skin._text_2_mob.style.opacity)>0||!skin._text_2_mob.style.opacity)?'inherit':'hidden';
			skin._text_2_mob.ggVisible=true;
			skin._rectangle_4_mob.style[domTransition]='none';
			skin._rectangle_4_mob.style.visibility=(Number(skin._rectangle_4_mob.style.opacity)>0||!skin._rectangle_4_mob.style.opacity)?'inherit':'hidden';
			skin._rectangle_4_mob.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic_mob.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic_mob.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic_mob.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pic_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7_mob=document.createElement('div');
		els=me._image_7_mob__img=document.createElement('img');
		els.className='ggskin ggskin_image_7_mob';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7_mob";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_7_mob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_pic_mob.appendChild(me._image_7_mob);
		me.__div = me._ht_pic_mob;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot 53') {
			hotspot.skinid = 'Hotspot 53';
			hsinst = new SkinHotspotClass_hotspot_53(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_53_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_53_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='Hotspot 44') {
			hotspot.skinid = 'Hotspot 44';
			hsinst = new SkinHotspotClass_hotspot_44(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_44_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_44_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='Hotspot 43') {
			hotspot.skinid = 'Hotspot 43';
			hsinst = new SkinHotspotClass_hotspot_43(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_43_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_43_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='Hotspot 12') {
			hotspot.skinid = 'Hotspot 12';
			hsinst = new SkinHotspotClass_hotspot_12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_12_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_12_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='Hotspot 11') {
			hotspot.skinid = 'Hotspot 11';
			hsinst = new SkinHotspotClass_hotspot_11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_11_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_11_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='Hotspot_Picture') {
			hotspot.skinid = 'Hotspot_Picture';
			hsinst = new SkinHotspotClass_hotspot_picture(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_pic') {
			hotspot.skinid = 'ht_pic';
			hsinst = new SkinHotspotClass_ht_pic(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_pic_mob';
			hsinst = new SkinHotspotClass_ht_pic_mob(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_pic_mob_configloaded();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 53']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 53'].length; i++) {
				hotspotTemplates['Hotspot 53'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 44']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 44'].length; i++) {
				hotspotTemplates['Hotspot 44'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 43']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 43'].length; i++) {
				hotspotTemplates['Hotspot 43'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 12']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 12'].length; i++) {
				hotspotTemplates['Hotspot 12'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 11']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 11'].length; i++) {
				hotspotTemplates['Hotspot 11'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot_Picture']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot_Picture'].length; i++) {
				hotspotTemplates['Hotspot_Picture'][i] = null;
			}
		}
		if(hotspotTemplates['ht_pic']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pic'].length; i++) {
				hotspotTemplates['ht_pic'][i] = null;
			}
		}
		if(hotspotTemplates['ht_pic_mob']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pic_mob'].length; i++) {
				hotspotTemplates['ht_pic_mob'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_image_ad_1_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_ad_1=document.createElement('div');
		els=me._image_ad_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_ad_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAADY0lEQVRYhbWYz0sUYRjHPzuMK4Zbh3bBhdoVIqpbUOmadCjWJAPdNCsKClLslv0HHgRvQomXpC5B9sNMjTRMqYulq1nHigrc6TCHqUMOtLgOTIfZlfV1pp11dx+Yy/O8+zyf5d1nn+8zHtM0cWtBX6AGaAJqgAPAbmAX8Af4DXwFFoEpVdcW3eb15III+gIVwHWgG9jvmhi+A3eA+6quJbcNEfQFWoABIJRHcdEUoFvVtfG8IIK+QHm6eFcBxUUbAm6quraWEyLoC+wExoGTbjLLsoxhGG5B3gIxVddWHSGCvoAXeAWccioYbWygqfksR2qOEqoOb0AoKwmWFz8w9WKS2emZ/4G9Ac6oupba8JimufFUVfrvVlX6Tbun62qHmVhJmG4ssZIwu6522O'+
			'ZJP3ez62YDxOw+UB3YY44+HnFVXLTRxyNmdWCPE0gsU9tjmmamDb8gdEHFjgoejT2l9njE7Z1vsYV381xuvUjy75YuVYCDqq4lpbTjuggA0D94uyAAgEh9Hf2Dt+1CIaADIAPRLZ5oaYtxrr21IICMnWtvpaUtZhe6CeCpqvTXAgvZEVmWmfu0QLg6XBQIACWhUH+41q5rIhJwWvRGGxuKCgAQCoeINjbYhU5LwJZLb2o+W1SAHHnrJOCQ6D1Se6wkEA55D0pY43iThcKFzCtnc8jrl4Cd2R5vuRdZlksCIcsy3nKv6PZJwKZhklpL5TOQ8jLDMEitpUS3LmEpok2mJJSSQDjk/SUBn0XvcnypJBAfFz/Yub9ICH9UAFMvJksCMTnx0s49LwGvRe/s9EzRr0RJKMxOz9iFXkuqrsWBb9lewzDo6+ktKkRfT6/dD/6b'+
			'qmvxzAC7I0YnRscZG3leFIDxZ2NMjNrq3AEgt54Yfv6ESH3dtgHm595zpe1Sbj2R3gu2jPPk3yQXms8z/ODhtgCGHzzkYku7HQBYa4AVEDTmkJMuvHGtMy+NeeNa5/805lB2XTu1PQucsEPPVttHIzXsDe3dUNs/lZ8sx5eYnHiZS23PAdHs/aPgvaOsrIz19XU3R8Fh75DEU+kDZ7A2ppyWB8AQ1r6xKgZy7aIxrPYtdBe9peramNMBt1t5J1b37Muj+A+sL3CvoK3cBkh8P+HH0iOrwC+s9xNLWKtkXNU1V8n/AfYZNuVvVGuPAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image ad_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -215px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_ad_1.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_image_ad_2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_ad_2=document.createElement('div');
		els=me._image_ad_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_ad_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAADdElEQVRYhbWYT0gUURzHPzu7WYHV5k7QwcqipfUQkpXZoYMRQomVUOfCQC+VHjYCPQdBczE7lFIXT7FBUq2WQV6CWiVNPGhMStmCB8e19GCpqx3e7LY7+2b/5PqFvfzem+/7zNv35/cbx8JDspbXr1YA54AK4BDgAXYAv4BZ4AswAPTomjGQjWdh4xqOTBBev7oVqAeaAG/2yHwF2oDHumYspoNQMgBcAMaBBzkCABwE2oFxr1+9mK6jdCa8fnUzcB9oyHHgdOoAbuqa8ScxKJ0Jr1/dDvRmC+BMO5dJagB6Tf8kJc2E168WmACn7QasKo1SfXiOI/tgj0fEoqvwYxaGv0Pf6E76x5xEV21h3gFndc1YAjETLkuHdjuAc2Ur3Kr5SXGRHK5kl/jVHZ'+
			'sjHIF7QTc9I1Z7MP3bgcaUmTAXz3PrE1s2wZ1LBueP2r6ZrV58gtZnKr+Xpc11umZ0x7eouQ3Hgb2JvbZugicNBsf25w4Q0+AkXOtUWUwFmQJ80wszi7FlVW8FALhzeX0AAMcPCB+J9gLXgPjuaLL2qClbobZ8fQAx1ZYLP4luAjh2F6ongI+JLU4F3t422OPJDwRAOAJn7qqyXVOpANXWaFVpNK8AAMVFwleiagWoTIkenssvQXrfkwpQao2Wl2wIg52vT0Fcx0mSHUj5kI2vqgBJZ3mBK6f7ICc5FeFv0TYFmE+MLK2Q7txfl6Krwt+iBQWRESUpHNkYCBtfQwHGrNGhbxsDMSz3HVewHFQgruON0Bu57wcF6LNG+8ecef9LwhHhK1GfomtGCNATo9FV0ILuvEJoQbdswevTCzOh2GZss7YGR1y8HMoPwKvPwk+i'+
			'+/DvFn2CuN+T1BpQGZxcH8DAJLQ8VWVNU8DjOIRZF6Rc54vLcOWRSiDk+C+AQMjB1UfShAagKVaPxM9GXTO6gU5rz+UotAQ8NHe5s16s4Qg0d7lpCXhYll6cdJrjAaQkutcBH3DK+lRwxMXrUTWebZeXiLsglm2HI+J8ySLbfg/cSAykFD9mXdANVNm/6z+5nLAif1uZ+oGLumbErwpp8WN2OIuomDIqB4AORL0xb21IWxCbZUAbkiQ4B00BzbpmpJQTkEVBbC4eHyIhnchx8AnzOZ8dQEwZPw0kSvJ9QkXkI/OAgfg+MYgoJUO6Zqxl8ixsXOMvx78vkqjgiaQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image ad_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -61px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_ad_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_ad_2.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	me._container_ad.logicBlock_visible();
	me._container_1.logicBlock_visible();
	me._container_2.logicBlock_visible();
	me._container_base.logicBlock_visible();
	me._container_ad_mobile.logicBlock_visible();
	me._image_8_mobile.logicBlock_visible();
	me._marker_1_mobile0.logicBlock_visible();
	me._marker_1_mobile.logicBlock_visible();
	me._container_base_mob.logicBlock_visible();
	me._image_4_mob.logicBlock_visible();
	me._image_5_mob.logicBlock_visible();
	me._image_13_mob.logicBlock_visible();
	me._image_14_mob.logicBlock_visible();
	me._image_1_mob.logicBlock_visible();
	me._image_15_mob.logicBlock_visible();
	me._image_10_mob.logicBlock_visible();
	me._image_11_mob.logicBlock_visible();
	me._image_3_exitvr_mob.logicBlock_visible();
	me._image_3_vr_mob.logicBlock_visible();
	me._container_2_mob.logicBlock_visible();
	me._rectangle_4_mob.logicBlock_visible();
	me._text_2_mob.logicBlock_visible();
	me._text_1_mob.logicBlock_visible();
	me._external_1_mob.logicBlock_visible();
	player.addListener('configloaded', function(args) { me._container_ad.logicBlock_visible();me._container_1.logicBlock_visible();me._container_2.logicBlock_visible();me._container_base.logicBlock_visible();me._container_ad_mobile.logicBlock_visible();me._image_8_mobile.logicBlock_visible();me._marker_1_mobile0.logicBlock_visible();me._marker_1_mobile.logicBlock_visible();me._container_base_mob.logicBlock_visible();me._image_4_mob.logicBlock_visible();me._image_5_mob.logicBlock_visible();me._image_13_mob.logicBlock_visible();me._image_14_mob.logicBlock_visible();me._image_1_mob.logicBlock_visible();me._image_15_mob.logicBlock_visible();me._image_10_mob.logicBlock_visible();me._image_11_mob.logicBlock_visible();me._image_3_exitvr_mob.logicBlock_visible();me._image_3_vr_mob.logicBlock_visible();me._container_2_mob.logicBlock_visible();me._rectangle_4_mob.logicBlock_visible();me._text_2_mob.logicBlock_visible();me._text_1_mob.logicBlock_visible();me._external_1_mob.logicBlock_visible(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_hotspot_53_changenode();me.callChildLogicBlocksHotspot_hotspot_44_changenode();me.callChildLogicBlocksHotspot_hotspot_43_changenode();me.callChildLogicBlocksHotspot_hotspot_12_changenode();me.callChildLogicBlocksHotspot_hotspot_11_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_pic_mob_configloaded(); });
	player.addListener('varchanged_var_ht', function(args) { me.callChildLogicBlocksHotspot_hotspot_53_varchanged_var_ht();me.callChildLogicBlocksHotspot_hotspot_44_varchanged_var_ht();me.callChildLogicBlocksHotspot_hotspot_43_varchanged_var_ht();me.callChildLogicBlocksHotspot_hotspot_12_varchanged_var_ht();me.callChildLogicBlocksHotspot_hotspot_11_varchanged_var_ht();me.callChildLogicBlocksHotspot_ht_image_varchanged_var_ht();me.callChildLogicBlocksHotspot_ht_node_varchanged_var_ht(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};