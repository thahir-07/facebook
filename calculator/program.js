var oper,value1,value2,res;
function calc(val){
   /* 
    if(val=='+'||val=='-'|| val=='*'||val=='/')
    {
        value1=document.getElementById('display').value
        oper=val;
        
        document.getElementById('display').value="";
        

    }
    else if(val=='=')

    {
       
        value2=document.getElementById('display').value;
        
        
        if(oper=='+'){
            
        res=parseFloat(value1)+parseFloat(value2)
        }else if(oper=='*')
        {
            res=parseFloat(value1)*parseFloat(value2)
        }
        else if(oper=='/')
        {
            res=parseFloat(value1)/parseFloat(value2)
        }else if(oper=='-')
        {
            res=parseFloat(value1)-parseFloat(value2)
        }

        document.getElementById('display').value=res

    }else if(val=='.'){
        var a=document.getElementById('display').value
    var flag=a.includes('.');
    if(flag==false)
    document.getElementById('display').value+='.'
    }else if(val=='c')
    document.getElementById('display').value=""
    else*/
    document.getElementById('display').value+=val
    

    
}
function dis(){
var value3=document.getElementById('display').value
var text=eval(value3)
document.getElementById('display').value=text
}
