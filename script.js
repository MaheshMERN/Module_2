fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json").then((data)=>{
    // console.log(data)
    return data.json()
}).then((objectData)=>{
    // console.log(objectData)
    let tableData = "";
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.id}</td>
        <td><img src=${values.img_src}>  ${values.first_name}</td>
        <td>${values.gender}</td>
        <td>${values.class}</td>
        <td>${values.marks}</td>
        <td>${values.passing===true?'Pass':'Fail'}</td>
        <td>${values.email}</td>
      </tr>`
    })
    document.getElementById("table_body").innerHTML = tableData;
})
let data = document.getElementById("table_body");
console.log(data)


const search = () =>{
    let filter = document.getElementById("input");
    let data = document.getElementById("table_body");
    let tr = data.getElementsByTagName("tr");
    console.log(tr)


}