const groups = [
  {
    id: 1,
    name: 'Hiking Enthusiasts',
    ageRange: [20, 35],
    interests: ['Hiking'],
    description: 'Join us for weekly hikes and outdoor adventures!',
    imageUrl: 'https://i.imgur.com/MGiqlnb.jpeg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-01',
      title: 'Mountain Trail Hike',
      confirmed: ['Carol', 'Frank', 'Alice'],
    },
  },
  {
    id: 2,
    name: 'Music Lovers Meetup',
    ageRange: [20, 40],
    interests: ['Music'],
    description: 'A group for people who love to play and listen to music.',
    imageUrl: 'https://i.imgur.com/Vx5Pa6n.jpeg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-05',
      title: 'Jazz Night',
      confirmed: ['Bob', 'Eve', 'Hank'],
    },
  },
  {
    id: 3,
    name: 'Art Workshop',
    ageRange: [20, 30],
    interests: ['Art'],
    description: 'Explore your creativity in our art workshops.',
    imageUrl: 'https://thumbs.dreamstime.com/b/delighted-person-receiving-surprise-art-workshop-surrounded-colorful-supplies-vibrant-studio-d-rendered-image-birthday-331443229.jpg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-03',
      title: 'Watercolor Basics',
      confirmed: ['Grace', 'Carol', 'Dave'],
    },
  },
  {
    id: 4,
    name: 'Cooking Classes',
    ageRange: [25, 40],
    interests: ['Cooking'],
    description: 'Learn new recipes and cooking techniques.',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/08/29/18/15/ai-generated-8221882_1280.jpg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-07',
      title: 'Italian Cuisine',
      confirmed: ['Alice', 'Bob', 'Grace'],
    },
  },
  {
    id: 5,
    name: 'Tech Talks',
    ageRange: [20, 40],
    interests: ['Tech'],
    description: 'Discuss the latest in technology and innovation.',
    imageUrl: 'https://c8.alamy.com/comp/2C87J8Y/online-tech-talks-concept-vector-illustration-2C87J8Y.jpg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-02',
      title: 'AI Revolution',
      confirmed: ['Eve', 'Hank', 'Bob'],
    },
  },
  {
    id: 6,
    name: 'Gaming Nights',
    ageRange: [18, 35],
    interests: ['Gaming'],
    description: 'Weekly gaming sessions for enthusiasts.',
    imageUrl: 'https://example.com/images/gaming.jpg', // Add your image URL here
    nextMeetup: {
      date: '2024-12-06',
      title: 'Board Game Bonanza',
      confirmed: ['Dave', 'Hank', 'Eve'],
    },
  },
  {
    id: 7,
    name: 'Photography Club',
    ageRange: [20, 35],
    interests: ['Photography'],
    description: 'Capture moments and improve your photography skills.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVUVlblrCXRbzVvHL5vWEs1belz5H2JfHmg&s', // Add your image URL here
    nextMeetup: {
      date: '2024-12-04',
      title: 'Cityscape Photography',
      confirmed: ['Frank', 'Carol', 'Alice'],
    },
  },
  // Add more groups as needed
];

export default groups;
