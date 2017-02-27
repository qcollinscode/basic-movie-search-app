import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "width": "100%"
    },
    "body": {
        "height": "100%",
        "width": "100%",
        "paddingTop": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "lightgrey"
    },
    "ul": {
        "listStyle": "none"
    },
    "li": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "h1": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 0,
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "backgroundColor": "maroon",
        "color": "white"
    },
    "footer": {
        "position": "relative",
        "marginTop": 6,
        "textAlign": "center",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center"
    }
});