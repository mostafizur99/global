import CampusItem from './CampusItem';
import classes from './CampusList.module.css';

const CampusList = (props) => {
    return (
        <div className={classes.listContainer}>
            {props.campuses.map((campus) => (
                <CampusItem
                    key={campus.id}
                    id={campus.id}
                    image={campus.image}
                    title={campus.title}
                    address={campus.address}
                />
            ))}
        </div>
        // <ul className={classes.list}>
        //     {props.campuses.map((campus) => (
        //         <CampusItem
        //             key={campus.id}
        //             id={campus.id}
        //             image={campus.image}
        //             title={campus.title}
        //             address={campus.address}
        //         />
        //     ))}
        // </ul>
    );
};

export default CampusList;