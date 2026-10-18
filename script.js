let table = document.getElementById("sampleTable") ;


function insert_Row() {
    //Write your code here  
    const newRow = table.insertRow(0) ;

    const newCell = newRow.insertCell(0) ;
    const newCell2 = newRow.insertCell(1) ;

    let newTable = document.createTextNode("NewCell1") ;
    let newTable2 = document.createTextNode("NewCell2") ;

    newCell.appendChild(newTable) ;
    newCell2.appendChild(newTable2) ;
}
