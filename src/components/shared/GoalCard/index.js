import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';


function GoalCard({
  title, category, tasks, onPress,
}) {
  // const [isFullDescriptionShown, toggleDescription] = useState(false);
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

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.category, { borderColor: category.color, color: category.color }]}>
          {category.title || 'Unknown'}
        </Text>
      </View>

      {/* {getDescription()} */}

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

    </TouchableOpacity>
  );
}

export default React.memo(GoalCard);
