var dbMt=firebase.database().ref('dtMarriTime')

stList=[]
stList2=[]

function getDataCnic(){
   // console.log('fired')
    var cnic=document.getElementById('txtct').value 
    
    dbMt.orderByChild('CNIC No').equalTo(cnic).once('value',function(getData){
        //console.log(getData.val())
        //This will call 
         //var abc=getData.val()
         
         for(key in getData.val()){
             console.log(key)
             //stList2.push(getData.val())
             dbMt.child(key).once('value',function(getData2){
                 stList.push(getData2.val())
             })

             //stList.push(getData[key])
         }
         console.log(stList)
         fillTable()  
    })


}


function getDataCDC(){
    // console.log('fired')
     var cnic=document.getElementById('txtct').value 
     
     dbMt.orderByChild('CDC No').equalTo(cnic).once('value',function(getData){
         //console.log(getData.val())
         //This will call 
          //var abc=getData.val()
          
          for(key in getData.val()){
              console.log(key)
              //stList2.push(getData.val())
              dbMt.child(key).once('value',function(getData2){
                  stList.push(getData2.val())
              })
 
              //stList.push(getData[key])
          }
          console.log(stList)
          fillTable()  
     })
 
 
 }

 function getDataCert(){
    // console.log('fired')
     var cnic=document.getElementById('txtct').value 
     
     dbMt.orderByChild('Cert No').equalTo(cnic).once('value',function(getData){
         //console.log(getData.val())
         //This will call 
          //var abc=getData.val()
          
          for(key in getData.val()){
              console.log(key)
              //stList2.push(getData.val())
              dbMt.child(key).once('value',function(getData2){
                  stList.push(getData2.val())
              })
 
              //stList.push(getData[key])
          }
          console.log(stList)
          fillTable()  
     })
 
 
 }
function fillTable(){
    console.log('fired')
    var tab =document.getElementById('tab')

    // for(var ri in tab.rows){
    //     tab.remove(ri)
    // }

    console.log(stList)
    for(i=0; i<stList.length; i++){
        var tr=document.createElement('tr')
        

        var td=document.createElement('td')
        td.innerHTML=stList[i]['Cert No']
        tr.appendChild(td)
        
        var td=document.createElement("td")
         td.innerHTML=stList[i]['Cert Name']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['CDC No']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['CNIC No']
         tr.appendChild(td)
 
         var td=document.createElement('td')

         td.innerHTML=stList[i]['DOB']
         tr.appendChild(td)
       
         var td=document.createElement('td')
         td.innerHTML=stList[i]['Date Issue']
         tr.appendChild(td)

      
         var td=document.createElement('td')
         td.innerHTML=stList[i]['from']
         tr.appendChild(td)
        
         var td=document.createElement('td')
         td.innerHTML=stList[i]['to']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['Valid Until']
         tr.appendChild(td)







        var td=document.createElement('td')

        var btn=document.createElement('button')
        btn.innerHTML="Print"
        btn.setAttribute('id',stList[i]['Key'])
        btn.setAttribute('onclick','getCertificate(this)')
        td.appendChild(btn)
        tr.appendChild(td)

        tab.appendChild(tr)

        // var td=document.createElement('td')

        // var btn=document.createElement('button')
        // btn.innerHTML="Firebase"
        // btn.setAttribute('id',stList[i]['Cert No'])
        // btn.setAttribute('onclick','saveFirebase(this)')
        // td.appendChild(btn)
        // tr.appendChild(td)

        // tab.appendChild(tr)

        

    }
}


function update(){
    for(i=0; i<stList.length; i++){
        myObj=stList[i]
        myObj['CName']='CERTIFICATE OF PROFICIENCY IN ADVANCED FIRE FIGHTING'
        var key=myObj['Key']
        dbMt.child(key).set(myObj)
    }
}

function newColminFB(){
    dbMt.on('child_added',function(getData){
        var abc=getData.val()
        stList.push(abc)
    })

    setTimeout(() => {
       update()
        //console.log(stList[0])
       //console.log(stList[0].length)
    }, 5000)
}

function getCertificate(e) {
    window.open("form.html?cno="+e.id);
  }