import { AllFinished, Kuski, Team } from 'data/models';

export const schema = [
  `
  type DatabaseTime {
    AllFinishedIndex: Int
    TimeIndex: Int
    KuskiIndex: Int
    LevelIndex: Int
    Time: Int
    Apples: Int
    Driven: Int
    BattleIndex: Int
    MaxSpeed: Int
    ThrottleTime: Int
    BrakeTime: Int
    LeftVolt: Int
    RightVolt: Int
    SuperVolt: Int
    OneWheel: Int
    KuskiData: DatabaseKuski
  }
`,
];

export const queries = [
  `
    getTimes(LevelIndex: Int!): [DatabaseTime]
  `,
];

export const resolvers = {
  RootQuery: {
    async getTimes(parent, { LevelIndex }) {
      const times = await AllFinished.findAll({
        where: { LevelIndex },
        order: [['Time', 'ASC']],
        include: [
          {
            model: Kuski,
            as: 'KuskiData',
            include: [
              {
                model: Team,
                as: 'TeamData',
              },
            ],
          },
        ],
      });
      return times;
    },
  },
};
