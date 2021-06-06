// Tạo đối tượng Validation để sử dụng
var validation = new Validation();

// Hàm validate các dữ liệu trong form
function validateForm() {
  // Khai báo các biến và get value từ form
  var username = getElement('username').value;
  var fullName = getElement('fullName').value;
  var email = getElement('email').value;
  var password = getElement('password').value;
  var retryPassword = getElement('retryPassword').value;
  var startDate = getElement('startDate').value;
  var salary = getElement('salary').value;
  var position = getElement('position').value;
  var workTime = getElement('workTime').value;
  var hobbies = querySelectorAll('input[name="hobbies"]:checked');

  // Tạo biến isValid để kiểm tra lỗi
  var isValid = true;

  // Kiểm tra username: Tài khoản tối đa 4 - 6 ký số, không để trống
  isValid &=
    validation.isBlank(
      username,
      'errorUsername',
      '(*) Tài khoản không để trống'
    ) &&
    validation.isLength(
      username,
      'errorUsername',
      '(*) Tài khoản tối đa 4 - 6 ký số',
      4,
      6
    );

  // Kiểm tra fullName: Họ tên phải là chữ, không để trống
  isValid &=
    validation.isBlank(
      fullName,
      'errorFullName',
      '(*) Họ tên không để trống'
    ) &&
    validation.isLength(
      fullName,
      'errorFullName',
      '(*) Họ tên tối đa 4 - 20 ký tự',
      4,
      20
    ) &&
    validation.isVietnamese(
      fullName,
      'errorFullName',
      '(*) Họ tên phải là chữ'
    );

  // Kiểm tra email: Email phải đúng định dạng, không để trống
  isValid &=
    validation.isBlank(email, 'errorEmail', '(*) Email không để trống') &&
    validation.isEmail(email, 'errorEmail', '(*) Email không đúng định dạng');

  // Kiểm tra password: Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
  isValid &=
    validation.isBlank(
      password,
      'errorPassword',
      '(*) Mật khẩu không để trống'
    ) &&
    validation.isLength(
      password,
      'errorPassword',
      '(*) Mật khẩu tối đa 6 - 10 ký tự',
      6,
      10
    ) &&
    validation.isPasssword(
      password,
      'errorPassword',
      '(*) Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt'
    );

  // Kiểm tra retryPassword: Mật khẩu xác nhận phải khớp
  isValid &= validation.isRetryPasssword(
    password,
    retryPassword,
    'errorRetryPassword',
    '(*) Mật khẩu xác nhận không đúng'
  );

  // Kiểm tra startDate: Ngày làm không để trống, định dạng mm/dd/yyyy
  isValid &= validation.isBlank(
    startDate,
    'errorStartDate',
    '(*) Ngày làm không để trống'
  );

  // Kiểm tra salary: Lương cơ bản 1 000 000 - 20 000 000, không để trống, phải là số
  isValid &=
    validation.isBlank(
      salary,
      'errorSalary',
      '(*) Lương cơ bản không để trống'
    ) &&
    validation.isNumber(salary, 'errorSalary', '(*) Lương cơ bản phải là số') &&
    validation.isValue(
      salary,
      'errorSalary',
      '(*) Lương cơ bản 1000000 - 20000000',
      1_000_000,
      20_000_000
    );

  // Kiểm tra position: Chức vụ phải chọn chức vụ hợp lệ
  isValid &=
    // validation.isBlank(position, 'errorPosition', '(*) Chức vụ phải được chọn');
    validation.isSelected(
      position,
      'errorPosition',
      '(*) Chức vụ phải được chọn',
      ''
    );

  // Kiểm tra hobbies: Sở thích phải được chọn
  isValid &= validation.isChecked(
    hobbies,
    'errorHobbies',
    '(*) Sở thích phải được chọn'
  );

  // Kiểm tra workTime: Số giờ làm trong tháng 80 - 200 giờ, không để trống
  isValid &=
    validation.isBlank(
      workTime,
      'errorWorkTime',
      '(*) Số giờ làm không để trống'
    ) &&
    // validation.isNumber(workTime, 'errorWorkTime', '(*) Số giờ làm phải là số') &&
    validation.isRegex(
      workTime,
      'errorWorkTime',
      '(*) Số giờ làm phải là số',
      '^[+-]?([0-9]*[\\.])?[0-9]+$'
    ) &&
    validation.isValue(
      workTime,
      'errorWorkTime',
      '(*) Số giờ làm 80 - 200',
      80,
      200
    );

  return isValid;
}

// Click submit
getElement('btnSubmit').addEventListener('click', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});
