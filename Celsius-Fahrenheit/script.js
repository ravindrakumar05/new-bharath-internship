function Convert(){
    
    let value_ = document.getElementById("inputValue").value

    if(value_ ==""){
        alert("Enter valid Input")
    }
    else{
        let result = (value_ * 9/5) + 32;

        let rel = document.getElementById("rel");

        rel.append(result)
    }   
}

function Reset(){
   
     let reltoClear = document.getElementById("rel")
     reltoClear.remove();
}