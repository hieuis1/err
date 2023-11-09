import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { sortUserPlugins } from "vite";
const Form = () => {
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
  const validate = (name) => {
    switch (name) {
      case "maSinhVien":
        if (student.maSinhVien == "") {
          return "Mã sinh viên không được để trống";
        } else {
          return "";
        }
      case "ten":
        if (student.ten == "") {
          return "Tên không được để trống";
        } else {
          return "";
        }
      case "phone":
        if (student.phone == "") {
          return "Số điện thoại không được để trống";
        } else if (
          student.phone.match(new RegExp("/^(()?d{3}())?(-|s)?d{3}(-|s)d{4}$/"))
        ) {
          return "Số điện thoại không đúng";
        } else {
          return "";
        }
      case "email":
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (student.email == "") {
          return "Email không được để trống";
        } else if (!student.email.match(validRegex)) {
          return "Email không đúng";
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
    Object.keys(err).forEach((name) => {
      let errMess = validate(name);
      validation[name] = { ...validation, [name]: errMess };
    });
    setErr(validation);
    let check = true;
    Object.keys(err).forEach((name) => {
      if (err[name] != "") {
        check = false;
      }
    });

    if (!check) {
      return;
    }
    console.log(student);
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
              />
              <small className="text-danger">{err.phone}</small>
            </div>
            <div className="form4">
              <label htmlFor="">Email</label>
              <input
                onChange={changeData("email")}
                type="text"
                placeholder="Example@gmail.com"
              />
              <small className="text-danger">{err.email}</small>
            </div>
          </div>
          <Button type="submit" variant="success">
            Thêm sinh viên
          </Button>{" "}
        </form>
      </div>
    </Container>
  );
};

export default Form;
