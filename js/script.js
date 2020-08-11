const actualVar1 = $('.actual-var1');
const actualVar2 = $('.actual-var2');
const actualVar3 = $('.actual-var3');
const actualVar4 = $('.actual-var4');
const actualVar5 = $('.actual-var5');
const actualVar6 = $('.actual-var6');
const actualSpeach = $('.actual-speach');
const createText = $('.create-text');
const replaceText = $('.replace-text');
const textNode = $('.simple-text');


const startObj = {
  "text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]
};

createText.click(function() {
  textNode.html(startObj.text);
})

replaceText.click(function() {
  const var1 = actualVar1.val();
  const var2 = actualVar2.val();
  const var3 = actualVar3.val();
  const var4 = actualVar4.val();
  const var5 = actualVar5.val();
  const var6 = actualVar6.val();
  const speach = actualSpeach.val();
    
  const newObj = {
    "text":[`Жили-были ${var1} да ${var2}`,`Была у них ${var3}`,`Снесла ${var3} ${var4}, не простое - золотое`,`- ${var1} бил, бил - не разбил`,`- ${var2} била, била - не разбила`,`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,`${speach}`,]
  };
  
  textNode.html(newObj.text);
})
