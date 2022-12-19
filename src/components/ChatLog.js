
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
        const entries = props.entries;
    return(
        <div className="chat-log">
            {
                entries.map((entry, id) => (
                    <ChatEntry
                        id={entry.id}
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        updateLikes={props.updateLikes}
                        key={id}
                    />
                )
            )}
        </div>
    )
};
ChatLog.prototype = {
    entries: PropTypes.array.isRequired,
}
export default ChatLog;