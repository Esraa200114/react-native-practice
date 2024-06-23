import React, { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";

type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType
}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageURL }: DiceProps): JSX.Element => {
  return (
    <Image source={imageURL} style={styles.diceImage} />
  );
}

function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1 // Adding 1 to exclude 0

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break
      default:
        break
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    
  }

  return (
    <View style={styles.container}>
      <Dice imageURL={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;