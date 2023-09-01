import {Container} from "./style.ts";
import Expositor from "../components/expositor";

function Home() {
    return (
        <Container>
            <Expositor
                img={"https://i.imgur.com/gUdP3SR.jpg"}
                text={"Relogio Navegador Alpha"}
                price={"300.00"}

            />

            <Expositor
                img={"https://i.imgur.com/BiPJw1D.jpg"}
                text={"Relogio Kingzolas Premium Deluxe"}
                price={"999.90"}

            />

            <Expositor
                img={"https://i.imgur.com/dD3uPAe.png"}
                text={"R a Z o R Watch Premium Waterproof"}
                price={"225.10"}

            />

        </Container>
    );
}

export default Home;
