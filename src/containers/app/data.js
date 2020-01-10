export const goals = [
  {
    id: 1,
    title: 'Earn 1 million USD with Prudost',
    description: 'This is very important to prove myself and the world that I am not just a dreamer!',
    category: {
      title: '',
      icon: '',
    },
    deadline: new Date(8, 8, 2020),
    status: 'active',
    tasks: [
      {
        title: 'Design wireframes for the app',
        isCompleted: true,
      },
      {
        title: 'Develop frontend part of the app',
        isCompleted: false,
      },
      {
        title: 'Develop backend part of the app',
        isCompleted: false,
      },
      {
        title: 'Create Apple Developer account',
        isCompleted: false,
      },
      {
        title: 'Deploy the app to App Store',
        isCompleted: false,
      },
    ],
  },
];
