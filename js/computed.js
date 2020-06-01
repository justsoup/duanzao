~function(){

    let mainBox1=document.querySelector('.mainBox1');
    let mainBox2=document.querySelector('.mainBox2');
    let keepValue={};



    let first=function(){
        mainBox2.style.display='none';
        mainBox1.style.display='block';

        let selectBox=document.getElementById('selectBox'),
            select2Box=document.getElementById('select2Box'),
            options=selectBox.getElementsByTagName('options'),
            gradeBox=document.getElementById('grade'),
            buttonBox=document.getElementById('btn'),
            resultBox=document.getElementById('result'),
            imgBox=document.getElementById('imgBox'),
            data1=document.getElementById('data1'),
            data2=document.getElementById('data2'),
            data3=document.getElementById('data3'),
            data4=document.getElementById('data4'),
            data5=document.getElementById('data5'),
            data6=document.getElementById('data6'),
            data7=document.getElementById('data7'),
            data8=document.getElementById('data8'),
            data9=document.getElementById('data9'),
            dataArea=null,
            initialAttack=null,
            hiddenBox=document.querySelector('.hiddenBox');

        let meterial={
            '0':1100,
            '1':1200,
            '2':1200,
            '3':1300,

            '4':1700,
            '5':1800,
            '6':1800,
            '7':1900,

            '8':2200,
            '9':2300,
            '10':2300,
            '11':2400
        };


        let queryData=function queryData(){
            return new Promise((resolve,reject)=>{
                let productData=null,
                    xhr=new XMLHttpRequest;
                xhr.open('GET','json/attribute.txt');
                xhr.onreadystatechange=function(){
                    if(xhr.readyState===4 && xhr.status===200){
                        productData=xhr.responseText;
                        resolve(productData);
                    }
                }
                xhr.send(null);
            });
        };

        function computedMeltingValue(temperature=0,meltingpoint=0){
            return temperature*250/meltingpoint;
        }

        let decodeData=function decodeData(productData){
            let reg=/[a-w]/i,
                data=productData.toString();

            dataArea=data.split(reg);
            // console.dir(dataArea);
        }

        let promise=queryData();
        promise.then(decodeData);

        buttonBox.onclick=function(){
            let grade=gradeBox.value,
                index=selectBox.selectedIndex,
                meltingMax=null,
                meltingPoint=meterial[index],
                meltingValue=null,
                forgeGrade=null,
                temperature=800;



            index<4? meltingMax=250 : (index<8? meltingMax=350 : meltingMax=500);

            // console.log(grade,index,meltingMax,meltingPoint);
            temperature=temperature+parseFloat(data5.value)*100+parseFloat(data6.value)*100+parseFloat(data7.value)*60+parseFloat(data8.value)*50;
            // console.log(temperature);
            if(temperature<parseFloat(meltingPoint)){
                let sortValue=parseFloat(meltingPoint)-parseFloat(temperature);
                resultBox.innerText='失败了，需要再多加点燃料'+'\n';
                resultBox.innerText+='还缺少'+sortValue+'°';
                return;
            }

            meltingValue=computedMeltingValue(temperature,meltingPoint);

            meltingValue>meltingMax? meltingValue=meltingMax : null;
            // console.log(meltingValue);

            forgeGrade=Math.floor(grade/50+meltingValue*3/20+parseFloat(data9.value)*0.5);
            initialAttack=forgeGrade*1.2+parseFloat(data1.value);

            // console.log(forgeGrade)

            initialAttack=Math.floor(initialAttack*100)/100;
            resultBox.innerText='初始伤害为 '+initialAttack+'(只取整)'+'\n';
            resultBox.innerText+='锻造结果等级 '+forgeGrade+'\n';
            if(selectBox.value==0){
                console.log(selectBox.value);
                resultBox.innerText+='资料来源：放置江湖攻略组 '+'\n';
            }
            imgBox.style.display='block';

        };

        let mouseSelect=function mouseSelect(){
            let select1=selectBox.value,
                select2=select2Box.value;
            let selectData=dataArea[select2];
            let selectRow=selectData.replace(/^\s*|\s*$/g,"").split('\n')[select1];
            // console.log(selectRow);
            let selectItem=selectRow.split('\t');
            // console.log(selectItem);
            data1.value=selectItem[2];
            data2.value=selectItem[4];
            data3.value=selectItem[5];
            data4.value=selectItem[3];

        }

        selectBox.onchange=mouseSelect;
        select2Box.onchange=mouseSelect;
        imgBox.onclick=function(){
            imgBox.style.display='none';
            hiddenBox.style.display='block';
        }

        hiddenBox.onclick=function(){

            keepValue['attack']=initialAttack;
            keepValue['hardness']=data2.value;
            keepValue['toughness']=data3.value;
            keepValue['weight']=data4.value;
            keepValue['mold']=select2Box.value;
            second();
        }





    }

    let second=function(){
        mainBox1.style.display='none';
        mainBox2.style.display='block';


        //DOM元素获取
        let data00=document.getElementById('data00'),
            data01=document.getElementById('data01'),
            data02=document.getElementById('data02'),
            data03=document.getElementById('data03'),
            data04=document.getElementById('data04'),
            data05=document.getElementById('data05'),
            data06=document.getElementById('data06'),
            show1=document.getElementById('show1'),
            show2=document.getElementById('show2'),
            btn2=document.getElementById('btn2'),
            labelList=mainBox2.querySelectorAll('label'),
            material1=document.getElementById('material1'),
            material2=document.getElementById('material2'),
            material3=document.getElementById('material3'),
            btn3=document.getElementById('btn3'),
            btn4=document.getElementById('btn4'),
            playBtn=document.querySelector('.playBtn'),
            backBtn=document.querySelector('.backBtn'),
            dataBtn=document.querySelector('.dataBtn'),
            resetBtn=document.querySelector('.resetBtn'),
            recastBox=document.querySelector('.recastBox'),
            recastItem=recastBox.querySelectorAll('a'),
            myMusic=document.getElementById('myMusic'),
            input3=document.getElementById('input3'),
            printBox=document.getElementById('printBox');


        //获取上一次页面的结果
        if(Object.keys(keepValue).length!== 0){
            data00.value=parseInt(keepValue['attack']);
            data01.value=keepValue['weight'];
            data02.value=keepValue['hardness'];
            data03.value=keepValue['toughness'];
        }

        //遍历声明目录
        let quenchingMaterial=null,  //材料名字
            dataArg=null,             //材料数据
            recastData=null,          //重铸数据
            flag=false,
            recastContainer={},
            bigRecastArg=null,
            times=1,
            onTip=1,
            showTimes=0,
            resetTip=false,
            musicTip=false,
            btn4Switch=false,
            tempValue1=data02.value,
            tempValue2=data03.value,
            saveLastValue=[data00.value,data01.value,data02.value,data03.value,data04.value],
            moldValue=parseFloat(keepValue['mold']),
            recastList1= ["长剑", "短剑", "软剑", "重剑", "刺剑"],
            recastList2= ["长刀", "大环刀", "短刀", "弯刀", "双刃斧"],
            recastList3= ["长棍", "狼牙棒", "三节棍", "长枪", "战戟"],
            recastList4= ["长鞭", "软鞭", "九节鞭", "杆子鞭", "链枷"],
            recastList5= ["双环", "对剑", "双钩"],
            recastAll=recastList1.concat(recastList2).concat(recastList3).concat(recastList4).concat(recastList5);


        //AJAX获取重铸数据文件
        let queryRecast=function queryRecast(){
            return new Promise((resolve,reject)=>{
                let productData=null,
                    xhr=new XMLHttpRequest;
                xhr.open('GET','json/recast.txt');
                xhr.onreadystatechange=function(){
                    if(xhr.readyState===4 && xhr.status===200){
                        productData=xhr.responseText;
                        resolve(productData);
                    }
                }
                xhr.send(null);
            });
        };

        //获取材料数据
        let getQuenchingData=function getQuenchingData(){
            let arg1=["1", "0.033", "0.4", "-0.4", "1", "1", "0.02", "-0.4", "0.4", "1", "1.1", "0.01", "0.15", "-0.15", "1.2", "1.2", "0.033", "0.38", "-0.38", "1.1", "1.2", "0.02", "-0.38", "0.38", "1.3", "1.4", "0.01", "0.35", "-0.25", "1.45", "1.2", "0.03", "0.05", "-0.05", "1.6", "1.3", "0.02", "-0.25", "0.25", "1.7", "1.4", "0.01", "0.03", "-0.03", "1.85", "1.6", "0.033", "0.25", "-0.2", "1", "1.4", "0.02", "-0.1", "0.25", "1.2", "1.75", "0.01", "0.15", "-0.05", "1.2", "1.25", "0.01", "0.2", "-0.12", "1.1", "1.4", "0.015", "-0.15", "0.25", "1.15", "1.5", "0.01", "0.12", "-0.08", "1.25"],
                arg2=["1.1", "0.033", "0.35", "-0.2", "1", "1.2", "0.02", "-0.2", "0.35", "1.1", "1.35", "0.01", "0.15", "-0.15", "1.25", "1", "0.025", "0.33", "-0.3", "1", "1.1", "0.01", "-0.25", "0.28", "1.1", "1.2", "0.01", "0.2", "-0.2", "1.25", "1.2", "0.01", "0.4", "-0.4", "1.1", "1.3", "0.02", "-0.15", "0.15", "1", "1.25", "0.01", "0.1", "-0.1", "1.2", "1.1", "0.03", "0.2", "-0.12", "1", "1.3", "0.02", "-0.12", "0.2", "1", "1.15", "0.015", "0.15", "-0.15", "1.25", "1.2", "0.025", "0.3", "-0.32", "1", "1.25", "0.038", "-0.15", "0.27", "1.1", "1.3", "0.02", "0.25", "-0.22", "1.25"],
                arg3=["1.1", "0.03", "0.3", "-0.2", "1", "1.2", "0.05", "-0.2", "0.25", "1.1", "1.25", "0.05", "0.2", "-0.15", "1.2", "1", "0.25", "0.28", "-0.15", "1", "1.1", "0.05", "-0.2", "0.2", "1.1", "1.2", "0.03", "0.15", "-0.15", "1.2", "1", "0.02", "0.12", "-0.08", "1", "1.1", "0.02", "-0.4", "0.4", "1", "1.25", "0.01", "0.1", "-0.1", "1.25", "0.85", "0.05", "0.25", "-0.2", "1", "0.9", "0.04", "-0.2", "0.25", "1.1", "1", "0.03", "0.15", "-0.15", "1.35", "0.95", "0.05", "0.22", "-0.1", "1", "1", "0.04", "-0.2", "0.18", "1.1", "1.15", "0.03", "0.15", "-0.15", "1.2"],
                arg4=["1", "0.01", "0.3", "-0.3", "1", "1", "0.01", "-0.3", "0.3", "1.1", "1.2", "0.01", "0.2", "-0.2", "1.25", "0.8", "0.005", "0.15", "-0.1", "1.2", "0.8", "0.004", "-0.1", "0.25", "1.25", "1", "0.002", "0.1", "-0.1", "1.4", "1", "0.15", "0.25", "-0.2", "1", "0.9", "0.1", "-0.2", "0.25", "1.1", "1.1", "0.1", "0.15", "-0.15", "1.25", "0.75", "0.03", "0.15", "-0.15", "1.2", "0.9", "0.02", "-0.15", "0.15", "1.3", "1", "0.01", "0.1", "-0.1", "1.4", "1.1", "0.05", "0.25", "-0.1", "1", "0.98", "0.08", "-0.2", "0.25", "1.1", "1.2", "0.1", "0.15", "-0.05", "1.2"],
                arg5=["1.15", "0.04", "0.2", "-0.05", "1.1", "1.15", "0.04", "-0.12", "0.2", "1.1", "0.9", "0.03", "0.14", "0.1", "0.85", "1.2", "0.05", "0.2", "-0.05", "1.1", "1.25", "0.05", "-0.12", "0.2", "1.1", "1.1", "0.04", "0.14", "0.1", "1", "1.6", "0.04", "0.23", "-0.12", "1", "1.6", "0.04", "-0.12", "0.23", "1", "1.4", "0.03", "0.18", "0.18", "1.1"];
            let moldCase=moldValue,
                moldTempValue=moldValue;
            // console.log(moldCase);
            moldTempValue=parseFloat(moldTempValue)%5;
            let mold=Math.floor(moldCase / 5.1),
                startIndex=null,
                endIndex=null;
            moldTempValue===0? startIndex=60:startIndex=moldTempValue*15-15
            moldTempValue===0? endIndex=74:endIndex=moldTempValue*15-1
            // console.log(startIndex);
            // console.log(endIndex);
            // console.log(mold);
            switch(mold){
                case 0:
                    quenchingMaterial=['锐金','玄铁','晶竹'];
                    dataArg=arg1.slice(startIndex,endIndex+1);
                    break;
                case 1:
                    quenchingMaterial=['陨铁','锡沙','秘银'];
                    dataArg=arg2.slice(startIndex,endIndex+1);
                    break;
                case 2:
                    quenchingMaterial=['降龙木','锰钢','血龙木'];
                    dataArg=arg3.slice(startIndex,endIndex+1);
                    break;
                case 3:
                    quenchingMaterial=['古藤','绵铁','蟒筋'];
                    dataArg=arg4.slice(startIndex,endIndex+1);
                    break;
                case 4:
                    quenchingMaterial=['镜铁','磷石','黄晶'];
                    dataArg=arg5.slice(startIndex,endIndex+1);
                    break;
            }

        }

        //处理重铸大数据
        let decodeRecast=function decodeQuenching(productData){

            let reg=/[a-e]/i,
                data=productData.toString();
            bigRecastArg=data.split(' ');
            let modeValue=parseInt(keepValue['mold']),
                startIndex=(modeValue-1)*6,
                endIndex=modeValue*6-1;
            recastData=bigRecastArg.slice(startIndex,endIndex+1);
        }

        //往recastContainer对象中加入重铸数据，设置材料名字
        let dealRecastData=function dealRecastData(){
            if(Object.keys(recastData).length!== 0) {
                let aTemp = recastData[4].split(','),
                    bTemp = recastData[5].split(',');
                material1.textContent = quenchingMaterial[0];
                material2.textContent = quenchingMaterial[1];
                material3.textContent = quenchingMaterial[2];
                recastContainer['c-name'] = recastData[0];
                recastContainer['c-attack'] = Number(recastData[1]);
                recastContainer['c-weight'] = Number(recastData[3]);
                recastContainer['c-down-hardness'] = Number(aTemp[0]);
                recastContainer['c-up-hardness'] = Number(aTemp[1]);
                recastContainer['c-down-toughness'] = Number(bTemp[0]);
                recastContainer['c-up-toughness'] = Number(bTemp[1]);
                printBox.innerText='初始神兵'+recastContainer['c-name']+'\n';
            }
        }

        // console.log(getQuenchingData(moldValue));

        //同步管理异步
        let promise=queryRecast();
        promise.then(decodeRecast).then(getQuenchingData).then(
            dealRecastData
        );

        //计算重铸结果
        let computedRecast=function computedRecast(oldArms,newArms,newQuenchingData){
            // console.log(data00.value);
            // console.log(data01.value);
            // console.log(data02.value);
            // console.log(data03.value);
            // console.log(data04.value);
            // console.log(oldArms, newArms, newQuenchingData);
            //重铸后伤害
            if(Number(oldArms[1])<Number(newArms[1]) && Number(data00.value)>=460){
                data00.value=460;
                // console.log(oldArms);
            }else if(Number(oldArms[1])>Number(newArms[1]) && Number(data00.value)>=460){
                data00.value=460;
                printBox.innerText+='伤害不准确'+'\n'+'神兵已作废'+'\n';
            }else{
                let tempAttackValue=Number(data00.value)+Number(data04.value)*(Number(newArms[1])-Number(oldArms[1]));
                tempAttackValue>460? data00.value=460:data00.value=tempAttackValue;
            }

            //重铸重量
            data01.value=Number(data01.value)/Number(oldArms[3])*Number(newArms[3]);
            //重铸硬度
            let aOldTemp = oldArms[4].split(','),  //硬度
                bOldTemp = oldArms[5].split(','),  //韧度
                aNewTemp = newArms[4].split(','),  //硬度
                bNewTemp = newArms[5].split(',');  //韧度
            data02.value=(Number(aNewTemp[1])-Number(aNewTemp[0]))*(Number(data02.value)-Number(aOldTemp[0]))/(Number(aOldTemp[1])-Number(aOldTemp[0]))+Number(aNewTemp[0]);
            if(Number(data02.value)>Number(aNewTemp[1])){
                data02.value=Number(aNewTemp[1]);
            }
            //重铸韧度
            data03.value=(Number(bNewTemp[1])-Number(bNewTemp[0]))*(Number(data03.value)-Number(bOldTemp[0]))/(Number(bOldTemp[1])-Number(bOldTemp[0]))+Number(bNewTemp[0]);
            if(Number(data03.value)>Number(bNewTemp[1])){
                data03.value=Number(bNewTemp[1]);
            }
            return [aNewTemp,bNewTemp,newArms[3]];


        }

        //重铸后的数据修改
        let changeData=function changeData(showData){

            recastContainer['c-weight'] = showData[2];
            recastContainer['c-down-hardness'] = showData[0][0];
            recastContainer['c-up-hardness'] = showData[0][1];
            recastContainer['c-down-toughness'] = showData[1][0];
            recastContainer['c-up-toughness'] = showData[1][1];
            changeShowUpDown();
        }

        //滑块滑动事件
        data05.onchange=function () {
            show1.innerText=this.value;
            data02.value=Number(tempValue1)+Number(this.value);
        }
        data06.onchange=function () {
            show2.innerText=this.value;
            data03.value=Number(tempValue2)+Number(this.value);
        }

        //显示上限数据 及 锁定滑块
        btn2.onclick=function () {
            //     quenchingMaterial=null,  //材料名字
            //     dataArg=null,             //材料数据
            //     recastData=null,          //重铸数据
            // console.log(quenchingMaterial);
            // console.log(dataArg);
            // console.log(recastData);
            if(Number(data02.value)>Number(recastContainer['c-up-hardness'])){
                data02.value=recastContainer['c-up-hardness'];
            }
            data05.disabled=true;
            data06.disabled=true;
            // console.log(recastContainer);
            changeShowUpDown();
            this.style.color='#eee';
            if(!flag){
                resetValue=[data00.value,data01.value,data02.value,data03.value,data04.value,keepValue['mold']];
            }
            flag=true;

        }

        //材料1
        material1.onclick=function () {
            showTimes=0;
            while(times){
                if(flag && Number(data04.value)<300){
                    saveLastValue=[data00.value,data01.value,data02.value,data03.value,data04.value,moldValue];
                    // console.log(typeof recastContainer['c-weight']);
                    Number(data00.value)<460? data00.value=(Number(data00.value)+Number(dataArg[0])).toFixed(2) :null;
                    Number(data01.value)<recastContainer['c-weight']? data01.value=(Number(data01.value)+Number(dataArg[1])).toFixed(2) :null;
                    !(Number(data02.value)>=recastContainer['c-up-hardness'] && Number(dataArg[2])>0 || Number(data02.value)<recastContainer['c-down-hardness'] && Number(dataArg[2])<0) ? data02.value=(Number(data02.value)+Number(dataArg[2])).toFixed(2) :null;
                    !(Number(data03.value)>=recastContainer['c-up-toughness'] && Number(dataArg[3])>0 || Number(data03.value)<recastContainer['c-down-toughness'] && Number(dataArg[3])<0) ? data03.value=(Number(data03.value)+Number(dataArg[3])).toFixed(2) :null;
                    data04.value=Number(data04.value)+1;
                    showTimes++;
                }
                times--;
            }
            times=Number(input3.value);
            if(flag && Number(data04.value)<=300 && showTimes){
                printBox.innerText+='淬炼了'+showTimes+this.textContent+'\n';
                // console.dir(printBox);
            }

        }

        //材料2
        material2.onclick=function () {
            showTimes=0;
            while(times){
                saveLastValue=[data00.value,data01.value,data02.value,data03.value,data04.value,moldValue];
                if(flag && Number(data04.value)<300){
                    Number(data00.value)<460? data00.value=(Number(data00.value)+Number(dataArg[5])).toFixed(2) :null;
                    Number(data01.value)<recastContainer['c-weight']? data01.value=(Number(data01.value)+Number(dataArg[6])).toFixed(3) :null;
                    !(Number(data02.value)>=recastContainer['c-up-hardness'] && Number(dataArg[7])>0 || Number(data02.value)<recastContainer['c-down-hardness'] && Number(dataArg[7])<0) ? data02.value=(Number(data02.value)+Number(dataArg[7])).toFixed(2) :null;
                    !(Number(data03.value)>=recastContainer['c-up-toughness'] && Number(dataArg[8])>0 || Number(data03.value)<recastContainer['c-down-toughness'] && Number(dataArg[8])<0) ? data03.value=(Number(data03.value)+Number(dataArg[8])).toFixed(2) :null;
                    data04.value=Number(data04.value)+1;
                    showTimes++;
                }
                times--;
            }
            times=Number(input3.value);
            if(flag && Number(data04.value)<=300 && showTimes ){
                printBox.innerText+='淬炼了'+showTimes+this.textContent+'\n';
            }
        }

        //材料3
        material3.onclick=function () {
            showTimes=0;
            while(times) {
                saveLastValue=[data00.value,data01.value,data02.value,data03.value,data04.value,moldValue];
                if (flag && Number(data04.value) < 300) {
                    Number(data00.value) < 460 ? data00.value = (Number(data00.value) + Number(dataArg[10])).toFixed(2) : null;
                    Number(data01.value) < recastContainer['c-weight'] ? data01.value = (Number(data01.value) + Number(dataArg[11])).toFixed(2) : null;
                    !(Number(data02.value)>=recastContainer['c-up-hardness'] && Number(dataArg[12])>0 || Number(data02.value)<recastContainer['c-down-hardness'] && Number(dataArg[12])<0) ? data02.value=(Number(data02.value)+Number(dataArg[12])).toFixed(2) :null;
                    !(Number(data03.value)>=recastContainer['c-up-toughness'] && Number(dataArg[13])>0 || Number(data03.value)<recastContainer['c-down-toughness'] && Number(dataArg[13])<0) ? data03.value=(Number(data03.value)+Number(dataArg[13])).toFixed(2) :null;
                    data04.value = Number(data04.value) + 1;
                    showTimes++;
                }
                times--;
            }
            times=Number(input3.value);
            if(flag && Number(data04.value)<=300 && showTimes){
                printBox.innerText+='淬炼了'+showTimes+this.textContent+'\n';
            }
        }

        //倍数按钮
        btn3.onclick=function(){
            if(onTip%2===0){
                times=Number(input3.value);
                if(times<1 || times>300-Number(data04.value)){
                    times=1;
                    input3.value=1;
                    return;
                }
                this.style.background='#000';
                this.textContent='锁定解除';
                input3.disabled=true;
            }else{
                times=1;
                this.style.background='#c8e3c8';
                this.textContent='倍数锁定';
                input3.disabled=false;
                input3.value=1;
            }
            onTip++;
        }

        //音乐播放
        playBtn.onclick=function(){
            if(myMusic!==null) {
                if (myMusic.paused) {
                    myMusic.play();// 播放
                } else {
                    myMusic.pause();// 暂停
                }
            }
            if(!musicTip){
                this.className+=' active';
                musicTip=!musicTip;
            }else{
                // console.log(this.className);
                this.className='playBtn';
                musicTip=!musicTip;
            }

        }

        //回退按钮
        backBtn.onclick=function(){
            if(moldValue===saveLastValue[5] && data04.value!==saveLastValue[4]){
                data00.value=saveLastValue[0];
                data01.value=saveLastValue[1];
                data02.value=saveLastValue[2];
                data03.value=saveLastValue[3];
                data04.value=saveLastValue[4];
                printBox.innerText+='回退了一次淬炼'+'\n';
            }
        }

        //数据按钮
        dataBtn.onclick=function(){
            // console.log(dataArg);
            printBox.innerText+='伤害 重量 硬度 韧度'+'\n';
            printBox.innerText+=dataArg.slice(0,4).join(' | ')+'\n';
            printBox.innerText+=dataArg.slice(5,9).join(' | ')+'\n';
            printBox.innerText+=dataArg.slice(10,14).join(' | ')+'\n';
        }

        //重置按钮
        resetBtn.onclick=function(){
            if(flag){
                data00.value=resetValue[0];
                data01.value=resetValue[1];
                data02.value=resetValue[2];
                data03.value=resetValue[3];
                data04.value=0;
                moldValue=parseFloat(resetValue[4]);
                saveLastValue[5]=null;
                getQuenchingData();
                printBox.innerText='初始神兵'+recastData[0]+'\n';
                // console.log(recastContainer);
                resetTip=true;
                changeShowUpDown();
            }
        }

        //重铸按钮
        btn4.onclick=function () {
            if(flag && !btn4Switch){
                btn4Switch=true;
                recastBox.style.display='block';
                let recastList=[];
                let oldMoldValue=keepValue['mold'];
                //recastData当前神兵重铸数据
                if(oldMoldValue<=5){
                    recastList=recastList1.slice();
                }
                if(oldMoldValue<=10 && moldValue>5){
                    recastList=recastList2.slice();
                }
                if(oldMoldValue<=15 && moldValue>10){
                    recastList=recastList3.slice();
                }
                if(oldMoldValue<=20 && moldValue>15){
                    recastList=recastList4.slice();
                }
                if(oldMoldValue>20){
                    recastList=recastList5.slice();
                }

                let lastName=recastList.splice(moldValue%5-1,1);
                // console.log(recastList);

                for (let i = 0; i < recastItem.length; i++) {
                    recastItem[i].textContent=recastList[i];
                    recastItem[i].onclick=function () {
                        printBox.innerText+=lastName+'重铸成'+this.textContent+'\n';
                        moldValue=recastAll.indexOf(this.textContent)+1;
                        // console.log(oldMoldValue); //旧武器值
                        // console.log(moldValue);  //新武器值
                        keepValue['mold']=moldValue;
                        // console.log(getQuenchingData());重铸后的材料数据
                        //重铸后武器的重铸属性
                        let oldArms=bigRecastArg.slice((6*(oldMoldValue-1)),6*oldMoldValue),
                            newArms=bigRecastArg.slice((6*(moldValue-1)),6*moldValue),
                            newQuenchingData=getQuenchingData();
                        let showData=computedRecast(oldArms,newArms,newQuenchingData);
                        // console.log(showData);
                        changeData(showData);


                    }
                }
            }
            else if(flag && btn4Switch){
                btn4Switch=false;
                recastBox.style.display='none';
            }
        }

        //重铸界面
        recastBox.onclick=function () {
            btn4Switch=false;
            recastBox.style.display='none';
        }

        //改变显示的上限
        let changeShowUpDown=function (){
            if(resetTip){
                dealRecastData();
                resetTip=false;
            }
            labelList[1].childNodes[0].nodeValue='当前重量(上限'+recastContainer['c-weight']+')';
            labelList[2].childNodes[0].nodeValue='当前硬度(上限'+recastContainer['c-up-hardness']+')';
            labelList[3].childNodes[0].nodeValue='当前韧度(上限'+recastContainer['c-up-toughness']+')';
        }


    }


    //路由管理
    let url=window.location.href,
        well=url.indexOf('#'),
        hash=well===-1? null:url.slice(well+1);

    switch(hash){
        case 'first':
            first();
            break;
        case 'second':
            second();
            break;
        default:
            first();
    }
}()