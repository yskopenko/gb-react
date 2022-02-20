import {Route, Routes} from "react-router-dom";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "../../components/ChatList";
import {Messages} from "../Messages";
import {withChats} from "../../hocs/withChats";


const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});

export const ChatsRender = ({
                        chats,
                        onCreateChat,
                        onDeleteChat
                      }) => {

  const classes = useStyles();


  return (
    <div className={classes.wrapper}>
      <div>
        <ChatList onDelete={onDeleteChat} list={chats}/>
        <Button onClick={onCreateChat}>Create chat</Button>
      </div>
      <div>
        <Routes>
          <Route component={Messages} path="/chats/:chatId"/>
        </Routes>
      </div>
    </div>
  );
};

export const Chats = withChats(ChatsRender);