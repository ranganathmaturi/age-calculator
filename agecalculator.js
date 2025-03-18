let userInput=document.getElementById('date')
userInput.max=new Date().toISOString().split('T')[0];
let button=document.querySelector('button')
let age=document.getElementById('agecont')
button.addEventListener('click',()=>{
    let birthDate=new Date(userInput.value)
    let d1=birthDate.getDate()
    let m1=birthDate.getMonth()
    let y1=birthDate.getFullYear()
    
    let d2=new Date().getDate()
    let m2=new Date().getMonth()
    let y2=new Date().getFullYear()
    
    let y3,m3,d3;
    y3=y2-y1;
    if (m2>=m1){
        m3=m2-m1;
    }else{
        y3--;
        m3=12+m2-m1;
    }if(d2>=d1){
        d3=d2-d1;

        
    }else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;
    }if(m3<0){
        m3=11;
        y3--;
    }
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate()
    }
    console.log(y3,m3,d3)
    age.innerText=`You are ${y3} years and ${m3} months and ${d3} days old`
})
 