import { Clipboard } from "react-native";
import { connect } from "react-redux";
import EntryPage from "../components/EntryPage.js";
import { setNotification } from "../actions/entry.js"
import {
    getEntryProperties,
    getEntryTitle,
    getMetaItems,
    getNotification
} from "../selectors/entry.js";

export default connect(
    (state, ownProps) => ({
        entryNotificationMessage:   getNotification(state),
        meta:                       getMetaItems(state),
        properties:                 getEntryProperties(state),
        title:                      getEntryTitle(state)
    }),
    {
        copyToClipboard:            (name, value) => dispatch => {
            Clipboard.setString(value);
            dispatch(setNotification(`Copied '${name}' to clipboard...`));
            setTimeout(() => {
                dispatch(setNotification(""));
            }, 1250);
        }
    }
)(EntryPage);
