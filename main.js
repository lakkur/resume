//function Loadjson(file,callback) {
//var xhr =new XMLHttpRequest();
//xhr.overrideMimeType("application jason");
//xhr.open("GET",file,true);
//xhr.onreadystatechange=function(){
//if(xhr.readyState === 4 && xhr.status=="200"){
 //callback(xhr.responseText);
//}
//};
//xhr.send(null);
//}
//Loadjson("data.json",function(text)
//{
  //var data=JSON.parse(text);
  //console.log(data);
  //basics(data.details);
  //careerinfo(data.career);
  //education(data.education);
  //skills(data.skills);
  //achievements(data.achievements);

//})
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error('error'));


      }
    })
  })

}
var newfile=loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})
var child1 = document.querySelector(".childone")
function basics(det)
{
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);
  var name =document.createElement("h4");
  name.textContent =det.name;
  child1.appendChild(name);

  var phoneno =document.createElement("h4");
  phoneno.textContent = det.phoneno;
  child1.appendChild(phoneno);

  var email =document.createElement("a");
  email.href ="mailto:ramadevi@gmail";
  email.textContent = det.email;
  child1.appendChild(email);

  var add =document.createElement("h2");
  add.textContent = "address:";
  child1.appendChild(add);

  var hr =document.createElement("hr");
  child1.append(hr);

  var p =document.createElement("p");
  p.textContent = det.address;
  child1.append(p);
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info)
{
  var heading = document.createElement("h2");
  heading.textContent = "career objective";
  child2.append(heading);
  var hr = document.createElement("hr");
  child2.append(hr);
  var c = document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
  var head = document.createElement("h2")
  head.textContent = "qualification";
  child2.append(head);
  var hr =document.createElement("hr");
  child2.appendChild(hr);
}
function education(edu)
{
  var hd = document.createElement("h2");
  hd.textContent="educational qualifications";
  child2.appendChild(hd);

   var hr=document.createElement("hr");
   child2.appendChild(hr);

     var table1= document.createElement("table");
     table1.border="1";
     child2.appendChild(table1);

     tabledata="";
     for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";

     }
     table1.innerHTML=tabledata;
}

function skills(skillsinfo){
  var hd= document.createElement("h2");
  hd.textContent="technical skills";
  child2.appendChild(hd);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillsinfo.length;i++){
    var title = document.createElement("h4");
    title.textContent=skillsinfo[i].title;
    child2.append(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
  eduli.textContent = skillsinfo[i].info;
  eduul.appendChild(eduli);
   child2.appendChild(eduul);

  }
}
function achievements(achieveinfo){
  var hd = document.createElement("h2");
  hd.textContent="achievements";
  child2.appendChild(hd);

   var hr = document.createElement("hr");
   child2.appendChild(hr);

    for(i=0;i<achieveinfo.length;i++){
      var achi=document.createElement("ul");
      var achh=document.createElement("li");
      achh.textContent=achieveinfo[i].info;
      achi.appendChild(achh);
      child2.appendChild(achi);
    }
}
function openpage(){
  window.open("myproject.html","_self",true)
}
