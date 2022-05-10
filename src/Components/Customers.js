import { FaUserAlt } from "react-icons/fa";

const Customers = (props) => {
  return (
    <div className="customers">
      <h1>Customers List</h1>
      {props.customers.length == 0 ? (
        <p className="empty_list">No customers registered</p>
      ) : (
        props.customers.map((item) => (
          <div className="singleCustomer" key={item.id}>
            <div>
              <FaUserAlt className="icon" />
              <h3>{item.name}</h3>
            </div>
            <span>{item.city}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Customers;
