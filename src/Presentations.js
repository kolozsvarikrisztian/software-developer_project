import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Presentations = () => {
    return (
        <>
            {presentations.map((presentation, index) => (
                <Presentation presentation={presentation} key={index} />
            ))}
        </>
    )
}

const Presentation = (props) => {
    const {presentation} = props
    return (
        <div class="row">
            <div class="">
                <div class="">
                    <div class="">
                        <PresentationWrapper>
                            <Time>{presentation.startTime}</Time>
                            <Title>{presentation.title}</Title>
                        <Presenter>
                            {presentation.presenter.name} {presentation.presenter.company}, {presentation.presenter.title}
                            <div>
                                <img src={presentation.presenter.photo.url} alt={presentation.presenter.name} />
                            </div>
                        </Presenter>
                        </PresentationWrapper>
                    </div>
                </div>
            </div>
        </div>

    )
}

const Presenter = styled.div`
    font-size: 14px;
    font-weight: 400px;
    color: rgb(150, 150, 150);
    img {
        width: 80px;
        border-radius: 50%;
        padding-top: 10px;
    }
`

const PresentationWrapper = styled.div`
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 10px;
`

const Time = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgb(150, 150, 150);
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export default Presentations

const presentations = [
    {
        title: "Hegyesi Zsolt",
        startTime: "1999",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/cf2d849d132efabad5e5c9b1ffff85af.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Kása István Patrik",
        startTime: "2002",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/4c65eaec965f0c721b467bfffccc1288.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Kasza Tünde Napsugár",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/d949fb70f68eaf7d5669cbfd356a137e.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Kiss Lajos Bertalan",
        startTime: "1998",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/cb7e9503fbfcea9f44cad49532baaf69.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Kolozsvári László Krisztián",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/ba5e71c52c2db45f0f5265b90f0324ef.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Nagy Tibor",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/3a5c70a1440c570e40ac989d635a75de.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Panyik Szabolcs",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/5ee1de468cd85dca1627497ae26e3cc9.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Rostás Barbara",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/8ef9475db82e5367cb503ced85d2ca45.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Tóth Tamás Levente",
        startTime: "2002",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/d4f2a284bc67c085ab73e745f63758a2.jpg"
            },
            name: '',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    }
]