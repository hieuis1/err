import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_STUDENT,
  SEARCH_STUDENT,
  SET_UPDATE,
} from "../redux/slice/addSlice";
import "./style.css";
import { useEffect } from "react";
function Show() {
  const listStudent = useSelector((state) => state.add.filterStudent);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(SEARCH_STUDENT(""));
  }, []);
  return (
    <Container className="mt-3">
      <div className="search-componet">
        <label htmlFor="Search">Search</label>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onChange={(e) => disPatch(SEARCH_STUDENT(e.target.value))}
            type="text"
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.maSinhVien}</th>
                <th>{item.ten}</th>
                <th>{item.phone}</th>
                <th>{item.email}</th>
                <th>
                  <i
                    onClick={() => disPatch(SET_UPDATE(item))}
                    className="text-success mx-2 fa-solid fa-pen-to-square"
                  ></i>
                  <i
                    onClick={() => disPatch(DELETE_STUDENT(item))}
                    className="text-danger fa-solid fa-trash"
                  ></i>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Show;
