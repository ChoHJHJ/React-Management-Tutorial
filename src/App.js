import "./App.css";
import Customer from "./components/Customer";

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
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthdah={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
