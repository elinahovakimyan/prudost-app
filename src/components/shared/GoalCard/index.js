import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';


function GoalCard({
  title, category, onPress, tasks,
}) {
  // const [isExpanded, toggleCard] = useState(false);
  // const getShortenedDescription = () => `${description.substring(0, 30)}... `;

  // const getDescription = () => (description.length > 30
  //   ? (
  //     <Text style={styles.descriptionContainer}>
  //       <Text style={styles.description}>
  //         {!isFullDescriptionShown ? getShortenedDescription() : `${description} `}
  //       </Text>

  //       {!isFullDescriptionShown
  //         ? (
  //           <Text style={styles.showMoreText} onPress={() => toggleDescription(true)}>
  //             more
  //           </Text>
  //         ) : (
  //           <Text style={styles.showMoreText} onPress={() => toggleDescription(false)}>
  //             less
  //           </Text>
  //         )}
  //     </Text>
  //   ) : (
  //     <Text style={styles.description}>{description}</Text>
  //   ));
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const completedPercentage = (completedTasks.length / tasks.length) * 100;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.categoryContainer}>
            <Text style={[styles.category, { borderColor: category.color, color: category.color }]}>
              {category.title || 'Unknown'}
            </Text>
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={require('../../../assets/icons/next.png')} style={styles.icon} />
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${completedPercentage}%` }]} />
      </View>

      {/* {getDescription()} */}

      {/* {isExpanded
        ? (
          <View style={styles.footer}>
            <Text style={styles.task}>
              All Tasks
              {` (${tasks ? tasks.length : 0})`}
            </Text>
            <View style={styles.circle} />
            <Text style={styles.task}>
              Completed Tasks
              {` (${tasks ? tasks.length : 0})`}
            </Text>
          </View>
        ) : null} */}

    </TouchableOpacity>
  );
}

export default React.memo(GoalCard);
