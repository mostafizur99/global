import CampusItem from './CampusItem';
import classes from './CampusItem.module.css';

const CampusList = (props) => {
    return (
        <ul className={classes.list}>
            {props.campuses.map((campus) => (
                <CampusItem
                    key={campus.id}
                    id={campus.id}
                    image={campus.image}
                    title={campus.title}
                    address={campus.address}
                />
            ))}
        </ul>
    );
};

export default CampusList;