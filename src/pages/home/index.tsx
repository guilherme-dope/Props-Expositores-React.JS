import {Container} from "./style.ts";
import Expositor from "../components/expositor";

function Home() {
    return (
        <Container>
            <Expositor />
            <Expositor />
        </Container>
    );
}

export default Home;
