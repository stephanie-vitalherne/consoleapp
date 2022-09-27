const drawerItems = [
  {
    id: 1,
    label: 'Home',
    icon: 'md-home',
    type: 'Ionicons',
  },
  {
    id: 2,
    category: 'Data Access',
    items: [
      {
        id: 2,
        label: 'Buckets',
        icon: 'bucket-outline',
        type: 'MaterialCommunityIcons',
      },
      {
        id: 3,
        label: 'Policies',
        icon: 'clipboard-notes',
        type: 'Foundation',
      },
      {
        id: 4,
        label: 'Access Keys',
        icon: 'key',
        type: 'Foundation',
      },
    ],
  },
  {
    id: 3,
    category: 'Users & Groups',
    items: [
      {
        id: 5,
        label: 'Groups',
        icon: 'account-group',
        type: 'MaterialCommunityIcons',
      },
      {
        id: 6,
        label: 'Roles',
        icon: 'hard-hat',
        type: 'FontAwesome5',
      },
      {
        id: 7,
        label: 'Users',
        icon: 'people',
        type: 'MaterialIcons',
      },
    ],
  },
  {
    id: 4,
    category: 'Applications & Settings',
    items: [
      {
        id: 8,
        label: 'Settings',
        icon: 'cog',
        type: 'FontAwesome5',
      },
      {
        id: 9,
        label: 'Billing',
        icon: 'attach-money',
        type: 'MaterialIcons',
      },
      {
        id: 10,
        label: 'Support',
        icon: 'question-circle',
        type: 'FontAwesome5',
      },
    ],
  },
  {
    id: 5,
    items: [
      {
        id: 11,
        label: 'Switch Role',
        icon: 'people',
        type: 'MaterialIcons',
      },
      {
        id: 12,
        label: 'Logout',
        icon: 'logout',
        type: 'MaterialIcons',
      },
    ],
  },
];

export default { drawerItems };
