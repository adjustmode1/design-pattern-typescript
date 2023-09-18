# Diagram:
<img title="singleton_desgin_pattern_diagram" src="../../imgs/Singleton_UML_class_diagram.png" >

# Đặc điểm:
- Mỗi class chỉ có duy nhất một instance (thể hiện).
- Cung cấp điểm truy cập toàn cục.
- được khởi tạo ngay lần đầu sử dụng hoặc khởi tạo lúc init

# Ứng dụng:
- Các cài đặt ứng dụng (global resource)
- lưu hành vi người dùng (logging)
- lưu bộ nhớ đệm (caching)

# Ưu điểm:
- Chắc chắn rằng mỗi class chỉ có một instance duy nhất.
- Có thể truy cập instance ở bất cứ đâu và bất cứ khi nào
- Singleton chỉ khởi tạo khi bạn gọi chúng lần đầu tiên (gọi khi nào khởi tạo khi ấy).
  
# Hạn chế:
- Vi phạm nguyên tắc Single Responsibility Principle – nguyên tắc đơn nhiệm, một pattern giải quyết cùng lúc 2 vấn đề.
- Singleton pattern có thể ẩn đi những thiết kế xấu cho instance khi các component trong chương trình biết rõ về nhau.
- Singleton yêu cầu xử lý đặc biệt trong mộ trường đa luồng, để nhiều luồng không tạo ra một đối tượng Singleton nhiều lần.
- Singleton tạo ra quá nhiều phụ thuộc, không thể sử dụng đa hình và dễ tạo ra các bug.

# triển khai:
- Định nghĩa thuộc tính static riêng tư trong class “single instance”
- Định nghĩa hàm static công khai trong một class
- Thực hiện “Lazy initialization” cho lần sử dụng đầu tiên trong hàm cần truy cập.
- Định nghĩa các hàm đều được protected hoặc private.
- Client chỉ có thể sử dụng hàm để truy cập và thao tác với Singleton.