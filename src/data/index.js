import populateSeeds from './dataGenerator';
import users from './raw/users';
import articles from './raw/articles';
import notifications from './raw/notifications';
import conversations from './raw/conversations';
import cards from './raw/cards';

class DataProvider {
  getUser = (id = 1) => users.find((x) => x.id === id)

  getUsers = () => users

  getNotifications = () => notifications

  getArticles = (type = 'article') => articles.filter((x) => x.type === type)

  getArticle = (id) => articles.find((x) => x.id === id)

  getConversation = (userId = 1) => conversations.find((x) => x.withUser.id === userId)

  getChatList = () => conversations

  getComments(goalId = 1) {
    return this.getArticle(goalId).comments;
  }

  getCards = () => cards

  populateData = () => {
    populateSeeds();
  }
}

export const data = new DataProvider();
