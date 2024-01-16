import {useSelector} from 'react-redux'

function Customer() {
  const customer=useSelector(store=>store.customer.fullName);
  return <h2 style={{display:'flex',justifyContent:'center', color:'orange'}}>👋 Welcome {customer}</h2>;
}

export default Customer;
