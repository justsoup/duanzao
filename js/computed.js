!function(){let e=document.querySelector(".mainBox1"),t=document.querySelector(".mainBox2"),u={},n=function(){t.style.display="none",e.style.display="block";let n=document.getElementById("selectBox"),a=document.getElementById("select2Box"),o=(n.getElementsByTagName("options"),document.getElementById("grade")),c=document.getElementById("btn"),s=document.getElementById("result"),r=document.getElementById("imgBox"),m=document.getElementById("data1"),d=document.getElementById("data2"),i=document.getElementById("data3"),v=document.getElementById("data4"),b=document.getElementById("data5"),N=document.getElementById("data6"),h=document.getElementById("data7"),g=document.getElementById("data8"),y=document.getElementById("data9"),p=null,x=null,f=document.querySelector(".hiddenBox"),B={0:1100,1:1200,2:1200,3:1300,4:1700,5:1800,6:1800,7:1900,8:2200,9:2300,10:2300,11:2400};new Promise((e,t)=>{let u=null,n=new XMLHttpRequest;n.open("GET","json/attribute.txt"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(u=n.responseText,e(u))},n.send(null)}).then(function(e){let t=e.toString();p=t.split(/[a-w]/i)}),c.onclick=function(){let e=o.value,t=n.selectedIndex,u=null,l=B[t],a=null,c=null,d=800;if(u=t<4?250:t<8?350:500,(d=d+100*parseFloat(b.value)+100*parseFloat(N.value)+60*parseFloat(h.value)+50*parseFloat(g.value))<parseFloat(l)){let e=parseFloat(l)-parseFloat(d);return s.innerText="失败了，需要再多加点燃料\n",void(s.innerText+="还缺少"+e+"°")}(a=function(e=0,t=0){return 250*e/t}(d,l))>u&&(a=u),c=Math.floor(e/50+3*a/20+.5*parseFloat(y.value)),x=1.2*c+parseFloat(m.value),x=Math.floor(100*x)/100,s.innerText="初始伤害为 "+x+"(只取整)\n",s.innerText+="锻造结果等级 "+c+"\n",0==n.value&&(console.log(n.value),s.innerText+="资料来源：放置江湖攻略组 \n"),r.style.display="block"};let w=function(){let e=n.value,t=a.value,u=p[t].replace(/^\s*|\s*$/g,"").split("\n")[e].split("\t");m.value=u[2],d.value=u[4],i.value=u[5],v.value=u[3]};n.onchange=w,a.onchange=w,r.onclick=function(){r.style.display="none",f.style.display="block"},f.onclick=function(){u.attack=x,u.hardness=d.value,u.toughness=i.value,u.weight=v.value,u.mold=a.value,l()}},l=function(){e.style.display="none",t.style.display="block";let n=document.getElementById("data00"),l=document.getElementById("data01"),a=document.getElementById("data02"),o=document.getElementById("data03"),c=document.getElementById("data04"),s=document.getElementById("data05"),r=document.getElementById("data06"),m=document.getElementById("show1"),d=document.getElementById("show2"),i=document.getElementById("btn2"),v=t.querySelectorAll("label"),b=document.getElementById("material1"),N=document.getElementById("material2"),h=document.getElementById("material3"),g=document.getElementById("btn3"),y=document.getElementById("btn4"),p=document.querySelector(".playBtn"),x=document.querySelector(".backBtn"),f=document.querySelector(".dataBtn"),B=document.querySelector(".resetBtn"),w=document.querySelector(".recastBox"),E=w.querySelectorAll("a"),I=document.getElementById("myMusic"),k=document.getElementById("input3"),F=document.getElementById("printBox");0!==Object.keys(u).length&&(n.value=parseInt(u.attack),l.value=u.weight,a.value=u.hardness,o.value=u.toughness);let T=null,S=null,q=null,C=null,j=!1,M={},O={},V=null,A=1,G=1,H=0,L=null,P=!1,R=!1,X=!1,$=a.value,z=o.value,D=[n.value,l.value,a.value,o.value,c.value],J=parseFloat(u.mold),K=["长剑","短剑","软剑","重剑","刺剑"],Q=["长刀","大环刀","短刀","弯刀","双刃斧"],U=["长棍","狼牙棒","三节棍","长枪","战戟"],W=["长鞭","软鞭","九节鞭","杆子鞭","链枷"],Y=["双环","对剑","双钩"],Z=K.concat(Q).concat(U).concat(W).concat(Y),_=function(){let e=["1","0.033","0.4","-0.4","1","1","0.02","-0.4","0.4","1","1.1","0.01","0.15","-0.15","1.2","1.2","0.033","0.38","-0.38","1.1","1.2","0.02","-0.38","0.38","1.3","1.4","0.01","0.35","-0.25","1.45","1.2","0.03","0.05","-0.05","1.6","1.3","0.02","-0.25","0.25","1.7","1.4","0.01","0.03","-0.03","1.85","1.6","0.033","0.25","-0.2","1","1.4","0.02","-0.1","0.25","1.2","1.75","0.01","0.15","-0.05","1.2","1.25","0.01","0.2","-0.12","1.1","1.4","0.015","-0.15","0.25","1.15","1.5","0.01","0.12","-0.08","1.25"],t=["1.1","0.033","0.35","-0.2","1","1.2","0.02","-0.2","0.35","1.1","1.35","0.01","0.15","-0.15","1.25","1","0.025","0.33","-0.3","1","1.1","0.01","-0.25","0.28","1.1","1.2","0.01","0.2","-0.2","1.25","1.2","0.01","0.4","-0.4","1.1","1.3","0.02","-0.15","0.15","1","1.25","0.01","0.1","-0.1","1.2","1.1","0.03","0.2","-0.12","1","1.3","0.02","-0.12","0.2","1","1.15","0.015","0.15","-0.15","1.25","1.2","0.025","0.3","-0.32","1","1.25","0.038","-0.15","0.27","1.1","1.3","0.02","0.25","-0.22","1.25"],u=["1.1","0.03","0.3","-0.2","1","1.2","0.05","-0.2","0.25","1.1","1.25","0.05","0.2","-0.15","1.2","1","0.25","0.28","-0.15","1","1.1","0.05","-0.2","0.2","1.1","1.2","0.03","0.15","-0.15","1.2","1","0.02","0.12","-0.08","1","1.1","0.02","-0.4","0.4","1","1.25","0.01","0.1","-0.1","1.25","0.85","0.05","0.25","-0.2","1","0.9","0.04","-0.2","0.25","1.1","1","0.03","0.15","-0.15","1.35","0.95","0.05","0.22","-0.1","1","1","0.04","-0.2","0.18","1.1","1.15","0.03","0.15","-0.15","1.2"],n=["1","0.01","0.3","-0.3","1","1","0.01","-0.3","0.3","1.1","1.2","0.01","0.2","-0.2","1.25","0.8","0.005","0.15","-0.1","1.2","0.8","0.004","-0.1","0.25","1.25","1","0.002","0.1","-0.1","1.4","1","0.15","0.25","-0.2","1","0.9","0.1","-0.2","0.25","1.1","1.1","0.1","0.15","-0.15","1.25","0.75","0.03","0.15","-0.15","1.2","0.9","0.02","-0.15","0.15","1.3","1","0.01","0.1","-0.1","1.4","1.1","0.05","0.25","-0.1","1","0.98","0.08","-0.2","0.25","1.1","1.2","0.1","0.15","-0.05","1.2"],l=["1.15","0.04","0.2","-0.05","1.1","1.15","0.04","-0.12","0.2","1.1","0.9","0.03","0.14","0.1","0.85","1.2","0.05","0.2","-0.05","1.1","1.25","0.05","-0.12","0.2","1.1","1.1","0.04","0.14","0.1","1","1.6","0.04","0.23","-0.12","1","1.6","0.04","-0.12","0.23","1","1.4","0.03","0.18","0.18","1.1"],a=["460","25","150","30","300","460","25","30","150","300","460","25","120","30","300","460","15","140","25","300","460","15","25","120","300","460","15","120","25","300","460","15","30","10","300","460","15","10","90","300","460","15","30","10","300","460","50","60","40","300","460","50","40","200","300","460","50","60","40","300","460","13","65","40","300","460","14","18","120","300","460","15","50","50","300"],o=["460","35","160","35","300","460","35","35","140","300","460","35","160","35","300","460","45","170","45","300","460","25","30","180","300","460","25","170","45","300","460","15","150","40","300","460","15","40","110","300","460","15","150","30","300","460","20","120","20","300","460","20","20","120","300","460","20","120","20","300","460","45","155","35","300","460","50","40","160","300","460","55","135","45","300"],c=["460","50","100","30","300","460","50","30","100","300","460","50","100","30","300","460","60","200","20","300","460","60","60","90","300","460","60","200","20","300","460","25","90","20","300","460","25","20","90","300","460","25","90","20","300","460","45","130","30","300","460","45","45","100","300","460","45","130","30","300","460","40","135","45","300","460","45","40","90","300","460","50","115","35","300"],s=["460","20","160","20","300","460","20","20","160","300","460","20","160","20","300","460","12","40","40","300","460","10","10","120","300","460","12","40","40","300","460","40","160","25","300","460","40","50","80","300","460","40","160","25","300","460","25","100","20","300","460","25","20","100","300","460","25","120","30","300","460","20","140","30","300","460","38","30","90","300","460","45","125","40","300"],r=["460","35","130","40","300","460","35","30","120","300","460","25","110","70","300","460","40","100","30","300","460","40","30","170","300","460","30","80","120","300","460","35","130","40","300","460","35","30","130","300","460","25","90","90","300"],m=J,d=J,i=null,v=null;switch(i=0===(d=parseFloat(d)%5)?60:15*d-15,v=0===d?74:15*d-1,Math.floor(m/5.1)){case 0:T=["锐金","玄铁","晶竹"],S=e.slice(i,v+1),q=a.slice(i,v+1);break;case 1:T=["陨铁","锡沙","秘银"],S=t.slice(i,v+1),q=o.slice(i,v+1);break;case 2:T=["降龙木","锰钢","血龙木"],S=u.slice(i,v+1),q=c.slice(i,v+1);break;case 3:T=["古藤","绵铁","蟒筋"],S=n.slice(i,v+1),q=s.slice(i,v+1);break;case 4:T=["镜铁","磷石","黄晶"],S=l.slice(i,v+1),q=r.slice(i,v+1)}},ee=function(){if(0!==Object.keys(C).length){let e=C[4].split(","),t=C[5].split(",");b.textContent=T[0],N.textContent=T[1],h.textContent=T[2],M["c-name"]=C[0],M["c-attack"]=Number(C[1]),M["c-weight"]=Number(C[3]),M["c-down-hardness"]=Number(e[0]),M["c-up-hardness"]=Number(e[1]),M["c-down-toughness"]=Number(t[0]),M["c-up-toughness"]=Number(t[1]),F.innerText="初始神兵"+M["c-name"]+"\n"}};new Promise((e,t)=>{let u=null,n=new XMLHttpRequest;n.open("GET","json/recast.txt"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(u=n.responseText,e(u))},n.send(null)}).then(function(e){let t=e.toString();V=t.split(" ");let n=parseInt(u.mold),l=6*(n-1),a=6*n-1;C=V.slice(l,a+1)}).then(_).then(ee);let te=function(e,t,u){if(Number(e[1])<Number(t[1])&&Number(n.value)>=460)n.value=460;else if(Number(e[1])>Number(t[1])&&Number(n.value)>=460)n.value=460,F.innerText+="伤害不准确\n神兵已作废\n";else{let u=Number(n.value)+Number(c.value)*(Number(t[1])-Number(e[1]));n.value=u>460?460:u}l.value=Number(l.value)/Number(e[3])*Number(t[3]);let s=e[4].split(","),r=e[5].split(","),m=t[4].split(","),d=t[5].split(",");return a.value=(Number(m[1])-Number(m[0]))*(Number(a.value)-Number(s[0]))/(Number(s[1])-Number(s[0]))+Number(m[0]),Number(a.value)>Number(m[1])&&(a.value=Number(m[1])),o.value=(Number(d[1])-Number(d[0]))*(Number(o.value)-Number(r[0]))/(Number(r[1])-Number(r[0]))+Number(d[0]),Number(o.value)>Number(d[1])&&(o.value=Number(d[1])),[m,d,t[3]]},ue=function(e){M["c-weight"]=e[2],M["c-down-hardness"]=e[0][0],M["c-up-hardness"]=e[0][1],M["c-down-toughness"]=e[1][0],M["c-up-toughness"]=e[1][1],ne()};s.onchange=function(){m.innerText=this.value,a.value=Number($)+Number(this.value)},r.onchange=function(){d.innerText=this.value,o.value=Number(z)+Number(this.value)},i.onclick=function(){Number(a.value)>Number(M["c-up-hardness"])&&(a.value=M["c-up-hardness"]),s.disabled=!0,r.disabled=!0,ne(),this.style.color="#eee",j||(L=[n.value,l.value,a.value,o.value,c.value,u.mold]),j=!0},b.onclick=function(){for(H=0;A;)j&&Number(c.value)<300&&(O["c-weight"]=q[1],O["c-up-hardness"]=q[2],O["c-down-toughness"]=q[3],O["c-down-hardness"]=M["c-down-hardness"],O["c-up-toughness"]=M["c-up-toughness"],D=[n.value,l.value,a.value,o.value,c.value,J],Number(n.value)<460&&(n.value=(Number(n.value)+Number(S[0])).toFixed(2)),Number(l.value)<O["c-weight"]&&(l.value=(Number(l.value)+Number(S[1])).toFixed(2)),!(Number(a.value)>=O["c-up-hardness"]&&Number(S[2])>0||Number(a.value)<O["c-down-hardness"]&&Number(S[2])<0)&&(a.value=(Number(a.value)+Number(S[2])).toFixed(2)),!(Number(o.value)>=O["c-up-toughness"]&&Number(S[3])>0||Number(o.value)<O["c-down-toughness"]&&Number(S[3])<0)&&(o.value=(Number(o.value)+Number(S[3])).toFixed(2)),c.value=Number(c.value)+1,H++),A--;A=Number(k.value),j&&Number(c.value)<=300&&H&&(F.innerText+="淬炼了"+H+this.textContent+"\n")},N.onclick=function(){for(H=0;A;)D=[n.value,l.value,a.value,o.value,c.value,J],j&&Number(c.value)<300&&(O["c-weight"]=q[6],O["c-down-hardness"]=q[7],O["c-up-toughness"]=q[8],O["c-up-hardness"]=M["c-up-hardness"],O["c-down-toughness"]=M["c-down-toughness"],Number(n.value)<460&&(n.value=(Number(n.value)+Number(S[5])).toFixed(2)),Number(l.value)<O["c-weight"]&&(l.value=(Number(l.value)+Number(S[6])).toFixed(3)),!(Number(a.value)>=O["c-up-hardness"]&&Number(S[7])>0||Number(a.value)<O["c-down-hardness"]&&Number(S[7])<0)&&(a.value=(Number(a.value)+Number(S[7])).toFixed(2)),!(Number(o.value)>=O["c-up-toughness"]&&Number(S[8])>0||Number(o.value)<O["c-down-toughness"]&&Number(S[8])<0)&&(o.value=(Number(o.value)+Number(S[8])).toFixed(2)),c.value=Number(c.value)+1,H++),A--;A=Number(k.value),j&&Number(c.value)<=300&&H&&(F.innerText+="淬炼了"+H+this.textContent+"\n")},h.onclick=function(){for(H=0;A;)D=[n.value,l.value,a.value,o.value,c.value,J],j&&Number(c.value)<300&&(O["c-weight"]=q[11],O["c-up-hardness"]=q[12],O["c-down-toughness"]=q[13],O["c-down-hardness"]=M["c-down-hardness"],O["c-up-toughness"]=M["c-up-toughness"],Number(J)>20&&(O["c-down-toughness"]=M["c-down-toughness"],O["c-up-toughness"]=q[13]),Number(n.value)<460&&(n.value=(Number(n.value)+Number(S[10])).toFixed(2)),Number(l.value)<O["c-weight"]&&(l.value=(Number(l.value)+Number(S[11])).toFixed(2)),!(Number(a.value)>=O["c-up-hardness"]&&Number(S[12])>0||Number(a.value)<O["c-down-hardness"]&&Number(S[12])<0)&&(a.value=(Number(a.value)+Number(S[12])).toFixed(2)),!(Number(o.value)>=O["c-up-toughness"]&&Number(S[13])>0||Number(o.value)<O["c-down-toughness"]&&Number(S[13])<0)&&(o.value=(Number(o.value)+Number(S[13])).toFixed(2)),c.value=Number(c.value)+1,H++),A--;A=Number(k.value),j&&Number(c.value)<=300&&H&&(F.innerText+="淬炼了"+H+this.textContent+"\n")},g.onclick=function(){if(G%2==0){if((A=Number(k.value))<1||A>300-Number(c.value))return A=1,void(k.value=1);this.style.background="#000",this.textContent="锁定解除",k.disabled=!0}else A=1,this.style.background="#c8e3c8",this.textContent="倍数锁定",k.disabled=!1,k.value=1;G++},p.onclick=function(){null!==I&&(I.paused?I.play():I.pause()),R?(this.className="playBtn",R=!R):(this.className+=" active",R=!R)},x.onclick=function(){J===D[5]&&c.value!==D[4]&&(n.value=D[0],l.value=D[1],a.value=D[2],o.value=D[3],c.value=D[4],F.innerText+="回退了一次淬炼\n")},f.onclick=function(){F.innerText+="伤害 重量 硬度 韧度\n",F.innerText+=S.slice(0,4).join(" | ")+"\n",F.innerText+=S.slice(5,9).join(" | ")+"\n",F.innerText+=S.slice(10,14).join(" | ")+"\n"},B.onclick=function(){j&&(n.value=L[0],l.value=L[1],a.value=L[2],o.value=L[3],c.value=0,J=parseFloat(L[5]),D[5]=null,_(),F.innerText="初始神兵"+C[0]+"\n",P=!0,ne())},y.onclick=function(){if(j&&!X){X=!0,w.style.display="block";let e=[],t=u.mold;t<=5&&(e=K.slice()),t<=10&&J>5&&(e=Q.slice()),t<=15&&J>10&&(e=U.slice()),t<=20&&J>15&&(e=W.slice()),t>20&&(e=Y.slice());let n=e.splice(J%5-1,1);for(let l=0;l<E.length;l++)E[l].textContent=e[l],""!==E[l].textContent&&(E[l].onclick=function(){F.innerText+=n+"重铸成"+this.textContent+"\n",J=Z.indexOf(this.textContent)+1,u.mold=J;let e=V.slice(6*(t-1),6*t),l=V.slice(6*(J-1),6*J),a=(_(),te(e,l));ue(a)})}else j&&X&&(X=!1,w.style.display="none")},w.onclick=function(){X=!1,w.style.display="none"};let ne=function(){P&&(ee(),P=!1),v[1].childNodes[0].nodeValue="当前重量(上限"+M["c-weight"]+")",v[2].childNodes[0].nodeValue="当前硬度(上限"+M["c-up-hardness"]+")",v[3].childNodes[0].nodeValue="当前韧度(上限"+M["c-up-toughness"]+")"}},a=window.location.href,o=a.indexOf("#");switch(-1===o?null:a.slice(o+1)){case"first":n();break;case"second":l();break;default:n()}}();