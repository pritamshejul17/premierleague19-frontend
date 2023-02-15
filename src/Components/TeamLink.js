import { NavLink } from 'react-router-dom';

function TeamLink ({teamName}) {
    return (
            <NavLink to={`/${teamName}`} className="text-center border-2 bg-stone-200  p-6 m-1 text-xl">
                {teamName}
            </NavLink>
    );
}

export default TeamLink;