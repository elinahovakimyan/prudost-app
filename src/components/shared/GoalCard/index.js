import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import moment from 'moment';

import styles from './styles';

function GoalCard({
  title, description, status, date,
}) {
  const [isFullDescriptionShown, toggleDescription] = useState(false);
  const getShortenedDescription = () => `${description.substring(0, 185)}...`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description.length > 185
        ? (
          <Text style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {!isFullDescriptionShown ? getShortenedDescription() : description}
            </Text>
            {!isFullDescriptionShown
              ? (
                <Text
                  style={styles.showMoreText}
                  onPress={() => toggleDescription(true)}
                >
                  {' '}
                  Show more
                </Text>
              ) : (
                <Text
                  style={styles.showMoreText}
                  onPress={() => toggleDescription(false)}
                >
                  {' '}
                  Show less
                </Text>
              )}
          </Text>
        ) : (
          <Text style={styles.description}>{description}</Text>
        )}
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <Text style={styles.status}>{status || 'Unknown'}</Text>
          <View style={styles.circle} />
          <Text style={styles.date}>{moment(date).format('DD MMM YYYY')}</Text>
        </View>

        <TouchableOpacity>
          <Text>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(GoalCard);
