var dssv = [];

var kqLay = localStorage.getItem("DSSV");
if(kqLay != null){
    var dataRaw = JSON.parse(kqLay);
    for(var i = 0 ; i < dataRaw.length; i++){
        var data = dataRaw[i];
        var sv = new LopSinhVien(
            data.maSV,
            data.tenSV,
            data.email,
            data.matKhau,
            data.toan,
            data.ly,
            data.hoa,
        );  
    }
    renderDSSV(sv);
}
function themSinhVien(){
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var emailSV = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var toan = document.getElementById("txtDiemToan").value *1;
    var ly = document.getElementById("txtDiemLy").value*1;
    var hoa = document.getElementById("txtDiemHoa").value*1;
    var sv = new LopSinhVien(maSV,tenSV,emailSV,matKhau,toan,ly,hoa);
    dssv.push(sv);
    var dataJSON = JSON.stringify(dssv);
    dataJSON = localStorage.setItem("DSSV",dataJSON);
    renderDSSV(dssv);
    resetForm();
    
}

function xoaSV(id){
    for(var i = 0 ; i < dssv.length ; i++){
       if(dssv[i].maSV == id)
       {
         dssv.splice(dssv[i].id,1);
       }
    }
    renderDSSV(dssv);  
}

function resetForm(){
    document.getElementById("formQLSV").reset();
}

function suaSV(id){
   var index =  dssv.findIndex(function(){
        for(var i = 0 ; i < dssv.length ; i++){
            if(dssv[i].maSV == id)
            {
                index = dssv[i];  
            }
        }
        return index;
   })
   document.getElementById("txtMaSV").value = dssv[index].maSV;
   document.getElementById("txtTenSV").value = dssv[index].tenSV;
   document.getElementById("txtEmail").value = dssv[index].emailSV;
   document.getElementById("txtPass").value = dssv[index].matKhau;
   document.getElementById("txtDiemToan").value = dssv[index].toan;
   document.getElementById("txtDiemLy").value  = dssv[index].ly;
   document.getElementById("txtDiemHoa").value  = dssv[index].hoa;
   document.getElementById("txtMaSV").readOnly = true;
   
   
}

function capNhatSV(id){
    for(var i=0 ; i <dssv.length ; i++)
    {
        id = dssv[i];
        
    }
    id.tenSV = document.getElementById("txtTenSV").value;
    id.emailSV = document.getElementById("txtEmail").value;
    id.matKhau = document.getElementById("txtPass").value;
    id.toan = document.getElementById("txtDiemToan").value *1;
    id.ly =  document.getElementById("txtDiemLy").value *1;
    id.hoa = document.getElementById("txtDiemLy").value *1;
    var index =  dssv.findIndex(function(){
        for(var i = 0 ; i < dssv.length ; i++){
            if(dssv[i].maSV == id)
            {
                index = dssv[i].maSV;  
            }
        }
        
   })
   var dataJSON = JSON.stringify(dssv);
   dataJSON = localStorage.setItem("DSSV",dataJSON);
   renderDSSV(dssv);
   resetForm();
   document.getElementById("txtMaSV").readOnly = false;
}


function searchSV(name){
   name = document.getElementById("txtSearch").value;
   for(var i = 0 ; i < dssv.length ; i++){
        if(name === dssv[i].tenSV){
            var index =  dssv.findIndex(function(){
                for(var i = 0 ; i < dssv.length ; i++){
                    if(name == dssv[i].tenSV)
                    {
                        index = dssv[i].maSV;  
                    }
                }
                return index;
           })
          
            for(var i = 0 ; i < dssv.length ; i++)
            {
                var sv = dssv[index];
                document.getElementById("txtMaSV").value = sv.maSV;
                document.getElementById("txtTenSV").value = sv.tenSV;
                document.getElementById("txtEmail").value = sv.emailSV;
                document.getElementById("txtPass").value = sv.matKhau;
                document.getElementById("txtDiemToan").value = sv.toan;
                document.getElementById("txtDiemLy").value  = sv.ly;
                document.getElementById("txtDiemHoa").value  = sv.hoa;
            }
            
        }
        else{
            alert("Xin bạn nhập lại");
        }

   }
}