import React, { useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

function CommentBox({
  body, username, date, goalTitle,
}) {
  const [isFullCommentShown, toggleComment] = useState(false);
  const getShortenedComment = () => `${body.substring(0, 120)}...`;
  const usernameCapital = username.split('')[0];

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLetter}>{usernameCapital.toUpperCase()}</Text>
      </View>

      <View style={styles.commentContainer}>
        <View style={styles.header}>
          <Text style={styles.username}>{username}</Text>
          {date ? <Text style={styles.date}>{moment(date).format('ll')}</Text> : null}
        </View>
        {body.length > 120
          ? (
            <Text style={styles.descriptionContainer}>
              <Text style={styles.commentText}>
                {!isFullCommentShown ? getShortenedComment() : body}
              </Text>
              {!isFullCommentShown
                ? (
                  <Text
                    style={styles.showMoreText}
                    onPress={() => toggleComment(true)}
                  >
                    {' '}
                    Show more
                  </Text>
                ) : (
                  <Text
                    style={styles.showMoreText}
                    onPress={() => toggleComment(false)}
                  >
                    {' '}
                    Show less
                  </Text>
                )}
            </Text>
          ) : (
            <Text style={styles.commentText}>{body}</Text>
          )}

        {goalTitle ? (
          <Text style={styles.goalTitle}>
            Goal:
            {' '}
            {goalTitle}
          </Text>
        ) : null}

      </View>
    </View>
  );
}

export default React.memo(CommentBox);
