import { GestureResponderEvent, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

// Import For Bouncy Checkbox
import BouncyCheckbox from "react-native-bouncy-checkbox"

// Form Validation
import * as Yup from "yup"

// Library For Forms
import { Formik } from 'formik'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, "Should be of min length of 4 characters.").max(16, "Should be of max length of 16 characters.").required("Length is required.")
})

export default function App() {

  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [islowerCase, setIsLowerCase] = useState(true)
  const [isupperCase, setIsUpperCase] = useState(false)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSymbols, setUseSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ""

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+'";

    if (isupperCase) {
      characterList += upperCaseLetters
    }

    if (islowerCase) {
      characterList += lowerCaseLetters
    }

    if (useNumbers) {
      characterList += numbers
    }

    if (useSymbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)

    setIsPasswordGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ""
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword("")
    setIsPasswordGenerated(false)

    setIsLowerCase(true)
    setIsUpperCase(false)
    setUseNumbers(false)
    setUseSymbols(false)
  }

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Genrator</Text>
            <Formik
              initialValues={{ passwordLength: "" }}
              validationSchema={passwordSchema}
              onSubmit={(values) => {
                console.log("The values are: ", values);
                generatePasswordString(+values.passwordLength)
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {touched.passwordLength && errors.passwordLength && (<Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>)}
                    </View>
                    <TextInput style={styles.inputStyle} value={values.passwordLength} onChangeText={handleChange('passwordLength')} placeholder='Ex. 9' keyboardType='numeric' />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Includes lowercase letters
                    </Text>
                    <BouncyCheckbox isChecked={islowerCase} onPress={() => setIsLowerCase(!islowerCase)} fillColor='#29AB87' />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Includes uppercase letters
                    </Text>
                    <BouncyCheckbox isChecked={isupperCase} onPress={() => setIsUpperCase(!isupperCase)} fillColor='#ff6b81' />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Includes numbers
                    </Text>
                    <BouncyCheckbox isChecked={useNumbers} onPress={() => setUseNumbers(!useNumbers)} fillColor='#fed330' />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Includes symbols
                    </Text>
                    <BouncyCheckbox isChecked={useSymbols} onPress={() => setUseSymbols(!useSymbols)} fillColor='#45aaf2' />
                  </View>
                  <View style={styles.formActions}>
                    <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}>
                      <Text style={styles.primaryBtnTxt}>
                        Generate Password
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryBtn} onPress={() => { handleReset(); resetPasswordState(); }}>
                      <Text style={styles.secondaryBtnTxt}>
                        Reset
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {isPasswordGenerated ? <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result: </Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text selectable={true}style={styles.generatedPassword}>{password}</Text>
          </View> : null}
        </SafeAreaView>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
});