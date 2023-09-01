import {Container} from "./style.ts";
import { BsStar } from "react-icons/bs";

const Expositor = () => {
    return (
        <Container>

            <section>

                <img src="https://i.imgur.com/dD3uPAe.png" alt=""/>



                <div className="total">

                    <div className="text">
                        <p>Easy Snooze Function Diming Mode</p>
                    </div>


                    <div className="rating">
                        <BsStar />
                        <div className="stars">
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        </div>

                    </div>
                    <h1>$210.00</h1>
                </div>

            </section>

        </Container>
    );
};

export default Expositor;
