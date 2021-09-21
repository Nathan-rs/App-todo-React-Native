import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "ios"? 0 : 50,
    },
    title: {
        fontSize: 48,
        color: "#30B8B2",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderColor: "#30B8B2",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",

    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#30B8B2",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#fff"
    },
    login: {
        marginTop: 20,
        color: "#4d5156"
    },
    linkLogin: {
        color: "#3171F7",
        fontSize: 16,
    }
});

export default styles