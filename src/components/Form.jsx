import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { ADD_STUDENT } from "../redux/slice/addSlice";

const Form = () => {
  const listStudent = useSelector((state) => state.add.listStudent);
  const [student, setStudent] = useState({
    maSinhVien: "",
    ten: "",
    phone: "",
    email: "",
  });
  const [err, setErr] = useState({
    maSinhVien: "",
    ten: "",
    phone: "",
    email: "",
  });
  const disPatch = useDispatch();
  const validate = (name, value) => {
    switch (name) {
      case "maSinhVien":
        let index = listStudent.findIndex((item) => item.maSinhVien == value);

        if (value == "") {
          return "Mã sinh viên không được để trống";
        } else if (index > -1) {
          return "Mã sinh viên đã tồn tại";
        } else {
          return "";
        }
      case "ten":
        if (value == "") {
          return "Tên không được để trống";
        } else {
          return "";
        }
      case "phone":
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        let index2 = listStudent.findIndex((item) => item.phone == value);
        if (value == "") {
          return "Số điện thoại không được để trống";
        } else if (!student.phone.match(regex)) {
          return "Số điện thoại không đúng";
        } else if (index2 > -1) {
          return "Số điện thoại đã tồn tại";
        } else {
          return "";
        }
      case "email":
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let index1 = listStudent.findIndex((item) => item.email == value);
        if (value == "") {
          return "Email không được để trống";
        } else if (!student.email.match(validRegex)) {
          return "Email không đúng";
        } else if (index1 > -1) {
          return "Email đã tồn tại";
        } else {
          return "";
        }
    }
  };

  const changeData = (name) => (e) => {
    setStudent({ ...student, [name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    let validation = {};
    Object.keys(student).forEach((name) => {
      let errMess = validate(name, student[name]);
      if (errMess && errMess.length > 0) {
        validation[name] = errMess;
      }
    });

    if (Object.keys(validation).length > 0) {
      setErr(validation);
      return;
    }
    disPatch(ADD_STUDENT(student));
  };

  return (
    <Container>
      <header>
        <h2>Thông tin sinh viên</h2>
      </header>
      <div className="body">
        <form id="" onSubmit={submitData}>
          <div className="line1">
            <div className="form1">
              <label htmlFor="">Mã Sinh viên</label>
              <input
                value={student.maSinhVien}
                onChange={changeData("maSinhVien")}
                type="text"
                placeholder="MaSV"
              />
              <small className="text-danger">{err.maSinhVien}</small>
            </div>
            <div className="form2">
              <label htmlFor="">Họ và tên</label>
              <input
                onChange={changeData("ten")}
                type="text"
                placeholder="Nguyen Van A"
                value={student.ten}
              />
              <small className="text-danger">{err.ten}</small>
            </div>
          </div>
          <div className="line2">
            <div className="form3">
              <label htmlFor="">Số điện thoại</label>
              <input
                onChange={changeData("phone")}
                type="text"
                placeholder="Số điện thoại"
                value={student.phone}
              />
              <small className="text-danger">{err.phone}</small>
            </div>
            <div className="form4">
              <label htmlFor="">Email</label>
              <input
                onChange={changeData("email")}
                type="text"
                placeholder="Example@gmail.com"
                value={student.email}
              />
              <small className="text-danger">{err.email}</small>
            </div>
          </div>
          <Button className="mt-3" type="submit" variant="success">
            Thêm sinh viên
          </Button>{" "}
        </form>
      </div>
    </Container>
  );
};

export default Form;
