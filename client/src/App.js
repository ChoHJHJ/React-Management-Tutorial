import "./App.css";
import Customer from "./components/Customer";
import { Table } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const styles = (theme) => {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
    },
    table: {
      minWidth: 1080,
    },
  };
};

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "조현중",
    birthday: "921123",
    gender: "남자",
    job: "개발자",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "햰듕",
    birthday: "920101",
    gender: "남자",
    job: "프로그래머",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: "911111",
    gender: "남자",
    job: "홍길동",
  },
];

function App() {
  // const { classes } = this.props;
  return (
    <Paper className="props.root">
      <Table className="props.table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
