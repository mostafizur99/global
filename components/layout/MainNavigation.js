import Link from 'next/link';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Global Campus</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Campuses</Link>
                    </li>
                    <li>
                        <Link href='/new-campus'>Add New Campus</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;