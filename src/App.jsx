import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import RandomNumber from "./components/RandomNumber";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <br />

      <Greetings lang="de">
        <em>
          <b>Ludwig</b>
        </em>
      </Greetings>
      <Greetings lang="fr">
        <em>
          <b>François</b>
        </em>
      </Greetings>
      <RandomNumber num1={10} num2={30}></RandomNumber>
      <BoxColor r={255} g={0} b={0}></BoxColor>
      <BoxColor r={128} g={255} b={0}></BoxColor>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      <Rating rating={3.5} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
      <Rating rating={0} />
      <Rating rating={1.49} />
      <Rating rating={1.5} />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <LikeButton />
      <Dice />
    </div>
  );
}

export default App;

