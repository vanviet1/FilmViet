const students = [
    { id: 1, name: "Nguyen Van Anh", age: 15, grade: "10", scores: { math: 85, english: 88, science: 92 } },
    { id: 2, name: "Tran Thi Binh", age: 16, grade: "11", scores: { math: 90, english: 88, science: 84 } },
    { id: 3, name: "Le Van Cuong", age: 14, grade: "9", scores: { math: 72, english: 65, science: 70 } },
    { id: 4, name: "Hoang Thi Anh", age: 15, grade: "10", scores: { math: 95, english: 92, science: 98 } },
    { id: 5, name: "Phan Van Em", age: 17, grade: "12", scores: { math: 67, english: 55, science: 34 } },
    { id: 6, name: "Vo Thi Hoa", age: 15, grade: "10", scores: { math: 78, english: 85, science: 80 } },
    { id: 7, name: "Dang Van Hieu", age: 11, grade: "11", scores: { math: 88, english: 75, science: 90 } },
    { id: 8, name: "Ngo Thi Lan", age: 11, grade: "9", scores: { math: 65, english: 60, science: 58 } },
    { id: 9, name: "Pham Van Minh", age: 17, grade: "12", scores: { math: 92, english: 85, science: 91 } },
    { id: 10, name: "Tran Thi Ngoc", age: 15, grade: "10", scores: { math: 81, english: 79, science: 85 } }
  ];

  const newStudent = { 
    id: 11, 
    name: "Thoi Van Viet", 
    age: 22, 
    grade: "12", 
    scores: { math: 82, english: 78, science: 80 } 
};

//   // Viết một hàm tìm học sinh có điểm toán cao nhất trong danh sách. 
// const a = students.reduce((a,b) =>  a.scores.math < b.scores.math ? b : a); 
// // Lọc danh sách học sinh thuộc lớp "10".
// const kk = students.filter((element) => element.grade = "10");

// // Tính điểm trung bình của mỗi học sinh dựa trên các môn học và thêm thuộc tính average vào từng đối tượng học sinh.
// const diem = students.map((e) => {
//     const caculator = ( e.scores.math + e.scores.english + e.scores.science) * 100 / Object.keys(e.scores).length;
//     const average = Math.floor(caculator)
//     return { ...e, average };
// })


// // Sắp xếp học sinh theo tuổi
// // Sắp xếp danh sách học sinh theo thứ tự tăng dần của tuổi.
// const tuoi = students.sort((a, b) =>
//     a.age - b.age
// )


// // Tìm học sinh có điểm trung bình trên 80
// // Lọc danh sách học sinh có điểm trung bình lớn hơn 80.
// const dtb = students.filter((e) => {
//     const tb = ( e.scores.math + e.scores.english + e.scores.science) * 100 / Object.keys(e.scores).length;
//     const average = Math.floor(tb)
//     return  average > 80
// })

// // Thêm thuộc tính học lực
// // Thêm thuộc tính rank cho mỗi học sinh dựa vào điểm trung bình:
// const ranks = students.map((e) => {
//     const diemrank = (e.scores.math + e.scores.english + e.scores.science) / Object.keys(e.scores).length;
//     let rank = ''
//     if (diemrank >= 90) {
//         rank = 'xuat sac'
//     }else if(diemrank >= 75) {
//         rank = 'gioi'
//     }else if(diemrank >= 50) {
//         rank = 'trung binh'
//     }else if(diemrank < 50) {
//          rank = 'yeu'
//     }
//     return { ...e, rank };
// })



// // Điểm trung bình >= 90: "Xuất sắc"
// // Điểm trung bình từ 75 - 89: "Giỏi"
// // Điểm trung bình từ 50 - 74: "Trung bình"
// // Điểm trung bình < 50: "Yếu"
// // Đếm số lượng học sinh theo lớp
// // Tính số lượng học sinh trong mỗi lớp (grade).
// const sohs = students.reduce((a, b) => {
//     a[b.grade] = (a[b.grade] || 0 ) +1;
//     return a;
// }, {})



// // Kiểm tra học sinh có điểm kém
// // Kiểm tra xem có học sinh nào có điểm môn bất kỳ < 40 không.
// const ss = students.filter((a) => Object.values(a.scores).some(scores => scores < 40))


// // Tìm học sinh giỏi tất cả các môn
// // Lọc danh sách học sinh có điểm >= 80 ở tất cả các môn học.
// const ssMax = students.filter((a) => Object.values(a.scores).every(scores => scores >= 80))

// // Tạo bảng phân loại điểm môn Toán
// // Chia học sinh thành các nhóm dựa vào điểm Toán:
// // Nhóm 1: >= 90
// // Nhóm 2: Từ 75 - 89
// // Nhóm 3: < 75
// const nhom = students.map(student => {
//     const {math} = student.scores;
//     let category;
//     if (math >= 90) {
//         category =' nhom 1'
//     } else  if (math >= 75){
//         category =' nhom 2'
//     } else {
//         category =' nhom 3'
//     }
//     return  { ...student,mathtcategory:category };
// })




// // Cập nhật tên học sinh
// // Cập nhật tên học sinh trong danh sách sao cho mỗi tên đều được viết hoa chữ cái đầu.
// const namess = students.map(student => {
//     const name = student.name.toLocaleLowerCase().split(" ").map((word)=> word.
//     charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ");
        
//     return  { ...student,name:name };
// })

// // Xóa học sinh không đủ tuổi
// // Xóa các học sinh có tuổi nhỏ hơn 14 khỏi danh sách.
// const hsnt = students.filter((e) => e.age <= '14')
// // console.log(hsnt);

// // Tìm học sinh có tên chứa một từ cụ thể
// // Lọc danh sách các học sinh có tên chứa chữ "Anh".
// const ktct = students.filter((e) => e.name.includes("Anh"))

// // Tổng điểm từng môn học
// // Tính tổng điểm Toán, Anh và Khoa học của tất cả học sinh trong danh sách.
// const tongD = students.reduce((total, stu) =>{
//     total.math +=stu.scores.math;
//     total.english +=stu.scores.english;
//     total.science +=stu.scores.science;
//     return total;
// },{math:0, english:0, science:0})


// // Lấy danh sách ID
// // Tạo một mảng mới chỉ chứa id của các học sinh.
// const stid = students.map((e) => e.id)


// // Xáo trộn danh sách học sinh
// // Viết hàm để xáo trộn thứ tự ngẫu nhiên các học sinh trong danh sách.

// function randomShuffle(students) {
//     let shuffled = [...students]; // Tạo một bản sao của danh sách để không thay đổi mảng gốc
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
//     }
//     return shuffled;
// }

// const shuffledStudents = randomShuffle(students);




// Tìm học sinh nhỏ tuổi nhất
// Tìm học sinh có tuổi nhỏ nhất trong danh sách.
// function hsnt(student){
   
//     const tuoinho = student.map(stus => stus.age)
//     const getMin = Math.min(...tuoinho)
//     const getAgeMin = student.filter(stu => stu.age === getMin)
//     return getAgeMin;

// }
// const result = hsnt(students);

// console.log(result);

// // Thêm học sinh mới
// // Thêm một đối tượng học sinh mới vào danh sách.
//  students.push([newStudent])

// console.log(students);


// Kiểm tra học sinh theo lớp
// Kiểm tra xem có học sinh nào thuộc lớp "12" không.


 const hs12 = students.filter((e) => e.grade === '12')
 console.log(hs12);
 

