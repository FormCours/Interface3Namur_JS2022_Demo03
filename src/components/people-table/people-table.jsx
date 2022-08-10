import PropTypes from 'prop-types';
import style from './people-table.module.css';

const PeopleTableHead = () => (
    <thead>
        <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Age</th>
            <th>Hobbies</th>
        </tr>
    </thead>
);

const PeopleTableRow = ({ firstname, lastname, age, hobbies }) => (
    <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{age || '/'}</td>
        <td>{hobbies ? (
            hobbies.join(', ') + '.'
        ) : (
            'Aucun'
        )}</td>
    </tr>
);

const PeopleTable = ({ peopleData }) => {

    const peopleRender = peopleData.map(
        person => <PeopleTableRow {...person} key={person.id} />
    );

    return (
        <table className={style.peopleTable}>
            <PeopleTableHead />
            <tbody>
                {peopleRender}
            </tbody>
        </table>
    );
};

// Valeur par defaut pour le "PeopleTable"
//  - Tableau vide pour éviter les erreurs avec la méthode "map"
PeopleTable.defaultProps = {
    peopleData: []
};

// Typage des "props" du composant "PeopleTable"
PeopleTable.propTypes = {
    peopleData: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string,
        age: PropTypes.number,
        hobbies: PropTypes.arrayOf(PropTypes.string)
    }))
};

export default PeopleTable;