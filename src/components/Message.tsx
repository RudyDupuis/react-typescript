import { MessageInt } from "../model";

type Props = {
  data: MessageInt;
  messData: MessageInt[];
  setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>;
};

const Message = ({ data, messData, setMessData }: Props) => {
  const dateFormater = (date: number) => {
    return new Date(date).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  const handleDelete = () => {
    setMessData(messData.filter((el) => el.id !== data.id));
  };

  return (
    <div className="message-container">
      <p>{data.message}</p>
      <h5>{dateFormater(data.date)}</h5>
      <span id="delete" onClick={() => handleDelete()}>
        &#10008;
      </span>
    </div>
  );
};

export default Message;
