function renderDSSV(svArr){
    var contentString ="";
    for(var i = 0 ; i < svArr.length ; i++)
    {
        var sv = svArr[i];
        var kqHienthi = `<tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.emailSV}</td>
            <td>${sv.matKhau}</td>
            <td>${sv.tinhTB()}</td>
            <td><button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xóa</button></td>
            <td><button class="btn btn-danger" onclick="suaSV('${sv.maSV}')">Sửa</button></td>
            </tr>`;
        contentString += kqHienthi;
    }
    document.getElementById("tbodySinhVien").innerHTML= contentString;
    
}


