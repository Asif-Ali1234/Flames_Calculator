function flames(){
    
    farr=["Friends","Lovers","Attraction","Marriage","Enemies","Siblings"]
    var x=document.getElementById('fname').value
    var y=document.getElementById('sname').value
    if(x==''||y==''){
        document.getElementById('res').innerHTML="Please Provide the two names"
    }
    else{
        x=x.toLowerCase()
        y=y.toLowerCase()
        x=x.trim()
        y=y.trim()
        x=x.replace(/ /g,'')
        y=y.replace(/ /g,'')
        var x_temp=x
        var y_temp=y
        var pos=0
            for(var i=0;i<x.length;i++){
                pos=y_temp.search(x[i])
                if(pos!=-1){
                    y_temp=y_temp.replace(x[i],'')
                    x_temp=x_temp.replace(x[i],'')
                }
            }
        var split_index=0
        flength=x_temp.length+y_temp.length
        while(farr.length > 1) { 
            split_index = (flength % (farr.length) - 1)  
            if(split_index >= 0) {
                right=farr.slice(split_index+1,farr.length) 
                left=farr.slice(0,split_index)
                farr = right.concat(left)
            }
            else
                farr=farr.slice(0,farr.length-1)
        }
        var td=document.getElementById('topDisplay')
        var bd=document.getElementById('bottomDisplay')
        var rd=document.getElementById('rightDisplay')
        var ld=document.getElementById('LeftDisplay')
        removeallchilds(td)
        removeallchilds(bd)
        removeallchilds(rd)
        removeallchilds(ld)
        var f=farr[0]
        if(f=="Friends"){
            document.body.style.backgroundColor="#99c2ff"
            td.style.color="#0066ff"
            bd.style.color="#0066ff"
            rd.style.color="#0066ff"
            ld.style.color="#0066ff"
        }
        else if(f=="Lovers"){
            document.body.style.backgroundColor="#80ffaa"
            td.style.color="#00b33c"
            bd.style.color="#00b33c"
            rd.style.color="#00b33c"
            ld.style.color="#00b33c"
        }
        else if(f=="Attraction"){
            document.body.style.backgroundColor="#b3b3b3"
            td.style.color="#000000"
            bd.style.color="#000000"
            rd.style.color="#000000"
            ld.style.color="#000000"
        }
        else if(f=="Marriage"){
            document.body.style.backgroundColor="#ffc266"
            td.style.color="#ff9900"
            bd.style.color="#ff9900"
            rd.style.color="#ff9900"
            ld.style.color="#ff9900"
        }
        else if(f=="Enemies"){
            document.body.style.backgroundColor="#ff8080"
            td.style.color="#ff1a1a"
            bd.style.color="#ff1a1a"
            rd.style.color="#ff1a1a"
            ld.style.color="#ff1a1a"
        }
        else if(f=="Siblings"){
            document.body.style.backgroundColor="#cc99ff"
            td.style.color="#7300e6"
            bd.style.color="#7300e6"
            rd.style.color="#7300e6"
            ld.style.color="#7300e6"
        }
        for(var i=0;i<farr[0].length;i++){
            var s = document.createElement('span')
            var text=document.createTextNode(f[i].toUpperCase())
            s.appendChild(text)
            bd.appendChild(s)
        }
        for(var i=0;i<farr[0].length;i++){
            var s = document.createElement('span')
            var text=document.createTextNode(f[i].toUpperCase())
            s.appendChild(text)
            td.appendChild(s)
        }
        for(var i=0;i<farr[0].length;i++){
            var s = document.createElement('span')
            var text=document.createTextNode(f[i].toUpperCase())
            s.appendChild(text)
            var b=document.createElement('br')
            rd.appendChild(s)
            rd.appendChild(b)
        }
        for(var i=0;i<farr[0].length;i++){
            var s = document.createElement('span')
            var text=document.createTextNode(f[i].toUpperCase())
            s.appendChild(text)
            var b=document.createElement('br')
            ld.appendChild(s)
            ld.appendChild(b)
        }
    }
}

function moveup(x){
    document.getElementById(x).focus()
}


function removeallchilds(e){
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
}