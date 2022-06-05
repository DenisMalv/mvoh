import { useDispatch, useSelector } from "react-redux";
import {
  toggleStatus,
  deleteContact,
  getContacts,
} from "../../redux/contactsSlice/contactsSlice";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableData,
} from "./ContactsTable.styled";
import { MdDelete } from "react-icons/md";
import Avatar from "react-avatar";

export const ContactTable = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const tableHeaders = ["№", "avatar", "name", "age", "status", "option"];
  return (
    <div className="container">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, idx) => (
              <TableData key={idx}>{header}</TableData>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.contacts.map(({ id, avatar, name, age, status }, idx) => {
            return (
              <TableRow key={id}>
                <TableData>№{idx + 1}</TableData>
                <TableData>
                  <Avatar size={40} round={true} name={avatar} />
                </TableData>
                <TableData>{name}</TableData>
                <TableData>{age} </TableData>
                <TableData
                  className={status === "yes" && "isOnline"}
                  onClick={() => dispatch(toggleStatus(id))}
                >
                  {status === "yes" ? "online" : "offline"}
                </TableData>
                <TableData onClick={() => dispatch(deleteContact(id))}>
                  <MdDelete size="20px" />
                </TableData>
              </TableRow>
            );
          })}
          {/* <tr>
          <td>№1</td>
          <td>avatar contact</td>
          <td>name contact</td>
          <td>age contact</td>
          <td>option contact</td>
          <td>status contact</td>
        </tr> */}
        </TableBody>
      </Table>
    </div>
  );
};
