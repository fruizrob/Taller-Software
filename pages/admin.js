import Header from '../components/Header'
import Layout from '../components/Layout'
import Home from '../components/Home'
import HeaderButton from '../components/HeaderButton'
import ReservationGrid from '../components/ReservationGrid'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title="Home">
          <div className="header-left">
          <HeaderButton name="Inicio" rute="/" />
            <HeaderButton name="Personal de Aaseo" rute="" />
            <HeaderButton name="Reporte" rute="" />
          </div>
          <div className="header-right">
            <HeaderButton name="Bienvenido/a" rute="/admin" />
            <a>Logo Genial</a>
          </div>
        </Header>

        <div className="container">
          <h1>Reservas</h1>
          <div className="search">
            <input type="text" placeholder="Usuario" />
            <button>Buscar</button>
          </div>
        </div>

        <ReservationGrid /> 

        <style jsx>{`
          .container  {
            padding: 0 15px;
            display: flex;
            justify-content: space-between
          }
          .search {
            display: grid;
            justify-content: center;
            align-items: center;
          }
        `}</style>

      </Layout>
    )
  }
}