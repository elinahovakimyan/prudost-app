import React from 'react';
import { connect } from 'react-redux';
import {
  View, ScrollView, Text, SafeAreaView, Image,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Pagination from '../../../../components/common/Pagination';
import Button from '../../../../components/common/Button';
import OptionCard from '../../../../components/common/OptionCard';
import AgePicker from '../../../../components/common/AgePicker';
// import { getProfile, updateProfile } from '../../redux/actions';
import {
  genderOptions, goalOptions,
} from './data';

import { styles } from './styles';
import { colors } from '../../../../utils';


class Quiz extends React.PureComponent {
  state = {
    activeIndex: 0,
    gender: null,
    age: null,
    goal: [],
  };

  componentDidMount() {
    // this.props.getProfile();
  }

  goToSlide = (activeIndex) => {
    this.setState({ activeIndex });
  };

  handleOptionPress = (key, value) => {
    const isMultipleChoice = key === 'goal' || key === 'bodyArea';

    if (isMultipleChoice) {
      this.setState((prevState) => {
        const val = prevState[key].includes(value)
          ? prevState[key].filter((v) => v !== value) : [...prevState[key], value];

        return ({
          [key]: val,
        });
      });
    } else {
      this.setState({
        [key]: value,
      });
    }
  }

  getDataByIndex = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return {
          key: 'gender',
          value: this.state.gender,
        };
      case 1:
        return {
          key: 'age',
          value: this.state.age,
        };
      case 2:
        return {
          key: 'primary_goal',
          value: this.state.goal,
        };
      default:
        return null;
    }
  }

  handleNext = () => {
    const { profile } = this.props;
    const { activeIndex } = this.state;
    console.log('profile :', profile);
    // 0 - gender
    // 1 - age
    // 2 - measurement
    // 3 - goal
    // 4 - body

    const dataToUpdate = this.getDataByIndex(activeIndex);

    if (dataToUpdate) {
      const dataKey = dataToUpdate.key;
      const dataValue = dataToUpdate.value;
      console.log('dataKey :', dataKey);
      console.log('dataValue :', dataValue);

      // this.props.updateProfile({ email: profile.email, [dataKey]: dataValue }, profile.id);
    }

    if (activeIndex < 2) {
      this.goToSlide(activeIndex + 1);
    } else {
      this.props.navigation.push('Tabs');
    }
  }

  getSlides =() => {
    const {
      gender, age, goal,
    } = this.state;
    return [
      {
        title: 'What’s your gender?',
        content: (
          <View style={styles.radioOptionsContainer}>
            {genderOptions.map((item) => (
              <OptionCard key={item.value} isSelected={gender === item.value} onPress={() => this.handleOptionPress('gender', item.value)}>
                <Image
                  style={styles.optionImage1}
                  source={item.value === 1 ? require('../../../../assets/icons/male.png') : require('../../../../assets/icons/female.png')}
                />
                <Text style={styles.optionWithImageText}>{item.label}</Text>
              </OptionCard>
            ))}
          </View>
        ),
        isButtonVisible: !!gender,
      },
      {
        title: 'What’s your age?',
        content: (
          <AgePicker age={age} onChange={(value) => this.handleOptionPress('age', value)} />
        ),
        isButtonVisible: !!age,
      },
      {
        title: 'What’s your primary goal?',
        content: (
          <ScrollView style={styles.buttonOptionsContainer}>
            {goalOptions.map((option) => (
              <Button
                key={option.value}
                textStyle={styles.buttonText}
                buttonStyle={goal.includes(option.value)
                  ? styles.activeButton : styles.passiveButton}
                onPress={() => this.handleOptionPress('goal', option.value)}
              >
                {option.label}
              </Button>
            ))}
          </ScrollView>
        ),
        isButtonVisible: !!goal.length,
      },
    ];
  }

  render() {
    const { activeIndex } = this.state;
    const prevDotStyle = { backgroundColor: colors.lightYellow };
    const slides = this.getSlides();
    const currentSlide = slides[activeIndex];

    return (
      <View style={styles.screen}>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.header}>
                {activeIndex !== 0
                  ? (
                    <TouchableOpacity onPress={() => this.goToSlide(activeIndex - 1)}>
                      <Image style={styles.backIcon} source={require('../../../../assets/icons/back.png')} />
                    </TouchableOpacity>
                  ) : <View />}

                <Pagination
                  slides={slides}
                  prevDotStyle={prevDotStyle}
                  activeIndex={this.state.activeIndex}
                  onPaginationPress={this.goToSlide}
                />
              </View>

              <Text style={styles.title}>{currentSlide.title}</Text>

              {currentSlide.content}
            </View>

            {currentSlide.isButtonVisible
              ? (
                <Button
                  theme="light"
                  buttonStyle={styles.nextButton}
                  onPress={this.handleNext}
                >
                  Next
                </Button>
              ) : null}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.App.profile,
});

const mapDispatchToProps = {
  // getProfile,
  // updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);
