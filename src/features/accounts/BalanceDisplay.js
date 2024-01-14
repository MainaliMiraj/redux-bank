import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


function BalanceDisplay() {
  const amount=useSelector((state)=>state.account.balance)
  return <div className="balance">{formatCurrency(amount)}</div>;
}

export default BalanceDisplay;
