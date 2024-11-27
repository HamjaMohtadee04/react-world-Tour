import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country,handleVisitedCountry} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country ={country}
                handleVisitedCountry ={handleVisitedCountry}>
            </CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;