!function(){let e=document.querySelector(".mainBox1"),t=document.querySelector(".mainBox2"),u={},l={},n=function(){t.style.display="none",e.style.display="block";let n=document.getElementById("selectBox"),o=document.getElementById("select2Box"),r=(n.getElementsByTagName("options"),document.getElementById("grade")),m=document.getElementById("btn"),c=document.getElementById("result"),s=document.getElementById("imgBox"),d=document.getElementById("data1"),i=document.getElementById("data2"),b=document.getElementById("data3"),N=document.getElementById("data4"),v=document.getElementById("data5"),h=document.getElementById("data6"),g=document.getElementById("data7"),y=document.getElementById("data8"),p=document.getElementById("data9"),x=null,f=null,B=document.querySelector(".hiddenBox"),E={0:1100,1:1200,2:1200,3:1300,4:1700,5:1800,6:1800,7:1900,8:2200,9:2300,10:2300,11:2400};new Promise((e,t)=>{let u=null,l=new XMLHttpRequest;l.open("GET","json/attribute.txt"),l.onreadystatechange=function(){4===l.readyState&&200===l.status&&(u=l.responseText,e(u))},l.send(null)}).then(function(e){let t=e.toString();x=t.split(/[a-w]/i)}),m.onclick=function(){let e=r.value,t=n.selectedIndex,u=null,a=E[t],o=null,m=null,i=800;if(l.grade=e,u=t<4?250:t<8?350:500,l.meltingMax=u,(i=i+100*parseFloat(v.value)+100*parseFloat(h.value)+60*parseFloat(g.value)+50*parseFloat(y.value))<parseFloat(a)){let e=parseFloat(a)-parseFloat(i);return c.innerText="失败了，需要再多加点燃料\n",void(c.innerText+="还缺少"+e+"°")}(o=function(e=0,t=0){return 250*e/t}(i,a))>u&&(o=u),m=Math.floor(e/50+3*o/20+.5*parseFloat(p.value)),f=1.2*m+parseFloat(d.value),f=Math.floor(100*f)/100,c.innerText="初始伤害为 "+f+"(只取整)\n",c.innerText+="锻造结果等级 "+m+"\n",0==n.value&&(console.log(n.value),c.innerText+="资料来源：放置江湖攻略组 \n"),s.style.display="block"};let I=function(){let e=n.value,t=o.value,u=x[t].replace(/^\s*|\s*$/g,"").split("\n")[e].split("\t");d.value=u[2],i.value=u[4],b.value=u[5],N.value=u[3]};n.onchange=I,o.onchange=I,s.onclick=function(){s.style.display="none",B.style.display="block"},B.onclick=function(){u.attack=f,u.hardness=i.value,u.toughness=b.value,u.weight=N.value,u.mold=o.value,l.begin=d.value,a()}},a=function(){e.style.display="none",t.style.display="block";let l=document.getElementById("data00"),n=document.getElementById("data01"),a=document.getElementById("data02"),o=document.getElementById("data03"),r=document.getElementById("data04"),m=document.getElementById("data05"),c=document.getElementById("data06"),s=document.getElementById("show1"),d=document.getElementById("show2"),i=document.getElementById("btn2"),b=t.querySelectorAll("label"),N=document.getElementById("material1"),v=document.getElementById("material2"),h=document.getElementById("material3"),g=document.getElementById("btn3"),y=document.getElementById("btn4"),p=document.querySelector(".playBtn"),x=document.querySelector(".recastBox"),f=x.querySelectorAll("a"),B=document.getElementById("myMusic"),E=document.getElementById("input3"),I=document.getElementById("printBox");0!==Object.keys(u).length&&(l.value=parseInt(u.attack),n.value=u.weight,a.value=u.hardness,o.value=u.toughness);let k=null,w=null,F=null,T=!1,C={},S=null,q=1,M=1,V=0,j=!1,O=!1,A=a.value,G=o.value,H=parseFloat(u.mold),L=["长剑","短剑","软剑","重剑","刺剑"],P=["长刀","大环刀","短刀","弯刀","双刃斧"],R=["长棍","狼牙棒","三节棍","长枪","战戟"],X=["长鞭","软鞭","九节鞭","杆子鞭","链枷"],$=["双环","对剑","双钩"],z=L.concat(P).concat(R).concat(X).concat($),D=function(){let e=["1","0.033","0.4","-0.4","1","1","0.02","-0.4","0.4","1","1.1","0.01","0.15","-0.15","1.2","1.2","0.033","0.38","-0.38","1.1","1.2","0.02","-0.38","0.38","1.3","1.4","0.01","0.35","-0.25","1.45","1.2","0.03","0.05","-0.05","1.6","1.3","0.02","-0.25","0.25","1.7","1.4","0.01","0.03","-0.03","1.85","1.6","0.033","0.25","-0.2","1","1.4","0.02","-0.1","0.25","1.2","1.75","0.01","0.15","-0.05","1.2","1.25","0.01","0.2","-0.12","1.1","1.4","0.015","-0.15","0.25","1.15","1.5","0.01","0.12","-0.08","1.25"],t=["1.1","0.033","0.35","-0.2","1","1.2","0.02","-0.2","0.35","1.1","1.35","0.01","0.15","-0.15","1.25","1","0.025","0.33","-0.3","1","1.1","0.01","-0.25","0.28","1.1","1.2","0.01","0.2","-0.2","1.25","1.2","0.01","0.4","-0.4","1.1","1.3","0.02","-0.15","0.15","1","1.25","0.01","0.1","-0.1","1.2","1.1","0.03","0.2","-0.12","1","1.3","0.02","-0.12","0.2","1","1.15","0.015","0.15","-0.15","1.25","1.2","0.025","0.3","-0.32","1","1.25","0.038","-0.15","0.27","1.1","1.3","0.02","0.25","-0.22","1.25"],u=["1.1","0.03","0.3","-0.2","1","1.2","0.05","-0.2","0.25","1.1","1.25","0.05","0.2","-0.15","1.2","1","0.25","0.28","-0.15","1","1.1","0.05","-0.2","0.2","1.1","1.2","0.03","0.15","-0.15","1.2","1","0.02","0.12","-0.08","1","1.1","0.02","-0.4","0.4","1","1.25","0.01","0.1","-0.1","1.25","0.85","0.05","0.25","-0.2","1","0.9","0.04","-0.2","0.25","1.1","1","0.03","0.15","-0.15","1.35","0.95","0.05","0.22","-0.1","1","1","0.04","-0.2","0.18","1.1","1.15","0.03","0.15","-0.15","1.2"],l=["1","0.01","0.3","-0.3","1","1","0.01","-0.3","0.3","1.1","1.2","0.01","0.2","-0.2","1.25","0.8","0.005","0.15","-0.1","1.2","0.8","0.004","-0.1","0.25","1.25","1","0.002","0.1","-0.1","1.4","1","0.15","0.25","-0.2","1","0.9","0.1","-0.2","0.25","1.1","1.1","0.1","0.15","-0.15","1.25","0.75","0.03","0.15","-0.15","1.2","0.9","0.02","-0.15","0.15","1.3","1","0.01","0.1","-0.1","1.4","1.1","0.05","0.25","-0.1","1","0.98","0.08","-0.2","0.25","1.1","1.2","0.1","0.15","-0.05","1.2"],n=["1.15","0.04","0.2","-0.05","1.1","1.15","0.04","-0.12","0.2","1.1","0.9","0.03","0.14","0.1","0.85","1.2","0.05","0.2","-0.05","1.1","1.25","0.05","-0.12","0.2","1.1","1.1","0.04","0.14","0.1","1","1.6","0.04","0.23","-0.12","1","1.6","0.04","-0.12","0.23","1","1.4","0.03","0.18","0.18","1.1"],a=H,o=H,r=null,m=null;switch(r=0===(o=parseFloat(o)%5)?60:15*o-15,m=0===o?74:15*o-1,Math.floor(a/5.1)){case 0:k=["锐金","玄铁","晶竹"],w=e.slice(r,m+1);break;case 1:k=["陨铁","锡沙","秘银"],w=t.slice(r,m+1);break;case 2:k=["降龙木","锰钢","血龙木"],w=u.slice(r,m+1);break;case 3:k=["古藤","绵铁","蟒筋"],w=l.slice(r,m+1);break;case 4:k=["镜铁","磷石","黄晶"],w=n.slice(r,m+1)}return w};new Promise((e,t)=>{let u=null,l=new XMLHttpRequest;l.open("GET","json/recast.txt"),l.onreadystatechange=function(){4===l.readyState&&200===l.status&&(u=l.responseText,e(u))},l.send(null)}).then(function(e){let t=e.toString();S=t.split(" ");let l=parseInt(u.mold),n=6*(l-1),a=6*l-1;F=S.slice(n,a+1)}).then(D).then(function(){if(0!==Object.keys(F).length){let e=F[4].split(","),t=F[5].split(",");N.textContent=k[0],v.textContent=k[1],h.textContent=k[2],C["c-name"]=F[0],C["c-attack"]=Number(F[1]),C["c-weight"]=Number(F[3]),C["c-down-hardness"]=Number(e[0]),C["c-up-hardness"]=Number(e[1]),C["c-down-toughness"]=Number(t[0]),C["c-up-toughness"]=Number(t[1]),I.innerText+="初始神兵"+C["c-name"]+"\n"}});let J=function(e,t,u){Number(e[1])<Number(t[1])&&Number(l.value)>=460?l.value=460:Number(e[1])>Number(t[1])&&Number(l.value)>=460?(l.value=460,I.innerText+="当前伤害可能不准确\n"):l.value=Number(l.value)+Number(r.value)*(Number(t[1])-Number(e[1])),Number(l.value)&&(n.value=Number(n.value)/Number(e[3])*Number(t[3]));let m=e[4].split(","),c=e[5].split(","),s=t[4].split(","),d=t[5].split(",");return a.value=(Number(s[1])-Number(s[0]))*(Number(a.value)-Number(m[0]))/(Number(m[1])-Number(m[0]))+Number(s[0]),Number(a.value)<Number(s[0])&&(a.value=Number(s[0])),Number(a.value)>Number(s[1])&&(a.value=Number(s[1])),o.value=(Number(d[1])-Number(d[0]))*(Number(o.value)-Number(c[0]))/(Number(c[1])-Number(c[0]))+Number(d[0]),Number(o.value)<Number(d[0])&&(o.value=Number(d[0])),Number(o.value)>Number(d[1])&&(o.value=Number(d[1])),[s,d,t[3]]},K=function(e){b[1].childNodes[0].nodeValue="当前重量(上限"+e[2]+")",b[2].childNodes[0].nodeValue="当前硬度(上限"+e[0][1]+")",b[3].childNodes[0].nodeValue="当前韧度(上限"+e[1][1]+")",C["c-weight"]=e[2],C["c-down-hardness"]=e[0][0],C["c-up-hardness"]=e[0][1],C["c-down-toughness"]=e[1][0],C["c-up-toughness"]=e[1][1]};m.onchange=function(){s.innerText=this.value,a.value=Number(A)+Number(this.value)},c.onchange=function(){d.innerText=this.value,o.value=Number(G)+Number(this.value)},i.onclick=function(){m.disabled=!0,c.disabled=!0,T=!0,b[1].childNodes[0].nodeValue="当前重量(上限"+C["c-weight"]+")",b[2].childNodes[0].nodeValue="当前硬度(上限"+C["c-up-hardness"]+")",b[3].childNodes[0].nodeValue="当前韧度(上限"+C["c-up-toughness"]+")",this.style.color="#eee"},N.onclick=function(){for(V=0;q;)T&&Number(r.value)<300&&(Number(l.value)<460&&(l.value=(Number(l.value)+Number(w[0])).toFixed(2)),Number(n.value)<C["c-weight"]&&(n.value=(Number(n.value)+Number(w[1])).toFixed(2)),!(Number(a.value)>=C["c-up-hardness"]&&Number(w[2])>0||Number(a.value)<C["c-down-hardness"]&&Number(w[2])<0)&&(a.value=(Number(a.value)+Number(w[2])).toFixed(2)),!(Number(o.value)>=C["c-up-toughness"]&&Number(w[3])>0||Number(o.value)<C["c-down-toughness"]&&Number(w[3])<0)&&(o.value=(Number(o.value)+Number(w[3])).toFixed(2)),r.value=Number(r.value)+1,V++),q--;q=Number(E.value),T&&Number(r.value)<=300&&V&&(I.innerText+="淬炼了"+V+this.textContent+"\n",console.dir(I))},v.onclick=function(){for(V=0;q;)T&&Number(r.value)<300&&(Number(l.value)<460&&(l.value=(Number(l.value)+Number(w[5])).toFixed(2)),Number(n.value)<C["c-weight"]&&(n.value=(Number(n.value)+Number(w[6])).toFixed(3)),!(Number(a.value)>=C["c-up-hardness"]&&Number(w[7])>0||Number(a.value)<C["c-down-hardness"]&&Number(w[7])<0)&&(a.value=(Number(a.value)+Number(w[7])).toFixed(2)),!(Number(o.value)>=C["c-up-toughness"]&&Number(w[8])>0||Number(o.value)<C["c-down-toughness"]&&Number(w[8])<0)&&(o.value=(Number(o.value)+Number(w[8])).toFixed(2)),r.value=Number(r.value)+1,V++),q--;q=Number(E.value),T&&Number(r.value)<=300&&V&&(I.innerText+="淬炼了"+V+this.textContent+"\n")},h.onclick=function(){for(V=0;q;)T&&Number(r.value)<300&&(Number(l.value)<460&&(l.value=(Number(l.value)+Number(w[10])).toFixed(2)),Number(n.value)<C["c-weight"]&&(n.value=(Number(n.value)+Number(w[11])).toFixed(2)),!(Number(a.value)>=C["c-up-hardness"]&&Number(w[12])>0||Number(a.value)<C["c-down-hardness"]&&Number(w[12])<0)&&(a.value=(Number(a.value)+Number(w[12])).toFixed(2)),!(Number(o.value)>=C["c-up-toughness"]&&Number(w[13])>0||Number(o.value)<C["c-down-toughness"]&&Number(w[13])<0)&&(o.value=(Number(o.value)+Number(w[13])).toFixed(2)),r.value=Number(r.value)+1,V++),q--;q=Number(E.value),T&&Number(r.value)<=300&&V&&(I.innerText+="淬炼了"+V+this.textContent+"\n")},g.onclick=function(){if(M%2==0){if((q=Number(E.value))<1||q>300-Number(r.value))return q=1,void(E.value=1);this.style.background="#000",this.textContent="锁定解除",E.disabled=!0}else q=1,this.style.background="#c8e3c8",this.textContent="倍数锁定",E.disabled=!1,E.value=1;M++},p.onclick=function(){null!==B&&(B.paused?B.play():B.pause()),j?(this.className="playBtn",j=!j):(this.className+=" active",j=!j)},y.onclick=function(){if(T&&!O){O=!0,x.style.display="block";let e=[],t=u.mold;t<=5&&(e=L.slice()),t<=10&&H>5&&(e=P.slice()),t<=15&&H>10&&(e=R.slice()),t<=20&&H>15&&(e=X.slice()),t>20&&(e=$.slice());let l=e.splice(H%5-1,1);for(let n=0;n<f.length;n++)f[n].textContent=e[n],f[n].onclick=function(){I.innerText+=l+"重铸成"+this.textContent+"\n",H=z.indexOf(this.textContent)+1,u.mold=H,console.log(D());let e=S.slice(6*(t-1),6*t),n=S.slice(6*(H-1),6*H),a=(D(),J(e,n));K(a)}}else T&&O&&(O=!1,x.style.display="none")},x.onclick=function(){O=!1,x.style.display="none"}},o=window.location.href,r=o.indexOf("#");switch(-1===r?null:o.slice(r+1)){case"first":n();break;case"second":a();break;default:n()}}();