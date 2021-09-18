import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    iconButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 25,

    },
    deleteTask:{
        justifyContent: "center",
        paddingRight: 15
    },
    Tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    DescriptionTask:{
        width: "80%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5fc",
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 20,
        color: "#282b2db5"
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 40,
        right: 20,
        backgroundColor: "#0786E8",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles