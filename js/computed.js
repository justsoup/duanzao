
~function(){

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
        startValue=13,
        dataArea=null,
        startTe=0;

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
            xhr.open('GET','ziliao.txt');
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4 && xhr.status===200){
                    productData=xhr.responseText;
                    resolve(productData);
                }
            }
            xhr.send(null);
        });
    }



    // 镔铁	1100	250
    // 精铜	1200	250
    // 青金	1200	250
    // 云钢	1300	250
    // 铁精	1700	350
    // 铜精	1800	350
    // 百炼寒铁	1800	350
    // 磁母	1900	350
    // 青云金铁	2200	500
    // 赤日铁	2300	500
    // 墨金	2300	500
    // 寒铜金精	2400	500

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
            initialAttack=null,
            temperature=800;


        index<4? meltingMax=250 : (index<8? meltingMax=350 : meltingMax=500);
        // console.log(grade,index,meltingMax,meltingPoint);
        temperature=temperature+parseFloat(data5.value)*100+parseFloat(data6.value)*100+parseFloat(data7.value)*60+parseFloat(data8.value)*50;
        // console.log(temperature);
        if(temperature<parseFloat(meltingPoint+100)){
            resultBox.innerText='失败了，需要再多加点燃料';
            return;
        }

        meltingValue=computedMeltingValue(temperature,meltingPoint);

        meltingValue>meltingMax? meltingValue=meltingMax : null;
        // console.log(meltingValue);

        forgeGrade=Math.floor(grade/50+meltingValue*3/20+parseFloat(data9.value)*0.5);
        initialAttack=forgeGrade*1.2+parseFloat(data1.value);

        console.log(forgeGrade)

        resultBox.innerText='初始伤害为 '+initialAttack+'(只取整)'+'\n';
        resultBox.innerText+='锻造结果等级 '+forgeGrade+'\n';
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
    }




}()
