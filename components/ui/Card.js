import { View, StyleSheet, Dimensions, useWindowDimensions } from "react-native"
import Colors from "../../constants/colors"
function Card({children}){
    const { width, height } = useWindowDimensions()
let deviceHeight= height < 380? 700:height < 420? 700: 340
let marginTop = width<380? 20: 36
    return  <View style={[styles.card, {width: deviceHeight,marginTop:marginTop}]}>{children}</View>
}
export default Card
const deviceW = Dimensions.get('window').width
const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary800,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 10,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})