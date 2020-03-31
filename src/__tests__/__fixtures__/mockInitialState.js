export const mockInitialState = {
  tasks: {
    status: {
      isRecording: false,
      isPlaying: false,
    },
    last: {
      id: 7,
      createdAt: 1585666813942,
    },
    history: [
      {
        isSnapshot: true,
        data: {
          last: { id: 3, createdAt: 1585554146 },
          list: {
            '1': {
              id: 1,
              name: 'Item 1',
              description:
                'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
              createdAt: 337305600,
            },
            '2': {
              id: 2,
              name: 'Item 2',
              description:
                'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
              createdAt: 507686400,
            },
            '3': {
              id: 3,
              name: 'Item 3',
              description:
                'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
              createdAt: 1585554146,
            },
          },
        },
      },
      {
        isSnapshot: false,
        data: {
          type: 'CREATE',
          payload: {
            name: '1',
            description: '1',
            createdAt: 1585666746979,
          },
        },
      },
      {
        isSnapshot: false,
        data: {
          type: 'CREATE',
          payload: {
            name: '2',
            description: '2',
            createdAt: 1585666763317,
          },
        },
      },
      {
        isSnapshot: false,
        data: {
          type: 'CREATE',
          payload: {
            name: '5',
            description: '5',
            createdAt: 1585666795198,
          },
        },
      },
    ],
    list: {
      '1': {
        id: 1,
        name: 'Item 1',
        description:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
        createdAt: 337305600,
      },
      '2': {
        id: 2,
        name: 'Item 2',
        description:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
        createdAt: 507686400,
      },
      '3': {
        id: 3,
        name: 'Item 3',
        description:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
        createdAt: 1585554146,
      },
      '4': {
        id: 4,
        updatedAt: 1585666746979,
        name: '1',
        description: '1',
        createdAt: 1585666746979,
      },
      '5': {
        id: 5,
        updatedAt: 1585666763317,
        name: '2',
        description: '2',
        createdAt: 1585666763317,
      },
      '6': {
        id: 6,
        updatedAt: 1585666795198,
        name: '5',
        description: '5',
        createdAt: 1585666795198,
      },
      '7': {
        id: 7,
        updatedAt: 1585666813942,
        name: '6',
        description: '6',
        createdAt: 1585666813942,
      },
    },
  },
};
