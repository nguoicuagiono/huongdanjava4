
var contents = [
	"Giao diện chính chứa những button chính như: hệ thống, quản lí, thống kê, trợ giúp, đăng xuất, kết thúc, chuyên đề, người học, khóa học, nhân viên và hướng dẫn",
	"Nút hệ thống bao gồm các chức năng đăng xuất, đỗi mật khẩu và kết thúc ",
	"Nút quản lý bao gồm quản lý người học, khóa học, chuyên đề và nhân viên ",
	"Nút thống kê bao gồm những số liệu thống kê người học từng năm , bảng điểm khóa học, doanh thu từng chuyên đề  ",
	"Nút trợ giúp bao gồm các nút hướng dẫn sử dụng kèm theo trợ giúp những thứ có sẵn",
	"Nút đăng xuất giúp người dùng có thể đăng xuất tài khoản của mình ra",
	"Nút kết thúc giúp chúng ta ngắt ứng dụng",
	"Nút chuyên đề bao gồm nút cập nhật và danh sách chuyên đề",
	"Nút người học bao gồm nút cập nhật và danh sách người học",
	"Nút khóa hóc bao gồm nút cập nhât và danh sách khóa học",
	"Nút nhân viên bao gồm nút cập nhật và danh sách nhân viên",
	"Nút hướng dẫn là dẫn tới trực tiếp trang hướng dẫn"
	];


function loadContent(index) {
	$("p").text(contents[index]);
}
