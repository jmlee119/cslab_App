import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput } from 'react-native';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name , setName] = useState('')
    const [number , setNumber] = useState('')
    const [birthdate, setBirth] = useState('')
    const [phonenumber, setPhone] = useState('')

    return (
        <SafeAreaView> 
         <TextInput 
         style = {styles.input}
         onChangeText = {setEmail}
         value={email}
         placeholder='이메일'
         />
         <TextInput
        style = {styles.input}
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
        placeholder="비밀번호" />
        
        <TextInput
        style = {styles.input}
        onChangeText={setPasswordConfirm}
        secureTextEntry={true}
        value={passwordConfirm}
        placeholder="비밀번호 확인" />
        
        <View>
        <TextInput
        style = {styles.input}
        onChangeText={setName}
        value={name}
        placeholder="이름" />
            </View>        
        <TextInput
        style = {styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="학번" 
        keyboardType="numeric"
        />

        <TextInput
        style = {styles.input}
        onChangeText={setPhone}
        value={phonenumber}
        placeholder="전화번호" 
        keyboardType="numeric"
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height:40,
        margin :12,
        borderWidth:1,
        padding:10,
    },
});

export default Signup;
