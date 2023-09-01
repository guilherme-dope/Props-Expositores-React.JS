import { Container } from "./style.ts";
import { BsStar } from "react-icons/bs";

interface ExpProps {
  img: string;
  text: string;
  price: string;
}

const Expositor = ({ img, text, price }: ExpProps) => {
  return (
    <Container>
      <section>
        <img src={img} alt="" />

        <div className="total">
          <div className="text">
            <p>{text}</p>
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
          <h1>${price}</h1>
        </div>
      </section>
    </Container>
  );
};

export default Expositor;
