function getdata(){
    table.style.visibility="visible"
    tdata.style.visibility="visible"
    let i=document.getElementById("txt").value 
    fetch("https://api.github.com/users/"+i). 
    then(response=>response.json()).
    then(data=>getdata2(data))  
 };
 function getdata2(data){
     console.log(data)
     document.getElementById("1").innerHTML=data.login
     document.getElementById("2").innerHTML=data.public_repos
     const date1=new Date(data.created_at)
     document.getElementById("3").innerHTML=date1.getDate()
     document.getElementById("33").innerHTML=date1.getMonth()+1
     document.getElementById("333").innerHTML=date1.getFullYear()
     const date2=new Date(data.updated_at)
     document.getElementById("4").innerHTML=date2.getDate()
     document.getElementById("44").innerHTML=date2.getMonth()+1
     document.getElementById("444").innerHTML=date2.getFullYear()
     const diffTime = Math.abs(date2 - date1);
     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
     document.getElementById("5").innerHTML=diffDays
     fetch(data.repos_url).
     then(response=>response.json()).
     then(data=>getdata3(data))   
 };
function getdata3(data){
  let t=document.getElementById("tdata");
    for(let i in data){
        const date1=new Date(data[i].created_at)
        const date2=new Date(data[i].updated_at)
        const date3=new Date()
        const diffTime = Math.abs(date3 - date2);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        let row=
        `
        <th>
        <tr>
        <td>${data[i].full_name}</td>
        <td>${data[i].size}</td>
        <td>${date1.getDate()}-${date1.getMonth()+1}-${date1.getFullYear()}</td>
        <td>${date2.getDate()}-${date2.getMonth()+1}-${date2.getFullYear()}</td>
        <td>${diffDays}</td>
        </tr>`
        t.innerHTML+=row
    }  
    let i=document.getElementById("txt").value
    fetch("https://api.github.com/repos/"+i+"/timetable/contents/").
    then(response=>response.json()).
    then(data=>console.log(data.name))  
 };