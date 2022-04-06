
import { StyleSheet, Button,onPressLearnMore} from 'react-native';

export default function App(props) {

    const  {text, color,setIsShowingText, ...restprops} = props;

    return (
        <Button style={styles.fixToText}
            onPress={() => setIsShowingText(color)}
            title={text}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    );
}
const styles = StyleSheet.create({
    fixToText: {
    },

});

