//domain.com/new-campus
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Fragment } from 'react'
import NewCampusForm from "../../components/campus/NewCampusForm";

export default function NewCampusPage() {
    const router = useRouter();

    async function addCampusHandler(enteredCampusData) {
        const response = await fetch('/api/new-campus', {
            method: 'POST',
            body: JSON.stringify(enteredCampusData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Campus</title>
                <meta name="description" content="Add your Campus Details" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NewCampusForm onAddCampus={addCampusHandler} />
        </Fragment>
    )
}