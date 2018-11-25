import Header from '../components/Header'
import Layout from '../components/Layout'
import HeaderButton from '../components/HeaderButton'
import Login from '../components/Login'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title="Home">
          <div className="header-left">
            <HeaderButton name="Inicio" rute="/" />
            <HeaderButton name="Realizar Reserva" rute="" />
            <HeaderButton name="Ver Reservas" rute="" />
            <HeaderButton name="Login" rute="/login" />
          </div>
          <div className="header-right">
            <a>Logo Genial</a>
          </div>
        </Header>

        <div className="login">
          <Login />
        </div>

        <style jsx>{`
          .login {
            display: flex;
            justify-content: center;
            margin: 50px;
          }
        `}</style>

      </Layout>
    )
  }
}