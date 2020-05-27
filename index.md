## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/justsoup/duanzao/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/justsoup/duanzao/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>神兵锻造</title>
	<style>
		.mainBox{
			margin: 100px auto;
			width: 500px;
			height: 500px;
			background: #eee;
			border:1px solid black;
		}

		label{
			display: block;
		}
		
		.imgBox{
			width: 60%;
			height: 300px;
			display: block;
			margin: 0 auto;
		}

		.imgBox img{
			width: 100%;
			height: 100%;
		}



	</style>
</head>

<body>

	<div class="mainBox">
		<select name="" id="selectBox">
			<option value="0">镔铁</option>
			<option value="1">精铜</option>
			<option value="2">青金</option>
			<option value="3">云钢</option>
			<option value="4">铁精</option>
			<option value="5">铜精</option>
			<option value="6">百炼寒铁</option>
			<option value="7">磁母</option>
			<option value="8">青云金铁</option>
			<option value="9" selected>赤日铁</option>
			<option value="10">墨金</option>
			<option value="11">寒铜金精</option>

		</select>
        <label for="">
            伤害: <input type="number" step="1" name="number" min="0" id='data1' value="20">
        </label>
        <label for="">
            硬度: <input type="number" step="1" name="number" min="0" id='data2' value="33">
        </label>
        <label for="">
            韧度: <input type="number" step="1" name="number" min="0" id='data3' value="62">
        </label>
        <label for="">
            重量: <input type="number" step="1" name="number" min="0" id='data4' value="12">
        </label>
        <br />
        <label for="">
            古木: <input type="number" step="1" name="number" min="0" max="5" id='data5' value="5">
        </label>
        <label for="">
            云香: <input type="number" step="1" name="number" min="0" max="4" id='data6' value="4">
        </label>
        <label for="">
            无烟: <input type="number" step="1" name="number" min="0" max="11" id='data7' value="11">
        </label>
        <label for="">
            融铁: <input type="number" step="1" name="number" min="0" max='60' id='data8' value="0">
        </label>
       <label for="">
            遁地符: <input type="number" step="1" name="number" min="0" max='10' id='data9' value="10">
        </label>
		<p>锻造等级</p>
		<input type="text" id='grade' value='400'>
		<div>
			<a href="javascript:;" id='btn'>锻造</a>
		</div>

		<div id="result"></div>
	</div>
	<div class="imgBox">
		<img src="duanda.png" alt="">
	</div>

	<script>

 		~function(){

				let selectBox=document.getElementById('selectBox'),
					options=selectBox.getElementsByTagName('options'),
					gradeBox=document.getElementById('grade'),
					buttonBox=document.getElementById('btn'),
					resultBox=document.getElementById('result'),
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




			buttonBox.onclick=function(){
				let grade=gradeBox.value,
					index=selectBox.selectedIndex,
					meltingMax=null,
					meltingPoint=meterial[index],
					meltingValue=null,
					forgeGrade=null,
					initialAttack=null;
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
				
				resultBox.innerText='满熔炼值的情况下，初始伤害为'+initialAttack+'(只取整)'+'\n';
				resultBox.innerText+='锻造结果等级（查下表）'+forgeGrade+'\n';
				resultBox.innerText+='取极好的最低硬度 & 最低韧度'+'\n';
				resultBox.innerText+='硬度:'+data2.value+'+10'+'\n';
				resultBox.innerText+='韧度:'+data3.value+'+10'+'\n';
				};

 		}()

	</script>
</body>
</html>
