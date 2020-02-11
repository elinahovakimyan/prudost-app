import React from 'react';
import {
  Modal, Text, View, Image,
} from 'react-native';

import Button from '../../common/Button';

import styles from './styles';


const getContentByType = (type) => {
  switch (type) {
    case 'reward':
      return {
        text: 'The world is ready to celebrate with you your achievements so far!',
        image: require('../../../assets/images/reward.png'),
        points: null,
        buttonText: "Let's celebrate!",
      };
    case 'task':
      return {
        text: "Yaaay! You're on step closer to achieving your goal!",
        image: require('../../../assets/images/task.png'),
        points: 2,
        buttonText: 'Keep working hard',
      };
    case 'goal':
      return {
        text: 'Yohooo! You did it! You achieved one more goal. I am so proud of you!',
        points: 10,
        image: require('../../../assets/images/goal.png'),
        buttonText: 'Keep up the great job!',
      };
    case 'habit':
      return {
        text: 'Consistency is crucial to success! Keep building more helpful habits!',
        points: 1,
        image: require('../../../assets/images/habit.png'),
        buttonText: 'Continue rocking!',
      };
    default:
      return {
        text: 'I was told something great happened, congratulations!',
        image: require('../../../assets/images/habit.png'),
        buttonText: 'Keep up the great job!',
      };
  }
};

function CongratsModal({ type, visible, toggleVisibility }) {
  const currentContent = getContentByType(type);

  return (
    <Modal
      transparent
      animationType="fade"
      presentationStyle="overFullScreen"
      visible={visible}
      onRequestClose={() => toggleVisibility(false)}
    >
      <View style={styles.content}>
        <Text style={styles.text}>
          {currentContent.text}
        </Text>

        <Image style={styles.image} source={currentContent.image} />

        {currentContent.points && (
          <Text style={styles.points}>
            {`+${currentContent.points}`}
          </Text>
        )}

        <Button
          onPress={() => toggleVisibility(false)}
          buttonStyle={styles.button}
        >
          {currentContent.buttonText}
        </Button>
      </View>
    </Modal>
  );
}

export default CongratsModal;
