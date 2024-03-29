import * as React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import "../styles/Country.css";
import countries from "./Countries";

function Country(props) {
    const [selected, changeSelected] = React.useState(false);

    return (
        <tr className={selected ? "selected-country": ""}>
            <td>{props.name}</td>
            <td>{props.capital}</td>
            <td>
                { selected ?
                    <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>:
                    <Button variant="danger" onClick={() => changeSelected(false)}>Removenopm</Button>
                }
            </td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "Not Available"
}

// Country.propTypes = {
//     country: PropTypes.object
// };

export default Country;