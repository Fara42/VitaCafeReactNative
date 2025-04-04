import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([
        { id: "1", title: "Салат с бурратой", calories: "120 ккал", price: 380, quantity: 1, image: require("./assets/food_image2.png") },
        { id: "2", title: "Салат с бурратой", calories: "120 ккал", price: 380, quantity: 1, image: require("./assets/food_image2.png") },
        { id: "3", title: "Салат с бурратой", calories: "120 ккал", price: 380, quantity: 1, image: require("./assets/food_image2.png") },
        { id: "4", title: "Салат с бурратой", calories: "120 ккал", price: 380, quantity: 1, image: require("./assets/food_image2.png") },
    ]);

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <ImageBackground source={require("./assets/fon.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Feather name="menu" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.logo}>VitaCafe</Text>
                    <TouchableOpacity>
                        <Feather name="search" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headerText}>Выбрано вами</Text>

                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Image source={item.image} style={styles.foodImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.foodTitle}>{item.title}</Text>
                                <Text style={styles.foodCalories}>{item.calories}</Text>
                                <Text style={styles.foodPrice}>{item.price}р</Text>
                            </View>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.counterButton}>
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.counterButton}>
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />

                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Итого</Text>
                    <Text style={styles.totalPrice}>{totalPrice}р</Text>
                </View>

                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderText}>Заказать</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
 background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,

    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
    },
    icon: {
        width: 30,
        height: 30,
        left:8,
    },
    logoContainer: {
        right:9,
    },
    logo: {
        fontSize: 33,
        fontFamily: "faberge",
    },
    headerText: {
    fontSize: 26,
    paddingBottom: 20,
    fontFamily: 'faberge',
    padding: 10,
    },
    cartItem: {
        flexDirection: "row",
        backgroundColor: "#76b82a",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        marginRight:10,
        marginLeft:10,
    },
    foodImage: {
        width: 100,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    foodTitle: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "faberge",
    },
    foodCalories: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "faberge",
    },
    foodPrice: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "faberge",
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight:10,
        marginLeft:10,
    },
    counterButton: {
        paddingHorizontal: 10,
    },
    counterText: {
        fontSize: 20,
        fontFamily: "faberge",
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
        fontFamily: "faberge",
    },
    separator: {
        height: 20,
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 20,
        marginVertical: 10,
        marginRight:10,
        marginLeft:10,
    },
    totalText: {
        fontSize: 18,
        fontFamily: "faberge",
        fontWeight: "bold"
    },
    totalPrice: {
        fontSize: 18,
        fontFamily: "faberge",
        fontWeight: "bold"
    },
    orderButton: {
        backgroundColor: "#76b82a",
        padding: 15,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20,
        marginRight:10,
        marginLeft:10,
    },
    orderText: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "faberge",
        fontWeight: "bold"
    },
});

export default CartScreen;
