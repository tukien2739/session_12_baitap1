// Bài 1:
let a = Number(prompt("Hãy nhập vào số a: "));
let b = Number(prompt("Hãy nhập vào số b: "))

if (a % b!==0) { alert("a không chia hết cho b")
    
} else {alert("a chia hết cho b")
    
}
// Bài 2:

let age = Number(prompt("Hãy nhập vào số tuổi học sinh: "));
if (age < 16) { alert("Ko đủ điều kiện vào lớp 10");
    
} else {alert("Đủ điều kiện vào lớp 10")
    
}

//Bài 3 :
let n = Number(prompt("Hãy nhập số nguyên bất kỳ : "));
if (n > 0) {alert("Số " + n + " lớn hơn 0" )
    
} else if (n < 0){alert("Số " + n + " nhỏ hơn 0")
    
}
else {alert("Số bằng 0")}

//Bài 4:
let c = Number(prompt("Hãy nhập số nguyên thứ 1 : "))
let d = Number(prompt("Hãy nhập số nguyên thứ 2 : "))
let e = Number(prompt("Hãy nhập số nguyên thứ 3 : "))

let max = c;
if (d > max) { max = d;
    
}
if (e > max) { max = e;
    
}
alert("Giá trị lớn nhất là:" + max)

//Bài 5"
let testScore = Number(prompt("Nhập điểm kiểm tra: "));
let midScore = Number(prompt("Nhập điểm giữa kỳ: "));
let finalScore = Number(prompt("Nhập điểm cuối kỳ: "));
let avg = (testScore + midScore + finalScore)/3;
let rank;
if (avg >= 9) {rank = "Xuất sắc";
}
else if (avg >=8) {rank = "Giỏi";
    
}
else if (avg >=6.5) {rank = "Khá";
    
}
else if (avg >=5) {rank = "Trung bình";
    
}
else{rank = "Yếu"}

alert("Điểm trung bình: " + avg.toFixed(1) + " Xếp hạng: "+ rank);



