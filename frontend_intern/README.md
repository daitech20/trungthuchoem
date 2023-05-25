1.Mô tả hướng tiếp cận và lý do sử dụng
-Sử dụng Create React App để tự động hóa việc xây dựng ứng dụng mà không phải config.
    +ReactJS : Xây dựng giao diện nhanh chóng, tái sử dụng Components ...
    +Tailwind Css : Dễ cài đặt, sử dụng, dễ chia layout, hỗ trợ responsive dễ dàng ...
    +Axios : Thư viện HTTP Client, xử lý API đơn giản, dễ dàng
    +React-router-dom :Tạo Routing , điều hướng trang nhanh chóng

2.Mô tả file
-userServices.js: chứa các Api 
-compoments/index.js
    +getAllUsers : lấy toàn bộ dữ liệu users về và bỏ vào state
    +getTaskUser : lấy toàn bộ dữ liệu task của user theo id user về và bỏ vào state
    +handleMarkDone : xử lý mark done những task chưa done và cập nhập lại 

3.Set up, start project
Yêu cầu có : Node >=10.16 và npm >=5.6
-npm install : Cài đặt toàn bộ thư viện
-npm start : Khởi chạy project