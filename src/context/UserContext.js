import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [myState, setMyState] = useState('');
    const [pincode, setPincode] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const handleCheckoutSubmit = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobileNumber('');
        setAddress('');
        setCountry('');
        setCity('');
        setMyState('');
        setPincode('');
        setTotalAmount('');
    };

    return (
        <UserContext.Provider value={{
            firstName, setFirstName, lastName, setLastName, email, setEmail, mobileNumber, setMobileNumber, address, setAddress, country, setCountry, city, setCity, myState, setMyState, pincode, setPincode, totalAmount, setTotalAmount, handleCheckoutSubmit
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;