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
        <PresentationWrapper  className="col-sm-4">
            <Time>{presentation.startTime}</Time>
                <div>
                    <img src={presentation.presenter.photo.url} alt={presentation.title} title={presentation.title} />
                </div>
            <Title>{presentation.title}</Title>
            <Presenter>
                {presentation.presenter.company}, {presentation.presenter.title}<br /><br />
                <a href={presentation.presenter.github} rel="noreferrer" target="_blank">GitHub hozzáférés</a> <a href={presentation.presenter.github} rel="noreferrer" target="_blank">Személyes weboldal</a>
            </Presenter>
        </PresentationWrapper>
    )
}

const Presenter = styled.div`
    font-size: 14px;
    font-weight: 400px;
    color: rgb(150, 150, 150);
    // img {
    //     width: 80px;
    //     border-radius: 50%;
    //     padding-top: 10px;
    // }
    a {
        background-color: #f5f5dc;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
    }
    a:hover {
        background-color: rgb(150, 150, 150);
    }
`

const PresentationWrapper = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-top: 1px solid black;
    // border-radius: 10px;
    img {
        width: 80px;
        border-radius: 50%;
        padding-top: 10px;
        float: right;
    }
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
            github: 'https://github.com/nevtelen11',
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
            github: 'https://github.com/patrik-ks17',
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
            github: 'https://github.com/Napsugar091',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Kiss Lajos Bertalan",
        startTime: "1998",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/60f5c671f33deba60d9011612a0f006c.jpg"
            },
            github: 'https://github.com/Lali98',
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
            github: 'https://github.com/kolozsvarikrisztian',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    },
    {
        title: "Nagy Tibor",
        startTime: "2001",
        presenter: {
            title: "szoftverfejlesztő és -tesztelő",
            photo: {
                url: "https://kepkuldes.com/images/446ed2e51c4993dfafb5131726e4ca2e.jpg"
            },
            github: 'https://github.com/natibi121',
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
            github: 'https://github.com/PanyikSzabolcs',
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
            github: 'https://github.com/Barbika1',
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
            github: 'https://github.com/Tomszuty',
            company: 'Gyulai SZC Szigeti Endre Technikum és Szakképző Iskola'
        }
    }
]