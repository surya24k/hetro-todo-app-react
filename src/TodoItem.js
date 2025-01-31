import { Badge } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateStatus } from "./redux/slice/todo";

export default function TodoItem({ id, name, isDone, onClickRemove }) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(updateStatus({ id }));
    };

    return (
        <tr>
            <td>
                <p className={`todo-item ${isDone && "done"}`}>{name}</p>
                
            </td>
            <td>
                <Badge bg={isDone ? 'success' : 'danger'}>{isDone ? "Done" : "Pending"}</Badge>
               
            </td>

<td>
            {!isDone && (
            
                    <div className="mark-done-btn" onClick={() => handleClick(id)}>
                        <FaCheck />
                    </div>
              
            )}
          
            <div className="remove-btn" onClick={() => onClickRemove(id)}>
            <FaTimes />
            </div>
        
            </td>
        </tr>
    );
}

