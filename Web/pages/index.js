import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

// paracer dos estilos
function Home({ data }) {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Site de ... sobre ..." />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">{data.home.topTitulo}</h1>
                    <p className="lead">{data.home.topSubtitulo}</p>
                    <p className="lead">
                        <a href={data.home.topLinkBtn} className="btn btn-outline-primary btn-lg mt-4">{data.home.topTextoBtn}</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">{data.home.serTitulo}</h2>
                        <p className="lead pb-4">{data.home.serSubtitulo}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serUmIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serUmTitulo}</h2>
                            <p>
                                {data.home.serUmDesc}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serDoisIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serDoisTitulo}</h2>
                            <p>
                                {data.home.serDoisDesc}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serTresIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serTresTitulo}</h2>
                            <p>
                                {data.home.serTresDesc}
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080/home`);
    const data = await response.json();

    return { props: { data } };
}

export default Home;