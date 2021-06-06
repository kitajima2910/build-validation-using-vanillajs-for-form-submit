function Validation() {
  // Hàm kiểm tra rỗng
  this.isBlank = function(input, id, msg) {
    if (!Object.is('', input.trim())) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm check độ dài từ min - max
  this.isLength = function(input, id, msg, min, max) {
    if (input.length >= min && input.length <= max) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra Tiếng Việt
  this.isVietnamese = function(input, id, msg) {
    var pattern =
      '^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
      'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ' +
      'ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$';
    if (input.match(pattern)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra Email
  this.isEmail = function(input, id, msg) {
    var pattern = '^\\w{1,}@\\w{2,}(\\.\\w{2,}){1,2}$';
    if (input.match(pattern)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra mật khẩu: (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)
  this.isPasssword = function(input, id, msg) {
    var pattern =
      '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&\\s]+$';
    if (input.match(pattern)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra xác nhận mật khẩu
  this.isRetryPasssword = function(input, retryInput, id, msg) {
    if (Object.is(input, retryInput)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra MM/dd/yyyy
  // Tips: dd/MM/yyyy: ^((0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](19|20)?[0-9]{2})*$
  // Tips: yyyy/MM/dd: ^((19|20)?[0-9]{2}[/](0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012]))*$
  // Tips: thay / -> - để có yyyy/MM/dd -> yyyy-MM-dd
  this.isDateMMddyyyy = function(input, id, msg) {
    var pattern =
      '^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$';
    if (input.match(pattern)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra number
  this.isNumber = function(input, id, msg) {
    var pattern = '^[+-]?([0-9]*[\\.])?[0-9]+$';
    if (input.match(pattern)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra giá trị
  this.isValue = function(input, id, msg, min, max) {
    if (input >= min && input <= max) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra regex
  this.isRegex = function(input, id, msg, regex) {
    if (input.match(regex)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra select có điều kiện
  this.isSelected = function(input, id, msg, condition) {
    if (!Object.is(condition, input)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };

  // Hàm kiểm tra checkbox
  this.isChecked = function(input, id, msg) {
    if (!Object.is(0, input.length)) {
      getElement(id).innerHTML = '';
      return true;
    }
    getElement(id).innerHTML = msg;
    getElement(id).style.color = 'red';
    return false;
  };
}
