const API_URL = "http://localhost:4000/";
import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, Button, StyleSheet, FlatList, ActivityIndicator, View} from "react-native";
import Toppage from "../components/Toppage";
import FeedbackTodo from "../components/FeedbackTodo";
import styles from "./style";
import dateFormat from "dateformat"

function Feedback() {

    const [data, setdata] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getFeedback = async () => {
        await fetch(`${API_URL}feedback/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxlZEBnbWFpbC5jb20iLCJpYXQiOjE2NjU1NjcwMTAsImV4cCI6MTY2NTY1MzQxMH0.7ZzdCn4uHb8TFIPuV_Gi7iQZsSVmgLp6akvttciVf2g"
            }
        })
            .then(async (res) => {
                try {
                    const jsonRes = await res.json();
                    if (res.status !== 200) {
                        console.log(jsonRes)
                    } else {
                        console.log(jsonRes)
                        for (let i = 0; i < jsonRes.feedbacks.length; i++) {
                            const maDate = new Date(jsonRes.feedbacks[i].date)
                            jsonRes.feedbacks[i].date = dateFormat(maDate, "dd/mm")

                        }
                        console.log(jsonRes.feedbacks)
                        setdata(jsonRes.feedbacks)
                    }
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsloading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getFeedback()
    }, []);

    return (
        <SafeAreaView style={styles.view}>
            <Toppage subTitle={"Retrouve ici ton historique de feedbacks."}>
                Tes feedbacks
            </Toppage>
            <FeedbackTodo
                title={"Ton feedback"}
                subTitle={"de la semaine du 10/10"}
                btnTitle={"Remplir dès maintenant"}
            />
            <Text style={stylesFeedback.title}>Historique</Text>

                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={item => item._id}
                        renderItem={({item}) => (
                            <Text>{item.date}</Text>
                        )}
                    />
                )}

        </SafeAreaView>
    );
};

const stylesFeedback = StyleSheet.create({
    title: {
        fontFamily: 'Switzer-bold',
        fontSize: 25,
        color: "#003a45",
        marginLeft: 25,
        marginTop: 10,
    }
})

export default Feedback;


