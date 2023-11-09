import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Show() {
  const listStudent = useSelector((state) => state.add.listStudent);

  return (
    <Container className="mt-3">
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
                <th>Delete</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Show;
