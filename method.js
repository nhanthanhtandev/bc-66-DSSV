var diemTB = 0;
function LopSinhVien(maSV,tenSV,emailSV,matKhau,toan,ly,hoa){
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.emailSV = emailSV;
    this.matKhau = matKhau;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhTB = function(){
       return (this.toan *1 + this.ly *1 + this.hoa *1)/3;
        
    }
}