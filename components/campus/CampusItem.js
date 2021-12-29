// import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './CampusItem.module.css'

const CampusItem = (props) => {
    const router = useRouter();
    const showDetailsHandler = () => {
        router.push('/' + props.id);
    }
    return (
        <div className={classes.item}>
            <div className={classes.card}>
                <div className={classes.image}>
                    {/* <Image src={props.image} alt={props.title} /> */}
                    <img src={props.image} alt="" />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </div>
        </div>
        // <li className={classes.item}>
        //     <div className={classes.card}>
        //         <div className={classes.image}>
        //             {/* <Image src={props.image} alt={props.title} /> */}
        //             <img src={props.image} alt="" />
        //         </div>
        //         <div className={classes.content}>
        //             <h3>{props.title}</h3>
        //             <address>{props.address}</address>
        //         </div>
        //         <div className={classes.actions}>
        //             <button onClick={showDetailsHandler}>Show Details</button>
        //         </div>
        //     </div>
        // </li>
    );
};

export default CampusItem;