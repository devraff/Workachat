import icon from '../../assets/bot.png'
import { Container, Content, Icon } from './styles'

export default function BotHeader() {
  return (
    <Container>
      <Content>
        <Icon>
          <img src={icon} alt="" />
        </Icon>
        <div className="name">
          <h3>Chatnilson</h3>
        </div>
        <div className="status">
          <span></span>
          <p>Online</p>
        </div>
      </Content>
    </Container>
  )
}