import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentations from './Presentations'

function App() {
  return (
    <>
      <Header>2/14 szoftverfejlesztők</Header>
      <Main>
        <h1>Tanulók</h1>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4">
                <Presentations />
              </div>
            </div>
          </div>
      </Main>
      <Footer>
        Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola
      </Footer>
    </>
  );
}

export default App;

const Header = styled.header`
  height: 100px;
  background-image: linear-gradient(to right, #f5f5dc, #fff3e2, #fff3ee, #fff6f9, #fffafe, #fffafe, #fffafe, #fffafe, #fff6f9, #fff3ee, #fff3e2, #f5f5dc);
  // background-color: rgb(20, 71, 92);
  color: black;
  font-size: 50px;
  text-align: center;
  padding: 15px;
  font-weight: bold;
`

const Footer = styled.footer`
  height: 58px;
  background-image: linear-gradient(to right, #f5f5dc, #fff3e2, #fff3ee, #fff6f9, #fffafe, #fffafe, #fffafe, #fffafe, #fff6f9, #fff3ee, #fff3e2, #f5f5dc);
  // background-color: rgb(20, 71, 92);
  color: black;
  font-size: 18px;
  text-align: center;
  padding: 15px;
  font-weight: bold;
`

const Main = styled.main`
  padding: 15px;
  background-image: linear-gradient(to right, #f5f5dc, #fff3e2, #fff3ee, #fff6f9, #fffafe, #fffafe, #fffafe, #fffafe, #fff6f9, #fff3ee, #fff3e2, #f5f5dc);
  // background-color: rgb(214, 244, 245);
  height: calc(100vh - 100px - 58px);
  overflow: auto;
`