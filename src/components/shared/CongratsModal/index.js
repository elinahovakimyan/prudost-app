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
        text: 'The world is ready to celebrate your achievements with you!',
        image: require('../../../assets/images/reward_used.png'),
        points: null,
        buttonText: "Let's celebrate!",
      };
    case 'task':
      return {
        text: "Yaaay! You're on step closer to achieving your goal!",
        image: require('../../../assets/images/task_completed.png'),
        points: 2,
        buttonText: 'Keep working hard',
      };
    case 'goal':
      return {
        text: 'Yohooo, you did it! You achieved one more goal. So proud of you!',
        points: 10,
        image: require('../../../assets/images/goal_completed.png'),
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

function CongratsModal({ type, visible, onClose }) {
  const currentContent = getContentByType(type);

  return (
    <Modal
      transparent
      animationType="fade"
      presentationStyle="overFullScreen"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
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

          <Button onPress={onClose} buttonStyle={styles.button}>
            {currentContent.buttonText}
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default CongratsModal;
