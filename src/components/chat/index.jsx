import Forms from "../Form";
import BotHeader from "../BotHeader";
import { Container } from "./styles";

export default function ChatArea() {
  return (
    <>
      <Container>
        <BotHeader />
        <Forms />
      </Container>
    </>
  )
}