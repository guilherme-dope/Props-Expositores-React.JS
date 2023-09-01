import { Container } from "./style.ts";
import Expositor from "../components/expositor";

function Home() {
  return (
    <Container>
      <div className="props">
        <Expositor
          img={"https://i.imgur.com/pDCFiej.png"}
          text={"Easy Snooze Function Diming Mode"}
          price={"210.00"}
        />

        <Expositor
          img={"https://i.imgur.com/KWBV9lN.png"}
          text={"Relogio SC Koth - Aqui o pau tora!"}
          price={"777.00"}
        />

        <Expositor
          img={"https://i.imgur.com/dD3uPAe.png"}
          text={"R a Z o R Watch Premium Waterproof"}
          price={"225.10"}
        />
      </div>
    </Container>
  );
}

export default Home;
