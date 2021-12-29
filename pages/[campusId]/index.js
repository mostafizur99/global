import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head'
import { Fragment } from 'react'
import CampusDetail from "../../components/campus/CampusDetail";


export default function CampusDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.campusData.title}</title>
                <meta name="description" content={props.campusData.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CampusDetail
                image={props.campusData.image}
                title={props.campusData.title}
                address={props.campusData.address}
                description={props.campusData.description}
            />
        </Fragment>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lb8le.mongodb.net/global?retryWrites=true&w=majority`);
    const db = client.db();

    const campusCollection = db.collection('campus');

    const campusDetails = await campusCollection.find({}, { _id: 1 }).toArray();

    client.close();


    return {
        fallback: false,
        paths: campusDetails.map((campus) => ({
            params: { campusId: campus._id.toString() }
        }))
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const campusId = context.params.campusId;
    // console.log(campusId);

    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lb8le.mongodb.net/global?retryWrites=true&w=majority`);
    const db = client.db();

    const campusCollection = db.collection('campus');

    const selectedCampus = await campusCollection.findOne({ _id: ObjectId(campusId) });

    client.close();

    return {
        props: {
            campusData: {
                image: selectedCampus.image,
                id: selectedCampus._id.toString(),
                title: selectedCampus.title,
                address: selectedCampus.address,
                description: selectedCampus.description,
            },
        },
    };
}